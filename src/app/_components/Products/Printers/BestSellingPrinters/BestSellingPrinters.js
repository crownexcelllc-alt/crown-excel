"use client"
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import BestProduct1 from '../../../../../Components/Images/bestsellingprinter1.png'
import BestProduct2 from '../../../../../Components/Images/bestsellingprinter2.png'
import BestProduct3 from '../../../../../Components/Images/bestsellingprinter3.png'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa"

const carouselData = [
    {
        title: 'Epson LQ-350 Dot Matrix',
        description: `The Epson LQ-350 Dot Matrix Printer is a high-quality, reliable printer perfect for any office setting.`,
        image: BestProduct1,
    },
    {
        title: 'HP Color LaserJet M652n',
        description: 'Introducing the HP Color LaserJet M652n Printer, the perfect printing solution for your business needs.',
        image: BestProduct2,
    },
    {
        title: 'HP DeskJet 6475 Printer',
        description: 'The HP DeskJet 6475 Printer is the perfect solution for all your printing needs. This all-in-one printer offers high-quality printing, scanning, and copying capabilities in one compact device.',
        image: BestProduct3,
    },
]

const BestSellingPrinters = () => {
    const [currentIndex, setCurrentIndex] = useState(1)
    const [isAnimating, setIsAnimating] = useState(true)
    const desktopRef = useRef(null)

    const extendedSlides = [
        carouselData[carouselData.length - 1],
        ...carouselData,
        carouselData[0],
    ]

    const handlePrev = (isMobile = false) => {
        if (currentIndex <= 0) return
        setIsAnimating(true)
        setCurrentIndex(prev => prev - 1)
    }

    const handleNext = (isMobile = false) => {
        if (currentIndex >= extendedSlides.length - 1) return
        setIsAnimating(true)
        setCurrentIndex(prev => prev + 1)
    }

    useEffect(() => {
        const handleTransitionEnd = () => {
            if (currentIndex === 0) {
                setIsAnimating(false)
                setCurrentIndex(carouselData.length)
            } else if (currentIndex === extendedSlides.length - 1) {
                setIsAnimating(false)
                setCurrentIndex(1)
            }
        }

        const desktopSlider = desktopRef.current

        desktopSlider?.addEventListener('transitionend', handleTransitionEnd)

        return () => {
            desktopSlider?.removeEventListener('transitionend', handleTransitionEnd)
        }
    }, [currentIndex, extendedSlides.length])

    // Mobile carousel logic for infinite loop with smooth transition
    const [mobileIndex, setMobileIndex] = useState(1);
    const [mobileAnimating, setMobileAnimating] = useState(true);
    const mobileSlides = [carouselData[carouselData.length-1], ...carouselData, carouselData[0]];
    const mobileRef = useRef(null);

    const handleMobilePrev = () => {
        if (mobileIndex <= 0) return;
        setMobileAnimating(true);
        setMobileIndex(prev => prev - 1);
    };
    const handleMobileNext = () => {
        if (mobileIndex >= mobileSlides.length - 1) return;
        setMobileAnimating(true);
        setMobileIndex(prev => prev + 1);
    };

    useEffect(() => {
        const handleMobileTransitionEnd = () => {
            if (mobileIndex === 0) {
                setMobileAnimating(false);
                setMobileIndex(carouselData.length);
            } else if (mobileIndex === mobileSlides.length - 1) {
                setMobileAnimating(false);
                setMobileIndex(1);
            }
        };
        const slider = mobileRef.current;
        slider?.addEventListener('transitionend', handleMobileTransitionEnd);
        return () => slider?.removeEventListener('transitionend', handleMobileTransitionEnd);
    }, [mobileIndex, mobileSlides.length]);

    return (
        <div className="w-full py-8 relative">
            <h1 className="text-center text-3xl md:text-5xl font-bold text-[#16795e] mb-8">
                Our Best-Selling Laptops
            </h1>

            {/* Desktop Carousel */}
            <div className="hidden md:block relative overflow-hidden max-w-full px-5 mx-auto">
                <button
                    onClick={() => handlePrev(false)}
                    className="absolute text-white text-[24px] font-[500] -left-4  hover:cursor-pointer top-1/2 -translate-y-1/2 z-10 bg-[#147d61] rounded-full shadow"
                    style={{ padding: '10px' }}
                >
                    <FaAngleLeft />
                </button>

                <div className="flex w-full">
                    <div
                        ref={desktopRef}
                        className="flex transition-transform ease-in-out duration-700 relative"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                            transition: isAnimating ? 'transform 0.7s ease-in-out' : 'none',
                            width: `${extendedSlides.length * 100}%`,
                        }}
                    >
                        {extendedSlides.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col md:flex-row items-center justify-between min-w-full px-6 py-6 md:py-12"
                            >
                                <div className="text-center basis-[40%] ml-10 md:text-left space-y-4">
                                    <h2 className="text-[48px] leading-[48px] font-montserrat font-bold text-black" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                        {item.title}
                                    </h2>
                                    <p className="text-[#7885a4] text-[16px] md:text-lg font-medium mt-10">
                                        {item.description}
                                    </p>
                                </div>
                                <div className="flex basis-[60%] justify-center mt-6 ml-2 pl-10 md:mt-0  md:-mr-15">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={454}
                                        height={550}
                                        className="rounded-lg object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    onClick={() => handleNext(false)}
                    className="absolute text-white  hover:cursor-pointer text-[24px] font-[500] -right-4 top-1/2 -translate-y-1/2 z-10 bg-[#147d61] rounded-full shadow"
                    style={{ padding: '10px' }}
                >
                    <FaAngleRight />
                </button>
            </div>

            {/* Mobile Carousel with Buttons */}
            <div className="md:hidden relative overflow-hidden px-4 h-[400px]">
                                <div className="absolute  bg-[#ffd900] w-[350px] h-[250px] right-0 top-30 -z-10" style={{borderRadius: '160px 0px 0px 160px'}}></div>

                <button
                    onClick={handleMobilePrev}
                    className="absolute text-white text-[20px] -left-2 top-1/2 -translate-y-1/2 z-10 bg-[#147d61] hover:text-[#ffd900] rounded-full "
                    style={{ padding: '8px' }}
                >
                    <FaAngleLeft />
                </button>
                <div className="w-full relative flex items-center justify-center">
                    <div
                        ref={mobileRef}
                        className="flex transition-transform ease-in-out duration-700"
                        style={{
                            transform: `translateX(-${mobileIndex * 100}%)`,
                            transition: mobileAnimating ? 'transform 0.7s cubic-bezier(0.4,0,0.2,1)' : 'none',
                            width: `${mobileSlides.length * 100}%`,
                        }}
                    >

                        {mobileSlides.map((item, idx) => (
                            <div
                                key={idx}
                                className="w-full max-w-xs mx-auto flex flex-col items-center justify-center  rounded-xl  p-4 relative min-w-full transition-all duration-700 ease-in-out"
                            >
                                
                                <h2 className="text-lg xs:text-xl font-bold text-[#16795e] text-center mt-2 mb-1 font-montserrat">{item.title}</h2>
                                <p className="text-gray-600 text-xs xs:text-sm text-center mb-1 w-[350px]">{item.description}</p>
                                <div className="relative w-full h-[150px] mt-10  flex items-center justify-center mx-auto mb-2">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        
                                        width={250}
                                        className="rounded-lg object-contain "
                                        priority
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    onClick={handleMobileNext}
                    className="absolute text-white text-[20px] -right-2 top-1/2 -translate-y-1/2 z-10 bg-[#147d61] hover:text-[#ffd900] rounded-full shadow"
                    style={{ padding: '8px' }}
                >
                    <FaAngleRight />
                </button>
            </div>

            {/* Yellow BG shape (only for desktop) */}
            <div className="yellow-div absolute bg-[#ffd900] -z-10 h-[550px] w-[650px] top-40 right-0 hidden md:block" style={{ borderRadius: '360px 0 0 360px' }}></div>
        </div>
    )
}

export default BestSellingPrinters
