import React from 'react'
import NetworkingSmartImage from '../../../../../Components/Images/itsmart.png'
import SignalTower from '../../../../../Components/Images/signaltower.png'
import Image from 'next/image'
const ITSmart = () => {
  return (
    <div className='flex flex-col md:flex-row lg:flex-row items-center lg:items-center  justify-center gap-10 px-2 md:px-10 lg:px-15 py-10 md:py-10 lg:py-10'>
      <div className="networking-left mt-0 md:mt-10 lg:mt-10 relative">
        <Image alt='' src={SignalTower} width={40} height={56} className='absolute -mt-5'/>
        <p className='w-full md:w-[327px] lg:w-[525px] p-[30px] rounded-[30px] h-auto bg-[#ffd900] text-black text-[14px] md:text-[16px] lg:text-[16px] leading-[27.2px] font-montserrat'>At Crown Excel, our IT Consultancy Services are designed to help businesses maximize the value of their technology investments. In today’s fast-paced digital landscape, businesses face a variety of IT challenges, from navigating complex technology ecosystems to optimizing operations for efficiency and growth. Our team of experienced IT consultants partners with you to identify your unique needs, overcome operational bottlenecks, and deliver customized solutions that align with your strategic objectives.
          <br />
          <br />
          Whether you need guidance on digital transformation, enhancing IT infrastructure, or adopting innovative tools, we provide expert advice and actionable strategies to help your business thrive. By focusing on future-proof technologies and aligning IT with business goals, Crown Excel empowers you to achieve sustainable growth and a competitive edge.


        </p>
      </div>
      <div className="networking-right ">
        <Image alt='' src={NetworkingSmartImage} width={602} height={408} className='md:w-[400px] md:h-[358px] lg:w-[602px] lg:h-[408px]'/>
      </div>
    </div>
  )
}

export default ITSmart
