import React from 'react'
import Image from 'next/image'
import director from '@/Components/Images/director.png'

function DirectorMessage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Gradient Header */}
      {/* <div className="bg-gradient-to-r from-[#147D61] to-[#084032] py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-white text-3xl md:text-4xl font-bold text-center font-montserrat">
            Director's Message
          </h1>
        </div>
      </div> */}

      {/* Professional Header */}
      <div className="bg-gradient-to-r from-[#084032] to-[#16806b] py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white font-montserrat mb-4 tracking-tight">
              Director's Message
            </h1>
            <div className="w-24 h-1 bg-[#61ce70] mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Director's Profile Section */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Director's Image */}
              <div className="relative">
                <Image 
                  src={director} 
                  alt="Director's Photo" 
                  width={500}
                  height={600}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>

              {/* Director's Info */}
              <div className="p-8 md:p-12 bg-gradient-to-br from-gray-50 to-white">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#16806b] font-montserrat mb-6">
                    Director's Message
                  </h2>
                  
                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl text-[#084032] italic font-muli font-medium leading-relaxed mb-8 p-6 bg-white rounded-xl border-l-4 border-[#16806b] shadow-sm">
                    "Embrace challenges, envision opportunities, and build legacies"
                  </blockquote>

                  {/* Director Info */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#16806b] rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#16806b] font-montserrat">Director</h3>
                      <p className="text-[#084032] font-muli">Leela Megh Exchange</p>
                    </div>
                  </div>
                </div>
                
                {/* UI Icons Overlay */}
                {/* <div className="absolute top-4 right-4 space-y-3">
                  <div className="w-10 h-10 bg-[#16806b] rounded-full flex items-center justify-center shadow-lg hover:bg-[#147D61] transition-colors">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="w-10 h-10 bg-[#16806b] rounded-full flex items-center justify-center shadow-lg hover:bg-[#147D61] transition-colors">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="w-10 h-10 bg-[#16806b] rounded-full flex items-center justify-center shadow-lg hover:bg-[#147D61] transition-colors">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.97 4.97a.75.75 0 001.06 0l3-3a.75.75 0 00-1.06-1.06l-1.47 1.47-1.47-1.47a.75.75 0 00-1.06 1.06l3 3z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          {/* Message Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 mb-10">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#16806b] font-montserrat mb-4">
                  Our Journey & Vision
                </h3>
                <div className="w-16 h-1 bg-[#61ce70]"></div>
              </div>

              <div className="space-y-8 text-gray-700 font-muli leading-8">
                <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border-l-4 border-[#16806b]">
                  <p className="text-lg">
                    In the 1970s, the seeds of what would become "LM Exchange" were planted in the vibrant landscape of the UAE.
                    What began as a modest venture has evolved into a trusted financial service provider, serving the diverse needs
                    of our community with unwavering dedication. Our journey has been marked by a steadfast commitment to customer
                    satisfaction, particularly in the realms of remittances and foreign exchange, supported by a team of committed
                    and experienced professionals who understand the pulse of our market.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border-l-4 border-[#61ce70]">
                  <p className="text-lg">
                    As we look to the future, our aspirations extend beyond mere business growth. We aim to elevate the standards
                    of our industry, contributing meaningful value to all our stakeholders while prioritizing continuous improvements
                    in our products and processes. Our commitment to growth and excellence is matched only by our dedication to
                    acting as a socially responsible entity. We uphold the laws and regulations that govern our industry while
                    actively collaborating with organizations that promote best practices and social well-being.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border-l-4 border-[#16806b]">
                  <p className="text-lg">
                    Our success is built on the foundation of robust partnerships with world-class organizations and local bodies,
                    enabling us to provide value-added products and services that truly serve our customers' needs. At LM Exchange,
                    we understand that trust is earned through consistent delivery on our promises. We are committed to providing
                    a seamless, ethical experience for every customer who chooses to partner with us, ensuring that their financial
                    journey is not just secure, but also empowering.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border-l-4 border-[#61ce70]">
                  <p className="text-lg">
                    My personal journey has been one of transforming challenges into triumphs, a path that ultimately led to the
                    birth of "Leela Megh Exchange" in 1970. This institution was created with a clear purpose: to meet the diverse
                    financial needs of traders in Dubai, providing them with reliable, efficient, and innovative solutions. Our
                    story embodies the values of resilience, innovation, and the relentless pursuit of excellence – principles
                    that continue to guide us as we serve our community and contribute to the growth of our beloved UAE.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Footer */}
          {/* <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-6 bg-gradient-to-r from-[#084032] to-[#16806b] text-white px-10 py-6 rounded-full shadow-2xl">
              <div className="w-3 h-3 bg-[#61ce70] rounded-full"></div>
              <span className="text-xl font-montserrat font-bold">Leela Megh Exchange</span>
              <div className="w-3 h-3 bg-[#61ce70] rounded-full"></div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default DirectorMessage
