"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import User1 from '../../../Components/Images/user1.jpg'
import User2 from '../../../Components/Images/user2.jpg'
import User3 from '../../../Components/Images/user3.jpg'
import User4 from '../../../Components/Images/user4.png'
import User5 from '../../../Components/Images/user5.png'
import TestimonialCard from './TestimonialCard';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonials = () => {
    const testimonials = [
        { name: 'Latifa Mansor', position: 'Marketing Head', message: '“Crown Excel’s hardware services greatly enhanced our efficiency. Their team ensures our systems are updated and running smoothly, minimizing downtime.”', image: User1 },
        { name: 'Sultan', position: 'CEO', message: '“Crown Excel’s software solutions have significantly optimized our operations. Their proactive and reliable support ensures we can concentrate on our core business”', image: User2 },
        { name: 'Shaikha Yousef', position: 'CEO', message: '“The remote support from Crown Excel is outstanding. Their quick responses keep our operations running smoothly, giving us peace of mind.”', image: User3 },
        { name: 'Emii Smith', position: 'IT Manager', message: '“Crown Excel’s online support is exceptional. Their team is always ready to help, ensuring our operations remain uninterrupted.They are best”', image: User4 },
        { name: 'Steve Smith', position: '', message: '“Crown Excel’s software services have streamlined our processes. Their proactive support allows us to focus on our core business without IT worries.”', image: User5 }
    ];

    return (
        <div>
            <div className="header bg-[#084032] w-full h-[110px] flex items-center justify-center">
                <h1 className='text-center font-bold font-montserrat text-[24px] lg:text-[30px] leading-[30px] font-sans text-white'>
                    What Our Clients Say About <br /> Our Services?
                </h1>
            </div>

            <div className="relative w-full py-8 px-4 bg-[#fffdd0]">
                <div className="relative">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        slidesPerView={3}
                        spaceBetween={-30}
                        navigation={{
                            nextEl: ".swiper-button-next-custom",
                            prevEl: ".swiper-button-prev-custom"
                        }}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false
                        }}
                        loop={true}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            640: { slidesPerView: 1 },
                            760: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 }
                        }}
                        className="!flex justify-center"
                    >
                        {testimonials.map((item, i) => (
                            <SwiperSlide
                                key={i}
                                className="!flex justify-center"
                            >
                                <TestimonialCard
                                    name={item.name}
                                    message={item.message}
                                    position={item.position}
                                    image={item.image}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>


                    {/* Navigation Buttons */}
                    <button className="swiper-button-prev-custom absolute left-2 top-[45%] z-10 text-green-900">
                        <FaChevronLeft size={24} />
                    </button>
                    <button className="swiper-button-next-custom absolute right-2 top-[45%] z-10 text-green-900">
                        <FaChevronRight size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
