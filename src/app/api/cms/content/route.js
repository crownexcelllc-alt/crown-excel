import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
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

function canModifyContent(user) {
  if (!user) return false;
  const userRoles = Array.isArray(user.roles) && user.roles.length > 0
    ? user.roles
    : (user.role ? [user.role] : []);
  return userRoles.some(r => ['super_admin', 'admin', 'editor', 'client'].includes(r));
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

    // Merge strategy: live client-side page JSX structure is the ground truth for section presence & order
    let mergedSections = [];
    if (parsedSections.length > 0) {
      const existingSections = (content && Array.isArray(content.sections)) ? content.sections : [];

      mergedSections = parsedSections.map((parsedSec, idx) => {
        const sec = { ...parsedSec, order: idx + 1 };
        const dbSec = existingSections.find(
          s => s.sectionId === parsedSec.sectionId || 
               s.sectionName?.toLowerCase() === parsedSec.sectionName?.toLowerCase() ||
               (parsedSec.sectionId === 'smartsolutions' && (s.sectionId === 'hero' || s.sectionName?.toLowerCase().includes('hero')))
        );

        if (dbSec && dbSec.fields) {
          if (dbSec.sectionName && !dbSec.sectionName.startsWith('Untitled')) {
            sec.sectionName = dbSec.sectionName;
          }

          const mergedFields = {};
          for (const [key, parsedField] of Object.entries(parsedSec.fields || {})) {
            let dbField = dbSec.fields[key];

            // Image matching fallback: if key not directly in dbSec.fields, find matching image field
            if (!dbField && parsedField.type === 'image') {
              const dbImgKey = Object.keys(dbSec.fields).find(k => 
                (k === 'image_banner' || k === 'image_smartsolutionsbanner' || k === 'image' || k.startsWith('image')) &&
                dbSec.fields[k]?.value
              );
              if (dbImgKey) {
                dbField = dbSec.fields[dbImgKey];
              }
            }

            if (dbField && dbField.value !== undefined && dbField.value !== null) {
              mergedFields[key] = {
                ...parsedField,
                value: dbField.value,
                originalValue: parsedField.originalValue,
                alt: dbField.alt || parsedField.alt || '',
                title: dbField.title || parsedField.title || '',
              };
            } else {
              mergedFields[key] = { ...parsedField };
            }
          }

          // Preserve any extra fields from dbSec (excluding unwanted artificial fields)
          for (const [dbKey, dbField] of Object.entries(dbSec.fields || {})) {
            if (['subheading', 'buttonText', 'buttonLink', 'button2Text', 'button2Link'].includes(dbKey)) {
              continue;
            }
            if (!mergedFields[dbKey] && dbField && dbField.value !== undefined) {
              mergedFields[dbKey] = { ...dbField };
            }
          }

          sec.fields = mergedFields;
        }

        // Special handling for Homepage Hero section (smartsolutions / hero)
        if (sec.sectionId === 'smartsolutions' || sec.sectionId === 'hero') {
          sec.sectionName = 'Hero Section (Smart Solutions)';

          // Deduplicate image keys in hero section so admin sees only one Hero Banner Image input
          if (sec.fields.image_smartsolutionsbanner && sec.fields.image_banner) {
            sec.fields.image_banner.value = sec.fields.image_smartsolutionsbanner.value || sec.fields.image_banner.value;
            sec.fields.image_banner.alt = sec.fields.image_smartsolutionsbanner.alt || sec.fields.image_banner.alt || '';
            delete sec.fields.image_smartsolutionsbanner;
          }

          // Find the image field and label it clearly
          const imgKey = Object.keys(sec.fields).find(k => k.startsWith('image'));
          if (imgKey) {
            sec.fields[imgKey].label = 'Hero Banner Image';
          }
        }

        // Special handling for Homepage Product Catalog (allproducts)
        if (sec.sectionId === 'allproducts') {
          sec.sectionName = 'Our Product Catalog (AllProducts)';

          const cleanedFields = {};
          const headingVal = dbSec?.fields?.heading?.value || dbSec?.fields?.heading_2?.value || sec.fields?.heading?.value || 'Our Product Catalog';
          cleanedFields.heading = {
            type: 'text',
            value: headingVal === 'All Products' ? 'Our Product Catalog' : headingVal,
            originalValue: 'Our Product Catalog',
            tag: 'h2',
            label: 'Catalog Section Heading'
          };

          // Ensure selected_products field is preserved and structured for the UI
          const dbSelection = dbSec?.fields?.selected_products?.value || dbSec?.fields?.selected_products;
          cleanedFields.selected_products = {
            type: 'product_catalog_selection',
            value: (dbSelection && typeof dbSelection === 'object') ? dbSelection : {},
            label: 'Homepage Featured Products'
          };

          sec.fields = cleanedFields;
        }

        return sec;
      });

      // Preserve any custom sections manually added by the user in the CMS that contain actual content
      const customDbSections = existingSections.filter(
        s => !s.filePath && 
             !parsedSections.some(p => p.sectionId === s.sectionId || p.sectionName?.toLowerCase() === s.sectionName?.toLowerCase()) &&
             Object.values(s.fields || {}).some(f => f.value && f.value.toString().trim() !== '')
      );
      for (const customSec of customDbSections) {
        mergedSections.push({ ...customSec, order: mergedSections.length + 1 });
      }
    } else if (content && Array.isArray(content.sections)) {
      mergedSections = content.sections;
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
    if (!canModifyContent(user)) {
      return jsonResponse({ error: 'Access denied. Content Editor permission required.' }, 403);
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

    let finalPath = path;
    if (!finalPath && routeId) {
      try {
        const routeDoc = await db.collection('cms_routes').findOne({
          _id: ObjectId.isValid(routeId) ? new ObjectId(routeId) : routeId
        });
        if (routeDoc?.path) {
          finalPath = routeDoc.path;
        }
      } catch (rErr) {
        console.error('Failed to resolve route path:', rErr);
      }
    }

    const isHomepage = finalPath === '/' || path === '/' || routeId === '6a2016a8a0608271b7524e94';

    // Update JSX files on disk with the new values (never for the homepage, which is dynamically rendered)
    if (Array.isArray(sections) && !isHomepage) {
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
      path: finalPath || null,
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

    await logActivity(request, 'update_content', finalPath || `Route ID: ${routeId}`, { status, version });

    // Trigger on-demand cache revalidation
    if (finalPath) {
      try {
        revalidatePath(finalPath);
        if (finalPath !== '/') {
          revalidatePath('/');
        }
      } catch (revalErr) {
        console.error('revalidatePath error in POST /api/cms/content:', revalErr);
      }
    }

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
    if (!canModifyContent(user)) {
      return jsonResponse({ error: 'Access denied. Content Editor permission required.' }, 403);
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
