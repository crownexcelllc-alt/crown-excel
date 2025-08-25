import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import google from '@/Components/Images/google.svg';

// Props: { name, message, image, rating, date }
export default function TestimonialCard({ name, message, image, rating, date }) {
  const stars = [1, 2, 3, 4, 5];

  // Format date
  let dateLabel = '';
  if (date) {
    try {
      const d = new Date(date);
      if (!isNaN(d)) {
        dateLabel = d.toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' });
      }
    } catch (e) {}
  }

  return (
    <article
      className="bg-white rounded-[10px] p-6 flex flex-col min-h-[250px] w-full max-w-[95vw] sm:max-w-[450px] md:max-w-[350px] lg:max-w-[450px] mx-auto"
    >
      {/* Top: Avatar, Name, Google badge right */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full overflow-hidden ring-1 ring-gray-200 bg-white flex-shrink-0">
            {image ? (
              <Image src={image} alt={name || 'Reviewer'} width={56} height={56} className="object-cover" />
            ) : (
              <div className="w-full h-full bg-gray-100" />
            )}
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-[18px] font-[500] leading-[27px] font-inter text-black">{name || 'Anonymous'}</span>
            <div className="text-gray-400 text-[14px] font-montserrat mt-1">{dateLabel}</div>
          </div>
        </div>
        <div className="flex items-center ml-4">
          <Image src={google} alt="Google" width={22} height={22} />
        </div>
      </div>

      {/* Stars */}
      <div className="flex items-center gap-1 mb-2 ml-1">
        {stars.map((s) => (
          <FaStar key={s} className={`text-[18px] ${s <= rating ? 'text-[#FF7A00]' : 'text-gray-300'}`} />
        ))}
      </div>

      {/* Message */}
      <div className="text-black text-[16px] font-lora leading-[25px] mt-2 flex-1 overflow-hidden text-left ml-1">
        <div style={{ maxHeight: '8.5rem', overflow: 'hidden' }}>{message || 'No message provided.'}</div>
      </div>
    </article>
  );
}