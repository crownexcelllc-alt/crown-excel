import { getApiBase } from '@/lib/api-helper';

// app/admin/dashboard/page.tsx (or pages/admin/dashboard.tsx if using Pages Router)

export const revalidate = 60; // Regenerate the page every 60 seconds

async function fetchCounts() {
  try {
    const apiBase = getApiBase();
    const [appRes, contactRes, reviewRes, routesRes, mediaRes, websitesRes] = await Promise.all([
      fetch(`${apiBase}/api/applications`, { cache: 'no-store' }),
      fetch(`${apiBase}/api/contact-submissions`, { cache: 'no-store' }),
      fetch(`${apiBase}/api/reviews`, { cache: 'no-store' }),
      fetch(`${apiBase}/api/cms/routes?websiteId=default`, { cache: 'no-store' }).catch(() => null),
      fetch(`${apiBase}/api/cms/media?websiteId=default&limit=1`, { cache: 'no-store' }).catch(() => null),
      fetch(`${apiBase}/api/cms/websites`, { cache: 'no-store' }).catch(() => null),
    ]);

    const [appData, contactData, reviewData] = await Promise.all([
      appRes.ok ? appRes.json() : [],
      contactRes.ok ? contactRes.json() : [],
      reviewRes.ok ? reviewRes.json() : [],
    ]);

    const routesData = routesRes?.ok ? await routesRes.json() : { total: 0 };
    const mediaData = mediaRes?.ok ? await mediaRes.json() : { total: 0 };
    const websitesData = websitesRes?.ok ? await websitesRes.json() : { total: 0 };

    return {
      applicationCount: appData.length || 0,
      contactCount: contactData.length || 0,
      reviewCount: reviewData.length || 0,
      pagesCount: routesData.total || 0,
      mediaCount: mediaData.total || 0,
      websitesCount: websitesData.total || 0,
    };
  } catch (err) {
    console.error("Error fetching counts:", err);
    return {
      applicationCount: 0, contactCount: 0, reviewCount: 0,
      pagesCount: 0, mediaCount: 0, websitesCount: 0,
    };
  }
}

export default async function AdminDashboard() {
  const { applicationCount, contactCount, reviewCount, pagesCount, mediaCount, websitesCount } = await fetchCounts();

  return (
    <div className="space-y-6 overflow-x-hidden">
      {/* Stats */}
      <h1 className="text-[30px] font-bold">ADMIN DASHBOARD</h1>
      
      {/* Management Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Applications</h3>
          <p className="text-3xl font-bold text-blue-600">
            {applicationCount}
          </p>
          <p className="text-sm text-gray-600">Total applications</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Contact Submissions</h3>
          <p className="text-3xl font-bold text-green-600">
            {contactCount}
          </p>
          <p className="text-sm text-gray-600">Total contacts</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Reviews</h3>
          <p className="text-3xl font-bold text-purple-600">
            {reviewCount}
          </p>
          <p className="text-sm text-gray-600">Total reviews</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Website Settings</h3>
          <p className="text-3xl font-bold text-orange-600">✓</p>
          <p className="text-sm text-gray-600">Configured</p>
        </div>
      </div>

      {/* CMS Stats */}
      <h2 className="text-xl font-bold text-gray-800 mt-4">CMS Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-[#084032]">
          <h3 className="text-lg font-semibold mb-2">Pages & Routes</h3>
          <p className="text-3xl font-bold text-[#084032]">{pagesCount}</p>
          <p className="text-sm text-gray-600">Detected routes</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-pink-500">
          <h3 className="text-lg font-semibold mb-2">Media Files</h3>
          <p className="text-3xl font-bold text-pink-600">{mediaCount}</p>
          <p className="text-sm text-gray-600">Uploaded images</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-cyan-500">
          <h3 className="text-lg font-semibold mb-2">Websites</h3>
          <p className="text-3xl font-bold text-cyan-600">{websitesCount}</p>
          <p className="text-sm text-gray-600">Connected projects</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <a href="/admin/applications" className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
            <h3 className="font-semibold text-blue-900">Manage Applications</h3>
            <p className="text-sm text-blue-700">View and manage job applications</p>
          </a>

          <a href="/admin/contact-submissions" className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
            <h3 className="font-semibold text-green-900">Contact Submissions</h3>
            <p className="text-sm text-green-700">View contact form submissions</p>
          </a>

          <a href="/admin/reviews" className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
            <h3 className="font-semibold text-purple-900">Manage Reviews</h3>
            <p className="text-sm text-purple-700">Approve and manage reviews</p>
          </a>

          <a href="/admin/settings" className="block p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
            <h3 className="font-semibold text-orange-900">Website Settings</h3>
            <p className="text-sm text-orange-700">Configure site settings</p>
          </a>
        </div>
      </div>

      {/* CMS Quick Actions */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">CMS Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <a href="/admin/pages" className="block p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors border border-emerald-200">
            <h3 className="font-semibold text-emerald-900">📄 Pages & Routes</h3>
            <p className="text-sm text-emerald-700">Scan routes, manage pages, edit content</p>
          </a>

          <a href="/admin/seo" className="block p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors border border-indigo-200">
            <h3 className="font-semibold text-indigo-900">🔍 SEO Manager</h3>
            <p className="text-sm text-indigo-700">Meta tags, Open Graph, schema markup</p>
          </a>

          <a href="/admin/media" className="block p-4 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors border border-pink-200">
            <h3 className="font-semibold text-pink-900">🖼️ Media Library</h3>
            <p className="text-sm text-pink-700">Upload and manage images</p>
          </a>


          <a href="/admin/users" className="block p-4 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors border border-amber-200">
            <h3 className="font-semibold text-amber-900">👥 Users</h3>
            <p className="text-sm text-amber-700">User accounts and roles</p>
          </a>

          <a href="/admin/activity" className="block p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors border border-slate-200">
            <h3 className="font-semibold text-slate-900">📊 Activity Logs</h3>
            <p className="text-sm text-slate-700">Track all CMS actions</p>
          </a>
        </div>
      </div>
    </div>
  );
}

