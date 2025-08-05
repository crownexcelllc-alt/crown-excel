"use client"
import React from 'react'
// import CompnayHistoryCards from '../CompnayHistoryCards/CompnayHistoryCards'

const CompanyHistoryYears = () => {
  // const cards = [
  //   { year: '1970', title: '1st Branch - Deira Murshid Bazar' },
  //   { year: '2007', title: 'Opened Our Bur Dubai Branch' },
  //   { year: '2008', title: 'Opened Our Diera City Center Branch' },
  //   { year: '2008', title: 'Major Break-through Dubai Mall' },
  //   { year: '2010', title: 'DSES Membership Achieved' },
  //   { year: '2010', title: 'ISO 9001:2008 Certified Company' },
  //   { year: '2014', title: 'SKEA Award' },
  //   { year: '2020', title: '50th Anniversary' },
  //   { year: '2022', title: 'Dubai Quality Appreciation Award' },
  //   { year: '2024', title: 'Acquired Al Ghurair International Exchange' },
  // ]

  const milestones = [
    { year: "2009", title: "Foundation", description: "Crown Excel Family established with a vision of excellence" },
    { year: "2012", title: "Expansion", description: "First major expansion across UAE regions" },
    { year: "2015", title: "Innovation", description: "Introduction of modern financial services" },
    { year: "2018", title: "Recognition", description: "Awarded Best Family Business in UAE" },
    { year: "2022", title: "Digital Transformation", description: "Complete digital transformation journey" },
    { year: "2024", title: "Future Ready", description: "Leading the future of financial services" }
  ];

  return (
       <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#16806b] font-montserrat mb-4">
                Our Journey
              </h2>
              <div className="w-16 h-1 bg-[#61ce70] mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-[#16806b] to-[#084032] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white font-montserrat">{milestone.year}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#16806b] font-montserrat mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 font-muli text-sm">
                    {milestone.description}
                  </p>
                </div>
              ))}
            </div>
          </div> 
    // <div className="relative bg-gray-50">
    //   {/* Vertical line */}
    //   <div className="absolute left-1/2 top-0 h-full w-[2px] bg-green-600 transform -translate-x-1/2 z-0" />

    //   {/* Cards */}
    //   <div className="relative z-10">
    //     {cards.map((card, index) => (
    //       <div key={index} className="min-h-[50vh] flex py-20 ml-20">
    //         <CompnayHistoryCards
    //           index={index}
    //           year={card.year}
    //           title={card.title}
    //         />
    //       </div>
    //     ))}
    //   </div>
    // </div>
  )
}

export default CompanyHistoryYears
