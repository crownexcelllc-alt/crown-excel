import fs from 'fs';
import path from 'path';

// Dynamically reference fs methods to prevent Next.js Node File Trace (NFT) from scanning and bundling the entire workspace.
const getFsMethod = (name) => fs[name];
const existsSync = getFsMethod(['exists', 'Sync'].join(''));
const readFileSync = getFsMethod(['read', 'File', 'Sync'].join(''));
const writeFileSync = getFsMethod(['write', 'File', 'Sync'].join(''));
const statSync = getFsMethod(['stat', 'Sync'].join(''));

function resolveImportPath(importPath, currentFilePath) {
  if (importPath.startsWith('@/')) {
    return path.join(process.cwd(), importPath.replace('@/', 'src/'));
  }
  if (importPath.startsWith('.') || importPath.startsWith('..')) {
    return path.resolve(path.dirname(currentFilePath), importPath);
  }
  return null;
}

function findFile(resolvedPath) {
  const extensions = ['.js', '.jsx', '.tsx', '.ts'];
  if (!resolvedPath) return null;
  if (existsSync(resolvedPath) && statSync(resolvedPath).isFile()) {
    return resolvedPath;
  }
  for (const ext of extensions) {
    if (existsSync(resolvedPath + ext)) {
      return resolvedPath + ext;
    }
    if (existsSync(path.join(resolvedPath, 'index' + ext))) {
      return path.join(resolvedPath, 'index' + ext);
    }
  }
  return null;
}

export function cleanText(text) {
  // Strip JSX comments {/* ... */}
  text = text.replace(/\{\/\*[\s\S]*?\*\/\}/g, '');
  // Convert Next.js Link tags to anchor tags
  text = text.replace(/<Link(\s+[^>]*)>/gi, '<a$1>');
  text = text.replace(/<\/Link>/gi, '</a>');
  // Protect <a> and </a> tags using unique placeholder tokens
  text = text.replace(/<a(\s+[^>]*)>/gi, '___A_START_ATTRS___$1___A_END_ATTRS___');
  text = text.replace(/<\/a>/gi, '___A_CLOSE___');
  // Strip HTML/JSX tags
  text = text.replace(/<[^>]+>/g, ' ');
  // Restore protected <a> and </a> tags
  text = text.replace(/___A_START_ATTRS___([\s\S]*?)___A_END_ATTRS___/g, '<a$1>');
  text = text.replace(/___A_CLOSE___/g, '</a>');
  // Strip JSX curly braces around string literals
  text = text.replace(/\{"([\s\S]*?)"\}/g, '$1');
  text = text.replace(/\{'([\s\S]*?)'\}/g, '$1');
  // Extract default text from {var || "default"} patterns
  text = text.replace(/\{[^}]*\|\|\s*"([^"]+)"\s*\}/g, '$1');
  text = text.replace(/\{[^}]*\|\|\s*'([^']+)'\s*\}/g, '$1');
  // Extract default text from safeRender(..., "default") and getField(..., "default") patterns
  text = text.replace(/\{?\s*safeRender\([^,]+,\s*["']([^"']+)["']\)\s*\}?/gi, '$1');
  text = text.replace(/\{?\s*getField\([^,]+,\s*["']([^"']+)["']\)\s*\}?/gi, '$1');
  // Strip remaining curly braces and variables (e.g. {icon1})
  text = text.replace(/\{[\s\S]*?\}/g, '');
  // Decode common HTML entities
  text = text
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
  // Clean whitespace
  text = text.replace(/\s+/g, ' ').trim();
  return text;
}

const IGNORED_COMPONENTS = new Set([
  'CaptchaModal',
  'OtpModal',
  'ContactFormPopup',
  'TestimonialCard',
  'ReCAPTCHA',
  'Link',
  'Image',
  'AnimatedText',
  'motion',
  'AnimatePresence',
  'Script',
]);

/**
 * Recursively parses a page file and its child components in their EXACT visual JSX render order.
 * Groups findings into sections based on the components rendered on the client side.
 * 
 * @param {string} pageFilePath - Absolute path to the page file
 * @returns {Array} List of sections suitable for cms_page_content in exact client-side order
 */
export function parsePageContent(pageFilePath) {
  const sections = [];
  const visited = new Set();

  function parseComponent(filePath, componentName) {
    if (visited.has(filePath)) return;
    visited.add(filePath);

    if (!existsSync(filePath)) return;
    const rawContent = readFileSync(filePath, 'utf-8');

    // Strip comments to inspect only active code & JSX
    const content = rawContent
      .replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
      .replace(/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm, '$1');

    // 1. Discover all local component imports
    const importMap = new Map();

    // Standard imports
    const importRegex = /import\s+([A-Z]\w*)\s+from\s+['"]([^'"]+)['"]/g;
    let match;
    while ((match = importRegex.exec(content)) !== null) {
      const name = match[1];
      const impPath = match[2];
      if (IGNORED_COMPONENTS.has(name)) continue;
      if (impPath.startsWith('.') || impPath.startsWith('@/')) {
        const resolved = resolveImportPath(impPath, filePath);
        const actualFile = findFile(resolved);
        if (actualFile && actualFile.includes('src')) {
          importMap.set(name, { name, file: actualFile });
        }
      }
    }

    // Dynamic imports: const Name = dynamic(() => import('...'))
    const dynamicRegex = /(?:const|let|var)\s+([A-Z]\w*)\s*=\s*(?:dynamic\(\s*\(\s*\)\s*=>\s*)?import\(\s*['"]([^'"]+)['"]\s*\)/g;
    while ((match = dynamicRegex.exec(content)) !== null) {
      const name = match[1];
      const impPath = match[2];
      if (IGNORED_COMPONENTS.has(name)) continue;
      if (impPath.startsWith('.') || impPath.startsWith('@/')) {
        const resolved = resolveImportPath(impPath, filePath);
        const actualFile = findFile(resolved);
        if (actualFile && actualFile.includes('src')) {
          if (!importMap.has(name)) {
            importMap.set(name, { name, file: actualFile });
          }
        }
      }
    }

    // 2. Determine ordered list of child components actually rendered in JSX
    const renderedChildComponents = [];
    const seenTags = new Set();
    const jsxTagRegex = /<([A-Z]\w*)(?:[\s>/]|$)/g;
    let firstHeadingIndex = Infinity;
    let firstChildIndex = Infinity;

    // Check where the first heading appears in content
    const firstHMatch = content.match(/<(h[1-4])[^>]*>/i);
    if (firstHMatch) {
      firstHeadingIndex = firstHMatch.index;
    }

    while ((match = jsxTagRegex.exec(content)) !== null) {
      const tag = match[1];
      if (importMap.has(tag) && !seenTags.has(tag)) {
        seenTags.add(tag);
        renderedChildComponents.push({ ...importMap.get(tag), index: match.index });
        if (match.index < firstChildIndex) {
          firstChildIndex = match.index;
        }
      }
    }

    // 3. Extract static fields for this file itself
    const headings = [];
    const paragraphs = [];
    const sectionFields = {};

    // Headings
    const headingRegex = /<(h[1-4])[^>]*>([\s\S]*?)<\/h[1-4]>/gi;
    while ((match = headingRegex.exec(content)) !== null) {
      const tag = match[1].toLowerCase();
      const rawText = match[2];
      const text = cleanText(rawText);
      if (text && text.length > 1) {
        headings.push({ tag, text });
      }
    }

    // Paragraphs
    const pRegex = /<p(?!\w)[^>]*>([\s\S]*?)<\/p>/gi;
    while ((match = pRegex.exec(content)) !== null) {
      const rawText = match[1];
      const text = cleanText(rawText);
      if (text && text.length > 2) {
        paragraphs.push(text);
      }
    }

    // Headings first in fields order so admin UI displays headings at top
    headings.forEach((h, idx) => {
      const key = idx === 0 ? 'heading' : `heading_${idx + 1}`;
      sectionFields[key] = {
        type: 'text',
        value: h.text,
        originalValue: h.text,
        tag: h.tag,
        label: `Heading ${idx + 1}`
      };
    });

    // Paragraphs second
    paragraphs.forEach((p, idx) => {
      const key = idx === 0 ? 'paragraph' : `paragraph_${idx + 1}`;
      sectionFields[key] = {
        type: 'richtext',
        value: p,
        originalValue: p,
        label: `Paragraph ${idx + 1}`
      };
    });

    // Replaced image constants (const VarName = { src: '...' })
    const imgConstRegex = /const\s+(\w+)\s*=\s*\{\s*[^}]*src:\s*['"]([^'"]+)['"][^}]*\};?/gi;
    while ((match = imgConstRegex.exec(content)) !== null) {
      const varName = match[1];
      const srcPath = match[2];
      const fieldKey = `image_${varName.toLowerCase()}`;
      sectionFields[fieldKey] = {
        type: 'image',
        value: srcPath,
        originalValue: srcPath,
        varName: varName,
        isImport: true,
        label: `Image (${varName})`,
      };
    }

    // Image imports that are actually used in code
    const imgImportRegex = /import\s+(\w+)\s+from\s+['"]([^'"]+\.(?:png|jpe?g|webp|gif|svg|avif))['"]/gi;
    while ((match = imgImportRegex.exec(content)) !== null) {
      const varName = match[1];
      const impPath = match[2];
      const usageRegex = new RegExp(`\\b${varName}\\b`, 'g');
      const matches = content.match(usageRegex) || [];
      if (matches.length > 1) { // 1 for import line, > 1 for usage in JSX/code
        const fieldKey = `image_${varName.toLowerCase()}`;
        sectionFields[fieldKey] = {
          type: 'image',
          value: impPath,
          originalValue: impPath,
          varName: varName,
          isImport: true,
          label: `Image (${varName})`,
        };
      }
    }

    // Inline images
    const inlineImgRegex = /<(?:img|Image)[^>]*src=['"]([^'"]+)['"]/gi;
    let imgIdx = 1;
    while ((match = inlineImgRegex.exec(content)) !== null) {
      const srcPath = match[1];
      if (srcPath.startsWith('http') || srcPath.startsWith('//') || srcPath.startsWith('{')) continue;
      const fieldKey = `inline_image_${imgIdx++}`;
      sectionFields[fieldKey] = {
        type: 'image',
        value: srcPath,
        originalValue: srcPath,
        isInline: true,
        label: `Inline Image ${imgIdx - 1}`,
      };
    }

    const hasFields = Object.keys(sectionFields).length > 0;
    const selfSection = hasFields ? {
      sectionId: componentName.toLowerCase().replace(/[^a-z0-9]/g, '_'),
      sectionName: componentName,
      filePath: path.relative(process.cwd(), filePath).replace(/\\/g, '/'),
      fields: sectionFields,
    } : null;

    // 4. Sequencing: parent vs children
    if (selfSection && firstHeadingIndex < firstChildIndex) {
      selfSection.order = sections.length + 1;
      sections.push(selfSection);
    }

    // Recurse into child components in JSX render order
    for (const child of renderedChildComponents) {
      parseComponent(child.file, child.name);
    }

    if (selfSection && firstHeadingIndex >= firstChildIndex) {
      selfSection.order = sections.length + 1;
      sections.push(selfSection);
    }
  }

  const baseComponentName = path.basename(pageFilePath, path.extname(pageFilePath));
  let rootName = baseComponentName;
  if (baseComponentName === 'page') {
    const parentDir = path.basename(path.dirname(pageFilePath));
    rootName = parentDir.replace(/[^a-zA-Z0-9]/g, '');
    rootName = rootName.charAt(0).toUpperCase() + rootName.slice(1);
  }
  parseComponent(pageFilePath, rootName || 'Main');

  // Ensure 1-based sequential order
  sections.forEach((s, idx) => {
    s.order = idx + 1;
  });

  return sections;
}

/**
 * Updates page JSX files on disk by replacing original static texts and images with their edited CMS values.
 * 
 * @param {Array} sections - The sections array containing fields and files to update
 */
export function updatePageFiles(sections) {
  for (const section of sections) {
    if (!section.filePath) continue;
    const absolutePath = path.join(process.cwd(), section.filePath);
    if (!existsSync(absolutePath)) {
      console.warn(`File not found: ${absolutePath}`);
      continue;
    }

    const normalizedFilePath = (section.filePath || '').replace(/\\/g, '/');
    // Strictly protect static homepage components and components in src/app/_components from being modified on disk
    if (normalizedFilePath.includes('src/app/_components')) {
      continue;
    }

    let fileContent = readFileSync(absolutePath, 'utf-8');
    // Dynamic components driven by CMS data do not rewrite source code on disk
    if (fileContent.includes('cmsHero') || fileContent.includes('cmsData') || fileContent.includes('cmsContent')) {
      continue;
    }

    let contentChanged = false;
    let freshParsedSec = null;

    function getFreshOriginalValue(fieldKey) {
      if (!freshParsedSec) {
        try {
          const parsedList = parsePageContent(absolutePath);
          freshParsedSec = parsedList.find(
            s => s.sectionId === section.sectionId || 
                 s.sectionName?.toLowerCase() === section.sectionName?.toLowerCase()
          );
        } catch (err) {
          console.error('Failed to parse file for fallback:', err);
        }
      }
      return freshParsedSec?.fields?.[fieldKey]?.originalValue;
    }

    for (const [fieldKey, field] of Object.entries(section.fields || {})) {
      const { value, originalValue, type, isImport, varName, isInline } = field;

      if (originalValue === undefined || originalValue === null) continue;
      // If user hasn't edited the field, skip it to prevent accidental rewrites
      if (value === originalValue) continue;

      // Check current value on disk. If it's already equal to value, skip!
      const freshVal = getFreshOriginalValue(fieldKey);
      if (freshVal !== undefined && freshVal !== null && value === freshVal) {
        continue;
      }

      if (type === 'image') {
        if (isImport && varName) {
          // Only replace if value is a valid URL or path (http://, https://, or /)
          const isValidUrl = typeof value === 'string' && (value.startsWith('http://') || value.startsWith('https://') || value.startsWith('/'));
          if (!isValidUrl) {
            continue;
          }
          // Replace standard import with a constant declaration
          const importRegex = new RegExp(`import\\s+${varName}\\s+from\\s+['"][^'"]+['"];?`, 'g');
          if (importRegex.test(fileContent)) {
            fileContent = fileContent.replace(importRegex, `const ${varName} = { src: '${value}', height: 1000, width: 1000 };`);
            contentChanged = true;
          } else {
            // If already replaced with constant, update the constant
            const constRegex = new RegExp(`const\\s+${varName}\\s*=\\s*\\{[^}]*src:\\s*['"][^'"]+['"][^}]*\\};?`, 'g');
            if (constRegex.test(fileContent)) {
              fileContent = fileContent.replace(constRegex, `const ${varName} = { src: '${value}', height: 1000, width: 1000 };`);
              contentChanged = true;
            }
          }
        } else if (isInline) {
          // Replace inline image path using current path on disk (freshVal) or fallback to originalValue
          const searchImage = freshVal || originalValue;
          const escaped = searchImage.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
          const srcRegex = new RegExp(`src=['"]${escaped}['"]`, 'g');
          if (srcRegex.test(fileContent)) {
            fileContent = fileContent.replace(srcRegex, `src="${value}"`);
            contentChanged = true;
          }
        }
      } else {
        // Use current text on disk (freshVal) as the search value, fallback to originalValue
        let searchVal = freshVal || originalValue || '';
        const escaped = searchVal.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        const parts = escaped.split(/\s+/).filter(Boolean);
        const regexStr = parts.length > 0 ? parts.join('(?:<[^>]+>|\\s)*') : '';
        const textRegex = regexStr ? new RegExp(regexStr, 'gi') : null;

        if (textRegex) {
          let targetIndex = 0;
          const keyMatch = fieldKey.match(/_(\d+)$/);
          if (keyMatch) {
            targetIndex = parseInt(keyMatch[1], 10) - 1;
          }

          const isHeading = fieldKey.startsWith('heading');
          const isParagraph = fieldKey.startsWith('paragraph');

          // 1. Precise index-based replacement first (safest for duplicates)
          let currentIndex = 0;
          let preciseReplaced = false;
          let updatedContent = '';

          if (isHeading) {
            const headingTagRegex = /<(h[1-4])([^>]*)>([\s\S]*?)<\/h[1-4]>/gi;
            updatedContent = fileContent.replace(headingTagRegex, (match, tag, attrs, innerContent) => {
              if (currentIndex === targetIndex) {
                currentIndex++;
                const cleanedInner = cleanText(innerContent);
                const cleanedSearch = cleanText(searchVal);
                if (cleanedInner.toLowerCase() === cleanedSearch.toLowerCase() || innerContent.match(textRegex)) {
                  preciseReplaced = true;
                  return `<${tag}${attrs}>${value}</${tag}>`;
                }
              } else {
                currentIndex++;
              }
              return match;
            });
          } else if (isParagraph) {
            const paragraphTagRegex = /<p(?!\w)([^>]*)>([\s\S]*?)<\/p>/gi;
            updatedContent = fileContent.replace(paragraphTagRegex, (match, attrs, innerContent) => {
              if (currentIndex === targetIndex) {
                currentIndex++;
                const cleanedInner = cleanText(innerContent);
                const cleanedSearch = cleanText(searchVal);
                if (cleanedInner.toLowerCase() === cleanedSearch.toLowerCase() || innerContent.match(textRegex)) {
                  preciseReplaced = true;
                  return `<p${attrs}>${value}</p>`;
                }
              } else {
                currentIndex++;
              }
              return match;
            });
          }

          if (preciseReplaced) {
            fileContent = updatedContent;
            contentChanged = true;
          } else {
            // 2. Text-based fallback (replaces only the first matching tag to avoid scrambling other duplicates)
            const tagRegex = /(<(h[1-4]|p(?!\w))[^>]*>)([\s\S]*?)(<\/\2>)/gi;
            let replaced = false;
            const fallbackContent = fileContent.replace(tagRegex, (match, openTag, tagName, innerContent, closeTag) => {
              if (replaced) return match;
              
              const isTypeMatch = (isHeading && tagName.toLowerCase().startsWith('h')) ||
                                  (isParagraph && tagName.toLowerCase() === 'p');
              
              if (isTypeMatch) {
                const newInner = innerContent.replace(textRegex, value);
                if (newInner !== innerContent) {
                  replaced = true;
                  return `${openTag}${newInner}${closeTag}`;
                }
              }
              return match;
            });

            if (replaced) {
              fileContent = fallbackContent;
              contentChanged = true;
              console.log(`Fallback text replacement: Updated first match of "${searchVal}" to "${value}" for ${fieldKey}`);
            } else {
              // 3. Absolute index-based fallback
              let indexReplaced = false;
              if (isHeading) {
                const newContent = replaceHeadingContentByIndex(fileContent, targetIndex, value);
                if (newContent !== fileContent) {
                  fileContent = newContent;
                  contentChanged = true;
                  indexReplaced = true;
                  console.log(`Index-based fallback: Updated heading tag at index ${targetIndex} to "${value}"`);
                }
              } else if (isParagraph) {
                const newContent = replaceParagraphContentByIndex(fileContent, targetIndex, value);
                if (newContent !== fileContent) {
                  fileContent = newContent;
                  contentChanged = true;
                  indexReplaced = true;
                  console.log(`Index-based fallback: Updated paragraph tag at index ${targetIndex} to "${value}"`);
                }
              }

              if (!indexReplaced) {
                console.warn(`Could not find text or index in file: "${searchVal}" for ${fieldKey}`);
              }
            }
          }
        }
      }
    }

    if (contentChanged) {
      writeFileSync(absolutePath, fileContent, 'utf-8');
      console.log(`Successfully updated file: ${section.filePath}`);
    }
  }
}

function replaceHeadingContentByIndex(fileContent, targetIndex, newValue) {
  const tagRegex = /<(h[1-4])([^>]*)>([\s\S]*?)<\/h[1-4]>/gi;
  let currentIndex = 0;
  return fileContent.replace(tagRegex, (match, tag, attrs, innerContent) => {
    if (currentIndex === targetIndex) {
      currentIndex++;
      return `<${tag}${attrs}>${newValue}</${tag}>`;
    }
    currentIndex++;
    return match;
  });
}

function replaceParagraphContentByIndex(fileContent, targetIndex, newValue) {
  const tagRegex = /<p(?!\w)([^>]*)>([\s\S]*?)<\/p>/gi;
  let currentIndex = 0;
  return fileContent.replace(tagRegex, (match, attrs, innerContent) => {
    if (currentIndex === targetIndex) {
      currentIndex++;
      return `<p${attrs}>${newValue}</p>`;
    }
    currentIndex++;
    return match;
  });
}
