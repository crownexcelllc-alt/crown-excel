import React from 'react'
import Core1 from '../../../../../Components/Images/HardwareRepairWhyChooseUs1.png'
import Core2 from '../../../../../Components/Images/HardwareRepairWhyChooseUs2.png'
import Core3 from '../../../../../Components/Images/HardwareRepairWhyChooseUs3.png'
import Core4 from '../../../../../Components/Images/HardwareRepairWhyChooseUs4.png'
import BorderImage from '../../../../../Components/Images/borderimage.png'
import NetworkIT from '../../../../../Components/Images/hardwarerepairempowering.png'
import Image from 'next/image'
const HardwareRepairWhyChooseUs = () => {
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
            <h1 className='text-[26px] lg:text-[32px] font-[600] leading-[26px] lg:leading-[32px] text-[#0e5d48]'>Comprehensive Diagnostics and Repairs:</h1>
            <div className="text-area-div bg-[#eae9e9] rounded-[30px] p-5 lg:p-[34px]">
                <p className='text-black text-[16px] leading-[27.2px]'>Our experts perform in-depth diagnostics to identify hardware issues accurately and provide precise repair solutions. This ensures minimal disruptions to your business operations and maximized device performance.</p>
            </div>
        </div>
        <Image alt='' src={BorderImage} width={5} height={10} className='hidden md:block lg:block md:h-[350px] lg:h-[400px]'/>
      </div>
      <div className="major-divs flex flex-col-reverse md:flex-row-reverse lg:flex-row-reverse md:items-start lg:items-center gap-5 mt-10 border-r " >
        <div className="major-div-left flex-shrink-0">
            <Image alt='' src={Core2} width={572} height={386} className='w-full h-[220px] md:w-[397px] md:h-[267.5px] lg:w-[572px] lg:h-[386px]'/>
        </div>
        <div className="major-div-right flex flex-col items-start gap-5 lg:mr-7">
            <h1 className='text-[26px] lg:text-[32px] font-[600] leading-[26px] lg:leading-[32px] text-[#0e5d48]'>Genuine Spare Parts and Quality Assurance:</h1>
            <div className="text-area-div bg-[#eae9e9] rounded-[30px] p-5 lg:p-[34px]">
                <p className='text-black text-[16px] leading-[27.2px]'>We use only genuine, high-quality spare parts for all hardware repairs, ensuring the durability and reliability of your devices. Our commitment to quality guarantees that your hardware performs like new after repairs.</p>
            </div>
        </div>
        <Image alt='' src={BorderImage} width={5} height={10} className='hidden md:block lg:block md:h-[350px] lg:h-[400px]'/>
      </div>
      <div className="major-divs flex flex-col-reverse md:flex-row lg:flex-row md:items-start lg:items-center gap-5 mt-10 border-r " >
        <div className="major-div-left flex-shrink-0">
            <Image alt='' src={Core3} width={572} height={386} className='w-full h-[220px] md:w-[397px] md:h-[267.5px] lg:w-[572px] lg:h-[386px]'/>
        </div>
        <div className="major-div-right flex flex-col items-start gap-5 lg:mr-7">
            <h1 className='text-[26px] lg:text-[32px] font-[600] leading-[26px] lg:leading-[32px] text-[#0e5d48]'>Quick Turnaround Times:</h1>
            <div className="text-area-div bg-[#eae9e9] rounded-[30px] p-5 lg:p-[34px]">
                <p className='text-black text-[16px] leading-[27.2px]'>We understand the importance of minimizing downtime. That’s why our technicians prioritize fast repairs without compromising quality, getting your devices back to work as quickly as possible.</p>
            </div>
        </div>
        <Image alt='' src={BorderImage} width={5} height={10} className='md:h-[350px] lg:h-[400px] md:block hidden lg:block'/>
      </div>
      <div className="major-divs flex flex-col-reverse md:flex-row-reverse lg:flex-row-reverse md:items-start lg:items-center gap-5 mt-10 border-r " >
        <div className="major-div-left flex-shrink-0">
            <Image alt='' src={Core4} width={572} height={386} className='w-full h-[220px] md:w-[397px] md:h-[267.5px] lg:w-[572px] lg:h-[386px]'/>
        </div>
        <div className="major-div-right flex flex-col items-start gap-5 lg:mr-7">
            <h1 className='text-[26px] lg:text-[32px] font-[600] leading-[26px] lg:leading-[32px] text-[#0e5d48]'>On-Site and Remote Support:</h1>
            <div className="text-area-div bg-[#eae9e9] rounded-[30px] p-5 lg:p-[34px]">
                <p className='text-black text-[16px] leading-[27.2px]'>Whether you need repairs at your office or remote troubleshooting for minor issues, Crown Excel provides flexible services to meet your needs. Our team ensures convenience and efficiency in resolving your hardware problems.</p>
            </div>
        </div>
        <Image alt='' src={BorderImage} width={5} height={10} className='md:h-[350px] lg:h-[400px] hidden md:block lg:block'/>
      </div>
    </div>
  )
}

export default HardwareRepairWhyChooseUs
