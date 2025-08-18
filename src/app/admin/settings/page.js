import React from 'react';
import SettingsClient from './SettingsClient';

export const metadata = {
  title: 'Website Settings - Admin',
};

export default async function SettingsPage() {
  const apiBase = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  let settings = {
    phone: '',
    email: '',
    address: '',
    logo: '',
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: ''
  };
  
  try {
    const res = await fetch(`${apiBase}/api/settings`, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      if (data && typeof data === 'object') {
        settings = { ...settings, ...data };
      }
    } else {
      console.error('Failed to fetch settings', res.status);
    }
  } catch (err) {
    console.error('Error fetching settings', err);
  }

  return (
    <div className="bg-white p-6 rounded shadow">
      <p className="text-sm text-gray-600 mb-6">Manage your website contact information and social media links</p>
      <SettingsClient initialSettings={settings} apiBase={apiBase} />
    </div>
  );
}
