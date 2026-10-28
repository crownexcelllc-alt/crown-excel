'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import {
  categories,
  productsByCategory,
  getProductBarcode,
} from '@/app/_components/AllProducts/catalogData';
import {
  FiCheck,
  FiSave,
  FiRotateCcw,
  FiSearch,
  FiAlertCircle,
  FiCheckCircle,
  FiLayers,
  FiArrowUp,
  FiArrowDown,
  FiTrash2,
  FiFilter,
} from 'react-icons/fi';
import { FaBarcode } from 'react-icons/fa';
import toast from 'react-hot-toast';

export default function ProductCatalogCardsClient() {
  const [selectedMap, setSelectedMap] = useState({});
  const [savedMap, setSavedMap] = useState({});
  const [activeCategory, setActiveCategory] = useState(categories[0]?.slug || 'laptops');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all'); // 'all' | 'selected' | 'unselected'
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  // Fetch current selections on mount & resolve defaults (first 4 products per category)
  useEffect(() => {
    async function fetchSelections() {
      try {
        setLoading(true);
        const res = await fetch('/api/admin/product-catalog-cards');
        if (!res.ok) throw new Error('Failed to load catalog cards');
        const data = await res.json();
        const saved =
          data.selectedProducts && typeof data.selectedProducts === 'object'
            ? data.selectedProducts
            : {};

        // Build resolved map: every category starts with either saved choices or the 4 default products
        const resolved = {};
        categories.forEach((cat) => {
          if (Array.isArray(saved[cat.slug]) && saved[cat.slug].length > 0) {
            resolved[cat.slug] = saved[cat.slug].slice(0, 4);
          } else {
            const prods = productsByCategory[cat.slug] || [];
            resolved[cat.slug] = prods.slice(0, 4).map((p) => p.title);
          }
        });

        setSelectedMap(resolved);
        setSavedMap(resolved);
      } catch (err) {
        console.error('Error loading catalog cards:', err);
        setMessage({ text: 'Failed to load existing selections from database.', type: 'error' });
      } finally {
        setLoading(false);
      }
    }
    fetchSelections();
  }, []);

  // Determine if there are unsaved changes
  const isDirty = useMemo(() => {
    return JSON.stringify(selectedMap) !== JSON.stringify(savedMap);
  }, [selectedMap, savedMap]);

  // Active category object & product list
  const currentCategoryObj = useMemo(() => {
    return categories.find((c) => c.slug === activeCategory) || categories[0];
  }, [activeCategory]);

  const rawActiveProducts = useMemo(() => {
    return productsByCategory[activeCategory] || [];
  }, [activeCategory]);

  const activeSelectedTitles = useMemo(() => {
    return Array.isArray(selectedMap[activeCategory]) ? selectedMap[activeCategory] : [];
  }, [selectedMap, activeCategory]);

  // Filtered & enriched products for the active category
  const displayedProducts = useMemo(() => {
    let list = rawActiveProducts.map((p, idx) => {
      const barcode = getProductBarcode(p, activeCategory, idx);
      const isSelected = activeSelectedTitles.includes(p.title);
      const orderIndex = isSelected ? activeSelectedTitles.indexOf(p.title) + 1 : null;
      return {
        ...p,
        rawIndex: idx,
        barcode,
        isSelected,
        orderIndex,
      };
    });

    // Filter by display status
    if (filterStatus === 'selected') {
      list = list.filter((p) => p.isSelected);
    } else if (filterStatus === 'unselected') {
      list = list.filter((p) => !p.isSelected);
    }

    // Filter by search query
    const term = searchTerm.trim().toLowerCase();
    if (term) {
      list = list.filter((p) => {
        const title = (p.title || '').toLowerCase();
        const brand = (p.brand || '').toLowerCase();
        const barcode = (p.barcode || '').toLowerCase();
        const desc = (p.description || '').toLowerCase();
        return (
          title.includes(term) ||
          brand.includes(term) ||
          barcode.includes(term) ||
          desc.includes(term)
        );
      });
    }

    return list;
  }, [rawActiveProducts, activeCategory, activeSelectedTitles, filterStatus, searchTerm]);

  // Checkbox toggle: Select / Deselect workflow
  const handleToggleProduct = (productTitle) => {
    const isSelected = activeSelectedTitles.includes(productTitle);

    if (isSelected) {
      // Step 1: Deselect product
      const nextList = activeSelectedTitles.filter((t) => t !== productTitle);
      setSelectedMap((prev) => ({
        ...prev,
        [activeCategory]: nextList,
      }));
      toast.success(`Removed from homepage. ${4 - nextList.length} card slot(s) available.`);
    } else {
      // Step 2: Select new replacement product (Strict max 4 per category)
      if (activeSelectedTitles.length >= 4) {
        toast.error('Maximum 4 products allowed per category! Please uncheck a product first to replace it.', {
          duration: 3500,
          icon: '⚠️',
        });
        return;
      }
      const nextList = [...activeSelectedTitles, productTitle];
      setSelectedMap((prev) => ({
        ...prev,
        [activeCategory]: nextList,
      }));
      toast.success(`Selected for homepage (#${nextList.length} of 4)!`);
    }
  };

  // Reorder product position (#1 to #4) on homepage
  const handleMoveOrder = (productTitle, direction, e) => {
    if (e) e.stopPropagation();
    const idx = activeSelectedTitles.indexOf(productTitle);
    if (idx === -1) return;

    const newIdx = idx + direction;
    if (newIdx < 0 || newIdx >= activeSelectedTitles.length) return;

    const nextList = [...activeSelectedTitles];
    const temp = nextList[idx];
    nextList[idx] = nextList[newIdx];
    nextList[newIdx] = temp;

    setSelectedMap((prev) => ({
      ...prev,
      [activeCategory]: nextList,
    }));
  };

  // Reset active category back to first 4 default products
  const handleResetToDefault = () => {
    const default4 = rawActiveProducts.slice(0, 4).map((p) => p.title);
    setSelectedMap((prev) => ({
      ...prev,
      [activeCategory]: default4,
    }));
    toast.success(`Reset ${currentCategoryObj.name} to default 4 products.`);
  };

  // Clear all selections for this category
  const handleClearCategory = () => {
    setSelectedMap((prev) => ({
      ...prev,
      [activeCategory]: [],
    }));
    toast('Cleared all products in this category.', { icon: '🗑️' });
  };

  // Save changes to database and revalidate homepage
  const handleSave = async () => {
    try {
      setSaving(true);
      setMessage({ text: '', type: '' });

      const res = await fetch('/api/admin/product-catalog-cards', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ selectedProducts: selectedMap }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to save');

      setSavedMap(selectedMap);
      toast.success('Product Catalog Cards updated successfully! Homepage updated.', {
        duration: 4000,
      });
      setMessage({
        text: 'Changes saved successfully! The homepage now displays your selected products.',
        type: 'success',
      });
      setTimeout(() => setMessage({ text: '', type: '' }), 6000);
    } catch (err) {
      console.error('Failed to save catalog cards:', err);
      toast.error('Failed to save changes: ' + err.message);
      setMessage({ text: 'Error saving changes: ' + err.message, type: 'error' });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-24 space-y-3 font-montserrat">
        <div className="h-9 w-9 animate-spin rounded-full border-4 border-[#084032] border-t-transparent" />
        <p className="text-sm font-medium text-gray-500">Loading Product Catalog Cards...</p>
      </div>
    );
  }

  const selectedCount = activeSelectedTitles.length;
  const isFull = selectedCount === 4;

  return (
    <div className="space-y-6 pb-16 font-montserrat max-w-7xl mx-auto">
      {/* Top Header Bar */}
      <div className="border-b border-gray-200 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#084032] text-white shadow-sm">
            <FiLayers className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Product Catalog Cards</h1>
            <p className="text-xs sm:text-sm text-gray-500">
              Manage which 4 products appear in the homepage’s <strong>Our Product Catalog</strong> section.
            </p>
          </div>
        </div>
      </div>

      {/* Message Banner */}
      {message.text && (
        <div
          className={`rounded-lg px-4 py-3 text-sm font-medium flex items-center gap-2.5 ${
            message.type === 'success'
              ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
        >
          {message.type === 'success' ? (
            <FiCheckCircle className="h-4 w-4 shrink-0 text-emerald-600" />
          ) : (
            <FiAlertCircle className="h-4 w-4 shrink-0 text-red-600" />
          )}
          <span>{message.text}</span>
        </div>
      )}

      {/* Category Tabs */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-xs font-semibold text-gray-600 px-1">
          <span>Categories ({categories.length})</span>
          <span>Click a category to manage its 4 displayed products</span>
        </div>
        <div className="flex flex-wrap gap-2 p-2 bg-gray-50 rounded-xl border border-gray-200">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.slug;
            const count = (selectedMap[cat.slug] || []).length;

            return (
              <button
                key={cat.slug}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.slug);
                  setSearchTerm('');
                  setFilterStatus('all');
                }}
                className={`flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#084032] text-white shadow-md scale-[1.02]'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <span>{cat.name}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-extrabold transition-colors ${
                    isActive
                      ? 'bg-emerald-300 text-[#084032]'
                      : count === 4
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                      : count > 0
                      ? 'bg-amber-100 text-amber-800 border border-amber-300'
                      : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  {count}/4
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Workspace Card */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        {/* Workspace Sub-Header & Slot Counter */}
        <div className="p-4 sm:p-5 border-b border-gray-150 bg-gray-50/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <h2 className="text-lg font-bold text-gray-900">{currentCategoryObj.name} Products</h2>
              <span
                className={`text-xs font-bold px-3 py-1 rounded-full border ${
                  isFull
                    ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                    : selectedCount > 0
                    ? 'bg-amber-100 text-amber-800 border-amber-300'
                    : 'bg-red-50 text-red-700 border-red-200'
                }`}
              >
                {selectedCount} of 4 Products Selected for Homepage
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {isFull
                ? 'All 4 single-row slots are filled. To replace a product, uncheck it below, then check its replacement.'
                : `You can select ${4 - selectedCount} more product${4 - selectedCount === 1 ? '' : 's'} for this category.`}
            </p>
          </div>

          {/* Quick Helper Actions */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleResetToDefault}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 transition shadow-xs cursor-pointer"
              title="Reset this category to its default first 4 products"
            >
              <FiRotateCcw className="h-3 w-3 text-gray-500" />
              <span>Reset to Default 4</span>
            </button>
            {selectedCount > 0 && (
              <button
                type="button"
                onClick={handleClearCategory}
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg bg-red-50 border border-red-200 text-red-700 hover:bg-red-100 transition cursor-pointer"
                title="Clear all selections for this category"
              >
                <FiTrash2 className="h-3 w-3" />
                <span>Clear All</span>
              </button>
            )}
          </div>
        </div>

        {/* Table Filters Toolbar */}
        <div className="p-4 border-b border-gray-150 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={`Search ${currentCategoryObj.name} by name, brand, or barcode...`}
              className="w-full pl-9 pr-8 py-2 rounded-lg border border-gray-300 text-xs sm:text-sm focus:border-[#084032] focus:ring-1 focus:ring-[#084032] outline-none transition"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs px-1"
              >
                ✕
              </button>
            )}
          </div>

          {/* View Filter Buttons */}
          <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-lg border border-gray-200 text-xs">
            <button
              type="button"
              onClick={() => setFilterStatus('all')}
              className={`px-3 py-1.5 rounded-md font-semibold transition cursor-pointer ${
                filterStatus === 'all'
                  ? 'bg-white text-gray-900 shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              All ({rawActiveProducts.length})
            </button>
            <button
              type="button"
              onClick={() => setFilterStatus('selected')}
              className={`px-3 py-1.5 rounded-md font-semibold transition cursor-pointer ${
                filterStatus === 'selected'
                  ? 'bg-white text-emerald-800 shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Selected ({selectedCount})
            </button>
            <button
              type="button"
              onClick={() => setFilterStatus('unselected')}
              className={`px-3 py-1.5 rounded-md font-semibold transition cursor-pointer ${
                filterStatus === 'unselected'
                  ? 'bg-white text-gray-900 shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Unselected ({rawActiveProducts.length - selectedCount})
            </button>
          </div>
        </div>

        {/* Product Table Layout */}
        <div className="overflow-x-auto">
          {displayedProducts.length === 0 ? (
            <div className="text-center py-14 text-gray-500">
              <FiSearch className="h-8 w-8 mx-auto text-gray-300 mb-2" />
              <p className="text-sm font-semibold">No products match your filter.</p>
              <button
                type="button"
                onClick={() => {
                  setSearchTerm('');
                  setFilterStatus('all');
                }}
                className="mt-2 text-xs font-semibold text-[#084032] hover:underline cursor-pointer"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-[11px] font-bold text-gray-600 uppercase tracking-wider">
                  <th className="py-3 px-4 text-center w-16">Select</th>
                  <th className="py-3 px-4 w-20">Image</th>
                  <th className="py-3 px-4">Product Name</th>
                  <th className="py-3 px-4 w-40">Barcode</th>
                  <th className="py-3 px-4 w-32">Category</th>
                  <th className="py-3 px-4 w-56 text-center">Homepage Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-150 text-sm">
                {displayedProducts.map((p) => {
                  const imgSrc =
                    typeof p.image === 'string' ? p.image : p.image?.src || '';
                  const isDisabledCheckbox = !p.isSelected && isFull;

                  return (
                    <tr
                      key={p.title}
                      onClick={() => {
                        if (!isDisabledCheckbox) {
                          handleToggleProduct(p.title);
                        } else {
                          toast.error(
                            'Maximum 4 products allowed. Uncheck a product first to replace it.',
                            { icon: '⚠️' }
                          );
                        }
                      }}
                      className={`transition-colors cursor-pointer ${
                        p.isSelected
                          ? 'bg-emerald-50/40 hover:bg-emerald-50/70 border-l-4 border-l-[#084032]'
                          : isDisabledCheckbox
                          ? 'bg-white hover:bg-gray-50/50 opacity-75'
                          : 'bg-white hover:bg-gray-50'
                      }`}
                    >
                      {/* Checkbox Column */}
                      <td className="py-3 px-4 text-center">
                        <input
                          type="checkbox"
                          checked={p.isSelected}
                          disabled={isDisabledCheckbox}
                          onChange={() => handleToggleProduct(p.title)}
                          onClick={(e) => e.stopPropagation()}
                          title={
                            p.isSelected
                              ? 'Click to deselect from homepage'
                              : isDisabledCheckbox
                              ? 'Max 4 selected. Uncheck a product to select this one.'
                              : 'Click to select for homepage'
                          }
                          className={`h-5 w-5 rounded border-gray-300 transition ${
                            isDisabledCheckbox
                              ? 'cursor-not-allowed opacity-30'
                              : 'cursor-pointer accent-[#084032]'
                          }`}
                        />
                      </td>

                      {/* Image Thumbnail Column */}
                      <td className="py-3 px-4">
                        <div className="h-14 w-14 shrink-0 bg-white border border-gray-200 rounded-lg p-1 flex items-center justify-center overflow-hidden shadow-xs">
                          {imgSrc ? (
                            <img
                              src={imgSrc}
                              alt={p.title}
                              className="max-h-full max-w-full object-contain"
                            />
                          ) : (
                            <span className="text-xl">📦</span>
                          )}
                        </div>
                      </td>

                      {/* Product Name & Brand Column */}
                      <td className="py-3 px-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-bold text-gray-900 leading-snug">
                              {p.title}
                            </span>
                            {p.brand && (
                              <span className="text-[10px] font-bold uppercase tracking-wider text-[#147A5F] bg-[#defaca] px-2 py-0.5 rounded">
                                {p.brand}
                              </span>
                            )}
                          </div>
                          {p.description && (
                            <p className="text-xs text-gray-500 line-clamp-1 max-w-xl">
                              {p.description}
                            </p>
                          )}
                        </div>
                      </td>

                      {/* Barcode Column */}
                      <td className="py-3 px-4">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-gray-50 border border-gray-200 text-xs font-mono text-gray-700">
                          <FaBarcode className="h-3.5 w-3.5 text-gray-400" />
                          <span>{p.barcode}</span>
                        </div>
                      </td>

                      {/* Category Column */}
                      <td className="py-3 px-4">
                        <span className="inline-block px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700">
                          {currentCategoryObj.name}
                        </span>
                      </td>

                      {/* Homepage Status Column */}
                      <td className="py-3 px-4">
                        <div className="flex items-center justify-center gap-2">
                          {p.isSelected ? (
                            <div className="flex items-center gap-1.5">
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#084032] text-white shadow-xs">
                                <FiCheckCircle className="h-3.5 w-3.5 text-emerald-400" />
                                <span>Displayed (#{p.orderIndex})</span>
                              </span>
                              {/* Position Reorder Arrows */}
                              <div className="flex items-center gap-0.5 bg-gray-100 rounded-lg p-0.5 border border-gray-200">
                                <button
                                  type="button"
                                  disabled={p.orderIndex === 1}
                                  onClick={(e) => handleMoveOrder(p.title, -1, e)}
                                  className="p-1 rounded text-gray-600 hover:text-black hover:bg-white disabled:opacity-20 cursor-pointer transition"
                                  title="Move earlier on homepage"
                                >
                                  <FiArrowUp className="h-3 w-3" />
                                </button>
                                <button
                                  type="button"
                                  disabled={p.orderIndex === activeSelectedTitles.length}
                                  onClick={(e) => handleMoveOrder(p.title, 1, e)}
                                  className="p-1 rounded text-gray-600 hover:text-black hover:bg-white disabled:opacity-20 cursor-pointer transition"
                                  title="Move later on homepage"
                                >
                                  <FiArrowDown className="h-3 w-3" />
                                </button>
                              </div>
                            </div>
                          ) : (
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium text-gray-500 bg-gray-100">
                              {isFull ? 'Not Displayed' : 'Available to Select'}
                            </span>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>

        {/* Bottom Save Bar */}
        <div className="p-4 border-t border-gray-150 bg-gray-50/50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
            {isDirty && (
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-300">
                <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                Unsaved Changes
              </span>
            )}
            <span>
              Selections are saved directly to the database and immediately update the homepage single-row catalog cards.
            </span>
          </div>
          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            className={`flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-xs font-bold text-white transition shadow-sm cursor-pointer w-full sm:w-auto ${
              saving
                ? 'bg-gray-400 cursor-not-allowed'
                : isDirty
                ? 'bg-[#084032] hover:bg-[#0b5c48] ring-2 ring-emerald-400 ring-offset-1 active:scale-98'
                : 'bg-[#084032] hover:bg-[#0b5c48] active:scale-98'
            }`}
          >
            <FiSave className="h-4 w-4" />
            <span>{saving ? 'Saving...' : 'Save Changes'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
