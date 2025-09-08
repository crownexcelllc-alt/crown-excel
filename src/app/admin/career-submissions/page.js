import React from 'react';

export const metadata = {
  title: 'Career Submissions - Admin',
};

export default async function CareerSubmissionsPage() {
  let applications = [];
  try {
   const res = await fetch("/api/contact-submissions");
// const data = await res.json();
    console.log('res',res);
    if (res.ok) {
      applications = await res.json();
    } else {
      console.error('Failed to fetch applications', res.status);
    }
  } catch (err) {
    console.error('Error fetching applications', err);
  }

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-semibold mb-4">Career Form Submissions</h1>
        {applications && applications.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="px-4 py-2 border">ID</th>
                  <th className="px-4 py-2 border">Name</th>
                  <th className="px-4 py-2 border">Email</th>
                  <th className="px-4 py-2 border">Phone</th>
                  <th className="px-4 py-2 border">Position</th>
                  <th className="px-4 py-2 border">Info</th>
                  <th className="px-4 py-2 border">Submitted At</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app) => (
                  <tr key={app.id} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border align-top">{app.id}</td>
                    <td className="px-4 py-2 border align-top">{app.name}</td>
                    <td className="px-4 py-2 border align-top">{app.email}</td>
                    <td className="px-4 py-2 border align-top">{app.phone}</td>
                    <td className="px-4 py-2 border align-top">{app.position}</td>
                    <td className="px-4 py-2 border align-top"><div className="max-w-xs break-words">{app.info}</div></td>
                    <td className="px-4 py-2 border align-top">{new Date(app.createdAt).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-600">No submissions found.</p>
        )}
      </div>
    </div>
  );
}
