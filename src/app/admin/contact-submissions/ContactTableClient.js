"use client"
import React, { useState, useMemo, useEffect } from 'react';

export default function ContactTableClient({ initialData = [], apiBase = process.env.NEXT_PUBLIC_API_URL }) {
  const [rows, setRows] = useState(initialData || []);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const pageSize = 12;
  const [loading, setLoading] = useState(false);

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
    } finally {
      setLoading(false);
    }
  }

  function downloadCSV() {
    if (!rows || rows.length === 0) return alert('No data');
    const headers = ['id', 'name', 'email', 'phone', 'subject', 'service', 'comments', 'createdAt'];
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
    <div className="bg-white rounded-xl shadow-lg p-6 w-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search name, email, phone, subject..."
            className="border border-[#00a63e] focus:border-[#084032] p-2 rounded-lg w-80 outline-none transition-all"
          />
          <button
            onClick={() => { setQuery(''); setPage(1); }}
            className="px-3 py-2 bg-gray-100 hover:bg-[#00a63e] hover:text-white rounded-lg transition-all"
          >
            Clear
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={refresh}
            className={`px-3 py-2 rounded-lg bg-[#00a63e] hover:bg-[#084032] text-white font-semibold shadow ${loading ? 'opacity-60' : ''} transition-all`}
          >
            Refresh
          </button>
          <button
            onClick={downloadCSV}
            className="px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-800 text-white font-semibold shadow transition-all"
          >
            Export CSV
          </button>
        </div>
      </div>

      <div style={{ overflowX: "auto" }} className="w-full">
        <table style={{ whiteSpace: "nowrap" }} className=" min-w-full text-sm overflow-hidden shadow">
          <thead>
            <tr className="bg-[#084032] text-white">
              <th className="px-4 py-3 font-semibold">Inquiry ID</th>
              <th className="px-4 py-3 font-semibold">Name</th>
              <th className="px-4 py-3 font-semibold">Email</th>
              <th className="px-4 py-3 font-semibold">Phone</th>
              <th className="px-4 py-3 font-semibold">Subject</th>
              <th className="px-4 py-3 font-semibold">Service</th>
              <th className="px-4 py-3 font-semibold">Comments</th>
              <th className="px-4 py-3 font-semibold">Submitted At</th>
            </tr>
          </thead>
          <tbody>
            {pageData.map(s => (
              <tr key={s.id ?? s._id} className="hover:bg-[#e6f9f0] align-top transition-all">
                <td className="px-4 py-3 border-b border-gray-100 align-top">{s.id ?? s._id}</td>
                <td className="px-4 py-3 border-b border-gray-100 align-top">{s.name}</td>
                <td className="px-4 py-3 border-b border-gray-100 align-top">{s.email}</td>
                <td className="px-4 py-3 border-b border-gray-100 align-top">{s.phone}</td>
                <td className="px-4 py-3 border-b border-gray-100 align-top">{s.subject}</td>
                <td className="px-4 py-3 border-b border-gray-100 align-top">{s.service}</td>
                <td className="px-4 py-3 border-b border-gray-100 align-top max-w-sm whitespace-pre-wrap break-words">
                  {s.comments}
                </td>

                <td className="px-4 py-3 border-b border-gray-100 align-top">
                  {s.createdAt ? new Date(s.createdAt).toLocaleString() : ''}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-6">
        <div className="text-sm text-gray-600">
          Showing {Math.min(rows.length, (page - 1) * pageSize + 1)} - {Math.min(rows.length, page * pageSize)} of {rows.length}
        </div>
        <div className="flex items-center gap-2">
          <button
            disabled={page <= 1}
            onClick={() => setPage(p => Math.max(1, p - 1))}
            className="px-4 py-2 border rounded-lg disabled:opacity-50 bg-white hover:bg-[#e6f9f0] transition-all"
          >
            Prev
          </button>
          <div className="px-4 py-2 font-semibold">{page} / {totalPages}</div>
          <button
            disabled={page >= totalPages}
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            className="px-4 py-2 border rounded-lg disabled:opacity-50 bg-white hover:bg-[#e6f9f0] transition-all"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
