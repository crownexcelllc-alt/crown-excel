import React from 'react'
import NetworkingSmartImage from '../../../../../Components/Images/hardwaresmarat.png'
import SignalTower from '../../../../../Components/Images/signaltower.png'
import Image from 'next/image'
const HardwareSmart = () => {
  return (
    <div className='flex flex-col md:flex-row lg:flex-row items-center lg:items-center  justify-center gap-10 px-2 md:px-10 lg:px-15 py-10 md:py-10 lg:py-10'>
      <div className="networking-left mt-0 md:mt-10 lg:mt-10 relative">
        <Image alt='' src={SignalTower} width={40} height={56} className='absolute -mt-5'/>
        <p className='w-full md:w-[327px] lg:w-[525px] p-[30px] rounded-[30px] h-auto bg-[#ffd900] text-black text-[14px] md:text-[16px] lg:text-[16px] leading-[27.2px] font-montserrat'>At Crown Excel, we provide comprehensive Hardware AMC (Annual Maintenance Contract) services to ensure your IT infrastructure operates efficiently and without interruptions. In today’s technology-driven world, hardware downtime can severely impact your business productivity and profitability. That’s why our Hardware AMC services are tailored to provide proactive maintenance, quick troubleshooting, and reliable support for all your hardware assets, including servers, desktops, laptops, printers, and more.
            <br />
            <br />
            Our expert team ensures your IT hardware is always in optimal working condition, reducing downtime and enhancing operational performance. By signing up for our AMC, you not only secure professional care for your devices but also extend their lifecycle, saving costs on frequent replacements or repairs.


        </p>
      </div>
      <div className="networking-right ">
        <Image alt='' src={NetworkingSmartImage} width={602} height={408} className='md:w-[400px] md:h-[358px] lg:w-[602px] lg:h-[408px]'/>
      </div>
    </div>
  )
}

export default HardwareSmart
