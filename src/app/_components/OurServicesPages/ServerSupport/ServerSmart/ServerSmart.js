import React from 'react'
import NetworkingSmartImage from '../../../../../Components/Images/serversmart.png'
import SignalTower from '../../../../../Components/Images/signaltower.png'
import Image from 'next/image'
const ServerSmart = () => {
  return (
    <div className='flex flex-col md:flex-row lg:flex-row items-center lg:items-center  justify-center gap-10 px-2 md:px-10 lg:px-15 py-10 md:py-10 lg:py-10'>
      <div className="networking-left mt-0 md:mt-10 lg:mt-10 relative">
        <Image alt='' src={SignalTower} width={40} height={56} className='absolute -mt-5'/>
        <p className='w-full md:w-[327px] lg:w-[525px] p-[30px] rounded-[30px] h-auto bg-[#ffd900] text-black text-[14px] md:text-[16px] lg:text-[16px] leading-[27.2px] font-montserrat'>At Crown Excel, we provide expert Server Support Services to ensure your servers operate smoothly and securely. Servers are the backbone of your IT infrastructure, hosting critical applications, databases, and services that keep your business running. When server issues arise, they can disrupt operations, slow down productivity, and compromise data security. That’s where we step in.
            <br />
            <br />
            Our dedicated team offers end-to-end server support, including installation, configuration, performance optimization, troubleshooting, and security management. Whether you operate on physical servers, virtual servers, or cloud-based systems, Crown Excel ensures your servers remain reliable, efficient, and scalable to meet your growing business needs.

        </p>
      </div>
      <div className="networking-right ">
        <Image alt='' src={NetworkingSmartImage} width={602} height={408} className='md:w-[400px] md:h-[250px] lg:w-[602px] lg:h-[408px]'/>
      </div>
    </div>
  )
}

export default ServerSmart
