import AboutTrusted from '@/app/_components/Aboutus/AboutTrusted/AboutTrusted'
import Business from '@/app/_components/Aboutus/Business/Business'
import Header from '@/app/_components/Aboutus/Header/Header'
import Testimonials from '@/app/_components/Testimonials/Testimonials'
import React from 'react'

function AboutUs() {
  return (
    <div>
        <Header/>
      <AboutTrusted/>
      <Business/>
      <Testimonials/>
    </div>
  )
}

export default AboutUs
