import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import cloudinary from 'cloudinary';

// Cloudinary config (configured once)
cloudinary.v2.config({
  cloud_name: 'dqghun7oj',
  api_key: '281487587427693',
  api_secret: 'bxbrN76auL9pNUINMVdKJwqv6Uo',
});

// const MONGO_URI = 'mongodb+srv://mw951390:1234@cluster0.xxofs0k.mongodb.net/crownexceladmin';
const MONGO_URI = 'mongodb+srv://admin:admin@cluster0.ac1fznk.mongodb.net';
const DB_NAME = 'crownexceladmin';
const COLLECTION = 'settings';

// Simple in-memory cache to speed up repeated GETs
let cachedLogo = null;
let cachedAt = 0;
const LOGO_TTL = 30 * 1000; // 30 seconds

// Reuse MongoClient across hot reloads / requests
if (!globalThis._mongoClient) {
  globalThis._mongoClient = new MongoClient(MONGO_URI);
  globalThis._mongoConnected = false;
}
const client = globalThis._mongoClient;

async function ensureConnected() {
  if (!globalThis._mongoConnected) {
    await client.connect();
    globalThis._mongoConnected = true;
  }
}

// Helper to send JSON with caching headers
function jsonWithCache(payload) {
  return NextResponse.json(payload, {
    headers: {
      'Cache-Control': 'public, s-maxage=30, stale-while-revalidate=60',
    },
  });
}

// GET: Return logo URL from DB (fast path: cache)
export async function GET() {
  try {
    // fast in-memory cache
    if (cachedLogo && Date.now() - cachedAt < LOGO_TTL) {
      return jsonWithCache({ logo: cachedLogo });
    }

    await ensureConnected();
    const db = client.db(DB_NAME);

    // fetch only the needed field
    const settings = await db.collection(COLLECTION).findOne(
      { key: 'logo' },
      { projection: { value: 1 } }
    );
    const logo = settings?.value || '/file.svg';

    // update cache
    cachedLogo = logo;
    cachedAt = Date.now();

    return jsonWithCache({ logo });
  } catch (err) {
    // On error return fallback quickly
    console.error('GET /api/logo error:', err);
    return jsonWithCache({ logo: '/file.svg' });
  }
}

// POST: Upload logo to Cloudinary, save URL in DB
export async function POST(req) {
  try {
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

    const secureUrl = result.secure_url;

    // Save URL in MongoDB (ensure connection)
    await ensureConnected();
    const db = client.db(DB_NAME);
    await db.collection(COLLECTION).updateOne(
      { key: 'logo' },
      { $set: { value: secureUrl } },
      { upsert: true }
    );

    // Update in-memory cache immediately so GETs are fast
    cachedLogo = secureUrl;
    cachedAt = Date.now();

    return jsonWithCache({ logo: secureUrl });
  } catch (err) {
    console.error('POST /api/logo error:', err);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
