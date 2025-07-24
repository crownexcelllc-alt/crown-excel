'use client'
import React from 'react'
import { motion } from 'framer-motion'

const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
}

const OurManagementTeam = () => {
    return (
        <div className='bg-[#0d5c47] px-5 lg:px-20 py-20 flex flex-col-reverse md:flex-col-reverse lg:flex-row items-center gap-10 md:gap-10 lg:gap-20'>
            <div className="management-team-left flex flex-col gap-5 md:gap-10">
                <div className="management-team-top flex flex-col md:flex-row lg:flex-row items-center gap-7 font-montserrat">
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="cards px-[20px] bg-white rounded-[20px] w-full md:w-[412px] lg:w-[270px] h-[230px] flex flex-col items-start justify-center gap-3"
                        style={{ boxShadow: '6px 5px 10px 0px rgba(0, 0, 0, 0.5)' }}
                    >
                        <h1 className='text-black text-[18px] font-semibold leading-[23.4px]'>Proven Success</h1>
                        <p className='text-[#687799] text-[16px] font-medium leading-[27.2px]'>
                            With a solid track record in both local and international markets, our leadership ensures timely and effective project execution.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="cards md:mt-20 px-[20px] bg-black rounded-[20px] w-full md:w-[412px] lg:w-[270px] h-[230px] flex flex-col items-start justify-center gap-3"
                        style={{ boxShadow: '6px 5px 10px 0px rgba(0, 0, 0, 0.5)' }}
                    >
                        <h1 className='text-white text-[18px] font-semibold leading-[23.4px]'>Customer-First Approach</h1>
                        <p className='text-[#687799] text-[16px] font-medium leading-[27.2px]'>
                            We listen closely to client needs and tailor our solutions to provide personalized service.
                        </p>
                    </motion.div>
                </div>

                <div className="management-team-top flex flex-col md:flex-row lg:flex-row items-center gap-7 font-montserrat md:-mt-20">
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="cards px-[20px] bg-[#084032] rounded-[20px] w-full md:w-[412px] lg:w-[270px] h-[230px] flex flex-col items-start justify-center gap-3"
                        style={{ boxShadow: '6px 5px 10px 0px rgba(0, 0, 0, 0.5)' }}
                    >
                        <h1 className='text-[#ffd900] text-[18px] font-semibold leading-[23.4px]'>Innovative Solutions</h1>
                        <p className='text-[#687799] text-[16px] font-medium leading-[27.2px]'>
                            Our leadership team is at the forefront of technological advancements, offering cutting-edge solutions to drive business success.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="cards md:mt-20 px-[20px] bg-[#ffd900] rounded-[20px] w-full md:w-[412px] lg:w-[270px] h-[230px] flex flex-col items-start justify-center gap-3"
                        style={{ boxShadow: '6px 5px 10px 0px rgba(0, 0, 0, 0.5)' }}
                    >
                        <h1 className='text-[#084032] text-[18px] font-semibold leading-[23.4px]'>Performance Award</h1>
                        <p className='text-[#687799] text-[16px] font-medium leading-[27.2px]'>
                            We have the knowledge and network to manage international projects while addressing local market challenges.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="management-team-right text-center lg:text-left">
                <h1 className='text-[40px] font-[700] leading-[48px] text-white font-montserrat'>
                    Why Choose Our Management <span className='text-[#ffd900]'>Team?</span>
                </h1>
            </div>
        </div>
    )
}

export default OurManagementTeam
