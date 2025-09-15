import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import google from '@/Components/Images/google.svg';
import Avatar from '../../../Components/Images/defaultavatar.jpg'

// Props: { name, message, image, rating, date }
export default function TestimonialCard({ name, message, image, rating = 0, date }) {
  const stars = [1, 2, 3, 4, 5];
  const isLong = (message?.length || 0) > 180; // heuristic to show “… more”

  // Format date
  let dateLabel = '';
  if (date) {
    try {
      const d = new Date(date);
      if (!isNaN(d)) {
        dateLabel = d.toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' });
      }
    } catch {}
  }

  return (
    // Outer gradient border + shadow
    <article className="group relative w-full max-w-[95vw] sm:max-w-[95vw] md:max-w-[520px] lg:max-w-[450px] mx-auto p-[1px] bg-gradient-to-br from-[#16CA9A33] via-white to-[#08403233] shadow-[0_8px_28px_rgba(0,0,0,0.08)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.14)] transition-shadow duration-300">
      {/* Hover glow accent */}
      <div className="pointer-events-none absolute -top-3 -right-3 h-16 w-16 bg-[#16CA9A33] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Card body (fixed height for uniform cards) */}
      <div className="relative bg-white/95 backdrop-blur p-5 md:p-6 h-[260px] md:h-[280px] flex flex-col rounded overflow-hidden">
        {/* Top: Avatar, name/date, Google badge */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full overflow-hidden ring-1 ring-gray-200 bg-white flex-shrink-0">
              {image ? (
                <Image src={image} alt={name || 'Reviewer'} width={56} height={56} className="object-cover" />
              ) : (
                <Image src={Avatar} alt="Default Avatar" width={56} height={56} className="object-cover" />
              )}
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[18px] font-[600] leading-[26px] font-inter text-black truncate max-w-[160px] md:max-w-[220px]">
                {name || 'Anonymous'}
              </span>
              <div className="text-gray-400 text-[13px] font-montserrat mt-0.5">{dateLabel}</div>
            </div>
          </div>

          <div className="flex items-center ml-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200/80 px-2.5 py-1 bg-white/70">
              <Image src={google} alt="Google" width={18} height={18} />
              <span className="text-xs text-gray-600 font-medium">Review</span>
            </span>
          </div>
        </div>

        {/* Stars */}
        <div className="flex items-center gap-1.5 mb-2 ml-1">
          {stars.map((s) => (
            <FaStar
              key={s}
              className={`text-[14px] md:text-[16px] ${s <= rating ? 'text-[#FF7A00]' : 'text-gray-300'}`}
            />
          ))}
        </div>

        {/* Message – 4-line clamp + fade + “… more” */}
        <div className="relative mt-2 flex-1 ml-1">
          <p
            className="text-black text-[15px] md:text-[16px] font-lora leading-[24px] md:leading-[25px] text-left"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 4,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
            title={message}
          >
            {message || 'No message provided.'}
          </p>

          {isLong && (
            <>
              <div className="pointer-events-none absolute bottom-0 left-0 right-14 h-6 bg-gradient-to-t from-white via-white/70 to-transparent" />
              <span className="absolute bottom-0 right-0 z-[1] text-[12px] md:text-[12px] font-medium text-[#084032] bg-white px-1 rounded">
                ... more
              </span>
            </>
          )}
        </div>

        {/* Bottom divider accent */}
        <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>
    </article>
  );
}