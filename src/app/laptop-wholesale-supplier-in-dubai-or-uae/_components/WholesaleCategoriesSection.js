import React from 'react';
import Image from 'next/image';
import BannerLaptop1 from '@/Components/Images/BannerLaptop1.png';
import BestLaptop1 from '@/Components/Images/BestLaptop1.png';
import BestLaptop2 from '@/Components/Images/BestLaptop2.png';

export default function WholesaleCategoriesSection() {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-[#147A5F] relative overflow-hidden">
      {/* Subtle Ambient Decorative Glow */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -right-24 w-96 h-96 bg-black/15 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Three Simplified Category Cards Arranged Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8 items-stretch">

          {/* 1. Gaming Laptops Card */}
          <div className="bg-white text-[#171717] rounded-none p-6 sm:p-7 lg:p-8 shadow-xl border border-emerald-100/60 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <div className="relative w-full h-44 sm:h-48 lg:h-52 mb-5 flex items-center justify-center overflow-hidden">
              <Image
                src={BannerLaptop1}
                alt="Gaming Laptops"
                className="max-h-full w-auto object-contain transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
            <h2 className="font-montserrat font-bold text-xl sm:text-2xl lg:text-[24px] text-[#171717] leading-tight mb-2.5 tracking-tight text-center md:text-left">
              Gaming Laptops
            </h2>
            <p className="font-inter text-[#4B5563] text-xs sm:text-sm lg:text-[14px] leading-relaxed text-center md:text-left">
              High-performance wholesale gaming laptops equipped with dedicated NVIDIA RTX graphics, multi-core processors, and high-refresh displays.
            </p>
          </div>

          {/* 2. Business Laptops Card */}
          <div className="bg-white text-[#171717] rounded-none p-6 sm:p-7 lg:p-8 shadow-xl border border-emerald-100/60 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <div className="relative w-full h-44 sm:h-48 lg:h-52 mb-5 flex items-center justify-center overflow-hidden">
              <Image
                src={BestLaptop1}
                alt="Business Laptops"
                className="max-h-full w-auto object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>
            <h2 className="font-montserrat font-bold text-xl sm:text-2xl lg:text-[24px] text-[#171717] leading-tight mb-2.5 tracking-tight text-center md:text-left">
              Business Laptops
            </h2>
            <p className="font-inter text-[#4B5563] text-xs sm:text-sm lg:text-[14px] leading-relaxed text-center md:text-left">
              Reliable commercial and enterprise laptops engineered for productivity, all-day battery endurance, and business-grade security.
            </p>
          </div>

          {/* 3. Personal Laptops Card */}
          <div className="bg-white text-[#171717] rounded-none p-6 sm:p-7 lg:p-8 shadow-xl border border-emerald-100/60 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <div className="relative w-full h-44 sm:h-48 lg:h-52 mb-5 flex items-center justify-center overflow-hidden">
              <Image
                src={BestLaptop2}
                alt="Personal Laptops"
                className="max-h-full w-auto object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>
            <h2 className="font-montserrat font-bold text-xl sm:text-2xl lg:text-[24px] text-[#171717] leading-tight mb-2.5 tracking-tight text-center md:text-left">
              Personal Laptops
            </h2>
            <p className="font-inter text-[#4B5563] text-xs sm:text-sm lg:text-[14px] leading-relaxed text-center md:text-left">
              Everyday consumer laptops offering responsive performance, crisp displays, and portable designs for home, study, and travel.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
