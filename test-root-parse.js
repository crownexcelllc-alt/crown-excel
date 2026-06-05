const { parsePageContent } = require('./src/lib/cms-parser');
const path = require('path');

const targetPage = path.join(process.cwd(), 'src/app/page.js');
console.log('Parsing page:', targetPage);
const results = parsePageContent(targetPage);
console.log('Resulting Sections count:', results.length);
console.log('Resulting Sections:', JSON.stringify(results, null, 2));
