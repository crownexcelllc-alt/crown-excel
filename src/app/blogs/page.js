import React from 'react';
import { getApiBase } from '@/lib/api-helper';
import Link from 'next/link';

export const metadata = {
  title: 'Blog - Insights & Tech Solutions',
  description: 'Read the latest updates, tutorials, and expert analysis on IT infrastructure, hardware, cloud computing, and Excel automation.',
};

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function ClientBlogsPage({ searchParams }) {
  const apiBase = getApiBase();
  let blogs = [];

  const resolvedSearchParams = await searchParams;
  const categoryFilter = resolvedSearchParams?.category;
  const searchFilter = resolvedSearchParams?.search;

  try {
    const res = await fetch(`${apiBase}/api/blogs`, { cache: 'no-store' });
    if (res.ok) {
      blogs = await res.json();

      if (categoryFilter) {
        blogs = blogs.filter(b => b.category?.trim().toLowerCase() === categoryFilter.trim().toLowerCase());
      }

      if (searchFilter) {
        const q = searchFilter.trim().toLowerCase();
        blogs = blogs.filter(b => 
          b.title?.toLowerCase().includes(q) ||
          b.excerpt?.toLowerCase().includes(q) ||
          b.category?.toLowerCase().includes(q) ||
          b.tags?.some(tag => tag.toLowerCase().includes(q))
        );
      }
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

      {/* Blog Listing Grid */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        {(categoryFilter || searchFilter) && (
          <div className="mb-8 flex items-center justify-between bg-white px-6 py-4 rounded-xl border border-gray-200 shadow-2xs">
            <span className="text-sm font-semibold text-gray-700">
              Showing blogs {categoryFilter ? `in Category: "${categoryFilter}"` : `matching: "${searchFilter}"`}
            </span>
            <Link
              href="/blogs"
              className="text-xs font-bold text-[#084032] hover:text-[#00a63e] uppercase tracking-wider transition-colors"
            >
              Clear Filter &times;
            </Link>
          </div>
        )}
        {blogs.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-green-50 text-[#084032] rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
              📰
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">No Articles Yet</h2>
            <p className="text-gray-500 max-w-md mx-auto px-4">
              We are preparing amazing content for you. Check back soon to read our first publications!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article
                key={blog._id}
                className="bg-white rounded-2xl overflow-hidden shadow-xs border border-gray-150 flex flex-col"
              >
                {/* Cover Image Wrapper */}
                <Link href={`/blogs/${blog.slug}`} className="block relative aspect-[16/10] bg-gray-100 overflow-hidden">
                  {blog.coverImage ? (
                    <img
                      src={blog.coverImage}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#084032]/5 flex items-center justify-center text-5xl">
                      👑
                    </div>
                  )}
                </Link>

                {/* Article Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    {/* Meta Info */}
                    <div className="flex justify-between items-center text-xs text-gray-500 font-semibold w-full">
                      <span className="text-gray-700">By {blog.author || 'Admin'}</span>
                      <span>
                        {blog.createdAt ? new Date(blog.createdAt).toLocaleDateString(undefined, {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        }) : 'N/A'}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-[#00a63e] leading-snug line-clamp-1">
                      <Link href={`/blogs/${blog.slug}`}>
                        {blog.title}
                      </Link>
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-550 text-sm leading-relaxed line-clamp-2">
                      {blog.excerpt || 'Read this article to learn more about this topic from our tech experts...'}
                    </p>
                  </div>

                  {/* Footer links on card */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-sm">
                    <Link
                      href={`/blogs/${blog.slug}`}
                      className="font-bold text-[#084032] flex items-center gap-1 hover:text-[#00a63e] transition-colors"
                    >
                      Read Article <span className="text-base">→</span>
                    </Link>
                    
                    {blog.readMinutes && (
                      <span className="text-xs text-gray-400 font-semibold flex items-center gap-1">
                        ⏱ {blog.readMinutes} min read
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
