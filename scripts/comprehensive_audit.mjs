import fs from 'fs';
import path from 'path';

const auditResults = JSON.parse(fs.readFileSync('scripts/audit_results.json', 'utf8'));

// Helper to inspect all text content and child components of a file
function inspectFrontendFile(absPath) {
  if (!absPath || !fs.existsSync(absPath)) return null;
  const content = fs.readFileSync(absPath, 'utf8');

  // Headings
  const headings = [];
  const hRegex = /<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi;
  let match;
  while ((match = hRegex.exec(content)) !== null) {
    const text = match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    if (text && !text.includes('{') && !headings.includes(text)) headings.push(text);
  }

  // Paragraphs
  const paragraphs = [];
  const pRegex = /<p[^>]*>([\s\S]*?)<\/p>/gi;
  while ((match = pRegex.exec(content)) !== null) {
    const text = match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    if (text && text.length > 5 && !text.includes('{') && !paragraphs.includes(text)) paragraphs.push(text);
  }

  // Buttons
  const buttons = [];
  const bRegex = /<button[^>]*>([\s\S]*?)<\/button>/gi;
  while ((match = bRegex.exec(content)) !== null) {
    const text = match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    if (text && !text.includes('{') && !buttons.includes(text)) buttons.push(text);
  }

  // Local child component imports
  const childComponents = [];
  const importRegex = /import\s+([A-Za-z0-9_,\s{}*]+)\s+from\s+['"]([^'"]+)['"]/g;
  while ((match = importRegex.exec(content)) !== null) {
    const rawImport = match[1].trim();
    const source = match[2].trim();
    if (source.startsWith('.') || source.startsWith('@/')) {
      let resolved = null;
      if (source.startsWith('@/')) {
        resolved = path.join(process.cwd(), source.replace('@/', 'src/'));
      } else {
        resolved = path.resolve(path.dirname(absPath), source);
      }
      
      const exts = ['.js', '.jsx', '.tsx', '.ts'];
      let actual = null;
      if (fs.existsSync(resolved) && fs.statSync(resolved).isFile()) actual = resolved;
      else {
        for (const ext of exts) {
          if (fs.existsSync(resolved + ext)) { actual = resolved + ext; break; }
          if (fs.existsSync(path.join(resolved, 'index' + ext))) { actual = path.join(resolved, 'index' + ext); break; }
        }
      }

      if (actual && !actual.includes('node_modules')) {
        const cleanNames = rawImport.replace(/[{}]/g, '').split(',').map(s => s.trim());
        for (const name of cleanNames) {
          if (name && !['ContactFormPopup', 'CaptchaModal', 'OtpModal', 'ReCAPTCHA', 'Script', 'Link', 'Image'].includes(name)) {
            // Check usage in JSX
            const usageRegex = new RegExp(`<${name}\\b`, 'g');
            if (usageRegex.test(content)) {
              childComponents.push({ name, file: actual });
            }
          }
        }
      }
    }
  }

  return {
    headings,
    paragraphs,
    buttons,
    childComponents
  };
}

const auditOutput = [];

for (const r of auditResults) {
  const routePath = r.path;
  const status = r.status;
  const filePath = r.filePath;
  const fileExists = r.fileExists;
  const cmsSections = r.cmsSections || [];

  const auditEntry = {
    index: r.index,
    routeId: r.routeId,
    path: routePath,
    status,
    feStatus: r.feStatus,
    filePath,
    fileExists,
    cmsSectionCount: cmsSections.length,
    cmsSections: cmsSections.map(s => ({ id: s.id, name: s.name, fieldCount: s.fieldCount, fieldKeys: s.fieldKeys })),
    frontendSections: [],
    missingSections: [],
    missingDetails: [],
    verdict: 'OK' // or 'MISSING'
  };

  // If archived with no file
  if (status === 'archived' && !fileExists) {
    auditEntry.verdict = 'ARCHIVED_NO_FILE';
    auditEntry.missingDetails.push('Route is archived in CMS with no physical page file.');
    auditOutput.push(auditEntry);
    continue;
  }

  if (!fileExists) {
    auditEntry.verdict = 'MISSING_FILE';
    auditEntry.missingDetails.push(`Physical page file does not exist at ${filePath}`);
    auditOutput.push(auditEntry);
    continue;
  }

  // Inspect page file
  const absPath = path.join(process.cwd(), filePath);
  const mainInspect = inspectFrontendFile(absPath);
  
  // Collect all sections on the frontend
  let feSections = [];
  if (mainInspect.childComponents.length > 0) {
    for (const comp of mainInspect.childComponents) {
      // If wrapper like Page or Client, inspect its children
      if (comp.name.toLowerCase().includes('client') || comp.name.toLowerCase().includes('page') || comp.name.toLowerCase().includes('wrapper')) {
        const sub = inspectFrontendFile(comp.file);
        if (sub && sub.childComponents.length > 0) {
          feSections.push(...sub.childComponents);
        } else {
          feSections.push(comp);
        }
      } else {
        feSections.push(comp);
      }
    }
  }

  // Deduplicate
  const seenComps = new Set();
  const dedupedFeSections = [];
  for (const s of feSections) {
    if (!seenComps.has(s.name)) {
      seenComps.add(s.name);
      dedupedFeSections.push(s);
    }
  }

  auditEntry.frontendSections = dedupedFeSections.map(s => s.name);

  // Compare Frontend Sections vs CMS Sections
  const cmsIds = cmsSections.map(s => s.id.toLowerCase());
  const cmsNames = cmsSections.map(s => s.name.toLowerCase());

  if (dedupedFeSections.length > 0) {
    for (const feSec of dedupedFeSections) {
      const nameLower = feSec.name.toLowerCase();
      const isMatched = cmsIds.some(id => id === nameLower || id.includes(nameLower) || nameLower.includes(id)) ||
                        cmsNames.some(name => name === nameLower || name.includes(nameLower) || nameLower.includes(name));
      if (!isMatched) {
        auditEntry.missingSections.push(feSec.name);
      }
    }
  }

  if (cmsSections.length === 0) {
    auditEntry.verdict = 'MISSING';
    auditEntry.missingDetails.push('Admin Edit Page displays 0 sections (empty content editor).');
  } else if (auditEntry.missingSections.length > 0) {
    auditEntry.verdict = 'MISSING';
    auditEntry.missingDetails.push(`The following frontend sections are missing from the Admin Panel: ${auditEntry.missingSections.join(', ')}`);
  }

  // Specific check for /company/director-message (missing main heading)
  if (routePath === '/company/director-message') {
    const sec = cmsSections[0];
    if (sec && !sec.fieldKeys.includes('heading')) {
      auditEntry.verdict = 'MISSING';
      auditEntry.missingDetails.push("Section exists ('Directormessage') but Main Heading <h1 Director's Message> is missing from editable fields.");
    }
  }

  // Specific check for /products/pc (missing DesktopLatestProduct)
  if (routePath === '/products/pc') {
    if (auditEntry.missingSections.includes('DesktopLatestProduct')) {
      auditEntry.verdict = 'MISSING';
      auditEntry.missingDetails.push("Frontend section 'DesktopLatestProduct' is missing from Admin Panel.");
    }
  }

  auditOutput.push(auditEntry);
}

fs.writeFileSync('scripts/audit_final_report.json', JSON.stringify(auditOutput, null, 2), 'utf8');
console.log('Complete audit generated for 37 routes.');
