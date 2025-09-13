import React from 'react'
import Core1 from '../../../../../Components/Images/itwhyus1.png'
import Core2 from '../../../../../Components/Images/itwhyus2.png'
import Core3 from '../../../../../Components/Images/itwhyus3.png'
import Core4 from '../../../../../Components/Images/itwhyus4.png'
import BorderImage from '../../../../../Components/Images/borderimage.png'
import NetworkIT from '../../../../../Components/Images/itempowering.png'
import Image from 'next/image'
const ITWhyChooseUs = () => {
  return (
    <div className='px-5'>
      <h1 className='text-[#0e5d48] text-[30px] md:text-[32px] lg:text-[32px] font-[600] leading-[32px]'>Why choose Crown Excel for IT consultancy</h1>
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
      <h1 className='text-[26px] lg:text-[32px] font-[600] leading-[26px] lg:leading-[32px] text-[#0e5d48]'>Tailored IT strategies aligned to your business goals</h1>
            <div className="text-area-div bg-[#eae9e9] rounded-[30px] p-5 lg:p-[34px]">
        <p className='text-black text-[16px] leading-[27.2px]'>We design pragmatic IT strategies that map technology investments to measurable business outcomes — from cost savings to faster time-to-market. Our consultants access your environment and build a prioritized roadmap you can execute with confidence.</p>
            </div>
        </div>
        <Image alt='' src={BorderImage} width={5} height={10} className='hidden md:block lg:block md:h-[350px] lg:h-[400px]'/>
      </div>
      <div className="major-divs flex flex-col-reverse md:flex-row-reverse lg:flex-row-reverse md:items-start lg:items-center gap-5 mt-10 border-r " >
        <div className="major-div-left flex-shrink-0">
            <Image alt='' src={Core2} width={572} height={386} className='w-full h-[220px] md:w-[397px] md:h-[267.5px] lg:w-[572px] lg:h-[386px]'/>
        </div>
        <div className="major-div-right flex flex-col items-start gap-5 lg:mr-7">
      <h1 className='text-[26px] lg:text-[32px] font-[600] leading-[26px] lg:leading-[32px] text-[#0e5d48]'>Experienced, certified consultants focused on outcomes</h1>
            <div className="text-area-div bg-[#eae9e9] rounded-[30px] p-5 lg:p-[34px]">
        <p className='text-black text-[16px] leading-[27.2px]'>Our consultants combine deep technical skills with industry experience — delivering clear recommendations, vendor-neutral guidance, and hands-on support to implement change quickly and safely.</p>
            </div>
        </div>
        <Image alt='' src={BorderImage} width={5} height={10} className='hidden md:block lg:block md:h-[350px] lg:h-[400px]'/>
      </div>
      <div className="major-divs flex flex-col-reverse md:flex-row lg:flex-row md:items-start lg:items-center gap-5 mt-10 border-r " >
        <div className="major-div-left flex-shrink-0">
            <Image alt='' src={Core3} width={572} height={386} className='w-full h-[220px] md:w-[397px] md:h-[267.5px] lg:w-[572px] lg:h-[386px]'/>
        </div>
        <div className="major-div-right flex flex-col items-start gap-5 lg:mr-7">
      <h1 className='text-[26px] lg:text-[32px] font-[600] leading-[26px] lg:leading-[32px] text-[#0e5d48]'>Proven track record delivering measurable results</h1>
            <div className="text-area-div bg-[#eae9e9] rounded-[30px] p-5 lg:p-[34px]">
        <p className='text-black text-[16px] leading-[27.2px]'>We focus on outcomes: improved security, reduced operational cost, faster delivery, and scalable platforms. Our engagements emphasize quick wins and long-term capability building so clients see value from day one.</p>
            </div>
        </div>
        <Image alt='' src={BorderImage} width={5} height={10} className='md:h-[350px] lg:h-[400px] md:block hidden lg:block'/>
      </div>
      <div className="major-divs flex flex-col-reverse md:flex-row-reverse lg:flex-row-reverse md:items-start lg:items-center gap-5 mt-10 border-r " >
        <div className="major-div-left flex-shrink-0">
            <Image alt='' src={Core4} width={572} height={386} className='w-full h-[220px] md:w-[397px] md:h-[267.5px] lg:w-[572px] lg:h-[386px]'/>
        </div>
        <div className="major-div-right flex flex-col items-start gap-5 lg:mr-7">
      <h1 className='text-[26px] lg:text-[32px] font-[600] leading-[26px] lg:leading-[32px] text-[#0e5d48]'>End-to-end support from strategy to implementation</h1>
            <div className="text-area-div bg-[#eae9e9] rounded-[30px] p-5 lg:p-[34px]">
        <p className='text-black text-[16px] leading-[27.2px]'>From quick assessments to full program delivery, we help design, procure, implement, and operate solutions. Our teams stay engaged until outcomes are achieved and your staff are confident running the new environment.</p>
            </div>
        </div>
        <Image alt='' src={BorderImage} width={5} height={10} className='md:h-[350px] lg:h-[400px] hidden md:block lg:block'/>
      </div>
    </div>
  )
}

export default ITWhyChooseUs
