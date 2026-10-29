'use client';

import React from 'react';
import Image from 'next/image';
import { Award, Globe2, Cpu, ShieldCheck, CheckCircle2, TrendingUp, Users } from 'lucide-react';

// Brand Logos
import LenovoLogo from '@/Components/Images/Lenovo.png';
import HPLogo from '@/Components/Images/HP2.png';
import DellLogo from '@/Components/Images/Dell2.png';
import AsusLogo from '@/Components/Images/Asus2.png';
import AcerLogo from '@/Components/Images/Acer2.png';
import AppleLogo from '@/Components/Images/Apple.png';
import MsiLogo from '@/Components/Images/Msi.png';
import IntelLogo from '@/Components/Images/Intel2.png';
import AmdLogo from '@/Components/Images/Amd2.png';

export default function LaptopExperienceSection() {
  const brandLogos = [
    { name: 'Lenovo', image: LenovoLogo },
    { name: 'HP', image: HPLogo },
    { name: 'Dell', image: DellLogo },
    { name: 'ASUS', image: AsusLogo },
    { name: 'Acer', image: AcerLogo },
    { name: 'Apple', image: AppleLogo },
    { name: 'MSI', image: MsiLogo },
    { name: 'Intel', image: IntelLogo },
    { name: 'AMD', image: AmdLogo },
  ];

  const experienceMetrics = [
    {
      value: '15+',
      label: 'Years of Laptop Expertise',
      description: 'Pioneering IT hardware distribution across UAE & GCC since 2010.',
    },
    {
      value: '50,000+',
      label: 'Laptops Delivered',
      description: 'Trusted by corporations, government entities, and retail chains.',
    },
    {
      value: '1,200+',
      label: 'Active B2B & Reseller Clients',
      description: 'Consistent recurring partnerships backed by wholesale pricing.',
    },
    {
      value: '100%',
      label: 'Genuine Factory Stock',
      description: 'Authentic manufacturer warranties with verified serial tracking.',
    },
  ];

  const businessCapabilities = [
    {
      icon: <Globe2 className="w-6 h-6 text-[#147A5F]" />,
      title: 'Global Sourcing & Priority Stock Allocations',
      description:
        'Direct procurement lines with authorized international tier-1 distributors guarantee uninterrupted supply of high-demand gaming rigs, commercial notebooks, and mobile workstations.',
    },
    {
      icon: <Cpu className="w-6 h-6 text-[#147A5F]" />,
      title: 'Technical Consultation & Fleet Sizing',
      description:
        'Our certified B2B laptop specialists guide enterprise procurement teams, ensuring optimal CPU, GPU, RAM, and thermal configurations tailored to corporate workloads and budget parameters.',
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#147A5F]" />,
      title: 'Reseller Profitability & Protected Margins',
      description:
        'We empower regional computer shops and e-commerce merchants with flexible MOQs, competitive tier discounts, and price drop buffers to sustain healthy retail margins.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#147A5F]" />,
      title: 'Enterprise Security & Custom Deployment',
      description:
        'From TPM 2.0 provisioning and Windows 11 Pro staging to BIOS lockups and bulk asset barcode labeling, we streamline seamless turnkey rollout for corporate IT teams.',
    },
  ];

  return (
    <div className="relative w-full bg-[#FFFFFF] overflow-hidden">
      <section className="relative w-full max-w-[1536px] mx-auto overflow-hidden bg-white py-16 sm:py-20 lg:py-24 xl:py-28 2xl:py-32 px-5 sm:px-8 md:px-[53px] lg:px-[53px] xl:px-16">
        <div className="relative z-10 w-full">
          
          {/* Section Header */}
          <div className="text-center max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto mb-14 sm:mb-16 xl:mb-20">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#147A5F] mb-2 sm:mb-3 block font-montserrat">
              PROVEN TRACK RECORD IN WHOLESALE &amp; ENTERPRISE COMPUTING
            </span>

            <h2
              className="font-anton uppercase text-3xl sm:text-4xl lg:text-[46px] xl:text-[54px] 2xl:text-[60px] tracking-[-0.035em] leading-[1.08] xl:leading-[1.05] text-[#171717]"
              style={{ fontFamily: "'Anton', Impact, sans-serif" }}
            >
              <span className="block not-italic">Crown Excel’s Experience &amp;</span>
              <span className="block text-[#147A5F] italic mt-1">
                Market Expertise in Laptops
              </span>
            </h2>

            <p className="font-jakarta text-gray-600 text-sm sm:text-base md:text-lg xl:text-xl leading-relaxed mt-4 max-w-3xl xl:max-w-4xl mx-auto font-normal text-pretty">
              Over the past decade and a half, Crown Excel has solidified its reputation as Dubai’s premier laptop wholesale distributor. 
              We bridge global PC manufacturers with regional resellers, corporations, educational institutions, and international export channels.
            </p>
          </div>

          {/* 4 Experience Metric Counters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 mb-16 sm:mb-20 xl:mb-24">
            {experienceMetrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-b from-[#F8FAF9] to-white p-6 sm:p-7 xl:p-8 rounded-2xl border border-emerald-100 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all duration-300 flex flex-col text-center"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#147A5F] font-montserrat tracking-tight mb-2">
                  {metric.value}
                </div>
                <h3 className="font-bold font-jakarta text-[#171717] text-base sm:text-lg xl:text-xl mb-2">
                  {metric.label}
                </h3>
                <p className="font-jakarta text-gray-500 text-xs sm:text-sm xl:text-base leading-relaxed">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>

          {/* Deep Business Expertise 4-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 xl:gap-10 mb-16 sm:mb-20 xl:mb-24">
            {businessCapabilities.map((item, idx) => (
              <div
                key={idx}
                className="p-7 sm:p-8 xl:p-9 rounded-2xl bg-[#FDFDFE] border border-gray-200/80 hover:border-[#147A5F]/40 shadow-xs hover:shadow-lg transition-all duration-300 flex items-start gap-4 sm:gap-5 group"
              >
                <div className="w-12 h-12 xl:w-14 xl:h-14 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-[#147A5F] transition-all duration-300 [&>svg]:group-hover:text-white">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold font-montserrat text-lg sm:text-xl xl:text-2xl text-[#171717] mb-2 leading-snug group-hover:text-[#147A5F] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-jakarta text-gray-600 text-xs sm:text-sm xl:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Authorized Brands We Deal In Ribbon */}
          <div className="bg-[#101b17] rounded-3xl p-6 sm:p-10 lg:p-12 xl:p-14 relative overflow-hidden shadow-xl">
            {/* Subtle gold/emerald background ambient glow */}
            <div
              aria-hidden="true"
              className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"
            />

            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 relative z-10">
              <span className="text-[#ffd900] text-xs font-bold uppercase tracking-wider font-montserrat block mb-1">
                AUTHORIZED HARDWARE SUPPLY
              </span>
              <h3 className="font-anton uppercase text-2xl sm:text-3xl xl:text-4xl text-white tracking-tight">
                Leading Laptop Brands Available in Volume
              </h3>
              <p className="font-jakarta text-gray-300 text-xs sm:text-sm xl:text-base mt-2">
                Authentic original stock with manufacturer global warranties and full compliance certificates.
              </p>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-4 sm:gap-6 xl:gap-8 items-center justify-center relative z-10">
              {brandLogos.map((brand, idx) => (
                <div
                  key={idx}
                  className="h-14 sm:h-16 xl:h-20 rounded-xl bg-white/5 border border-white/10 hover:border-[#ffd900]/50 hover:bg-white/10 flex items-center justify-center p-2.5 transition-all duration-300 group"
                >
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    width={80}
                    height={45}
                    className="max-h-8 xl:max-h-10 w-auto object-contain brightness-0 invert opacity-75 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
