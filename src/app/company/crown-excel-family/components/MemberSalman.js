'use client';
import React from 'react';
import { safeRender } from '@/lib/safe-html';
import Image from 'next/image';
const defaultAvatar = { src: 'https://res.cloudinary.com/dqghun7oj/image/upload/v1781079116/cms/default/content/pxuhqmwwf9elvu0kgdtf.jpg', height: 1000, width: 1000 };

export default function MemberSalman({ name, position, tenure, dept, quote, image }) {
  const displayImage = image || defaultAvatar;
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
      <div className="relative h-64 bg-[#f3f4f6] overflow-hidden rounded-t-2xl flex items-center justify-center">
        <Image 
          src={displayImage} 
          alt={name || "Mohammed Razi"} 
          fill 
          style={{ objectFit: 'contain', objectPosition: 'center top' }} 
          className="rounded-t-2xl" 
          priority 
        />
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-4 right-4">
          <p className="bg-[#61ce70] text-white px-3 py-1 rounded-full text-sm font-montserrat font-medium">{safeRender(tenure, "4+ Years")}</p>
        </div>
        <div className="absolute bottom-4 left-4">
          <p className="bg-white/90 text-[#16806b] px-3 py-1 rounded-full text-xs font-montserrat font-semibold shadow">{safeRender(dept, "Sales")}</p>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#16806b] font-montserrat mb-2 group-hover:text-[#084032] transition-colors">{safeRender(name, "Mohammed Razi")}</h3>
        <p className="text-[#084032] font-muli font-medium mb-4">{safeRender(position, "Sales Manager")}</p>
        <blockquote className="text-gray-600 font-muli italic text-sm leading-relaxed border-l-4 border-[#61ce70] pl-4">
          {quote ? (
            <p className="text-gray-600 font-muli italic text-sm">
              "{safeRender(quote.replace(/^"|"$/g, ''))}"
            </p>
          ) : (
            <p className="text-gray-600 font-muli italic text-sm">
              "{safeRender(null, "Every decision we make reflects our commitment to our family and community.")}"
            </p>
          )}
        </blockquote>
      </div>
    </div>
  );
}
