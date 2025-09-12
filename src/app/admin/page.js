"use client";

import { useEffect, useState } from "react";

export const dynamic = 'force-dynamic';

export default function AdminDashboard() {
  const [applicationCount, setApplicationCount] = useState(null);
  const [contactCount, setContactCount] = useState(null);
  const [reviewCount, setReviewCount] = useState(null);

  useEffect(() => {
    async function fetchCounts() {
      try {
        // Fetch Applications
        const appRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/applications`);
        if (!appRes.ok) throw new Error('Failed to fetch applications');
        const appData = await appRes.json();
        setApplicationCount(appData.length);

        // Fetch Contact Submissions
        const contactRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact-submissions`);
        if (!contactRes.ok) throw new Error('Failed to fetch contact submissions');
        const contactData = await contactRes.json();
        setContactCount(contactData.length);

        // Fetch Reviews
        const reviewRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/reviews`);
        if (!reviewRes.ok) throw new Error('Failed to fetch reviews');
        const reviewData = await reviewRes.json();
        setReviewCount(reviewData.length);
      } catch (err) {
        console.error("Error fetching counts:", err);
        setApplicationCount(0);
        setContactCount(0);
        setReviewCount(0);
      }
    }

    fetchCounts();
  }, []);

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Applications */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Applications</h3>
          <p className="text-3xl font-bold text-blue-600">
            {applicationCount !== null ? applicationCount : '...'}
          </p>
          <p className="text-sm text-gray-600">Total applications</p>
        </div>

        {/* Contact Submissions */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Contact Submissions</h3>
          <p className="text-3xl font-bold text-green-600">
            {contactCount !== null ? contactCount : '...'}
          </p>
          <p className="text-sm text-gray-600">Total contacts</p>
        </div>

        {/* Reviews */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Reviews</h3>
          <p className="text-3xl font-bold text-purple-600">
            {reviewCount !== null ? reviewCount : '...'}
          </p>
          <p className="text-sm text-gray-600">Total reviews</p>
        </div>

        {/* Website Settings (static) */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Website Settings</h3>
          <p className="text-3xl font-bold text-orange-600">✓</p>
          <p className="text-sm text-gray-600">Configured</p>
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
    </div>
  );
}
