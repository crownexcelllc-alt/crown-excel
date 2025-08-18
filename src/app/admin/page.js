export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Applications</h3>
          <p className="text-3xl font-bold text-blue-600">--</p>
          <p className="text-sm text-gray-600">Total applications</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Contact Submissions</h3>
          <p className="text-3xl font-bold text-green-600">--</p>
          <p className="text-sm text-gray-600">Total contacts</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Reviews</h3>
          <p className="text-3xl font-bold text-purple-600">--</p>
          <p className="text-sm text-gray-600">Total reviews</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Website Settings</h3>
          <p className="text-3xl font-bold text-orange-600">✓</p>
          <p className="text-sm text-gray-600">Configured</p>
        </div>
      </div>

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
    </div>
  );
}
