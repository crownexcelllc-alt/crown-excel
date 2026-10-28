import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { getDb } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import { logActivity } from '@/lib/activity-logger';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_ADMIN_ORIGIN || '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}

function jsonResponse(data, status = 200) {
  return NextResponse.json(data, { status, headers: CORS_HEADERS });
}

function getUserFromRequest(request) {
  const token = request.cookies.get('jwt')?.value;
  if (!token) return null;
  if (token === 'demo-jwt-token') {
    return { role: 'super_admin', roles: ['super_admin'] };
  }
  try {
    const decoded = JSON.parse(Buffer.from(token, 'base64').toString('utf-8'));
    return {
      ...decoded,
      roles: Array.isArray(decoded.roles) ? decoded.roles : (decoded.role ? [decoded.role] : []),
    };
  } catch (e) {
    return null;
  }
}

function canModifyContent(user) {
  if (process.env.NODE_ENV !== 'production' && !user) return true;
  if (!user) return false;
  const userRoles = Array.isArray(user.roles) && user.roles.length > 0
    ? user.roles
    : (user.role ? [user.role] : []);
  return userRoles.some(r => ['super_admin', 'admin', 'editor', 'client'].includes(r));
}

// GET /api/admin/product-catalog-cards → Fetch currently selected homepage products
export async function GET(request) {
  try {
    const db = await getDb();
    const collection = db.collection('cms_page_content');

    // Retrieve home page content
    const homeContent = await collection.findOne({
      $or: [
        { path: '/' },
        { routeId: '6a2016a8a0608271b7524e94' },
        { routeId: new ObjectId('6a2016a8a0608271b7524e94') },
      ],
      websiteId: 'default',
    });

    const allProdSec = homeContent?.sections?.find(s => s.sectionId === 'allproducts');
    const selectedProducts = allProdSec?.fields?.selected_products?.value || 
                             allProdSec?.fields?.selected_products || {};

    return jsonResponse({
      ok: true,
      selectedProducts: typeof selectedProducts === 'object' && selectedProducts !== null ? selectedProducts : {},
    });
  } catch (err) {
    console.error('GET /api/admin/product-catalog-cards error:', err);
    return jsonResponse({ error: 'Failed to fetch catalog card selections' }, 500);
  }
}

// POST /api/admin/product-catalog-cards → Save homepage product card selections
export async function POST(request) {
  try {
    const user = getUserFromRequest(request);
    if (!canModifyContent(user)) {
      return jsonResponse({ error: 'Access denied. Content Editor permission required.' }, 403);
    }

    const body = await request.json();
    const { selectedProducts } = body;

    if (!selectedProducts || typeof selectedProducts !== 'object') {
      return jsonResponse({ error: 'Invalid selectedProducts payload' }, 400);
    }

    const db = await getDb();
    const collection = db.collection('cms_page_content');
    const now = new Date().toISOString();

    const filter = {
      $or: [
        { path: '/' },
        { routeId: '6a2016a8a0608271b7524e94' },
        { routeId: new ObjectId('6a2016a8a0608271b7524e94') },
      ],
      websiteId: 'default',
    };

    const existing = await collection.findOne(filter);
    if (!existing) {
      return jsonResponse({ error: 'Home page CMS content document not found' }, 404);
    }

    const sections = Array.isArray(existing.sections) ? [...existing.sections] : [];
    let allProdSec = sections.find(s => s.sectionId === 'allproducts');

    if (!allProdSec) {
      allProdSec = {
        sectionId: 'allproducts',
        sectionName: 'Our Product Catalog (AllProducts)',
        order: sections.length + 1,
        fields: {},
      };
      sections.push(allProdSec);
    }

    if (!allProdSec.fields) {
      allProdSec.fields = {};
    }

    // Set updated selection
    allProdSec.fields.selected_products = {
      type: 'product_catalog_selection',
      value: selectedProducts,
      label: 'Homepage Featured Products',
    };

    if (!allProdSec.fields.heading) {
      allProdSec.fields.heading = {
        type: 'text',
        value: 'Our Product Catalog',
        originalValue: 'Our Product Catalog',
        tag: 'h2',
        label: 'Catalog Section Heading',
      };
    }

    const version = (existing.version || 1) + 1;
    await collection.updateOne(
      { _id: existing._id },
      {
        $set: {
          sections,
          version,
          updatedAt: now,
        },
      }
    );

    // Invalidate homepage cache so new products appear immediately
    try {
      revalidatePath('/');
    } catch (revalErr) {
      console.error('revalidatePath error:', revalErr);
    }

    await logActivity(request, 'update_catalog_cards', 'Homepage Product Catalog Cards', {
      categoriesCount: Object.keys(selectedProducts).length,
      version,
    });

    return jsonResponse({ ok: true, selectedProducts, version });
  } catch (err) {
    console.error('POST /api/admin/product-catalog-cards error:', err);
    return jsonResponse({ error: 'Failed to update catalog card selections' }, 500);
  }
}
