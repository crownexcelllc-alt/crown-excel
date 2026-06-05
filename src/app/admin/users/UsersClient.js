"use client";
import React, { useState } from 'react';
import { FiPlus, FiUsers, FiEdit2, FiTrash2, FiShield, FiCheckCircle, FiAlertCircle, FiX, FiUserCheck, FiUserX } from 'react-icons/fi';

const ROLES = [
  { value: 'super_admin', label: 'Super Admin', color: 'bg-red-100 text-red-700', desc: 'Full access' },
  { value: 'admin', label: 'Admin', color: 'bg-orange-100 text-orange-700', desc: 'Manage content & websites' },
  { value: 'seo', label: 'SEO Specialist', color: 'bg-purple-100 text-purple-700', desc: 'Manage pages and SEO' },
  { value: 'client', label: 'Client', color: 'bg-blue-100 text-blue-700', desc: 'Edit own website' },
  { value: 'editor', label: 'Editor', color: 'bg-green-100 text-green-700', desc: 'Edit content only' },
  { value: 'viewer', label: 'Viewer', color: 'bg-gray-100 text-gray-700', desc: 'View only' },
];

export default function UsersClient({ initialUsers = [], websites = [], apiBase }) {
  const [users, setUsers] = useState(initialUsers);
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'editor', assignedWebsites: [] });

  const showMsg = (msg, type) => {
    setMessage(msg);
    setMessageType(type);
    setTimeout(() => setMessage(''), 4000);
  };

  const handleCreate = async () => {
    if (!form.name || !form.email || !form.password) {
      showMsg('Please fill all required fields', 'error');
      return;
    }
    try {
      const res = await fetch(`${apiBase}/api/cms/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setUsers(prev => [data.user, ...prev]);
        showMsg('User created successfully!', 'success');
        setShowModal(false);
        setForm({ name: '', email: '', password: '', role: 'editor', assignedWebsites: [] });
      } else {
        showMsg(data.error || 'Failed to create user', 'error');
      }
    } catch (err) {
      showMsg('Error: ' + err.message, 'error');
    }
  };

  const handleRoleChange = async (userId, newRole) => {
    try {
      const res = await fetch(`${apiBase}/api/cms/users`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: userId, role: newRole }),
      });
      if (res.ok) {
        setUsers(prev => prev.map(u => u._id === userId ? { ...u, role: newRole } : u));
        showMsg('Role updated', 'success');
      }
    } catch (err) {
      showMsg('Failed to update role', 'error');
    }
  };

  const handleDelete = async (userId) => {
    if (!confirm('Are you sure you want to permanently delete this user?')) return;
    try {
      const res = await fetch(`${apiBase}/api/cms/users?id=${userId}`, { method: 'DELETE' });
      if (res.ok) {
        setUsers(prev => prev.filter(u => u._id !== userId));
        showMsg('User deleted successfully', 'success');
      } else {
        showMsg('Failed to delete user', 'error');
      }
    } catch (err) {
      showMsg('Failed to delete user', 'error');
    }
  };

  const handleToggleStatus = async (userId, currentStatus) => {
    const newStatus = currentStatus === 'active' ? 'inactive' : 'active';
    if (!confirm(`Are you sure you want to ${newStatus === 'active' ? 'activate' : 'deactivate'} this user?`)) return;
    try {
      const res = await fetch(`${apiBase}/api/cms/users`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: userId, status: newStatus }),
      });
      if (res.ok) {
        setUsers(prev => prev.map(u => u._id === userId ? { ...u, status: newStatus } : u));
        showMsg(`User ${newStatus === 'active' ? 'activated' : 'deactivated'} successfully`, 'success');
      } else {
        showMsg('Failed to update status', 'error');
      }
    } catch (err) {
      showMsg('Failed to update status', 'error');
    }
  };

  const getRoleStyle = (role) => {
    const r = ROLES.find(r => r.value === role);
    return r ? r.color : 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="space-y-6">
      {message && (
        <div className={`rounded-md px-4 py-3 text-sm font-medium flex items-center gap-2
          ${messageType === 'success' ? 'bg-green-100 text-green-700 border border-green-300' : 'bg-red-100 text-red-700 border border-red-300'}`}>
          {messageType === 'success' ? <FiCheckCircle /> : <FiAlertCircle />}
          {message}
        </div>
      )}

      {/* Stats + Add */}
      <div className="flex items-center justify-between">
        <div className="flex gap-4 text-sm text-gray-500">
          <span>{users.length} total users</span>
          <span>{users.filter(u => u.status === 'active').length} active</span>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#084032] text-white text-sm font-semibold rounded-md hover:bg-[#0a5c48] transition"
        >
          <FiPlus /> Add User
        </button>
      </div>

      {/* Users Table */}
      {users.length === 0 ? (
        <div className="bg-white p-12 rounded-lg shadow text-center">
          <FiUsers className="mx-auto text-4xl text-gray-300 mb-4" />
          <h3 className="text-lg font-semibold text-gray-600 mb-2">No Users</h3>
          <p className="text-sm text-gray-400">Create your first user account.</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">User</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Role</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Status</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Websites</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Created</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {users.map(user => (
                <tr key={user._id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#084032] flex items-center justify-center text-white text-sm font-bold">
                        {user.name?.charAt(0).toUpperCase() || '?'}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-800">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <select
                      value={user.role}
                      onChange={(e) => handleRoleChange(user._id, e.target.value)}
                      className={`text-xs font-medium px-2 py-1 rounded-full border-0 cursor-pointer ${getRoleStyle(user.role)}`}
                    >
                      {ROLES.map(r => (
                        <option key={r.value} value={r.value}>{r.label}</option>
                      ))}
                    </select>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      user.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-xs text-gray-500">
                      {user.assignedWebsites?.length || 0} websites
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-xs text-gray-500">
                      {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : '—'}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-2">
                      {user.status === 'active' ? (
                        <button
                          onClick={() => handleToggleStatus(user._id, 'active')}
                          className="p-2 text-gray-400 hover:text-amber-600 hover:bg-amber-50 rounded transition-colors"
                          title="Deactivate User"
                        >
                          <FiUserX size={15} />
                        </button>
                      ) : (
                        <button
                          onClick={() => handleToggleStatus(user._id, 'inactive')}
                          className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded transition-colors"
                          title="Activate User"
                        >
                          <FiUserCheck size={15} />
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(user._id)}
                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                        title="Delete User"
                      >
                        <FiTrash2 size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Role Reference */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
          <FiShield size={14} /> Role Permissions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
          {ROLES.map(role => (
            <div key={role.value} className="p-3 bg-gray-50 rounded text-center">
              <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium mb-1 ${role.color}`}>{role.label}</span>
              <p className="text-[10px] text-gray-500">{role.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Create User Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Create User</h3>
              <button onClick={() => setShowModal(false)} className="p-1 hover:bg-gray-100 rounded"><FiX /></button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Name *</label>
                <input
                  value={form.name}
                  onChange={(e) => setForm(p => ({ ...p, name: e.target.value }))}
                  placeholder="John Doe"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-900 focus:border-[#084032] focus:ring-2 focus:ring-[#00a63e] outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm(p => ({ ...p, email: e.target.value }))}
                  placeholder="user@example.com"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-900 focus:border-[#084032] focus:ring-2 focus:ring-[#00a63e] outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Password *</label>
                <input
                  type="password"
                  value={form.password}
                  onChange={(e) => setForm(p => ({ ...p, password: e.target.value }))}
                  placeholder="Min 8 characters"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-900 focus:border-[#084032] focus:ring-2 focus:ring-[#00a63e] outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Role</label>
                <select
                  value={form.role}
                  onChange={(e) => setForm(p => ({ ...p, role: e.target.value }))}
                  className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:border-[#084032] focus:ring-2 focus:ring-[#00a63e] outline-none"
                >
                  {ROLES.map(r => (
                    <option key={r.value} value={r.value}>{r.label} — {r.desc}</option>
                  ))}
                </select>
              </div>
              <button
                onClick={handleCreate}
                className="w-full px-4 py-2.5 bg-[#084032] text-white text-sm font-semibold rounded-md hover:bg-[#0a5c48] transition"
              >
                Create User
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
