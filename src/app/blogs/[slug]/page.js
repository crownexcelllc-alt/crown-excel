import React from 'react';
import { getApiBase } from '@/lib/api-helper';
import { getDb } from '@/lib/mongodb';
import Link from 'next/link';
import BlogCommentsSection from './BlogCommentsSection';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Dynamic SEO Metadata Generator
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const apiBase = getApiBase();

  try {
    const res = await fetch(`${apiBase}/api/blogs?slug=${slug}`);
    if (res.ok) {
      const blog = await res.json();
      return {
        title: blog.metaTitle || `${blog.title} | Blog`,
        description: blog.metaDescription || blog.excerpt || 'Read the article on Crown Excel Blog.',
        keywords: blog.keywords || '',
      };
    }
  } catch (err) {
    console.error('generateMetadata error for blog slug: ' + slug, err);
  }

  return { title: 'Blog Post' };
}

export default async function BlogDetailsPage({ params }) {
  const { slug } = await params;
  const apiBase = getApiBase();

  let blog = null;
  let comments = [];
  let settings = null;
  let recentBlogs = [];
  let popularTags = [];

  try {
    // 1. Fetch Blog Data
    const res = await fetch(`${apiBase}/api/blogs?slug=${slug}`, { cache: 'no-store' });
    if (res.ok) {
      blog = await res.json();
    }

    // 2. Fetch Blog Comments & Settings & Sidebar Data
    if (blog?._id) {
      // Fetch comments
      const commentsRes = await fetch(`${apiBase}/api/blogs/comments?blogId=${blog._id}`, { cache: 'no-store' });
      if (commentsRes.ok) {
        comments = await commentsRes.json();
      }

      // Fetch website settings
      try {
        const db = await getDb();
        settings = await db.collection("settings").findOne({ _id: "website_settings" });
      } catch (e) {
        console.error("Failed to load settings:", e);
      }

      // Fetch other blogs for sidebar widgets
      const blogsRes = await fetch(`${apiBase}/api/blogs`, { cache: 'no-store' });
      if (blogsRes.ok) {
        const allBlogs = await blogsRes.json();
        
        // Filter out current blog
        recentBlogs = allBlogs.filter(b => b._id !== blog._id).slice(0, 4);

        // Extract most popular tags
        const tagsList = allBlogs.flatMap(b => b.tags || []);
        const tagCounts = tagsList.reduce((acc, t) => {
          acc[t] = (acc[t] || 0) + 1;
          return acc;
        }, {});
        popularTags = Object.keys(tagCounts)
          .sort((a, b) => tagCounts[b] - tagCounts[a])
          .slice(0, 10);
      }
    }
  } catch (err) {
    console.error('Failed to fetch blog post details', err);
  }

  const companyPhone = settings?.phone || '+971 4-354 0566';
  const companyEmail = settings?.email || 'contact@crownexcel.com';

  if (!blog) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6 text-center">
        <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-100 max-w-md w-full">
          <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
            ⚠
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Article Not Found</h2>
          <p className="text-gray-500 mb-6 text-sm">
            The article you are looking for has been removed, renamed, or is currently drafted.
          </p>
          <Link
            href="/blogs"
            className="px-5 py-2.5 bg-[#084032] hover:bg-[#0a5c48] text-white font-semibold rounded-lg shadow transition-all duration-200 text-sm"
          >
            Back to Articles
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 pb-20">
      {/* Visual Top Header */}
      <div className="w-full bg-gradient-to-r from-[#084032] to-[#04241c] py-16 text-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4ade80] hover:text-white uppercase tracking-wider mb-4 transition-colors"
          >
            ← Back to Articles
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight max-w-4xl">
            {blog.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-300 font-semibold pt-4 mt-2">
            <span className="bg-white/10 px-2.5 py-1 rounded text-white">By {blog.author || 'Admin'}</span>
            <span className="w-1 h-1 bg-white/20 rounded-full" />
            <span>
              {blog.createdAt ? new Date(blog.createdAt).toLocaleDateString(undefined, {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              }) : 'N/A'}
            </span>
          </div>
        </div>
      </div>

      {/* Main Grid: Content + Sidebar */}
      <div className="max-w-6xl mx-auto px-6 pt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Main Content Column (8/12) */}
        <div className="lg:col-span-8 space-y-12">
          
          <article className="bg-white rounded-2xl border border-gray-150 p-6 md:p-8 shadow-xs">
            {/* Cover Image */}
            <div className="w-full aspect-video rounded-xl overflow-hidden mb-8 bg-gray-100 relative border border-gray-100">
              {blog.coverImage ? (
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-[#084032]/5 flex items-center justify-center text-7xl">
                  👑
                </div>
              )}
            </div>

            {/* Excerpt Panel */}
            {blog.excerpt && (
              <div className="p-5 bg-gray-50 border-l-4 border-[#084032] text-gray-600 rounded-r-xl text-lg italic leading-relaxed text-left mb-8">
                {blog.excerpt}
              </div>
            )}

            {/* Tags (Inside Article) */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-6">
                {blog.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px] font-bold uppercase tracking-wide border border-gray-150"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Rich HTML body text */}
            <div 
              className="prose max-w-none prose-green leading-relaxed text-gray-700 space-y-6 text-left select-text"
              style={{
                direction: 'left',
                textAlign: 'left'
              }}
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </article>

          {/* Comments integration */}
          <div className="bg-white rounded-2xl border border-gray-150 p-6 md:p-8 shadow-xs">
            <BlogCommentsSection 
              blogId={blog._id} 
              initialComments={comments} 
              apiBase={apiBase} 
            />
          </div>
        </div>

        {/* Sidebar Column (4/12) */}
        <aside className="lg:col-span-4 lg:sticky lg:top-10 space-y-8">
          
          {/* About Crown Excel widget */}
          <div className="bg-white rounded-2xl border border-gray-150 p-6 shadow-xs text-left space-y-4">
            <h3 className="text-lg font-bold text-gray-800 border-b border-gray-100 pb-3">Crown Excel</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We are a premier provider of customized IT solutions, networking architectures, system consulting, and hardware provisions for organizations in Dubai and the UAE.
            </p>
            <Link 
              href="/contact-us"
              className="inline-block px-4 py-2 bg-[#084032] hover:bg-[#00a63e] text-white font-semibold rounded-lg text-xs shadow-xs transition-all w-full text-center"
            >
              Contact Our Experts
            </Link>
          </div>

          {/* Recent Posts widget */}
          <div className="bg-white rounded-2xl border border-gray-150 p-6 shadow-xs text-left space-y-4">
            <h3 className="text-lg font-bold text-gray-800 border-b border-gray-100 pb-3">Recent Articles</h3>
            
            {recentBlogs.length === 0 ? (
              <p className="text-xs text-gray-400 italic">No other articles available.</p>
            ) : (
              <div className="space-y-4">
                {recentBlogs.map((b) => (
                  <div key={b._id} className="flex gap-3 group">
                    <Link href={`/blogs/${b.slug}`} className="w-20 aspect-video rounded-md overflow-hidden bg-gray-50 border border-gray-100 shrink-0 relative">
                      {b.coverImage ? (
                        <img 
                          src={b.coverImage} 
                          alt={b.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-100 flex items-center justify-center text-xs">👑</div>
                      )}
                    </Link>
                    <div className="min-w-0 space-y-0.5">
                      <Link 
                        href={`/blogs/${b.slug}`}
                        className="text-xs font-bold text-gray-800 hover:text-[#00a63e] line-clamp-2 leading-tight"
                      >
                        {b.title}
                      </Link>
                      <span className="text-[10px] text-gray-400 block font-semibold">
                        {b.createdAt ? new Date(b.createdAt).toLocaleDateString(undefined, {
                          month: 'short',
                          day: 'numeric'
                        }) : ''}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Help/Support CTA card */}
          <div className="bg-gradient-to-br from-[#084032] to-[#04241c] rounded-2xl p-6 shadow-md text-white text-left space-y-4 relative overflow-hidden border border-[#4ade80]/20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(74,222,128,0.1),transparent)]" />
            
            <div className="relative z-10 space-y-4">
              <span className="text-[10px] font-bold text-[#4ade80] uppercase tracking-wider bg-white/10 px-2 py-0.5 rounded">
                Direct Help Desk
              </span>
              <h3 className="text-xl font-bold leading-snug">Need Immediate IT Support?</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Contact our support desk for hardware repair, server support, software maintenance, and corporate AMC inquiries.
              </p>
              
              <div className="pt-2 space-y-2 text-xs">
                <a 
                  href={`tel:${companyPhone}`}
                  className="flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 rounded-lg text-white font-semibold transition-all border border-white/10"
                >
                  📞 {companyPhone}
                </a>
                <a 
                  href={`mailto:${companyEmail}`}
                  className="flex items-center gap-2 px-4 py-2.5 bg-[#4ade80] hover:bg-[#22c55e] rounded-lg text-white font-semibold transition-all"
                >
                  ✉ {companyEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Popular Tags cloud widget */}
          {popularTags.length > 0 && (
            <div className="bg-white rounded-2xl border border-gray-150 p-6 shadow-xs text-left space-y-4">
              <h3 className="text-lg font-bold text-gray-800 border-b border-gray-100 pb-3">Popular Tags</h3>
              <div className="flex flex-wrap gap-1.5">
                {popularTags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blogs?search=${tag}`}
                    className="px-2.5 py-1 bg-gray-50 hover:bg-green-50 text-xs font-semibold text-gray-600 hover:text-[#084032] border border-gray-200 hover:border-green-200 rounded-md transition-all"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          )}

        </aside>
      </div>
    </main>
  );
}
