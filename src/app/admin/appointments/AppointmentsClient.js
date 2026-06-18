'use client';

import { useState } from 'react';
import { FiPlus, FiTrash2, FiSave, FiCalendar, FiEdit2, FiCheck, FiX } from 'react-icons/fi';

export default function AppointmentsClient({ initialLinks = [], apiBase = '' }) {
  const normalize = (links) =>
    links.map(l => ({ ...l, active: l.active !== false }));

  const [links, setLinks] = useState(normalize(initialLinks));
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState(null);

  // Inline edit state: which link id is being edited
  const [editingId, setEditingId] = useState(null);
  const [editDraft, setEditDraft] = useState({ name: '', url: '' });

  // ── add new row ──────────────────────────────────────────────────────────────
  function addLink() {
    const newId = `link_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    const newLink = { id: newId, name: '', url: '', active: true };
    setLinks(prev => [...prev, newLink]);
    // immediately open edit mode for this row
    setEditingId(newId);
    setEditDraft({ name: '', url: '' });
  }

  // ── delete row ───────────────────────────────────────────────────────────────
  function removeLink(id) {
    if (editingId === id) setEditingId(null);
    const updated = links.filter(l => l.id !== id);
    setLinks(updated);
    persistLinks(updated);
  }

  // ── toggle active/inactive ───────────────────────────────────────────────────
  function toggleActive(id) {
    const updated = links.map(l => l.id === id ? { ...l, active: !l.active } : l);
    setLinks(updated);
    persistLinks(updated);
  }

  // ── inline edit helpers ──────────────────────────────────────────────────────
  function startEdit(link) {
    setEditingId(link.id);
    setEditDraft({ name: link.name, url: link.url });
  }

  function cancelEdit(id) {
    // If it was a brand-new unsaved row (empty name/url), remove it
    const link = links.find(l => l.id === id);
    if (link && !link.name && !link.url) {
      setLinks(prev => prev.filter(l => l.id !== id));
    }
    setEditingId(null);
  }

  function confirmEdit(id) {
    if (!editDraft.name.trim() || !editDraft.url.trim()) {
      setMessage({ type: 'error', text: 'Please fill in both Name and URL.' });
      setTimeout(() => setMessage(null), 3000);
      return;
    }
    const updated = links.map(l =>
      l.id === id ? { ...l, name: editDraft.name.trim(), url: editDraft.url.trim() } : l
    );
    setLinks(updated);
    setEditingId(null);
    persistLinks(updated);
  }

  // ── persist to DB ────────────────────────────────────────────────────────────
  async function persistLinks(linksToSave) {
    // Only save rows that have both name and url filled
    const valid = linksToSave.filter(l => l.name && l.url);
    setSaving(true);
    setMessage(null);
    try {
      const res = await fetch(`${apiBase}/api/appointments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ links: valid }),
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        // Sync state with server response (keeps unsaved rows intact)
        setLinks(prev => {
          const saved = new Map(data.links.map(l => [l.id, l]));
          return prev.map(l => saved.get(l.id) || l);
        });
        setMessage({ type: 'success', text: 'Saved successfully!' });
      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to save.' });
      }
    } catch {
      setMessage({ type: 'error', text: 'Network error. Please try again.' });
    } finally {
      setSaving(false);
      setTimeout(() => setMessage(null), 3000);
    }
  }

  const activeCount = links.filter(l => l.active && l.name && l.url).length;
  const totalCount = links.filter(l => l.name && l.url).length;

  return (
    <div className="space-y-5">

      {/* ── Top bar ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-[#084032]">
          <FiCalendar size={18} />
          <span className="font-semibold text-sm">
            Manage Appointment Links
          </span>
          {totalCount > 0 && (
            <span className="ml-1 text-xs text-gray-400 font-normal">
              ({activeCount} active / {totalCount} total)
            </span>
          )}
        </div>
        <button
          onClick={addLink}
          className="flex items-center gap-2 px-4 py-2 bg-[#084032] text-white text-sm rounded hover:bg-[#0a5c48] transition-colors duration-200"
        >
          <FiPlus size={14} />
          Add New Link
        </button>
      </div>

      {/* ── Status message ── */}
      {message && (
        <div className={`px-4 py-2.5 rounded text-sm font-medium flex items-center gap-2 ${
          message.type === 'success'
            ? 'bg-green-50 text-green-700 border border-green-200'
            : 'bg-red-50 text-red-700 border border-red-200'
        }`}>
          {saving && (
            <svg className="animate-spin h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
            </svg>
          )}
          {message.text}
        </div>
      )}

      {/* ── Empty state ── */}
      {links.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-gray-400 border-2 border-dashed border-gray-200 rounded-xl">
          <FiCalendar size={34} className="mb-3 opacity-40" />
          <p className="text-sm font-medium">No appointment links yet.</p>
          <p className="text-xs mt-1">Click <strong>&ldquo;Add New Link&rdquo;</strong> to get started.</p>
        </div>
      ) : (

        /* ── Table ── */
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide w-10">#</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Name</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">URL</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wide w-28">Status</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wide w-24">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {links.map((link, idx) => {
                const isEditing = editingId === link.id;
                const isSaved = !!(link.name && link.url);

                return (
                  <tr
                    key={link.id}
                    className={`transition-colors ${
                      isEditing ? 'bg-[#f0f7f4]' : isSaved ? 'hover:bg-gray-50' : 'bg-yellow-50'
                    }`}
                  >
                    {/* # */}
                    <td className="px-4 py-3">
                      <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#084032]/10 text-[#084032] text-xs font-bold">
                        {idx + 1}
                      </span>
                    </td>

                    {/* Name */}
                    <td className="px-4 py-3">
                      {isEditing ? (
                        <input
                          autoFocus
                          type="text"
                          value={editDraft.name}
                          onChange={e => setEditDraft(d => ({ ...d, name: e.target.value }))}
                          placeholder="Link name (e.g. Book a Call)"
                          className="w-full px-2.5 py-1.5 border border-[#084032] rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#084032]/30"
                        />
                      ) : (
                        <span className={`font-medium ${!isSaved ? 'text-gray-400 italic text-xs' : 'text-gray-800'}`}>
                          {link.name || 'Unsaved — click edit'}
                        </span>
                      )}
                    </td>

                    {/* URL */}
                    <td className="px-4 py-3 max-w-[250px]">
                      {isEditing ? (
                        <input
                          type="url"
                          value={editDraft.url}
                          onChange={e => setEditDraft(d => ({ ...d, url: e.target.value }))}
                          placeholder="https://calendar.google.com/..."
                          className="w-full px-2.5 py-1.5 border border-[#084032] rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#084032]/30"
                        />
                      ) : (
                        <span className="text-gray-400 text-xs truncate block max-w-[220px]" title={link.url}>
                          {link.url || '—'}
                        </span>
                      )}
                    </td>

                    {/* Status Toggle */}
                    <td className="px-4 py-3 text-center">
                      {isSaved ? (
                        <button
                          onClick={() => toggleActive(link.id)}
                          title={link.active ? 'Click to deactivate' : 'Click to activate'}
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
                            link.active
                              ? 'bg-green-100 text-green-700 hover:bg-green-200'
                              : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                          }`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${link.active ? 'bg-green-500' : 'bg-gray-400'}`} />
                          {link.active ? 'Active' : 'Inactive'}
                        </button>
                      ) : (
                        <span className="text-xs text-gray-300">—</span>
                      )}
                    </td>

                    {/* Actions */}
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-center gap-1.5">
                        {isEditing ? (
                          <>
                            {/* Confirm */}
                            <button
                              onClick={() => confirmEdit(link.id)}
                              title="Save"
                              className="p-1.5 text-green-600 hover:text-green-800 hover:bg-green-50 rounded transition-colors"
                            >
                              <FiCheck size={15} />
                            </button>
                            {/* Cancel */}
                            <button
                              onClick={() => cancelEdit(link.id)}
                              title="Cancel"
                              className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors"
                            >
                              <FiX size={15} />
                            </button>
                          </>
                        ) : (
                          <>
                            {/* Edit */}
                            <button
                              onClick={() => startEdit(link)}
                              title="Edit"
                              className="p-1.5 text-[#084032] hover:text-[#0a5c48] hover:bg-[#084032]/10 rounded transition-colors"
                            >
                              <FiEdit2 size={14} />
                            </button>
                            {/* Delete */}
                            <button
                              onClick={() => removeLink(link.id)}
                              title="Delete"
                              className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                            >
                              <FiTrash2 size={14} />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* ── Legend ── */}
      {links.length > 0 && (
        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 pt-1">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
            Active — visible to clients
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-gray-400 inline-block" />
            Inactive — hidden from clients
          </span>
          <span className="ml-auto text-gray-300 italic">
            {saving ? 'Saving…' : 'Changes auto-save instantly'}
          </span>
        </div>
      )}
    </div>
  );
}
