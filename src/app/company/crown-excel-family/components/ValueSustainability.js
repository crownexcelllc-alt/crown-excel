'use client';
import React from 'react';

export default function ValueSustainability({ title, desc }) {
  const displayTitle = title || "Sustainability";
  const displayDesc = desc || "Building a sustainable future for our family and the next generation.";
  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center px-8 py-10 border border-[#e5e7eb]" style={{ minHeight: '260px' }}>
      <div className="w-14 h-14 flex items-center justify-center bg-[#16806b] rounded-xl mb-6">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2" /><path d="M12 6V12L16 14" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </div>
      <div className="flex flex-col items-center text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-2 font-montserrat">{displayTitle}</h3>
        <p className="text-gray-500 font-muli text-base leading-relaxed mb-2">{displayDesc}</p>
      </div>
    </div>
  );
}
