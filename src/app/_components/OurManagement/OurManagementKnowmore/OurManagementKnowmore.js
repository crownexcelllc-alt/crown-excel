'use client'
import React, { useState } from 'react'
import ExploreMore from '../../../../Components/Images/ourmanagementknowmore.jpg'
import Image from 'next/image'
import Link from 'next/link'

const OurManagementKnowmore = () => {
    const [hovered, setHovered] = useState(false)

    return (
        <div className='bg-[#e5e0c8] lg:px-[50px] py-0'>
            <div className="div-containss p-[20px] flex flex-col md:flex-row items-center gap-10 lg:gap-30">
                <div className="div-imagee">
                    <Image
                        alt=''
                        src={ExploreMore}
                        width={432}
                        height={496.4}
                        className='w-full md:w-[330px] md:h-[380px] lg:w-[432px] h-[400px] lg:h-[496.4px]'
                    />
                </div>
                <div className="div-textss">
                    <p className='text-black font-montserrat text-[16px] leading-[27.2px]'>
                        At Crown Excel, we have in place an experienced management{' '}
                        <br className='hidden md:block' /> team dealing with domestic and international orders. We ensure{' '}
                        <br className='hidden md:block' /> that each project is dealt with utmost care and precision through{' '}
                        <br className='hidden md:block' /> proper corporate services together with thorough technical{' '}
                        <br className='hidden md:block' /> knowledge. Each of our leadership allows every member to focus{' '}
                        <br className='hidden md:block' /> on an inclusive atmosphere working seamlessly across{' '}
                        <br className='hidden md:block' /> departments to deliver exceptional results for every client.
                    </p>

                    {/* Animated Button */}
                    <Link href='/about-us'>
                        <button
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        onTouchStart={() => setHovered(true)}
                        onTouchEnd={() => setHovered(false)}
                        className="relative mt-5 cursor-pointer w-[150px] h-[46px] overflow-hidden bg-[#084032] rounded font-montserrat font-[600] text-white shadow-[0px_5px_15px_0px_#0D5C47]"
                    >
                        {/* Default text */}
                        <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${hovered ? 'translate-y-full' : 'translate-y-0'}`}>
                            Know More
                        </span>

                        {/* Hovered text */}
                        <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 bg-[#0D5C47] ${hovered ? 'translate-x-0' : '-translate-x-full'}`}>
                            Learn More
                        </span>
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default OurManagementKnowmore
