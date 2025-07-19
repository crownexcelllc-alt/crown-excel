'use client';
import { useState } from 'react';
import Image from 'next/image';

import Background from '../../../Components/Images/productsBg.png'

import Laptop from '../../../Components/Images/laptops.png'
import Desktop from '../../../Components/Images/pc.png'
import Screen from '../../../Components/Images/screen.png'
import Printer from '../../../Components/Images/printer.png'
import Routerr from '../../../Components/Images/Routers.png'
import Switching from '../../../Components/Images/Switching.png'
import Scanner from '../../../Components/Images/scanner.png'
import Keyboard from '../../../Components/Images/keyboard.png'
import Accessories from '../../../Components/Images/accessories.png'
import Biometric from '../../../Components/Images/biometric.png'
import Cctv from '../../../Components/Images/cctv.png'
import { FaArrowRight } from "react-icons/fa";


const categories = [
    { name: 'Laptops', slug: 'laptops' },
    { name: 'Desktop', slug: 'desktop' },
    { name: 'All In One', slug: 'all-in-one' },
    { name: 'Printers', slug: 'printers' },
    { name: 'Routers', slug: 'routers' },
    { name: 'Switching', slug: 'switching' },
    { name: 'Scanners & Copier', slug: 'scanners-copier' },
    { name: 'Keyboards & Mouse', slug: 'keyboards-mouse' },
    { name: 'Accessories', slug: 'accessories' },
    { name: 'Biometrics', slug: 'biometrics' },
    { name: 'Phones & CCTV', slug: 'phones-cctv' },
];

const productDetails = {
    laptops: {
        title: 'Laptops',
        description: 'High-performance laptops for work and play. Choose from a wide range of brands and specs.',
        Image: Laptop
    },
    desktop: {
        title: 'Desktop',
        description: 'Powerful desktops for office, gaming, and creative work. Custom builds available.',
        Image: Desktop
    },
    'all-in-one': {
        title: 'All In One',
        description: 'Space-saving all-in-one PCs with sleek design and robust performance.',
        Image: Screen

    },
    printers: {
        title: 'Printers',
        description: 'Reliable printers for home and business, including laser, inkjet, and multifunction models.',
        Image: Printer
    },
    routers: {
        title: 'Routers',
        description: 'Fast and secure routers for seamless connectivity and network management.',
        Image: Routerr

    },
    switching: {
        title: 'Switching',
        description: 'Network switches for scalable and efficient networking solutions.',
        Image: Switching

    },
    'scanners-copier': {
        title: 'Scanners & Copier',
        description: 'High-resolution scanners and copiers for all your document needs.',
        Image: Scanner

    },
    'keyboards-mouse': {
        title: 'Keyboards & Mouse',
        description: 'Ergonomic keyboards and mice for comfortable and productive use.',
        Image: Keyboard

    },
    accessories: {
        title: 'Accessories',
        description: 'A wide range of computer accessories to enhance your setup.',
        Image: Accessories

    },
    biometrics: {
        title: 'Biometrics',
        description: 'Advanced biometric devices for secure authentication and access control.',
        Image: Biometric

    },
    'phones-cctv': {
        title: 'Phones & CCTV',
        description: 'Latest phones and CCTV systems for communication and security.',
        Image: Cctv

    },
};

const AllProducts = () => {
    const [active, setActive] = useState(categories[0].slug);

    return (
        <div>
            <div className="lg:flex lg:flex-col hidden md:flex md:flex-col">
                <div className="links-tab bg-yellow-400 py-6 text-center">
                    <h2 className="text-2xl font-bold text-green-900 mb-4">All Products</h2>
                    <div className="flex flex-wrap justify-center gap-2 px-1">
                        {categories.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => setActive(item.slug)}
                                className={`px-4 py-2 border border-green-900 rounded-lg text-sm font-medium transition
                ${active === item.slug ? 'bg-green-900 text-white' : 'bg-yellow-300 text-green-900 hover:bg-yellow-200'}`}
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                </div>
                <div className=" h-[500px] w-full   flex  items-center justify-around " style={{
                    backgroundImage: `url(${Background.src})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    minHeight: '250px'
                }}>
                    <div className="all-products-left flex mt-[60px] flex-col items-center justify-center">
                        <h1 className='text-[56px] font-[600]'>{productDetails[active].title}</h1>
                        <button className='flex items-center justify-center cursor-pointer leading-[15px] font-semibold gap-1 border-0 rounded-[30px] outline-0 bg-white h-[57px] w-[150px] text-[#084032]' style={{ boxShadow: '0px 0px 10px black' }}>Explore More <FaArrowRight className='border-2 rounded-full font-extrabold w-[25px] h-[25px] px-1 py-1' /></button>
                    </div>
                    <div className="all-products-right  mt-[150px]">
                        <Image width={539} height={224} className='md:w-[294.6px] md:h-[122.3px] lg:w-[539px] lg:h-[224px]' alt='img' src={productDetails[active].Image} />
                    </div>
                </div>
            </div>
            <div className="small-screen lg:hidden w-full md:hidden">
                <div className="header bg-[#ffd900] w-full h-[80px] flex flex-col items-center justify-center">
                    <h1 className='text-green-950 font-semibold text-[30px]'>All Products</h1>
                </div>
                <div
                    className="all-products flex flex-col"
                    style={{
                        backgroundImage: `url(${Background.src})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        minHeight: '250px'
                    }}
                >
                    {categories.map((item, index) => (
                        <div key={index} className="flex flex-col w-full">
                            <button
                                onClick={() => setActive(item.slug)}
                                className={`flex flex-col px-4 py-2 mt-2 rounded-lg text-sm font-medium transition
            ${active === item.slug ? 'bg-green-900 text-white' : 'bg-yellow-300 text-green-900 hover:bg-yellow-200'}`}
                            >
                                {item.name}
                            </button>
                            {active === item.slug && (
                                <div className="flex flex-col justify-between items-center  rounded-lg mt-2 p-4 shadow-md" style={{
                                    backgroundImage: `url(${Background.src})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    minHeight: '250px'
                                }}>
                                    <h2 className="text-lg text-white font-bold text-[30px]   ">{productDetails[item.slug].title}</h2>
                                    <button className='flex items-center text-[12px] justify-center cursor-pointer leading-[15px] font-semibold gap-1 border-0 rounded-[30px] outline-0 bg-white h-[45px] w-[130px] text-[#084032]' style={{ boxShadow: '0px 0px 10px black' }}>Explore More <FaArrowRight className='border-2 rounded-full font-extrabold w-[25px] h-[25px] px-1 py-1' /></button>
                                    <div className="w-full flex justify-center">
                                        <Image
                                            src={productDetails[item.slug].Image}
                                            alt={productDetails[item.slug].title}
                                            width={220}
                                            height={180}
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllProducts;