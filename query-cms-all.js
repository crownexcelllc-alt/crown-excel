const { MongoClient } = require('mongodb');

async function main() {
  const uri = 'mongodb+srv://admin:admin@cluster0.ac1fznk.mongodb.net';
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db('crownexceladmin');
    
    // Find all content
    const contents = await db.collection('cms_page_content').find({}).toArray();
    console.log(`Searching through ${contents.length} pages...`);
    
    let found = false;
    for (const page of contents) {
      for (const section of page.sections || []) {
        for (const [key, field] of Object.entries(section.fields || {})) {
          const val = field.value || '';
          if (typeof val === 'string' && val.includes('grabatoz')) {
            console.log(`\nMatch found!`);
            console.log(`Page Path: ${page.path}`);
            console.log(`Section: ${section.sectionId} (${section.sectionName})`);
            console.log(`File Path: ${section.filePath}`);
            console.log(`Field Key: ${key} (${field.type})`);
            console.log(`Value: "${val}"`);
            found = true;
          }
        }
      }
    }
    
    if (!found) {
      console.log('No content matching "grabatoz" found in cms_page_content.');
    }
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

main();
