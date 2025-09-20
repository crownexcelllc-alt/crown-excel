import React from 'react';
import ContactTableClient from './ContactTableClient';

export const metadata = {
  title: 'Contact Submissions - Admin',
};
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function ContactSubmissionsPage() {
  const apiBase = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:2999';
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
    <div>
      <h2 className="text-[30px] font-bold uppercase">Inquiry Forms</h2>
      <div className="bg-white p-4 rounded shadow mt-10">

        <p className="text-sm text-gray-600 mb-4">
          <span className='font-bold'>Total Inquiries:</span> {submissions.length}
        </p>
        <ContactTableClient initialData={submissions} apiBase={apiBase} />
      </div>
    </div>
  );
}
