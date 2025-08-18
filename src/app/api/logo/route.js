import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import cloudinary from 'cloudinary';

// Cloudinary config
cloudinary.v2.config({
  cloud_name: 'dyivow3eg',
  api_key: '259854239836562',
  api_secret: 'vOOZCW87NPQdBhWThhldaM229ng',
});

const MONGO_URI = 'mongodb+srv://mw951390:1234@cluster0.xxofs0k.mongodb.net/crownexceladmin';
const DB_NAME = 'crownexceladmin';
const COLLECTION = 'settings';

// GET: Return logo URL from DB
export async function GET() {
  const client = new MongoClient(MONGO_URI);
  await client.connect();
  const db = client.db(DB_NAME);
  const settings = await db.collection(COLLECTION).findOne({ key: 'logo' });
  await client.close();
  return NextResponse.json({ logo: settings?.value || '/file.svg' });
}

// POST: Upload logo to Cloudinary, save URL in DB
export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get('logo');
  if (!file) return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });

  // Upload to Cloudinary
  const buffer = Buffer.from(await file.arrayBuffer());
  const result = await new Promise((resolve, reject) => {
    const stream = cloudinary.v2.uploader.upload_stream(
      { resource_type: 'image' },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );
    stream.end(buffer);
  });

  // Save URL in MongoDB
  const client = new MongoClient(MONGO_URI);
  await client.connect();
  const db = client.db(DB_NAME);
  await db.collection(COLLECTION).updateOne(
    { key: 'logo' },
    { $set: { value: result.secure_url } },
    { upsert: true }
  );
  await client.close();

  return NextResponse.json({ logo: result.secure_url });
}
