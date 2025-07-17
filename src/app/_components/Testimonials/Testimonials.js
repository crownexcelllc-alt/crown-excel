"use client"
import React, { useEffect, useRef, useState } from 'react'
import User1 from '../../../Components/Images/user1.jpg'
import User2 from '../../../Components/Images/user2.jpg'
import User3 from '../../../Components/Images/user3.jpg'
import User4 from '../../../Components/Images/user4.png'
import User5 from '../../../Components/Images/user5.png'
import TestimonialCard from './TestimonialCard'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Custom hook for responsive slides per view
const useVisibleCount = () => {
    const [visibleCount, setVisibleCount] = useState(3);

    useEffect(() => {
        const updateCount = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setVisibleCount(1); // Small screens
            } else if (width < 1024) {
                setVisibleCount(2); // Tablets
            } else {
                setVisibleCount(3); // Large screens
            }
        };

        updateCount(); // initial
        window.addEventListener('resize', updateCount);
        return () => window.removeEventListener('resize', updateCount);
    }, []);

    return visibleCount;
};

const Testimonials = () => {
    const originalTestimonials = [
        { name: 'Latifa Mansor', position: 'Marketing Head', message: '“Crown Excel’s hardware services greatly enhanced our efficiency. Their team ensures our systems are updated and running smoothly, minimizing downtime.”', image: User1 },
        { name: 'Sultan', position: 'CEO', message: '“Crown Excel’s software solutions have significantly optimized our operations. Their proactive and reliable support ensures we can concentrate on our core business”', image: User2 },
        { name: 'Shaikha Yousef', position: 'CEO', message: '“The remote support from Crown Excel is outstanding. Their quick responses keep our operations running smoothly, giving us peace of mind.”', image: User3 },
        { name: 'Emii Smith', position: 'IT Manager', message: '“Crown Excel’s online support is exceptional. Their team is always ready to help, ensuring our operations remain uninterrupted.They are best”', image: User4 },
        { name: 'Steve Smith', position: '', message: '“Crown Excel’s software services have streamlined our processes. Their proactive support allows us to focus on our core business without IT worries.”', image: User5 }
    ];

    const visibleCount = useVisibleCount();
    const [index, setIndex] = useState(visibleCount); // start from actual first
    const [isTransitioning, setIsTransitioning] = useState(true);
    const transitionTime = 700;
    const intervalRef = useRef(null);

    // Cloning for infinite loop
    const extended = [
        ...originalTestimonials.slice(-visibleCount),
        ...originalTestimonials,
        ...originalTestimonials.slice(0, visibleCount)
    ];

    const next = () => setIndex(prev => prev + 1);
    const prev = () => setIndex(prev => prev - 1);
    const stopAutoSlide = () => clearInterval(intervalRef.current);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            next();
        }, 4000);
        return () => clearInterval(intervalRef.current);
    }, []);

    useEffect(() => {
        setIsTransitioning(true);

        const timeout = setTimeout(() => {
            // If we go beyond real last, jump back to real first
            if (index >= originalTestimonials.length + visibleCount) {
                setIsTransitioning(false);
                setIndex(visibleCount);
            }

            // If we go before real first, jump to real last
            if (index <= 0) {
                setIsTransitioning(false);
                setIndex(originalTestimonials.length);
            }
        }, transitionTime);

        return () => clearTimeout(timeout);
    }, [index, originalTestimonials.length, visibleCount]);

    return (
        <div>
            <div className="header bg-[#084032] w-full h-[110px] flex items-center justify-center">
                <h1 className='text-center font-bold font-montserrat text-[24px] lg:text-[30px] leading-[30px] font-sans text-white'>
                    What Our Clients Say About <br /> Our Services?
                </h1>
            </div>

            <div className="relative w-full py-8 px-4 bg-[#fffdd0] overflow-hidden">
                <div className="relative flex items-center justify-center">
                    {/* Left Button */}
                    <button
                        onClick={() => {
                            prev();
                            stopAutoSlide();
                        }}
                        className="absolute left-2 z-10  text-green-900"
                    >
                        <FaChevronLeft size={24} />
                    </button>

                    {/* Slider */}
                    <div className="w-full ml-[40px] lg:ml-[50px] overflow-hidden">
                        <div
                            className="flex transition-transform ease-in-out"
                            style={{
                                width: `${(extended.length * 100) / visibleCount}%`,
                                transform: `translateX(-${(index * 100) / extended.length}%)`,
                                transitionDuration: isTransitioning ? `${transitionTime}ms` : '0ms'
                            }}
                        >
                            {extended.map((item, i) => (
                                <div
                                    key={i}
                                    className={`px-2 shrink-0`}
                                    style={{
                                        width: `${100 / extended.length}%`
                                    }}
                                >
                                    <TestimonialCard
                                        name={item.name}
                                        message={item.message}
                                        position={item.position}
                                        image={item.image}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Button */}
                    <button
                        onClick={() => {
                            next();
                            stopAutoSlide();
                        }}
                        className="absolute right-2 z-10  text-green-900"
                    >
                        <FaChevronRight size={24} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;
