import React from 'react'
import ContactUsPageBanner from '../_components/ContactUsPage/ContactUsPageBanner/ContactUsPageBanner'
import ContactUsFindUs from '../_components/ContactUsPage/ContactUsFindUs/ContactUsFindUs'
import ContactUsForm from '../_components/ContactUsPage/ContactUsForm/ContactUsForm'
import ContactUsMap from '../_components/ContactUsPage/ContactUsMap/ContactUsMap'

const ContactUs = () => {
  return (
    <div>
      <ContactUsPageBanner/>
       <div className="header text-center">
        <h1 className='text-[32px] text-black mt-5 lg:text-[32px] font-montserrat font-[600]'>Contact us</h1>
        {/* <p className='text-[14px] lg:text-[24px] font-roboto'>Reach out to us, and we’ll be happy to assist you.</p> */}
      </div>
      <ContactUsForm/>
      {/* <ContactUsFindUs/> */}
      <ContactUsMap/>
    </div>
  )
}

export default ContactUs
