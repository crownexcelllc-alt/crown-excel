import React from 'react'
import NetworkingSmartImage from '../../../../../Components/Images/RmaSmart.png'
import SignalTower from '../../../../../Components/Images/signaltower.png'
import Image from 'next/image'
const RMASmart = () => {
  return (
    <div className='flex flex-col md:flex-col lg:flex-row items-center lg:items-center  justify-center gap-10 px-2 md:px-10 lg:px-15 py-10 md:py-10 lg:py-10'>
      <div className="networking-left mt-0 md:mt-10 lg:mt-10 relative">
        <Image alt='cloud services' src={SignalTower} width={40} height={56} className='absolute -mt-5'/>
        <p className='w-full md:w-full lg:w-[525px] p-[30px] rounded-[30px] h-auto bg-[#ffd900] text-black text-[14px] md:text-[16px] lg:text-[16px] leading-[27.2px] font-montserrat'>Crown Excel’s Cloud Computing services deliver scalable, secure, and cost-effective cloud solutions. From migration planning to managed cloud operations, we ensure minimal downtime and optimized performance for your workloads.
            <br />
            <br />
        Our team provides ongoing cloud management, security hardening, and cost optimization to help businesses of all sizes take full advantage of cloud technology.

        </p>
      </div>
      <div className="networking-right md:w-full">
        <Image alt='cloud architecture' src={NetworkingSmartImage} width={602} height={408} className='md:w-full md:h-[408px] lg:w-[602px] lg:h-[408px]'/>
      </div>
    </div>
  )
}

export default RMASmart
