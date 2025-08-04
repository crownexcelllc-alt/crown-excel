'use client'
import React from 'react'
import Background from '../../../../Components/Images/aboutheader.jpg'
const FaqHeader = () => {
  return (
    <div
      className="flex flex-col px-6 py-10 lg:py-8 lg:px-15 h-[160px] lg:h-[160px] relative text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(14,70,55,0.8), rgba(14,70,55,0.8)), url(${Background.src || Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}
    >
      <h1 className='text-white text-[40px] lg:text-[48px] font-montserrat font-[600]'>FAQ&apos;S</h1>
      <p className='text-white text-[12px] lg:text-[16px] leading-[20px] lg:leading-[27px] lg:w-[975px] font-montserrat'>Frequently Asked Questions (FAQs) – Crown Excel</p>
    </div>
  )
}

export default FaqHeader
