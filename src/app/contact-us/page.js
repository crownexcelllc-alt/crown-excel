import React from 'react'
import ContactUsPageBanner from '../_components/ContactUsPage/ContactUsPageBanner/ContactUsPageBanner'
import ContactUsFindUs from '../_components/ContactUsPage/ContactUsFindUs/ContactUsFindUs'
import ContactUsForm from '../_components/ContactUsPage/ContactUsForm/ContactUsForm'
import ContactUsMap from '../_components/ContactUsPage/ContactUsMap/ContactUsMap'

const ContactUs = () => {
  return (
    <div>
      <ContactUsPageBanner/>
      <ContactUsFindUs/>
       <div className="header text-center">
        <h1 className='text-[32px] text-black -mt-8 -mb-20 lg:text-[32px] font-montserrat font-[600]'>Get a Quote</h1>
        {/* <p className='text-[14px] lg:text-[24px] font-roboto'>Reach out to us, and we’ll be happy to assist you.</p> */}
      </div>
      <ContactUsForm/>
      <ContactUsMap/>
    </div>
  )
}

export default ContactUs
