"use client"
import React, { useState } from 'react';
import { BarChart3, Code } from 'lucide-react';

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

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-3 flex items-center gap-2">
          <BarChart3 className="w-6 h-6 text-[#084032]" />
          Analytics & Marketing Pixels
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Google Analytics & Tag Manager Card */}
          <div className="bg-gray-50/50 hover:bg-gray-50 border border-gray-200 rounded-xl p-5 transition shadow-sm flex flex-col justify-between md:col-span-2">
            <div>
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm">
                    G
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-sm md:text-base">Google Analytics & Tag Manager</h3>
                    <p className="text-xs text-gray-500">Track site traffic and manage custom event tags</p>
                  </div>
                </div>
                {(settings.googleAnalyticsId || settings.googleTagManagerId) ? (
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-green-50 text-green-700 border border-green-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    ACTIVE
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-gray-100 text-gray-400 border border-gray-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                    INACTIVE
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="googleAnalyticsId" className="block text-xs font-bold text-gray-700 mb-1.5">
                    GA4 Measurement ID
                  </label>
                  <input
                    id="googleAnalyticsId"
                    type="text"
                    value={settings.googleAnalyticsId || ''}
                    onChange={(e) => handleChange('googleAnalyticsId', e.target.value)}
                    placeholder="G-XXXXXXXXXX"
                    className="rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 shadow-sm
                               focus:border-[#084032] focus:ring-2 focus:ring-[#00a63e] focus:outline-none transition bg-white"
                  />
                  <span className="text-[10px] text-gray-400 mt-1">Starting with "G-"</span>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="googleTagManagerId" className="block text-xs font-bold text-gray-700 mb-1.5">
                    GTM Container ID
                  </label>
                  <input
                    id="googleTagManagerId"
                    type="text"
                    value={settings.googleTagManagerId || ''}
                    onChange={(e) => handleChange('googleTagManagerId', e.target.value)}
                    placeholder="GTM-XXXXXXX"
                    className="rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 shadow-sm
                               focus:border-[#084032] focus:ring-2 focus:ring-[#00a63e] focus:outline-none transition bg-white"
                  />
                  <span className="text-[10px] text-gray-400 mt-1">Starting with "GTM-"</span>
                </div>
              </div>
            </div>
          </div>

          {/* Facebook Pixel Card */}
          <div className="bg-gray-50/50 hover:bg-gray-50 border border-gray-200 rounded-xl p-5 transition shadow-sm flex flex-col justify-between md:col-span-1">
            <div>
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
                    f
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-sm md:text-base">Facebook Pixel</h3>
                    <p className="text-xs text-gray-500">Track Meta advertising conversion events</p>
                  </div>
                </div>
                {settings.facebookPixelId ? (
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-green-50 text-green-700 border border-green-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    ACTIVE
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-gray-100 text-gray-400 border border-gray-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                    INACTIVE
                  </div>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="facebookPixelId" className="block text-xs font-bold text-gray-700 mb-1.5">
                  Pixel ID
                </label>
                <input
                  id="facebookPixelId"
                  type="text"
                  value={settings.facebookPixelId || ''}
                  onChange={(e) => handleChange('facebookPixelId', e.target.value)}
                  placeholder="1234567890"
                  className="rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 shadow-sm
                             focus:border-[#084032] focus:ring-2 focus:ring-[#00a63e] focus:outline-none transition bg-white"
                />
                <span className="text-[10px] text-gray-400 mt-1">Numeric identifier from Meta Ads manager</span>
              </div>
            </div>
          </div>

          {/* Custom Header & Body Scripts Injection Card */}
          <div className="bg-gray-50/50 hover:bg-gray-50 border border-gray-200 rounded-xl p-5 transition shadow-sm flex flex-col justify-between md:col-span-3">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <Code className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-sm md:text-base">Custom Scripts Injection</h3>
                    <p className="text-xs text-gray-500">Inject custom HTML scripts inside Head and Body tags safely</p>
                  </div>
                </div>
                {(settings.customHeadScript || settings.customBodyScript) ? (
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-green-50 text-green-700 border border-green-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    SCRIPTS ACTIVE
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-gray-100 text-gray-400 border border-gray-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                    NO SCRIPTS
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="customHeadScript" className="block text-xs font-bold text-gray-700 mb-1.5">
                    Custom Header Scripts (HTML)
                  </label>
                  <textarea
                    id="customHeadScript"
                    value={settings.customHeadScript || ''}
                    onChange={(e) => handleChange('customHeadScript', e.target.value)}
                    placeholder="<!-- Injected inside <head> -->&#10;<script>...</script>"
                    rows={4}
                    className="rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 shadow-sm font-mono
                               focus:border-[#084032] focus:ring-2 focus:ring-[#00a63e] focus:outline-none transition bg-white resize-none"
                  />
                  <span className="text-[10px] text-gray-400 mt-1">
                    Raw HTML/scripts injected in &lt;head&gt; (e.g. site ownership keys, web verification tags, hotjar).
                  </span>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="customBodyScript" className="block text-xs font-bold text-gray-700 mb-1.5">
                    Custom Body Scripts (HTML)
                  </label>
                  <textarea
                    id="customBodyScript"
                    value={settings.customBodyScript || ''}
                    onChange={(e) => handleChange('customBodyScript', e.target.value)}
                    placeholder="<!-- Injected before </body> -->&#10;<noscript>...</noscript>"
                    rows={4}
                    className="rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 shadow-sm font-mono
                               focus:border-[#084032] focus:ring-2 focus:ring-[#00a63e] focus:outline-none transition bg-white resize-none"
                  />
                  <span className="text-[10px] text-gray-400 mt-1">
                    Raw HTML/scripts injected before &lt;/body&gt; (e.g. fallback pixel tracking noscripts, chat icons, tools).
                  </span>
                </div>
              </div>
            </div>
          </div>
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
