import fs from 'fs';
import path from 'path';

const auditResults = JSON.parse(fs.readFileSync('scripts/audit_results.json', 'utf8'));

// Helper to inspect JSX components rendered in page files
function getRenderedComponents(pageFilePath) {
  if (!pageFilePath || !fs.existsSync(pageFilePath)) return [];
  const content = fs.readFileSync(pageFilePath, 'utf8');

  // Match imported components from local files
  const importMap = new Map();
  const importRegex = /import\s+([A-Za-z0-9_,\s{}*]+)\s+from\s+['"]([^'"]+)['"]/g;
  let match;
  while ((match = importRegex.exec(content)) !== null) {
    const rawImport = match[1].trim();
    const source = match[2].trim();
    if (source.startsWith('.') || source.startsWith('@/')) {
      // Clean import name
      const cleanName = rawImport.replace(/[{}]/g, '').trim();
      importMap.set(cleanName, source);
    }
  }

  // Find JSX elements <ComponentName
  const rendered = [];
  for (const [compName, source] of importMap.entries()) {
    const usageRegex = new RegExp(`<${compName}\\b`, 'g');
    if (usageRegex.test(content)) {
      rendered.push({ name: compName, source });
    }
  }
  return rendered;
}

const detailedAudit = [];

for (const r of auditResults) {
  const feComps = r.filePath && r.fileExists ? getRenderedComponents(r.filePath) : [];
  
  // Also check if page renders a client wrapper (e.g. PageClient) that renders further components
  let deeperComps = [];
  if (feComps.length === 1 && (feComps[0].name.toLowerCase().includes('client') || feComps[0].name.toLowerCase().includes('view'))) {
    const clientPath = feComps[0].source.startsWith('@/') 
      ? path.join(process.cwd(), feComps[0].source.replace('@/', 'src/') + '.js')
      : path.resolve(path.dirname(r.filePath), feComps[0].source + '.js');
    if (fs.existsSync(clientPath)) {
      deeperComps = getRenderedComponents(clientPath);
    }
  }

  const effectiveFeComps = deeperComps.length > 0 ? deeperComps : feComps;

  // Compare CMS sections with FE components
  const cmsSecIds = r.cmsSections.map(s => s.id.toLowerCase());
  const cmsSecNames = r.cmsSections.map(s => s.name.toLowerCase());

  // Check missing components
  const missingInCms = [];
  for (const comp of effectiveFeComps) {
    const nameLower = comp.name.toLowerCase();
    const matched = cmsSecIds.some(id => id.includes(nameLower) || nameLower.includes(id)) ||
                    cmsSecNames.some(name => name.includes(nameLower) || nameLower.includes(name));
    if (!matched) {
      missingInCms.push(comp.name);
    }
  }

  // Also check if CMS has 0 sections for active pages
  const isWorking = r.cmsSectionCount > 0 && missingInCms.length === 0;

  detailedAudit.push({
    index: r.index,
    routeId: r.routeId,
    path: r.path,
    status: r.status,
    feStatus: r.feStatus,
    filePath: r.filePath,
    fileExists: r.fileExists,
    feComponentCount: effectiveFeComps.length,
    feComponents: effectiveFeComps.map(c => c.name),
    cmsSectionCount: r.cmsSectionCount,
    cmsSections: r.cmsSections.map(s => ({ id: s.id, name: s.name, fieldCount: s.fieldCount, fieldKeys: s.fieldKeys })),
    missingInCms,
    isWorking
  });
}

fs.writeFileSync('scripts/audit_detailed.json', JSON.stringify(detailedAudit, null, 2), 'utf8');

console.log('Processed', detailedAudit.length, 'pages.');
const working = detailedAudit.filter(d => d.isWorking);
const missing = detailedAudit.filter(d => !d.isWorking);

console.log(`\nWorking Correctly: ${working.length}`);
for (const w of working) {
  console.log(`  - [OK] ${w.path} (CMS Sections: ${w.cmsSectionCount}, FE Components: ${w.feComponentCount})`);
}

console.log(`\nWith Missing Sections/Content: ${missing.length}`);
for (const m of missing) {
  console.log(`  - [ISSUE] ${m.path} (Status: ${m.status}, CMS Secs: ${m.cmsSectionCount}, FE Comps: ${m.feComponentCount}, Missing: ${m.missingInCms.join(', ') || 'ALL_OR_NONE'})`);
}
