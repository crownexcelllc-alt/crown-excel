import { NextResponse } from 'next/server'
import { getDb } from '../../../lib/mongodb'

// Fetch places from MapTiler Search API and normalize into reviews collection.
// Requires MAPTILER_KEY in environment.

function normalizeFeatureToReview(feature, idx) {
  const props = feature.properties || {}
  const id = feature.id || props.osm_id || `maptiler-${idx}`
  const name = feature.text || props.name || props.label || 'Unknown'
  // If the dataset actually stores reviews in properties.reviews, try to use them.
  const maybeReviews = props.reviews || props.review || null

  if (Array.isArray(maybeReviews) && maybeReviews.length > 0) {
    return maybeReviews.map((r, i) => ({
      source: 'maptiler',
      sourceId: String(id) + '-' + i,
      name: r.author || r.name || name,
      rating: Number(r.rating || r.stars || 0) || 0,
      comment: r.text || r.comment || r.body || '',
      avatar: r.avatar || r.profile_photo || null,
      date: r.date || r.time || null,
    }))
  }

  // Fallback: create a single lightweight record representing the place (not a real review)
  return [
    {
      source: 'maptiler',
      sourceId: String(id),
      name,
      rating: props.rating || 0,
      comment: props.description || props.address || props.label || '',
      avatar: props.icon || null,
      date: props.updated_at || null,
    },
  ]
}

export async function GET(req) {
  const MAPTILER_KEY = process.env.MAPTILER_KEY
  if (!MAPTILER_KEY) {
    console.warn('maptiler-reviews: MAPTILER_KEY not set; returning empty array')
    return NextResponse.json([], { status: 200 })
  }

  const { searchParams } = new URL(req.url)
  const q = searchParams.get('q') || 'Crown Excel'
  const lat = searchParams.get('lat')
  const lng = searchParams.get('lng')
  const radius = searchParams.get('radius') || ''
  const datasetId = searchParams.get('datasetId') || process.env.MAPTILER_DATASET_ID || null

  // If a datasetId is provided, attempt to fetch features from the MapTiler Datasets API
  if (datasetId) {
    try {
      const dsUrl = `https://api.maptiler.com/datasets/v1/${encodeURIComponent(datasetId)}/features?key=${encodeURIComponent(MAPTILER_KEY)}`
      const dsRes = await fetch(dsUrl)
      if (dsRes.ok) {
        const ds = await dsRes.json().catch(() => null)
        const features = Array.isArray(ds?.features) ? ds.features : []
        const normalized = []
        features.forEach((f, idx) => {
          const items = normalizeFeatureToReview(f, idx)
          if (Array.isArray(items)) normalized.push(...items)
        })

        // Upsert into DB (same behavior)
        try {
          const db = await getDb()
          const col = db.collection('reviews')
          const ops = normalized.map((r) => ({
            updateOne: {
              filter: { source: r.source, sourceId: r.sourceId },
              update: { $setOnInsert: { createdAt: new Date() }, $set: { ...r, approved: false } },
              upsert: true,
            },
          }))
          if (ops.length) await col.bulkWrite(ops)
        } catch (dbErr) {
          console.warn('maptiler-reviews: DB upsert failed', String(dbErr))
        }

        return NextResponse.json(normalized, { status: 200 })
      } else {
        const txt = await dsRes.text().catch(() => '')
        console.error('maptiler-reviews: dataset fetch failed', dsRes.status, txt.slice ? txt.slice(0, 2000) : txt)
        // fall through to search behavior
      }
    } catch (dsErr) {
      console.error('maptiler-reviews: dataset fetch error', String(dsErr))
      // fall through to search behavior
    }
  }

  let url = `https://api.maptiler.com/search?q=${encodeURIComponent(q)}&key=${encodeURIComponent(MAPTILER_KEY)}`
  if (lat && lng) url += `&lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lng)}`
  if (radius) url += `&radius=${encodeURIComponent(radius)}`

  try {
    const res = await fetch(url)
    if (!res.ok) {
      const txt = await res.text().catch(() => '')
      console.error('maptiler-reviews: search failed', res.status, txt.slice ? txt.slice(0, 2000) : txt)
      return NextResponse.json([], { status: 200 })
    }

    const data = await res.json()
    const features = Array.isArray(data.features) ? data.features : []

    // Normalize features into a flat list of review-like objects
    const normalized = []
    features.forEach((f, idx) => {
      const items = normalizeFeatureToReview(f, idx)
      if (Array.isArray(items)) normalized.push(...items)
    })

    // Upsert into MongoDB reviews collection (approved:false by default)
    try {
      const db = await getDb()
      const col = db.collection('reviews')
      const ops = normalized.map((r) => ({
        updateOne: {
          filter: { source: r.source, sourceId: r.sourceId },
          update: { $setOnInsert: { createdAt: new Date() }, $set: { ...r, approved: false } },
          upsert: true,
        },
      }))
      if (ops.length) await col.bulkWrite(ops)
    } catch (dbErr) {
      console.warn('maptiler-reviews: DB upsert failed', String(dbErr))
    }

    return NextResponse.json(normalized, { status: 200 })
  } catch (err) {
    console.error('maptiler-reviews: unexpected error', String(err))
    return NextResponse.json([], { status: 200 })
  }
}
