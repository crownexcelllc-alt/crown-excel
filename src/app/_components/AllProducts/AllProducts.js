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
import Link from 'next/link';


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
        description: 'Explore high-performance laptops with Intel/AMD processors, SSD storage, FHD/4K displays, and long battery life. Ideal for business, gaming, and everyday use.',
        Image: Laptop,
        href: '/products/laptops'
    },
    desktop: {
        title: 'Desktop',
        description: 'Powerful desktops featuring multi-core CPUs, high RAM, SSD/HDD options, and dedicated graphics. Perfect for office productivity, creative work, and gaming. Custom builds available.',
        Image: Desktop,
        href: '/products/pc'
    },
    'all-in-one': {
        title: 'All In One',
        description: 'Sleek all-in-one PCs with integrated FHD displays, compact design, and efficient Intel/AMD processors. Save space without compromising on performance.',
        Image: Screen,
        href: '/products/all-in-one'
    },
    printers: {
        title: 'Printers',
        description: 'Reliable laser and inkjet printers with wireless connectivity, duplex printing, and multifunction (print/scan/copy) features for home and business.',
        Image: Printer,
        href: '/products/printers'
    },
    routers: {
        title: 'Routers',
        description: 'High-speed Wi-Fi 6/5 routers with dual-band support, advanced security, and easy setup for seamless internet and network management.',
        Image: Routerr,
        href: '/products/routers-access-points'
    },
    switching: {
        title: 'Switching',
        description: 'Managed and unmanaged network switches with multiple Gigabit ports, PoE support, and robust performance for scalable networking.',
        Image: Switching,
        href: '/products/switching'
    },
    'scanners-copier': {
        title: 'Scanners & Copier',
        description: 'High-resolution scanners and copiers with fast scanning speeds, ADF, and versatile document handling for offices and businesses.',
        Image: Scanner,
        href: '/products/scanners-copier'
    },
    'keyboards-mouse': {
        title: 'Keyboards & Mouse',
        description: 'Ergonomic keyboards and precision mice, including wireless and mechanical options, for comfortable and productive computing.',
        Image: Keyboard,
        href: '/products/keyboard-mouse'
    },
    accessories: {
        title: 'Accessories',
        description: 'Enhance your setup with monitors, cables, adapters, laptop bags, cooling pads, and more essential computer accessories.',
        Image: Accessories,
        href: '/products/accessories'
    },
    biometrics: {
        title: 'Biometrics',
        description: 'Advanced biometric devices including fingerprint scanners, facial recognition, and access control systems for secure authentication.',
        Image: Biometric,
        href: '/products/biometrics'
    },
    'phones-cctv': {
        title: 'Phones & CCTV',
        description: 'Latest IP phones and CCTV systems with HD cameras, night vision, remote monitoring, and secure communication for home and business.',
        Image: Cctv,
        href: '/products/phones-cctv'
    },
};

const AllProducts = () => {
    const [active, setActive] = useState(categories[0].slug);

    return (
        <div>
            <div className="lg:flex lg:flex-col hidden md:flex md:flex-col">
                <div className="links-tab py-6 text-center">
                    <h2 className="text-2xl font-bold text-green-900 mb-4">All Products</h2>
                    <div className="flex flex-wrap justify-center gap-2 px-1">
                        {categories.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => setActive(item.slug)}
                                className={`px-4 py-2 border border-green-900 rounded-lg text-sm font-medium transition text-black hover:text-white                ${active === item.slug ? 'bg-green-900 text-white' : 'bg-[#defaca] text-black hover:bg-green-900 '}`}
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                </div>
                <div className=" h-[500px] w-full   flex  items-center justify-around " style={{
                    // backgroundImage: `url(${Background.src})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    minHeight: '250px'
                }}>
                    <div className="all-products-left flex mt-[60px] flex-col items-center justify-center">
                        <h1 className='text-[56px] font-[600] text-black '>{productDetails[active].title}</h1>
                        <p className="text-base text-gray-700 mt-2 mb-2 max-w-md text-center">
                            {productDetails[active].description}
                        </p>
                        <Link href={productDetails[active].href}>
                            <button className='flex mt-2.5 items-center justify-center cursor-pointer leading-[15px] font-semibold gap-1 border-0 rounded-[30px] outline-0 bg-white h-[57px] w-[150px] text-[#084032]' style={{ boxShadow: '0px 0px 10px black' }}>
                                Explore More <FaArrowRight className='border-2 rounded-full font-extrabold w-[25px] h-[25px] px-1 py-1' />
                            </button>
                        </Link>
                    </div>
                    <div className="all-products-right  mt-[150px]">
                        <Image width={539} height={224} className='md:w-[294.6px] md:h-[122.3px] lg:w-[539px] lg:h-[224px]' alt='img' src={productDetails[active].Image} />
                    </div>
                </div>
            </div>
            <div className="small-screen lg:hidden w-full md:hidden">
                <div className="header w-full h-[80px] flex flex-col items-center justify-center">
                    <h1 className='font-semibold text-green-900 text-[30px]'>All Products</h1>
                </div>
                <div
                    className="all-products flex flex-col"
                    style={{
                        // backgroundImage: `url(${Background.src})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        minHeight: '250px'
                    }}
                >
                    {categories.map((item, index) => (
                        <div key={index} className="flex flex-col w-full px-4">
                            <button
                                onClick={() => setActive(item.slug)}
                                className={`px-4 py-2 mt-2 border border-green-900 rounded-lg text-sm font-medium transition
            ${active === item.slug ? 'bg-green-900 text-white' : 'bg-[#defaca] text-black hover:bg-green-900 hover:text-white'}`}
                            >
                                {item.name}
                            </button>
                            {active === item.slug && (
                                <div className="flex flex-col justify-between items-center  rounded-lg mt-2 p-4 shadow-md" style={{
                                    // backgroundImage: `url(${Background.src})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    minHeight: '250px'
                                }}>
                                    <h2 className="text-lg text-black font-bold text-[30px]   ">{productDetails[item.slug].title}</h2>
                                    <p className="text-base text-gray-700 mt-2 mb-2 max-w-md text-center">
                                        {productDetails[item.slug].description}
                                    </p>
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