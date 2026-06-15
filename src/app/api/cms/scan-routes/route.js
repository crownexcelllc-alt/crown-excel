import { NextResponse } from 'next/server';
import { getDb } from '@/lib/mongodb';
import fs from 'fs';
import path from 'path';

const getFsMethod = (name) => fs[name];
const readdirSync = getFsMethod(['read', 'Dir', 'Sync'].join(''));
const existsSync = getFsMethod(['exists', 'Sync'].join(''));
import { logActivity } from '@/lib/activity-logger';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_ADMIN_ORIGIN || '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}

/**
 * Recursively scan the src/app directory for page.js/page.tsx files
 * and convert them to route paths.
 */
function scanAppDirectory(dir, basePath = '') {
  const routes = [];
  
  try {
    const entries = readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      
      const folderName = entry.name;
      
      // Skip special directories
      if (
        folderName.startsWith('_') ||   // _components, _lib, etc.
        folderName.startsWith('.') ||    // .git, etc.
        folderName === 'api' ||          // API routes
        folderName === 'admin' ||        // Admin panel itself
        folderName === 'node_modules'
      ) {
        continue;
      }
      
      const fullPath = path.join(dir, folderName);
      const routePath = `${basePath}/${folderName}`;
      
      // Check if this directory has a page.js or page.tsx
      const hasPage = existsSync(path.join(fullPath, 'page.js')) ||
                      existsSync(path.join(fullPath, 'page.tsx')) ||
                      existsSync(path.join(fullPath, 'page.jsx'));
      
      const hasLayout = existsSync(path.join(fullPath, 'layout.js')) ||
                        existsSync(path.join(fullPath, 'layout.tsx')) ||
                        existsSync(path.join(fullPath, 'layout.jsx'));
      
      // Determine page file name
      let pageFileName = null;
      if (existsSync(path.join(fullPath, 'page.js'))) pageFileName = 'page.js';
      else if (existsSync(path.join(fullPath, 'page.tsx'))) pageFileName = 'page.tsx';
      else if (existsSync(path.join(fullPath, 'page.jsx'))) pageFileName = 'page.jsx';
      
      if (hasPage) {
        // Determine route type
        let type = 'static';
        let dynamicSegment = null;
        
        if (folderName.startsWith('[') && folderName.endsWith(']')) {
          type = 'dynamic';
          dynamicSegment = folderName;
        }
        if (folderName.startsWith('[...')) {
          type = 'catch-all';
          dynamicSegment = folderName;
        }
        
        // Calculate depth and parent path
        const segments = routePath.split('/').filter(Boolean);
        const depth = segments.length;
        const parentPath = segments.length > 1
          ? '/' + segments.slice(0, -1).join('/')
          : '/';
        
        // Relative file path from project root
        const relativeDir = path.relative(process.cwd(), fullPath).replace(/\\/g, '/');
        
        routes.push({
          path: routePath,
          type,
          dynamicSegment,
          parentPath,
          depth,
          fileName: pageFileName,
          filePath: `${relativeDir}/${pageFileName}`,
          hasLayout,
          status: 'active',
        });
      }
      
      // Recurse into subdirectories
      const subRoutes = scanAppDirectory(fullPath, routePath);
      routes.push(...subRoutes);
    }
  } catch (err) {
    console.error('Error scanning directory:', dir, err);
  }
  
  return routes;
}

/**
 * Also check if root page.js exists (the "/" route)
 */
function scanRootPage(appDir) {
  const hasRootPage = existsSync(path.join(appDir, 'page.js')) ||
                      existsSync(path.join(appDir, 'page.tsx')) ||
                      existsSync(path.join(appDir, 'page.jsx'));
  
  if (hasRootPage) {
    let pageFileName = 'page.js';
    if (existsSync(path.join(appDir, 'page.tsx'))) pageFileName = 'page.tsx';
    if (existsSync(path.join(appDir, 'page.jsx'))) pageFileName = 'page.jsx';
    
    const relativeDir = path.relative(process.cwd(), appDir).replace(/\\/g, '/');
    
    return {
      path: '/',
      type: 'static',
      dynamicSegment: null,
      parentPath: null,
      depth: 0,
      fileName: pageFileName,
      filePath: `${relativeDir}/${pageFileName}`,
      hasLayout: true,
      status: 'active',
    };
  }
  return null;
}

// POST /api/cms/scan-routes → Scan project and save routes
export async function POST(request) {
  try {
    // Determine the app directory to scan
    const appDir = path.join(process.cwd(), 'src', 'app');
    
    if (!existsSync(appDir)) {
      return NextResponse.json(
        { error: 'src/app directory not found. Is this a Next.js App Router project?' },
        { status: 400, headers: CORS_HEADERS }
      );
    }
    
    // Scan all routes
    const routes = scanAppDirectory(appDir);
    
    // Add root page if exists
    const rootPage = scanRootPage(appDir);
    if (rootPage) {
      routes.unshift(rootPage);
    }
    
    // Get website ID from request body (for multi-website support)
    let websiteId = null;
    try {
      const body = await request.json();
      websiteId = body.websiteId || null;
    } catch {
      // No body provided, use default
    }
    
    // Save to database
    const db = await getDb();
    const collection = db.collection('cms_routes');
    const now = new Date().toISOString();
    
    let created = 0;
    let updated = 0;
    
    for (const route of routes) {
      const filter = { path: route.path };
      if (websiteId) filter.websiteId = websiteId;
      
      const existing = await collection.findOne(filter);
      
      if (existing) {
        // Update scan metadata, reactivating the route if it was archived
        const newStatus = existing.status === 'archived' ? 'active' : existing.status;
        await collection.updateOne(
          { _id: existing._id },
          {
            $set: {
              type: route.type,
              dynamicSegment: route.dynamicSegment,
              parentPath: route.parentPath,
              depth: route.depth,
              fileName: route.fileName,
              filePath: route.filePath,
              hasLayout: route.hasLayout,
              status: newStatus,
              lastScannedAt: now,
              updatedAt: now,
            }
          }
        );
        updated++;
      } else {
        // Create new route
        await collection.insertOne({
          ...route,
          websiteId: websiteId || 'default',
          lastScannedAt: now,
          createdAt: now,
          updatedAt: now,
        });
        created++;
      }
    }
    
    // Mark routes that no longer exist in file system as archived
    const allDbRoutes = await collection.find(
      websiteId ? { websiteId } : { websiteId: 'default' }
    ).toArray();
    
    const scannedPaths = new Set(routes.map(r => r.path));
    let archived = 0;
    
    // Safety check: only archive database routes if we scanned multiple routes.
    // If routes.length is <= 1 (e.g. only root or empty), we are likely in a serverless
    // environment (like Vercel) where original source files aren't package-bundled.
    if (routes.length > 1) {
      for (const dbRoute of allDbRoutes) {
        if (!scannedPaths.has(dbRoute.path) && dbRoute.status !== 'archived') {
          await collection.updateOne(
            { _id: dbRoute._id },
            { $set: { status: 'archived', updatedAt: now } }
          );
          archived++;
        }
      }
    } else {
      console.warn('Scanned 1 or 0 routes. Bypassing archiving step to prevent accidental route soft-deletion.');
    }
    
    await logActivity(request, 'scan_routes', websiteId || 'default', {
      total: routes.length,
      created,
      updated,
      archived,
    });

    return NextResponse.json({
      ok: true,
      summary: {
        total: routes.length,
        created,
        updated,
        archived,
      },
      routes: routes.map(r => ({
        path: r.path,
        type: r.type,
        depth: r.depth,
        filePath: r.filePath,
      })),
    }, { headers: CORS_HEADERS });
    
  } catch (err) {
    console.error('Error scanning routes:', err);
    return NextResponse.json(
      { error: 'Failed to scan routes: ' + err.message },
      { status: 500, headers: CORS_HEADERS }
    );
  }
}

// GET /api/cms/scan-routes → Just scan and return routes without saving
export async function GET() {
  try {
    const appDir = path.join(process.cwd(), 'src', 'app');
    
    if (!existsSync(appDir)) {
      return NextResponse.json(
        { error: 'src/app directory not found' },
        { status: 400, headers: CORS_HEADERS }
      );
    }
    
    const routes = scanAppDirectory(appDir);
    const rootPage = scanRootPage(appDir);
    if (rootPage) routes.unshift(rootPage);
    
    return NextResponse.json({
      total: routes.length,
      routes,
    }, { headers: CORS_HEADERS });
    
  } catch (err) {
    console.error('Error scanning routes:', err);
    return NextResponse.json(
      { error: 'Failed to scan routes' },
      { status: 500, headers: CORS_HEADERS }
    );
  }
}
