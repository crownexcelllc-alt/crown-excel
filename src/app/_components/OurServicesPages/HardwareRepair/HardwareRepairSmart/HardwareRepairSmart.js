import React from 'react'
import NetworkingSmartImage from '../../../../../Components/Images/hardwarerepairsmart.png'
import SignalTower from '../../../../../Components/Images/signaltower.png'
import Image from 'next/image'
const HardwareRepairSmart = () => {
  return (
    <div className='flex flex-col md:flex-row lg:flex-row items-center lg:items-center  justify-center gap-10 px-2 md:px-10 lg:px-15 py-10 md:py-10 lg:py-10'>
      <div className="networking-left mt-0 md:mt-10 lg:mt-10 relative">
        <Image alt='' src={SignalTower} width={40} height={56} className='absolute -mt-5'/>
        <p className='w-full md:w-[327px] lg:w-[525px] p-[30px] rounded-[30px] h-auto bg-[#ffd900] text-black text-[14px] md:text-[16px] lg:text-[16px] leading-[27.2px] font-montserrat'>At Crown Excel, we offer top-tier Hardware Repair Services to ensure your IT infrastructure operates without disruptions. Whether it’s desktops, laptops, servers, printers, or networking equipment, our team of experts is equipped to handle all types of hardware issues with speed and precision. In today’s business world, a malfunctioning device can lead to delays and lost productivity. That’s why we provide quick, reliable, and cost-effective solutions to get your hardware back in optimal working condition.
            <br />
            <br />
            With Crown Excel, you can trust that your hardware is in safe hands. From diagnostics to repairs and replacement parts, we deliver comprehensive services to minimize downtime and keep your business running seamlessly.


        </p>
      </div>
      <div className="networking-right ">
        <Image alt='' src={NetworkingSmartImage} width={602} height={408} className='md:w-[400px] md:h-[250px] lg:w-[602px] lg:h-[408px]'/>
      </div>
    </div>
  )
}

export default HardwareRepairSmart
