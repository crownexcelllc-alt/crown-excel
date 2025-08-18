import React from 'react';
import ApplicationsTableClient from './ApplicationsTableClient';

export const metadata = { title: 'Applications - Admin' };
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function ApplicationsPage() {
  const apiBase = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  let applications = [];
  try {
    const res = await fetch(`${apiBase}/api/applications`, { cache: 'no-store' });
    if (res.ok) applications = await res.json();
  } catch (err) { console.error('Failed to fetch applications', err); }

  return (
    <div className="bg-white p-4 rounded shadow">
      <ApplicationsTableClient initialData={applications} apiBase={apiBase} />
    </div>
  );
}
