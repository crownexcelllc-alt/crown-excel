const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

async function main() {
  const uri = 'mongodb+srv://admin:admin@cluster0.ac1fznk.mongodb.net';
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db('crownexceladmin');
    
    // Find all content
    const contents = await db.collection('cms_page_content').find({}).toArray();
    console.log(`[DB] Searching through ${contents.length} pages...`);
    
    let found = false;
    for (const page of contents) {
      for (const section of page.sections || []) {
        for (const [key, field] of Object.entries(section.fields || {})) {
          const val = field.value || '';
          if (typeof val === 'string' && val.toLowerCase().includes('trusted partner')) {
            console.log(`[DB Match] Page Path: ${page.path}, Section: ${section.sectionName}, Field: ${key}, Value: "${val}"`);
            found = true;
          }
        }
      }
    }
    
    if (!found) {
      console.log('[DB] No content matching "Trusted Partner" found in database.');
    }
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

main();
