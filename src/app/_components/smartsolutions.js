import Image from 'next/image'
import React from 'react'
import smartSolutionsBanner from '@/Components/Images/smartsolutionsbanner.png'
import { safeRender, safeImage } from '@/lib/safe-html'

function SmartSolutions({ cmsHero, cmsData }) {
  const hero = cmsHero || cmsData;
  const bannerField =
    hero?.fields?.image_banner ||
    hero?.fields?.image_smartsolutionsbanner ||
    hero?.fields?.image ||
    hero?.image_banner ||
    hero?.image;

  const bannerSrc = safeImage(bannerField, smartSolutionsBanner);

  const rawHeadingVal = hero?.fields?.heading || hero?.heading;
  let headingVal = rawHeadingVal;
  if (typeof headingVal === 'object' && headingVal?.value !== undefined) {
    headingVal = headingVal.value;
  }
  if (typeof headingVal === 'string' && headingVal.replace(/\s+/g, ' ').trim() === 'Smart Solutions For Your Business') {
    headingVal = 'Smart Solutions <br /> For Your Business';
  }
  const p1Val = hero?.fields?.paragraph || hero?.paragraph;
  const p2Val = hero?.fields?.paragraph_2 || hero?.paragraph_2;

  const defaultHeading = (
    <>
      Smart Solutions <br />
      For Your Business
    </>
  );

  const defaultP1 = (
    <>
      <strong className="text-white font-semibold">Crown Excel</strong> is a Dubai-based provider of IT hardware procurement, enterprise IT hardware reselling, hardware supply and distribution, IT infrastructure maintenance and management, IT consultancy, and technical support services.
    </>
  );

  const defaultP2 = (
    <>
      We specialize in delivering reliable IT hardware solutions and comprehensive infrastructure support to meet the evolving technology needs of businesses across Dubai and the UAE.
    </>
  );

  return (
    <div className="relative w-full bg-[#FFFFFF] overflow-hidden">
      {/* Centered responsive container that matches standard desktop/laptop layouts and prevents ultrawide distortion */}
      <div className="relative w-full max-w-[1536px] mx-auto min-h-[480px] sm:min-h-[500px] md:min-h-[520px] lg:min-h-[560px] xl:min-h-[600px] 2xl:min-h-[660px] flex items-start overflow-hidden">
        {/* Background Banner Image */}
        <Image
          src={bannerSrc}
          alt="Crown Excel technology solutions banner"
          fill
          className="object-cover w-full h-full object-right md:object-center lg:object-right"
          priority
          sizes="(max-width: 1536px) 100vw, 1536px"
        />

        {/* Readability gradient for mobile viewports */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20 md:hidden pointer-events-none" />

        {/* Hero content positioned to match original placement */}
        <div className="relative z-10 w-full px-5 sm:px-8 md:px-[53px] lg:px-[53px] xl:px-16 pt-24 sm:pt-28 md:pt-[136px] lg:pt-[144px] pb-12 sm:pb-16">
          <div className="max-w-[340px] sm:max-w-[440px] md:max-w-[540px] lg:max-w-[620px] xl:max-w-[660px] text-left">
            <h1 className="text-white font-montserrat font-bold text-[28px] sm:text-[34px] md:text-[46px] lg:text-[50px] xl:text-[54px] leading-[1.14] tracking-normal">
              {safeRender(headingVal, defaultHeading)}
            </h1>

            <div className="mt-4 sm:mt-5 text-gray-200 font-montserrat text-xs sm:text-sm md:text-[14px] lg:text-[15px] leading-relaxed md:leading-[25px] space-y-3 max-w-[460px] sm:max-w-[500px] md:max-w-[520px] lg:max-w-[540px]">
              <p>
                {safeRender(p1Val, defaultP1)}
              </p>
              <p>
                {safeRender(p2Val, defaultP2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SmartSolutions
