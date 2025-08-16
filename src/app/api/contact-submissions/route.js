import { NextResponse } from 'next/server';
import { getDb } from '@/lib/mongodb';

async function getSubmissions() {
  const db = await getDb();
  return db.collection('contact_submissions').find().sort({ _id: -1 }).toArray();
}

async function saveSubmission({ name, email, phone, subject, service, comments }) {
  const db = await getDb();
  const doc = { name, email, phone, subject, service, comments, createdAt: new Date().toISOString() };
  const res = await db.collection('contact_submissions').insertOne(doc);
  return { id: res.insertedId.toString(), ...doc };
}

export async function GET() {
  try {
    const subs = await getSubmissions();
    return NextResponse.json(subs.map(s => ({ id: s._id?.toString?.() || s.id, name: s.name, email: s.email, phone: s.phone, subject: s.subject, service: s.service, comments: s.comments, createdAt: s.createdAt })));
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to read contact submissions' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, service, comments } = body || {};
    if (!name || !email || !phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    const entry = await saveSubmission({ name, email, phone, subject, service, comments });
    return NextResponse.json({ ok: true, entry }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to save contact submission' }, { status: 500 });
  }
}
