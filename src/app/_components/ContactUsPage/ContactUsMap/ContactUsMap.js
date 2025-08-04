'use client'
import React from 'react'

const ContactUsMap = () => {
  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px] xl:h-[500px] mt-10">
      <iframe
        src="https://maps.google.com/maps?q=Al%20Jahra%20Building%2C%202nd%20floor%2C%2018th%20St%20-%20Al%20Raffa%C2%A0-%C2%A0Dubai&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near"
        title="Al Jahra Building, 2nd floor, 18th St - Al Raffa, Dubai"
        aria-label="Al Jahra Building, 2nd floor, 18th St - Al Raffa, Dubai"
        className="w-full h-full rounded-lg shadow-xl border border-gray-300"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}

export default ContactUsMap
