import React from 'react'
import Core1 from '../../../../../Components/Images/softwarecore1.png'
import Core2 from '../../../../../Components/Images/softwarecore2.png'
import Core3 from '../../../../../Components/Images/softwarecore3.png'
import Core4 from '../../../../../Components/Images/softwarecore4.png'
import BorderImage from '../../../../../Components/Images/borderimage.png'
import NetworkIT from '../../../../../Components/Images/hardwareempowering.png'
import Image from 'next/image'
const SoftwareCoreAreas = () => {
  return (
    <div className='px-5'>
      <h1 className='text-[#0e5d48] text-[30px] md:text-[32px] lg:text-[32px] font-[600] leading-[32px]'>One Core Areas Of Expertise Include:</h1>
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
            <h1 className='text-[26px] lg:text-[32px] font-[600] leading-[26px] lg:leading-[32px] text-[#0e5d48]'>Comprehensive Maintenance for All Software:</h1>
            <div className="text-area-div bg-[#eae9e9] rounded-[30px] p-5 lg:p-[34px]">
                <p className='text-black text-[16px] leading-[27.2px]'>Whether it’s ERP, CRM, accounting software, or custom applications, we provide maintenance and support for a wide range of business-critical software. Our expertise ensures every application runs seamlessly.</p>
            </div>
        </div>
        <Image alt='' src={BorderImage} width={5} height={10} className='hidden md:block lg:block md:h-[350px] lg:h-[400px]'/>
      </div>
      <div className="major-divs flex flex-col-reverse md:flex-row-reverse lg:flex-row-reverse md:items-start lg:items-center gap-5 mt-10 border-r " >
        <div className="major-div-left flex-shrink-0">
            <Image alt='' src={Core2} width={572} height={386} className='w-full h-[220px] md:w-[397px] md:h-[267.5px] lg:w-[572px] lg:h-[386px]'/>
        </div>
        <div className="major-div-right flex flex-col items-start gap-5 lg:mr-7">
            <h1 className='text-[26px] lg:text-[32px] font-[600] leading-[26px] lg:leading-[32px] text-[#0e5d48]'>Bug Fixes and Troubleshooting on Demand:</h1>
            <div className="text-area-div bg-[#eae9e9] rounded-[30px] p-5 lg:p-[34px]">
                <p className='text-black text-[16px] leading-[27.2px]'>Our team provides prompt issue resolution and bug fixes, minimizing downtime and ensuring your software performs as expected. With Crown Excel, you can count on swift and effective support when you need it most</p>
            </div>
        </div>
        <Image alt='' src={BorderImage} width={5} height={10} className='hidden md:block lg:block md:h-[350px] lg:h-[400px]'/>
      </div>
      <div className="major-divs flex flex-col-reverse md:flex-row lg:flex-row md:items-start lg:items-center gap-5 mt-10 border-r " >
        <div className="major-div-left flex-shrink-0">
            <Image alt='' src={Core3} width={572} height={386} className='w-full h-[220px] md:w-[397px] md:h-[267.5px] lg:w-[572px] lg:h-[386px]'/>
        </div>
        <div className="major-div-right flex flex-col items-start gap-5 lg:mr-7">
            <h1 className='text-[26px] lg:text-[32px] font-[600] leading-[26px] lg:leading-[32px] text-[#0e5d48]'>Proactive Updates and Upgrades:</h1>
            <div className="text-area-div bg-[#eae9e9] rounded-[30px] p-5 lg:p-[34px]">
                <p className='text-black text-[16px] leading-[27.2px]'>We keep your software up-to-date with the latest patches, updates, and version upgrades. This ensures enhanced performance, security, and compliance with evolving industry standards.</p>
            </div>
        </div>
        <Image alt='' src={BorderImage} width={5} height={10} className='md:h-[350px] lg:h-[400px] md:block hidden lg:block'/>
      </div>
      <div className="major-divs flex flex-col-reverse md:flex-row-reverse lg:flex-row-reverse md:items-start lg:items-center gap-5 mt-10 border-r " >
        <div className="major-div-left flex-shrink-0">
            <Image alt='' src={Core4} width={572} height={386} className='w-full h-[220px] md:w-[397px] md:h-[267.5px] lg:w-[572px] lg:h-[386px]'/>
        </div>
        <div className="major-div-right flex flex-col items-start gap-5 lg:mr-7">
            <h1 className='text-[26px] lg:text-[32px] font-[600] leading-[26px] lg:leading-[32px] text-[#0e5d48]'>Tailored AMC Plans for Every Business :</h1>
            <div className="text-area-div bg-[#eae9e9] rounded-[30px] p-5 lg:p-[34px]">
                <p className='text-black text-[16px] leading-[27.2px]'>We understand that every business has unique software requirements. Our AMC plans are customized to align with your specific needs, offering flexible solutions that maximize value and efficiency for your business.</p>
            </div>
        </div>
        <Image alt='' src={BorderImage} width={5} height={10} className='md:h-[350px] lg:h-[400px] hidden md:block lg:block'/>
      </div>
    </div>
  )
}

export default SoftwareCoreAreas
