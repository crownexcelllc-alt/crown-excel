"user client"
import React, { useState } from 'react';

const ServicesCard = ({ title, desc }) => {
    const [isHovered, setIsHovered] = useState(false);

    const toggleHover = () => {
        // On mobile, tap toggles hover
        setIsHovered(prev => !prev);
    };

    return (
        <div
            onClick={toggleHover}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
            className={`group relative flex flex-col gap-6 items-start w-full md:w-[366px] md:h-[350px] lg:w-[366px] lg:h-[350px] p-[30px] rounded-[10px] overflow-hidden cursor-pointer transition-colors duration-0 ease-in ${
                isHovered ? 'text-white' : 'text-black'
            }`}
            style={{
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            }}
        >
            {/* Background Overlay */}
            <div
                className={`absolute inset-0 z-0 transition-all duration-500 ease-in-out ${
                    isHovered
                        ? 'bg-gradient-to-b from-[#38b48d] to-[#004d3c]'
                        : 'bg-white'
                }`}
            />

            {/* Foreground content */}
            <div className="relative z-10 flex flex-col justify-between gap-6 w-full h-full">
                <div className="text-top flex flex-col gap-6">
                    <p className="text-[21px] font-montserrat font-semibold transition-none">
                        {title}
                    </p>

                    <hr
                        className={`h-[3px] bg-[#0d5c47] border-0 transition-all duration-500 ease-in-out ${
                            isHovered ? 'w-[80px]' : 'w-[57px]'
                        }`}
                    />

                    <p className="text-[16px] leading-[27.2px] transition-none">
                        {desc}
                    </p>
                </div>

                <button
                    className={`w-[132px] h-[48px] flex items-center justify-center border rounded-[20px] bg-[#094132] transition-all duration-500 ease-in-out ${
                        isHovered
                            ? 'border-white text-white'
                            : 'border-black text-white'
                    }`}
                >
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default ServicesCard;
