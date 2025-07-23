import React from 'react'
import Core1 from '../../../../../Components/Images/hardwarewhychooseus1.png'
import Core2 from '../../../../../Components/Images/hardwarewhychooseus2.png'
import Core3 from '../../../../../Components/Images/hardwarewhychooseus3.png'
import Core4 from '../../../../../Components/Images/hardwarewhychooseus4.png'
import BorderImage from '../../../../../Components/Images/borderimage.png'
import NetworkIT from '../../../../../Components/Images/hardwareempowering.png'
import Image from 'next/image'
const HardwareWhyChooseUS = () => {
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
            <h1 className='text-[26px] lg:text-[32px] font-[600] leading-[26px] lg:leading-[32px] text-[#0e5d48]'>Proactive IT Comprehensive Coverage Across All Hardware:</h1>
            <div className="text-area-div bg-[#eae9e9] rounded-[30px] p-5 lg:p-[34px]">
                <p className='text-black text-[16px] leading-[27.2px]'>We maintain and support a wide range of IT hardware, including servers, desktops, laptops, networking equipment, printers, and other peripherals. Our expertise ensures no device in your IT ecosystem is left unattended.</p>
            </div>
        </div>
        <Image alt='' src={BorderImage} width={5} height={10} className='hidden md:block lg:block md:h-[350px] lg:h-[400px]'/>
      </div>
      <div className="major-divs flex flex-col-reverse md:flex-row-reverse lg:flex-row-reverse md:items-start lg:items-center gap-5 mt-10 border-r " >
        <div className="major-div-left flex-shrink-0">
            <Image alt='' src={Core2} width={572} height={386} className='w-full h-[220px] md:w-[397px] md:h-[267.5px] lg:w-[572px] lg:h-[386px]'/>
        </div>
        <div className="major-div-right flex flex-col items-start gap-5 lg:mr-7">
            <h1 className='text-[26px] lg:text-[32px] font-[600] leading-[26px] lg:leading-[32px] text-[#0e5d48]'>Customized IT Proactive Maintenance for Zero Downtime:</h1>
            <div className="text-area-div bg-[#eae9e9] rounded-[30px] p-5 lg:p-[34px]">
                <p className='text-black text-[16px] leading-[27.2px]'>With regular check-ups, performance optimizations, and issue prevention, we reduce the risk of hardware failures. Our proactive approach ensures your systems stay operational, allowing your business to function without interruptions.</p>
            </div>
        </div>
        <Image alt='' src={BorderImage} width={5} height={10} className='hidden md:block lg:block md:h-[350px] lg:h-[400px]'/>
      </div>
      <div className="major-divs flex flex-col-reverse md:flex-row lg:flex-row md:items-start lg:items-center gap-5 mt-10 border-r " >
        <div className="major-div-left flex-shrink-0">
            <Image alt='' src={Core3} width={572} height={386} className='w-full h-[220px] md:w-[397px] md:h-[267.5px] lg:w-[572px] lg:h-[386px]'/>
        </div>
        <div className="major-div-right flex flex-col items-start gap-5 lg:mr-7">
            <h1 className='text-[26px] lg:text-[32px] font-[600] leading-[26px] lg:leading-[32px] text-[#0e5d48]'>24/7 Fast and Reliable On-Site Support:</h1>
            <div className="text-area-div bg-[#eae9e9] rounded-[30px] p-5 lg:p-[34px]">
                <p className='text-black text-[16px] leading-[27.2px]'>When issues arise, our technicians provide prompt on-site service to troubleshoot and resolve them effectively. Our quick response time minimizes downtime, so your business operations don’t come to a halt.</p>
            </div>
        </div>
        <Image alt='' src={BorderImage} width={5} height={10} className='md:h-[350px] lg:h-[400px] md:block hidden lg:block'/>
      </div>
      <div className="major-divs flex flex-col-reverse md:flex-row-reverse lg:flex-row-reverse md:items-start lg:items-center gap-5 mt-10 border-r " >
        <div className="major-div-left flex-shrink-0">
            <Image alt='' src={Core4} width={572} height={386} className='w-full h-[220px] md:w-[397px] md:h-[267.5px] lg:w-[572px] lg:h-[386px]'/>
        </div>
        <div className="major-div-right flex flex-col items-start gap-5 lg:mr-7">
            <h1 className='text-[26px] lg:text-[32px] font-[600] leading-[26px] lg:leading-[32px] text-[#0e5d48]'>Cutting-Edge Cost-Effective Solutions for Long-Term Savings:</h1>
            <div className="text-area-div bg-[#eae9e9] rounded-[30px] p-5 lg:p-[34px]">
                <p className='text-black text-[16px] leading-[27.2px]'>By preventing hardware failures and extending the lifecycle of your equipment, our AMC services help you save money on unexpected repairs and replacements. With Crown Excel, you invest in reliable hardware performance and long-term savings.</p>
            </div>
        </div>
        <Image alt='' src={BorderImage} width={5} height={10} className='md:h-[350px] lg:h-[400px] hidden md:block lg:block'/>
      </div>
    </div>
  )
}

export default HardwareWhyChooseUS
