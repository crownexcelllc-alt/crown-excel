import React from 'react'
import Image from 'next/image'
// import director from '@/Components/Images/director.png'
import director from '@/Components/Images/director.jpg'

function DirectorMessage() {
  return (
    <div className="min-h-screen ">
      {/* Professional Header */}
      {/* <div className="py-8" style={{ background: 'linear-gradient(265deg,rgba(20, 121, 101, 1) 35%, rgba(9, 69, 54, 1) 82%)' }}>
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white font-montserrat mb-4 tracking-tight text-right">
            {` Director's Message`}
          </h1>
        </div>
      </div> */}
      <div className='flex flex-col items-center'>
        <div className="flex-shrink-0 relative mb-0">
          <Image
            src={director}
            alt="Director's Photo"
            width={320}
            height={220}
            className="h-auto object-cover w-[500px] max-h-[620px] rounded-xl mx-auto mt-5"
          />
          {/* lg:rounded-l-2xl */}
          <div className="absolute inset-0 rounded-xl"></div>
        </div>
        {/* Director's Message below the image */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
              <div className="flex flex-col">
                <div className="p-8 md:p-12 flex-1 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-5xl font-bold text-[#16806b] font-montserrat mb-4">
                    {` Director's Message`}
                  </h3>
                  <div className="w-16 h-1 bg-[#61ce70] mb-6"></div>
                  <div className="space-y-6 text-gray-700 font-muli leading-8">
                    <p className="text-xl font-semibold mb-2">
                      Together, let’s embrace technology and build a better tomorrow.
                    </p>
                    <p className="text-lg">
                      At Crown Excel General Trading LLC, our journey has always been guided by innovation, integrity, and an unwavering commitment to excellence. From our humble beginnings in 2009, in one of the world’s most vibrant and adaptable modern hubs, we embarked on our mission. Today, after two decades, we have grown into a trusted name in the market, it was never been easy or not by chance, but through a clear vision and relentless dedication to delivering value to our customers and partners and I believe if we do our best, we will surely get success by the grace of Allah.
                    </p>
                    <p className="text-lg">
                      I still remember the early days when we started with just a few products and limited experience. By the grace of the Almighty, today we proudly offer a wide range of products and services to meet the diverse needs of our customers and clients. Our mission goes far beyond products; we strive to build lasting relationships, provide tailored IT and business solutions, and contribute to the sustainable growth of the communities we serve. In today’s fast-paced and ever-changing world, adaptability is our strength, and customer satisfaction is our ultimate reward.
                    </p>
                    <p className="text-lg">
                      I believe in empowering our team, fostering a culture of trust, and embracing emerging technologies to stay ahead. As we look to the future, we will continue to expand our horizons, explore new markets, and enhance our services to meet the evolving needs of our clients.
                    </p>
                    <p className="text-lg">
                      Together, with the dedication of our people and the trust of our partners, we will not just keep pace with change — we will lead it.
                    </p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="font-bold text-[#16806b] text-lg mb-1">Muhammad Qais</p>
                    <p className="font-semibold text-gray-700">Managing Director & CEO</p>
                    <p className="text-gray-700">Crown Excel General Trading LLC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DirectorMessage;