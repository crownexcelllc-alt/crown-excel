"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiArrowLeft, FiSave, FiPlus, FiTrash2, FiChevronUp, FiChevronDown, FiEye, FiCheckCircle, FiAlertCircle, FiImage, FiType, FiLink, FiFileText, FiX } from 'react-icons/fi';

export default function ContentEditorClient({ initialContent, routeId, routePath, apiBase, templates = [], isNew }) {
  const [content, setContent] = useState(initialContent || { sections: [], status: 'draft', version: 1 });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [uploadingField, setUploadingField] = useState(null); // 'sectionIndex_fieldKey'
  const [showTemplateModal, setShowTemplateModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Link Modal States
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [linkModalData, setLinkModalData] = useState(null); // { sectionIndex, fieldKey, start, end, initialText, fullText, isExisting }
  const [linkStep, setLinkStep] = useState(1);
  const [linkText, setLinkText] = useState('');
  const [linkUrl, setLinkUrl] = useState('');
  const [linkNewTab, setLinkNewTab] = useState(true);
  const [existingLinkDetected, setExistingLinkDetected] = useState(false);
  const [existingLinkInfo, setExistingLinkInfo] = useState(null); // { start, end, url, isNewTab, text, fullMatch }

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

  // Helper to find a link surrounding the cursor position
  const findLinkAtCursor = (text, cursorPos) => {
    const regex = /<a\s+[^>]*href="([^"]*)"([^>]*)>([\s\S]*?)<\/a>/gi;
    let match;
    while ((match = regex.exec(text)) !== null) {
      const matchStart = match.index;
      const matchEnd = regex.lastIndex;
      if (cursorPos >= matchStart && cursorPos <= matchEnd) {
        const href = match[1];
        const attributes = match[2];
        const linkTextContent = match[3];
        const isNewTab = attributes.includes('_blank');
        return {
          start: matchStart,
          end: matchEnd,
          url: href,
          isNewTab,
          text: linkTextContent,
          fullMatch: match[0]
        };
      }
    }
    return null;
  };

  // Helper to find an existing link wrapping a specific text
  const findLinkByText = (text, searchWord) => {
    if (!searchWord || searchWord.trim().length === 0) return null;
    try {
      const escaped = searchWord.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      const regexStr = `<a\\s+[^>]*href="([^"]*)"([^>]*)>\\s*(${escaped})\\s*<\\/a>`;
      const regex = new RegExp(regexStr, 'gi');
      const match = regex.exec(text);
      if (match) {
        const isNewTab = match[2].includes('_blank');
        return {
          start: match.index,
          end: match.index + match[0].length,
          url: match[1],
          isNewTab,
          text: match[3],
          fullMatch: match[0]
        };
      }
    } catch (e) {
      console.error(e);
    }
    return null;
  };

  // Dynamically detect existing links as the user types/updates the text in Step 1
  useEffect(() => {
    if (!showLinkModal || !linkModalData) return;
    const val = linkModalData.fullText;
    
    // Check if there is an existing link matching linkText
    const match = findLinkByText(val, linkText);
    if (match) {
      setExistingLinkDetected(true);
      setExistingLinkInfo(match);
      setLinkUrl(match.url);
      setLinkNewTab(match.isNewTab);
    } else {
      // If we initially started with an existing link, and the user hasn't changed the text, keep it.
      if (linkModalData.isExisting && linkText === linkModalData.initialText) {
        // Keep initial match
      } else {
        setExistingLinkDetected(false);
        setExistingLinkInfo(null);
      }
    }
  }, [linkText, showLinkModal]);

  // Custom link wrapper helper
  const handleInsertLink = (sectionIndex, fieldKey) => {
    if (!canEditContent) return;
    const inputId = `input-${sectionIndex}-${fieldKey}`;
    const element = document.getElementById(inputId);
    if (!element) return;

    const start = element.selectionStart;
    const end = element.selectionEnd;
    const val = element.value || '';
    const selectedText = val.substring(start, end);

    // Look for link at cursor position
    const existing = findLinkAtCursor(val, start);
    
    if (existing) {
      setLinkModalData({
        sectionIndex,
        fieldKey,
        start: existing.start,
        end: existing.end,
        initialText: existing.text,
        fullText: val,
        isExisting: true
      });
      setLinkText(existing.text);
      setLinkUrl(existing.url);
      setLinkNewTab(existing.isNewTab);
      setExistingLinkDetected(true);
      setExistingLinkInfo(existing);
      setLinkStep(1);
      setShowLinkModal(true);
    } else {
      // Check if the selected text has a link matching it elsewhere
      const searchMatch = findLinkByText(val, selectedText);
      if (searchMatch) {
        setLinkModalData({
          sectionIndex,
          fieldKey,
          start: searchMatch.start,
          end: searchMatch.end,
          initialText: searchMatch.text,
          fullText: val,
          isExisting: true
        });
        setLinkText(searchMatch.text);
        setLinkUrl(searchMatch.url);
        setLinkNewTab(searchMatch.isNewTab);
        setExistingLinkDetected(true);
        setExistingLinkInfo(searchMatch);
        setLinkStep(1);
        setShowLinkModal(true);
      } else {
        setLinkModalData({
          sectionIndex,
          fieldKey,
          start,
          end,
          initialText: selectedText,
          fullText: val,
          isExisting: false
        });
        setLinkText(selectedText);
        setLinkUrl('');
        setLinkNewTab(true);
        setExistingLinkDetected(false);
        setExistingLinkInfo(null);
        setLinkStep(1);
        setShowLinkModal(true);
      }
    }
  };

  const handleSaveLink = () => {
    if (!linkModalData) return;
    const { sectionIndex, fieldKey, fullText, start, end } = linkModalData;
    const element = document.getElementById(`input-${sectionIndex}-${fieldKey}`);
    if (!element) return;

    const targetAttr = linkNewTab ? ' target="_blank" rel="noopener noreferrer"' : '';
    const replacement = `<a href="${linkUrl}"${targetAttr}>${linkText}</a>`;

    let replaceStart = start;
    let replaceEnd = end;

    if (existingLinkDetected && existingLinkInfo) {
      replaceStart = existingLinkInfo.start;
      replaceEnd = existingLinkInfo.end;
    } else {
      // Fallback if they changed linkText and we didn't have selection / it wasn't matched
      if (linkText !== linkModalData.initialText) {
        const foundIdx = fullText.indexOf(linkText);
        if (foundIdx !== -1) {
          replaceStart = foundIdx;
          replaceEnd = foundIdx + linkText.length;
        }
      }
    }

    const newValue = fullText.substring(0, replaceStart) + replacement + fullText.substring(replaceEnd);
    updateField(sectionIndex, fieldKey, 'value', newValue);
    setShowLinkModal(false);

    // Refocus and set cursor selection range
    setTimeout(() => {
      element.focus();
      const newCursorPos = replaceStart + replacement.length;
      element.setSelectionRange(newCursorPos, newCursorPos);
    }, 50);
  };

  const handleRemoveLink = () => {
    if (!linkModalData || !existingLinkInfo) return;
    const { sectionIndex, fieldKey, fullText } = linkModalData;
    const element = document.getElementById(`input-${sectionIndex}-${fieldKey}`);
    if (!element) return;

    const replaceStart = existingLinkInfo.start;
    const replaceEnd = existingLinkInfo.end;
    const newValue = fullText.substring(0, replaceStart) + linkText + fullText.substring(replaceEnd);

    updateField(sectionIndex, fieldKey, 'value', newValue);
    setShowLinkModal(false);

    // Refocus and set cursor selection range
    setTimeout(() => {
      element.focus();
      const newCursorPos = replaceStart + linkText.length;
      element.setSelectionRange(newCursorPos, newCursorPos);
    }, 50);
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
        <label className="flex items-center justify-between text-sm font-semibold text-gray-700 mb-1.5">
          <span className="flex items-center gap-1.5">
            {fieldIcon(field.type)}
            {label}
            {field.tag && <span className="text-xs bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">&lt;{field.tag}&gt;</span>}
          </span>
          {canEditContent && (field.type === 'richtext' || field.type === 'text') && (
            <button
              type="button"
              onClick={() => handleInsertLink(sectionIndex, fieldKey)}
              className="text-xs text-[#084032] hover:text-[#0a5c48] flex items-center gap-1 hover:underline focus:outline-none cursor-pointer"
              title="Select text in the input first, then click here to turn it into a link"
            >
              <FiLink size={12} />
              Add Link
            </button>
          )}
        </label>

        {field.type === 'richtext' || field.type === 'json' ? (
          <textarea
            id={`input-${sectionIndex}-${fieldKey}`}
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
              id={`input-${sectionIndex}-${fieldKey}`}
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

      {/* Link Modal */}
      {showLinkModal && canEditContent && linkModalData && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50" onClick={() => setShowLinkModal(false)}>
          <div className="bg-white rounded-xl shadow-2xl p-6 max-w-lg w-full mx-4 border border-gray-100 flex flex-col relative" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setShowLinkModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition cursor-pointer"
            >
              <FiX size={18} />
            </button>

            <div className="flex items-center gap-2 mb-4">
              <span className="p-2 rounded-lg bg-emerald-50 text-emerald-700">
                <FiLink size={18} />
              </span>
              <h3 className="text-lg font-bold text-gray-900">
                {existingLinkDetected ? 'Edit Link' : 'Add Link'}
              </h3>
            </div>

            {linkStep === 1 ? (
              <div className="space-y-4 flex-1">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                    Text to Link
                  </label>
                  <input
                    type="text"
                    value={linkText}
                    onChange={(e) => setLinkText(e.target.value)}
                    placeholder="Enter text to link (e.g. click here)..."
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 shadow-xs focus:border-[#084032] focus:ring-2 focus:ring-[#00a63e] focus:outline-none transition text-sm font-medium"
                    autoFocus
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                    Full Content Reference (Copy from here)
                  </label>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-3.5 text-sm text-gray-700 font-mono whitespace-pre-wrap max-h-48 overflow-y-auto select-text">
                    {linkModalData.fullText}
                  </div>
                  <p className="text-xs text-gray-500 mt-1.5">
                    This shows the entire text field content. You can copy text or verify where you want to apply the link.
                  </p>
                </div>

                <div className="flex justify-end gap-2.5 pt-2 border-t border-gray-100 mt-4">
                  <button
                    onClick={() => setShowLinkModal(false)}
                    className="px-4.5 py-2 text-sm text-gray-600 hover:bg-gray-50 border border-gray-300 rounded-lg transition font-semibold cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setLinkStep(2)}
                    disabled={!linkText.trim()}
                    className={`px-5 py-2 text-sm text-white rounded-lg transition font-semibold flex items-center gap-1.5 cursor-pointer
                      ${!linkText.trim() ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#084032] hover:bg-[#0a5c48]'}`}
                  >
                    Next
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4 flex-1">
                {existingLinkDetected && (
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-800 flex items-start gap-2">
                    <FiAlertCircle className="mt-0.5 flex-shrink-0" size={14} />
                    <div>
                      <span className="font-semibold">Existing link detected!</span> Saving will update this link's URL/behavior. You can also completely remove the link wrapper.
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                    Link URL
                  </label>
                  <input
                    type="text"
                    value={linkUrl}
                    onChange={(e) => setLinkUrl(e.target.value)}
                    placeholder="e.g. /our-services/networking or https://google.com"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 shadow-xs focus:border-[#084032] focus:ring-2 focus:ring-[#00a63e] focus:outline-none transition text-sm font-medium"
                    autoFocus
                  />
                </div>

                <div className="flex items-center gap-2 py-2 px-3.5 bg-gray-50 border border-gray-200 rounded-lg">
                  <input
                    type="checkbox"
                    id="link-new-tab-checkbox"
                    checked={linkNewTab}
                    onChange={(e) => setLinkNewTab(e.target.checked)}
                    className="w-4.5 h-4.5 text-[#084032] border-gray-300 rounded-md focus:ring-[#084032] focus:ring-2 accent-[#084032] cursor-pointer"
                  />
                  <label htmlFor="link-new-tab-checkbox" className="text-sm font-semibold text-gray-700 cursor-pointer select-none">
                    Open in a new tab
                  </label>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-gray-100 mt-4 gap-2">
                  <button
                    onClick={() => setLinkStep(1)}
                    className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 border border-gray-300 rounded-lg transition font-semibold cursor-pointer"
                  >
                    Back
                  </button>
                  
                  <div className="flex gap-2">
                    {existingLinkDetected && (
                      <button
                        onClick={handleRemoveLink}
                        className="px-4 py-2 text-sm bg-red-50 text-red-600 hover:bg-red-100 border border-red-200 rounded-lg transition font-semibold flex items-center gap-1 cursor-pointer"
                      >
                        <FiTrash2 size={14} /> Remove Link
                      </button>
                    )}
                    <button
                      onClick={handleSaveLink}
                      disabled={!linkUrl.trim()}
                      className={`px-5 py-2 text-sm text-white rounded-lg transition font-semibold cursor-pointer
                        ${!linkUrl.trim() ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#084032] hover:bg-[#0a5c48]'}`}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            )}
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
