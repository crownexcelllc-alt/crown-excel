"use client"
import React from 'react'
import CompnayHistoryCards from '../CompnayHistoryCards/CompnayHistoryCards'

const CompanyHistoryYears = () => {
  const cards = [
    { year: '1970', title: '1st Branch - Deira Murshid Bazar' },
    { year: '2007', title: 'Opened Our Bur Dubai Branch' },
    { year: '2008', title: 'Opened Our Diera City Center Branch' },
    { year: '2008', title: 'Major Break-through Dubai Mall' },
    { year: '2010', title: 'DSES Membership Achieved' },
    { year: '2010', title: 'ISO 9001:2008 Certified Company' },
    { year: '2014', title: 'SKEA Award' },
    { year: '2020', title: '50th Anniversary' },
    { year: '2022', title: 'Dubai Quality Appreciation Award' },
    { year: '2024', title: 'Acquired Al Ghurair International Exchange' },
  ]

  return (
    <div className="relative bg-gray-50">
      {/* Vertical line */}
      <div className="absolute left-1/2 top-0 h-full w-[2px] bg-green-600 transform -translate-x-1/2 z-0" />

      {/* Cards */}
      <div className="relative z-10">
        {cards.map((card, index) => (
          <div key={index} className="min-h-[50vh] flex  py-20 ml-20">
            <CompnayHistoryCards
              index={index}
              year={card.year}
              title={card.title}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CompanyHistoryYears
