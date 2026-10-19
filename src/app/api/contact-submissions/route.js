import { NextResponse } from 'next/server';
import { getDb } from '@/lib/mongodb';
import { logActivity } from '@/lib/activity-logger';

async function getSubmissions() {
  const db = await getDb();
  return db.collection('contact_submissions').find().sort({ _id: -1 }).toArray();
}

async function saveSubmission({ name, email, phone, subject, service, comments, country, quantity, destination, company }) {
  const db = await getDb();
  const doc = {
    name,
    email,
    phone,
    subject,
    service,
    comments,
    ...(country ? { country } : {}),
    ...(quantity ? { quantity } : {}),
    ...(destination ? { destination } : {}),
    ...(company ? { company } : {}),
    createdAt: new Date().toISOString()
  };
  const res = await db.collection('contact_submissions').insertOne(doc);
  return { id: res.insertedId.toString(), ...doc };
}

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:2999',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};  

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}

export async function GET() {
  try {
    const subs = await getSubmissions();
    return NextResponse.json(subs.map(s => ({
      id: s._id?.toString?.() || s.id,
      name: s.name,
      email: s.email,
      phone: s.phone,
      country: s.country || '',
      subject: s.subject,
      service: s.service,
      quantity: s.quantity || '',
      destination: s.destination || '',
      company: s.company || '',
      comments: s.comments,
      createdAt: s.createdAt
    })), { headers: CORS_HEADERS });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to read contact submissions' }, { status: 500, headers: CORS_HEADERS });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, service, comments, isWholesale, company, quantity, destination, country } = body || {};
    if (!name || !email || !phone || !subject || !service || !comments) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400, headers: CORS_HEADERS });
    }

    const isWholesaleInquiry = isWholesale === true || (subject && subject.toLowerCase().includes('wholesale'));
    const db = await getDb();

    // Verify OTP only for non-wholesale inquiries
    if (!isWholesaleInquiry) {
      const otpRecord = await db.collection('otps').findOne({ email, verified: true });
      if (!otpRecord) {
        return NextResponse.json({ error: 'Email not verified. Please verify OTP first.' }, { status: 403, headers: CORS_HEADERS });
      }
      // Clean up used OTP
      await db.collection('otps').deleteMany({ email });
    }

    const entry = await saveSubmission({
      name: (name || '').trim(),
      email: (email || '').trim(),
      phone: (phone || '').trim(),
      subject: (subject || '').trim(),
      service: (service || '').trim(),
      comments: (comments || '').trim(),
      country: (country || '').trim(),
      quantity: (quantity || '').trim(),
      destination: (destination || '').trim(),
      company: (company || '').trim(),
    });

    await logActivity(request, 'contact_submission', name, { email, subject, service });

    return NextResponse.json({ ok: true, entry }, { status: 201, headers: CORS_HEADERS });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to save contact submission' }, { status: 500, headers: CORS_HEADERS });
  }
}
