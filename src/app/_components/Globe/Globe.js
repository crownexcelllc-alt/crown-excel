import Image from 'next/image'
import React from 'react'
import Global from '../../../Components/Images/globeimage.png'
import { safeRender, safeImage } from '@/lib/safe-html'

const Globe = ({ cmsData }) => {
  const fields = cmsData?.fields || cmsData || {}
  const heading = fields.heading
  const heading2 = fields.heading_2
  const mapImgSrc = safeImage(fields.image_global, Global)

  return (
    <div className="w-full bg-[#FFFFFF] overflow-hidden">
      {/* Text Section with #084032 background, constrained on large screens with pure white on left & right */}
      <div className="w-full bg-[#FFFFFF] overflow-hidden">
        <section id="globe" className="globe-section relative w-full max-w-[1536px] mx-auto bg-[#084032] h-[130px] flex flex-col items-center justify-center text-white overflow-hidden px-4">
          <h2 className="text-[24px] sm:text-[30px] text-center leading-[30px] text-[#f7a539] font-montserrat font-[600]">
            {safeRender(heading, "We are in the Heart of Globe")}
          </h2>
          <h3 className="text-[24px] sm:text-[30px] font-montserrat font-[600] mt-1">
            {safeRender(heading2, "Dubai UAE")}
          </h3>
        </section>
      </div>

      {/* Map Image Section with pure white (#FFFFFF) background */}
      <div className="w-full bg-[#FFFFFF] flex justify-center py-6 sm:py-8 overflow-hidden">
        <div className="globe-image w-full max-w-[1536px] flex justify-center px-4">
          <Image
            className="w-full max-w-[793px] h-auto object-contain"
            src={mapImgSrc}
            alt="Global location map highlighting Dubai UAE"
            width={793}
            height={231}
          />
        </div>
      </div>
    </div>
  )
}

export default Globe
