import React from 'react'
import BackgroundImage from '../../../../../Components/Images/ButtonBackground.png'
import Computers from '../../../../../Components/Images/unleaseprinting.png'
import Image from 'next/image'
const UnleasePrinters = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-auto md:px-3  px-5'>
      <div className="heading w-[full] h-auto lg:w-[1140px] lg:h-[150px] px-2 md:px-5 lg:px-10 flex items-center lg:justify-center" style={{backgroundImage: 'linear-gradient(126deg, #54595f 0%, #000000 100%)', borderRadius: '30px 0px 30px 0px', padding:'15px'}}>
        <h1 className='text-[14px] leading-[20px] md:text-[30px] lg:text-[48px] md:leading-[40px] lg:leading-[60px] font-[700] font-montserrat px-5 lg:px-10 text-center'>UNLEASH POWER AND PERFORMANCE IN ONE PRINTING SOLUTION</h1>
      </div>
      <div className="info flex md:flex-row lg:flex-row flex-col items-center  just-between w-full h-auto lg:h-[400px] mt-20" style={{borderRadius: '40px 0px 40px 0px'}}>
        <div className="info-left">
          <div className="heading px-5 py-2 rounded-[20px]" style={{background: 'linear-gradient(90deg, #ffd900 0%, #FFFFFF 31%)'}}>
            <h1 className='text-black text-[20px] leading-[25px] md:text-[40px] lg:text-[50px] font-[800] md:leading-[65px] lg:leading-[65px] tracking-[2px]'>GET MORE WITH <br className='hidden lg:block'/> EFFICIENT PRINTING SOLUTIONS</h1>
          </div>
          <p className='font-montserrat text-[#687799] mt-5 text-[16px] lg:text-[16px] leading-[27px]'>From compact home printers to high-performance office solutions, Crown Excel offers the <br className='hidden lg:block'/> perfect product for all your printing needs. Whether it’s for vibrant photos, detailed documents, <br className='hidden lg:block'/> or versatile multi-function capabilities, we provide the right printers to suit your lifestyle or <br className='hidden lg:block'/> business requirements.</p>
        </div>
        <div className="info-right relative mt-5 lg:mt-0 flex items-center justify-center">
          <div className="Background z-0">
            <Image alt='' src={BackgroundImage} width={600} height={600} className='md:w-[900px] lg:w-[600px]'/>
          </div>
          <div className="computer absolute lg:absolute z-10">
            <Image alt='' src={Computers} width={415} height={300} className='z-10 md:w-[800px] lg:w-[415px]' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UnleasePrinters
