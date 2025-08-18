"use client"
import React, { useState, useMemo } from 'react';

export default function ApplicationsTableClient({ initialData = [], apiBase = '' }) {
  const [rows, setRows] = useState(initialData || []);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const [loading, setLoading] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter(r => (
      (r.name || '').toString().toLowerCase().includes(q) ||
      (r.email || '').toString().toLowerCase().includes(q) ||
      (r.phone || '').toString().toLowerCase().includes(q) ||
      (r.position || '').toString().toLowerCase().includes(q)
    ));
  }, [rows, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageData = filtered.slice((page - 1) * pageSize, page * pageSize);

  async function refresh() {
    try {
      setLoading(true);
      const res = await fetch(`${apiBase}/api/applications`);
      if (!res.ok) throw new Error('Fetch failed');
      const data = await res.json();
      setRows(data);
      setPage(1);
    } catch (err) {
      alert('Failed to refresh applications');
    } finally { setLoading(false); }
  }

  function downloadCSV() {
    if (!rows || rows.length === 0) return alert('No data');
    const headers = ['id','name','email','phone','position','experience','education','cv','createdAt'];
    const csv = [headers.join(',')].concat(rows.map(r => headers.map(h => {
      const v = r[h] ?? r[h] === 0 ? r[h] : '';
      const s = (v + '').replace(/"/g, '""');
      return `"${s}"`;
    }).join(',')).join('\n'));
    const blob = new Blob([csv.join('\n')], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'applications.csv'; document.body.appendChild(a); a.click(); a.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <input 
            value={query} 
            onChange={e => setQuery(e.target.value)} 
            placeholder="Search name, email, phone, position..." 
            className="border p-2 rounded w-80" 
          />
          <button onClick={() => { setQuery(''); setPage(1); }} className="px-3 py-2 bg-gray-100 rounded">Clear</button>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={refresh} className={`px-3 py-2 rounded bg-green-600 text-white ${loading ? 'opacity-60' : ''}`}>Refresh</button>
          <button onClick={downloadCSV} className="px-3 py-2 rounded bg-blue-600 text-white">Export CSV</button>
        </div>
      </div>

      <div className="overflow-x-auto border rounded">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-3 py-2 border">ID</th>
              <th className="px-3 py-2 border">Name</th>
              <th className="px-3 py-2 border">Email</th>
              <th className="px-3 py-2 border">Phone</th>
              <th className="px-3 py-2 border">Position</th>
              <th className="px-3 py-2 border">Experience</th>
              <th className="px-3 py-2 border">Education</th>
              <th className="px-3 py-2 border">CV</th>
              <th className="px-3 py-2 border">Applied At</th>
            </tr>
          </thead>
          <tbody>
            {pageData.map(app => (
              <tr key={app.id ?? app._id} className="hover:bg-gray-50 align-top">
                <td className="px-3 py-2 border align-top">{app.id ?? app._id}</td>
                <td className="px-3 py-2 border align-top">{app.name}</td>
                <td className="px-3 py-2 border align-top">{app.email}</td>
                <td className="px-3 py-2 border align-top">{app.phone}</td>
                <td className="px-3 py-2 border align-top">{app.position}</td>
                <td className="px-3 py-2 border align-top">
                  <div className="max-w-xs break-words">{app.experience}</div>
                </td>
                <td className="px-3 py-2 border align-top">
                  <div className="max-w-xs break-words">{app.education}</div>
                </td>
                <td className="px-3 py-2 border align-top">
                  {app.cv ? (
                    <a href={app.cv} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      View CV
                    </a>
                  ) : (
                    'No CV'
                  )}
                </td>
                <td className="px-3 py-2 border align-top">
                  {app.createdAt ? new Date(app.createdAt).toLocaleString() : ''}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-gray-600">
          Showing {Math.min(rows.length, (page-1)*pageSize + 1)} - {Math.min(rows.length, page*pageSize)} of {rows.length}
        </div>
        <div className="flex items-center gap-2">
          <button 
            disabled={page<=1} 
            onClick={() => setPage(p => Math.max(1,p-1))} 
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Prev
          </button>
          <div className="px-3 py-1">{page} / {totalPages}</div>
          <button 
            disabled={page>=totalPages} 
            onClick={() => setPage(p => Math.min(totalPages,p+1))} 
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
