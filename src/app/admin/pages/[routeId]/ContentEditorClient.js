"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiArrowLeft, FiSave, FiPlus, FiTrash2, FiChevronUp, FiChevronDown, FiEye, FiCheckCircle, FiAlertCircle, FiImage, FiType, FiLink, FiFileText } from 'react-icons/fi';

export default function ContentEditorClient({ initialContent, routeId, routePath, apiBase, templates = [], isNew }) {
  const [content, setContent] = useState(initialContent || { sections: [], status: 'draft', version: 1 });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [uploadingField, setUploadingField] = useState(null); // 'sectionIndex_fieldKey'
  const [showTemplateModal, setShowTemplateModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userStr = localStorage.getItem("user");
      if (userStr) {
        try {
          setCurrentUser(JSON.parse(userStr));
        } catch (e) {
          console.error("Failed to parse user session:", e);
        }
      } else {
        const token = localStorage.getItem("jwt");
        if (token) {
          setCurrentUser({ name: "Super Admin", role: "super_admin" });
        }
      }
    }
  }, []);

  const role = currentUser?.role || 'super_admin';
  const canEditContent = role !== 'viewer';

  // Direct image upload
  const handleImageUpload = async (e, sectionIndex, fieldKey) => {
    if (!canEditContent) return;
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingField(`${sectionIndex}_${fieldKey}`);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('websiteId', 'default');
    formData.append('folder', 'content');

    try {
      const res = await fetch(`${apiBase}/api/cms/media`, {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error('Upload failed');
      const data = await res.json();
      if (data.ok && data.media && data.media.url) {
        updateField(sectionIndex, fieldKey, 'value', data.media.url);
      }
    } catch (err) {
      console.error('Image upload failed:', err);
      alert('Upload failed: ' + err.message);
    } finally {
      setUploadingField(null);
    }
  };

  const [expandedSections, setExpandedSections] = useState(new Set(
    (initialContent?.sections || []).map((_, i) => i)
  ));

  // Toggle section expansion
  const toggleSection = (index) => {
    setExpandedSections(prev => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  // Update a field in a section
  const updateField = (sectionIndex, fieldKey, property, value) => {
    if (!canEditContent) return;
    setContent(prev => {
      const newSections = [...prev.sections];
      const section = { ...newSections[sectionIndex] };
      const fields = { ...section.fields };
      fields[fieldKey] = { ...fields[fieldKey], [property]: value };
      section.fields = fields;
      newSections[sectionIndex] = section;
      return { ...prev, sections: newSections };
    });
  };

  // Update section name
  const updateSectionName = (index, name) => {
    if (!canEditContent) return;
    setContent(prev => {
      const newSections = [...prev.sections];
      newSections[index] = { ...newSections[index], sectionName: name };
      return { ...prev, sections: newSections };
    });
  };

  // Move section up/down
  const moveSection = (index, direction) => {
    if (!canEditContent) return;
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= content.sections.length) return;
    setContent(prev => {
      const newSections = [...prev.sections];
      [newSections[index], newSections[newIndex]] = [newSections[newIndex], newSections[index]];
      // Update order
      newSections.forEach((s, i) => { s.order = i + 1; });
      return { ...prev, sections: newSections };
    });
  };

  // Delete section
  const deleteSection = (index) => {
    if (!canEditContent) return;
    if (!confirm('Are you sure you want to delete this section?')) return;
    setContent(prev => ({
      ...prev,
      sections: prev.sections.filter((_, i) => i !== index),
    }));
  };

  // Add new section from template
  const addSection = async (templateId) => {
    if (!canEditContent) return;
    try {
      const res = await fetch(`${apiBase}/api/cms/content`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          routeId,
          path: routePath,
          websiteId: 'default',
          templateId,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setContent(prev => ({
          ...prev,
          sections: [...prev.sections, data.section],
        }));
        setExpandedSections(prev => new Set([...prev, content.sections.length]));
        setShowTemplateModal(false);
      }
    } catch (err) {
      console.error('Failed to add section:', err);
    }
  };

  // Save content
  const handleSave = async (status = content.status) => {
    if (!canEditContent) return;
    setLoading(true);
    setMessage('');
    try {
      const payload = {
        routeId,
        path: routePath,
        websiteId: 'default',
        sections: content.sections,
        status,
      };

      const res = await fetch(`${apiBase}/api/cms/content`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Failed to save');

      const data = await res.json();
      setContent(prev => ({ ...prev, status, version: data.version }));
      setMessage(`Content ${status === 'published' ? 'published' : 'saved as draft'} successfully! (v${data.version})`);
      setMessageType('success');
      setTimeout(() => setMessage(''), 4000);
    } catch (err) {
      setMessage('Failed to save: ' + err.message);
      setMessageType('error');
      setTimeout(() => setMessage(''), 5000);
    } finally {
      setLoading(false);
    }
  };

  // Field type icon
  const fieldIcon = (type) => {
    switch (type) {
      case 'image': return <FiImage size={14} className="text-purple-500" />;
      case 'url': return <FiLink size={14} className="text-blue-500" />;
      case 'richtext': return <FiFileText size={14} className="text-green-500" />;
      default: return <FiType size={14} className="text-gray-400" />;
    }
  };

  // Render field editor based on type
  const renderField = (sectionIndex, fieldKey, field) => {
    const label = field.label || fieldKey.charAt(0).toUpperCase() + fieldKey.slice(1);

    return (
      <div key={fieldKey} className="mb-4">
        <label className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 mb-1.5">
          {fieldIcon(field.type)}
          {label}
          {field.tag && <span className="text-xs bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">&lt;{field.tag}&gt;</span>}
        </label>

        {field.type === 'richtext' || field.type === 'json' ? (
          <textarea
            disabled={!canEditContent}
            value={field.value || ''}
            onChange={(e) => updateField(sectionIndex, fieldKey, 'value', e.target.value)}
            placeholder={field.type === 'json' ? '[\n  { "question": "...", "answer": "..." }\n]' : `Enter ${label.toLowerCase()}...`}
            rows={field.type === 'json' ? 8 : 4}
            className={`w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 shadow-sm resize-y
                       focus:border-[#084032] focus:ring-2 focus:ring-[#00a63e] focus:outline-none transition text-sm
                       ${field.type === 'json' ? 'font-mono' : ''} ${!canEditContent ? 'bg-gray-50 cursor-not-allowed' : ''}`}
          />
        ) : field.type === 'image' ? (
          <div className="space-y-2">
            <div className="flex gap-2 items-center">
              <input
                disabled={!canEditContent}
                type="url"
                value={field.value || ''}
                onChange={(e) => updateField(sectionIndex, fieldKey, 'value', e.target.value)}
                placeholder="Image URL (e.g., https://res.cloudinary.com/...)"
                className={`flex-1 rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 shadow-sm
                           focus:border-[#084032] focus:ring-2 focus:ring-[#00a63e] focus:outline-none transition text-sm ${!canEditContent ? 'bg-gray-50 cursor-not-allowed' : ''}`}
              />
              {canEditContent && (
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, sectionIndex, fieldKey)}
                    className="hidden"
                    id={`file-upload-${sectionIndex}-${fieldKey}`}
                    disabled={uploadingField === `${sectionIndex}_${fieldKey}`}
                  />
                  <label
                    htmlFor={`file-upload-${sectionIndex}-${fieldKey}`}
                    className={`px-4 py-2 text-sm font-semibold rounded-md border border-gray-300 bg-white text-gray-700 shadow-sm cursor-pointer hover:bg-gray-50 flex items-center gap-1.5 whitespace-nowrap transition
                      ${uploadingField === `${sectionIndex}_${fieldKey}` ? 'opacity-60 cursor-not-allowed' : ''}`}
                  >
                    <FiImage />
                    {uploadingField === `${sectionIndex}_${fieldKey}` ? 'Uploading...' : 'Upload Image'}
                  </label>
                </div>
              )}
            </div>
            <div className="grid grid-cols-2 gap-2">
              <input
                disabled={!canEditContent}
                type="text"
                value={field.alt || ''}
                onChange={(e) => updateField(sectionIndex, fieldKey, 'alt', e.target.value)}
                placeholder="Alt text"
                className={`rounded-md border border-gray-300 px-3 py-1.5 text-gray-900 placeholder-gray-400 text-sm
                           focus:border-[#084032] focus:ring-2 focus:ring-[#00a63e] focus:outline-none transition ${!canEditContent ? 'bg-gray-50 cursor-not-allowed' : ''}`}
              />
              <input
                disabled={!canEditContent}
                type="text"
                value={field.title || ''}
                onChange={(e) => updateField(sectionIndex, fieldKey, 'title', e.target.value)}
                placeholder="Title attribute"
                className={`rounded-md border border-gray-300 px-3 py-1.5 text-gray-900 placeholder-gray-400 text-sm
                           focus:border-[#084032] focus:ring-2 focus:ring-[#00a63e] focus:outline-none transition ${!canEditContent ? 'bg-gray-50 cursor-not-allowed' : ''}`}
              />
            </div>
            {field.value && (
              <div className="border border-gray-200 rounded-md p-2 bg-gray-50">
                <img
                  src={field.value}
                  alt={field.alt || 'Preview'}
                  className="max-h-32 object-contain rounded"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
            )}
          </div>
        ) : (
          <div>
            <input
              disabled={!canEditContent}
              type={field.type === 'url' ? 'url' : 'text'}
              value={field.value || ''}
              onChange={(e) => updateField(sectionIndex, fieldKey, 'value', e.target.value)}
              placeholder={`Enter ${label.toLowerCase()}...`}
              className={`w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 shadow-sm
                         focus:border-[#084032] focus:ring-2 focus:ring-[#00a63e] focus:outline-none transition text-sm ${!canEditContent ? 'bg-gray-50 cursor-not-allowed' : ''}`}
            />
            {field.tag && (
              <div className="mt-1.5 flex items-center gap-2">
                <label className="text-xs text-gray-500">HTML Tag:</label>
                <select
                  disabled={!canEditContent}
                  value={field.tag}
                  onChange={(e) => updateField(sectionIndex, fieldKey, 'tag', e.target.value)}
                  className={`text-xs border border-gray-200 rounded px-2 py-1 text-gray-600 ${!canEditContent ? 'bg-gray-50 cursor-not-allowed' : ''}`}
                >
                  <option value="h1">H1</option>
                  <option value="h2">H2</option>
                  <option value="h3">H3</option>
                  <option value="h4">H4</option>
                  <option value="p">P</option>
                  <option value="span">Span</option>
                </select>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <Link
          href="/admin/pages"
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#084032] transition-colors"
        >
          <FiArrowLeft /> Back to Pages
        </Link>
        <div className="flex items-center gap-2">
          <span className={`px-2 py-1 rounded text-xs font-medium ${
            content.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
          }`}>
            {content.status} • v{content.version}
          </span>
          <a
            href={routePath}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 text-sm text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition"
          >
            <FiEye size={14} /> Preview
          </a>
          {canEditContent && (
            <>
              <button
                onClick={() => handleSave('draft')}
                disabled={loading}
                className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition text-gray-700 font-medium"
              >
                Save Draft
              </button>
              <button
                onClick={() => handleSave('published')}
                disabled={loading}
                className={`flex items-center gap-2 px-5 py-2 rounded-md text-white text-sm font-semibold transition
                  ${loading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-[#084032] hover:bg-[#0a5c48]'}`}
              >
                <FiSave size={14} />
                {loading ? 'Saving...' : 'Publish'}
              </button>
            </>
          )}
        </div>
      </div>

      {/* Message */}
      {message && (
        <div
          className={`rounded-md px-4 py-3 text-sm font-medium flex items-center gap-2
            ${messageType === 'success'
              ? 'bg-green-100 text-green-700 border border-green-300'
              : 'bg-red-100 text-red-700 border border-red-300'}`}
        >
          {messageType === 'success' ? <FiCheckCircle /> : <FiAlertCircle />}
          {message}
        </div>
      )}

      {/* Sections */}
      {content.sections.length === 0 ? (
        <div className="bg-white p-12 rounded-lg shadow text-center">
          <FiFileText className="mx-auto text-4xl text-gray-300 mb-4" />
          <h3 className="text-lg font-semibold text-gray-600 mb-2">No Content Sections</h3>
          <p className="text-sm text-gray-400 mb-4">
            {canEditContent ? 'Add sections to start building your page content.' : 'No content sections available.'}
          </p>
          {/* canEditContent && (
            <button
              onClick={() => setShowTemplateModal(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#084032] text-white text-sm font-semibold hover:bg-[#0a5c48] transition"
            >
              <FiPlus /> Add Section
            </button>
          ) */}
        </div>
      ) : (
        <div className="space-y-4">
          {content.sections.map((section, index) => (
            <div key={section.sectionId || index} className="bg-white rounded-lg shadow overflow-hidden">
              {/* Section Header */}
              <div
                className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200 cursor-pointer"
                onClick={() => toggleSection(index)}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono bg-[#084032] text-white px-2 py-0.5 rounded">{index + 1}</span>
                  <input
                    disabled={!canEditContent}
                    type="text"
                    value={section.sectionName || 'Untitled Section'}
                    onChange={(e) => updateSectionName(index, e.target.value)}
                    onClick={(e) => e.stopPropagation()}
                    className={`text-sm font-semibold text-gray-800 bg-transparent border-none outline-none focus:bg-white focus:border focus:border-[#084032] focus:rounded focus:px-2 transition-all ${!canEditContent ? 'cursor-default' : ''}`}
                  />
                </div>
                {canEditContent && (
                  <div className="flex items-center gap-1">
                    <button
                      onClick={(e) => { e.stopPropagation(); moveSection(index, -1); }}
                      disabled={index === 0}
                      className="p-1.5 text-gray-400 hover:text-gray-600 disabled:opacity-30 transition"
                      title="Move up"
                    >
                      <FiChevronUp size={16} />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); moveSection(index, 1); }}
                      disabled={index === content.sections.length - 1}
                      className="p-1.5 text-gray-400 hover:text-gray-600 disabled:opacity-30 transition"
                      title="Move down"
                    >
                      <FiChevronDown size={16} />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); deleteSection(index); }}
                      className="p-1.5 text-gray-400 hover:text-red-600 transition"
                      title="Delete section"
                    >
                      <FiTrash2 size={16} />
                    </button>
                  </div>
                )}
              </div>

              {/* Section Body */}
              {expandedSections.has(index) && (
                <div className="p-5">
                  {section.fields && Object.entries(section.fields).map(([key, field]) =>
                    renderField(index, key, field)
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Add Section Button */}
      {/* canEditContent && (
        <div className="flex justify-center">
          <button
            onClick={() => setShowTemplateModal(true)}
            className="flex items-center gap-2 px-5 py-2.5 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-[#084032] hover:text-[#084032] transition"
          >
            <FiPlus /> Add Section
          </button>
        </div>
      ) */}

      {/* Template Modal */}
      {showTemplateModal && canEditContent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowTemplateModal(false)}>
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Choose Section Template</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { id: 'hero', name: 'Hero Section', icon: '🎯', desc: 'Main heading, image, CTA' },
                { id: 'about', name: 'About Section', icon: '📋', desc: 'Heading, text, image' },
                { id: 'services', name: 'Services', icon: '⚙️', desc: 'Heading, description' },
                { id: 'faq', name: 'FAQ', icon: '❓', desc: 'Questions & answers' },
                { id: 'contact', name: 'Contact', icon: '📞', desc: 'Contact details' },
                { id: 'custom', name: 'Custom', icon: '✏️', desc: 'Flexible layout' },
              ].map(tmpl => (
                <button
                  key={tmpl.id}
                  onClick={() => addSection(tmpl.id)}
                  className="p-4 border border-gray-200 rounded-lg hover:border-[#084032] hover:bg-gray-50 transition text-left"
                >
                  <span className="text-2xl">{tmpl.icon}</span>
                  <p className="text-sm font-semibold text-gray-800 mt-2">{tmpl.name}</p>
                  <p className="text-xs text-gray-500">{tmpl.desc}</p>
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowTemplateModal(false)}
              className="mt-4 w-full px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Bottom Save Bar */}
      <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
        <Link
          href="/admin/pages"
          className="text-sm text-gray-600 hover:text-[#084032] transition-colors"
        >
          ← Back to Pages
        </Link>
        {canEditContent && (
          <div className="flex gap-2">
            <button
              onClick={() => handleSave('draft')}
              disabled={loading}
              className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition text-gray-700"
            >
              Save Draft
            </button>
            <button
              onClick={() => handleSave('published')}
              disabled={loading}
              className={`flex items-center gap-2 px-5 py-2 rounded-md text-white text-sm font-semibold transition
                ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#084032] hover:bg-[#0a5c48]'}`}
            >
              <FiSave size={14} />
              {loading ? 'Saving...' : 'Publish'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
