'use client';
import React from 'react';
import Image from 'next/image';
import ilyaskhan from '@/Components/Images/ilyaskhan.jpg';

export default function MemberIlyas({ name, position, tenure, dept, quote, image }) {
  const displayName = name || "Ilyas Khan";
  const displayPosition = position || "Managing Director";
  const displayTenure = tenure || "15+ Years";
  const displayDept = dept || "Management";
  const displayQuote = quote || `Our success is built on the foundation of trust, integrity, and family values.`;
  const displayImage = image || ilyaskhan;
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
      <div className="relative h-64 bg-[#f3f4f6] overflow-hidden rounded-t-2xl flex items-center justify-center">
        <Image 
          src={displayImage} 
          alt={displayName} 
          fill 
          style={{ objectFit: 'contain', objectPosition: 'center top' }} 
          className="rounded-t-2xl" 
          priority 
        />
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-4 right-4">
          <p className="bg-[#61ce70] text-white px-3 py-1 rounded-full text-sm font-montserrat font-medium">15+ Years</p>
        </div>
        <div className="absolute bottom-4 left-4">
          <p className="bg-white/90 text-[#16806b] px-3 py-1 rounded-full text-xs font-montserrat font-semibold shadow">Management</p>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#16806b] font-montserrat mb-2 group-hover:text-[#084032] transition-colors">Ilyas Khan</h3>
        <p className="text-[#084032] font-muli font-medium mb-4">Managing Director</p>
        <blockquote className="text-gray-600 font-muli italic text-sm leading-relaxed border-l-4 border-[#61ce70] pl-4">
          <p className="text-gray-600 font-muli italic text-sm">"Our success is built on the foundation of trust, integrity, and family values."</p>
        </blockquote>
      </div>
    </div>
  );
}
