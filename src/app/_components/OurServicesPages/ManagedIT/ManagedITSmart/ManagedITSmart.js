import React from 'react'
import NetworkingSmartImage from '../../../../../Components/Images/manageditsmart.png'
import SignalTower from '../../../../../Components/Images/signaltower.png'
import Image from 'next/image'
const ManagedITSmart = () => {
  return (
    <div className='flex flex-col md:flex-row lg:flex-row items-center lg:items-center  justify-center gap-10 px-2 md:px-10 lg:px-15 py-10 md:py-10 lg:py-10'>
      <div className="networking-left mt-0 md:mt-10 lg:mt-10 relative">
        <Image alt='' src={SignalTower} width={40} height={56} className='absolute -mt-5'/>
        <p className='w-full md:w-[327px] lg:w-[525px] p-[30px] rounded-[30px] h-auto bg-[#ffd900] text-black text-[14px] md:text-[16px] lg:text-[16px] leading-[27.2px] font-montserrat'>At Crown Excel, we provide tailored Managed IT Services to empower businesses with reliable, secure, and efficient IT solutions. Our services are designed to streamline your operations, reduce downtime, and ensure your technology infrastructure supports your growth. Whether it’s proactive maintenance, cybersecurity, or cloud integration, our expert team is here to handle your IT needs so you can focus on achieving your business goals.

        </p>
      </div>
      <div className="networking-right ">
        <Image alt='' src={NetworkingSmartImage} width={602} height={408} className='md:w-[400px] md:h-[358px] lg:w-[602px] lg:h-[408px]'/>
      </div>
    </div>
  )
}

export default ManagedITSmart
