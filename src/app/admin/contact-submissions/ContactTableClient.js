"use client"
import React, { useState, useMemo, useEffect } from 'react';

export default function ContactTableClient({ initialData = [], apiBase = process.env.NEXT_PUBLIC_API_URL }) {
  const [rows, setRows] = useState(initialData || []);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const pageSize = 12;
  const [loading, setLoading] = useState(false);

  // Auto-load data if no initial data provided
  useEffect(() => {
    if (!initialData || initialData.length === 0) {
      refresh();
    }
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter(r => (
      (r.name || '').toString().toLowerCase().includes(q) ||
      (r.email || '').toString().toLowerCase().includes(q) ||
      (r.phone || '').toString().toLowerCase().includes(q) ||
      (r.subject || '').toString().toLowerCase().includes(q) ||
      (r.service || '').toString().toLowerCase().includes(q)
    ));
  }, [rows, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageData = filtered.slice((page - 1) * pageSize, page * pageSize);

  async function refresh() {
    try {
      setLoading(true);
      const baseUrl = apiBase || '';
      const res = await fetch(`${baseUrl}/api/contact-submissions`);
      if (!res.ok) throw new Error('Fetch failed');
      const data = await res.json();
      setRows(data);
      setPage(1);
    } catch (err) {
      console.error('Failed to refresh:', err);
      alert('Failed to refresh: ' + err.message);
    } finally { setLoading(false); }
  }

  function downloadCSV() {
    if (!rows || rows.length === 0) return alert('No data');
    const headers = ['id','name','email','phone','subject','service','comments','createdAt'];
    const csv = [headers.join(',')].concat(rows.map(r => headers.map(h => {
      const v = r[h] ?? r[h] === 0 ? r[h] : '';
      const s = (v + '').replace(/"/g, '""');
      return `"${s}"`;
    }).join(',')).join('\n'));
    const blob = new Blob([csv.join('\n')], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'contact_submissions.csv'; document.body.appendChild(a); a.click(); a.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search name, email, phone, subject..." className="border p-2 rounded w-80" />
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
              <th className="px-3 py-2 border">Subject</th>
              <th className="px-3 py-2 border">Service</th>
              <th className="px-3 py-2 border">Comments</th>
              <th className="px-3 py-2 border">Submitted At</th>
            </tr>
          </thead>
          <tbody>
            {pageData.map(s => (
              <tr key={s.id ?? s._id} className="hover:bg-gray-50 align-top">
                <td className="px-3 py-2 border align-top">{s.id ?? s._id}</td>
                <td className="px-3 py-2 border align-top">{s.name}</td>
                <td className="px-3 py-2 border align-top">{s.email}</td>
                <td className="px-3 py-2 border align-top">{s.phone}</td>
                <td className="px-3 py-2 border align-top">{s.subject}</td>
                <td className="px-3 py-2 border align-top">{s.service}</td>
                <td className="px-3 py-2 border align-top"><div className="max-w-md break-words">{s.comments}</div></td>
                <td className="px-3 py-2 border align-top">{s.createdAt ? new Date(s.createdAt).toLocaleString() : ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-gray-600">Showing {Math.min(rows.length, (page-1)*pageSize + 1)} - {Math.min(rows.length, page*pageSize)} of {rows.length}</div>
        <div className="flex items-center gap-2">
          <button disabled={page<=1} onClick={() => setPage(p => Math.max(1,p-1))} className="px-3 py-1 border rounded">Prev</button>
          <div className="px-3 py-1">{page} / {totalPages}</div>
          <button disabled={page>=totalPages} onClick={() => setPage(p => Math.min(totalPages,p+1))} className="px-3 py-1 border rounded">Next</button>
        </div>
      </div>
    </div>
  );
}
