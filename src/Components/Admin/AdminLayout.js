import React from 'react';
import Link from 'next/link';

export default function AdminLayout({ children, title = 'Admin Dashboard' }) {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--background)', color: 'var(--foreground)' }}>
      <div className="max-w-[1400px] mx-auto flex gap-6">
        <aside className="w-64 py-8 px-4" style={{ borderRight: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="mb-6">
            <Link href="/">
              <p className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>Admin</p>
            </Link>
          </div>
          <nav className="flex flex-col gap-2 text-sm">
            <Link href="/admin/applications"><p className="px-3 py-2 rounded hover:bg-gray-100">Applications</p></Link>
            <Link href="/admin/contact-submissions"><p className="px-3 py-2 rounded hover:bg-gray-100">Contact Submissions</p></Link>
            <Link href="/admin/reviews"><p className="px-3 py-2 rounded hover:bg-gray-100">Reviews</p></Link>
            <Link href="/admin/settings"><p className="px-3 py-2 rounded hover:bg-gray-100">Website Settings</p></Link>
            <Link href="/admin/logos"><p className="px-3 py-2 rounded hover:bg-gray-100">Logos</p></Link>
          </nav>
        </aside>

        <main className="flex-1 py-8 px-6">
          <header className="mb-6">
            <h1 className="text-2xl font-semibold">{title}</h1>
            <p className="text-sm text-gray-600 mt-1">Admin interface — theme uses site colors</p>
          </header>

          <section>
            {children}
          </section>
        </main>
      </div>
    </div>
  );
}
