
import React from 'react'
import DesktopImage1 from '../../../../../Components/Images/DesktopBanner1.png'
import DesktopImage2 from '../../../../../Components/Images/DesktopBanner2.png'
import Image from 'next/image'
import Stars from '../../../../../Components/Images/stars.png'
const DesktopBanner = () => {
  return (
    <div >
      <div
        className="hidden md:flex lg:flex items-center justify-between w-full h-[180px] lg:h-[500px] md:h-[350px] px-3 md:px-10 relative"
        style={{
          background: 'linear-gradient(87deg, #2D2D2D 35%, #147D61 100%)',
        }}
      >
        {/* Left Laptop Image */}
        <div className="laptop-banner-left flex-1 flex justify-start items-end">
          <Image src={DesktopImage1} width={291} height={352} alt="Laptop 1" className="object-contain drop-shadow-2xl md:-mb-8 md:w-[150px] md:h-[200px] lg:w-[250px] lg:h-[352px] " />
        </div>
        {/* Center Content */}
        <div className="laptop-banner-center z-10 absolute left-50 right-50 flex-1 flex flex-col items-center justify-center text-center px-2 md:px-8">
          <div className="flex justify-center gap-2 mb-2">
            <Image src={Stars} width={94} height={100} alt="Stars" className="lg:w-[94px] lg:h-[100px] md:w-[50px] md:left-10 md:-bottom-3 lg:left-20 lg:top-2  absolute" />
            <Image src={Stars} width={51} height={50} alt="Stars" className="md:right-10 md:top-1 lg:right-45 lg:top-2 absolute" />
          </div>
          <div className="text flex flex-col items-center mb-4">
            <h1 className="text-white font-montserrat w-[600px] font-extrabold sm:text-2xl md:text-[30px] lg:text-5xl leading-tight tracking-tight mb-0  " style={{ fontFamily: '' }}>DISCOVER TOP</h1>
            <h1 className='sm:text-2xl md:text-[30px] lg:text-5xl font-montserrat font-[900] text-[#147d61]'>DESKTOP BRANDS</h1>
            <h1 className="text-white font-montserrat w-[600px] font-extrabold sm:text-2xl md:text-[30px] lg:text-5xl leading-tight tracking-tight ">FOR EVERY NEED
            </h1>
          </div>
          <p className="text-gray-200 text-sm md:text-[16px] lg:text-lg font-medium max-w-xl mx-auto mb-2 md:mb-4">
            From an array of high-quality products, Crown Excel presents you with the best desktop PCs and their accessories from world-class manufacturers like Dell, HP, Lenovo, and many more.
          </p>
        </div>
        {/* Right Laptop Image */}
        <div className="laptop-banner-right flex-1 flex justify-end items-end">
          <Image src={DesktopImage2} width={291} height={352} alt="Laptop 2" className="object-contain drop-shadow-2xl -mb-4 md:-mb-8 lg:w-[250px] lg:h-[352px] md:w-[150px] md:h-[200px  " />
        </div>
      </div>
      <div className="small-screen flex flex-col gap-20 py-20 items-center justify-center md:hidden lg:hidden h-auto w-full" style={{
        background: 'linear-gradient(87deg, #2D2D2D 35%, #147D61 100%)',
      }}>
        <Image alt='' src={DesktopImage1} width={250} height={200}/>
        <div className="top">
          <div className="laptop-banner-center ">
            {/* <div className="flex justify-center gap-2 mb-2">
              <Image src={Stars} width={50} height={50} alt="Stars" className="left-3 top-75  absolute" />
              <Image src={Stars} width={51} height={50} alt="Stars" className="right-10 top-50 absolute" />
            </div> */}
            <div className="text relative flex flex-col items-center mb-4 leading-tight">
              <Image src={Stars} width={20} height={50} alt="Stars" className="left-0 bottom-0  absolute" />
              <h1 className="text-white font-montserrat  font-[700] text-[40px] leading-tight tracking-tight mb-0  " style={{ fontFamily: '' }}>DISCOVER TOP</h1>
              <h1 className='text-[40px] font-montserrat font-[700] text-[#147d61]'>DESKTOP BRANDS</h1>
              <h1 className="text-white font-montserrat  font-[700] text-[40px] leading-tight tracking-tight ">FOR EVERY NEED
              </h1>
              <Image src={Stars} width={21} height={50} alt="Stars" className="right-0 -top-5 absolute" />
            </div>
            <p className="text-gray-200 text-[12px] text-center font-light">
              From an array of high-quality products, Crown Excel presents you with the best desktop PCs and their accessories from world-class manufacturers like Dell, HP, Lenovo, and many more.
            </p>
          </div>
        </div>
        
          
          <Image alt='' src={DesktopImage2} width={200} height={100}/>
        
      </div>
    </div>
  )
}

export default DesktopBanner
