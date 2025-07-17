import React from 'react'
import Header from '../_components/Aboutus/Header/Header'
import AboutTrusted from '../_components/Aboutus/AboutTrusted/AboutTrusted'
import Business from '../_components/Aboutus/Business/Business'
import Testimonials from '../_components/Testimonials/Testimonials'

const page = () => {
  return (
    <div>
      <Header/>
      <AboutTrusted/>
      <Business/>
      <Testimonials/>
      {/* Add more components or content as needed */}
    </div>
  )
}

export default page
