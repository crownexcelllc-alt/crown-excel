"use client"
import CareerHeader from '@/app/_components/Career/Header/Header';
import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
const positions = [
  {
    sign: <FaPlus />,
    title: 'Virtual Assistant',
    description: 'We are hiring a Virtual Assistant for software configuration.',
    requirements: [
      '2 Years Experience',
      'Can speak Arabic and English',
      'Full Time Job',
    ],
  },
  {
    sign: <FaPlus />,
    title: 'Hardware Specialist',
    description: 'We are hiring a Hardware Specialist for IT support.',
    requirements: [
      '3 Years Experience',
      'Expert in hardware troubleshooting',
      'Full Time Job',
    ],
  },
];

const Career = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header Section */}
      <CareerHeader/>
      {/* Main Section */}
      <div className="flex flex-col lg:flex-row gap-5 lg:px-8 lg:py-12 w-full max-w-7xl mx-auto">
        {/* Positions Available */}
        <div className="flex-1 basis-[35%] bg-white rounded-lg p-6">
          <h2 className="text-[32px] font-bold text-black text-center mb-6 font-urbanist">Positions Available</h2>
          <div className="flex flex-col gap-0">
            {positions.map((pos, idx) => (
              <div key={idx} className="mb-2">
                <button
                  className={`w-full flex gap-2 items-center text-left  px-4 py-2 font-semibold font-urbanist border border-[#084032] focus:outline-none transition-colors duration-200 rounded-none ${activeIndex === idx ? 'bg-[#084032] text-white' : 'bg-[#084032] text-white'}`}
                  onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                >
                  {activeIndex === idx ? <FaMinus /> : <FaPlus />}
                  {pos.title}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  {activeIndex === idx && (
                    <div className="border border-[#084032] rounded-b-lg p-4 bg-white">
                      <p className="mb-2 text-black font-montserrat">{pos.description}</p>
                      <ul className="list-disc ml-6 text-black font-montserrat">
                        {pos.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Apply Now Form */}
        <div className="flex-1 basis-[65%] bg-white  p-6">
          <h2 className="text-[32px] font-[600] text-center font.montserrat text-black mb-6 font-urbanist">Apply Now</h2>
          <form className="space-y-4 rounded-lg  p-6 border-[1px] border-black">
            <div>
              <label className="block text-[16px]  font-[700] text-black mb-1">Name <span className="text-red-500">*</span></label>
              <input type="text" className="w-full border text-black border-gray-300 rounded px-3 py-2 focus:outline focus:border-[#084032]" required />
            </div>
            <div>
              <label className="block text-[16px]  font-[700] text-black mb-1">Email <span className="text-red-500">*</span></label>
              <input type="email" className="w-full border text-black border-gray-300 rounded px-3 py-2 focus:outline focus:border-[#084032]" required />
            </div>
            <div>
              <label className="block text-[16px]  font-[700] text-black mb-1">Phone Number <span className="text-red-500">*</span></label>
              <input type="tel" className="w-full border text-black border-gray-300 rounded px-3 py-2 focus:outline focus:border-[#084032]" required />
            </div>
            <div>
              <label className="block text-[16px]  font-[700] text-black mb-1">Applying for which position <span className="text-red-500">*</span></label>
              <input type="text" className="w-full border text-black border-gray-300 rounded px-3 py-2 focus:outline focus:border-[#084032]" required />
            </div>
            <div>
              <label className="block text-[16px]  font-[700] text-black mb-1">Your short info</label>
              <textarea className="w-full border text-black border-gray-300 rounded px-3 py-2 focus:outline focus:border-[#084032]" rows={4}></textarea>
            </div>
            <button type="submit" className="bg-[#084032] cursor-pointer text-white px-6 py-2 rounded font-semibold font-urbanist">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Career;
