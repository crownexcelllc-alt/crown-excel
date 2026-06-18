"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function BlogFormClient({ 
  initialData = null, 
  isEdit = false, 
  apiBase = process.env.NEXT_PUBLIC_API_URL || '' 
}) {
  const router = useRouter();
  
  // Basic states
  const [title, setTitle] = useState(initialData?.title || '');
  const [slug, setSlug] = useState(initialData?.slug || '');
  const [excerpt, setExcerpt] = useState(initialData?.excerpt || '');
  const [content, setContent] = useState(initialData?.content || '');
  const [coverImage, setCoverImage] = useState(initialData?.coverImage || '');
  const [author, setAuthor] = useState(initialData?.author || 'Admin');
  const [tagsInput, setTagsInput] = useState(initialData?.tags?.join(', ') || '');
  const [published, setPublished] = useState(initialData?.published ?? false);

  // SEO states
  const [metaTitle, setMetaTitle] = useState(initialData?.metaTitle || '');
  const [metaDescription, setMetaDescription] = useState(initialData?.metaDescription || '');
  const [keywords, setKeywords] = useState(initialData?.keywords || '');

  // UI control states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('visual'); // 'visual' | 'code'
  
  // Media Library Modal states
  const [showMediaModal, setShowMediaModal] = useState(false);
  const [mediaList, setMediaList] = useState([]);
  const [loadingMedia, setLoadingMedia] = useState(false);
  const [mediaSearch, setMediaSearch] = useState('');
  const [uploadingImage, setUploadingImage] = useState(false);

  const editorRef = useRef(null);

  // Prefill editor on load
  useEffect(() => {
    if (editorRef.current && initialData?.content) {
      editorRef.current.innerHTML = initialData.content;
    }
  }, [initialData]);

  // Set logged-in user name as default author if not editing and available
  useEffect(() => {
    if (!isEdit && typeof window !== 'undefined') {
      const userStr = localStorage.getItem('user');
      if (userStr) {
        try {
          const user = JSON.parse(userStr);
          if (user?.name) setAuthor(user.name);
        } catch (e) {
          console.error(e);
        }
      }
    }
  }, [isEdit]);

  // Handle title change and auto slug generation
  const handleTitleChange = (e) => {
    const val = e.target.value;
    setTitle(val);
    if (!isEdit) {
      const generatedSlug = val
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      setSlug(generatedSlug);
    }
  };

  // Sync contenteditable text with content state
  const handleEditorChange = () => {
    if (editorRef.current) {
      setContent(editorRef.current.innerHTML);
    }
  };

  // Run document formatting commands
  const executeCommand = (command, value = null) => {
    if (typeof document !== 'undefined') {
      document.execCommand(command, false, value);
      handleEditorChange();
    }
  };

  // Handle visual vs HTML editor tab change
  const handleTabChange = (tab) => {
    if (tab === 'visual') {
      // Sync HTML code textarea edits back to contenteditable div
      setActiveTab('visual');
      setTimeout(() => {
        if (editorRef.current) {
          editorRef.current.innerHTML = content;
        }
      }, 50);
    } else {
      setActiveTab('code');
    }
  };

  // Fetch media items for the Media Picker Modal
  const fetchMedia = async () => {
    try {
      setLoadingMedia(true);
      const res = await fetch(`${apiBase}/api/cms/media?websiteId=default&limit=60&search=${encodeURIComponent(mediaSearch)}`);
      if (res.ok) {
        const data = await res.json();
        setMediaList(data.media || []);
      }
    } catch (err) {
      console.error('Failed to fetch media library', err);
    } finally {
      setLoadingMedia(false);
    }
  };

  useEffect(() => {
    if (showMediaModal) {
      fetchMedia();
    }
  }, [showMediaModal, mediaSearch]);

  // Upload image to Cloudinary directly from the blog form
  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploadingImage(true);
      const formData = new FormData();
      formData.append('file', file);
      formData.append('websiteId', 'default');
      formData.append('folder', 'blogs');

      const res = await fetch(`${apiBase}/api/cms/media`, {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error('Upload failed');
      const data = await res.json();
      
      if (data.media?.url) {
        setCoverImage(data.media.url);
        setShowMediaModal(false);
      }
    } catch (err) {
      alert('Upload failed: ' + err.message);
    } finally {
      setUploadingImage(false);
    }
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!title) {
      setError('Title is required');
      return;
    }
    if (!content || content === '<br>' || content === '<div><br></div>') {
      setError('Content is required');
      return;
    }

    const tagsArray = tagsInput
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0);

    const payload = {
      title,
      slug: slug || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      excerpt,
      content,
      coverImage,
      author,
      tags: tagsArray,
      published,
      metaTitle,
      metaDescription,
      keywords,
    };

    setLoading(true);

    try {
      let res;
      if (isEdit) {
        payload.id = initialData._id;
        res = await fetch(`${apiBase}/api/blogs`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } else {
        res = await fetch(`${apiBase}/api/blogs`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      }

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error || 'Failed to save blog post');
      }

      router.push('/admin/blogs');
      router.refresh();
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 max-w-5xl mx-auto">
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm font-medium">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title & Slug */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Blog Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={handleTitleChange}
              placeholder="Enter blog title"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#084032] focus:border-[#084032] outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Slug (URL suffix)
            </label>
            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9\-]+/g, ''))}
              placeholder="e.g. my-first-blog"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#084032] focus:border-[#084032] outline-none transition-all bg-gray-50"
            />
          </div>
        </div>

        {/* Excerpt */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Short Excerpt / Summary
          </label>
          <textarea
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            placeholder="A brief overview of the blog post (shown on listing pages)..."
            rows={2}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#084032] focus:border-[#084032] outline-none transition-all"
          />
        </div>

        {/* Cover Image URL & Selection */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Cover Image
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
              placeholder="Image URL (HTTPS)"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#084032] focus:border-[#084032] outline-none transition-all"
            />
            <button
              type="button"
              onClick={() => setShowMediaModal(true)}
              className="px-4 py-2 bg-gray-100 border border-gray-300 hover:bg-gray-200 text-gray-700 font-medium rounded-lg text-sm transition-all"
            >
              Browse Library
            </button>
          </div>
          {coverImage && (
            <div className="mt-3 relative w-48 h-28 border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
              <img
                src={coverImage}
                alt="Cover Preview"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          )}
        </div>

        {/* Content Rich Text Editor */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="block text-sm font-semibold text-gray-700">
              Blog Content <span className="text-red-500">*</span>
            </label>
            
            {/* visual/code tabs */}
            <div className="flex bg-gray-100 p-0.5 rounded-lg text-xs">
              <button
                type="button"
                onClick={() => handleTabChange('visual')}
                className={`px-3 py-1 rounded-md font-semibold transition-all ${
                  activeTab === 'visual' ? 'bg-white text-[#084032] shadow-sm' : 'text-gray-500 hover:text-black'
                }`}
              >
                Visual Editor
              </button>
              <button
                type="button"
                onClick={() => handleTabChange('code')}
                className={`px-3 py-1 rounded-md font-semibold transition-all ${
                  activeTab === 'code' ? 'bg-white text-[#084032] shadow-sm' : 'text-gray-500 hover:text-black'
                }`}
              >
                HTML Code
              </button>
            </div>
          </div>

          {activeTab === 'visual' ? (
            <div className="border border-gray-300 rounded-lg overflow-hidden flex flex-col">
              {/* WYSIWYG Formatting bar */}
              <div className="bg-gray-50 border-b border-gray-200 p-2 flex flex-wrap gap-1 items-center">
                <button
                  type="button"
                  onClick={() => executeCommand('bold')}
                  className="px-2.5 py-1 text-xs font-bold bg-white border border-gray-200 rounded hover:bg-gray-100 text-black shadow-xs cursor-pointer"
                  title="Bold"
                >
                  B
                </button>
                <button
                  type="button"
                  onClick={() => executeCommand('italic')}
                  className="px-2.5 py-1 text-xs italic bg-white border border-gray-200 rounded hover:bg-gray-100 text-black shadow-xs cursor-pointer"
                  title="Italic"
                >
                  I
                </button>
                <button
                  type="button"
                  onClick={() => executeCommand('underline')}
                  className="px-2.5 py-1 text-xs underline bg-white border border-gray-200 rounded hover:bg-gray-100 text-black shadow-xs cursor-pointer"
                  title="Underline"
                >
                  U
                </button>
                <div className="h-4 w-px bg-gray-300 mx-1" />
                <button
                  type="button"
                  onClick={() => executeCommand('formatBlock', '<h1>')}
                  className="px-2.5 py-1 text-xs font-semibold bg-white border border-gray-200 rounded hover:bg-gray-100 text-black shadow-xs cursor-pointer"
                  title="Heading 1"
                >
                  H1
                </button>
                <button
                  type="button"
                  onClick={() => executeCommand('formatBlock', '<h2>')}
                  className="px-2.5 py-1 text-xs font-semibold bg-white border border-gray-200 rounded hover:bg-gray-100 text-black shadow-xs cursor-pointer"
                  title="Heading 2"
                >
                  H2
                </button>
                <button
                  type="button"
                  onClick={() => executeCommand('formatBlock', '<p>')}
                  className="px-2.5 py-1 text-xs bg-white border border-gray-200 rounded hover:bg-gray-100 text-black shadow-xs cursor-pointer"
                  title="Paragraph"
                >
                  Normal
                </button>
                <div className="h-4 w-px bg-gray-300 mx-1" />
                <button
                  type="button"
                  onClick={() => executeCommand('insertUnorderedList')}
                  className="px-2 py-1 text-xs bg-white border border-gray-200 rounded hover:bg-gray-100 text-black shadow-xs cursor-pointer"
                  title="Bullet List"
                >
                  • List
                </button>
                <button
                  type="button"
                  onClick={() => executeCommand('insertOrderedList')}
                  className="px-2 py-1 text-xs bg-white border border-gray-200 rounded hover:bg-gray-100 text-black shadow-xs cursor-pointer"
                  title="Numbered List"
                >
                  1. List
                </button>
                <div className="h-4 w-px bg-gray-300 mx-1" />
                <button
                  type="button"
                  onClick={() => {
                    const url = prompt('Enter link URL:');
                    if (url) executeCommand('createLink', url);
                  }}
                  className="px-2 py-1 text-xs bg-white border border-gray-200 rounded hover:bg-gray-100 text-[#084032] shadow-xs cursor-pointer"
                  title="Insert Link"
                >
                  Link
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const url = prompt('Enter image URL:');
                    if (url) executeCommand('insertImage', url);
                  }}
                  className="px-2 py-1 text-xs bg-white border border-gray-200 rounded hover:bg-gray-100 text-[#084032] shadow-xs cursor-pointer"
                  title="Insert Image"
                >
                  Img
                </button>
                <button
                  type="button"
                  onClick={() => executeCommand('removeFormat')}
                  className="px-2 py-1 text-xs bg-white border border-gray-200 rounded hover:bg-red-50 text-red-600 shadow-xs ml-auto cursor-pointer"
                  title="Clear formatting"
                >
                  Clear
                </button>
              </div>

              {/* Editing Area */}
              <div
                ref={editorRef}
                contentEditable
                onBlur={handleEditorChange}
                onInput={handleEditorChange}
                className="w-full p-4 min-h-[350px] outline-none prose max-w-none focus:ring-0 overflow-y-auto"
                style={{ direction: 'left', textAlign: 'left' }}
              />
            </div>
          ) : (
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Paste HTML source code here..."
              rows={16}
              className="w-full p-4 border border-gray-300 rounded-lg font-mono text-sm focus:ring-2 focus:ring-[#084032] focus:border-[#084032] outline-none"
            />
          )}
        </div>

        {/* Author & Tags */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Author
            </label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="e.g. Admin or Writer Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#084032] focus:border-[#084032] outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Tags (comma separated)
            </label>
            <input
              type="text"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              placeholder="e.g. Technology, Business, Excel"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#084032] focus:border-[#084032] outline-none transition-all"
            />
          </div>
        </div>

        {/* SEO Management Panel */}
        <div className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
          <div className="p-4 bg-gray-100 border-b border-gray-200 font-semibold text-sm text-gray-700 flex justify-between items-center">
            <span>SEO Meta Configuration (Optional)</span>
            <span className="text-xs text-gray-400">Controls head tags for search engines</span>
          </div>
          <div className="p-4 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Meta Title</label>
              <input
                type="text"
                value={metaTitle}
                onChange={(e) => setMetaTitle(e.target.value)}
                placeholder="Defaults to blog title if left blank"
                className="w-full bg-white px-3 py-1.5 border border-gray-300 rounded-md text-sm outline-none focus:ring-1 focus:ring-[#084032]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Meta Description</label>
              <textarea
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
                placeholder="A compelling, keyword-rich summary of less than 160 characters for search listings..."
                rows={2}
                className="w-full bg-white px-3 py-1.5 border border-gray-300 rounded-md text-sm outline-none focus:ring-1 focus:ring-[#084032]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Keywords</label>
              <input
                type="text"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                placeholder="e.g. excel dashboard, crown excel templates, reporting"
                className="w-full bg-white px-3 py-1.5 border border-gray-300 rounded-md text-sm outline-none focus:ring-1 focus:ring-[#084032]"
              />
            </div>
          </div>
        </div>

        {/* Published Toggle */}
        <div className="flex items-center gap-3 py-2">
          <input
            type="checkbox"
            id="published"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
            className="w-5 h-5 accent-[#084032] border-gray-300 rounded focus:ring-[#084032]"
          />
          <label htmlFor="published" className="text-sm font-semibold text-gray-700 select-none cursor-pointer">
            Publish Post immediately (uncheck to save as draft)
          </label>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
          <button
            type="button"
            onClick={() => router.push('/admin/blogs')}
            className="px-5 py-2 border border-gray-300 hover:bg-gray-100 text-gray-700 font-semibold rounded-lg transition-all"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-5 py-2 bg-[#084032] hover:bg-[#00a63e] text-white font-semibold rounded-lg shadow disabled:opacity-60 transition-all cursor-pointer"
          >
            {loading ? 'Saving...' : isEdit ? 'Update Post' : 'Create Post'}
          </button>
        </div>
      </form>

      {/* Media Library Selection Modal */}
      {showMediaModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[85vh] flex flex-col overflow-hidden border border-gray-100">
            {/* Modal Header */}
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-800">Select Cover Image</h3>
              <button
                type="button"
                onClick={() => setShowMediaModal(false)}
                className="text-gray-500 hover:text-black font-bold text-xl cursor-pointer"
              >
                &times;
              </button>
            </div>

            {/* Upload & Search controls */}
            <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row gap-4 items-center justify-between bg-white">
              <div className="relative w-full sm:w-72">
                <input
                  type="text"
                  value={mediaSearch}
                  onChange={(e) => setMediaSearch(e.target.value)}
                  placeholder="Search media..."
                  className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#084032] outline-none"
                />
              </div>

              <div className="flex gap-2 w-full sm:w-auto justify-end">
                <label className="cursor-pointer px-4 py-2 bg-[#084032] hover:bg-[#00a63e] text-white font-semibold rounded-lg text-sm transition-all text-center">
                  {uploadingImage ? 'Uploading...' : 'Upload New Image'}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    disabled={uploadingImage}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            {/* Media Grid */}
            <div className="flex-1 overflow-y-auto p-6 bg-gray-50 min-h-[300px]">
              {loadingMedia ? (
                <div className="flex items-center justify-center h-48">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#084032]"></div>
                </div>
              ) : mediaList.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-48 text-gray-500">
                  <span className="mb-2">No media found.</span>
                  <span className="text-xs">Upload images using the upload button above.</span>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
                  {mediaList.map((media) => (
                    <div
                      key={media._id}
                      onClick={() => {
                        setCoverImage(media.url);
                        setShowMediaModal(false);
                      }}
                      className="group cursor-pointer border border-gray-200 hover:border-[#084032] rounded-lg overflow-hidden bg-white shadow-xs hover:shadow transition-all relative flex flex-col"
                    >
                      <div className="w-full aspect-square bg-gray-100 relative overflow-hidden">
                        <img
                          src={media.thumbnailUrl || media.url}
                          alt={media.alt || media.originalName}
                          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                        />
                      </div>
                      <div className="p-2 border-t border-gray-100 text-[10px] text-gray-500 truncate">
                        {media.originalName}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end">
              <button
                type="button"
                onClick={() => setShowMediaModal(false)}
                className="px-4 py-2 border border-gray-300 hover:bg-gray-150 text-gray-700 font-semibold rounded-lg text-sm transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
