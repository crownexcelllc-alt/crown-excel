import React from 'react'
import NetworkingSmartImage from '../../../../../Components/Images/smartnetworking.png'
import Image from 'next/image'
const NetworkingSmart = () => {
  return (
    <div className='flex flex-col md:flex-row lg:flex-row items-center lg:items-start  justify-center gap-10 px-2 md:px-10 lg:px-15 py-2 md:py-10 lg:py-10'>
      <div className="networking-left mt-0 md:mt-10 lg:mt-10">
        <p className='w-full md:w-[400px] lg:w-[525px] p-[30px] rounded-[30px] h-auto bg-[#ffd900] text-black text-[14px] md:text-[16px] lg:text-[16px] leading-[27.2px] font-montserrat'>In today’s fast-paced business and personal computing environments, a dependable and secure network infrastructure is essential. At Crown Excel, we provide comprehensive networking solutions designed to meet the diverse needs of individuals and organizations. Our services cover everything from high-quality hardware, such as routers, switches, and cables, to advanced networking software for efficient monitoring, configuration, and management. Whether you need a robust business network with features like VPNs and cloud integration or a reliable personal setup for gaming and streaming, our solutions are tailored to fit your specific requirements.</p>
      </div>
      <div className="networking-right">
        <Image alt='' src={NetworkingSmartImage} width={602} height={560} className='md:w-[486px] md:h-[435px] lg:w-[602px] lg:h-[560px]'/>
      </div>
    </div>
  )
}

export default NetworkingSmart
