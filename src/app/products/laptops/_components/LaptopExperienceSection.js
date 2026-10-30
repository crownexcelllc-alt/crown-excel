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
import { safeRender, safeImage } from '@/lib/safe-html';

export default function LaptopExperienceSection({ cmsData }) {
  const fields = cmsData?.fields || cmsData || {};
  const headingVal = fields.heading;
  const paragraphVal = fields.paragraph;
  const heading2Val = fields.heading_2;
  const paragraph2Val = fields.paragraph_2;

  const defaultHeading = (
    <>
      <span className="block not-italic">Crown Excel’s Experience &amp;</span>
      <span className="block text-[#147A5F] italic mt-1">
        Market Expertise in Laptops
      </span>
    </>
  );

  let renderedHeading = headingVal;
  if (typeof renderedHeading === 'object' && renderedHeading?.value !== undefined) {
    renderedHeading = renderedHeading.value;
  }
  if (typeof renderedHeading === 'string' && renderedHeading.replace(/\s+/g, ' ').trim() === 'Crown Excel’s Experience & Market Expertise in Laptops') {
    renderedHeading = defaultHeading;
  }

  const brandLogos = [
    { name: 'Lenovo', image: safeImage(fields.image_lenovologo, LenovoLogo) },
    { name: 'HP', image: safeImage(fields.image_hplogo, HPLogo) },
    { name: 'Dell', image: safeImage(fields.image_delllogo, DellLogo) },
    { name: 'ASUS', image: safeImage(fields.image_asuslogo, AsusLogo) },
    { name: 'Acer', image: safeImage(fields.image_acerlogo, AcerLogo) },
    { name: 'Apple', image: safeImage(fields.image_applelogo, AppleLogo) },
    { name: 'MSI', image: safeImage(fields.image_msilogo, MsiLogo) },
    { name: 'Intel', image: safeImage(fields.image_intellogo, IntelLogo) },
    { name: 'AMD', image: safeImage(fields.image_amdlogo, AmdLogo) },
  ];

  const experienceMetrics = [
    {
      value: safeRender(fields.metric_1_val, '15+'),
      label: safeRender(fields.metric_1_label, 'Years of Laptop Expertise'),
      description: safeRender(fields.metric_1_desc, 'Pioneering IT hardware distribution across UAE & GCC since 2010.'),
    },
    {
      value: safeRender(fields.metric_2_val, '200M+'),
      label: safeRender(fields.metric_2_label, 'Orders Delivered'),
      description: safeRender(fields.metric_2_desc, 'Trusted by corporations, government entities, and retail chains.'),
    },
    {
      value: safeRender(fields.metric_3_val, '1,200+'),
      label: safeRender(fields.metric_3_label, 'Active B2B & Reseller Clients'),
      description: safeRender(fields.metric_3_desc, 'Consistent recurring partnerships backed by wholesale pricing.'),
    },
    {
      value: safeRender(fields.metric_4_val, '100%'),
      label: safeRender(fields.metric_4_label, 'Genuine Factory Stock'),
      description: safeRender(fields.metric_4_desc, 'Authentic manufacturer warranties with verified serial tracking.'),
    },
  ];

  const businessCapabilities = [
    {
      icon: <Globe2 className="w-6 h-6 text-[#147A5F]" />,
      title: safeRender(fields.capability_1_title, 'Global Sourcing & Priority Stock Allocations'),
      description: safeRender(
        fields.capability_1_desc,
        'Direct procurement lines with authorized international tier-1 distributors guarantee uninterrupted supply of high-demand gaming rigs, commercial notebooks, and mobile workstations.'
      ),
    },
    {
      icon: <Cpu className="w-6 h-6 text-[#147A5F]" />,
      title: safeRender(fields.capability_2_title, 'Technical Consultation & Fleet Sizing'),
      description: safeRender(
        fields.capability_2_desc,
        'Our certified B2B laptop specialists guide enterprise procurement teams, ensuring optimal CPU, GPU, RAM, and thermal configurations tailored to corporate workloads and budget parameters.'
      ),
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#147A5F]" />,
      title: safeRender(fields.capability_3_title, 'Reseller Profitability & Protected Margins'),
      description: safeRender(
        fields.capability_3_desc,
        'We empower regional computer shops and e-commerce merchants with flexible MOQs, competitive tier discounts, and price drop buffers to sustain healthy retail margins.'
      ),
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#147A5F]" />,
      title: safeRender(fields.capability_4_title, 'Enterprise Security & Custom Deployment'),
      description: safeRender(
        fields.capability_4_desc,
        'From TPM 2.0 provisioning and Windows 11 Pro staging to BIOS lockups and bulk asset barcode labeling, we streamline seamless turnkey rollout for corporate IT teams.'
      ),
    },
  ];

  return (
    <div className="relative w-full bg-[#FFFFFF] overflow-hidden">
      <section className="relative w-full max-w-[1536px] mx-auto overflow-hidden bg-white py-12 sm:py-16 lg:py-18 xl:py-20 px-5 sm:px-8 md:px-[53px] lg:px-[53px] xl:px-16">
        <div className="relative z-10 w-full">

          {/* Section Header */}
          <div className="text-center max-w-4xl xl:max-w-5xl mx-auto mb-10 sm:mb-12 xl:mb-14">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#147A5F] mb-2 sm:mb-2.5 block font-montserrat">
              {safeRender(fields.badge, "PROVEN TRACK RECORD IN WHOLESALE & ENTERPRISE COMPUTING")}
            </span>

            <h2
              className="font-anton uppercase text-2xl sm:text-3xl lg:text-4xl xl:text-[44px] tracking-[-0.03em] leading-[1.08] text-[#171717]"
              style={{ fontFamily: "'Anton', Impact, sans-serif" }}
            >
              {safeRender(renderedHeading, defaultHeading) || 'Crown Excel’s Experience & Market Expertise in Laptops'}
            </h2>

            <p className="font-jakarta text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed mt-3 max-w-2xl sm:max-w-3xl mx-auto font-normal text-pretty">
              {safeRender(paragraphVal, "Over the past decade and a half, Crown Excel has solidified its reputation as Dubai’s premier laptop wholesale distributor. We bridge global PC manufacturers with regional resellers, corporations, educational institutions, and international export channels.")}
            </p>
          </div>

          {/* 4 Experience Metric Counters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 xl:gap-6 mb-12 sm:mb-14 xl:mb-16">
            {experienceMetrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-b from-[#F8FAF9] to-white p-5 sm:p-6 rounded-2xl border border-emerald-100 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all duration-300 flex flex-col text-center"
              >
                <div className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-extrabold text-[#147A5F] font-montserrat tracking-tight mb-1.5">
                  {metric.value}
                </div>
                <h3 className="font-bold font-jakarta text-[#171717] text-sm sm:text-base mb-1.5">
                  {metric.label}
                </h3>
                <p className="font-jakarta text-gray-500 text-xs sm:text-[13px] leading-relaxed">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>

          {/* Deep Business Expertise 4-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 mb-12 sm:mb-14 xl:mb-16">
            {businessCapabilities.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-[#FDFDFE] border border-gray-200/80 hover:border-[#147A5F]/40 shadow-xs hover:shadow-lg transition-all duration-300 flex items-start gap-4 sm:gap-5 group"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-[#147A5F] transition-all duration-300 [&>svg]:group-hover:text-white">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold font-montserrat text-base sm:text-lg xl:text-xl text-[#171717] mb-1.5 leading-snug group-hover:text-[#147A5F] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-jakarta text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Authorized Brands We Deal In Ribbon */}
          <div className="bg-[#101b17] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 relative overflow-hidden shadow-xl">
            {/* Subtle gold/emerald background ambient glow */}
            <div
              aria-hidden="true"
              className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"
            />

            <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 relative z-10">
              <span className="text-[#ffd900] text-xs font-bold uppercase tracking-wider font-montserrat block mb-1">
                {safeRender(fields.brands_badge, "AUTHORIZED HARDWARE SUPPLY")}
              </span>
              <h3 className="font-anton uppercase text-xl sm:text-2xl xl:text-3xl text-white tracking-tight">
                {safeRender(heading2Val, "Leading Laptop Brands Available in Volume")}
              </h3>
              <p className="font-jakarta text-gray-300 text-xs sm:text-sm mt-1.5">
                {safeRender(paragraph2Val, "Authentic original stock with manufacturer global warranties and full compliance certificates.")}
              </p>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-3 sm:gap-4 xl:gap-5 items-center justify-center relative z-10">
              {brandLogos.map((brand, idx) => (
                <div
                  key={idx}
                  className="h-12 sm:h-14 xl:h-16 rounded-xl bg-white/5 border border-white/10 hover:border-[#ffd900]/50 hover:bg-white/10 flex items-center justify-center p-2 transition-all duration-300 group"
                >
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    width={80}
                    height={45}
                    className="max-h-7 sm:max-h-8 xl:max-h-9 w-auto object-contain brightness-0 invert opacity-75 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
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
