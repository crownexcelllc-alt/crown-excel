import React from 'react'
import BackgroundImage from '../../../../../Components/Images/ButtonBackground.png'
import Computers from '../../../../../Components/Images/routerunlease.png'
import Image from 'next/image'
const RoutersUnlease = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-auto md:px-3  px-5'>
      <div className="heading w-[full] h-auto lg:w-[1140px] lg:h-[150px] px-2 md:px-5 lg:px-10 flex items-center lg:justify-center" style={{backgroundImage: 'linear-gradient(126deg, #54595f 0%, #000000 100%)', borderRadius: '30px 0px 30px 0px', padding:'15px'}}>
        <h1 className='text-[14px] leading-[20px] md:text-[30px] lg:text-[48px] md:leading-[40px] lg:leading-[60px] font-[700] font-montserrat px-5 lg:px-10 text-center'>UNLEASE POWER AND PERFORMANCE IN ONE ROUTERS SOLUTIONS</h1>
      </div>
      <div className="info flex md:flex-row lg:flex-row flex-col items-center  just-between w-full h-auto lg:h-[400px] mt-20" style={{borderRadius: '40px 0px 40px 0px'}}>
        <div className="info-left">
          <div className="heading px-5 py-2 rounded-[20px]" style={{background: 'linear-gradient(90deg, #ffd900 0%, #FFFFFF 31%)'}}>
            <h1 className='text-black text-[20px] leading-[25px] md:text-[50px] lg:text-[50px] font-[800] md:leading-[65px] lg:leading-[65px] tracking-[2px]'>GET MORE WITH <br /> RELIABLE NETWORK SOLUTIONS</h1>
          </div>
          <p className='font-montserrat text-[#687799] mt-5 text-[16px] lg:text-[16px] leading-[27px]'>Unlock seamless connectivity and take your network performance to the next level with our <br /> advanced routers and access points. Designed for speed, coverage, and reliability, our solutions <br /> ensure smooth operations for homes, offices, and enterprises alike.</p>
        </div>
        <div className="info-right relative mt-5 lg:mt-0 flex items-center justify-center">
          <div className="Background z-0">
            <Image alt='' src={BackgroundImage} width={550} height={600}/>
          </div>
          <div className="computer absolute lg:absolute z-10">
            <Image alt='' src={Computers} width={415} height={300} className='z-10' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoutersUnlease
