'use client';
import React from 'react';
import Image from 'next/image';
const Vishal = { src: 'https://res.cloudinary.com/dqghun7oj/image/upload/v1781077221/cms/default/content/uct4adqdmxdxuxlfvjuc.jpg', height: 1000, width: 1000 };

export default function MemberVishal({ name, position, tenure, dept, quote, image }) {
  const displayImage = image || Vishal;
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
      <div className="relative h-64 bg-[#f3f4f6] overflow-hidden rounded-t-2xl flex items-center justify-center">
        <Image 
          src={displayImage} 
          alt={name || "Vishal Pawar"} 
          fill 
          style={{ objectFit: 'contain', objectPosition: 'center top' }} 
          className="rounded-t-2xl" 
          priority 
        />
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-4 right-4">
          <p className="bg-[#61ce70] text-white px-3 py-1 rounded-full text-sm font-montserrat font-medium">{tenure || "7+ Years"}</p>
        </div>
        <div className="absolute bottom-4 left-4">
          <p className="bg-white/90 text-[#16806b] px-3 py-1 rounded-full text-xs font-montserrat font-semibold shadow">{dept || "Business Development"}</p>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#16806b] font-montserrat mb-2 group-hover:text-[#084032] transition-colors">{name || "Vishal Pawar"}</h3>
        <p className="text-[#084032] font-muli font-medium mb-4">{position || "Business Development Manager"}</p>
        <blockquote className="text-gray-600 font-muli italic text-sm leading-relaxed border-l-4 border-[#61ce70] pl-4">
          {quote ? (
            <p className="text-gray-600 font-muli italic text-sm">"{quote.replace(/^"|"$/g, '')}"</p>
          ) : (
            <p className="text-gray-600 font-muli italic text-sm">"Building lasting relationships is at the heart of everything we do."</p>
          )}
        </blockquote>
      </div>
    </div>
  );
}
