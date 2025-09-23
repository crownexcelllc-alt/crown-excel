'use client'
import React from 'react'

const ContactUsMap = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#084032] mb-4">Our Locations</h2>
          <p className="text-gray-600 text-lg">Visit us at any of our convenient locations across Dubai</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Office - Al Jahra Building */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-[#084032] mb-4 text-center">Head Office</h3>
              <div className="w-full h-[280px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.6956754923744!2d55.28818431500392!3d25.258956583904137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4392cf5b6cd9%3A0x710ae2921e482179!2sCrown%20Excel%20General%20Trading%20L.L.C!5e0!3m2!1sen!2sae!4v1695456789125!5m2!1sen!2sae"
                  title="Crown Excel General Trading L.L.C - Al Jahra Building, Dubai"
                  aria-label="Crown Excel General Trading L.L.C - Al Jahra Building, Dubai"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Branch Office - Admiral Plaza */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-[#084032] mb-4 text-center">Experience Centre </h3>
              <div className="w-full h-[280px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.3845315746543!2d55.28903431500394!3d25.260309283903773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43ba6913e913%3A0x904de2fef7d413ec!2sCROWN%20EXCEL%20(Experience%20Center)!5e0!3m2!1sen!2sae!4v1695456789123!5m2!1sen!2sae"
                  title="CROWN EXCEL Experience Center - Dubai"
                  aria-label="CROWN EXCEL Experience Center - Dubai"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Third Location - Deira Office */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-[#084032] mb-4 text-center">Branch 2</h3>
              <div className="w-full h-[280px] rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.387894572635!2d55.28934531500394!3d25.260183483903798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43326d8e4cc9%3A0x4d452917e7a19b6!2sCROWN%20EXCEL%20(branch%202)!5e0!3m2!1sen!2sae!4v1695456789124!5m2!1sen!2sae"
                    title="CROWN EXCEL Branch 2 - Dubai"
                    aria-label="CROWN EXCEL Branch 2 - Dubai"
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUsMap
