import React from 'react'
import Core1 from '../../../../../Components/Images/HardwareRepairWhyChooseUs1.png'
import Core2 from '../../../../../Components/Images/HardwareRepairWhyChooseUs2.png'
import Core3 from '../../../../../Components/Images/HardwareRepairWhyChooseUs3.png'
import Core4 from '../../../../../Components/Images/HardwareRepairWhyChooseUs4.png'
import BorderImage from '../../../../../Components/Images/borderimage.png'
import NetworkIT from '../../../../../Components/Images/serverempowering.png'
import Image from 'next/image'
const ServerWhyChooseUs = () => {
  return (
    <div className='px-5'>
      <h1 className='text-[#0e5d48] text-[30px] md:text-[32px] lg:text-[32px] font-[600] leading-[32px]'>Why Choose Us:</h1>
       <Image
                        src={NetworkIT}
                        width={527}
                        height={355}
                        alt=""
                        className="w-full h-[220px] mt-5 md:hidden lg:hidden"
                      />
      <div className="major-divs flex flex-col-reverse md:flex-row lg:flex-row md:items-start lg:items-center gap-5 mt-10 border-r " >
        <div className="major-div-left flex-shrink-0">
            <Image alt='' src={Core1} width={572} height={386} className='w-full h-[220px] md:w-[397px] md:h-[267.5px] lg:w-[572px] lg:h-[386px]'/>
        </div>
        <div className="major-div-right flex flex-col items-start gap-5 lg:mr-7">
            <h1 className='text-[26px] lg:text-[32px] font-[600] leading-[26px] lg:leading-[32px] text-[#0e5d48]'>Comprehensive Server Management:</h1>
            <div className="text-area-div bg-[#eae9e9] rounded-[30px] p-5 lg:p-[34px]">
                <p className='text-black text-[16px] leading-[27.2px]'>We handle everything from server setup and configuration to monitoring and maintenance. Our expertise spans physical, virtual, and cloud-based servers, ensuring complete coverage for your IT environment.</p>
            </div>
        </div>
        <Image alt='' src={BorderImage} width={5} height={10} className='hidden md:block lg:block md:h-[350px] lg:h-[400px]'/>
      </div>
      <div className="major-divs flex flex-col-reverse md:flex-row-reverse lg:flex-row-reverse md:items-start lg:items-center gap-5 mt-10 border-r " >
        <div className="major-div-left flex-shrink-0">
            <Image alt='' src={Core2} width={572} height={386} className='w-full h-[220px] md:w-[397px] md:h-[267.5px] lg:w-[572px] lg:h-[386px]'/>
        </div>
        <div className="major-div-right flex flex-col items-start gap-5 lg:mr-7">
            <h1 className='text-[26px] lg:text-[32px] font-[600] leading-[26px] lg:leading-[32px] text-[#0e5d48]'>Proactive Server Monitoring and Maintenance:</h1>
            <div className="text-area-div bg-[#eae9e9] rounded-[30px] p-5 lg:p-[34px]">
                <p className='text-black text-[16px] leading-[27.2px]'>Our proactive approach prevents server issues before they impact your business. With 24/7 monitoring, regular health checks, and timely updates, we ensure your servers perform reliably and efficiently</p>
            </div>
        </div>
        <Image alt='' src={BorderImage} width={5} height={10} className='hidden md:block lg:block md:h-[350px] lg:h-[400px]'/>
      </div>
      <div className="major-divs flex flex-col-reverse md:flex-row lg:flex-row md:items-start lg:items-center gap-5 mt-10 border-r " >
        <div className="major-div-left flex-shrink-0">
            <Image alt='' src={Core3} width={572} height={386} className='w-full h-[220px] md:w-[397px] md:h-[267.5px] lg:w-[572px] lg:h-[386px]'/>
        </div>
        <div className="major-div-right flex flex-col items-start gap-5 lg:mr-7">
            <h1 className='text-[26px] lg:text-[32px] font-[600] leading-[26px] lg:leading-[32px] text-[#0e5d48]'>Fast and Reliable Troubleshooting:</h1>
            <div className="text-area-div bg-[#eae9e9] rounded-[30px] p-5 lg:p-[34px]">
                <p className='text-black text-[16px] leading-[27.2px]'>When server problems arise, we act quickly to diagnose and resolve them. Our technicians are skilled at handling hardware failures, software glitches, and connectivity issues, minimizing downtime and restoring services promptly.</p>
            </div>
        </div>
        <Image alt='' src={BorderImage} width={5} height={10} className='md:h-[350px] lg:h-[400px] md:block hidden lg:block'/>
      </div>
      <div className="major-divs flex flex-col-reverse md:flex-row-reverse lg:flex-row-reverse md:items-start lg:items-center gap-5 mt-10 border-r " >
        <div className="major-div-left flex-shrink-0">
            <Image alt='' src={Core4} width={572} height={386} className='w-full h-[220px] md:w-[397px] md:h-[267.5px] lg:w-[572px] lg:h-[386px]'/>
        </div>
        <div className="major-div-right flex flex-col items-start gap-5 lg:mr-7">
            <h1 className='text-[26px] lg:text-[32px] font-[600] leading-[26px] lg:leading-[32px] text-[#0e5d48]'>Scalable Solutions for Growing Businesses :</h1>
            <div className="text-area-div bg-[#eae9e9] rounded-[30px] p-5 lg:p-[34px]">
                <p className='text-black text-[16px] leading-[27.2px]'>As your business grows, so do your server needs. We provide scalable solutions that adapt to your changing requirements, whether it’s adding resources, upgrading capacity, or migrating to the cloud.</p>
            </div>
        </div>
        <Image alt='' src={BorderImage} width={5} height={10} className='md:h-[350px] lg:h-[400px] hidden md:block lg:block'/>
      </div>
    </div>
  )
}

export default ServerWhyChooseUs
