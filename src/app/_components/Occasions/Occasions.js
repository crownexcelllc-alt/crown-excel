import React from 'react'
import Meeting1 from '../../../Components/Images/meeting1.png'
import Meeting2 from '../../../Components/Images/meeting2.png'
import Meeting3 from '../../../Components/Images/meeting3.png'
import DotsBg from '../../../Components/Images/dots-bg.svg' // Add a dots background image in your images folder
import Image from 'next/image'

const occasions = [
  {
    id: 1,
    heading: 'Extend credit up to 90 days',
    description: 'Offer credit terms over Comfi and get paid upfront. It’s the end of cash flow problems.',
    image: Meeting1,
  },
  {
    id: 2,
    heading: 'Boost sales',
    description: 'Drive loyalty and higher order values by unlocking payment flexibility for your buyers from Day 1.',
    image: Meeting2,
  },
  {
    id: 3,
    heading: 'Reduced outstanding',
    description: "Don't rely on your customers remembering to pay on time. Save all those hours chasing late payments.",
    image: Meeting3,
  }
]

const Occasions = () => {
  return (
    <div className="w-full flex flex-col items-center pt-12 mb-10">
      <h1 className="text-[25px] lg:text-[47px] font-[600] text-black text-center font-sans leading-[30px] lg:leading-[47px] font-montserrat mb-8">
        Transforming Occasions <br /> into Great Memories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl px-20">
        {occasions.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#e2edeb] p-3 rounded-[20px] relative flex flex-col"
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
            }}
          >
            {/* Dots background */}
            <div className="absolute left-0 right-0 top-0 h-[217px] z-0 pointer-events-none">
              <Image
                src={DotsBg}
                alt="dots background"
                fill
                className="object-cover"
                style={{ opacity: 0.5, borderRadius: 20 }}
                priority
              />
            </div>
            {/* Centered main image over dots */}
            <div className="relative flex items-center justify-center z-10" style={{ marginTop: 40, marginBottom: 24 }}>
              <div className=" rounded-xl shadow flex items-center justify-center w-[220px] h-[120px] mb-4">
                <Image
                  src={item.image}
                  alt={item.heading}
                  width={220}
                  height={220}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            {/* Text content */}
            <div className="relative z-10 bg-transparent px-2 pb-2 flex-1 flex flex-col">
              <h2
                style={{ fontFamily: "__aeonik_3f9d62, sans-serif" }}
                className="text-[24px] font-bold text-black mb-2 font-montserrat"
              >
                {item.heading}
              </h2>
              <p className="text-base text-black">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Occasions












































// import React from 'react'
// import Meeting1 from '../../../Components/Images/meeting1.png'
// import Meeting2 from '../../../Components/Images/meeting2.png'
// import Meeting3 from '../../../Components/Images/meeting3.png'
// import Meeting4 from '../../../Components/Images/meeting4.png'
// import Image from 'next/image'

// const occasions = [
//   {
//     id: 1,
//     title: 'Crown Instacar Buyers Meet',
//     category: 'Automotive',
//     date: 'Oct 16, 2024',
//     image: Meeting1,
//     description: 'Crown Excel and Instacar empowering UAE car dealers with innovative finance and seamless business solutions.',
//     link: '#'
//   },
//   {
//     id: 2,
//     title: 'Crown RF Technologies Expo',
//     category: 'Electronics',
//     date: 'Oct 16, 2024',
//     image: Meeting2,
//     description: 'Crown Excel and RF Technologies driving growth in UAE electronics with smart sales and risk-free partnerships.',
//     link: '#'
//   },
//   {
//     id: 3,
//     title: 'Crown Business Networking',
//     category: 'Business',
//     date: 'Oct 16, 2024',
//     image: Meeting3,
//     description: 'Connecting leaders and partners for future-ready business strategies and collaborative growth with Crown Excel.',
//     link: '#'
//   },
//   {
//     id: 4,
//     title: 'Crown Annual Gathering',
//     category: 'Corporate',
//     date: 'Oct 16, 2024',
//     image: Meeting4,
//     description: 'Celebrating achievements, teamwork, and the Crown Excel family spirit at our annual corporate event.',
//     link: '#'
//   }
// ]

// const Occasions = () => {
//   return (
//     <div className="w-full flex flex-col items-center pt-12 mb-10">
//       <h1 className="text-[25px] lg:text-[47px] font-[600] text-black text-center font-sans leading-[30px] lg:leading-[47px] font-montserrat mb-8">
//         Transforming Occasions <br /> into Great Memories
//       </h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl px-4">
//         {occasions.map((item) => (
//           <div
//             key={item.id}
//             className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl"
//           >
//             <div className="relative h-56 w-full overflow-hidden">
//               <Image
//                 src={item.image}
//                 alt={item.title}
//                 fill
//                 className="object-cover transition-transform duration-500 group-hover:scale-105"
//                 priority
//               />
//               <div className="absolute top-4 left-4 bg-white/90 px-4 py-2 rounded-xl text-lg font-bold text-black shadow">
//                 {item.title}
//               </div>
//             </div>
//             <div className="p-6 flex-1 flex flex-col">
//               <div className="flex items-center gap-3 mb-2">
//                 <span className="bg-[#61ce70]/20 text-[#16806b] px-3 py-1 rounded-full text-xs font-semibold">
//                   {item.category}
//                 </span>
//                 <span className="text-gray-400 text-xs">{item.date}</span>
//               </div>
//               <h3 className="text-xl font-bold text-[#222] mb-2 font-montserrat">{item.description}</h3>
//               <a
//                 href={item.link}
//                 className="mt-auto text-[#16806b] font-semibold flex items-center gap-1 hover:underline transition-colors"
//               >
//                 Read case study <span aria-hidden>→</span>
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Occasions


























// // import React from 'react'
// // import Meeting1 from '../../../Components/Images/meeting1.png'
// // import Meeting2 from '../../../Components/Images/meeting2.png'
// // import Meeting3 from '../../../Components/Images/meeting3.png'
// // import Meeting4 from '../../../Components/Images/meeting4.png'
// // import Image from 'next/image'

// // const Occasions = () => {
// //   return (
// //     <div className='occasion lg:h-[500px] w-full flex flex-col items-center pt-[50px] gap-5 mb-10 lg:gap-15'>
// //       <h1 className='text-[25px] lg:text-[47px] font-[600] text-black text-center font-sans leading-[30px] lg:leading-[47px] font-montserrat'>Transforming Occasions <br /> into Great Memories</h1>
// //       <div className="meeting grid grid-cols-2 lg:flex md:flex px-3 w-full gap-2 lg:gap-5 items-center justify-center">
// //         <Image className='rounded-[30px] md:-mt-10 lg:-mt-10 md:w-[174px] md:h-[120px] lg:w-[265px] lg:h-[183px]' src={Meeting1} width={265} height={183} alt=''/>
// //         <Image className='rounded-[30px] md:mt-10 lg:mt-10 md:w-[174px] md:h-[120px] lg:w-[265px] lg:h-[183px]' src={Meeting2} width={265} height={183} alt=''/>
// //         <Image className='rounded-[30px] md:-mt-10 lg:-mt-10 md:w-[174px] md:h-[120px] lg:w-[265px] lg:h-[183px]' src={Meeting3} width={265} height={183} alt=''/>
// //         <Image className='rounded-[30px] md:mt-10 lg:mt-10 md:w-[174px] md:h-[120px] lg:w-[265px] lg:h-[183px]' src={Meeting4} width={265} height={183} alt=''/>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Occasions
