import React from 'react';
import ActivityClient from './ActivityClient';
import { getApiBase } from '@/lib/api-helper';

export const metadata = { title: 'Activity Logs - Admin' };
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function ActivityPage() {
  const apiBase = getApiBase();
  let logs = [];
  let total = 0;

  try {
    const res = await fetch(`${apiBase}/api/cms/activity?websiteId=all&limit=50`, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      logs = data.logs || [];
      total = data.total || 0;
    }
  } catch (err) {
    console.error('Failed to fetch activity logs', err);
  }

  return (
    <div>
      <h1 className='text-[30px] font-bold'>ACTIVITY LOGS</h1>
      <p className="text-sm text-gray-600">
        Track all CMS actions and changes.
      </p>
      <div className="mt-5">
        <ActivityClient initialLogs={logs} initialTotal={total} apiBase={apiBase} />
      </div>
    </div>
  );
}
