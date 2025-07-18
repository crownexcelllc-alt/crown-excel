import React from 'react'
import HighPerformanceImage from '../../../../../Components/Images/HighPerformancePrinters.png'
import Comma from '../../../../../Components/Images/comma.png'
import Image from 'next/image'
const HighPerformancePrinters = () => {
  return (
    <div className='flex md:flex-row lg:flex-row flex-col items-center gap-3 w-full h-auto px-5 mt-20'>
      <div className="highperformance-left basis-[60%] ">
        <Image alt='' src={HighPerformanceImage} width={726} height={416}/>
      </div>
      <div className="highperformance-right basis-[35%] flex flex-col lg:mt-o mt-5">
        <h1 className='text-[30px] md:leading-[32px] leading-[30px] lg:text-[44px] font-[700] font-montserrat lg:leading-[52px] text-black'>HIGH-PERFORMANCE PRINTERS FOR CREATIVE PROFESSIONALS</h1>
        <Image className='mt-7 mb-7' alt='' src={Comma} width={150} height={75}/>
        <p className='text-[16px] leading-[27px] text-[#657799] font-montserrat '>We provide high-performance printers designed to meet the needs of creative professionals.</p>
      </div>
    </div>
  )
}

export default HighPerformancePrinters
