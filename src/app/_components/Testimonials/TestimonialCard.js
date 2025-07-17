import Image from 'next/image';
import React, { useState, useRef } from 'react';
import { FaStar } from "react-icons/fa6";

const TestimonialCard = (props) => {
    const [popped, setPopped] = useState(false);
    const [showShadow, setShowShadow] = useState(false);
    const timerRef = useRef(null);

    const handleMouseEnter = () => {
        setPopped(true);
        setShowShadow(true);
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            setShowShadow(false);
        }, 300);
    };

    const handleMouseLeave = () => {
        setPopped(false);
        setShowShadow(true);
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            setShowShadow(false);
        }, 300);
    };

    return (
        <div
            className={`card flex flex-col justify-around w-[300px] h-[330px] md:w-[403px] md:h-[321px] lg:w-[333px] lg:h-[321px] bg-white rounded lg:rounded-[30px] pt-[30px] pl-[20px] pr-[20px] transition-all duration-300
                ${popped ? ' -translate-y-3' : ''}
                ${showShadow ? ' shadow-2xl' : ''}
            `}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="user-message">
                <Image className='rounded-full' src={props.image} width={50} height={50} alt="" />
                <p className='text-black text-[16px] mt-4 font-lora' >{props.message}</p>
            </div>
            <div className="author">
                <div className="stars flex items-center gap-2 text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <div className="author-info flex items-center gap-1 text-black">
                    <h2 className='text-[16px]'>{props.name}</h2>
                    <p className='text-gray-400 text-[14px]'>{props.position}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;