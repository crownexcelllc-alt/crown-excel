'use client';
import React from 'react'
import { motion } from 'framer-motion'

const OurManagementProcess = () => {
  return (
    <div className='flex flex-col items-center p-[20px] lg:p-[70px] bg-[#e5e0c8]'>
      <h1 className='text-black text-[30px] md:text-[40px] lg:text-[50px] leading-[30px] lg:leading-[65px] text-center tracking-[0.1px] font-[700] mt-10 lg:mt-0'>
        What Sets Us Apart from <span className='text-[#0d5c47]'>Process</span>
      </h1>
      <div className="cards-divs flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 justify-center gap-5 mt-10">
        {/* Card 1 */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="cards bg-white w-full md:w-[417px] lg:w-[265px] h-[294px] flex flex-col items-start justify-center gap-5 p-[30px] rounded-[10px]"
          style={{ boxShadow: '6px 5px 10px 0px rgba(0, 0, 0, 0.5)' }}
        >
          <h1 className='text-[18px] font-[600] leading-[21.6px] text-[#04042c]'>Holistic Approach</h1>
          <p className='text-[16px] font-[500] leading-[27.2px] text-[#687799]'>
            Our management takes a comprehensive view, overseeing the entire process from consultation to delivery, ensuring quality at every stage.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="cards bg-black  w-full md:w-[417px] lg:w-[265px] h-[294px] flex flex-col items-start justify-center gap-5 p-[30px] rounded-[10px]"
          style={{ boxShadow: '6px 5px 10px 0px rgba(0, 0, 0, 0.5)' }}
        >
          <h1 className='text-[18px] font-[600] leading-[21.6px] text-[#ffffff]'>Interdepartmental Synergy</h1>
          <p className='text-[16px] font-[500] leading-[27.2px] text-[#596582]'>
            We cultivate strong communication and collaboration between departments, resulting in a seamless and unified service experience.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="cards bg-[#084032]  w-full md:w-[417px] lg:w-[265px] h-[294px] flex flex-col items-start justify-center gap-5 p-[30px] rounded-[10px]"
          style={{ boxShadow: '6px 5px 10px 0px rgba(0, 0, 0, 0.5)' }}
        >
          <h1 className='text-[18px] font-[600] leading-[21.6px] text-[#ffd900]'>Skill Assessment</h1>
          <p className='text-[16px] font-[500] leading-[27.2px] text-[#ffd900]'>
            You will be invited at our head office to take a skills and knowledge assessment.
          </p>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="cards bg-[#ffd900]  w-full md:w-[417px] lg:w-[265px] h-[294px] flex flex-col items-start justify-center gap-5 p-[30px] rounded-[10px]"
          style={{ boxShadow: '6px 5px 10px 0px rgba(0, 0, 0, 0.5)' }}
        >
          <h1 className='text-[18px] font-[600] leading-[21.6px] text-[#084032]'>Final Interview</h1>
          <p className='text-[16px] font-[500] leading-[27.2px] text-[#687799]'>
            If you can pass all stages we will invite you for a final interview with our CEO and HR executive.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default OurManagementProcess
