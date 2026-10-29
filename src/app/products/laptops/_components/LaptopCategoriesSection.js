'use client';

import React from 'react';
import { Gamepad2, Laptop, Briefcase, Cpu, ArrowRight } from 'lucide-react';

export default function LaptopCategoriesSection({ onSelectCategory }) {
  const categories = [
    {
      id: 'gaming',
      title: 'Gaming Laptops',
      icon: <Gamepad2 className="w-6 h-6 text-[#ffd900]" />,
      tagline: 'High Performance & Graphics',
      description:
        'Engineered for competitive gaming, 3D graphics rendering, and heavy multitasking with high-refresh displays and advanced cooling.',
      categoryKey: 'Gaming',
    },
    {
      id: 'personal',
      title: 'Personal Laptops',
      icon: <Laptop className="w-6 h-6 text-[#ffd900]" />,
      tagline: 'Portability & Everyday Tasks',
      description:
        'Sleek, lightweight notebooks crafted for everyday productivity, study, remote work, and all-day mobile battery endurance.',
      categoryKey: 'Personal',
    },
    {
      id: 'business',
      title: 'Business Laptops',
      icon: <Briefcase className="w-6 h-6 text-[#ffd900]" />,
      tagline: 'Enterprise Security & Reliability',
      description:
        'Commercial workhorses built with hardware-level security, durable mil-spec construction, and business-grade operating systems.',
      categoryKey: 'Business',
    },
    {
      id: 'workstations',
      title: 'Workstations',
      icon: <Cpu className="w-6 h-6 text-[#ffd900]" />,
      tagline: 'Heavy Computing & ISV Power',
      description:
        'Certified mobile workstations designed for architectural CAD, engineering simulations, data science, and demanding creative workflows.',
      categoryKey: 'Workstations',
    },
  ];

  return (
    <div className="relative w-full bg-[#FFFFFF] overflow-hidden">
      <section id="laptop-categories" className="relative w-full max-w-[1536px] mx-auto overflow-hidden bg-[#0a231b] text-white py-16 sm:py-20 lg:py-24 xl:py-28 2xl:py-32 px-5 sm:px-8 md:px-[53px] lg:px-[53px] xl:px-16">
        {/* Decorative Radial Lighting */}
        <div
          aria-hidden="true"
          className="absolute top-1/4 left-1/4 w-96 xl:w-[500px] h-96 xl:h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 right-1/4 w-96 xl:w-[500px] h-96 xl:h-[500px] bg-[#ffd900]/10 rounded-full blur-3xl pointer-events-none"
        />

        <div className="relative z-10 w-full">
          
          {/* Section Header */}
          <div className="text-center max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto mb-12 sm:mb-16 xl:mb-20">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#ffd900] mb-2 sm:mb-3 block font-montserrat">
              CORE COMPUTING CATEGORIES
            </span>

            <h2
              className="font-anton uppercase text-3xl sm:text-4xl lg:text-[46px] xl:text-[54px] 2xl:text-[60px] tracking-[-0.035em] leading-[1.08] xl:leading-[1.05] text-white"
              style={{ fontFamily: "'Anton', Impact, sans-serif" }}
            >
              <span className="block not-italic">Explore Main Laptop</span>
              <span className="block text-[#ffd900] italic mt-1">
                Categories &amp; Configurations
              </span>
            </h2>

            <p className="font-jakarta text-gray-300 text-sm sm:text-base md:text-lg xl:text-xl leading-relaxed mt-4 max-w-2xl sm:max-w-3xl xl:max-w-4xl mx-auto font-light text-pretty">
              Discover our core laptop categories structured for wholesale and enterprise requirements, from high-performance gaming to mission-critical mobile workstations.
            </p>
          </div>

          {/* 4 Minimal Category Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 xl:gap-8 items-stretch">
            {categories.map((cat) => (
              <div
                key={cat.id}
                onClick={() => {
                  if (typeof onSelectCategory === 'function') {
                    onSelectCategory(cat.categoryKey);
                  }
                }}
                className="bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#ffd900]/50 rounded-2xl p-6 sm:p-7 xl:p-8 backdrop-blur-sm transition-all duration-300 flex flex-col justify-between cursor-pointer group hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)]"
              >
                <div>
                  {/* Category Icon */}
                  <div className="w-12 h-12 xl:w-14 xl:h-14 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:border-[#ffd900]/50 transition-all duration-300 shadow-xs">
                    {cat.icon}
                  </div>

                  {/* Subtitle Tagline */}
                  <span className="text-[11px] xl:text-xs font-bold uppercase tracking-wider text-emerald-300 font-montserrat block mb-1.5">
                    {cat.tagline}
                  </span>

                  {/* Category Title */}
                  <h3 className="font-montserrat font-bold text-xl xl:text-2xl text-white group-hover:text-[#ffd900] transition-colors mb-3 leading-snug">
                    {cat.title}
                  </h3>

                  {/* Description */}
                  <p className="font-jakarta text-gray-300 text-xs sm:text-sm xl:text-base leading-relaxed mb-6 font-normal">
                    {cat.description}
                  </p>
                </div>

                {/* Minimal Action Footer */}
                <div className="pt-4 xl:pt-5 border-t border-white/10 flex items-center justify-between text-xs xl:text-sm font-jakarta">
                  <span className="font-semibold text-emerald-300 group-hover:text-[#ffd900] transition-colors">
                    Browse {cat.title}
                  </span>
                  <ArrowRight className="w-4 h-4 xl:w-5 xl:h-5 text-emerald-400 group-hover:text-[#ffd900] transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
