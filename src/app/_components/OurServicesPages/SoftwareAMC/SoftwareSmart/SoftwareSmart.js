import React from 'react'
import NetworkingSmartImage from '../../../../../Components/Images/softwaresmart.png'
import SignalTower from '../../../../../Components/Images/signaltower.png'
import Image from 'next/image'
const SoftwareSmart = () => {
  return (
    <div className='flex flex-col md:flex-row lg:flex-row items-center lg:items-center  justify-center gap-10 px-2 md:px-10 lg:px-15 py-10 md:py-10 lg:py-10'>
      <div className="networking-left mt-0 md:mt-10 lg:mt-10 relative">
        <Image alt='' src={SignalTower} width={40} height={56} className='absolute -mt-5'/>
        <p className='w-full md:w-[327px] lg:w-[525px] p-[30px] rounded-[30px] h-auto bg-[#ffd900] text-black text-[14px] md:text-[16px] lg:text-[16px] leading-[27.2px] font-montserrat'>At Crown Excel, our Software AMC (Annual Maintenance Contract) services are designed to ensure the smooth functioning, security, and performance of your business-critical software applications. In today’s competitive world, software disruptions can lead to downtime, data loss, and inefficiency, impacting overall productivity and growth. That’s why we offer comprehensive Software AMC solutions to provide regular maintenance, troubleshooting, and upgrades for all your software systems.
            <br />
            <br />
            From ERP and CRM systems to custom business applications and cloud-based solutions, our team of experts ensures your software remains up-to-date, secure, and fully optimized. With Crown Excel, you get peace of mind knowing that your software runs smoothly, allowing you to focus on driving business success.


        </p>
      </div>
      <div className="networking-right ">
        <Image alt='' src={NetworkingSmartImage} width={602} height={408} className='md:w-[400px] md:h-[358px] lg:w-[602px] lg:h-[408px]'/>
      </div>
    </div>
  )
}

export default SoftwareSmart
