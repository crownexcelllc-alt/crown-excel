import React from 'react'
import ImgOne from '../../../Components/Images/trusted1.png'
import ImgTwo from '../../../Components/Images/trusted2.png'
import ImgThree from '../../../Components/Images/trusted3.png'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link'

const TrustedPartner = () => {
    return (
        <div>
            <div className="trusted-partner-large-screen hidden lg:flex  bg-[#cdc8ac] w-full  flex-col lg:flex-row items-center lg:items-start justify-center ">
            <div className="container  w-full flex flex-col lg:flex-row items-center  justify-center gap-8 " style={{ paddingBottom: '10px'}}>
                <div className="left-part text-black w-full lg:w-2/5 mb-8 lg:mb-0">
                    <h1 className="font-semibold font-roboto  text-[58px] sm:text-5xl lg:text-6xl leading-[58px] text-center lg:text-left">Your Trusted Partner for Premium Tech Solutions</h1>
                    <p className=" text-[16] font-montserrat leading-[27px] text-center lg:text-left" style={{marginTop: '20px'}}>Crown Excel delivers top-tier technology solutions for businesses and individuals, providing reliable hardware and IT services backed by over 15 years of excellence and 17,000 satisfied customers. From cutting-edge hardware to comprehensive IT solutions, we ensure top performance, innovation, and exceptional service. Our mission is to offer the latest technology at unbeatable rates, catering to all your business and personal needs. Whether you’re upgrading office systems or seeking expert IT services, Crown Excel is your trusted partner for quality, performance, and satisfaction.</p>
                </div>
                <div className="right-part relative w-full lg:w-3/5 flex flex-col gap-8">
                    <div className="right-top w-full mt-10">
                        <Image src={ImgOne} alt="Trusted Partner 1" className="rounded-[30px] w-[660px] h-[448px]  object-cover" width={640} height={448} />
                    </div>
                    <div className="right-bottom w-full flex flex-col sm:flex-row gap-6">
                        <div className="first-img w-full sm:w-1/2">
                            <Image src={ImgTwo} alt="Trusted Partner 2" className="rounded-[30px] w-[322px] h-[217px]  object-cover " width={322} height={217} />
                        </div>
                        <div className="second-img w-full sm:w-1/2 mt-6 sm:mt-0">
                            <Image src={ImgThree} alt="Trusted Partner 3" className="rounded-[30px] w-[322px] h-[217px]  object-cover" width={322} height={217} />
                        </div>
                    </div>
                    <Link href={'/company/about-us'}>
                    <div className="arrow-icon hidden md:flex absolute bg-[#084032] w-20 h-20 rounded-full items-center justify-center text-white text-4xl cursor-pointer top-105 left-75 z-10 transition-all duration-300">
                        <FaArrowRight />
                    </div>
                    </Link>
                </div>
            </div>
        </div>
        <div className="small-screen lg:hidden flex flex-col w-full md:items-center bg-[#f9f5de] text-black">
            <div className="small-top flex items-end justify-between w-full gap-2" style={{padding: '20px'}}>
                <div className="sm-top-left flex flex-col gap-3 columns-1 w-[50%] md:mb-0">
                    <h1 className='text-[22px] md:text-[58px] font-bold leading-[22px] md:leading-[58px] font-roboto'>Your Trusted Partner for Premium Tech Solutions</h1>
                    <p className='text-[12px] md:text-[16px]  leading-[20px] font-montserrat'>With over 15 years of excellence and 17,000 satisfied customers, Crown Excel delivers top-tier technology solutions for both businesses and individuals.</p>
                </div>
                <div className="sm-top-right gap-3 flex flex-col columns-1 w-[50%]">
                    <Image className='w-[185px] h-[123px] md:w-full md:h-[300px] md:rounded-none rounded-[10px]' width={185} alt='' height={123} src={ImgOne}/>
                    <Image className='w-[185px] h-[123px] md:w-full md:h-[300px] md:rounded-none rounded-[10px]' width={185} alt='' height={123} src={ImgTwo}/>
                </div>
            </div>
            <div className="small-bottom" style={{padding: '0px 20px 20px 20px'}}>
                <p className='text-[12px] md:text-[16px]  leading-[20px] font-montserrat'>From premium laptops and gaming systems to cutting-edge hardware, we offer reliable, innovative products backed by exceptional service. Our mission is to provide the latest technology at unbeatable rates, ensuring top performance and value with every purchase.
                    <br />
                    <br />
                    Whether you’re upgrading office equipment or building a custom gaming rig, Crown Excel is your trusted partner for quality, performance, and satisfaction.
                </p>
            </div>
        </div>
        </div>
    )
}

export default TrustedPartner
