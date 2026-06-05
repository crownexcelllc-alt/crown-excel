import { MongoClient } from 'mongodb';

async function test() {
  const uri = 'mongodb+srv://admin:admin@cluster0.ac1fznk.mongodb.net';
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db('crownexceladmin');
    
    console.log('--- CMS ROUTES ---');
    const routes = await db.collection('cms_routes').find({}).toArray();
    console.log(routes.map(r => ({ _id: r._id.toString(), path: r.path, filePath: r.filePath, status: r.status })));
    
    console.log('\n--- CMS PAGE CONTENT ---');
    const contents = await db.collection('cms_page_content').find({}).toArray();
    console.log(contents.map(c => ({
      _id: c._id.toString(),
      routeId: c.routeId,
      path: c.path,
      status: c.status,
      sectionsCount: c.sections ? c.sections.length : 0,
      sections: c.sections ? c.sections.map(s => ({ sectionName: s.sectionName, fieldsCount: Object.keys(s.fields || {}).length })) : []
    })));
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

test();
