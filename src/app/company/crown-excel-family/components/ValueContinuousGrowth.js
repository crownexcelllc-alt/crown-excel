'use client';
import React from 'react';

export default function ValueContinuousGrowth() {
  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center px-8 py-10 border border-[#e5e7eb]" style={{ minHeight: '260px' }}>
      <div className="w-14 h-14 flex items-center justify-center bg-[#16806b] rounded-xl mb-6">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M3 17V21H21V17" stroke="#fff" strokeWidth="2" strokeLinejoin="round" /><path d="M7 13L12 8L17 13" stroke="#fff" strokeWidth="2" strokeLinejoin="round" /></svg>
      </div>
      <div className="flex flex-col items-center text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-2 font-montserrat">Continuous Growth</h3>
        <p className="text-gray-500 font-muli text-base leading-relaxed mb-2">Embracing change and fostering continuous learning and development.</p>
      </div>
    </div>
  );
}
