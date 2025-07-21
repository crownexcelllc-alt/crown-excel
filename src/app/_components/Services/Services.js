import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Services = () => {
    // const transition = {
    //     transition-transform duration-500 origin-top-right hover:rotate-3 hover:skew-y-3 hover:scale-105 hover:shadow-[0_8px_32px_rgba(0,0,0,0.18)]
    // }

    return (
        <section className="bg-[#13745a] py-20 px-4 md:px-12 xl:px-32   sm:block lg:block md:hidden">
            <div className="max-w-7xl mx-auto">
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <p className="bg-[#e6eeff] text-green-900 px-4 py-1 rounded-full text-xs font-semibold tracking-wider mb-3 w-max shadow-sm">
                            WHAT WE DO FOR YOU
                        </p>
                        <h2 className="text-2xl md:text-4xl font-extrabold leading-tight text-white">
                            <span className="typewriter block">We can inspire and Offer</span>
                            <br />
                            <span className="typewriter block" style={{ animationDelay: '2.5s' }}>Different Services</span>
                        </h2>
                    </div>
                    <button className="flex items-center justify-center gap-2 w-[150px] bg-white text-[#084032] font-semibold rounded-full px-6 py-3 shadow-lg hover:bg-[#e6eeff] transition">
                        View All
                        <FaArrowRight className="w-6 h-6 border-2 rounded-full p-1" />
                    </button>
                </div>
                <div className="flex gap-2 lg:gap-10">
                    {/* Hardware Services */}
                    <div className="card bg-white flex flex-col items-cetner  text-black w-[350px] h-auto lg:w-[550px] lg:h-auto py-[40px] px-[10px] lg:pt-[50px] lg:pr-[30px] lg:pb-[50px] lg:pl-[30px] text-center lg:text-start transition-transform duration-500 origin-bottom-left hover:-translate-x-4 hover:-translate-y-4 hover:scale-105 hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)] animate-cardFadeIn" style={{ animationDelay: '0.1s' }}>
                        <h1 className='font-semibold text-[16px] lg:text-[24px]'>Hardware Services</h1>
                        <p className='mt-2 text-[10px] lg:text-[16px]'>Our RMA Facility provides expert RMA extraction and sequencing for research diagnostics, ensuring high-quality results.</p>
                    </div>
                    {/* Software Services */}
                    <div className="card bg-black text-white w-[350px] h-auto  lg:w-[550px] lg:h-auto py-[40px] px-[10px] lg:pt-[50px] lg:pr-[30px] lg:pb-[50px] lg:pl-[30px] text-center lg:text-start transition-transform duration-500 origin-center hover:-translate-y-2 hover:scale-105 hover:shadow-[0_8px_32px_rgba(0,0,0,0.25)] animate-cardFadeIn" style={{ animationDelay: '0.3s' }}>
                        <h1 className='font-semibold text-[16px] lg:text-[24px]'>Software Services</h1>
                        <p className='mt-2 text-[10px] lg:text-[16px]'>We provide tailored IT consulting services to optimize infrastructure, boost efficiency, and align technology with your goals.</p>
                    </div>
                    {/* IT Services */}
                    <div className="card bg-[#0e4637] text-white w-[350px] h-auto  lg:w-[550px] lg:h-auto py-[40px] px-[10px] lg:pt-[50px] lg:pr-[30px] lg:pb-[50px] lg:pl-[30px] text-center lg:text-start transition-transform duration-500 origin-top-right hover:translate-x-4 hover:-translate-y-4 hover:scale-105 hover:shadow-[0_8px_32px_rgba(0,0,0,0.18)] animate-cardFadeIn" style={{ animationDelay: '0.5s' }}>
                        <h1 className='font-semibold text-[16px] lg:text-[24px]'>IT Services</h1>
                        <p className='mt-2 text-[10px] lg:text-[16px]'>End-to-end IT management with proactive monitoring, ensuring smooth operations and prompt support for your business.</p>
                    </div>
                </div>
                {/* Cards Section */}
                {/* <div className="flex flex-row  items-center justify-center lg:gap-8  pb-4 md:pb-0"> */}
                {/* Hardware Services */}
                {/* <div className="bg-white  text-black rounded-2xl shadow-2xl p-10 w-80 lg:min-w-[280px] max-w-md min-h-[320px] flex flex-col justify-center items-start transition-transform duration-500 origin-top-right hover:rotate-3 hover:skew-y-3 hover:scale-105 hover:shadow-[0_8px_32px_rgba(0,0,0,0.18)]">
                        <h3 className="text-2xl font-bold mb-4">Hardware Services</h3>
                        <p className="text-base leading-relaxed">
                            Our RMA Facility provides expert RMA extraction and sequencing for research diagnostics, ensuring high-quality results.
                        </p>
                    </div>
                    Software Services */}
                {/* <div className="bg-gradient-to-br from-[#232323] to-black text-white rounded-2xl shadow-2xl p-10 w-80 lg:min-w-[280px] max-w-md min-h-[320px] flex flex-col justify-center items-start transition-transform duration-500 origin-top-right hover:rotate-3 hover:skew-y-3 hover:scale-105 hover:shadow-[0_8px_32px_rgba(0,0,0,0.18)]">
                        <h3 className="text-2xl font-bold mb-4">Software Services</h3>
                        <p className="text-base leading-relaxed">
                            We provide tailored IT consulting services to optimize infrastructure, boost efficiency, and align technology with your goals.
                        </p>
                    </div>
                    IT Services */}
                {/* <div className="bg-gradient-to-br from-[#164c3e] to-[#13745a] text-white rounded-2xl shadow-2xl p-10 w-80 lg:min-w-[280px] max-w-md min-h-[320px] flex flex-col justify-center items-start transition-transform duration-500 origin-top-right hover:rotate-3 hover:skew-y-3 hover:scale-105 hover:shadow-[0_8px_32px_rgba(0,0,0,0.18)]">
                        <h3 className="text-2xl font-bold mb-4">IT Services</h3>
                        <p className="text-base leading-relaxed">
                            End-to-end IT management with proactive monitoring, ensuring smooth operations and prompt support for your business.
                        </p>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default Services