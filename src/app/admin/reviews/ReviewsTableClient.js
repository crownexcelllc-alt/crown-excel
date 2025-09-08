"use client"
import React, { useState, useMemo } from 'react';

export default function ReviewsTableClient({ initialData = [], apiBase = process.env.NEXT_PUBLIC_API_URL }) {
  const [rows, setRows] = useState(initialData || []);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(false);

  const filtered = useMemo(() => {
    return rows.filter(r => showAll ? true : !r.approved);
  }, [rows, showAll]);

  async function refresh() {
    try {
      setLoading(true);
      const res = await fetch(`${apiBase}/api/reviews?all=true`);
      if (!res.ok) throw new Error('Fetch failed');
      const data = await res.json();
      setRows(data);
    } catch (err) {
      alert('Failed to refresh reviews');
    } finally { setLoading(false); }
  }

  async function approve(id) {
    if (!confirm('Approve this review?')) return;
    try {
      setLoading(true);
      const res = await fetch(`${apiBase}/api/reviews`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, approve: true }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || 'Approve failed');
      // refresh the list to reflect change from backend
      await refresh();
    } catch (err) {
      alert('Failed to approve: ' + (err.message || err));
    } finally { setLoading(false); }
  }

  async function remove(id) {
    if (!confirm('Delete this review? This cannot be undone.')) return;
    try {
      setLoading(true);
      const res = await fetch(`${apiBase}/api/reviews?id=${encodeURIComponent(id)}`, { method: 'DELETE' });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || 'Delete failed');
      // refresh after delete
      await refresh();
    } catch (err) {
      alert('Failed to delete: ' + (err.message || err));
    } finally { setLoading(false); }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={showAll} onChange={e => setShowAll(e.target.checked)} />
            <span>Show all reviews (including approved)</span>
          </label>
          <button onClick={refresh} className={`px-3 py-2 rounded bg-green-600 text-white ${loading ? 'opacity-60' : ''}`}>Refresh</button>
        </div>
        <div>
          <span className="text-sm text-gray-600">Total: {rows.length}</span>
        </div>
      </div>

      <div className="overflow-x-auto border rounded">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-3 py-2 border">ID</th>
              <th className="px-3 py-2 border">Name</th>
              <th className="px-3 py-2 border">Company</th>
              <th className="px-3 py-2 border">Rating</th>
              <th className="px-3 py-2 border">Message</th>
              <th className="px-3 py-2 border">Approved</th>
              <th className="px-3 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(r => (
              <tr key={r._id} className="hover:bg-gray-50 align-top">
                <td className="px-3 py-2 border align-top">{r._id}</td>
                <td className="px-3 py-2 border align-top">{r.name}</td>
                <td className="px-3 py-2 border align-top">{r.company}</td>
                <td className="px-3 py-2 border align-top">{r.rating}</td>
                <td className="px-3 py-2 border align-top"><div className="max-w-md break-words">{r.message}</div></td>
                <td className="px-3 py-2 border align-top">{r.approved ? 'Yes' : 'No'}</td>
                <td className="px-3 py-2 border align-top">
                  {!r.approved && (
                    <button onClick={() => approve(r._id)} className="px-2 py-1 bg-[#084032] text-white rounded mr-2">Approve</button>
                  )}
                  <button onClick={() => remove(r._id)} className="px-2 py-1 border rounded text-red-600">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
