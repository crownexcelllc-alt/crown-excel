import React from 'react'
import HighPerformanceImage from '../../../../../Components/Images/HighPerformance.png'
import Comma from '../../../../../Components/Images/comma.png'
import Image from 'next/image'
import { safeRender, safeImage } from '@/lib/safe-html'

const HighPerformance = ({ cmsData }) => {
  const fields = cmsData?.fields || cmsData || {};
  const headingText = safeRender(fields.heading, "HIGH-PERFORMANCE DESKTOP FOR CREATIVE PROFESSIONAL");
  const paragraphText = safeRender(fields.paragraph, "we also offer an assortment of computer accessories designed to enhance your configuration, for example, monitors, keyboards, mice, etc.");

  const featureImg = safeImage(fields.image_highperformanceimage, HighPerformanceImage);
  const commaImg = safeImage(fields.image_comma, Comma);

  return (
    <div className='flex md:flex-row lg:flex-row flex-col items-center  w-full h-auto px-5 mt-20'>
      <div className="highperformance-left basis-[65%]">
        <Image alt='' src={featureImg} width={727} height={416}/>
      </div>
      <div className="highperformance-right basis-[40%] flex flex-col lg:mt-o mt-5">
        <h2 className='text-[30px] md:leading-[32px] leading-[30px] lg:text-[44px] font-[700] font-montserrat lg:leading-[52px] text-black'>{headingText}</h2>
        <Image className='mt-7 mb-7' alt='' src={commaImg} width={150} height={75}/>
        <p className='text-[16px] leading-[27px] text-black font-montserrat '>{paragraphText}</p>
      </div>
    </div>
  )
}

export default HighPerformance

