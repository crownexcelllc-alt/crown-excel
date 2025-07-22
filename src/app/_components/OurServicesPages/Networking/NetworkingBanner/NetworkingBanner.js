import React from 'react'
import BannerImage from '../../../../../Components/Images/networkingbanner.png'
import icon1 from '../../../../../Components/Images/networkingbannericon.png'
import icon2 from '../../../../../Components/Images/networkingbannericon2.png'
import Image from 'next/image'
const NetworkingBanner = () => {
  return (
    <div className='networking px-10 flex flex-col gap-20 md:gap-0 lg:gap-0 md:flex-row lg:flex-row items-center justify-center h-[550px] bg-[#031d26]'>
      <div className="networking-left relative md:w-full lg:w-[602px]">
        <Image alt='' src={icon1} width={50} height={50} className='left-50 md:left-30 lg:left-50 -top-15 absolute'/>
        <h1 className='text-[40px] md:text-[76px] lg:text-[76px] font-[600] leading-[50px] md:leading-[76px] lg:leading-[76px] text-center font-montserrat'>Networking <br className='block md:hidden  lg:hidden'/> Solutions</h1>
        <Image alt='' src={icon2} width={50} height={50} className='md:right-30 right-50 -bottom-15 absolute'/>
      </div>
      <div className="networking-right ">
        <Image alt='' src={BannerImage} width={602} height={336} className='w-full h-[200px] md:h-[336px] lg:h-[336px]'/>
      </div>
    </div>
  )
}

export default NetworkingBanner
