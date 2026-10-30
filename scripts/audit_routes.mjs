import { MongoClient, ObjectId } from 'mongodb';
import fs from 'fs';
import path from 'path';

const MONGO_URI = 'mongodb+srv://admin:admin@cluster0.ac1fznk.mongodb.net/?appName=Cluster0';
const BASE_URL = 'http://localhost:2999';

async function runAudit() {
  const client = new MongoClient(MONGO_URI);
  await client.connect();
  const db = client.db('crownexceladmin');

  const routes = await db.collection('cms_routes').find({}).sort({ path: 1 }).toArray();
  console.log(`Auditing ${routes.length} routes...`);

  const results = [];

  for (let i = 0; i < routes.length; i++) {
    const r = routes[i];
    const routeId = r._id.toString();
    const routePath = r.path;
    const status = r.status;
    const filePath = r.filePath;

    process.stdout.write(`[${i + 1}/${routes.length}] ${routePath} ... `);

    // 1. Check frontend HTTP status
    let feStatus = null;
    try {
      if (routePath.includes('[')) {
        feStatus = 'dynamic-pattern';
      } else {
        const feRes = await fetch(`${BASE_URL}${routePath}`, { 
          cache: 'no-store',
          signal: AbortSignal.timeout(4000)
        });
        feStatus = feRes.status;
      }
    } catch (e) {
      feStatus = `ERR: ${e.name === 'TimeoutError' ? 'Timeout' : e.message}`;
    }

    // 2. Query CMS API for content
    let cmsSections = [];
    let cmsErr = null;
    try {
      const cmsRes = await fetch(`${BASE_URL}/api/cms/content?routeId=${routeId}`, { 
        cache: 'no-store',
        signal: AbortSignal.timeout(4000)
      });
      if (cmsRes.ok) {
        const cmsData = await cmsRes.json();
        cmsSections = cmsData.content?.sections || [];
      } else {
        cmsErr = `CMS HTTP ${cmsRes.status}`;
      }
    } catch (e) {
      cmsErr = e.name === 'TimeoutError' ? 'Timeout' : e.message;
    }

    // 3. Query DB document directly
    const dbDoc = await db.collection('cms_page_content').findOne({
      $or: [
        { routeId: routeId },
        { routeId: r._id },
        { path: routePath }
      ]
    });

    // 4. Check file on disk
    let fileExists = false;
    let fileLines = 0;
    if (filePath) {
      const absPath = path.join(process.cwd(), filePath);
      if (fs.existsSync(absPath)) {
        fileExists = true;
        const content = fs.readFileSync(absPath, 'utf8');
        fileLines = content.split('\n').length;
      }
    }

    console.log(`FE:${feStatus} | CMS_Secs:${cmsSections.length} | File:${fileExists ? 'OK' : 'MISSING'}`);

    results.push({
      index: i + 1,
      routeId,
      path: routePath,
      name: r.name || routePath,
      status,
      filePath,
      fileExists,
      fileLines,
      feStatus,
      cmsSectionCount: cmsSections.length,
      cmsSections: cmsSections.map(s => ({
        id: s.sectionId,
        name: s.sectionName,
        fieldCount: Object.keys(s.fields || {}).length,
        fieldKeys: Object.keys(s.fields || {})
      })),
      hasDbDoc: !!dbDoc,
      dbSectionCount: dbDoc?.sections?.length || 0,
      dbSections: (dbDoc?.sections || []).map(s => ({
        id: s.sectionId,
        name: s.sectionName,
        fieldCount: Object.keys(s.fields || {}).length,
        fieldKeys: Object.keys(s.fields || {})
      }))
    });
  }

  await client.close();

  fs.writeFileSync('scripts/audit_results.json', JSON.stringify(results, null, 2), 'utf8');
  console.log('\nAudit complete! Saved detailed results to scripts/audit_results.json');
}

runAudit().catch(console.error);
