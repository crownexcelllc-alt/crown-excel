import React from 'react';
import LogoClient from './LogoClient';

export const metadata = { title: 'Logo Management - Admin' };

export default async function LogosPage() {
  const apiBase = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  let currentLogo = '/Images/footerlogo.png';
  
  try {
    const res = await fetch(`${apiBase}/api/logo`, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      currentLogo = data.logo || '/Images/footerlogo.png';
    }
  } catch (err) {
    console.error('Failed to fetch current logo', err);
  }

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Logo Management</h2>
      <p className="text-gray-600 mb-6">
        Manage your website logo. Changes will reflect across the entire website including the footer.
      </p>
      
      <LogoClient currentLogo={currentLogo} apiBase={apiBase} />
    </div>
  );
}
