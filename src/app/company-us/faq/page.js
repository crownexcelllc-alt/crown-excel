"use client"
import FaqHeader from '@/app/_components/Faq/FaqHeader/FaqHeader'
import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
const page = () => {
  const positions = [
    {
      sign: <FaPlus />,
      title: 'What services does Crown Excel offer?',
      description: 'Crown Excel offers a wide range of services, including hardware solutions, software development (POS, Queue Management, eCommerce, and on-demand solutions), IT consultancy, managed IT services, and server support.',
    },
    {
      sign: <FaPlus />,
      title: ' Do you offer support for both hardware and software? ',
      description: 'Yes, we provide comprehensive support for both hardware and software, including installation, maintenance, troubleshooting, and ongoing technical assistance.',
     
    },
    {
      sign: <FaPlus />,
      title: ' What types of laptops do you sell? ',
      description: 'We sell laptops from leading brands such as Dell, HP, Lenovo, and others, with options for business, personal, and gaming needs.'
    },
    {
      sign: <FaPlus />,
      title: ' Do you offer custom software solutions? ',
      description: 'Yes, we provide on-demand custom software solutions tailored to meet the unique requirements of your business, whether it’s POS, Queue Management, eCommerce, or other specialized software.'
    },
    {
      sign: <FaPlus />,
      title: ' How is your approach to IT consultancy? ',
      description: 'Our IT consultancy service focuses on understanding your business needs and providing tailored solutions to optimize your IT infrastructure, improve efficiency, and enhance security.'
    },
    {
      sign: <FaPlus />,
      title: 'Does Crown Excel offer managed IT services?',
      description: 'Yes, Crown Excel’s managed IT services cover a broad range of IT management tasks, including network monitoring, server management, security, and backup solutions, ensuring your IT systems are always running smoothly.'
    },
    {
      sign: <FaPlus />,
      title: ' What brands of desktops do you sell? ',
      description: 'We offer desktops from top brands like Dell, HP, Lenovo, and more. Our range includes high-performance workstations, gaming PCs, and budget-friendly models.'
    },
    {
      sign: <FaPlus />,
      title: ' What kind of storage solutions do you provide? ',
      description: 'We offer various storage solutions, including NAS (Network-Attached Storage), SAN (Storage Area Network), cloud storage, hybrid storage, and backup & disaster recovery solutions.'
    },
    {
      sign: <FaPlus />,
      title: ' Can you help with server setup and support? ',
      description: 'Yes, we provide end-to-end server support, including installation, configuration, maintenance, and troubleshooting for a variety of server environments.'
    },
    {
      sign: <FaPlus />,
      title: ' Do you sell networking products like routers and switches? ',
      description: 'Yes, we offer a range of networking products, including routers, switches, and access points, designed to optimize your network performance.'
    }
  ];
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    
    <div>
      <FaqHeader/>
      <div className="flex-1 basis-[35%] bg-white rounded-lg py-6 px-6 lg:py-6 lg:px-11">
                <div className="flex flex-col gap-0">
                  {positions.map((pos, idx) => (
                    <div key={idx} className="mb-2">
                      <button
                        className={`w-full text-[12px] lg:text-[16px] flex gap-2 items-center text-left  px-4 py-2 font-semibold font-urbanist border border-[#084032] focus:outline-none transition-colors duration-200 rounded-none ${activeIndex === idx ? 'bg-[#084032] text-white' : 'bg-[#084032] text-white'}`}
                        onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                      >
                        {activeIndex === idx ? <FaMinus /> : <FaPlus />}
                        {pos.title}
                      </button>
                     <div
  className={`overflow-hidden transition-all duration-500 ease-in-out border border-[#084032] bg-white ${
    activeIndex === idx ? 'max-h-[200px] opacity-100 p-4' : 'max-h-0 opacity-0 p-0'
  }`}
  style={{ transitionProperty: 'max-height, opacity, padding' }}
>
  <div className="transition-opacity duration-500 ease-in-out">
    <p className="text-[12px] lg:text-[16px] text-black font-montserrat">
      {pos.description}
    </p>
  </div>
</div>

                    </div>
                  ))}
                </div>
              </div>
    </div>
  )
}

export default page
