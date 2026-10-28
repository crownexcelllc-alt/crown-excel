import Image from 'next/image'
import React from 'react'
import smartSolutionsBanner from '@/Components/Images/smartsolutionsbanner.png'

function SmartSolutions({ cmsHero }) {
  // Only make the hero section banner image dynamic from the admin panel
  const bannerField =
    cmsHero?.fields?.image_banner ||
    cmsHero?.fields?.image_smartsolutionsbanner ||
    cmsHero?.fields?.image;

  const customBannerUrl =
    typeof bannerField === 'object' && bannerField?.value
      ? bannerField.value
      : typeof bannerField === 'string'
      ? bannerField
      : null;

  const bannerSrc =
    customBannerUrl &&
    typeof customBannerUrl === 'string' &&
    (customBannerUrl.startsWith('http://') ||
      customBannerUrl.startsWith('https://') ||
      customBannerUrl.startsWith('/'))
      ? customBannerUrl
      : smartSolutionsBanner;

  return (
    <div className="relative w-full min-h-[480px] sm:min-h-[500px] md:min-h-[520px] lg:min-h-[560px] xl:min-h-[600px] flex items-start overflow-hidden">
      {/* Background Banner Image without text */}
      <Image
        src={bannerSrc}
        alt="Crown Excel technology solutions banner"
        fill
        className="object-cover w-full h-full object-right md:object-center"
        priority
        sizes="100vw"
      />

      {/* Hero content positioned to match original placement */}
      <div className="relative z-10 w-full px-5 sm:px-8 md:px-[53px] lg:px-[53px] xl:px-16 pt-24 sm:pt-28 md:pt-[136px] lg:pt-[144px] pb-12 sm:pb-16">
        <div className="max-w-[360px] sm:max-w-[460px] md:max-w-[560px] lg:max-w-[620px] xl:max-w-[660px] text-left">
          <h1 className="text-white font-montserrat font-bold text-[30px] sm:text-[36px] md:text-[46px] lg:text-[50px] xl:text-[54px] leading-[1.14] tracking-normal">
            Smart Solutions <br />
            For Your Business
          </h1>

          <div className="mt-4 sm:mt-5 text-gray-200 font-montserrat text-xs sm:text-sm md:text-[14px] lg:text-[15px] leading-relaxed md:leading-[25px] space-y-3 max-w-[460px] sm:max-w-[500px] md:max-w-[520px] lg:max-w-[540px]">
            <p>
              <strong className="text-white font-semibold">Crown Excel</strong> is a Dubai-based provider of IT hardware procurement, enterprise IT hardware reselling, hardware supply and distribution, IT infrastructure maintenance and management, IT consultancy, and technical support services.
            </p>
            <p>
              We specialize in delivering reliable IT hardware solutions and comprehensive infrastructure support to meet the evolving technology needs of businesses across Dubai and the UAE.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SmartSolutions
