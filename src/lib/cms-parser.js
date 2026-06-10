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

function cleanText(text) {
  // Strip JSX comments {/* ... */}
  text = text.replace(/\{\/\*[\s\S]*?\*\/\}/g, '');
  // Strip HTML/JSX tags
  text = text.replace(/<[^>]+>/g, ' ');
  // Strip JSX curly braces around string literals
  text = text.replace(/\{"([\s\S]*?)"\}/g, '$1');
  text = text.replace(/\{'([\s\S]*?)'\}/g, '$1');
  // Extract default text from {var || "default"} patterns
  text = text.replace(/\{[^}]*\|\|\s*"([^"]+)"\s*\}/g, '$1');
  text = text.replace(/\{[^}]*\|\|\s*'([^']+)'\s*\}/g, '$1');
  // Strip remaining curly braces and variables (e.g. {icon1})
  text = text.replace(/\{[\s\S]*?\}/g, '');
  // Clean whitespace
  text = text.replace(/\s+/g, ' ').trim();
  return text;
}

/**
 * Recursively parses a page file and its local imports to extract static text content and images.
 * Groups findings into sections based on the components they were found in.
 * 
 * @param {string} pageFilePath - Absolute path to the page file
 * @returns {Array} List of sections suitable for cms_page_content
 */
export function parsePageContent(pageFilePath) {
  const sections = [];
  const visited = new Set();

  function parseFile(filePath, componentName) {
    if (visited.has(filePath)) return;
    visited.add(filePath);

    if (!existsSync(filePath)) return;
    const rawContent = readFileSync(filePath, 'utf-8');
    // Strip comments to ignore commented-out code
    const content = rawContent.replace(/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm, '$1');

    const headings = [];
    const paragraphs = [];
    const sectionFields = {};

    // Find headings (h1, h2, h3, h4)
    const headingRegex = /<(h[1-4])[^>]*>([\s\S]*?)<\/h[1-4]>/gi;
    let match;
    while ((match = headingRegex.exec(content)) !== null) {
      const tag = match[1].toLowerCase();
      const rawText = match[2];
      const text = cleanText(rawText);
      if (text && text.length > 2) {
        headings.push({ tag, text });
      }
    }

    // Find paragraphs (p) - use (?!\w) to avoid matching <path, <polygon, etc.
    const pRegex = /<p(?!\w)[^>]*>([\s\S]*?)<\/p>/gi;
    while ((match = pRegex.exec(content)) !== null) {
      const rawText = match[1];
      const text = cleanText(rawText);
      if (text && text.length > 2) {
        paragraphs.push(text);
      }
    }

    // Find image imports
    const imgImportRegex = /import\s+(\w+)\s+from\s+['"]([^'"]+\.(?:png|jpe?g|webp|gif|svg|avif))['"]/gi;
    while ((match = imgImportRegex.exec(content)) !== null) {
      const varName = match[1];
      const impPath = match[2];
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

    // Find replaced image constants (const VarName = { src: '...' })
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

    // Find inline images in JSX
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

    // Set heading and paragraph fields
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

    paragraphs.forEach((p, idx) => {
      const key = idx === 0 ? 'paragraph' : `paragraph_${idx + 1}`;
      sectionFields[key] = { 
        type: 'richtext', 
        value: p, 
        originalValue: p,
        label: `Paragraph ${idx + 1}` 
      };
    });

    // If we found any fields, add the section
    if (Object.keys(sectionFields).length > 0) {
      const relativePath = path.relative(process.cwd(), filePath).replace(/\\/g, '/');
      sections.push({
        sectionId: componentName.toLowerCase().replace(/[^a-z0-9]/g, '_'),
        sectionName: componentName,
        filePath: relativePath,
        order: sections.length + 1,
        fields: sectionFields,
      });
    }

    // Find local imports in this file using dynamically constructed regex to bypass static bundler AST tracing
    const importRegex = new RegExp('import' + '\\s+(\\w+)\\s+from\\s+[\'\"]([^\'\"]+)[\'\"]', 'g');
    const imports = [];
    while ((match = importRegex.exec(content)) !== null) {
      const name = match[1];
      const impPath = match[2];
      
      if (impPath.startsWith('.') || impPath.startsWith('@/')) {
        const resolved = resolveImportPath(impPath, filePath);
        const actualFile = findFile(resolved);
        if (actualFile && actualFile.includes('src')) {
          imports.push({ name, file: actualFile });
        }
      }
    }

    // Find dynamic imports (e.g. const Name = dynamic(() => import('...')))
    const dynamicImportRegex = new RegExp('(?:const|let|var)\\s+(\\w+)\\s*=\\s*(?:dynamic\\(\\s*\\(\\s*\\)\\s*=>\\s*)?' + 'import' + '\\(\\s*[\'\"]([^\'\"]+)[\'\"]\\s*\\)', 'g');
    while ((match = dynamicImportRegex.exec(content)) !== null) {
      const name = match[1];
      const impPath = match[2];
      
      if (impPath.startsWith('.') || impPath.startsWith('@/')) {
        const resolved = resolveImportPath(impPath, filePath);
        const actualFile = findFile(resolved);
        if (actualFile && actualFile.includes('src')) {
          if (!imports.some(imp => imp.file === actualFile)) {
            imports.push({ name, file: actualFile });
          }
        }
      }
    }

    // Recurse into imported files
    for (const imp of imports) {
      parseFile(imp.file, imp.name);
    }
  }

  // Start with the page file
  const baseComponentName = path.basename(pageFilePath, path.extname(pageFilePath));
  parseFile(pageFilePath, baseComponentName === 'page' ? 'Main' : baseComponentName);

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

    let fileContent = readFileSync(absolutePath, 'utf-8');
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

      // Check current value on disk. If it's already equal to value, skip!
      const freshVal = getFreshOriginalValue(fieldKey);
      if (freshVal !== undefined && freshVal !== null && value === freshVal) {
        continue;
      }

      if (type === 'image') {
        if (isImport && varName) {
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
