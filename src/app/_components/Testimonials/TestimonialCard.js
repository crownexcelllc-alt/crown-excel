import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';

// Props: { title, name, position, message, image, rating }
export default function TestimonialCard({ title, name, position, message, image, rating = 5 }) {
  const stars = [1, 2, 3, 4, 5];
  const ratingLabel =
    rating === 5 ? 'Excellent' : rating === 4 ? 'Very good' : rating === 3 ? 'Good' : rating === 2 ? 'Fair' : 'Poor';

  return (
    <article className="w-full max-w-[360px] bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-200 flex flex-col border border-transparent hover:border-[#16CA9A]">
      {/* Top: rating badge & stars */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center" aria-hidden>
            {stars.map((s) => (
              <FaStar
                key={s}
                className={`mr-1 ${s <= rating ? 'text-[#16CA9A]' : 'text-gray-300'}`}
                style={{ width: 16, height: 16 }}
              />
            ))}
          </div>
          <div className="hidden sm:block text-sm text-gray-900 font-montserrat font-medium">{ratingLabel}</div>
        </div>

        <div className="ml-auto">
          <span
            className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[#def7ef] text-[#065a44] border border-[#cfeee0]"
            aria-hidden
          >
            {rating.toFixed(1)}
          </span>
        </div>
      </div>

      {/* Quote / message */}
      <div className="relative mb-4 flex-1">
        <svg
          className="absolute -top-1 left-0 w-6 h-6 text-[#084032] opacity-95"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <path d="M7.17 6A4 4 0 0 0 4 10.17V12a4 4 0 0 0 4 4h1v-6H7.17zM17.17 6A4 4 0 0 0 14 10.17V12a4 4 0 0 0 4 4h1v-6h-1.83z" />
        </svg>

  <div className="text-sm text-gray-800 leading-relaxed font-montserrat pl-7" style={{ maxHeight: '9rem', overflow: 'hidden' }}>
          {message || 'No message provided.'}
        </div>

        {/* subtle fade at bottom if text overflows */}
        {/* <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent rounded-b-2xl" /> */}
      </div>

      {/* Footer: avatar and author */}
      <footer className="flex items-center gap-3 mt-3">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-1 ring-gray-200">
          {image ? (
            <Image src={image} alt={name || 'Reviewer'} width={48} height={48} className="object-cover" />
          ) : (
            <div className="w-full h-full bg-gray-100" />
          )}
        </div>

        <div className="flex-1">
          <div className="text-sm font-medium text-gray-900 font-montserrat">{name || 'Anonymous'}</div>
          {position && <div className="text-xs text-gray-500">{position}</div>}
        </div>
      </footer>
    </article>
  );
}