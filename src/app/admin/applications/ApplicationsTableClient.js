"use client"
import React, { useState, useMemo } from 'react';

export default function ApplicationsTableClient({ initialData = [], apiBase = process.env.NEXT_PUBLIC_API_URL }) {
  const [rows, setRows] = useState(initialData || []);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const [loading, setLoading] = useState(false);
  console.log("Application Row", rows);
  

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
    <div className="bg-white rounded-xl shadow-lg p-6 w-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <input 
            value={query} 
            onChange={e => setQuery(e.target.value)} 
            placeholder="Search name, email, phone, position..." 
            className="border border-[#00a63e] focus:border-[#084032] p-2 rounded-lg w-80 outline-none transition-all" 
          />
          <button onClick={() => { setQuery(''); setPage(1); }} className="px-3 py-2 bg-gray-100 hover:bg-[#00a63e] hover:text-white rounded-lg transition-all">Clear</button>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={refresh} className={`px-3 py-2 rounded-lg bg-[#00a63e] hover:bg-[#084032] text-white font-semibold shadow ${loading ? 'opacity-60' : ''} transition-all`}>Refresh</button>
          <button onClick={downloadCSV} className="px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-800 text-white font-semibold shadow transition-all">Export CSV</button>
        </div>
      </div>

      <div style={{ overflowX: "auto" }} className="w-full">
        <table style={{ whiteSpace: "nowrap" }} className="min-w-full text-sm  overflow-hidden shadow">
          <thead>
            <tr className="bg-[#084032] text-white">
              <th className="px-4 py-3 font-semibold">Application ID</th>
              <th className="px-4 py-3 font-semibold">Name</th>
              <th className="px-4 py-3 font-semibold">Email</th>
              <th className="px-4 py-3 font-semibold">Phone</th>
              <th className="px-4 py-3 font-semibold">Position</th>
              <th className="px-4 py-3 font-semibold">Experience</th>
              <th className="px-4 py-3 font-semibold">Education</th>
              <th className="px-4 py-3 font-semibold">CV</th>
              <th className="px-4 py-3 font-semibold">Applied At</th>
            </tr>
          </thead>
          <tbody>
            {pageData.map(app => (
              <tr key={app.id ?? app._id} className="hover:bg-[#e6f9f0] align-top transition-all">
                <td className="px-4 py-3 border-b border-gray-100 align-top">{app.id ?? app._id}</td>
                <td className="px-4 py-3 border-b border-gray-100 align-top">{app.name}</td>
                <td className="px-4 py-3 border-b border-gray-100 align-top">{app.email}</td>
                <td className="px-4 py-3 border-b border-gray-100 align-top">{app.phone}</td>
                <td className="px-4 py-3 border-b border-gray-100 align-top">{app.position}</td>
                <td className="px-4 py-3 border-b border-gray-100 align-top">
                  <div className="max-w-xs break-words">{app.experience}</div>
                </td>
                <td className="px-4 py-3 border-b border-gray-100 align-top">
                  <div className="max-w-xs break-words">{app.education}</div>
                </td>
                <td className="px-4 py-3 border-b border-gray-100 align-top">
                  {app.cv ? (
                    <a href={app.cv} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                      View CV
                    </a>
                  ) : (
                    <span className="text-gray-400">No CV</span>
                  )}
                </td>
                <td className="px-4 py-3 border-b border-gray-100 align-top">
                  {app.createdAt ? new Date(app.createdAt).toLocaleString() : ''}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-6">
        <div className="text-sm text-gray-600">
          Showing {Math.min(rows.length, (page-1)*pageSize + 1)} - {Math.min(rows.length, page*pageSize)} of {rows.length}
        </div>
        <div className="flex items-center gap-2">
          <button 
            disabled={page<=1} 
            onClick={() => setPage(p => Math.max(1,p-1))} 
            className="px-4 py-2 border rounded-lg disabled:opacity-50 bg-white hover:bg-[#e6f9f0] transition-all"
          >
            Prev
          </button>
          <div className="px-4 py-2 font-semibold">{page} / {totalPages}</div>
          <button 
            disabled={page>=totalPages} 
            onClick={() => setPage(p => Math.min(totalPages,p+1))} 
            className="px-4 py-2 border rounded-lg disabled:opacity-50 bg-white hover:bg-[#e6f9f0] transition-all"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
