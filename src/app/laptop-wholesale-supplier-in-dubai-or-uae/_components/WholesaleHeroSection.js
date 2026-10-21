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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F7FAF9] via-white to-white pt-7 pb-12 sm:pt-20 sm:pb-24 border-b border-gray-100">
      {/* Subtle Ambient Radial Glow for Depth */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[650px] md:w-[850px] h-[200px] sm:h-[320px] bg-emerald-100/30 blur-[70px] sm:blur-[110px] rounded-full pointer-events-none -z-0"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* User-Specified Display Heading (Anton, consistent font size across all lines on mobile and desktop) */}
        <h1
          className="font-anton font-normal uppercase text-center text-[26px] sm:text-5xl md:text-6xl lg:text-[80px] xl:text-[84px] tracking-[-0.035em] leading-[1.08] sm:leading-[1] md:leading-[0.95]"
          style={{
            fontFamily: "'Anton', Impact, sans-serif",
            fontWeight: 400,
            textTransform: 'uppercase',
          }}
        >
          {/* Line 1: Desktop single line, Mobile clean 2-tier wrap */}
          <span className="block not-italic text-[#171717] text-[26px] sm:text-5xl md:text-6xl lg:text-[80px] xl:text-[84px] lg:whitespace-nowrap">
            <span className="block md:inline">Looking For </span>
            <span className="inline-block mt-0.5 md:mt-0">
              <span className="inline-block bg-[#FFE500] text-[#171717] px-2 py-0.5 sm:px-3 sm:py-1.5 md:py-2 md:px-3 rounded-[3px] sm:rounded-none shadow-xs sm:shadow-none align-baseline">
                Wholesale
              </span>{' '}
              <span>Deals On</span>
            </span>
          </span>

          {/* Dynamic Animated Category Typewriter */}
          <span
            className="block italic text-[#147A5F] text-[26px] sm:text-5xl md:text-6xl lg:text-[80px] xl:text-[84px] mt-1 sm:mt-1.5 md:mt-2"
            style={{ fontStyle: 'italic' }}
          >
            <span className="inline-flex items-center justify-center min-h-[1.2em] sm:min-h-[1.15em] align-middle px-1">
              {/* Animated Typing Text */}
              <span className="inline-flex items-center text-[#147A5F]">
                <span>{typedHeroText  }</span>
                {/* Blinking Cursor */}
                {!prefersReducedMotion && (
                  <span
                    aria-hidden="true"
                    className="inline-block w-[2.5px] sm:w-[4px] md:w-[5px] h-[0.7em] bg-[#147A5F] ml-1 sm:ml-1.5 rounded-full animate-pulse align-middle"
                  />
                )}
              </span>
            </span>
          </span>

          {/* Best Supplier in Dubai & UAE Badge */}
          <span className="block mt-2 sm:mt-3 md:mt-4">
            <span
              className="inline-block not-italic bg-[#147A5F] text-white text-[26px] sm:text-5xl md:text-6xl lg:text-[80px] xl:text-[84px] px-2.5 sm:px-8 md:px-10 py-1 sm:py-3 md:py-3.5 lg:py-4 rounded-full shadow-sm whitespace-nowrap transform -rotate-[0.7deg] origin-center tracking-[-0.035em] max-w-full"
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
        <p className="text-[13.5px] sm:text-base md:text-[17px] text-gray-600 leading-relaxed font-jakarta font-normal mt-3.5 sm:mt-7 mb-5 sm:mb-9 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto px-2 sm:px-0">
          Crown Excel is a trusted wholesale supplier of commercial, gaming, and business laptops in Dubai and across the UAE. We deliver authentic factory-sealed inventory, competitive bulk rates, and fast local fulfillment to IT resellers and corporate clients.
        </p>

        {/* Centered Action Buttons (Responsive: clean stacked/grid on mobile, flex row on desktop) */}
        <div className="w-full max-w-md sm:max-w-none mx-auto flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 font-jakarta">
          {/* Primary CTA */}
          <button
            type="button"
            onClick={openGeneralInquiryModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-[#147A5F] hover:bg-[#0f604b] text-white font-semibold text-sm sm:text-[15px] shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <Send className="w-4 h-4 flex-shrink-0" />
            <span>Request Wholesale Quote</span>
          </button>

          {/* Quick Contact: 2-column grid on mobile, flex row on sm+ */}
          <div className="grid grid-cols-2 gap-2.5 w-full sm:w-auto sm:flex sm:items-center sm:gap-4">
            <a
              href={typeof getWhatsAppUrl === 'function' ? getWhatsAppUrl('Hello Crown Excel, I am inquiring about wholesale laptops.') : '#'}
              onClick={(e) => {
                if (typeof handleWhatsAppRedirect === 'function') {
                  handleWhatsAppRedirect(e, 'Hello Crown Excel, I am inquiring about wholesale laptops.');
                }
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-3 sm:px-7 py-2.5 sm:py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs sm:text-[15px] shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <FaWhatsapp className="w-4 h-4 flex-shrink-0" />
              <span>WhatsApp</span>
            </a>

            <a
              href="tel:+97143540566"
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-7 py-2.5 sm:py-3.5 rounded-xl bg-white hover:bg-gray-50 text-gray-800 font-semibold text-xs sm:text-[15px] border border-gray-200/90 shadow-2xs hover:shadow-xs transition-all duration-200 transform hover:-translate-y-0.5 active:scale-[0.98] whitespace-nowrap"
            >
              <PhoneCall className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#147A5F] flex-shrink-0" />
              <span>+971 4-354 0566</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
