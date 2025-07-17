import React from 'react'
import Background from '../../../../Components/Images/aboutheader.jpg'
const Header = () => {
  return (
    <div
      className="flex flex-col px-6 py-10 lg:py-8 lg:px-15 h-[250px] lg:h-[220px] relative text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(14,70,55,0.8), rgba(14,70,55,0.8)), url(${Background.src || Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}
    >
      <h1 className='text-white text-[40px] lg:text-[48px] font-montserrat font-[600]'>About Us</h1>
      <p className='text-white text-[12px] lg:text-[16px] leading-[20px] lg:leading-[27px] lg:w-[975px] font-montserrat'>At Crown Excel, we believe that our success is driven by the talent and passion of our team. We are always looking for br dedicated, innovative, and skilled professionals to join us in delivering cutting-edge IT solutions, hardware services, and software products that shape the future of businesses</p>
    </div>
  )
}

export default Header
