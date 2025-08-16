import { NextResponse } from 'next/server';
import { getDb } from '@/lib/mongodb';

async function getApplications() {
  const db = await getDb();
  return db.collection('applications').find().sort({ _id: -1 }).toArray();
}

async function saveApplicationMongo({ name, email, phone, position, info }) {
  const db = await getDb();
  const doc = { name, email, phone, position, info, createdAt: new Date().toISOString() };
  const res = await db.collection('applications').insertOne(doc);
  return { id: res.insertedId.toString(), ...doc };
}

export async function GET() {
  try {
    const apps = await getApplications();
    return NextResponse.json(apps.map(a => ({ id: a._id?.toString?.() || a.id, name: a.name, email: a.email, phone: a.phone, position: a.position, info: a.info, createdAt: a.createdAt })));
  } catch (err) {
    return NextResponse.json({ error: 'Failed to read applications' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, position, info } = body || {};
    if (!name || !email || !phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    const entry = await saveApplicationMongo({ name, email, phone, position, info });
    return NextResponse.json({ ok: true, entry }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to save application' }, { status: 500 });
  }
}
