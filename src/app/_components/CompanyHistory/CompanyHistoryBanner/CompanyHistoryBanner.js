'use client'
import React from 'react'
import Background from '../../../../Components/Images/meeting2.png'

const CompanyHistoryBanner = () => {
  return (
    <div
      className="relative w-full h-[300px]"
      style={{
        backgroundImage: `url(${Background.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
        borderRadius: '0px 0px 100px 0px'
      }}
    >
      <div className="absolute top-0 left-0 h-full w-200  opacity-90 z-10 px-20 py-20 flex flex-col gap-2" style={{backgroundImage: 'linear-gradient(87deg, #2D2D2D 35%, #147D61 100%)', borderRadius: '0px 0px 100px 0px'}}>
        <h1 className='font-jakarta text-[42px]  font-[700]'>Company History</h1>
        <p className='font-montserrat font-[100] text-[16px]  leading-[25px] '>Founded in 2009, Crown Excel began as a small family-run business with big dreams. What started as a modest venture has grown into one of the UAE’s most trusted wholesale and retail providers of tech products and services, all while staying true to our founding values.</p>
      </div>
    </div>
  )
}

export default CompanyHistoryBanner
