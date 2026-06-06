import React from 'react';
import SettingsClient from './SettingsClient';
import { getApiBase } from '@/lib/api-helper';

export const metadata = {
  title: 'Website Settings - Admin',
};
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function SettingsPage() {
  const apiBase = getApiBase();
  let settings = {
    phone: '',
    email: '',
    address: '',
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: '',
    youtube: '',
    pinterest: '',
    tiktok: '',
    telegram: '',
    snapchat: '',
    whatsapp: '',
    reddit: '',
    threads: '',
    googleAnalyticsId: '',
    googleTagManagerId: '',
    facebookPixelId: '',
    customHeadScript: '',
    customBodyScript: ''
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
    <div>
      <h1 className='text-[30px] font-bold '>BUSINESS SETTINGS</h1>
        <p className="text-sm text-gray-600 ">Manage your website contact information and social media links</p>

      <div className="bg-white p-6 rounded shadow mt-5">
        <SettingsClient initialSettings={settings} apiBase={apiBase} />
      </div>
    </div>
  );
}
