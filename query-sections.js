const { MongoClient } = require('mongodb');

async function main() {
  const uri = 'mongodb+srv://admin:admin@cluster0.ac1fznk.mongodb.net';
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db('crownexceladmin');
    
    const content = await db.collection('cms_page_content').findOne({
      path: '/',
      websiteId: 'default'
    });
    
    if (content) {
      console.log('Page Path: /');
      for (const section of content.sections || []) {
        if (section.sectionId.includes('trusted')) {
          console.log('\nSection:', JSON.stringify(section, null, 2));
        }
      }
    } else {
      console.log('No content found for /');
    }
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

main();
