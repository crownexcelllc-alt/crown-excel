import React from 'react';
import { FaHandshake, FaCreditCard, FaCog } from 'react-icons/fa';

export default function WholesaleWhyCrownExcelSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Centered Heading and Subparagraph matching Reference Screenshot */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2
            className="font-anton font-normal uppercase text-center text-3xl sm:text-4xl lg:text-[46px] tracking-[-0.035em] leading-[1.05]"
            style={{
              fontFamily: "'Anton', Impact, sans-serif",
              fontWeight: 400,
              letterSpacing: '-0.035em',
              lineHeight: 1.05,
              textTransform: 'uppercase',
            }}
          >
            <span className="block not-italic text-[#171717]">
              Why Crown Excel Leads In Laptop
            </span>
            <span
              className="block italic text-[#147A5F] mt-1 sm:mt-1.5"
              style={{ fontStyle: 'italic' }}
            >
              Wholesale &amp; IT Distribution
            </span>
          </h2>
          <p className="text-sm sm:text-[15px] text-[#4b5563] font-inter leading-relaxed max-w-3xl mx-auto text-center mt-5 mb-16">
            Businesses rely on Crown Excel as a trusted IT hardware distributor delivering scalable, secure, and high-performance solutions across the Middle East. Our future-ready distribution model ensures seamless access, operational efficiency, and reliability, empowering businesses to stay competitive in today&apos;s tech-driven landscape.
          </p>
        </div>

        {/* 4 Connected Features with Alternating Curved Dashed Wave Line */}
        <div className="relative max-w-6xl mx-auto">
          {/* Desktop SVG Sinusoidal Dashed Wave Line */}
          <div className="hidden lg:block absolute inset-x-0 top-0 h-[280px] pointer-events-none z-0">
            <svg
              viewBox="0 0 1120 280"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              <path
                d="M 10 165 C 25 45, 85 10, 140 10 C 195 10, 255 120, 280 165 C 305 210, 365 270, 420 270 C 475 270, 535 210, 560 165 C 585 120, 645 10, 700 10 C 755 10, 815 120, 840 165 C 865 210, 925 270, 980 270 C 1035 270, 1095 210, 1110 165"
                stroke="#147A5F"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* 4 Feature Items */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-3 sm:gap-x-4 gap-y-8 sm:gap-10 lg:gap-0 relative z-10 text-center h-auto lg:h-[280px]">
            {/* Item 1 - Arch over top */}
            <div className="flex flex-col items-center justify-center px-1 sm:px-4">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-10 sm:w-12 sm:h-12 text-[#147A5F] mb-3 sm:mb-4 transition-transform duration-300 hover:scale-110"
              >
                <path d="M12 2C8.69 2 6 4.69 6 8c0 2.21 1.2 4.15 2.97 5.19L6.5 21.5l5.5-2.5 5.5 2.5-2.47-8.31C16.8 12.15 18 10.21 18 8c0-3.31-2.69-6-6-6zm0 9c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
              </svg>
              <h3 className="text-[15px] sm:text-[19px] font-bold font-montserrat text-[#2D2D2D] leading-snug mb-1.5 sm:mb-2">
                15+ Years of<br />Expertise
              </h3>
              <p className="text-[11.5px] sm:text-[13px] text-[#6b7280] font-inter leading-relaxed max-w-[170px] sm:max-w-[200px] mx-auto">
                Providing trusted IT support and tailored business solutions.
              </p>
            </div>

            {/* Item 2 - Bowl under bottom */}
            <div className="flex flex-col items-center justify-center px-1 sm:px-4">
              <FaHandshake className="w-10 h-10 sm:w-12 sm:h-12 text-[#147A5F] mb-3 sm:mb-4 transition-transform duration-300 hover:scale-110" />
              <h3 className="text-[15px] sm:text-[19px] font-bold font-montserrat text-[#2D2D2D] leading-snug mb-1.5 sm:mb-2">
                Fast &amp; Reliable IT<br />Supply
              </h3>
              <p className="text-[11.5px] sm:text-[13px] text-[#6b7280] font-inter leading-relaxed max-w-[170px] sm:max-w-[200px] mx-auto">
                Ensuring large stock availability and immediate product delivery.
              </p>
            </div>

            {/* Item 3 - Arch over top */}
            <div className="flex flex-col items-center justify-center px-1 sm:px-4">
              <FaCreditCard className="w-10 h-10 sm:w-12 sm:h-12 text-[#147A5F] mb-3 sm:mb-4 transition-transform duration-300 hover:scale-110" />
              <h3 className="text-[15px] sm:text-[19px] font-bold font-montserrat text-[#2D2D2D] leading-snug mb-1.5 sm:mb-2">
                Flexible Payment<br />Options
              </h3>
              <p className="text-[11.5px] sm:text-[13px] text-[#6b7280] font-inter leading-relaxed max-w-[170px] sm:max-w-[200px] mx-auto">
                Offering custom payment plans to fit your budget.
              </p>
            </div>

            {/* Item 4 - Bowl under bottom */}
            <div className="flex flex-col items-center justify-center px-1 sm:px-4">
              <FaCog className="w-10 h-10 sm:w-12 sm:h-12 text-[#147A5F] mb-3 sm:mb-4 transition-transform duration-300 hover:scale-110" />
              <h3 className="text-[15px] sm:text-[19px] font-bold font-montserrat text-[#2D2D2D] leading-snug mb-1.5 sm:mb-2">
                Tailored IT<br className="hidden sm:inline" /> Hardware
              </h3>
              <p className="text-[11.5px] sm:text-[13px] text-[#6b7280] font-inter leading-relaxed max-w-[170px] sm:max-w-[200px] mx-auto">
                Delivering customized hardware solutions for business needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
