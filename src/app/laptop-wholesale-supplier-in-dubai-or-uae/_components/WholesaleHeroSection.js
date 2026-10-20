import React from 'react';
import { Send, PhoneCall } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WholesaleHeroSection({
  openGeneralInquiryModal,
  getWhatsAppUrl,
  handleWhatsAppRedirect,
  typedHeroText,
  prefersReducedMotion,
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F7FAF9] via-white to-white pt-14 pb-16 sm:pt-20 sm:pb-24 border-b border-gray-100">
      {/* Subtle Ambient Radial Glow for Depth */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[850px] h-[320px] bg-emerald-100/30 blur-[110px] rounded-full pointer-events-none -z-0"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* User-Specified Display Heading (Anton, consistent font size across all lines including badge) */}
        <h1
          className="font-anton font-normal uppercase text-center text-3xl sm:text-5xl md:text-6xl lg:text-[80px] xl:text-[84px] tracking-[-0.035em] leading-[0.95]"
          style={{
            fontFamily: "'Anton', Impact, sans-serif",
            fontWeight: 400,
            letterSpacing: '-0.035em',
            lineHeight: 0.95,
            textTransform: 'uppercase',
          }}
        >
          <span className="block not-italic text-[#171717] lg:whitespace-nowrap">
            Looking For <span className="inline-block bg-[#FFE500] py-2 px-3"> Wholesale </span> Deals In
          </span>
          {/* Dynamic Animated Category Typewriter */}
          <span
            className="block italic text-[#147A5F] mt-1 sm:mt-1.5 md:mt-2"
            style={{ fontStyle: 'italic' }}
          >
            <span className="inline-flex items-center justify-center min-h-[1.15em] sm:min-h-[1.15em] align-middle">
              {/* Animated Typing Text */}
              <span className="inline-flex items-center text-[#147A5F]">
                <span>{typedHeroText || 'Personal, Gaming & Business Laptops'}</span>
                {/* Blinking Cursor */}
                {!prefersReducedMotion && (
                  <span
                    aria-hidden="true"
                    className="inline-block w-[3px] sm:w-[4px] md:w-[5px] h-[0.7em] bg-[#147A5F] ml-1 sm:ml-1.5 rounded-full animate-pulse align-middle"
                  />
                )}
              </span>
            </span>
          </span>
          <span className="block mt-2 sm:mt-3 md:mt-4">
            <span
              className="inline-block not-italic bg-[#147A5F] text-white px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-3.5 lg:py-4 rounded-full shadow-sm lg:whitespace-nowrap transform -rotate-[0.7deg] origin-center"
              style={{
                fontStyle: 'normal',
                transform: 'rotate(-0.7deg)',
              }}
            >
              Best Supplier in Dubai &amp; UAE
            </span>
          </span>
        </h1>

        {/* Subtitle Paragraph (Plus Jakarta Sans) */}
        <p className="text-sm sm:text-base md:text-[17px] text-gray-600 leading-relaxed font-jakarta font-normal mt-5 sm:mt-7 mb-7 sm:mb-9 max-w-2xl sm:max-w-3xl mx-auto">
          Crown Excel is a trusted wholesale supplier of commercial, gaming, and business laptops in Dubai and across the UAE. We deliver authentic factory-sealed inventory, competitive bulk rates, and fast local fulfillment to IT resellers and corporate clients.
        </p>

        {/* Centered Action Buttons (Plus Jakarta Sans) */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 font-jakarta">
          <button
            type="button"
            onClick={openGeneralInquiryModal}
            className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-[#147A5F] hover:bg-[#0f604b] text-white font-semibold text-sm sm:text-[15px] shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <Send className="w-4 h-4" />
            <span>Request Wholesale Quote</span>
          </button>

          <a
            href={getWhatsAppUrl('Hello Crown Excel, I am inquiring about wholesale laptops.')}
            onClick={(e) => handleWhatsAppRedirect(e, 'Hello Crown Excel, I am inquiring about wholesale laptops.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm sm:text-[15px] shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <FaWhatsapp className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>

          <a
            href="tel:+97143540566"
            className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-white hover:bg-gray-50 text-gray-800 font-semibold text-sm sm:text-[15px] border border-gray-200/90 shadow-2xs hover:shadow-xs transition-all duration-200 transform hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <PhoneCall className="w-4 h-4 text-[#147A5F]" />
            <span>+971 4-354 0566</span>
          </a>
        </div>
      </div>
    </section>
  );
}
