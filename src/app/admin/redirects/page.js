import React from 'react';
import RedirectsClient from './RedirectsClient';
import { getApiBase } from '@/lib/api-helper';

export const metadata = { title: 'URL Redirects - Admin' };
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function RedirectsPage() {
  const apiBase = getApiBase();
  let redirects = [];
  let fetchError = null;

  try {
    const res = await fetch(`${apiBase}/api/cms/redirects?websiteId=default`, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      redirects = data.redirects || [];
    } else {
      fetchError = 'Could not load redirect rules from API.';
    }
  } catch (err) {
    console.error('Failed to fetch redirects in server page:', err);
    fetchError = 'Could not establish connection to the database api.';
  }

  return (
    <div>
      <h1 className='text-[30px] font-bold'>URL REDIRECTS</h1>
      <p className="text-sm text-gray-600">
        Manage your website SEO URL redirects. Setup 301 (Permanent) or 302 (Temporary) redirects.
      </p>
      <div className="mt-5">
        <RedirectsClient initialRedirects={redirects} apiBase={apiBase} initialError={fetchError} />
      </div>
    </div>
  );
}
