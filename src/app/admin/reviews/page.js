import React from 'react';
import ReviewsTableClient from './ReviewsTableClient';

export const metadata = { title: 'Reviews - Admin' };
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function ReviewsPage() {
  const apiBase = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  let reviews = [];
  try {
    const res = await fetch(`${apiBase}/api/reviews?all=true`, { cache: 'no-store' });
    console.log('res',res);
    if (res.ok) reviews = await res.json();
  } catch (err) { console.error('Failed to fetch reviews', err); }

  return (
    <div className="bg-white p-4 rounded shadow">
      <ReviewsTableClient initialData={reviews} apiBase={apiBase} />
    </div>
  );
}
