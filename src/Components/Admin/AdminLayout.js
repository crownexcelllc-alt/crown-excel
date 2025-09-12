import React from 'react';
import Link from 'next/link';
import LogoutButton from '@/app/admin/components/LogoutButton';

export default function AdminLayout({ children, title = 'Admin Dashboard' }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'white', color: 'black' }}>
      <aside style={{ color: "black",width: 240, background: '#fff', borderRight: '1px solid #eee', padding: 24 }}>
        <div className="mb-6">
          <Link href="/admin">
            <p className="text-xl font-bold" style={{ color: 'black' }}>Admin</p>
          </Link>
        </div>
        <nav className="flex flex-col gap-2 text-sm">
          <Link href="/admin/applications"><p className="px-3 py-2 rounded hover:bg-gray-100">Applications</p></Link>
          <Link href="/admin/contact-submissions"><p className="px-3 py-2 rounded hover:bg-gray-100">Contact Submissions</p></Link>
          <Link href="/admin/reviews"><p className="px-3 py-2 rounded hover:bg-gray-100">Reviews</p></Link>
          <Link href="/admin/settings"><p className="px-3 py-2 rounded hover:bg-gray-100">Website Settings</p></Link>
          <Link href="/admin/logos"><p className="px-3 py-2 rounded hover:bg-gray-100">Logos</p></Link>
        </nav>
        <div style={{ marginTop: 'auto' }}>
          <LogoutButton />
        </div>
      </aside>
      <main style={{ flex: 1, padding: 32 }}>
        <header className="mb-6">
          <h1 className="text-2xl font-semibold">{title}</h1>
          {/* <p className="text-sm  text-gray-600 mt-1">Admin interface — theme uses site colors</p> */}
        </header>
        <section>
          {children}
        </section>
      </main>
    </div>
  );
}
