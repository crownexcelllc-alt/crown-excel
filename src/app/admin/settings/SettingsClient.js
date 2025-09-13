"use client"
import React, { useState } from 'react';

export default function SettingsClient({ initialSettings = {}, apiBase = process.env.NEXT_PUBLIC_API_URL }) {
  const [settings, setSettings] = useState(initialSettings);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (field, value) => {
    setSettings(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    setLoading(true);
    setMessage('');
    try {
      const res = await fetch(`${apiBase}/api/settings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      });

      if (!res.ok) {
        const error = await res.json().catch(() => ({}));
        throw new Error(error.error || 'Failed to save settings');
      }

      setMessage('Settings saved successfully!');
      setTimeout(() => setMessage(''), 3000);
    } catch (err) {
      console.error(err);
      setMessage('Failed to save settings: ' + err.message);
      setTimeout(() => setMessage(''), 5000);
    } finally {
      setLoading(false);
    }
  };

  const SocialInput = ({ platform, field, settings, handleChange }) => (
    <div className="flex flex-col">
      <label htmlFor={field} className="block text-sm font-semibold text-gray-700 mb-2">{platform} URL</label>
      <input
        id={field}
        type="url"
        value={settings[field] || ''}
        onChange={(e) => handleChange(field, e.target.value)}
        placeholder={`https://${platform.toLowerCase()}.com/yourpage`}
        className="rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 shadow-sm
                   focus:border-[#084032] focus:ring-2 focus:ring-[#00a63e] focus:outline-none transition"
      />
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      {message && (
        <div
          className={`mb-6 rounded-md px-4 py-3 text-center font-medium
                      ${message.includes('successfully')
              ? 'bg-green-100 text-green-700 border border-green-300'
              : 'bg-red-100 text-red-700 border border-red-300'}`}
          role="alert"
        >
          {message}
        </div>
      )}

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-2">Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
            <input
              id="phone"
              type="text"
              value={settings.phone || ''}
              onChange={(e) => handleChange('phone', e.target.value)}
              placeholder="+971 4-354 0566"
              className="rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 shadow-sm
                         focus:border-[#084032] focus:ring-2 focus:ring-[#00a63e] focus:outline-none transition"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
            <input
              id="email"
              type="email"
              value={settings.email || ''}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="contact@crownexcel.com"
              className="rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 shadow-sm
                         focus:border-[#084032] focus:ring-2 focus:ring-[#00a63e] focus:outline-none transition"
            />
          </div>

          <div className="md:col-span-2 flex flex-col">
            <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">Address</label>
            <textarea
              id="address"
              value={settings.address || ''}
              onChange={(e) => handleChange('address', e.target.value)}
              placeholder="Al Jahra Building, 2nd floor, 18th St – Al Raffa – Dubai"
              rows={3}
              className="rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 shadow-sm resize-none
                         focus:border-[#084032] focus:ring-2 focus:ring-[#00a63e] focus:outline-none transition"
            />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-2">Social Media Links</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <SocialInput platform="Facebook" field="facebook" settings={settings} handleChange={handleChange} />
          <SocialInput platform="Twitter" field="twitter" settings={settings} handleChange={handleChange} />
          <SocialInput platform="Instagram" field="instagram" settings={settings} handleChange={handleChange} />
          <SocialInput platform="LinkedIn" field="linkedin" settings={settings} handleChange={handleChange} />
          <SocialInput platform="YouTube" field="youtube" settings={settings} handleChange={handleChange} />
          <SocialInput platform="TikTok" field="tiktok" settings={settings} handleChange={handleChange} />
          <SocialInput platform="Pinterest" field="pinterest" settings={settings} handleChange={handleChange} />
          <SocialInput platform="WhatsApp" field="whatsapp" settings={settings} handleChange={handleChange} />
          <SocialInput platform="Telegram" field="telegram" settings={settings} handleChange={handleChange} />
          <SocialInput platform="Reddit" field="reddit" settings={settings} handleChange={handleChange} />
          <SocialInput platform="Threads" field="threads" settings={settings} handleChange={handleChange} />
        </div>
      </section>

      <div className="pt-6 border-t flex justify-end">
        <button
          onClick={handleSave}
          disabled={loading}
          className={`px-8 py-3 rounded-md text-white font-semibold transition
                      ${loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-[#084032] hover:bg-[#318d74] focus:outline-none focus:ring-2 focus:ring-[#00a63e]'}`}
        >
          {loading ? 'Saving...' : 'Save Settings'}
        </button>
      </div>
    </div>
  );
}
