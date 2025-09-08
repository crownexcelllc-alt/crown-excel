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

  return (
    <div className="max-w-2xl">
      {message && (
        <div className={`mb-4 p-3 rounded ${message.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {message}
        </div>
      )}

      <div className="space-y-6">
        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact Information</h3>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="text"
                value={settings.phone || ''}
                onChange={(e) => handleChange('phone', e.target.value)}
                placeholder="+971 4-354 0566"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                value={settings.email || ''}
                onChange={(e) => handleChange('email', e.target.value)}
                placeholder="contact@crownexcel.com"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <textarea
                value={settings.address || ''}
                onChange={(e) => handleChange('address', e.target.value)}
                placeholder="Al Jahra Building, 2nd floor, 18th St – Al Raffa – Dubai"
                rows={3}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Social Media Links</h3>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Facebook URL</label>
              <input
                type="url"
                value={settings.facebook || ''}
                onChange={(e) => handleChange('facebook', e.target.value)}
                placeholder="https://facebook.com/crownexcel"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Twitter URL</label>
              <input
                type="url"
                value={settings.twitter || ''}
                onChange={(e) => handleChange('twitter', e.target.value)}
                placeholder="https://twitter.com/crownexcel"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Instagram URL</label>
              <input
                type="url"
                value={settings.instagram || ''}
                onChange={(e) => handleChange('instagram', e.target.value)}
                placeholder="https://instagram.com/crownexcel"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn URL</label>
              <input
                type="url"
                value={settings.linkedin || ''}
                onChange={(e) => handleChange('linkedin', e.target.value)}
                placeholder="https://linkedin.com/company/crownexcel"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="pt-4 border-t">
          <button
            onClick={handleSave}
            disabled={loading}
            className={`px-6 py-2 rounded text-white font-medium ${
              loading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
            }`}
          >
            {loading ? 'Saving...' : 'Save Settings'}
          </button>
        </div>
      </div>
    </div>
  );
}
