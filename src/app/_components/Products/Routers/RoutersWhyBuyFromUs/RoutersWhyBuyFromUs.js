import React from 'react'
import YelloBckground from '../../../../../Components/Images/yellowbackground.png'
import Image from 'next/image'
const RoutersWhyBuyFromUs = () => {
  return (
    <div className='why-buy-from-us flex flex-col md:flex-row lg:flex-row lg:flex items-center gap-5 lg:gap-40 w-full h-auto lg:h-[700px] mt-20'>
      <div className="left-part w-full h-auto  md:h-[782px] md:w-[436px] lg:w-[518px] lg:h-[700px] bg-[#ffd900]">
        <Image alt='' src={YelloBckground} width={518} height={300}/>
        <div className="text-part w-full h-full  -mt-5 lg:mt-0 px-10 pt-0 pb-8 md:pt-[120px] md:pr-[82px] md:pb-[82px] md:pl-[82px] lg:pt-[120px] lg:pr-[82px] lg:pb-[82px] lg:pl-[82px] ">
            <h1 className='text-[30px] md:text-[50px] md:leading-[60px] leading-[30px] lg:text-[50px] w-[250px] lg:w-[354px] font-[600] lg:leading-[60px] text-black font-montserrat'>Why Buy <br /> <span className='text-[#118264]'>Routers & Access Points</span> <br /> Devices From Us?</h1>
            {/* <p className='text-[#687799] mt-5 text-[16px] leading-[27px]'>Our all-in-one devices are built to provide excellent performance for work, creative tasks, or personal use. Here’s why Crown Excel is your best bet for all-in-one systems:</p> */}
        </div>
      </div>
      <div className="right-part flex flex-col items-center gap-5 px-3 lg:px-0">
        <div className="right-part-divs text-black p-[14px] w-full h-auto lg:w-[476px] lg:h-[147px]" >
            <h1 className='font-montserrat text-[22px] font-[600] leading-[26px]'>Brands Availability</h1>
            <p className='text-[16px] leading-[27px] font-montserrat mt-5'>Explore top-tier networking brands offering advanced routers and access points, delivering superior performance and reliability for every space.</p>
        </div>
        <div className="right-part-divs text-black p-[14px] w-full h-auto lg:w-[476px] lg:h-[147px]" >
            <h1 className='font-montserrat text-[22px] font-[600] leading-[26px]'>Competitive Pricing</h1>
            <p className='text-[16px] leading-[27px] font-montserrat mt-5'>Get the best value for your investment with our competitively priced solutions without compromising on quality or performance.</p>
        </div>
        <div className="right-part-divs text-white rounded-[20px] p-[30px] w-full h-auto lg:w-[476px] lg:h-auto" style={{backgroundImage: 'linear-gradient(339deg, #084032 25%, #118264 52%)'}} >
            <h1 className='font-montserrat text-[22px] font-[600] leading-[26px]'>Warranty & Support</h1>
            <p className='text-[16px] leading-[27px] font-montserrat mt-5'>Enjoy peace of mind with comprehensive warranty coverage and expert support to keep your network running smoothly.</p>
        </div>
        <div className="right-part-divs text-black p-[14px] w-full h-auto lg:w-[476px] lg:h-[147px]" >
            <h1 className='font-montserrat text-[22px] font-[600] leading-[26px]'>Expert Guidance</h1>
            <p className='text-[16px] leading-[27px] font-montserrat mt-5'>Our team provides personalized recommendations to help you find the perfect networking solution tailored to your needs.</p>
        </div>
      </div>
    </div>
  )
}

export default RoutersWhyBuyFromUs
