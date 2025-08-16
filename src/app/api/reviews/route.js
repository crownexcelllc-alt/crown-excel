import { NextResponse } from 'next/server';
import { getDb } from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,PATCH,DELETE,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// Respond to preflight
export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}

function jsonResponse(data, status = 200) {
  return NextResponse.json(data, { status, headers: CORS_HEADERS });
}

// POST /api/reviews  -> create a new review
export async function POST(req) {
  try {
    const body = await req.json();
    const name = (body.name || '').toString().trim();
    const position = (body.position || '').toString().trim();
    const company = (body.company || '').toString().trim();
    const message = (body.message || '').toString().trim();
    let rating = Number(body.rating || 5);
    if (!name || !message) {
      return jsonResponse({ error: 'name and message are required' }, 400);
    }
    if (!Number.isFinite(rating)) rating = 5;
    rating = Math.max(1, Math.min(5, Math.round(rating)));

    const db = await getDb();
    const col = db.collection('reviews');

    const doc = {
      name,
      position: position || null,
      company: company || null,
      rating,
      message,
      createdAt: new Date(),
      approved: false, // admin can approve later
    };

    const result = await col.insertOne(doc);
    // return saved document with string id
    return jsonResponse({ ...doc, _id: result.insertedId.toString() }, 201);
  } catch (err) {
    console.error('POST /api/reviews error', err);
    return jsonResponse({ error: 'Internal server error' }, 500);
  }
}

// GET /api/reviews  -> list reviews (only approved by default)
export async function GET(req) {
  try {
    const url = new URL(req.url);
    const all = url.searchParams.get('all') === 'true';

    const db = await getDb();
    const col = db.collection('reviews');

    const filter = all ? {} : { approved: true };
    const cursor = col.find(filter).sort({ createdAt: -1 }).limit(200);
    const rows = await cursor.toArray();
    const normalized = rows.map(r => ({
      ...r,
      _id: r._id.toString(),
      createdAt: r.createdAt ? (new Date(r.createdAt)).toISOString() : null,
    }));
    return jsonResponse(normalized);
  } catch (err) {
    console.error('GET /api/reviews error', err);
    return jsonResponse({ error: 'Internal server error' }, 500);
  }
}

// PATCH /api/reviews  -> update review (approve/unapprove)
export async function PATCH(req) {
  try {
    const body = await req.json();
    const id = body.id;
    if (!id) return jsonResponse({ error: 'id is required' }, 400);
    const approve = !!body.approve;

    const db = await getDb();
    const col = db.collection('reviews');

    const result = await col.updateOne({ _id: new ObjectId(id) }, { $set: { approved: approve } });
    if (result.matchedCount === 0) {
      return jsonResponse({ error: 'Not found' }, 404);
    }
    return jsonResponse({ ok: true });
  } catch (err) {
    console.error('PATCH /api/reviews error', err);
    return jsonResponse({ error: 'Internal server error' }, 500);
  }
}

// DELETE /api/reviews?id=...  -> delete a review
export async function DELETE(req) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get('id');
    if (!id) return jsonResponse({ error: 'id is required' }, 400);

    const db = await getDb();
    const col = db.collection('reviews');
    const result = await col.deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 0) return jsonResponse({ error: 'Not found' }, 404);
    return jsonResponse({ ok: true });
  } catch (err) {
    console.error('DELETE /api/reviews error', err);
    return jsonResponse({ error: 'Internal server error' }, 500);
  }
}
