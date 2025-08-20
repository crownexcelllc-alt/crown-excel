import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';

// Props: { title, name, position, message, image, rating }
export default function TestimonialCard({ title, name, position, message, image, rating = 5 }) {
  const stars = [1, 2, 3, 4, 5];
  const ratingLabel =
    rating === 5 ? 'Excellent' : rating === 4 ? 'Very good' : rating === 3 ? 'Good' : rating === 2 ? 'Fair' : 'Poor';

  return (
  <article className="w-full max-w-[360px] bg-[#f7f7f8] rounded-2xl p-6 shadow-sm border border-transparent flex flex-col justify-between h-[260px]">
      {/* Header: avatar, name/date and provider badge */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-1 ring-gray-200 bg-white">
            {image ? (
              <Image src={image} alt={name || 'Reviewer'} width={48} height={48} className="object-cover" />
            ) : (
              <div className="w-full h-full bg-gray-100" />
            )}
          </div>

          <div>
            <div className="text-base font-semibold text-gray-900 font-montserrat tracking-tight">{(name || 'Anonymous')}</div>
            <div className="text-xs text-gray-500 mt-0.5 font-montserrat">{position || ''}</div>
          </div>
        </div>

        {/* Provider badge (Google G) */}
        <div className="ml-4 flex items-start">
          <svg width="28" height="28" viewBox="0 0 48 48" fill="none" aria-hidden>
            <rect width="48" height="48" rx="8" fill="#FFFFFF" />
            <path d="M24 12c3.31 0 6.03 1.25 8 2.99l-3.24 3.24C27.9 17.05 25.99 16 24 16c-4 0-7.38 2.5-8.6 6.02l-.11.34-3.04-2.35C14.86 13.3 19.12 12 24 12z" fill="#EA4335" />
            <path d="M12.5 24c0-1.2.2-2.36.56-3.45l3.32 2.57C16.1 23.08 16 23.53 16 24c0 .47.1.92.38 1.28l-3.32 2.57A11.45 11.45 0 0 1 12.5 24z" fill="#FBBC05" />
            <path d="M24 36c-4.88 0-9.14-1.3-12.2-3.34l3.04-2.35C16.62 31.5 20 34 24 34c1.99 0 3.9-.95 4.76-2.23L32 34.01C30.03 35.75 27.31 36 24 36z" fill="#34A853" />
            <path d="M35.44 28.45C34.9 30.4 33.13 32 31 32c-1.99 0-3.9-.95-4.76-2.23L31 26c1.13 0 2.09.62 2.56 1.45z" fill="#4285F4" />
          </svg>
        </div>
      </div>

  {/* Stars */}
  <div className="flex items-center gap-2 mb-3">
        <div className="flex items-center" aria-hidden>
          {stars.map((s) => (
            <FaStar key={s} className={`mr-1 ${s <= rating ? 'text-[#FF7A00]' : 'text-gray-300'}`} style={{ width: 18, height: 18 }} />
          ))}
        </div>
  <div className="text-xs text-gray-500 font-montserrat">{ratingLabel}</div>
      </div>

      {/* Message - flexible area so all cards match height */}
      <div className="text-base text-gray-800 leading-relaxed font-montserrat flex-1 overflow-hidden mt-2">
        <div style={{ maxHeight: '8.5rem', overflow: 'hidden' }}>{message || 'No message provided.'}</div>
      </div>
    </article>
  )
}