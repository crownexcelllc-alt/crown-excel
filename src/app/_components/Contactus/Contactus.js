"use client"
import React, { useState } from 'react'
import UserImg from '../../../Components/Images/useranimated.jpg'
import Image from 'next/image'
import LottieAnimation from '../lootieanimation/animation'

const Contactus = () => {
  const services = [
    'Select Service',
    'RMA Facility',
    'IT Consultancy',
    'Managed IT',
    'Software AMC',
    'Hardware AMC',
    'Server Support',
    'Hardware Repair'
  ]
  const [service, setService] = useState('Select Service')
  return (
    <div className='contact-us h-[900px] lg:h-[700px] text-black flex flex-col items-center justify-center gap-10'>
      <div className="header text-center">
        <h1 className='text-[32px] lg:text-[47px] font-roboto font-bold'>Get In Touch</h1>
        <p className='text-[14px] lg:text-[24px] font-roboto'>Reach out to us, and we’ll be happy to assist you.</p>
      </div>
      <div className="contact-details flex flex-col lg:flex-row  items-center justify-between w-full px-[50px]">
        <div className="contact-details-left bg-[#f8f8f8] rounded shadow-2xl" style={{ padding: '20px 20px 20px 20px' }}>
          <form action="" className='flex flex-col items-center'>
            <div className="name-email flex items-center gap-5">
              <input className='border text-[13px] bg-white  text-[#8692ad] rounded w-[150px] lg:w-[250px] h-[50px] outline-0' type="text" placeholder='Name' style={{ padding: '14px 18px 14px 18px' }} />
              <input className='border text-[13px]  bg-white  text-[#8692ad] rounded w-[150px] lg:w-[250px] h-[50px]' type="email" placeholder='Email *' style={{ padding: '14px 18px 14px 18px' }} />
            </div>
            <div className="phone-subject flex items-center gap-5 mt-5">
              <input className='border text-[13px] bg-white  text-[#8692ad] rounded w-[150px] lg:w-[250px] h-[50px]' type="number" placeholder='Phone *' style={{ padding: '14px 18px 14px 18px' }} />
              <input className='border text-[13px]  bg-white  text-[#8692ad] rounded w-[150px] lg:w-[250px] h-[50px]' type="email" placeholder='Subject *' style={{ padding: '14px 18px 14px 18px' }} />
            </div>
            <select id="fruit" name="Select Service" placeholder="Select Service" className="border mt-5 text-[13px]  bg-white  text-[#8692ad] rounded w-full h-[50px] mt-5'"  style={{padding:'14px 18px 14px 18px'}}>
              {services.map((item, index) => (
                <option key={index} value='Select Service' className='border text-[13px] text-[#084032] w-[150px]  h-[50px] mt-5' style={{padding:'14px 18px 14px 18px'}}>
                  {item}
                </option>
              ))}
            </select>
            {/* <input list='Select Service' className='border text-[13px] text-[#084032] w-full h-[50px] mt-5' style={{padding:'14px 18px 14px 18px'}}/>
                <datalist>
                    {services.map((item,i)=>{
                        <option key={i} value="item"/>
                    })}
                </datalist> */}
            <textarea name="" id="" placeholder='Comments *' className='border text-[13px]  bg-white  text-[#8692ad] rounded  w-full h-[96px] mt-5' style={{ padding: '14px 18px 14px 18px' }}></textarea>
            <button className='bg-[#084032] mt-5 text-white rounded-[30px] text-[16px] font-bold h-[55px] w-full' style={{ padding: '14px 20px 14px 20px' }}>SUBMIT NOW</button>
          </form>
        </div>
        <div className="Contianer contact-details-right">
          <LottieAnimation/>
        </div>
      </div>
    </div>
  )
}

export default Contactus
