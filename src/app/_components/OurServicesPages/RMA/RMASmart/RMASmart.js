import React from 'react'
import NetworkingSmartImage from '../../../../../Components/Images/RmaSmart.png'
import SignalTower from '../../../../../Components/Images/signaltower.png'
import Image from 'next/image'
const RMASmart = () => {
  return (
    <div className='flex flex-col md:flex-col lg:flex-row items-center lg:items-center  justify-center gap-10 px-2 md:px-10 lg:px-15 py-10 md:py-10 lg:py-10'>
      <div className="networking-left mt-0 md:mt-10 lg:mt-10 relative">
        <Image alt='' src={SignalTower} width={40} height={56} className='absolute -mt-5'/>
        <p className='w-full md:w-full lg:w-[525px] p-[30px] rounded-[30px] h-auto bg-[#ffd900] text-black text-[14px] md:text-[16px] lg:text-[16px] leading-[27.2px] font-montserrat'>In today’s fast-paced business and personal computing environments, a dependable and secure network infrastructure is essential. At Crown Excel, we provide comprehensive networking solutions designed to meet the diverse needs of individuals and organizations. Our services cover everything from high-quality hardware, such as routers, switches, and cables, to advanced networking software for efficient monitoring, configuration, and management. Whether you need a robust business network with features like VPNs and cloud integration or a reliable personal setup for gaming and streaming, our solutions are tailored to fit your specific requirements.
            <br />
            <br />
        Security lies at the heart of everything we do, with measures like firewalls, intrusion detection systems, and encrypted connections to safeguard against cyber threats. Our team of certified experts brings years of technical experience, ensuring solutions are not only reliable but also scalable to support long-term growth. We cater to a wide range of industries, including corporate offices, education, retail, healthcare, and more, delivering networks that enhance efficiency, collaboration, and customer satisfaction. From initial planning and implementation to maintenance and troubleshooting, we offer end-to-end support to ensure your network runs smoothly. Trust CROWN EXCEL to provide the innovative, reliable, and secure networking solutions your business or home needs to thrive.

        </p>
      </div>
      <div className="networking-right md:w-full">
        <Image alt='' src={NetworkingSmartImage} width={602} height={408} className='md:w-full md:h-[408px] lg:w-[602px] lg:h-[408px]'/>
      </div>
    </div>
  )
}

export default RMASmart
