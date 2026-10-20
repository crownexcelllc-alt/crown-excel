import { NextResponse } from 'next/server';
import { getDb } from '@/lib/mongodb';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}

// GET /api/cms/routes/status → Returns list of currently inactive route paths
export async function GET(request) {
  try {
    const url = new URL(request.url);
    const websiteId = url.searchParams.get('websiteId') || 'default';

    const db = await getDb();
    const collection = db.collection('cms_routes');

    const inactiveRoutes = await collection
      .find({ websiteId, status: 'inactive' }, { projection: { path: 1 } })
      .toArray();

    const paths = inactiveRoutes
      .map(r => r.path)
      .filter(Boolean)
      .map(p => p.replace(/\/+$/, '') || '/');

    return NextResponse.json(
      { inactiveRoutes: paths },
      {
        headers: {
          ...CORS_HEADERS,
          'Cache-Control': 'no-store, max-age=0',
        },
      }
    );
  } catch (err) {
    console.error('GET /api/cms/routes/status error:', err);
    return NextResponse.json({ inactiveRoutes: [] }, { status: 500, headers: CORS_HEADERS });
  }
}
