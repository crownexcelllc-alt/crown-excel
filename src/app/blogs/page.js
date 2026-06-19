import React from 'react';
import { getApiBase } from '@/lib/api-helper';
import BlogListingClient from './BlogListingClient';

export const metadata = {
  title: 'Blog - Insights & Tech Solutions',
  description: 'Read the latest updates, tutorials, and expert analysis on IT infrastructure, hardware, cloud computing, and Excel automation.',
};

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function ClientBlogsPage() {
  const apiBase = getApiBase();
  let blogs = [];

  try {
    const res = await fetch(`${apiBase}/api/blogs`, { cache: 'no-store' });
    if (res.ok) {
      blogs = await res.json();
    }
  } catch (err) {
    console.error('Failed to fetch public blogs list', err);
  }

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Premium Hero Banner */}
      <section className="bg-gradient-to-br from-[#084032] via-[#0b5c48] to-[#04241c] text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(74,222,128,0.1),transparent)]" />
        <div className="max-w-6xl mx-auto text-center relative z-10 space-y-4">
          <span className="inline-block px-4 py-1.5 bg-[#4ade80]/10 border border-[#4ade80]/30 text-[#4ade80] rounded-full text-xs font-bold uppercase tracking-wider">
            Our Insights
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto">
            The Crown Excel Blog
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Expert opinions, technical guides, and business insights on IT hardware, infrastructure, cloud systems, and Excel reporting.
          </p>
        </div>
      </section>

      {/* Real-time Client-side Blog Listing & Sidebar Widgets */}
      <BlogListingClient initialBlogs={blogs} />
    </main>
  );
}
