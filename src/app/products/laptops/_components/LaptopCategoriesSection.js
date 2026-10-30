import React from 'react';
import { Gamepad2, Laptop, Briefcase, Cpu, ArrowRight } from 'lucide-react';
import { safeRender } from '@/lib/safe-html';

export default function LaptopCategoriesSection({ cmsData, onSelectCategory }) {
  const fields = cmsData?.fields || cmsData || {};
  const headingVal = fields.heading;
  const paragraphVal = fields.paragraph;

  const defaultHeading = (
    <>
      <span className="block not-italic">Explore Main Laptop</span>
      <span className="block text-[#ffd900] italic mt-1">
        Categories &amp; Configurations
      </span>
    </>
  );

  let renderedHeading = headingVal;
  if (typeof renderedHeading === 'object' && renderedHeading?.value !== undefined) {
    renderedHeading = renderedHeading.value;
  }
  if (
    typeof renderedHeading === 'string' &&
    (renderedHeading.replace(/\s+/g, ' ').trim() === 'Explore Main Laptop Categories & Configurations' ||
      renderedHeading.replace(/\s+/g, ' ').trim() === 'Comprehensive Laptop Categories for Resellers & Enterprises')
  ) {
    renderedHeading = defaultHeading;
  }
  const categories = [
    {
      id: 'gaming',
      title: safeRender(fields.cat_1_title, 'Gaming Laptops'),
      icon: <Gamepad2 className="w-6 h-6 text-[#ffd900]" />,
      tagline: safeRender(fields.cat_1_tagline, 'High Performance & Graphics'),
      description: safeRender(
        fields.cat_1_desc,
        'Engineered for competitive gaming, 3D graphics rendering, and heavy multitasking with high-refresh displays and advanced cooling.'
      ),
      categoryKey: 'Gaming',
    },
    {
      id: 'personal',
      title: safeRender(fields.cat_2_title, 'Personal Laptops'),
      icon: <Laptop className="w-6 h-6 text-[#ffd900]" />,
      tagline: safeRender(fields.cat_2_tagline, 'Portability & Everyday Tasks'),
      description: safeRender(
        fields.cat_2_desc,
        'Sleek, lightweight notebooks crafted for everyday productivity, study, remote work, and all-day mobile battery endurance.'
      ),
      categoryKey: 'Personal',
    },
    {
      id: 'business',
      title: safeRender(fields.cat_3_title, 'Business Laptops'),
      icon: <Briefcase className="w-6 h-6 text-[#ffd900]" />,
      tagline: safeRender(fields.cat_3_tagline, 'Enterprise Security & Reliability'),
      description: safeRender(
        fields.cat_3_desc,
        'Commercial workhorses built with hardware-level security, durable mil-spec construction, and business-grade operating systems.'
      ),
      categoryKey: 'Business',
    },
    {
      id: 'workstations',
      title: safeRender(fields.cat_4_title, 'Workstations'),
      icon: <Cpu className="w-6 h-6 text-[#ffd900]" />,
      tagline: safeRender(fields.cat_4_tagline, 'Heavy Computing & ISV Power'),
      description: safeRender(
        fields.cat_4_desc,
        'Certified mobile workstations designed for architectural CAD, engineering simulations, data science, and demanding creative workflows.'
      ),
      categoryKey: 'Workstations',
    },
  ];

  return (
    <div className="relative w-full bg-[#FFFFFF] overflow-hidden">
      <section id="laptop-categories" className="relative w-full max-w-[1536px] mx-auto overflow-hidden bg-[#0a231b] text-white py-12 sm:py-16 lg:py-18 xl:py-20 px-5 sm:px-8 md:px-[53px] lg:px-[53px] xl:px-16">
        {/* Decorative Radial Lighting */}
        <div
          aria-hidden="true"
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#ffd900]/10 rounded-full blur-3xl pointer-events-none"
        />

        <div className="relative z-10 w-full">

          {/* Section Header */}
          <div className="text-center max-w-4xl xl:max-w-5xl mx-auto mb-10 sm:mb-12 xl:mb-14">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#ffd900] mb-2 sm:mb-2.5 block font-montserrat">
              {safeRender(fields.badge, "CORE COMPUTING CATEGORIES")}
            </span>

            <h2
              className="font-anton uppercase text-2xl sm:text-3xl lg:text-4xl xl:text-[44px] tracking-[-0.03em] leading-[1.08] text-white"
              style={{ fontFamily: "'Anton', Impact, sans-serif" }}
            >
              {safeRender(renderedHeading, defaultHeading) || 'Comprehensive Laptop Categories for Resellers & Enterprises'}
            </h2>

            <p className="font-jakarta text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed mt-3 max-w-2xl sm:max-w-3xl mx-auto font-light text-pretty">
              {safeRender(paragraphVal, "Discover our core laptop categories structured for wholesale and enterprise requirements, from high-performance gaming to mission-critical mobile workstations.")}
            </p>
          </div>

          {/* 4 Minimal Category Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 items-stretch">
            {categories.map((cat) => (
              <div
                key={cat.id}
                onClick={() => {
                  if (typeof onSelectCategory === 'function') {
                    onSelectCategory(cat.categoryKey);
                  }
                }}
                className="bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#ffd900]/50 rounded-2xl p-5 sm:p-6 backdrop-blur-sm transition-all duration-300 flex flex-col justify-between cursor-pointer group hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)]"
              >
                <div>
                  {/* Category Icon */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center mb-4 group-hover:scale-105 group-hover:border-[#ffd900]/50 transition-all duration-300 shadow-xs">
                    {cat.icon}
                  </div>

                  {/* Subtitle Tagline */}
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-emerald-300 font-montserrat block mb-1">
                    {cat.tagline}
                  </span>

                  {/* Category Title */}
                  <h3 className="font-montserrat font-bold text-lg sm:text-xl text-white group-hover:text-[#ffd900] transition-colors mb-2.5 leading-snug">
                    {cat.title}
                  </h3>

                  {/* Description */}
                  <p className="font-jakarta text-gray-300 text-xs sm:text-[13px] leading-relaxed mb-5 font-normal">
                    {cat.description}
                  </p>
                </div>

                {/* Minimal Action Footer */}
                <div className="pt-3.5 border-t border-white/10 flex items-center justify-between text-xs font-jakarta">
                  <span className="font-semibold text-emerald-300 group-hover:text-[#ffd900] transition-colors">
                    Browse {cat.title}
                  </span>
                  <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:text-[#ffd900] transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
