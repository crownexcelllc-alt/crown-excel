import { NextResponse } from 'next/server';
import { getDb } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import { parsePageContent, updatePageFiles, cleanText } from '@/lib/cms-parser';
import path from 'path';
import fs from 'fs';
import { logActivity } from '@/lib/activity-logger';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_ADMIN_ORIGIN || '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
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
    return { role: "super_admin" };
  }
  try {
    const decoded = JSON.parse(Buffer.from(token, 'base64').toString('utf-8'));
    return decoded;
  } catch (e) {
    return null;
  }
}

// Default section templates
const SECTION_TEMPLATES = {
  hero: {
    sectionName: 'Hero Section',
    fields: {
      heading: { type: 'text', value: '', tag: 'h1', label: 'Main Heading' },
      subheading: { type: 'text', value: '', tag: 'h2', label: 'Sub Heading' },
      paragraph: { type: 'richtext', value: '', label: 'Description' },
      buttonText: { type: 'text', value: '', label: 'Button Text' },
      buttonLink: { type: 'url', value: '', label: 'Button Link' },
      image: { type: 'image', value: '', alt: '', title: '', label: 'Hero Image' },
    },
  },
  about: {
    sectionName: 'About Section',
    fields: {
      heading: { type: 'text', value: '', tag: 'h2', label: 'Section Heading' },
      paragraph: { type: 'richtext', value: '', label: 'About Text' },
      image: { type: 'image', value: '', alt: '', title: '', label: 'About Image' },
    },
  },
  services: {
    sectionName: 'Services Section',
    fields: {
      heading: { type: 'text', value: '', tag: 'h2', label: 'Section Heading' },
      subheading: { type: 'text', value: '', tag: 'h3', label: 'Sub Heading' },
      paragraph: { type: 'richtext', value: '', label: 'Description' },
    },
  },
  faq: {
    sectionName: 'FAQ Section',
    fields: {
      heading: { type: 'text', value: '', tag: 'h2', label: 'Section Heading' },
      items: { type: 'json', value: '[]', label: 'FAQ Items (JSON array)' },
    },
  },
  contact: {
    sectionName: 'Contact Section',
    fields: {
      heading: { type: 'text', value: '', tag: 'h2', label: 'Section Heading' },
      paragraph: { type: 'richtext', value: '', label: 'Description' },
      email: { type: 'text', value: '', label: 'Email' },
      phone: { type: 'text', value: '', label: 'Phone' },
      address: { type: 'richtext', value: '', label: 'Address' },
    },
  },
  custom: {
    sectionName: 'Custom Section',
    fields: {
      heading: { type: 'text', value: '', tag: 'h2', label: 'Heading' },
      paragraph: { type: 'richtext', value: '', label: 'Content' },
      image: { type: 'image', value: '', alt: '', title: '', label: 'Image' },
      buttonText: { type: 'text', value: '', label: 'Button Text' },
      buttonLink: { type: 'url', value: '', label: 'Button Link' },
    },
  },
};

// GET /api/cms/content → Get content for a page
export async function GET(request) {
  try {
    const url = new URL(request.url);
    const routeId = url.searchParams.get('routeId');
    const pathParam = url.searchParams.get('path');
    const websiteId = url.searchParams.get('websiteId') || 'default';
    const listAll = url.searchParams.get('all') === 'true';

    const db = await getDb();
    const collection = db.collection('cms_page_content');

    if (listAll) {
      const contents = await collection
        .find({ websiteId })
        .sort({ path: 1 })
        .toArray();

      // Also get routes
      const routes = await db.collection('cms_routes')
        .find({ websiteId, status: 'active' })
        .sort({ path: 1 })
        .toArray();

      const merged = routes.map(route => {
        const content = contents.find(c => c.routeId === route._id.toString());
        return {
          _id: route._id.toString(),
          path: route.path,
          type: route.type,
          hasContent: !!content,
          sectionsCount: content?.sections?.length || 0,
          status: content?.status || 'none',
          updatedAt: content?.updatedAt || null,
        };
      });

      return jsonResponse({ total: merged.length, pages: merged });
    }

    // Get single page content
    let filter = { websiteId };
    if (routeId) {
      const ids = [routeId];
      if (ObjectId.isValid(routeId)) {
        ids.push(new ObjectId(routeId));
      }
      filter.routeId = { $in: ids };
    } else if (pathParam) {
      filter.path = pathParam;
    } else {
      return jsonResponse({ error: 'routeId or path required' }, 400);
    }

    const content = await collection.findOne(filter);

    // Look up the route from the database to get its filePath
    let route = null;
    if (routeId && ObjectId.isValid(routeId)) {
      route = await db.collection('cms_routes').findOne({ _id: new ObjectId(routeId) });
    } else if (filter.path) {
      route = await db.collection('cms_routes').findOne({ path: filter.path, websiteId });
    }

    let parsedSections = [];
    if (route && route.filePath) {
      try {
        const absoluteFilePath = path.join(process.cwd(), route.filePath);
        parsedSections = parsePageContent(absoluteFilePath);
      } catch (parseErr) {
        console.error('Failed to parse page content dynamically:', parseErr);
      }
    }

    // Merge strategy: populate empty DB fields with static file content
    let mergedSections = [];
    if (content && Array.isArray(content.sections)) {
      mergedSections = [...content.sections];
      for (const parsedSec of parsedSections) {
        const existingSec = mergedSections.find(
          s => s.sectionId === parsedSec.sectionId || 
               s.sectionName?.toLowerCase() === parsedSec.sectionName?.toLowerCase()
        );

        if (!existingSec) {
          mergedSections.push(parsedSec);
        } else {
          existingSec.filePath = parsedSec.filePath;
          if (!existingSec.fields) existingSec.fields = {};
          
          for (const [key, parsedField] of Object.entries(parsedSec.fields || {})) {
            if (!existingSec.fields[key]) {
              existingSec.fields[key] = { ...parsedField };
            } else {
                const dbField = existingSec.fields[key];
                // Use parsed value if DB value is undefined or null
                if (dbField.value === undefined || dbField.value === null) {
                  dbField.value = parsedField.value;
                } else {
                  // If the clean texts are identical (meaning only HTML tags/links differ),
                  // sync the DB value with the value parsed from disk (which has the live links)
                  const cleanDbVal = (dbField.value || '').toString().replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
                  const cleanParsedVal = (parsedField.value || '').toString().replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
                  if (cleanDbVal.toLowerCase() === cleanParsedVal.toLowerCase()) {
                    dbField.value = parsedField.value;
                  }
                }
               // Always keep originalValue synced with the JSX file
               dbField.originalValue = parsedField.originalValue;
              // Sync metadata
              if (parsedField.isImport) {
                dbField.isImport = parsedField.isImport;
                dbField.varName = parsedField.varName;
              }
              if (parsedField.isInline) {
                dbField.isInline = parsedField.isInline;
              }
            }
          }
        }
      }
    } else {
      mergedSections = parsedSections;
    }

    const responseContent = {
      sections: mergedSections,
      status: content?.status || 'draft',
      version: content?.version || 1,
    };
    if (content && content._id) {
      responseContent._id = content._id.toString();
    }

    return jsonResponse({
      content: responseContent,
      isNew: !content,
      templates: Object.entries(SECTION_TEMPLATES).map(([id, tmpl]) => ({
        id,
        name: tmpl.sectionName,
        fieldCount: Object.keys(tmpl.fields).length,
      })),
    });
  } catch (err) {
    console.error('GET /api/cms/content error:', err);
    try {
      fs.writeFileSync(path.join(process.cwd(), 'debug-api.log'), `ERROR: ${err.message}\nSTACK: ${err.stack}`, 'utf-8');
    } catch (logErr) {}
    return jsonResponse({ error: 'Failed to fetch content' }, 500);
  }
}

// POST /api/cms/content → Save page content
export async function POST(request) {
  try {
    const user = getUserFromRequest(request);
    if (user && user.role === 'viewer') {
      return jsonResponse({ error: 'Access denied. Viewers cannot edit content.' }, 403);
    }
    const body = await request.json();
    const { routeId, path, websiteId = 'default', sections, status = 'draft' } = body;

    if (!routeId && !path) {
      return jsonResponse({ error: 'routeId or path required' }, 400);
    }

    const db = await getDb();
    const collection = db.collection('cms_page_content');
    const now = new Date().toISOString();

    const filter = { websiteId };
    if (routeId) {
      const ids = [routeId];
      if (ObjectId.isValid(routeId)) {
        ids.push(new ObjectId(routeId));
      }
      filter.routeId = { $in: ids };
    } else {
      filter.path = path;
    }

    const existing = await collection.findOne(filter);
    const version = existing ? (existing.version || 1) + 1 : 1;

    // Update JSX files on disk with the new values
    if (Array.isArray(sections)) {
      try {
        updatePageFiles(sections);
        
        // Update originalValue to match the newly written value in files
        for (const section of sections) {
          for (const field of Object.values(section.fields || {})) {
            field.originalValue = field.value;
          }
        }
      } catch (fileErr) {
        console.error('Failed to update page component files:', fileErr);
      }
    }

    const contentData = {
      routeId: routeId || null,
      path: path || null,
      websiteId,
      sections: Array.isArray(sections) ? sections : [],
      status,
      version,
      publishedAt: status === 'published' ? now : (existing?.publishedAt || null),
      updatedAt: now,
      createdAt: existing?.createdAt || now,
    };

    await collection.replaceOne(
      filter,
      contentData,
      { upsert: true }
    );

    await logActivity(request, 'update_content', path || `Route ID: ${routeId}`, { status, version });

    return jsonResponse({ ok: true, version });
  } catch (err) {
    console.error('POST /api/cms/content error:', err);
    return jsonResponse({ error: 'Failed to save content' }, 500);
  }
}

// PUT /api/cms/content → Add a section template to a page
export async function PUT(request) {
  try {
    const user = getUserFromRequest(request);
    if (user && user.role === 'viewer') {
      return jsonResponse({ error: 'Access denied. Viewers cannot add content.' }, 403);
    }
    const body = await request.json();
    const { routeId, path, websiteId = 'default', templateId, customName } = body;

    if (!templateId || !SECTION_TEMPLATES[templateId]) {
      return jsonResponse({ error: 'Invalid template ID' }, 400);
    }

    const template = SECTION_TEMPLATES[templateId];
    const newSection = {
      sectionId: `${templateId}_${Date.now()}`,
      sectionName: customName || template.sectionName,
      order: 0,
      fields: { ...template.fields },
    };

    const db = await getDb();
    const collection = db.collection('cms_page_content');

    const filter = { websiteId };
    if (routeId) {
      const ids = [routeId];
      if (ObjectId.isValid(routeId)) {
        ids.push(new ObjectId(routeId));
      }
      filter.routeId = { $in: ids };
    } else if (path) {
      filter.path = path;
    }

    const existing = await collection.findOne(filter);

    if (existing) {
      newSection.order = (existing.sections?.length || 0) + 1;
      await collection.updateOne(
        filter,
        {
          $push: { sections: newSection },
          $set: { updatedAt: new Date().toISOString() },
        }
      );
    } else {
      newSection.order = 1;
      await collection.insertOne({
        routeId: routeId || null,
        path: path || null,
        websiteId,
        sections: [newSection],
        status: 'draft',
        version: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
    }

    await logActivity(request, 'update_content', path || `Route ID: ${routeId}`, { action: 'add_section', sectionName: newSection.sectionName });

    return jsonResponse({ ok: true, section: newSection });
  } catch (err) {
    console.error('PUT /api/cms/content error:', err);
    return jsonResponse({ error: 'Failed to add section' }, 500);
  }
}
