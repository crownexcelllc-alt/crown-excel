import { NextResponse } from 'next/server';
import { getDb } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import crypto from 'crypto';
import { logActivity } from '@/lib/activity-logger';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_ADMIN_ORIGIN || '*',
  'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}

function jsonResponse(data, status = 200) {
  return NextResponse.json(data, { status, headers: CORS_HEADERS });
}

function getUserFromRequest(request) {
  const token = request.cookies.get("jwt")?.value;
  if (!token) return null;
  if (token === "demo-jwt-token") {
    return { role: "super_admin", roles: ["super_admin"] };
  }
  try {
    const decoded = JSON.parse(Buffer.from(token, 'base64').toString('utf-8'));
    return {
      ...decoded,
      roles: Array.isArray(decoded.roles) ? decoded.roles : (decoded.role ? [decoded.role] : [])
    };
  } catch (e) {
    return null;
  }
}

function isSuperAdmin(user) {
  if (!user) return false;
  if (user.role === 'super_admin') return true;
  if (Array.isArray(user.roles) && user.roles.includes('super_admin')) return true;
  return false;
}

// Simple password hashing (in production, use bcrypt)
function hashPassword(password) {
  return crypto.createHash('sha256').update(password + 'cms_salt_2024').digest('hex');
}

const ROLE_PERMISSIONS = {
  super_admin: {
    canEditContent: true, canEditSeo: true, canUploadMedia: true,
    canManageUsers: true, canManageWebsites: true, canScanRoutes: true,
    canViewActivity: true
  },
  admin: {
    canEditContent: true, canEditSeo: true, canUploadMedia: true,
    canManageUsers: false, canManageWebsites: true, canScanRoutes: true,
    canViewActivity: true
  },
  client: {
    canEditContent: true, canEditSeo: true, canUploadMedia: true,
    canManageUsers: false, canManageWebsites: false, canScanRoutes: false,
    canViewActivity: false
  },
  seo: {
    canEditContent: false, canEditSeo: true, canUploadMedia: false,
    canManageUsers: false, canManageWebsites: false, canScanRoutes: false,
    canViewActivity: false
  },
  // ── NEW: Blog Manager ─────────────────────────────────────────────────────
  blog: {
    canEditContent: true, canEditSeo: false, canUploadMedia: true,
    canManageUsers: false, canManageWebsites: false, canScanRoutes: false,
    canViewActivity: false
  },
  editor: {
    canEditContent: true, canEditSeo: false, canUploadMedia: true,
    canManageUsers: false, canManageWebsites: false, canScanRoutes: false,
    canViewActivity: false
  },
  viewer: {
    canEditContent: false, canEditSeo: false, canUploadMedia: false,
    canManageUsers: false, canManageWebsites: false, canScanRoutes: false,
    canViewActivity: false
  },
};

function mergePermissions(rolesList = []) {
  const merged = {
    canEditContent: false,
    canEditSeo: false,
    canUploadMedia: false,
    canManageUsers: false,
    canManageWebsites: false,
    canScanRoutes: false,
    canViewActivity: false,
  };
  rolesList.forEach(r => {
    const p = ROLE_PERMISSIONS[r];
    if (p) {
      Object.keys(p).forEach(k => {
        if (p[k]) merged[k] = true;
      });
    }
  });
  return merged;
}

// GET /api/cms/users
export async function GET() {
  try {
    const db = await getDb();
    const users = await db.collection('cms_users')
      .find({})
      .sort({ createdAt: -1 })
      .project({ passwordHash: 0 }) // Never expose password hash
      .toArray();

    const normalized = users.map(u => {
      const uRoles = Array.isArray(u.roles) && u.roles.length > 0
        ? u.roles
        : (u.role ? [u.role] : ['editor']);
      const primaryRole = u.role || uRoles[0];
      return {
        ...u,
        _id: u._id.toString(),
        role: primaryRole,
        roles: uRoles,
        assignedWebsites: (u.assignedWebsites || []).map(id => id.toString()),
      };
    });

    return jsonResponse({ total: normalized.length, users: normalized });
  } catch (err) {
    console.error('GET /api/cms/users error:', err);
    return jsonResponse({ error: 'Failed to fetch users' }, 500);
  }
}

// POST /api/cms/users → Create new user
export async function POST(request) {
  try {
    const user = getUserFromRequest(request);
    if (!isSuperAdmin(user)) {
      return jsonResponse({ error: 'Access denied. Only super admin can manage users.' }, 403);
    }
    const body = await request.json();
    const { name, email, password, role = 'editor', roles, assignedWebsites = [] } = body;

    if (!name || !email || !password) {
      return jsonResponse({ error: 'name, email, and password are required' }, 400);
    }

    const selectedRoles = Array.isArray(roles) && roles.length > 0
      ? roles.filter(r => ROLE_PERMISSIONS[r])
      : (role && ROLE_PERMISSIONS[role] ? [role] : ['editor']);

    if (selectedRoles.length === 0) {
      return jsonResponse({ error: 'At least one valid role must be selected' }, 400);
    }

    const primaryRole = selectedRoles.includes('super_admin') ? 'super_admin' : selectedRoles[0];

    const db = await getDb();
    const collection = db.collection('cms_users');

    // Check duplicate
    const existing = await collection.findOne({ email });
    if (existing) {
      return jsonResponse({ error: 'User with this email already exists' }, 409);
    }

    const doc = {
      name,
      email,
      passwordHash: hashPassword(password),
      role: primaryRole,
      roles: selectedRoles,
      assignedWebsites,
      permissions: mergePermissions(selectedRoles),
      status: 'active',
      lastLoginAt: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const result = await collection.insertOne(doc);

    await logActivity(request, 'create_user', doc.name, { email: doc.email, role: doc.role, roles: doc.roles, id: result.insertedId.toString() });

    // Don't return passwordHash
    const { passwordHash, ...safeDoc } = doc;

    return jsonResponse({
      ok: true,
      user: { ...safeDoc, _id: result.insertedId.toString() },
    }, 201);
  } catch (err) {
    console.error('POST /api/cms/users error:', err);
    return jsonResponse({ error: 'Failed to create user' }, 500);
  }
}

// PATCH /api/cms/users → Update user
export async function PATCH(request) {
  try {
    const user = getUserFromRequest(request);
    if (!isSuperAdmin(user)) {
      return jsonResponse({ error: 'Access denied. Only super admin can manage users.' }, 403);
    }
    const body = await request.json();
    const { id, role, roles, assignedWebsites, status, name, email, password } = body;

    if (!id) return jsonResponse({ error: 'id is required' }, 400);

    const db = await getDb();
    const updateFields = { updatedAt: new Date().toISOString() };

    if (name !== undefined && name.trim()) updateFields.name = name.trim();
    if (email !== undefined && email.trim()) updateFields.email = email.trim().toLowerCase();
    if (password !== undefined && password.trim()) {
      updateFields.passwordHash = hashPassword(password.trim());
    }
    if (status !== undefined) updateFields.status = status;
    if (roles !== undefined || role !== undefined) {
      let selectedRoles = [];
      if (Array.isArray(roles)) {
        selectedRoles = roles.filter(r => ROLE_PERMISSIONS[r]);
      } else if (typeof role === 'string' && ROLE_PERMISSIONS[role]) {
        selectedRoles = [role];
      }
      if (selectedRoles.length > 0) {
        const primaryRole = selectedRoles.includes('super_admin') ? 'super_admin' : selectedRoles[0];
        updateFields.role = primaryRole;
        updateFields.roles = selectedRoles;
        updateFields.permissions = mergePermissions(selectedRoles);
      }
    }
    if (assignedWebsites !== undefined) updateFields.assignedWebsites = assignedWebsites;

    const targetUser = await db.collection('cms_users').findOne({ _id: new ObjectId(id) });
    const targetName = targetUser ? targetUser.name : id;

    const result = await db.collection('cms_users').updateOne(
      { _id: new ObjectId(id) },
      { $set: updateFields }
    );

    if (result.matchedCount === 0) {
      return jsonResponse({ error: 'User not found' }, 404);
    }

    if (status !== undefined) {
      await logActivity(request, 'toggle_user_status', targetName, { id, status });
    } else {
      await logActivity(request, 'update_user', targetName, { id, role: updateFields.role, roles: updateFields.roles, name, email });
    }

    return jsonResponse({ ok: true });
  } catch (err) {
    console.error('PATCH /api/cms/users error:', err);
    return jsonResponse({ error: 'Failed to update user' }, 500);
  }
}

// DELETE /api/cms/users → Delete user
export async function DELETE(request) {
  try {
    const user = getUserFromRequest(request);
    if (!isSuperAdmin(user)) {
      return jsonResponse({ error: 'Access denied. Only super admin can manage users.' }, 403);
    }
    const url = new URL(request.url);
    const id = url.searchParams.get('id');
    if (!id) return jsonResponse({ error: 'id is required' }, 400);

    const db = await getDb();
    const targetUser = await db.collection('cms_users').findOne({ _id: new ObjectId(id) });
    const targetName = targetUser ? targetUser.name : id;

    await db.collection('cms_users').deleteOne({ _id: new ObjectId(id) });

    await logActivity(request, 'delete_user', targetName, { id });

    return jsonResponse({ ok: true });
  } catch (err) {
    console.error('DELETE /api/cms/users error:', err);
    return jsonResponse({ error: 'Failed to delete user' }, 500);
  }
}
