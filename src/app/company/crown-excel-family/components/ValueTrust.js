'use client';
import React from 'react';

export default function ValueTrust() {
  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center px-8 py-10 border border-[#e5e7eb]" style={{ minHeight: '260px' }}>
      <div className="w-14 h-14 flex items-center justify-center bg-[#16806b] rounded-xl mb-6">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M12 21C12 21 4 13.5 4 8.5C4 5.5 6.5 3 9.5 3C11.04 3 12.5 3.81 13.25 5.09C14 3.81 15.46 3 17 3C20 3 22.5 5.5 22.5 8.5C22.5 13.5 15 21 15 21H12Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </div>
      <div className="flex flex-col items-center text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-2 font-montserrat">Trust & Integrity</h3>
        <p className="text-gray-500 font-muli text-base leading-relaxed mb-2">Building lasting relationships based on mutual trust and unwavering integrity.</p>
      </div>
    </div>
  );
}
