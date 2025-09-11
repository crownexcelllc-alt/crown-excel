import React from 'react'
import YelloBckground from '../../../../../Components/Images/yellowbackground.png'
import Image from 'next/image'
const WhyBuyFromUsPrinters = () => {
  return (
    <div className='why-buy-from-us flex flex-col md:flex-row lg:flex-row lg:flex items-center gap-5 lg:gap-40 w-full h-auto lg:h-[700px] mt-20'>
      <div className="left-part w-full h-auto  md:h-[782px] md:w-[436px] lg:w-[518px] lg:h-[700px] bg-[#ffd900]">
        <Image alt='' src={YelloBckground} width={518} height={300}/>
        <div className="text-part w-full h-full  -mt-5 lg:mt-0 px-10 pt-0 pb-8 md:pt-[120px] md:pr-[82px] md:pb-[82px] md:pl-[82px] lg:pt-[120px] lg:pr-[82px] lg:pb-[82px] lg:pl-[82px] ">
            <h1 className='text-[30px] md:text-[50px] md:leading-[60px] leading-[30px] lg:text-[50px] w-[250px] lg:w-[354px] font-[600] lg:leading-[60px] text-black font-montserrat'>Why Buy <span className='text-[#118264]'>Printers </span> From <br /> Us?</h1>
            <p className='text-[#687799] mt-5 text-[16px] leading-[27px]'>Our printers are designed to provide exceptional performance for home, office, or creative tasks. Here’s why Crown Excel is your best choice for printers:</p>
        </div>
      </div>
      <div className="right-part flex flex-col items-center gap-5 px-3 lg:px-0">
        <div className="right-part-divs text-black p-[14px] w-full h-auto lg:w-[476px] lg:h-[147px]" >
            <h1 className='font-montserrat text-[22px] font-[600] leading-[26px]'>Top Brands</h1>
            <p className='text-[16px] leading-[27px] font-montserrat mt-5'>We provide desktop PCs from leading manufacturers like Dell, HP, Lenovo, and many others, promising peak quality and dependability.</p>
        </div>
        <div className="right-part-divs text-black p-[14px] w-full h-auto lg:w-[476px] lg:h-[147px]" >
            <h1 className='font-montserrat text-[22px] font-[600] leading-[26px]'>Latest Technology</h1>
            <p className='text-[16px] leading-[27px] font-montserrat mt-5'>Desktops have incorporated the latest in processors, high-capacity storage, and top-of-the-line graphics cards to ensure superb performance to clients.</p>
        </div>
        <div className="right-part-divs text-white rounded-[20px] p-[30px] w-full h-auto lg:w-[476px] lg:h-auto" style={{backgroundImage: 'linear-gradient(339deg, #084032 25%, #118264 52%)'}} >
            <h1 className='font-montserrat text-[22px] font-[600] leading-[26px]'>Customization & Upgrades</h1>
            <p className='text-[16px] leading-[27px] font-montserrat mt-5'>Need specific configurations? We can provide customization services so that the desktop PC is tailored specifically to your needs-whether business or game-related.</p>
        </div>
        <div className="right-part-divs text-black p-[14px] w-full h-auto lg:w-[476px] lg:h-[147px]" >
            <h1 className='font-montserrat text-[22px] font-[600] leading-[26px]'>Warranty & After-Sales Support</h1>
            <p className='text-[16px] leading-[27px] font-montserrat mt-5'>All our products carry warranties and offer technical support, which keeps your system up and running.</p>
        </div>
      </div>
    </div>
  )
}

export default WhyBuyFromUsPrinters
