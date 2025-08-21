import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import google from '@/Components/Images/google.svg'

// Props: { title, name, position, message, image, rating }
export default function TestimonialCard({ title, name, position, message, image, rating = 5, date }) {
  const stars = [1, 2, 3, 4, 5];
  const ratingLabel =
    rating === 5 ? 'Excellent' : rating === 4 ? 'Very good' : rating === 3 ? 'Good' : rating === 2 ? 'Fair' : 'Poor';

  return (
  <article className="w-full max-w-[360px] bg-[#f6f6f8] rounded-2xl p-4 shadow-sm border border-transparent flex flex-col justify-between h-[220px]">
      {/* Header: avatar, name/date and provider badge */}
      <div className="flex items-start justify-between">
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
              <div className="text-[14px] leading-[22.4px] text-gray-500 mt-0.5 font-montserrat">
                {(() => {
                  if (!date) return position || ''
                  try {
                    const d = new Date(date)
                    if (isNaN(d)) return position || ''
                    return d.toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' })
                  } catch (e) {
                    return position || ''
                  }
                })()}
              </div>
          </div>
        </div>

        {/* Provider badge (Google G) */}
        <div className="ml-4 flex items-start">
          <Image src={google} alt="Google" width={28} height={28} />
        </div>
      </div>

  {/* Stars */}
  <div className="flex items-center gap-2 mt-3 mb-0">
        <div className="flex items-center" aria-hidden>
          {stars.map((s) => (
            <FaStar key={s} className={`mr-1 ${s <= rating ? 'text-[#FF7A00]' : 'text-gray-300'}`} style={{ width: 22, height: 22 }} />
          ))}
        </div>
  {/* <div className="text-xs text-gray-500 font-montserrat">{ratingLabel}</div> */}
      </div>

      {/* Message - flexible area so all cards match height */}
      <div className="text-base text-gray-800 leading-relaxed font-montserrat flex-1 overflow-hidden mt-2">
        <div style={{ maxHeight: '8.5rem', overflow: 'hidden' }}>{message || 'No message provided.'}</div>
      </div>
    </article>
  )
}