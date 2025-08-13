import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

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

// POST: Not allowed on user side
export async function POST() {
  return NextResponse.json({ error: 'Not allowed' }, { status: 403 });
}
