import fs from 'fs';
import path from 'path';

const auditResults = JSON.parse(fs.readFileSync('scripts/audit_results.json', 'utf8'));

function resolvePath(importSource, currentFilePath) {
  if (importSource.startsWith('@/')) {
    return path.join(process.cwd(), importSource.replace('@/', 'src/'));
  }
  if (importSource.startsWith('.')) {
    return path.resolve(path.dirname(currentFilePath), importSource);
  }
  return null;
}

function findActualFile(basePath) {
  if (!basePath) return null;
  const exts = ['.js', '.jsx', '.tsx', '.ts'];
  if (fs.existsSync(basePath) && fs.statSync(basePath).isFile()) return basePath;
  for (const ext of exts) {
    if (fs.existsSync(basePath + ext)) return basePath + ext;
    if (fs.existsSync(path.join(basePath, 'index' + ext))) return path.join(basePath, 'index' + ext);
  }
  return null;
}

function extractChildComponents(filePath, visited = new Set()) {
  if (!filePath || visited.has(filePath) || !fs.existsSync(filePath)) return [];
  visited.add(filePath);

  const content = fs.readFileSync(filePath, 'utf8');
  const importMap = new Map();
  const importRegex = /import\s+([A-Za-z0-9_,\s{}*]+)\s+from\s+['"]([^'"]+)['"]/g;
  let match;
  while ((match = importRegex.exec(content)) !== null) {
    const rawImport = match[1].trim();
    const source = match[2].trim();
    if (source.startsWith('.') || source.startsWith('@/')) {
      const resolved = resolvePath(source, filePath);
      const file = findActualFile(resolved);
      if (file && !file.includes('node_modules')) {
        // Strip curly braces if any
        const names = rawImport.replace(/[{}]/g, '').split(',').map(s => s.trim());
        for (const name of names) {
          if (name) importMap.set(name, file);
        }
      }
    }
  }

  const results = [];
  for (const [compName, compFile] of importMap.entries()) {
    // Check if JSX uses this component
    const usageRegex = new RegExp(`<${compName}\\b`, 'g');
    if (usageRegex.test(content)) {
      // Ignore non-section utility components
      if (['ContactFormPopup', 'CaptchaModal', 'OtpModal', 'ReCAPTCHA', 'Script', 'Link', 'Image'].includes(compName)) {
        continue;
      }
      results.push({ name: compName, file: compFile });
      
      // If this is a wrapper component like Page or Client, recurse into it
      if (compName.toLowerCase().includes('page') || compName.toLowerCase().includes('client') || compName.toLowerCase().includes('wrapper')) {
        const deeper = extractChildComponents(compFile, visited);
        results.push(...deeper);
      }
    }
  }

  return results;
}

const detailedReport = [];

for (const r of auditResults) {
  let feSections = [];
  if (r.filePath && r.fileExists) {
    const absPath = path.join(process.cwd(), r.filePath);
    feSections = extractChildComponents(absPath);
  }

  const cmsSecs = r.cmsSections || [];
  
  detailedReport.push({
    index: r.index,
    routeId: r.routeId,
    path: r.path,
    status: r.status,
    feStatus: r.feStatus,
    filePath: r.filePath,
    fileExists: r.fileExists,
    feSections: feSections.map(s => ({ name: s.name, file: path.relative(process.cwd(), s.file) })),
    cmsSections: cmsSecs.map(s => ({ id: s.id, name: s.name, fields: s.fieldCount }))
  });
}

fs.writeFileSync('scripts/detailed_report.json', JSON.stringify(detailedReport, null, 2), 'utf8');
console.log('Saved detailed_report.json');
