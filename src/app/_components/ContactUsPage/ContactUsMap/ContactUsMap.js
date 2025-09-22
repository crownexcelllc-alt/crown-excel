'use client'
import React from 'react'

const ContactUsMap = () => {
  return (
    <div className="w-full mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Office - Al Jahra Building */}
        <div className="w-full">
          <h3 className="text-sm font-semibold text-[#084032] mb-3">Dubai Main Office</h3>
          <div className="w-full h-[250px] sm:h-[300px]">
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
        </div>

        {/* Branch Office - Admiral Plaza */}
        <div className="w-full">
          <h3 className="text-sm font-semibold text-[#084032] mb-3">Dubai Branch - Admiral Plaza</h3>
          <div className="w-full h-[250px] sm:h-[300px]">
            <iframe
              src="https://maps.google.com/maps?q=Admiral%20Plaza%2C%20Building%20716%2C%20Al%20Nahda%20-%20Dubai&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near"
              title="Admiral Plaza, Building 716, Al Nahda - Dubai"
              aria-label="Admiral Plaza, Building 716, Al Nahda - Dubai"
              className="w-full h-full rounded-lg shadow-xl border border-gray-300"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Third Location - Deira Office */}
        <div className="w-full">
          <h3 className="text-sm font-semibold text-[#084032] mb-3">Dubai Branch - Deira</h3>
          <div className="w-full h-[250px] sm:h-[300px]">
            <iframe
              src="https://maps.google.com/maps?q=Deira%20City%20Centre%2C%20Port%20Saeed%20-%20Dubai&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near"
              title="Deira City Centre, Port Saeed - Dubai"
              aria-label="Deira City Centre, Port Saeed - Dubai"
              className="w-full h-full rounded-lg shadow-xl border border-gray-300"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUsMap
