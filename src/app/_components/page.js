import React from 'react'
import SmartSolutions from './smartsolutions'
import TrustedPartner from './Trusted Partner/TrustedPartner'
import Services from './Services/Services'
import AllProducts from './AllProducts/AllProducts'
import Brands from './Brands/Brands'
import Occasions from './Occasions/Occasions'
import Testimonials from './Testimonials/Testimonials'
import Contactus from './Contactus/Contactus'
import Globe from './Globe/Globe'

function Page() {
  return (
    <div >
      <SmartSolutions/>
      <TrustedPartner/>
      <Services/>
      <AllProducts/>
      <Brands/>
      <Occasions/>
      <Testimonials/>
      <Contactus/>
      <Globe/>
    </div>
  )
}

export default Page
