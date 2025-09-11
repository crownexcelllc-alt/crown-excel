import React from 'react'
import GreenPart from '../../../../../Components/Images/leftgreenpart.png'
import Image from 'next/image'
import Laptop from '../../../../../Components/Images/UnleashLaptop.png'
const UnleashPower = () => {
  return (
    <div className='  flex relative items-center  mt-0 lg:mt-0 justify-between h-[450px] lg:h-[650px] w-full px-10'>
      <div className="unleash-left absolute left-0 lg:left-20  lg:-top-10">
        <Image alt='' width={200} height={100} src={GreenPart} className='w-[80px] md:w-[175px] lg:w-[200px] '/>
      </div>
      <div className="unleash-center  flex flex-col h-full w-full items-center justify-center z-10">
        <div className="heading text-center">
            <h1 className='text-[20px] md:text-[24px] leading-[40px] lg:text-[40px] font-[700] font-montserrat lg:leading-[60px] text-black'>UNLEASH POWER, PORTABILITY AND <br className='hidden lg:block'/> PERFORMANCE IN ONE LAPTOP</h1>
        </div>
        <div className="image mt-5 md:my-20 lg:mt-10">
            <Image alt='' height={400} width={800} src={Laptop} className='lg:w-[800px] lg:h-[400px] md:w-[600px] w-[300px]'/>
        </div>
      </div>
      <div className="unleash-right  absolute right-0 md:right-10 lg:right-20 bottom-10 md:bottom-0 lg:-bottom-5 ">
        <Image alt='' width={200} height={100} src={GreenPart} className='w-[80px] md:w-[175px] lg:w-[200px] '/>
      </div>
    </div>
  )
}

export default UnleashPower
