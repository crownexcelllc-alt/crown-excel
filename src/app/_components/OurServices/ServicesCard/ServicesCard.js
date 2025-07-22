import React from 'react';

const ServicesCard = ({ title, desc }) => {
    return (
        <div
            className="group relative flex flex-col gap-6 items-start w-full md:w-[366px] md:h-[350px] lg:w-[366px] lg:h-[350px] p-[30px] rounded-[10px] overflow-hidden bg-white text-black hover:text-white transition-colors duration-0 ease-in"
            style={{
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            }}
        >
            {/* Background overlay with smooth gradient transition */}
            <div className="absolute inset-0 z-0 bg-white transition-all duration-500 ease-in-out group-hover:bg-gradient-to-b group-hover:from-[#38b48d] group-hover:to-[#004d3c]" />

            {/* Foreground content */}
            <div className="relative z-10 flex flex-col justify-between gap-6 w-full h-full">
                <div className="text-top flex flex-col gap-6">
                    <p className="text-[21px] font-montserrat font-semibold transition-none">
                        {title}
                    </p>

                    <hr className="h-[3px] w-[57px] bg-[#0d5c47] border-0 transition-all duration-500 ease-in-out group-hover:w-[80px] " />

                    <p className="text-[16px] leading-[27.2px] transition-none">
                        {desc}
                    </p>
                </div>

                <button className="w-[132px] h-[48px] flex items-center justify-center border border-black rounded-[20px] bg-[#094132] text-white transition-none duration-500 ease-in-out group-hover:border-white group-hover:text-white">
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default ServicesCard;
