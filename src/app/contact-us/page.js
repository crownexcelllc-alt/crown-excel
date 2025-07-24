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
      <ContactUsForm/>
      <ContactUsMap/>
    </div>
  )
}

export default ContactUs
