import React from 'react'
import YelloBckground from '../../../../../Components/Images/yellowbackground.png'
import Image from 'next/image'
const WhyBuyFromUs = () => {
  return (
    <div className='why-buy-from-us hidden flex-col lg:flex-row lg:flex items-center gap-40 w-full h-auto lg:h-[700px] mt-20'>
      <div className="left-part w-full lg:w-[518px] h-[700px] bg-[#ffd900]">
        <Image alt='' src={YelloBckground} width={518}/>
        <div className="text-part w-full h-full" style={{ padding: '120px 82px 82px 82px' }}>
            <h1 className='text-[50px] w-[354px] font-[600] leading-[60px] text-black font-montserrat'>Why Buy <span className='text-[#118264]'>Desktops</span> From <br /> Us?</h1>
            <p className='text-black mt-5 text-[16px] leading-[27px]'>Our desktop PCs are built to provide good performance for work, gaming, or personal purposes. Here’s why Crown Excel is your best bet for desktops:</p>
        </div>
      </div>
      <div className="right-part flex flex-col items-center gap-5">
        <div className="right-part-divs text-black p-[14px] w-[476px] h-[147px]" >
            <h1 className='font-montserrat text-[22px] font-[600] leading-[26px]'>Top Brands</h1>
            <p className='text-[16px] leading-[27px] font-montserrat mt-5'>We provide desktop PCs from leading manufacturers like Dell, HP, Lenovo, and many others, promising peak quality and dependability.</p>
        </div>
        <div className="right-part-divs text-black p-[14px] w-[476px] h-[147px]" >
            <h1 className='font-montserrat text-[22px] font-[600] leading-[26px]'>Latest Technology</h1>
            <p className='text-[16px] leading-[27px] font-montserrat mt-5'>Desktops have incorporated the latest in processors, high-capacity storage, and top-of-the line graphics cards to ensure superb performance to clients.</p>
        </div>
        <div className="right-part-divs text-white rounded-[20px] p-[30px] w-[476px] h-[206px]" style={{backgroundImage: 'linear-gradient(339deg, #084032 25%, #118264 52%)'}} >
            <h1 className='font-montserrat text-[22px] font-[600] leading-[26px]'>Customization & Upgrades</h1>
            <p className='text-[16px] leading-[27px] font-montserrat mt-5'>Does it need certain configurations? We can provide customization services so that the desktop PC is tailored specifically to your needs-whether business or game-related.</p>
        </div>
        <div className="right-part-divs text-black p-[14px] w-[476px] h-[147px]" >
            <h1 className='font-montserrat text-[22px] font-[600] leading-[26px]'>Warranty & After-Sales Support</h1>
            <p className='text-[16px] leading-[27px] font-montserrat mt-5'>All our products carry warranties and offer technical support, which keeps your system up and running.</p>
        </div>
      </div>
    </div>
  )
}

export default WhyBuyFromUs
