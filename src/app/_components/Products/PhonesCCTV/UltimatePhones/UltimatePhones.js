import React from 'react'
import ComputingImage from '../../../../../Components/Images/ultimatephones.png'
import Image from 'next/image'
const UltimatePhones = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full h-auto px-1 mt-20'>
            <h1 className='text-[#147d61] text-[20px] md:text-[45px] lg:text-[45px] font-[700] font-monterrat text-center'>THE ULTIMATE SOLUTION FOR <br /> <span className='text-black bg-[#ffd900]' style={{ padding: '5px 15px 5px 15px' }}>PHONES AND CCTV SYSTEMS</span></h1>
            <div className="heavycomputing-bottom flex flex-col items-center justify-center w-full h-auto mt-10 md:mt-20 lg:mt-10">
                <div className="heavycomputing-bottom-divs flex flex-col md:flex-row lg:flex-row items-center justify-between w-full h-auto lg:h-[400px] px-2 lg:px-5 gap-30 lg:gap-50">
                    <div className="left-part text-white rounded-[20px] p-[20px] lg:p-[32px]" style={{ backgroundImage: 'linear-gradient(300deg, #084032 0%, #118264 60%)' }}>
                        <h1 className='text-[24px] lg:text-[28px] font-montserrat font-[600] leading-[25px] lg:leading-[33px]'>Exceptional Utility and Functionality</h1>
                        <p className='mt-4 text-[14px] lg:text-[16px] font-montserrat leading-[27px]'>Optimize your home or business with top-tier phones and CCTV systems. Designed to provide seamless communication and unparalleled security, our products combine user-friendly features with advanced technology to deliver reliability and efficiency in every setting.</p>
                    </div>
                    <div className="right-part -mt-20 text-black bg-[#e9e9e9]  rounded-[20px] p-[20px] lg:p-[32px]" >
                        <h1 className=' text-[24px] lg:text-[28px] font-montserrat font-[600] leading-[25px] lg:leading-[33px]'>Advanced Compatibility</h1>
                        <p className='mt-4 text-[14px] lg:text-[16px] font-montserrat leading-[27px]'>Experience effortless integration with our phones and CCTV systems, engineered for universal compatibility. Whether for professional environments or personal use, these devices ensure outstanding performance and flexibility, adapting to your unique needs.</p>
                    </div>
                </div>
                <div className="heavycomputing-bottom-divs my-20 md:my-1">
                    <Image alt='' src={ComputingImage} width={622} height={326} className='lg:w-[622px] rounded-[30px] lg:h-[326px] md:w-[406px] md:h-[137px]'/>
                </div>
                <div className="heavycomputing-bottom-divs flex flex-col md:flex-row lg:flex-row items-center justify-between w-full h-auto lg:h-[400px] px-2 lg:px-5 gap-30 lg:gap-50 mt-0 md:mt-10 lg:mt-0">
                    <div className="right-part text-black bg-[#e9e9e9]  rounded-[20px] p-[20px] lg:p-[32px]" >
                        <h1 className='text-[24px] lg:text-[28px] font-montserrat font-[600] leading-[25px] lg:leading-[33px]'>Enhanced Connectivity and Surveillance</h1>
                        <p className='mt-4 text-[14px] lg:text-[16px] font-montserrat leading-[27px]'>Upgrade your environment with accessories designed to enhance connectivity and security. From seamless phone integration tools to cutting-edge CCTV enhancements, these solutions ensure efficient communication and robust surveillance.</p>
                    </div>
                    <div className="left-part -mt-20 text-white rounded-[20px] p-[20px] lg:p-[32px]" style={{ backgroundImage: 'linear-gradient(300deg, #084032 0%, #118264 60%)' }}>
                        <h1 className='text-[24px] lg:text-[28px] font-montserrat font-[600] leading-[25px] lg:leading-[33px]'>Customizable and Dependable
                        </h1>
                        <p className='mt-4 text-[14px] lg:text-[16px] font-montserrat leading-[27px]'>Tailor your communication and security setup with accessories built to fit your specific needs. Enjoy reliable, durable options with customizable features to ensure flawless performance for phones and CCTV systems.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UltimatePhones
