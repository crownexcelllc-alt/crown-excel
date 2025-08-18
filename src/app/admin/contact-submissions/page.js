import React from 'react';
import ContactTableClient from './ContactTableClient';

export const metadata = {
  title: 'Contact Submissions - Admin',
};

export default async function ContactSubmissionsPage() {
  const apiBase = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  let submissions = [];
  
  try {
    const res = await fetch(`${apiBase}/api/contact-submissions`, { 
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (res.ok) {
      submissions = await res.json();
    } else {
      console.error('Failed to fetch contact submissions', res.status);
    }
  } catch (err) {
    console.error('Error fetching contact submissions', err);
  }

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Contact Submissions</h2>
      <p className="text-sm text-gray-600 mb-4">
        Manage contact form submissions from your website. Total submissions: {submissions.length}
      </p>
      <ContactTableClient initialData={submissions} apiBase={apiBase} />
    </div>
  );
}
