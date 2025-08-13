'use client'
import React from 'react'
import Image from 'next/image'

import Dragon from '../../../Components/Images/dragon.png'
import Noc from '../../../Components/Images/noc.png'
import Intel from '@/Components/Images/intell.png'
import Dell from '@/Components/Images/dell (1).png'
import Acer from '@/Components/Images/acer (2).png'
import Xerox from '@/Components/Images/Xerox.png'
import Amd from '@/Components/Images/amdd.png'
import Hp from '@/Components/Images/hp (1).png'
import ViewSonic from '@/Components/Images/view sonic.png'
import Optoma from '@/Components/Images/optoma.png'
import ricoh from '@/Components/Images/ricoh.png'
import meetion from '@/Components/Images/meetion.png'
import logitech from '@/Components/Images/logitech.png'
import lexar from '@/Components/Images/lexar.png'
import Kingston from '@/Components/Images/Kingston.png'
import epson from '@/Components/Images/epson.png'
import crucial from '@/Components/Images/crucial.png'
import canon from '@/Components/Images/canon.png'
import brother from '@/Components/Images/brother.png'
import benq from '@/Components/Images/benq.png'
import aoc from '@/Components/Images/aoc.png'
import alienware from '@/Components/Images/alienware.png'
import adhua from '@/Components/Images/adhua.png'
import tplink from '@/Components/Images/tp link.png'
import samsung from '@/Components/Images/samsung (1).png'
import msi from '@/Components/Images/msi (1).png'
import razor from '@/Components/Images/razor.png'
import microsof from '@/Components/Images/microsof.png'
import lg from '@/Components/Images/lg.png'
import intell from '@/Components/Images/intell.png'
import lenovo from '@/Components/Images/lenovo (1).png'
import Asus from '@/Components/Images/asus (1).png'
import apple from '@/Components/Images/apple (1).png'

const brands = [
  Intel, Dell, Acer, Amd, Hp, Dragon, Asus, Noc, Xerox, ViewSonic, Optoma, ricoh, meetion, logitech, lexar, Kingston, epson, crucial, canon, brother, benq, aoc, alienware, adhua, tplink, samsung, msi, razor, microsof, lg, intell, lenovo, apple
]

const Brands = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#e6f0ee] py-12">
      <h1 className="text-[32px] mb-10 font-montserrat leading-[32px] font-[700] text-black">
        BRANDS WE DEAL
      </h1>

      {/* Infinite marquee */}
      <div className="relative w-full overflow-hidden">
        <div className="marquee flex">
          {/* First sequence */}
            <div className="flex items-center gap-1 px-10 shrink-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-11">
              {brands.map((brand, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center transition-all duration-300 p-4 hover:-translate-y-1"
                >
                  <Image
                    src={brand}
                    alt="Brand Logo"
                    width={110}
                    height={110}
                    className="object-contain w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px] transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          {/* Duplicate sequence (for seamless loop) */}
             <div className="flex items-center gap-1 px-10 shrink-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-11">
              {brands.map((brand, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center transition-all duration-300 p-4"
                >
                  <Image
                    src={brand}
                    alt=""
                    width={110}
                    height={110}
                    className="object-contain w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px]"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
        </div>

        {/* Edge fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#e6f0ee] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#e6f0ee] to-transparent" />
      </div>

      <style jsx>{`
        .marquee {
          width: max-content;
          animation: marquee var(--speed,20s) linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee { animation: none; }
        }
      `}</style>
    </div>
  )
}

export default Brands
