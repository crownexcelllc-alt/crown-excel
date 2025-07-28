"use client"
import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const CompnayHistoryCards = ({ index, year, title }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 })

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 })
    } else {
      controls.start({ opacity: 0, y: 50 })
    }
  }, [controls, inView])

  const isLeft = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6 }}
      className={`w-full md:w-1/2 px-4 mb-10 ${
        isLeft ? 'md:pr-[52%] text-right' : 'md:pl-[52%] text-left'
      }`}
    >
      <div className="w-[400] h-auto bg-white font-jakarta flex flex-col items-center justify-center p-[20px] gap-10 rounded shadow">
        <h3 className="bg-[#fdea00] -mt-20 text-black text-[32px] font-[700] [ w-[160px] h-[160px] rounded-full flex items-center justify-center">{year}</h3>
        <p className="text-[22px] font-[500] text-black text-center">{title}</p>
      </div>
    </motion.div>
  )
}

export default CompnayHistoryCards
