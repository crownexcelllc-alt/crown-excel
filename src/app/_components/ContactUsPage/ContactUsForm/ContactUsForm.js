"use client"
import React, { useState } from 'react'




const ContactUsForm = () => {
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
    <div className='contact-us h-[600px] lg:h-[600px] text-black flex flex-col items-center w-full justify-center gap-10'>
      {/* <div className="header text-center"> */}
        {/* <p className='text-[14px] lg:text-[24px] font-roboto'>Reach out to us, and we’ll be happy to assist you.</p> */}
      {/* </div> */}
      <div className="contact-details flex items-center justify-center w-full px-4">
        <div className="contact-details-left bg-[#f8f8f8] rounded-[10px]  w-full max-w-[800px]" style={{ padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <form action="" className='flex flex-col items-center w-full'>
            <div className="name-email flex items-center gap-5">
              <input className='border text-[13px] bg-white  text-[#8692ad] rounded w-full md:w-[375px] lg:w-[375px] h-[50px] outline-0' type="text" placeholder='Name' style={{ padding: '14px 18px 14px 18px' }} />
              <input className='border text-[13px]  bg-white  text-[#8692ad] rounded w-full md:w-[375px] lg:w-[375px] h-[50px]' type="email" placeholder='Email *' style={{ padding: '14px 18px 14px 18px' }} />
            </div>
            <div className="phone-subject flex items-center gap-5 mt-5">
              <input className='border text-[13px] bg-white  text-[#8692ad] rounded w-full md:w-[375px] lg:w-[375px] h-[50px]' type="number" placeholder='Phone *' style={{ padding: '14px 18px 14px 18px' }} />
              <input className='border text-[13px]  bg-white  text-[#8692ad] rounded w-full md:w-[375px] lg:w-[375px] h-[50px]' type="email" placeholder='Subject *' style={{ padding: '14px 18px 14px 18px' }} />
            </div>
            <select id="fruit" name="Select Service" placeholder="Select Service" className="border mt-5 text-[13px]  bg-white  text-[#8692ad] rounded w-full md:w-[770px] lg:w-[770px] h-[50px] mt-5'"  style={{padding:'14px 18px 14px 18px'}}>
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
            <textarea name="" id="" placeholder='Comments *' className='border text-[13px]  bg-white  text-[#8692ad] rounded  w-full md:w-[770px] lg:w-[770px] h-[96px] mt-5' style={{ padding: '14px 18px 14px 18px' }}></textarea>
            <button className='bg-[#084032] cursor-pointer mt-5 text-white rounded-[30px] text-[16px] font-bold h-[55px] w-full' style={{ padding: '14px 20px 14px 20px' }}>SUBMIT NOW</button>
          </form>
        </div>
        
      </div>
    </div>
  )
}

export default ContactUsForm
