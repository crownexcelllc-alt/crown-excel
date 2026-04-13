import React from 'react'
import Meeting1 from '../../../Components/Images/meeting1.png'
import Meeting2 from '../../../Components/Images/meeting2.png'
import Meeting3 from '../../../Components/Images/meeting3.png'
import DotsBg from '../../../Components/Images/dots-bg.svg' // Add a dots background image in your images folder
import Image from 'next/image'

const occasions = [
  {
    id: 1,
    heading: 'Social Meeting',
    description: 'At Crown Excel, we bring teams and clients together through engaging social gatherings that strengthen relationships and foster meaningful connections.',
    image: Meeting1,
  },
  {
    id: 2,
    heading: 'Annual Awards Meeting',
    description: 'We celebrate excellence and recognize outstanding achievements at our annual awards ceremony, honoring the dedication and hard work of the Crown Excel family.',
    image: Meeting2,
  },
  {
    id: 3,
    heading: 'Global Exhibitions',
    description: 'Crown Excel proudly participates in global exhibitions and trade shows, showcasing innovative IT solutions and building partnerships across the world.',
    image: Meeting3,
  }
]

const Occasions = () => {
  return (
    <div className="w-full flex flex-col items-center pt-12 mb-10">
      <h2 className="text-[25px] lg:text-[47px] font-[600] text-black text-center font-sans leading-[30px] lg:leading-[47px] font-montserrat mb-8">
        Transforming Occasions <br /> into Great Memories
      </h2>
      <div className={`grid gap-6 md:gap-3 w-full max-w-7xl px-6 md:px-35 ${occasions.length === 1 ? 'grid-cols-1' : occasions.length === 2 ? 'grid-cols-1 md:grid-cols-1 lg:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
        {occasions.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#e2edeb] p-3 rounded-[20px] relative flex flex-col w-full"
            style={{
              fontFamily: "__aeonik_3f9d62, __aeonik_Fallback_3f9d62, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
              fontSize: 16,
              fontWeight: 400,
              lineHeight: "24px",
              color: "#000",
              minHeight: 356,
              boxSizing: "border-box",
              borderRadius: 20,
              transition: "all .3s",
              outline: "none",
              boxShadow: "none",
              margin: "0"
            }}
          >
            {/* Dots background and centered main image */}
            <div className="relative z-10 flex items-center justify-center" style={{ height: 190, marginTop: 0, marginBottom: 0 }}>
              {/* Dots background */}
              <div className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center">
                <Image
                  src={DotsBg}
                  alt="dots background"
                  fill
                  className="object-cover"
                  style={{ borderRadius: 20 }}
                />
              </div>
              {/* Centered main image */}
              <div className="relative flex items-center justify-center w-[220px] h-[120px] mb-4">
                <Image
                  src={item.image}
                  alt={item.heading}
                  width={180}
                  height={180}
                  className="object-contain rounded-2xl"
                />
              </div>
            </div>
            {/* Text content */}
            <div className="relative z-10 bg-transparent px-2 pb-2 flex-1 flex flex-col">
              <h3
                style={{ fontFamily: "__aeonik_3f9d62, sans-serif" }}
                className="text-[22px] font-bold text-black mb-2 font-montserrat"
              >
                {item.heading}
              </h3>
              <p className="text-base text-black">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Occasions
