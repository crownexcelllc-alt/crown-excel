'use client';
import React from 'react';
import { motion } from 'framer-motion';
import ServiceBackground from '../../Components/Images/servicesbackground.jpg';
import ServicesCard from '../_components/OurServices/ServicesCard/ServicesCard';
import Brands from '../_components/Brands/Brands';
import ServicesBrand from '../../Components/Images/servicesbrands.png'
import Image from 'next/image';
import Intel from '../../Components/Images/intel.png'
import Dell from '../../Components/Images/dell.png'
import Acer from '../../Components/Images/acer.png'
import Amd from '../../Components/Images/amd.png'
import Hp from '../../Components/Images/hp.png'
import Dragon from '../../Components/Images/dragon.png'
import Asus from '../../Components/Images/asus.png'
import Noc from '../../Components/Images/noc.png'
import Samsung from '../../Components/Images/samsung.png'
import OurServicesBrands from '../_components/OurServicesBrands/OurServicesBrands';

const Cards = [
    { title: "Cloud Computing", desc: "Scalable cloud solutions for storage, computing, and infrastructure management to enhance business efficiency and reduce costs." },
    { title: "IT Consultancy", desc: "We provide tailored IT consulting services to optimize infrastructure, boost efficiency, and align technology with your goals." },
    { title: "IT Infrastructure", desc: "End-to-end and reliable IT management with proactive monitoring, ensuring smooth operations and prompt support for your business." },
    { title: "Long/Short Term AMC", desc: "Annual maintenance contracts to keep your hardware running efficiently and prevent downtime with timely support." },
    { title: "Software Solutions", desc: "Scheduled software maintenance ensures security, regular updates, and improved functionality, keeping systems running." },
    { title: "Storage & Virtualization", desc: "Advanced storage solutions and virtualization services to optimize data management and server efficiency." },
    { title: "Security Solutions", desc: "Comprehensive cybersecurity services including firewalls, antivirus, data protection, and threat monitoring systems." },
]


const fadeInVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.03, // delay per character
            duration: 0.4,
        },
    }),
};

const AnimatedText = ({ text }) => {
    return (
        <div className="flex flex-wrap">
            {text.split('').map((char, i) => (
                <motion.span
                    key={i}
                    custom={i}
                    variants={fadeInVariant}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                >
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}
        </div>
    );
};

const OurServices = () => {
    return (
        <div className="our-services flex flex-col items-start">
            <div
                className="flex flex-col pt-20 pb-20 items-start px-6 md:px-10"
                style={{
                    backgroundImage: `url(${ServiceBackground.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: 'auto',
                }}
            >
                <div className='our-services-top-text flex flex-col items-center md:items-start lg:items-start justify-center w-full'>
                    <p className="text-[13px] w-[209px] h-[30px] flex items-center justify-center font-montserrat font-[600] text-[#084032] tracking-[1.3px] bg-[#e6eeff] rounded-[30px] mb-4 shadow-sm" style={{ padding: '4px 13px' }}>
                        WHAT WE DO FOR YOU
                    </p>
                    <h1 className="text-[24px] flex flex-col items-center md:items-start lg:items-start md:text-start lg:text-start text-center md:text-[40px] font-[800] text-[#084032] leading-[40px] lg:leading-[48px] font-montserrat">
                        <AnimatedText text="We can inspire and Offer" />

                        <AnimatedText text="Different Services" />
                    </h1>
                </div>
                <div className="our-services-top-cards mt-20  flex flex-wrap items-center gap-10">
                    {Cards.map((item, i) => {
                        return <ServicesCard key={i} title={item.title} desc={item.desc} />
                    })}
                </div>
            </div>
            <div className="braands w-full">
                <OurServicesBrands/>
            </div>

        </div>
    );
};

export default OurServices;
