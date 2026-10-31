'use client';

import React, { useState, useMemo } from 'react';
import { categories, productsByCategory, getProductBarcode } from '@/app/_components/AllProducts/catalogData';
import { FiCheck, FiRotateCcw, FiInfo, FiLayers, FiArrowUp, FiArrowDown } from 'react-icons/fi';
import { FaBarcode } from 'react-icons/fa';

export default function ProductCatalogSelector({ value = {}, onChange, disabled = false }) {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.slug || 'laptops');

  // Normalise value map
  const currentMap = useMemo(() => {
    return value && typeof value === 'object' ? value : {};
  }, [value]);

  const rawActiveProducts = useMemo(() => {
    return productsByCategory[activeCategory] || [];
  }, [activeCategory]);

  // Resolve active category selected products (default to first 4 if not custom yet)
  const activeSelectedTitles = useMemo(() => {
    if (Array.isArray(currentMap[activeCategory]) && currentMap[activeCategory].length > 0) {
      return currentMap[activeCategory].slice(0, 4);
    }
    if ((activeCategory === 'phones' || activeCategory === 'cctv') && Array.isArray(currentMap['phones-cctv']) && currentMap['phones-cctv'].length > 0) {
      const matched = currentMap['phones-cctv'].filter((title) => rawActiveProducts.some((p) => p.title === title));
      if (matched.length > 0) return matched.slice(0, 4);
    }
    return rawActiveProducts.slice(0, 4).map((p) => p.title);
  }, [currentMap, activeCategory, rawActiveProducts]);

  const currentCategoryObj = useMemo(() => {
    return categories.find((c) => c.slug === activeCategory) || categories[0];
  }, [activeCategory]);

  const selectedCount = activeSelectedTitles.length;
  const isFull = selectedCount === 4;

  // Toggle selection for a product
  const handleToggleProduct = (productTitle) => {
    if (disabled) return;

    let updatedList = [];
    if (activeSelectedTitles.includes(productTitle)) {
      // Uncheck
      updatedList = activeSelectedTitles.filter((t) => t !== productTitle);
    } else {
      // Check (max 4)
      if (activeSelectedTitles.length >= 4) return;
      updatedList = [...activeSelectedTitles, productTitle];
    }

    onChange({
      ...currentMap,
      [activeCategory]: updatedList,
    });
  };

  // Move product position
  const handleMoveOrder = (productTitle, direction, e) => {
    if (e) e.stopPropagation();
    if (disabled) return;

    const idx = activeSelectedTitles.indexOf(productTitle);
    if (idx === -1) return;

    const newIdx = idx + direction;
    if (newIdx < 0 || newIdx >= activeSelectedTitles.length) return;

    const nextList = [...activeSelectedTitles];
    const temp = nextList[idx];
    nextList[idx] = nextList[newIdx];
    nextList[newIdx] = temp;

    onChange({
      ...currentMap,
      [activeCategory]: nextList,
    });
  };

  // Reset to default first 4
  const handleResetToDefault = () => {
    if (disabled) return;
    const first4 = rawActiveProducts.slice(0, 4).map((p) => p.title);
    onChange({
      ...currentMap,
      [activeCategory]: first4,
    });
  };

  return (
    <div className="space-y-4 rounded-xl border border-gray-200 bg-white p-4 sm:p-5 shadow-sm font-montserrat">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-150 pb-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#084032] text-white">
            <FiLayers className="h-4 w-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-gray-900">Homepage Product Catalog Management</h4>
            <p className="text-xs text-gray-500">
              Select which 4 products appear in the single row for each category on the homepage.
            </p>
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-1.5 border-b border-gray-100 pb-3">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.slug;
          const count = Array.isArray(currentMap[cat.slug])
            ? currentMap[cat.slug].length
            : 4; // default is 4

          return (
            <button
              key={cat.slug}
              type="button"
              onClick={() => setActiveCategory(cat.slug)}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition cursor-pointer ${
                isActive
                  ? 'bg-[#084032] text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span>{cat.name}</span>
              <span
                className={`rounded-full px-1.5 py-0.2 text-[10px] font-bold ${
                  isActive
                    ? 'bg-emerald-300 text-[#084032]'
                    : count === 4
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-amber-100 text-amber-800'
                }`}
              >
                {count}/4
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Category Header & Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-lg bg-gray-50 p-3 border border-gray-200">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-gray-900">
              {currentCategoryObj.name} Products
            </span>
            <span
              className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${
                isFull
                  ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                  : 'bg-amber-100 text-amber-800 border-amber-300'
              }`}
            >
              {selectedCount} of 4 selected
            </span>
          </div>
          <p className="mt-0.5 text-xs text-gray-500">
            {isFull
              ? '4 card slots filled. Uncheck a product to select a different replacement.'
              : `You can select ${4 - selectedCount} more product${4 - selectedCount === 1 ? '' : 's'}.`}
          </p>
        </div>

        <button
          type="button"
          disabled={disabled}
          onClick={handleResetToDefault}
          className="flex items-center gap-1 rounded border border-gray-300 bg-white px-2.5 py-1 text-xs font-medium text-gray-700 hover:bg-gray-50 transition cursor-pointer"
        >
          <FiRotateCcw className="h-3 w-3 text-gray-500" />
          <span>Reset Default 4</span>
        </button>
      </div>

      {/* Simple Table Layout */}
      <div className="overflow-x-auto rounded-lg border border-gray-200 max-h-[460px]">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200 font-bold text-gray-600 uppercase tracking-wider text-[10px]">
              <th className="py-2.5 px-3 text-center w-12">Select</th>
              <th className="py-2.5 px-3 w-16">Image</th>
              <th className="py-2.5 px-3">Product Name</th>
              <th className="py-2.5 px-3 w-32">Barcode</th>
              <th className="py-2.5 px-3 w-40 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-150">
            {rawActiveProducts.map((p, idx) => {
              const isSelected = activeSelectedTitles.includes(p.title);
              const orderIndex = isSelected ? activeSelectedTitles.indexOf(p.title) + 1 : null;
              const isDisabledCheckbox = disabled || (!isSelected && isFull);
              const barcode = getProductBarcode(p, activeCategory, idx);
              const imgSrc = typeof p.image === 'string' ? p.image : p.image?.src || '';

              return (
                <tr
                  key={p.title}
                  onClick={() => {
                    if (!isDisabledCheckbox) handleToggleProduct(p.title);
                  }}
                  className={`transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-50/40 hover:bg-emerald-50/70 border-l-4 border-l-[#084032]'
                      : isDisabledCheckbox
                      ? 'bg-white opacity-75'
                      : 'bg-white hover:bg-gray-50'
                  }`}
                >
                  <td className="py-2.5 px-3 text-center">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      disabled={isDisabledCheckbox}
                      onChange={() => handleToggleProduct(p.title)}
                      onClick={(e) => e.stopPropagation()}
                      className={`h-4 w-4 rounded border-gray-300 transition ${
                        isDisabledCheckbox ? 'cursor-not-allowed opacity-30' : 'cursor-pointer accent-[#084032]'
                      }`}
                    />
                  </td>
                  <td className="py-2.5 px-3">
                    <div className="h-12 w-12 shrink-0 bg-white border border-gray-200 rounded p-1 flex items-center justify-center overflow-hidden">
                      {imgSrc ? (
                        <img src={imgSrc} alt={p.title} className="max-h-full max-w-full object-contain" />
                      ) : (
                        <span>📦</span>
                      )}
                    </div>
                  </td>
                  <td className="py-2.5 px-3">
                    <div className="font-bold text-gray-900">{p.title}</div>
                    {p.brand && (
                      <span className="text-[9px] font-bold uppercase text-[#147A5F] bg-[#defaca] px-1.5 py-0.2 rounded">
                        {p.brand}
                      </span>
                    )}
                  </td>
                  <td className="py-2.5 px-3 font-mono text-gray-600">
                    <div className="inline-flex items-center gap-1 text-[11px]">
                      <FaBarcode className="h-3 w-3 text-gray-400" />
                      <span>{barcode}</span>
                    </div>
                  </td>
                  <td className="py-2.5 px-3 text-center">
                    {isSelected ? (
                      <div className="flex items-center justify-center gap-1">
                        <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#084032] text-white">
                          #{orderIndex}
                        </span>
                        <div className="flex items-center gap-0.5">
                          <button
                            type="button"
                            disabled={orderIndex === 1 || disabled}
                            onClick={(e) => handleMoveOrder(p.title, -1, e)}
                            className="p-0.5 rounded text-gray-500 hover:text-black disabled:opacity-20"
                          >
                            <FiArrowUp className="h-3 w-3" />
                          </button>
                          <button
                            type="button"
                            disabled={orderIndex === activeSelectedTitles.length || disabled}
                            onClick={(e) => handleMoveOrder(p.title, 1, e)}
                            className="p-0.5 rounded text-gray-500 hover:text-black disabled:opacity-20"
                          >
                            <FiArrowDown className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <span className="text-gray-400 text-[11px]">
                        {isFull ? 'Not Displayed' : 'Available'}
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Helper Footer */}
      <div className="flex items-center gap-2 rounded-lg bg-blue-50/70 p-2.5 text-xs text-blue-900 border border-blue-150">
        <FiInfo className="h-4 w-4 shrink-0 text-blue-600" />
        <span>
          Selected products will appear in a single row on the homepage. Changes take effect on the homepage once saved.
        </span>
      </div>
    </div>
  );
}
