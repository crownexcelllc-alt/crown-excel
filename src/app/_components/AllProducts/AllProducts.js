'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import ContactFormPopup from '@/Components/ContactFormPopup/ContactFormPopup';

// Product Images
// Laptops
import BestLaptop1 from '@/Components/Images/BestLaptop1.png';
import BestLaptop2 from '@/Components/Images/BestLaptop2.png';
import BestLaptop3 from '@/Components/Images/BestLaptop3.png';
import LatestProduct1 from '@/Components/Images/LatestProduct1.png';
import LatestProduct2 from '@/Components/Images/LatestProduct2.png';
import LatestProduct3 from '@/Components/Images/LatestProduct3.png';
import Laptop1 from '@/Components/Images/laptop1.png';
import Laptop2 from '@/Components/Images/laptop2.png';

// Desktops
import DesktopBestProduct1 from '@/Components/Images/DesktopBestProduct1.png';
import DesktopBestProduct2 from '@/Components/Images/DesktopBestProduct2.png';
import AllinoneDesktop2 from '@/Components/Images/allinonedesktop2.png';
import AllinoneDesktop3 from '@/Components/Images/allinonedesktop3.png';
import AllinoneDesktop4 from '@/Components/Images/allinonedesktop4.png';
import AllinoneDesktop5 from '@/Components/Images/allinonedesktop5.png';

// All in One
import AllinoneLatestProduct1 from '@/Components/Images/AllinoneLatestProduct1.png';
import AllinoneLatestProduct2 from '@/Components/Images/AllinoneLatestProduct2.png';
import Oneinall2 from '@/Components/Images/oneinall2.png';
import Oneinall3 from '@/Components/Images/oneinall3.png';
import Oneinall4 from '@/Components/Images/oneinall4.png';
import Oneinall5 from '@/Components/Images/oneinall5.png';
import Oneinall6 from '@/Components/Images/oneinall6.png';

// Printers
import BestSellingPrinter1 from '@/Components/Images/bestsellingprinter1.png';
import BestSellingPrinter2 from '@/Components/Images/bestsellingprinter2.png';
import BestSellingPrinter3 from '@/Components/Images/bestsellingprinter3.png';
import AllinonePrinters1 from '@/Components/Images/allinoneprinters1.png';
import AllinonePrinters2 from '@/Components/Images/allinoneprinters2.png';
import AllinonePrinters3 from '@/Components/Images/allinoneprinters3.png';
import AllinonePrinters5 from '@/Components/Images/allinoneprinters5.png';
import AllinonePrinters6 from '@/Components/Images/allinoneprinters6.png';

// Routers
import RouterLatest1 from '@/Components/Images/routerlatest1.png';
import RouterLatest2 from '@/Components/Images/routerlatest2.png';
import RouterLatest3 from '@/Components/Images/routerlatest3.png';
import TopRouter1 from '@/Components/Images/toprouter1.png';
import TopRouter3 from '@/Components/Images/toprouter3.png';
import TopRouter4 from '@/Components/Images/toprouter4.png';

// Switching
import SwitchingLatest1 from '@/Components/Images/switchinglatest1.png';
import SwitchingLatest2 from '@/Components/Images/switchinglatest2.png';
import SwitchingLatest3 from '@/Components/Images/switchinglatest3.png';
import BestNetworkSwitches1 from '@/Components/Images/bestnetworkswitches1.png';
import BestNetworkSwitches2 from '@/Components/Images/bestnetworkswitches2.png';
import BestNetworkSwitches4 from '@/Components/Images/bestnetworkswitches4.png';

// Scanners & Copier
import ScannerBestSelling1 from '@/Components/Images/scannerbestselling1.png';
import ScannerBestSelling2 from '@/Components/Images/scannerbestselling2.png';
import ScannerBestSelling3 from '@/Components/Images/scannerbestselling3.png';
import ScannerPopular1 from '@/Components/Images/scannerpopular1.png';
import ScannerPopular3 from '@/Components/Images/scannerpopular3.png';
import ScannerPopular5 from '@/Components/Images/scannerpopular5.png';

// Keyboards & Mouse
import KeyboardLatest1 from '@/Components/Images/keyboardlatest1.png';
import KeyboardLatest2 from '@/Components/Images/keyboardlatest2.png';
import KeyboardLatest3 from '@/Components/Images/keyboardlatest3.png';
import BestSellingMice1 from '@/Components/Images/bestsellingmice1.png';
import BestSellingMice2 from '@/Components/Images/bestsellingmice2.png';
import BestSellingMice3 from '@/Components/Images/bestsellingmice3.png';

// Accessories
import AccessBestSelling1 from '@/Components/Images/acessbestselling1.png';
import AccessBestSelling2 from '@/Components/Images/acessbestselling2.png';
import AccessBestSelling3 from '@/Components/Images/acessbestselling3.png';
import BiometricAllinone4 from '@/Components/Images/biometricallinone4.png';
import Img24B3HA2_89 from '@/Components/Images/24B3HA2-89.webp';
import Img25B36H_89 from '@/Components/Images/25B36H-89.webp';

// Biometrics
import BiometricBestSelling1 from '@/Components/Images/biometricbestselling1.png';
import BiometricBestSelling2 from '@/Components/Images/biometricbestselling2.png';
import BiometricAllinone3 from '@/Components/Images/biometricallinone3.png';
import BiometricAllinone5 from '@/Components/Images/biometricallinone5.png';
import BiometricAllinone6 from '@/Components/Images/biometricallinone6.png';

// Phones & CCTV
import BestSellingPhone1 from '@/Components/Images/bestsellingphone1.png';
import BestSellingPhone2 from '@/Components/Images/bestsellingphone2.png';
import AllinonePhones2 from '@/Components/Images/allinonephones2.png';
import AllinonePhones3 from '@/Components/Images/allinonephones3.png';
import AllinonePhones4 from '@/Components/Images/allinonephones4.png';
import AllinonePhones6 from '@/Components/Images/allinonephones6.png';

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

const categoryPages = {
    'laptops': '/products/laptops',
    'desktop': '/products/pc',
    'all-in-one': '/products/all-in-one',
    'printers': '/products/printers',
    'routers': '/products/routers-access-points',
    'switching': '/products/switching',
    'scanners-copier': '/products/scanners-copier',
    'keyboards-mouse': '/products/keyboard-mouse',
    'accessories': '/products/accessories',
    'biometrics': '/products/biometrics',
    'phones-cctv': '/products/phones-cctv',
};

const productsByCategory = {
    laptops: [
        {
            title: 'LENOVO LEGION SLIM 5',
            brand: 'Lenovo',
            description: 'Unmatched performance with AMD/Intel processors and NVIDIA GeForce RTX graphics for gaming and creation.',
            image: BestLaptop1,
        },
        {
            title: 'Acer Aspire 3 A315 Laptop',
            brand: 'Acer',
            description: 'Reliable and budget-friendly Intel Core i3 laptop designed for everyday computing, performance, and portability.',
            image: BestLaptop2,
        },
        {
            title: 'Acer Aspire 5 A515',
            brand: 'Acer',
            description: 'Exceptional performance, FHD crisp display, and sleek professional styling for business multitasking.',
            image: BestLaptop3,
        },
        {
            title: 'Acer Predator Gaming Laptop',
            brand: 'Acer',
            description: 'Enhanced with 6GB NVIDIA GeForce RTX 3060 graphics card and high-refresh gaming display.',
            image: LatestProduct2,
        },
        {
            title: 'Acer Aspire Lite AL16',
            brand: 'Acer',
            description: 'Sleek modern laptop designed for solid everyday speed, portable durability, and business efficiency.',
            image: LatestProduct3,
        },
        {
            title: 'Acer Nitro V15 Gaming',
            brand: 'Acer',
            description: 'Powerful gaming rig with dedicated graphics, high-speed RAM, and dual-fan cooling technology.',
            image: LatestProduct1,
        },
        {
            title: 'Acer Nitro Lite NL16',
            brand: 'Acer',
            description: 'High performance multitasking with long battery life, sharp display, and responsive keyboard.',
            image: Laptop1,
        },
        {
            title: 'Acer Predator Helios',
            brand: 'Acer',
            description: 'Flagship gaming machine with advanced thermal cooling, RGB keyboard, and ultra-smooth graphics.',
            image: Laptop2,
        },
    ],
    desktop: [
        {
            title: 'Dell Alienware Aurora R15',
            brand: 'Dell',
            description: 'Ultimate choice for gaming enthusiasts and creators with premium dedicated graphics and liquid cooling.',
            image: DesktopBestProduct1,
        },
        {
            title: 'ASUS ExpertCenter D700 SC',
            brand: 'ASUS',
            description: 'Optimized business PC with compact form factor, robust security, and dependable commercial speed.',
            image: DesktopBestProduct2,
        },
        {
            title: 'Lenovo ThinkCentre M70q Tiny',
            brand: 'Lenovo',
            description: 'Compact yet powerful desktop computer designed for space-saving efficiency and high enterprise productivity.',
            image: AllinoneDesktop2,
        },
        {
            title: 'Acer Veriton VS2690G Tower',
            brand: 'Acer',
            description: 'Dependable desktop tower offering efficient multi-core processing for office tasks and business growth.',
            image: AllinoneDesktop3,
        },
        {
            title: 'Dell OptiPlex 3000 MT',
            brand: 'Dell',
            description: 'Dependable commercial desktop tower with expandable storage, robust connectivity, and enterprise reliability.',
            image: AllinoneDesktop4,
        },
        {
            title: 'HP 290 G3 Small Form Factor',
            brand: 'HP',
            description: 'Compact and cost-effective desktop bundle engineered for smooth daily office workflows.',
            image: AllinoneDesktop5,
        },
    ],
    'all-in-one': [
        {
            title: 'Apple iMac 24" M3',
            brand: 'Apple',
            description: 'Apple M3 chip with 8-core CPU and 8-core GPU with stunning 4.5K Retina display.',
            image: AllinoneLatestProduct2,
        },
        {
            title: 'Acer Aspire C24-1700 AIO',
            brand: 'Acer',
            description: 'Stylish, ultra-slim 24" All-in-One PC tailored for both home entertainment and office productivity.',
            image: AllinoneLatestProduct1,
        },
        {
            title: 'HP Envy 34-C1098Nh All-in-One',
            brand: 'HP',
            description: 'Premium 34-inch ultrawide All-in-One PC engineered for professional digital creators and multitasking.',
            image: Oneinall2,
        },
        {
            title: 'HP All-in-One 22-dd2267nh',
            brand: 'HP',
            description: 'Compact and efficient computing solution suitable for everyday business and family tasks.',
            image: Oneinall3,
        },
        {
            title: 'HP All-in-One 24-cr0122nh',
            brand: 'HP',
            description: 'Powered by 13th Gen Intel Core i5 processor with micro-edge FHD screen and modern ergonomics.',
            image: Oneinall4,
        },
        {
            title: 'HP Pavilion 27-CA2151NH',
            brand: 'HP',
            description: '27-inch powerhouse All-in-One combining powerful performance with sleek modern design.',
            image: Oneinall5,
        },
        {
            title: 'Lenovo IdeaCentre AIO 3 27IAP7',
            brand: 'Lenovo',
            description: 'Powerful 27" all-in-one computing solution designed to meet the demands of modern workspaces.',
            image: Oneinall6,
        },
    ],
    printers: [
        {
            title: 'Epson LQ-350 Dot Matrix',
            brand: 'Epson',
            description: 'Reliable and economical 24-pin 80-column dot matrix printer ideal for invoices, receipts, and forms.',
            image: BestSellingPrinter1,
        },
        {
            title: 'HP Color LaserJet Enterprise M652n',
            brand: 'HP',
            description: 'Fast, secure enterprise color laser printing with exceptional energy efficiency and sharp text.',
            image: BestSellingPrinter2,
        },
        {
            title: 'HP DeskJet Plus 6475 All-in-One',
            brand: 'HP',
            description: 'Wireless color printer, scanner, and copier with automatic document feeder for smart home office printing.',
            image: BestSellingPrinter3,
        },
        {
            title: 'HP LaserJet MFP M141a',
            brand: 'HP',
            description: 'Compact monochrome multifunction laser printer perfect for small offices and personal desks.',
            image: AllinonePrinters1,
        },
        {
            title: 'Canon PIXMA G3410 MegaTank',
            brand: 'Canon',
            description: 'Refillable ink tank 3-in-1 printer offering ultra-high page yields, Wi-Fi connectivity, and low print costs.',
            image: AllinonePrinters2,
        },
        {
            title: 'Canon PIXMA G2430 3-in-1',
            brand: 'Canon',
            description: 'Versatile refillable MegaTank printer designed for high-volume, cost-effective color printing.',
            image: AllinonePrinters3,
        },
        {
            title: 'HP Color LaserJet Enterprise M776z',
            brand: 'HP',
            description: 'High-end A3 enterprise multifunction printer with vivid professional color output and rapid scanning.',
            image: AllinonePrinters5,
        },
        {
            title: 'HP PageWide Pro 477dw MFP',
            brand: 'HP',
            description: 'High-speed business multifunction printer with low total cost of ownership and duplex single-pass scanning.',
            image: AllinonePrinters6,
        },
    ],
    routers: [
        {
            title: 'TP-Link EAP235-Wall Omada',
            brand: 'TP-Link',
            description: 'In-wall wireless AC1200 access point with Gigabit ports, ideal for hotels, offices, and campuses.',
            image: RouterLatest1,
        },
        {
            title: 'TP-Link EAP245 AC1750 Omada',
            brand: 'TP-Link',
            description: 'Dual-band gigabit ceiling-mount wireless access point engineered for dense business Wi-Fi networks.',
            image: RouterLatest2,
        },
        {
            title: 'TP-Link CPE220 Outdoor AP',
            brand: 'TP-Link',
            description: 'High-power 2.4GHz 300Mbps outdoor CPE for long-distance point-to-point wireless transmission.',
            image: RouterLatest3,
        },
        {
            title: 'Omada EAP783 Wi-Fi 7 AP',
            brand: 'TP-Link',
            description: 'Flagship tri-band Wi-Fi 7 access point with multi-gigabit throughput and ultra-low network latency.',
            image: TopRouter1,
        },
        {
            title: 'TP-Link TL-WA1201 Wireless AP',
            brand: 'TP-Link',
            description: 'AC1200 dual-band gigabit wireless access point with flexible passive PoE deployment options.',
            image: TopRouter3,
        },
        {
            title: 'TP-Link CPE605 5GHz Outdoor CPE',
            brand: 'TP-Link',
            description: 'Outdoor 5GHz 150Mbps 23dBi directional antenna for long-range enterprise wireless networking.',
            image: TopRouter4,
        },
    ],
    switching: [
        {
            title: 'TP-Link TL-SG105S 5-Port Gigabit',
            brand: 'TP-Link',
            description: '5-Port Gigabit steel desktop switch with plug-and-play simplicity and QoS traffic optimization.',
            image: SwitchingLatest1,
        },
        {
            title: 'Tenda TEG1005D 5-Port Gigabit',
            brand: 'Tenda',
            description: 'Unmanaged metal ethernet splitter with traffic prioritization and fanless energy-efficient operation.',
            image: SwitchingLatest2,
        },
        {
            title: 'YuanLey 5-Port Gigabit Switch',
            brand: 'YuanLey',
            description: 'Robust metal case desktop/wall-mount unmanaged switch for smooth, uninterrupted home and office networking.',
            image: SwitchingLatest3,
        },
        {
            title: 'NETGEAR 5-Port Gigabit Ethernet',
            brand: 'NETGEAR',
            description: 'High-reliability plug-and-play silent operation metal switch for desktop or wall mounting.',
            image: BestNetworkSwitches1,
        },
        {
            title: 'YuanLey Industrial 8-Port Gigabit',
            brand: 'YuanLey',
            description: 'DIN-rail IP30 rated industrial unmanaged network switch built to withstand extreme operating temperatures.',
            image: BestNetworkSwitches2,
        },
        {
            title: 'YuanLey 8-Port PoE+ Switch',
            brand: 'YuanLey',
            description: '8 PoE+ ports with 2 Gigabit uplinks and 120W total budget for IP cameras and access points.',
            image: BestNetworkSwitches4,
        },
    ],
    'scanners-copier': [
        {
            title: 'HP LaserJet Pro MFP 4103fdw',
            brand: 'HP',
            description: 'Monochrome laser multifunction printer/copier/scanner designed for heavy document workloads.',
            image: ScannerBestSelling1,
        },
        {
            title: 'Epson EcoTank L8050 Photo Scanner',
            brand: 'Epson',
            description: 'High-resolution imaging and document handling with ultra-low operating cost ink tank system.',
            image: ScannerBestSelling2,
        },
        {
            title: 'HP ScanJet Flow N9120 FN2 A3',
            brand: 'HP',
            description: 'Heavy-duty A3 flatbed document scanner with 200-page ADF for rapid, large-format scanning.',
            image: ScannerBestSelling3,
        },
        {
            title: 'Canon CanoScan LiDE 300',
            brand: 'Canon',
            description: 'Compact and lightweight flatbed scanner with 4 EZ buttons and crisp 2400x2400 dpi optical clarity.',
            image: ScannerPopular1,
        },
        {
            title: 'HP ScanJet Enterprise Flow 5000',
            brand: 'HP',
            description: 'High-speed sheet-fed duplex document scanner engineered for rapid enterprise paperless workflows.',
            image: ScannerPopular3,
        },
        {
            title: 'HP ScanJet Enterprise Flow 7500',
            brand: 'HP',
            description: 'Flatbed scanner with 100-page automatic feeder for smoothly digitizing books, ledgers, and papers.',
            image: ScannerPopular5,
        },
    ],
    'keyboards-mouse': [
        {
            title: 'AULA F99 Pro Wireless Mechanical',
            brand: 'AULA',
            description: 'Tri-mode Bluetooth, 2.4GHz & USB-C mechanical keyboard with hot-swappable tactile switches.',
            image: KeyboardLatest1,
        },
        {
            title: 'RedThunder K10 Wireless Gaming',
            brand: 'RedThunder',
            description: 'High-performance 2.4G wireless rechargeable RGB gaming keyboard with long-lasting battery life.',
            image: KeyboardLatest2,
        },
        {
            title: 'J JOYACCESS Wireless Combo',
            brand: 'J JOYACCESS',
            description: 'Ultra-slim wireless ergonomic keyboard and precision silent mouse combo for clean workspaces.',
            image: KeyboardLatest3,
        },
        {
            title: 'Meetion GM20 Backlit RGB Mouse',
            brand: 'Meetion',
            description: 'Ergonomic gaming mouse with 7-color breathing RGB, 3200 DPI, and precise responsive sensor.',
            image: BestSellingMice1,
        },
        {
            title: 'Cooler Master MM831 Wireless Mouse',
            brand: 'Cooler Master',
            description: 'Flagship wireless RGB mouse with Qi wireless charging, 32,000 DPI sensor, and durable Omron switches.',
            image: BestSellingMice2,
        },
        {
            title: 'Meetion Backlit Gaming Mouse',
            brand: 'Meetion',
            description: 'Comfortable textured grip, 7-color RGB backlight, and durable gaming switches for all-day comfort.',
            image: BestSellingMice3,
        },
    ],
    accessories: [
        {
            title: 'ASUS Dual GeForce RTX™ 4070 OC',
            brand: 'ASUS',
            description: 'High-performance 12GB GDDR6X graphics card with axial-tech fan design for gaming and rendering.',
            image: AccessBestSelling1,
        },
        {
            title: 'Dell Essential Laptop Sleeve 15',
            brand: 'Dell',
            description: 'Protective water-resistant neoprene sleeve with foam padding for 15-inch laptops on the move.',
            image: AccessBestSelling2,
        },
        {
            title: 'Meetion HP099 RGB Gaming Headset',
            brand: 'Meetion',
            description: 'Immersive stereo gaming headset with noise-canceling microphone, comfortable ear cushions, and RGB glow.',
            image: AccessBestSelling3,
        },
        {
            title: 'AOC 24B3HA2 24" FHD IPS Monitor',
            brand: 'AOC',
            description: '24-inch borderless Full HD IPS monitor with 100Hz refresh rate, built-in speakers, and vivid colors.',
            image: Img24B3HA2_89,
        },
        {
            title: 'AOC 25B36H 25" FHD Monitor',
            brand: 'AOC',
            description: 'Sleek 25-inch Full HD display with fast response time and eye-care low blue light mode.',
            image: Img25B36H_89,
        },
        {
            title: 'Kingston 16GB DDR5 High-Speed RAM',
            brand: 'Kingston',
            description: 'Next-generation DDR5 memory module engineered for extreme speed in workstations and desktop PCs.',
            image: BiometricAllinone4,
        },
    ],
    biometrics: [
        {
            title: 'ANVIZ Fingerprint Biometric Clock',
            brand: 'ANVIZ',
            description: 'Plug-and-play biometric employee attendance machine with RFID card and PIN authentication.',
            image: BiometricBestSelling1,
        },
        {
            title: 'Symcode 2D QR Bluetooth Scanner',
            brand: 'Symcode',
            description: '3-in-1 wireless barcode scanner with charging base, Bluetooth, and 2.4GHz connectivity.',
            image: BiometricBestSelling2,
        },
        {
            title: 'Anyeast 2D Wireless Barcode Scanner',
            brand: 'Anyeast',
            description: 'Handheld QR and 1D/2D barcode reader with long-range wireless cradle connection for retail.',
            image: BiometricAllinone3,
        },
        {
            title: 'NetumScan Automatic Barcode Scanner',
            brand: 'NetumScan',
            description: 'Omnidirectional hands-free barcode reader with high scanning speed for busy retail checkout counters.',
            image: BiometricAllinone6,
        },
        {
            title: '2D Handheld QR Barcode Scanner',
            brand: 'Biometric',
            description: 'High-sensitivity CMOS sensor scanner capable of reading digital screens and paper codes easily.',
            image: BiometricAllinone5,
        },
    ],
    'phones-cctv': [
        {
            title: 'Hikvision 4MP IP Security Camera',
            brand: 'Hikvision',
            description: 'Water and dust resistant IP67 outdoor network surveillance camera with high-clarity night vision.',
            image: BestSellingPhone1,
        },
        {
            title: 'Apple iPhone 16 (128GB)',
            brand: 'Apple',
            description: 'A18 Bionic chip with advanced dual-camera system, Action Button, and Ceramic Shield durability.',
            image: BestSellingPhone2,
        },
        {
            title: 'HIKVISION Outdoor Bullet Camera',
            brand: 'Hikvision',
            description: 'High-definition weatherproof bullet surveillance camera with smart IR illumination for 24/7 security.',
            image: AllinonePhones2,
        },
        {
            title: 'XVIM 8CH 1080P Wired CCTV System',
            brand: 'XVIM',
            description: 'Complete multi-channel security DVR system with night vision cameras and remote mobile monitoring.',
            image: AllinonePhones3,
        },
        {
            title: 'Hikvision PTZ Dome Security Camera',
            brand: 'Hikvision',
            description: 'Pan-tilt-zoom network dome camera with optical zoom and auto-tracking for wide area monitoring.',
            image: AllinonePhones4,
        },
        {
            title: 'Samsung Galaxy S24 Ultra',
            brand: 'Samsung',
            description: 'Flagship smartphone featuring Snapdragon 8 Gen 3, quad-camera system, and built-in S Pen.',
            image: AllinonePhones6,
        },
    ],
};

const AllProducts = () => {
    const [active, setActive] = useState(categories[0].slug);
    const [showContactPopup, setShowContactPopup] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const openProductInquiryModal = (product) => {
        setSelectedProduct(product);
        setShowContactPopup(true);
    };

    const activeProducts = productsByCategory[active] || [];
    const activeCategory = categories.find((c) => c.slug === active);
    const activeCategoryPage = categoryPages[active] || '/products/laptops';

    return (
        <div className="w-full py-8 font-montserrat">
            {/* Filter Buttons Header - Exactly as existing design */}
            <div className="links-tab py-6 text-center">
                <h2 className="text-2xl font-bold text-green-900 mb-4">Our Product Catalog</h2>
                <div className="flex flex-wrap justify-center gap-2 px-1">
                    {categories.map((item, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => setActive(item.slug)}
                            aria-pressed={active === item.slug}
                            className={`px-4 py-2 border border-green-900 rounded-lg text-sm font-medium transition text-black hover:text-white ${
                                active === item.slug
                                    ? 'bg-green-900 text-white'
                                    : 'bg-[#defaca] text-black hover:bg-green-900'
                            }`}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Product Cards Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch">
                    {activeProducts.map((product, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-white p-3.5 sm:p-4 rounded-2xl border border-[#147A5F] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
                        >
                            {/* Product Image on Pure White Background */}
                            <div className="relative w-full h-44 sm:h-48 bg-white flex items-center justify-center overflow-hidden rounded-xl mb-3">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Content container */}
                            <div className="w-full flex flex-col flex-grow justify-between">
                                <div className="w-full text-center">
                                    {product.brand && (
                                        <span className="text-[11px] font-semibold tracking-wider uppercase text-[#147A5F] bg-[#defaca] px-2.5 py-0.5 rounded-full inline-block mb-1.5 font-montserrat">
                                            {product.brand}
                                        </span>
                                    )}
                                    <h3
                                        className="w-full font-montserrat font-bold text-[14px] sm:text-[15px] text-[#171717] leading-tight min-h-[38px] mb-1.5 flex items-center justify-center text-center"
                                        title={product.title}
                                    >
                                        <span className="line-clamp-2">{product.title}</span>
                                    </h3>
                                    <p className="w-full text-xs text-gray-500 font-montserrat line-clamp-2 mb-3 leading-relaxed text-center">
                                        {product.description}
                                    </p>
                                </div>

                                {/* Action Buttons: Inquire Now & WhatsApp Inline Side-by-Side */}
                                <div className="w-full grid grid-cols-2 gap-2 mt-auto pt-2 border-t border-gray-100">
                                    <button
                                        type="button"
                                        onClick={() => openProductInquiryModal(product)}
                                        className="w-full py-2 px-1.5 bg-[#147A5F] hover:bg-[#0f5f4a] text-white text-[11px] sm:text-xs font-bold font-montserrat tracking-wide uppercase flex items-center justify-center gap-1 transition-all rounded-lg text-center cursor-pointer"
                                    >
                                        <span>Inquire</span>
                                        <ArrowRight className="w-3 h-3 shrink-0" />
                                    </button>
                                    <a
                                        href={`https://api.whatsapp.com/send/?phone=971505033860&text=${encodeURIComponent(
                                            `Hello Crown Excel, I am inquiring about ${product.title}.`
                                        )}&type=phone_number&app_absent=0`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full py-2 px-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-[11px] sm:text-xs font-bold font-montserrat tracking-wide uppercase flex items-center justify-center gap-1 transition-all rounded-lg text-center"
                                    >
                                        <FaWhatsapp className="w-3.5 h-3.5 shrink-0" />
                                        <span>WhatsApp</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Explore More Category Page Link */}
                <div className="flex justify-center mt-10">
                    <Link
                        href={activeCategoryPage}
                        className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#147A5F] hover:bg-[#084032] text-white text-sm font-semibold font-montserrat transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                    >
                        <span>View All {activeCategory?.name} Products</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>

            {/* Inquiry Form Modal */}
            <ContactFormPopup
                isOpen={showContactPopup}
                onClose={() => {
                    setShowContactPopup(false);
                    setSelectedProduct(null);
                }}
                defaultSubject="Wholesale Inquiries"
                showProductFields={true}
                initialProductName={selectedProduct?.title || selectedProduct?.name || ''}
                initialProductBarcode={selectedProduct?.barcode || selectedProduct?.brand || 'N/A'}
                isProductReadOnly={Boolean(selectedProduct)}
                requireCaptcha={false}
            />
        </div>
    );
};

export default AllProducts;
