import React from 'react'
import ComputingImage from '../../../../../Components/Images/heavycomputingimage.png'
import Image from 'next/image'
const HeavyComputing = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full h-auto px-1 mt-20'>
            <h1 className='text-[#147d61] text-[20px] md:text-[45px] lg:text-[45px] font-[700] font-monterrat text-center'>THE ULTIMATE SOLUTION FOR <br /> <span className='text-black bg-[#ffd900]' style={{ padding: '5px 15px 5px 15px' }}>HEAVY COMPUTING</span></h1>
            <div className="heavycomputing-bottom flex flex-col items-center justify-center w-full h-auto mt-10 md:mt-20 lg:mt-10">
                <div className="heavycomputing-bottom-divs flex flex-col md:flex-row lg:flex-row items-center justify-between w-full h-auto lg:h-[400px] px-2 lg:px-5 gap-30 lg:gap-50">
                    <div className="left-part text-white rounded-[20px] p-[20px] lg:p-[32px]" style={{ backgroundImage: 'linear-gradient(300deg, #084032 0%, #118264 60%)' }}>
                        <h1 className='text-[24px] lg:text-[28px] font-montserrat font-[600] leading-[25px] lg:leading-[33px]'>Exceptional Processing Power</h1>
                        <p className='mt-4 text-[14px] lg:text-[16px] font-montserrat leading-[27px]'>Unleash unparalleled speed with cutting-edge processors built for multitasking and high-performance tasks. Designed to handle demanding applications with efficiency and reliability.</p>
                    </div>
                    <div className="right-part -mt-20 text-black bg-[#e9e9e9]  rounded-[20px] p-[20px] lg:p-[32px]" >
                        <h1 className=' text-[24px] lg:text-[28px] font-montserrat font-[600] leading-[25px] lg:leading-[33px]'>Advance Graphics Capabilities</h1>
                        <p className='mt-4 text-[14px] lg:text-[16px] font-montserrat leading-[27px]'>Experience stunning visuals and superior rendering with state-of-the-art graphics technology. Ideal for gamers, creators, and professionals seeking immersive and detailed displays.</p>
                    </div>
                </div>
                <div className="heavycomputing-bottom-divs my-10">
                    <Image alt='' src={ComputingImage} width={602} height={204} className='lg:w-[602px] lg:h-[204px] md:w-[406px] md:h-[137px]'/>
                </div>
                <div className="heavycomputing-bottom-divs flex flex-col md:flex-row lg:flex-row items-center justify-between w-full h-auto lg:h-[400px] px-2 lg:px-5 gap-30 lg:gap-50 mt-0 md:mt-10 lg:mt-0">
                    <div className="right-part text-black bg-[#e9e9e9]  rounded-[20px] p-[20px] lg:p-[32px]" >
                        <h1 className='text-[24px] lg:text-[28px] font-montserrat font-[600] leading-[25px] lg:leading-[33px]'>Ample RAM and Storage</h1>
                        <p className='mt-4 text-[14px] lg:text-[16px] font-montserrat leading-[27px]'>Seamlessly multitask and store more with high-capacity drives and ample RAM. Optimized for speed, ensuring smooth and efficient performance for all tasks.</p>
                    </div>
                    <div className="left-part -mt-20 text-white rounded-[20px] p-[20px] lg:p-[32px]" style={{ backgroundImage: 'linear-gradient(300deg, #084032 0%, #118264 60%)' }}>
                        <h1 className='text-[24px] lg:text-[28px] font-montserrat font-[600] leading-[25px] lg:leading-[33px]'>Customizable and Scalable
                        </h1>
                        <p className='mt-4 text-[14px] lg:text-[16px] font-montserrat leading-[27px]'>Build your perfect system with customizable and upgradeable options. Future-proof your investment with scalable features tailored to your needs.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeavyComputing
