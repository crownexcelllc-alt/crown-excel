import React from 'react';
import CommentsListClient from './CommentsListClient';
import { getApiBase } from '@/lib/api-helper';

export const metadata = { title: 'Comments - Admin' };
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function CommentsPage({ searchParams }) {
  const { blogId } = await searchParams;
  const apiBase = getApiBase();

  let comments = [];
  try {
    const url = blogId 
      ? `${apiBase}/api/blogs/comments?all=true&blogId=${blogId}`
      : `${apiBase}/api/blogs/comments?all=true`;
      
    const res = await fetch(url, { cache: 'no-store' });
    if (res.ok) comments = await res.json();
  } catch (err) {
    console.error('Failed to fetch comments', err);
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[30px] font-bold text-gray-800 font-sans">BLOG COMMENTS</h1>
          <p className="text-sm text-gray-500">
            Moderate, approve, and delete comments left by website visitors.
          </p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 mt-6">
        <CommentsListClient initialData={comments} apiBase={apiBase} filterBlogId={blogId} />
      </div>
    </div>
  );
}
