import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';

// Props: { title, name, position, message, image, rating }
export default function TestimonialCard({ title, name, position, message, image, rating = 5 }) {
  const stars = [1, 2, 3, 4, 5];
//   const shortTitle = title || (message ? message.split('.')?.[0] : 'Great!');
  const ratingLabel = rating === 5 ? 'Excellent' : rating === 4 ? 'Very good' : rating === 3 ? 'Good' : rating === 2 ? 'Fair' : 'Poor';

  return (
    <article className="w-full max-w-[360px] h-80 bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-200 flex flex-col">
      <header className="mb-2">
        <h3 className="text-lg md:text-xl font-serif font-semibold text-gray-900">{ratingLabel}</h3>
      </header>

      <div className="flex items-center gap-3 mb-3">
        <div className="flex items-center text-yellow-400" aria-hidden>
          {stars.map(s => (
            <FaStar key={s} className={`mr-1 ${s <= rating ? 'opacity-100' : 'opacity-30'}`} style={{ width: 18, height: 18 }} />
          ))}
        </div>
      </div>

      {/* Message area: fixed space, overflow hidden so all cards keep same height */}
      <div className="text-sm text-gray-700 leading-relaxed break-words mb-4 overflow-hidden" style={{ flex: '1 1 auto' }}>
        <div style={{ maxHeight: '8.5rem', overflow: 'hidden' }}>
          {message}
        </div>
      </div>

      <footer className="flex items-center gap-3 mt-4" style={{ flex: '0 0 auto' }}>
        <div className="w-12 h-12 rounded-full overflow-hidden border flex-shrink-0">
          {image ? (
            <Image src={image} alt={name} width={48} height={48} className="object-cover" />
          ) : (
            <div className="w-full h-full bg-gray-100" />
          )}
        </div>
        <div>
          <div className="text-sm font-medium text-gray-900">{name}</div>
          {position && <div className="text-xs text-gray-500">{position}</div>}
        </div>
      </footer>
    </article>
  );
}