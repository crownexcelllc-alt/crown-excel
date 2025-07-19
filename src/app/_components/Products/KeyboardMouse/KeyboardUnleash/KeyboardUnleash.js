import React from 'react'
import GreenPart from '../../../../../Components/Images/leftgreenpart.png'
import Image from 'next/image'
import Laptop from '../../../../../Components/Images/keyboardunleash.png'
const KeyboardUnleash = () => {
  return (
    <div className='  flex relative items-center  mt-0 lg:mt-10 justify-between h-[450px] lg:h-[850px] w-full px-10'>
      <div className="unleash-left absolute left-0 lg:left-10  lg:-top-10">
        <Image alt='' width={250} height={100} src={GreenPart} className='w-[80px] lg:w-[250px] '/>
      </div>
      <div className="unleash-center  flex flex-col h-full w-full items-center justify-center z-10">
        <div className="heading text-center">
            <h1 className='text-[24px] mb-10 leading-[30px] lg:text-[48px] font-[700] font-montserrat lg:leading-[60px] text-black'>UNLEASH CONTROL, COMFORT, <br className='hidden lg:block'/> AND CREATIVITY IN ONE: Ultimate <br className='hidden lg:block'/> Keyboards and Mice.</h1>
        </div>
        <div className="image mt-5 lg:mt-0">
            <Image alt='' height={513} width={912} src={Laptop} className='lg:w-[912px] lg:h-[513px] w-[300px]'/>
        </div>
      </div>
      <div className="unleash-right  absolute right-0 bottom-0 lg:-bottom-5 ">
        <Image alt='' width={250} height={100} src={GreenPart} className='w-[80px] lg:w-[250px] '/>
      </div>
    </div>
  )
}

export default KeyboardUnleash
