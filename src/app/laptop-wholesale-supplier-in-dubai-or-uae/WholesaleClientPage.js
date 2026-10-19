'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactFormPopup from '@/Components/ContactFormPopup/ContactFormPopup';

// Project Images
import BannerLaptop1 from '@/Components/Images/BannerLaptop1.png';
import BannerLaptop2 from '@/Components/Images/BannerLaptop2.png';
import GamingLaptop1 from '@/Components/Images/GamingLaptop1.png';
import GamingLaptop2 from '@/Components/Images/GamingLaptop2.png';
import BestLaptop1 from '@/Components/Images/BestLaptop1.png';
import BestLaptop2 from '@/Components/Images/BestLaptop2.png';
import BestLaptop3 from '@/Components/Images/BestLaptop3.png';
import LatestProduct1 from '@/Components/Images/LatestProduct1.png';
import LatestProduct2 from '@/Components/Images/LatestProduct2.png';
import UnleashLaptop from '@/Components/Images/UnleashLaptop.png';
import TowerImage from '@/Components/Images/TowerImage.png';
import DesktopBestProduct1 from '@/Components/Images/DesktopBestProduct1.png';
import GamingAcerPredatorHelios from '@/Components/Images/gaming_acer_predator_helios.jpg';
import GamingPredatorHeliosAi from '@/Components/Images/gaming_predator_helios_ai.jpg';
import GamingLenovoLegionPro5i from '@/Components/Images/gaming_lenovo_legion_pro5i.jpg';
import GamingLenovoLoq from '@/Components/Images/gaming_lenovo_loq.jpg';

// Inventory Product WebP Images (Matched by Product Barcode)
import Img24B3HA2_89 from '@/Components/Images/24B3HA2-89.webp';
import Img25B36H_89 from '@/Components/Images/25B36H-89.webp';
import Img83F30082AX from '@/Components/Images/83F30082AX.webp';
import Img83M4000YGP from '@/Components/Images/83M4000YGP.webp';
import Img83RR0040PS from '@/Components/Images/83RR0040PS.webp';
import Img83S0007FUS from '@/Components/Images/83S0007FUS.webp';
import Img90NB10J1_M04TK0 from '@/Components/Images/90NB10J1-M04TK0.webp';
import Img90NB10J1_M04TL0 from '@/Components/Images/90NB10J1-M04TL0.webp';
import Img90NB10T1_M01YX0 from '@/Components/Images/90NB10T1-M01YX0.webp';
import Img90NB10T2_M01YY0 from '@/Components/Images/90NB10T2-M01YY0.webp';
import Img90NB14Q2_M003W0 from '@/Components/Images/90NB14Q2-M003W0.webp';
import Img90NB16G2_M00230 from '@/Components/Images/90NB16G2-M00230.webp';
import Img90NX0801_M04XV0 from '@/Components/Images/90NX0801-M04XV0.webp';
import ImgD78MQEA_BH5 from '@/Components/Images/D78MQEA_BH5.webp';
import ImgNH_QVUEM_002 from '@/Components/Images/NH.QVUEM.002.webp';
import ImgNH_QX5EM_003 from '@/Components/Images/NH.QX5EM.003.webp';
import ImgNX_BSQEM_001 from '@/Components/Images/NX.BSQEM.001.webp';
import ImgNX_DGJEM_002 from '@/Components/Images/NX.DGJEM.002.webp';
import ImgNX_DTGEM_001 from '@/Components/Images/NX.DTGEM.001.webp';
import ScreenImage from '@/Components/Images/screen.png';
import LatestProduct3 from '@/Components/Images/LatestProduct3.png';

// Brand Logos
import DellLogo from '@/Components/Images/Dell2.png';
import HPLogo from '@/Components/Images/HP2.png';
import LenovoLogo from '@/Components/Images/Lenovo.png';
import AppleLogo from '@/Components/Images/Apple.png';
import AsusLogo from '@/Components/Images/Asus2.png';
import AcerLogo from '@/Components/Images/Acer2.png';
import MsiLogo from '@/Components/Images/Msi.png';
import MicrosoftLogo from '@/Components/Images/Microsoft.png';

// Lucide Icons
import {
  Laptop,
  ShieldCheck,
  Truck,
  CheckCircle2,
  ChevronDown,
  RefreshCw,
  Boxes,
  Cpu,
  Layers,
  Wrench,
  Clock,
  PhoneCall,
  Mail,
  MapPin,
  Sparkles,
  ArrowRight,
  Send,
  DollarSign,
  PackageCheck,
  FileCheck2,
  Check,
  Award,
  Globe2,
  CreditCard,
  Settings,
  HardDrive,
  Users
} from 'lucide-react';
import { FaHandshake, FaCreditCard, FaCog, FaWhatsapp } from 'react-icons/fa';

function getTwoLineTitle(name) {
  const words = name.trim().split(/\s+/);
  if (words.length <= 1) return { line1: name, line2: '\u00A0' };

  if (name.startsWith('Lenovo V15')) return { line1: 'Lenovo V15', line2: 'Gen 6' };
  if (name.startsWith('ACER TRAVELMATE')) return { line1: 'ACER TRAVELMATE', line2: 'P214-56' };
  if (name.startsWith('ASUS EXPERTBOOK')) return { line1: 'ASUS EXPERTBOOK', line2: 'B1503CV' };
  if (name.startsWith('LENOVO IDEAPAD')) return { line1: 'LENOVO IDEAPAD', line2: 'SLIM 3I' };
  if (name.startsWith('ACER ASPIRE ALITE15-54P')) return { line1: 'ACER ASPIRE', line2: 'ALITE15-54P' };
  if (name.startsWith('Lenovo Legion Pro 5i')) return { line1: 'Lenovo Legion Pro 5i', line2: '(16", 10)' };

  let bestIdx = 1;
  let minDiff = Infinity;
  for (let i = 1; i < words.length; i++) {
    const l1 = words.slice(0, i).join(' ');
    const l2 = words.slice(i).join(' ');
    const diff = Math.abs(l1.length - l2.length);
    if (diff < minDiff) {
      minDiff = diff;
      bestIdx = i;
    }
  }
  return {
    line1: words.slice(0, bestIdx).join(' '),
    line2: words.slice(bestIdx).join(' ')
  };
}

export default function WholesaleClientPage() {
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [popupSubject, setPopupSubject] = useState('Wholesale Inquiries');


  const openInquiryModal = (subject = 'Wholesale Inquiries') => {
    setPopupSubject(subject);
    setShowContactPopup(true);
  };

  // =========================================================================
  // Authentic Crown Excel Hero Dynamic Category Animation
  // =========================================================================
  const heroCategories = useMemo(() => [
    { name: 'Gaming Laptops' },
    { name: 'Desktop PCs' },
    { name: 'Personal Laptops' },
    { name: 'All-in-One PCs' },
    { name: 'Business Laptops' },
    { name: 'Printers & Copiers' },
    { name: 'Routers & Switches' },
  ], []);

  const [activeHeroCatIndex, setActiveHeroCatIndex] = useState(0);
  const [typedHeroText, setTypedHeroText] = useState('Gaming Laptops');
  const [isHeroDeleting, setIsHeroDeleting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Respect Accessibility Reduced-Motion Preference
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);
      const listener = (e) => setPrefersReducedMotion(e.matches);
      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
    }
  }, []);

  // Smooth Typewriter Loop
  useEffect(() => {
    if (prefersReducedMotion) {
      const timer = setInterval(() => {
        setActiveHeroCatIndex((prev) => (prev + 1) % heroCategories.length);
      }, 3500);
      setTypedHeroText(heroCategories[activeHeroCatIndex].name);
      return () => clearInterval(timer);
    }

    const currentTarget = heroCategories[activeHeroCatIndex].name;
    let timer;

    if (!isHeroDeleting) {
      if (typedHeroText.length < currentTarget.length) {
        timer = setTimeout(() => {
          setTypedHeroText(currentTarget.slice(0, typedHeroText.length + 1));
        }, 85);
      } else {
        timer = setTimeout(() => {
          setIsHeroDeleting(true);
        }, 2200);
      }
    } else {
      if (typedHeroText.length > 0) {
        timer = setTimeout(() => {
          setTypedHeroText(currentTarget.slice(0, typedHeroText.length - 1));
        }, 40);
      } else {
        setIsHeroDeleting(false);
        setActiveHeroCatIndex((prev) => (prev + 1) % heroCategories.length);
      }
    }

    return () => clearTimeout(timer);
  }, [typedHeroText, isHeroDeleting, activeHeroCatIndex, heroCategories, prefersReducedMotion]);

  // =========================================================================
  // Authentic Business Laptop Inventory & Dynamic Cycle State
  // (Images use clean placeholders - easily replaced when client provides images)
  // =========================================================================
  const businessLaptops = [
    {
      id: 'acer-travelmate',
      brand: 'Acer',
      series: 'TravelMate',
      itemCode: 'NX.BSQEM.001',
      model: 'Acer TravelMate P214-56',
      processor: 'Intel Core Ultra 5 225U',
      processorDesc: 'Responsive Intel Core Ultra computing tailored for smooth multitasking and efficient hybrid office work.',
      ram: '8GB',
      storage: '512GB SSD',
      display: '14-inch WUXGA IPS',
      graphics: 'Intel shared memory',
      os: 'DOS',
      keyboard: 'English, backlit',
      color: 'Silver',
      // Easy image replacement: assign imported image here
      image: BestLaptop2,
      tagline: 'Lightweight Executive Durability for Modern Hybrid Workforces'
    },
    {
      id: 'asus-expertbook',
      brand: 'ASUS',
      series: 'ExpertBook',
      itemCode: '90NX0801-M04XV0',
      model: 'ASUS ExpertBook B1503CV',
      processor: 'Intel Core i3-1315U',
      processorDesc: 'Dependable 13th Gen Intel computing optimized for reliable office applications and daily business workflows.',
      ram: '8GB DDR5',
      storage: '256GB M.2 2280 PCIe 4.0 SSD',
      display: '15.6-inch FHD, 60Hz',
      graphics: 'Intel UHD Graphics',
      os: 'Windows 11 Home',
      keyboard: 'English',
      color: 'Gentle Grey',
      // Easy image replacement: assign imported image here
      image: BannerLaptop1,
      tagline: 'Enterprise Fleet Productivity with Full Business I/O Connectivity'
    },
    {
      id: 'lenovo-v-series',
      brand: 'Lenovo',
      series: 'V Series',
      itemCode: '83M4000YGP',
      model: 'Lenovo V15 Gen 6',
      processor: 'Intel N100',
      processorDesc: 'Efficient quad-core performance tailored for essential business tasks, web applications, and volume fleets.',
      ram: '8GB DDR5-4800 SODIMM',
      storage: '256GB M.2 SSD',
      display: '15.6-inch FHD (1920 × 1080)',
      graphics: 'Integrated Intel UHD Graphics',
      os: 'DOS',
      keyboard: 'Non-backlit English',
      color: 'Business Black',
      // Easy image replacement: assign imported image here
      image: BestLaptop1,
      tagline: 'Cost-Effective High-Volume Deployment for Schools & SMB Offices'
    }
  ];

  const [activeBusinessIndex, setActiveBusinessIndex] = useState(0);
  const [isBusinessHovered, setIsBusinessHovered] = useState(false);

  useEffect(() => {
    if (isBusinessHovered) return;
    const interval = setInterval(() => {
      setActiveBusinessIndex((prev) => (prev + 1) % businessLaptops.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isBusinessHovered, businessLaptops.length]);

  const activeLaptop = businessLaptops[activeBusinessIndex];

  // =========================================================================
  // Authentic Personal Laptop Inventory (7 Verified Models)
  // (Images use clean existing placeholders - easily replaced when client provides images)
  // =========================================================================
  const personalLaptops = [
    {
      id: 'acer-aspire-lite-36uj',
      category: 'Aspire Lite Series',
      brand: 'Acer',
      name: 'Acer Aspire Lite AL15-36P-36UJ',
      itemCode: 'NX.DGJEM.002',
      processor: 'Intel Core 3 N350',
      ram: '8GB',
      storage: '256GB SSD',
      display: '15.6" FHD',
      graphics: 'Intel shared graphics memory',
      os: 'DOS',
      keyboard: 'English',
      color: 'Silver',
      image: BestLaptop3
    },
    {
      id: 'acer-aspire-lite-54p',
      category: 'Aspire Lite Series',
      brand: 'Acer',
      name: 'Acer Aspire Lite AL15-54P',
      itemCode: 'NX.DTGEM.001',
      processor: 'Intel Core Ultra 5 115U',
      ram: '8GB',
      storage: '512GB SSD',
      display: '15.6" FHD',
      graphics: 'Intel shared graphics memory',
      os: 'DOS',
      keyboard: 'English',
      color: 'Silver',
      image: BestLaptop1
    },
    {
      id: 'asus-vivobook-bq4675',
      category: 'VivoBook Series',
      brand: 'ASUS',
      name: 'ASUS VivoBook X1504VA-BQ4675',
      itemCode: '90NB10J1-M04TL0',
      processor: 'Intel Core i3-1315U',
      ram: '8GB',
      storage: '512GB SSD',
      display: '15.6" FHD',
      graphics: 'Intel UHD Graphics',
      os: 'DOS',
      keyboard: 'English',
      color: 'Quiet Blue',
      image: UnleashLaptop
    },
    {
      id: 'asus-vivobook-bq1385',
      category: 'VivoBook Series',
      brand: 'ASUS',
      name: 'ASUS VivoBook A1502VA-BQ1385',
      itemCode: '90NB10T1-M01YX0',
      processor: 'Intel Core i7-13620H',
      ram: '16GB',
      storage: '512GB SSD',
      display: '15.6" FHD (1920 × 1080)',
      graphics: 'Intel UHD Graphics',
      os: 'DOS',
      keyboard: 'English',
      color: 'Quiet Blue',
      image: LatestProduct2
    },
    {
      id: 'asus-vivobook-bq4675-ar',
      category: 'VivoBook Series',
      brand: 'ASUS',
      name: 'ASUS VivoBook X1504VA-BQ4675',
      itemCode: '90NB10J1-M04TK0',
      processor: 'Intel Core i3-1315U',
      ram: '8GB',
      storage: '512GB SSD',
      display: '15.6" FHD',
      graphics: 'Intel UHD Graphics',
      os: 'DOS',
      keyboard: 'Arabic',
      color: 'Quiet Blue',
      image: UnleashLaptop
    },
    {
      id: 'asus-vivobook-bq1386',
      category: 'VivoBook Series',
      brand: 'ASUS',
      name: 'ASUS VivoBook A1502VA-BQ1386',
      itemCode: '90NB10T2-M01YY0',
      processor: 'Intel Core i7-13620H',
      ram: '16GB',
      storage: '512GB SSD',
      display: '15.6" FHD (1920 × 1080)',
      graphics: 'Intel UHD Graphics',
      os: 'DOS',
      keyboard: 'English',
      color: 'Cool Silver',
      image: LatestProduct1
    },
    {
      id: 'asus-vivobook-s5507qa',
      category: 'VivoBook Series',
      brand: 'ASUS',
      name: 'ASUS VivoBook S5507QA-MA007W',
      itemCode: '90NB14Q2-M003W0',
      processor: 'Qualcomm Snapdragon X Plus X1P42100',
      ram: '16GB',
      storage: '1TB SSD',
      display: '15.6" OLED (2880 × 1620)',
      graphics: 'Qualcomm Adreno X1-45',
      os: 'Windows 11 Home',
      keyboard: 'English, 1-zone RGB backlit',
      color: 'Cool Silver',
      image: DesktopBestProduct1
    }
  ];

  // =========================================================================
  // Authentic Consumer Laptop Standards Data for Animated Rotation
  // (Synchronizes image, model context, and verifiable percentage metrics)
  // EASY IMAGE SETUP: To update product images, simply assign the new imported
  // image asset to the 'image' field of the corresponding laptop below.
  // =========================================================================
  const consumerLaptopsData = [
    {
      id: 'acer-aspire-lite-36uj',
      name: 'Acer Aspire Lite AL15-36P-36UJ',
      brand: 'Acer',
      category: 'Aspire Lite Series',
      itemCode: 'NX.DGJEM.002',
      processor: 'Intel Core 3 N350',
      ram: '8GB',
      storage: '256GB SSD',
      display: '15.6-inch FHD',
      graphics: 'Intel shared graphics memory',
      os: 'DOS',
      keyboard: 'English',
      color: 'Silver',
      image: BestLaptop3,
      metrics: [
        { label: 'Factory-Sealed Original Stock', value: 99 },
        { label: 'High-Resolution 15.6" FHD Panel', value: 100 },
        { label: 'Same-Day Dubai Fleet Dispatch', value: 96 },
        { label: 'Retailer Volume Margin Advantage', value: 94 }
      ]
    },
    {
      id: 'acer-aspire-lite-54p',
      name: 'Acer Aspire Lite AL15-54P',
      brand: 'Acer',
      category: 'Aspire Lite Series',
      itemCode: 'NX.DTGEM.001',
      processor: 'Intel Core Ultra 5 115U',
      ram: '8GB',
      storage: '512GB SSD',
      display: '15.6-inch FHD',
      graphics: 'Intel shared graphics memory',
      os: 'DOS',
      keyboard: 'English',
      color: 'Silver',
      image: BestLaptop1,
      metrics: [
        { label: 'Factory-Sealed Original Stock', value: 99 },
        { label: 'Core Ultra AI Processing Efficiency', value: 97 },
        { label: 'Same-Day Dubai Fleet Dispatch', value: 96 },
        { label: 'Retailer & Reseller Margin Advantage', value: 95 }
      ]
    },
    {
      id: 'asus-vivobook-bq4675',
      name: 'ASUS VivoBook X1504VA-BQ4675',
      brand: 'ASUS',
      category: 'VivoBook Series',
      itemCode: '90NB10J1-M04TL0',
      processor: 'Intel Core i3-1315U',
      ram: '8GB',
      storage: '512GB SSD',
      display: '15.6-inch FHD',
      graphics: 'Intel UHD Graphics',
      os: 'DOS',
      keyboard: 'English',
      color: 'Quiet Blue',
      image: UnleashLaptop,
      metrics: [
        { label: 'Factory-Sealed Original Stock', value: 99 },
        { label: 'High-Resolution 15.6" FHD Display', value: 100 },
        { label: 'Same-Day Dubai Fleet Dispatch', value: 96 },
        { label: 'Trader Bulk Margin Advantage', value: 95 }
      ]
    },
    {
      id: 'asus-vivobook-bq1385',
      name: 'ASUS VivoBook A1502VA-BQ1385',
      brand: 'ASUS',
      category: 'VivoBook Series',
      itemCode: '90NB10T1-M01YX0',
      processor: 'Intel Core i7-13620H',
      ram: '16GB',
      storage: '512GB SSD',
      display: '15.6-inch FHD (1920 × 1080)',
      graphics: 'Intel UHD Graphics',
      os: 'DOS',
      keyboard: 'English',
      color: 'Quiet Blue',
      image: LatestProduct2,
      metrics: [
        { label: 'Factory-Sealed Original Stock', value: 100 },
        { label: 'Core i7 Computational Output', value: 98 },
        { label: 'Same-Day Dubai Fleet Dispatch', value: 96 },
        { label: 'Retailer & Reseller Margin Advantage', value: 95 }
      ]
    },
    {
      id: 'asus-vivobook-bq4675-ar',
      name: 'ASUS VivoBook X1504VA-BQ4675',
      brand: 'ASUS',
      category: 'VivoBook Series',
      itemCode: '90NB10J1-M04TK0',
      processor: 'Intel Core i3-1315U',
      ram: '8GB',
      storage: '512GB SSD',
      display: '15.6-inch FHD',
      graphics: 'Intel UHD Graphics',
      os: 'DOS',
      keyboard: 'Arabic',
      color: 'Quiet Blue',
      image: UnleashLaptop,
      metrics: [
        { label: 'Factory-Sealed Original Stock', value: 99 },
        { label: 'Factory Arabic & English Keyboard', value: 100 },
        { label: 'Local UAE Tender Compliance', value: 98 },
        { label: 'Same-Day Dubai Fleet Dispatch', value: 96 }
      ]
    },
    {
      id: 'asus-vivobook-bq1386',
      name: 'ASUS VivoBook A1502VA-BQ1386',
      brand: 'ASUS',
      category: 'VivoBook Series',
      itemCode: '90NB10T2-M01YY0',
      processor: 'Intel Core i7-13620H',
      ram: '16GB',
      storage: '512GB SSD',
      display: '15.6-inch FHD (1920 × 1080)',
      graphics: 'Intel UHD Graphics',
      os: 'DOS',
      keyboard: 'English',
      color: 'Cool Silver',
      image: LatestProduct1,
      metrics: [
        { label: 'Factory-Sealed Original Stock', value: 100 },
        { label: 'High-Resolution 15.6" FHD Panel', value: 100 },
        { label: 'Same-Day Dubai Fleet Dispatch', value: 96 },
        { label: 'Volume Reseller Margin Advantage', value: 95 }
      ]
    },
    {
      id: 'asus-vivobook-s5507qa',
      name: 'ASUS VivoBook S5507QA-MA007W',
      brand: 'ASUS',
      category: 'VivoBook Series',
      itemCode: '90NB14Q2-M003W0',
      processor: 'Qualcomm Snapdragon X Plus X1P42100',
      ram: '16GB',
      storage: '1TB SSD',
      display: '15.6-inch OLED (2880 × 1620)',
      graphics: 'Qualcomm Adreno X1-45',
      os: 'Windows 11 Home',
      keyboard: 'English, one-zone RGB backlit',
      color: 'Cool Silver',
      image: DesktopBestProduct1,
      metrics: [
        { label: '2.8K OLED Display Color Accuracy', value: 100 },
        { label: 'Snapdragon AI Battery & Efficiency', value: 99 },
        { label: '1TB High-Capacity NVMe Storage', value: 97 },
        { label: 'Factory-Sealed Brand Warranty', value: 100 }
      ]
    }
  ];

  // Dynamic Animated Product Rotation for "Wholesale Standards for Everyday Consumer Hardware"
  const [activeConsumerIndex, setActiveConsumerIndex] = useState(0);
  const [isConsumerHovered, setIsConsumerHovered] = useState(false);

  useEffect(() => {
    if (isConsumerHovered) return;
    const interval = setInterval(() => {
      setActiveConsumerIndex((prev) => {
        let nextIndex;
        do {
          nextIndex = Math.floor(Math.random() * consumerLaptopsData.length);
        } while (nextIndex === prev && consumerLaptopsData.length > 1);
        return nextIndex;
      });
    }, 4500);
    return () => clearInterval(interval);
  }, [isConsumerHovered, consumerLaptopsData.length]);

  const currentConsumerLaptop = consumerLaptopsData[activeConsumerIndex] || consumerLaptopsData[0];

  const brandLogos = [
    { name: 'Dell', logo: DellLogo },
    { name: 'HP', logo: HPLogo },
    { name: 'Lenovo', logo: LenovoLogo },
    { name: 'Apple', logo: AppleLogo },
    { name: 'ASUS', logo: AsusLogo },
    { name: 'Acer', logo: AcerLogo },
    { name: 'MSI', logo: MsiLogo },
    { name: 'Microsoft', logo: MicrosoftLogo },
  ];

  const worldwideServiceMarkets = [
    { code: 'sa', name: 'Saudi Arabia', region: 'GCC Hub', hub: 'Riyadh, Jeddah, Dammam', freight: 'Daily Cargo' },
    { code: 'ae', name: 'United Arab Emirates', region: 'Domestic Hub', hub: 'Dubai, Abu Dhabi, Sharjah', freight: 'Same-Day Fleet' },
    { code: 'kw', name: 'Kuwait', region: 'GCC Hub', hub: 'Kuwait City, Hawalli', freight: 'Daily Cargo' },
    { code: 'qa', name: 'Qatar', region: 'GCC Hub', hub: 'Doha, Al Rayyan', freight: 'Daily Cargo' },
    { code: 'bh', name: 'Bahrain', region: 'GCC Hub', hub: 'Manama, Riffa', freight: 'Daily Cargo' },
    { code: 'om', name: 'Oman', region: 'GCC Hub', hub: 'Muscat, Sohar, Salalah', freight: 'Daily Cargo' },
    { code: 'iq', name: 'Iraq', region: 'Middle East', hub: 'Baghdad, Erbil, Basra', freight: 'Daily Cargo' },
    { code: 'in', name: 'India', region: 'South Asia', hub: 'Mumbai, Delhi, Bengaluru', freight: 'Daily Cargo' },
    { code: 'pk', name: 'Pakistan', region: 'South Asia', hub: 'Karachi, Lahore, Islamabad', freight: 'Daily Cargo' },
    { code: 'az', name: 'Azerbaijan', region: 'Central Asia', hub: 'Baku, Ganja, Sumqayit', freight: 'Daily Cargo' },
    { code: 'uz', name: 'Uzbekistan', region: 'Central Asia', hub: 'Tashkent, Samarkand', freight: 'Daily Cargo' },
    { code: 'kz', name: 'Kazakhstan', region: 'Central Asia', hub: 'Almaty, Astana, Shymkent', freight: 'Daily Cargo' },
    { code: 'eg', name: 'Egypt', region: 'North Africa', hub: 'Cairo, Alexandria', freight: 'Daily Cargo' },
    { code: 'ng', name: 'Nigeria', region: 'West Africa', hub: 'Lagos, Abuja, Kano', freight: 'Daily Cargo' },
    { code: 'ke', name: 'Kenya', region: 'East Africa', hub: 'Nairobi, Mombasa', freight: 'Daily Cargo' },
    { code: 'tz', name: 'Tanzania', region: 'East Africa', hub: 'Dar es Salaam, Arusha', freight: 'Daily Cargo' },
  ];

  return (
    <div className="bg-[#FDFDFE] text-[#2D2D2D] selection:bg-[#147A5F] selection:text-white">

      {/* ========================================================================= */}
      {/* 1. HERO SECTION: Anton 84px Typography & Plus Jakarta Sans Elements */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F7FAF9] via-white to-white pt-14 pb-16 sm:pt-20 sm:pb-24 border-b border-gray-100">
        {/* Subtle Ambient Radial Glow for Depth */}
        <div
          aria-hidden="true"
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[850px] h-[320px] bg-emerald-100/30 blur-[110px] rounded-full pointer-events-none -z-0"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          {/* User-Specified Display Heading (Anton, consistent font size across all lines including badge) */}
          <h1
            className="font-anton font-normal uppercase text-center text-3xl sm:text-5xl md:text-6xl lg:text-[80px] xl:text-[84px] tracking-[-0.035em] leading-[0.95]"
            style={{
              fontFamily: "'Anton', Impact, sans-serif",
              fontWeight: 400,
              letterSpacing: '-0.035em',
              lineHeight: 0.95,
              textTransform: 'uppercase',
            }}
          >
            <span className="block not-italic text-[#171717] lg:whitespace-nowrap">
              Looking  <p className="inline-block bg-[#FFE500] py-2 px-3"> Wholesale </p> Deals For
            </span>
            {/* Dynamic Animated Category Typewriter */}
            <span
              className="block italic text-[#147A5F] mt-1 sm:mt-1.5 md:mt-2"
              style={{ fontStyle: 'italic' }}
            >
              <span className="inline-flex items-center justify-center min-h-[1.15em] sm:min-h-[1.15em] align-middle">
                {/* Animated Typing Text */}
                <span className="inline-flex items-center text-[#147A5F]">
                  <span>{typedHeroText || '\u00A0'}</span>
                  {/* Blinking Cursor */}
                  {!prefersReducedMotion && (
                    <span
                      aria-hidden="true"
                      className="inline-block w-[3px] sm:w-[4px] md:w-[5px] h-[0.7em] bg-[#147A5F] ml-1 sm:ml-1.5 rounded-full animate-pulse align-middle"
                    />
                  )}
                </span>
              </span>
            </span>
            <span className="block mt-2 sm:mt-3 md:mt-4">
              <span
                className="inline-block not-italic bg-[#147A5F] text-white px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-3.5 lg:py-4 rounded-full shadow-sm lg:whitespace-nowrap transform -rotate-[0.7deg] origin-center"
                style={{
                  fontStyle: 'normal',
                  transform: 'rotate(-0.7deg)',
                }}
              >
                Best Supplier in Dubai &amp; UAE
              </span>
            </span>
          </h1>

          {/* Subtitle Paragraph (Plus Jakarta Sans) */}
          <p className="text-sm sm:text-base md:text-[17px] text-gray-600 leading-relaxed font-jakarta font-normal mt-5 sm:mt-7 mb-7 sm:mb-9 max-w-2xl sm:max-w-3xl mx-auto">
            Crown Excel is a trusted wholesale supplier of commercial, gaming, and business laptops in Dubai and across the UAE. We deliver authentic factory-sealed inventory, competitive bulk rates, and fast local fulfillment to IT resellers and corporate clients.
          </p>

          {/* Centered Action Buttons (Plus Jakarta Sans) */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 font-jakarta">
            <button
              type="button"
              onClick={() => openInquiryModal('Wholesale Inquiries - Request Catalog')}
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-[#147A5F] hover:bg-[#0f604b] text-white font-semibold text-sm sm:text-[15px] shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <Send className="w-4 h-4" />
              <span>Request Wholesale Quote</span>
            </button>

            <a
              href={`https://wa.me/97143540566?text=${encodeURIComponent('Hello Crown Excel, I am inquiring about wholesale laptops.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm sm:text-[15px] shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <a
              href="tel:+97143540566"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-white hover:bg-gray-50 text-gray-800 font-semibold text-sm sm:text-[15px] border border-gray-200/90 shadow-2xs hover:shadow-xs transition-all duration-200 transform hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <PhoneCall className="w-4 h-4 text-[#147A5F]" />
              <span>+971 4-354 0566</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* LAPTOP WHOLESALE CATEGORIES: GAMING, BUSINESS & PERSONAL LAPTOPS */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-16 lg:py-20 bg-[#147A5F] relative overflow-hidden">
        {/* Subtle Ambient Decorative Glow */}
        <div
          aria-hidden="true"
          className="absolute -top-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-24 -right-24 w-96 h-96 bg-black/15 rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Three Simplified Category Cards Arranged Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8 items-stretch">

            {/* 1. Gaming Laptops Card */}
            <div className="bg-white text-[#171717] rounded-none p-6 sm:p-7 lg:p-8 shadow-xl border border-emerald-100/60 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="relative w-full h-44 sm:h-48 lg:h-52 mb-5 flex items-center justify-center overflow-hidden">
                <Image
                  src={BannerLaptop1}
                  alt="Gaming Laptops"
                  className="max-h-full w-auto object-contain transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>
              <h2 className="font-montserrat font-bold text-xl sm:text-2xl lg:text-[24px] text-[#171717] leading-tight mb-2.5 tracking-tight">
                Gaming Laptops
              </h2>
              <p className="font-inter text-[#4B5563] text-xs sm:text-sm lg:text-[14px] leading-relaxed">
                High-performance wholesale gaming laptops equipped with dedicated NVIDIA RTX graphics, multi-core processors, and high-refresh displays.
              </p>
            </div>

            {/* 2. Business Laptops Card */}
            <div className="bg-white text-[#171717] rounded-none p-6 sm:p-7 lg:p-8 shadow-xl border border-emerald-100/60 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="relative w-full h-44 sm:h-48 lg:h-52 mb-5 flex items-center justify-center overflow-hidden">
                <Image
                  src={BestLaptop1}
                  alt="Business Laptops"
                  className="max-h-full w-auto object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h2 className="font-montserrat font-bold text-xl sm:text-2xl lg:text-[24px] text-[#171717] leading-tight mb-2.5 tracking-tight">
                Business Laptops
              </h2>
              <p className="font-inter text-[#4B5563] text-xs sm:text-sm lg:text-[14px] leading-relaxed">
                Reliable commercial and enterprise laptops engineered for productivity, all-day battery endurance, and business-grade security.
              </p>
            </div>

            {/* 3. Personal Laptops Card */}
            <div className="bg-white text-[#171717] rounded-none p-6 sm:p-7 lg:p-8 shadow-xl border border-emerald-100/60 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="relative w-full h-44 sm:h-48 lg:h-52 mb-5 flex items-center justify-center overflow-hidden">
                <Image
                  src={BestLaptop2}
                  alt="Personal Laptops"
                  className="max-h-full w-auto object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h2 className="font-montserrat font-bold text-xl sm:text-2xl lg:text-[24px] text-[#171717] leading-tight mb-2.5 tracking-tight">
                Personal Laptops
              </h2>
              <p className="font-inter text-[#4B5563] text-xs sm:text-sm lg:text-[14px] leading-relaxed">
                Everyday consumer laptops offering responsive performance, crisp displays, and portable designs for home, study, and travel.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. WHOLESALE LAPTOP INVENTORY IN DUBAI & UAE (ALL CATEGORIES) */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#F8FAFC] border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
            <h2
              className="font-anton font-normal uppercase text-center text-3xl sm:text-4xl lg:text-[46px] tracking-[-0.035em] leading-[1.05]"
              style={{
                fontFamily: "'Anton', Impact, sans-serif",
                fontWeight: 400,
                letterSpacing: '-0.035em',
                lineHeight: 1.05,
                textTransform: 'uppercase',
              }}
            >
              <span className="text-[#171717] block not-italic">
                Products Are Ready in Stock For Wholesale
              </span>
              <span
                className="text-[#147A5F] italic block mt-1 sm:mt-1.5"
                style={{ fontStyle: 'italic' }}
              >
                Contact Now
              </span>
            </h2>
            <p className="text-gray-600 font-jakarta text-xs sm:text-sm md:text-base leading-relaxed mt-4 max-w-2xl sm:max-w-3xl mx-auto font-normal">
              Authentic wholesale inventory of gaming, business, and personal laptops available for bulk distribution in Dubai and across the UAE.
            </p>
          </div>

          {/* 19 Product Cards in a Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch">
            {[
              {
                brand: 'ACER',
                category: 'Aspire Lite Series',
                barcode: 'NX.DGJEM.002',
                name: 'ACER ASPIRE LITE AL15-36P-36UJ',
                particular: 'ACER ASPIRE LITE AL15-36P-36UJ INTEL CORE 3 N350, 8GB RAM, 256GB SSD, INTEL SHARED, 15.6 FHD, DOS, ENGLISH KEYBOARD, SILVER',
                image: ImgNX_DGJEM_002,
                imageClassName: 'scale-[1.28] group-hover:scale-[1.34]'
              },
              {
                brand: 'ACER',
                category: 'Aspire Lite Series',
                barcode: 'NX.DTGEM.001',
                name: 'ACER ASPIRE ALITE15-54P',
                particular: 'ACER ASPIRE ALITE15-54P, INTEL® CORE™ ULTRA 5-115U,8GB RAM,512GB SSD, 15.6" FHD, INTEL® SHARED,DOS,ENGLISH KEYBOARD,SILVER',
                image: ImgNX_DTGEM_001,
                imageClassName: 'scale-[1.28] group-hover:scale-[1.34]'
              },
              {
                brand: 'ACER',
                category: 'Predator Series',
                barcode: 'NH.QX5EM.003',
                name: 'Acer Predator Helios Neo PHN16-73-94ZR',
                particular: "Acer Predator Helios Neo PHN16-73-94ZR, Intel® Core™ Ultra 9 275HX, 16GB 6400MHZ, 1TB SSD, 16''WQXGA IPS 240Hz, NVIDIA® GeForce® RTX™ 5070 8GB, DOS, RGB 4 ZONE BACKLITE ENGLISH KB, BLACK",
                image: ImgNH_QX5EM_003,
                imageClassName: 'scale-[1.38] group-hover:scale-[1.44]'
              },
              {
                brand: 'ACER',
                category: 'Predator Series',
                barcode: 'NH.QVUEM.002',
                name: 'Predator Helios Neo 16 AI PHN16-73-97BP',
                particular: "Predator Helios Neo 16 AI PHN16-73-97BP Intel® Core™ Ultra 9 275HX, 16GB 6400MHZ, 1TB SSD, 16''WQXGA IPS 180Hz, 8GB NVIDIA RTX 5060, DOS, RGB 4 ZONE BACKLITE ENGLISH KB, BLACK",
                image: ImgNH_QVUEM_002,
                imageClassName: 'scale-[1.38] group-hover:scale-[1.44]'
              },
              {
                brand: 'ACER',
                category: 'Travelmate',
                barcode: 'NX.BSQEM.001',
                name: 'ACER TRAVELMATE P214-56',
                particular: 'ACER TRAVELMATE P214-56,INTEL® CORE™ ULTRA 5 225U,8GB RAM,512GB SSD,14” WUXGA IPS, INTEL® SHARED MEMORY,DOS,ENGLISH KEYBOARD,BACKLIT,SILVER',
                image: ImgNX_BSQEM_001,
                imageClassName: 'scale-[1.36] group-hover:scale-[1.42]'
              },
              {
                brand: 'AOC',
                category: 'MONITOR',
                barcode: '24B3HA2-89',
                name: 'AOC MONITOR-23.8" flat wide monitor',
                particular: 'AOC MONITOR-23.8" flat wide monitor',
                image: Img24B3HA2_89
              },
              {
                brand: 'AOC',
                category: 'MONITOR',
                barcode: '25B36H-89',
                name: 'AOC 25" IPS FHD 100Hz Monitor 25B36H-89',
                particular: 'AOC| 25"|IPS|FHD|100Hz|HDMI&VGA|GameMode|VESAMount',
                image: Img25B36H_89
              },
              {
                brand: 'ASUS',
                category: 'Expertbook Series',
                barcode: '90NX0801-M04XV0',
                name: 'ASUS EXPERTBOOK B1503CV',
                particular: 'ASUS EXPERTBOOK B1503CV, INTEL CORE I3-1315U, 8GB DDR5, 256GB SSD M.2 2280 PCIE 4.0, 15.6" FHD 60HZ, WIN 11 HOME, ENG KEYBOARD, GENTLE GREY',
                image: Img90NX0801_M04XV0,
                imageClassName: 'scale-[1.44] group-hover:scale-[1.50]'
              },
              {
                brand: 'ASUS',
                category: 'VivoBook Series',
                barcode: '90NB10J1-M04TL0',
                name: 'ASUS VIVOBOOK X1504VA-BQ4675 (English)',
                particular: 'ASUS VIVOBOOK X1504VA-BQ4675 I3-1315U , 8GB RAM, 512GB SSD, 15.6-INCH, FHD , INTEL® UHD GRAPHICS,DOS,ENGLISH KEYBOARD,QUIET BLUE.',
                image: Img90NB10J1_M04TL0,
                imageClassName: 'scale-[1.12] group-hover:scale-[1.18]'
              },
              {
                brand: 'ASUS',
                category: 'VivoBook Series',
                barcode: '90NB10T1-M01YX0',
                name: 'ASUS VIVOBOOK A1502VA-BQ1385',
                particular: 'ASUS VIVOBOOK A1502VA-BQ1385, INTEL CORE I7-13620H, 16GB RAM, 512GB SSD, 15.6 FHD (1920 X 1080), INTEL UHD GRAPHICS, DOS, ENGLISH KEYBOARD, QUIET BLUE',
                image: Img90NB10T1_M01YX0,
                imageClassName: 'scale-[1.12] group-hover:scale-[1.18]'
              },
              {
                brand: 'ASUS',
                category: 'VivoBook Series',
                barcode: '90NB10J1-M04TK0',
                name: 'ASUS VIVOBOOK X1504VA-BQ4675 (Arabic)',
                particular: 'ASUS VIVOBOOK X1504VA-BQ4675 I3-1315U , 8GB RAM, 512GB SSD, 15.6-INCH, FHD , INTEL® UHD GRAPHICS,DOS,ARABIC KEYBOARD,QUIET BLUE',
                image: Img90NB10J1_M04TK0,
                imageClassName: 'scale-[1.12] group-hover:scale-[1.18]'
              },
              {
                brand: 'ASUS',
                category: 'VivoBook Series',
                barcode: '90NB10T2-M01YY0',
                name: 'ASUS VIVOBOOK A1502VA-BQ1386',
                particular: 'ASUS VIVOBOOK A1502VA-BQ1386, INTEL CORE I7-13620H, 16GB RAM, 512GB SSD, 15.6 FHD (1920 X 1080), INTEL UHD GRAPHICS, DOS, ENGLISH KEYBOARD, COOL SILVER',
                image: Img90NB10T2_M01YY0,
                imageClassName: 'scale-[1.12] group-hover:scale-[1.18]'
              },
              {
                brand: 'ASUS',
                category: 'VivoBook Series',
                barcode: '90NB14Q2-M003W0',
                name: 'ASUS VIVOBOOK S5507QA-MA007W OLED',
                particular: 'ASUS VIVOBOOK S5507QA-MA007W SNAPDRAGON X PLUS X1P42100, 16GB RAM, 1TB SSD, 15.6 OLED (2880 X 1620), QUALCOMM ADRENO X1-45, WIN 11 HOME, RGB 1 ZONE BACKLIT ENGLISH KEYBOARD, COOL SILVER',
                image: Img90NB14Q2_M003W0,
                imageClassName: 'scale-[1.12] group-hover:scale-[1.18]'
              },
              {
                brand: 'ASUS',
                category: 'ZENBOOK SERIES',
                barcode: '90NB16G2-M00230',
                name: 'ASUS ZENBOOK A14 X3407RA-QD004W',
                particular: 'ASUS ZENBOOK A14 X3407RA-QD004W, SNAPDRAGON X ELITE X1E-78-100,16GB RAM,1TB SSD, 14 WUXGA OLED, INTEGRATED GRAPHICS,WINDOWS 11 HOME,BACKLIT ENGLISH KEYBOARD, ICELAND GRAY',
                image: Img90NB16G2_M00230,
                imageClassName: 'scale-[1.34] group-hover:scale-[1.40]'
              },
              {
                brand: 'HP',
                category: 'OmniBook',
                barcode: 'D78MQEA#BH5',
                name: 'HP OmniBook 3 Laptop 16-bu0065nia',
                particular: 'HP OmniBook 3 Laptop 16-bu0065nia,Intel® Core™ 5 120U,16 GB DDR5-5200,512 GB PCIe® Gen4 NVMe,16" Diagonal 2K (1920 x 1200) IPS,Integrated,Intel® Graphics,DOS 3.0,English Backlit KB,Silver',
                image: ImgD78MQEA_BH5,
                imageClassName: 'scale-[1.24] group-hover:scale-[1.30]'
              },
              {
                brand: 'LENOVO',
                category: 'IdeaPad Series',
                barcode: '83RR0040PS',
                name: 'LENOVO IDEAPAD SLIM 3I',
                particular: 'LENOVO IDEAPAD SLIM 3I,INTEL CORE™ 3 304,8GB RAM,512GB SSD, INTEGRATED INTEL® GRAPHICS, 15.3" WUXGA IPS,DOS,BACKLIT, ENGLISH KEYBOARD, LUNA GREY',
                image: Img83RR0040PS,
                imageClassName: 'scale-[1.36] group-hover:scale-[1.42]'
              },
              {
                brand: 'LENOVO',
                category: 'LEGION SERIES',
                barcode: '83F30082AX',
                name: 'Lenovo Legion Pro 5i (16", 10)',
                particular: 'Lenovo Legion Pro 5i (16", 10) Intel Core™ Ultra 7 255HX, 2x 16GB SODIMM DDR5-5600, 1TB SSD M.2 2280, 16" WQXGA OLED 500nits 165Hz, NVIDIA GeForce RTX™ 5070 8GB GDDR7, DOS, 24-Zone RGB Backlit Arabic Keyboard, Eclipse Black',
                image: Img83F30082AX
              },
              {
                brand: 'LENOVO',
                category: 'LOQ SERIES',
                barcode: '83S0007FUS',
                name: 'Lenovo LOQ Gaming Laptop 15.6"',
                particular: 'Lenovo LOQ Gaming Laptop, AMD Ryzen 7 170 2025, 16GB Memory, 512GB Storage, 15.6" 2K, NVIDIA GeForce RTX 4050, Luna Grey',
                image: Img83S0007FUS
              },
              {
                brand: 'LENOVO',
                category: 'V Series',
                barcode: '83M4000YGP',
                name: 'Lenovo V15 Gen 6',
                particular: 'Lenovo V15 Gen 6 ,Intel® N100,8GB SODIMM DDR5-4800,256GB SSD M.2,15.6" FHD (1920x1080),Integrated Intel® UHD Graphics,Dos,Non-backlit English,Business Black',
                image: Img83M4000YGP,
                imageClassName: 'scale-[1.26] group-hover:scale-[1.32]'
              }
            ].map((product) => {
              const { line1, line2 } = getTwoLineTitle(product.name);
              return (
                <div
                  key={product.barcode}
                  className="group relative bg-white p-5 sm:p-6 rounded-2xl border border-[#147A5F] shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
                >

                  {/* Product Image Showcase on Pure White Background with increased height and consistent sizing */}
                  <div className="relative w-full h-44 sm:h-48 lg:h-52 bg-white flex items-center justify-center overflow-hidden mb-3.5 rounded-xl">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className={`object-contain transition-transform duration-500 ease-out ${product.imageClassName ? `p-0 ${product.imageClassName}` : 'p-2 group-hover:scale-105'
                        }`}
                    />
                  </div>

                  {/* Content: Exactly 2-Line Product Name & Plain Barcode Text */}
                  <div className="w-full flex flex-col flex-grow items-center text-center">
                    {/* Product Name (Strictly 2 lines across all cards, truncated with ellipsis if exceeding) */}
                    <h3
                      className="w-full font-montserrat font-bold text-[14px] sm:text-[15px] text-[#171717] leading-[1.35] h-[40px] sm:h-[42px] mb-2 text-center overflow-hidden flex flex-col justify-center"
                      title={product.particular}
                    >
                      <span className="block truncate">{line1}</span>
                      <span className="block truncate">{line2}</span>
                    </h3>

                    {/* Plain Simple Barcode / Item Code Text (No badge, no background, no decorative container) */}
                    <p className="w-full font-mono text-[12px] text-gray-500 tracking-wider mb-3.5 text-center">
                      {product.barcode}
                    </p>
                  </div>

                  {/* Action Buttons: Inquire Now & WhatsApp Inline Side-by-Side */}
                  <div className="w-full mt-auto grid grid-cols-2 gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => openInquiryModal(`Wholesale Inquiry: ${product.name} (Barcode: ${product.barcode})`)}
                      className="w-full py-2.5 px-1.5 sm:px-2 bg-[#147A5F] hover:bg-[#0f5f4a] text-white text-[11px] sm:text-xs font-bold font-montserrat tracking-wide uppercase flex items-center justify-center gap-1 sm:gap-1.5 transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md active:scale-[0.99] rounded-lg whitespace-nowrap"
                    >
                      <span>Inquire Now</span>
                      <ArrowRight className="w-3 h-3 shrink-0" />
                    </button>

                    <a
                      href={`https://wa.me/97143540566?text=${encodeURIComponent(`Hello Crown Excel, I am inquiring about wholesale pricing for ${product.name} (Barcode: ${product.barcode}).`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-1.5 sm:px-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-[11px] sm:text-xs font-bold font-montserrat tracking-wide uppercase flex items-center justify-center gap-1 sm:gap-1.5 transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md active:scale-[0.99] rounded-lg whitespace-nowrap"
                    >
                      <FaWhatsapp className="w-3.5 h-3.5 shrink-0" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. EXACT SECTION FROM SCREENSHOT: Curved Dashed Wave 4-Pillars Section */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Centered Heading and Subparagraph matching Reference Screenshot */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2
              className="font-anton font-normal uppercase text-center text-3xl sm:text-4xl lg:text-[46px] tracking-[-0.035em] leading-[1.05]"
              style={{
                fontFamily: "'Anton', Impact, sans-serif",
                fontWeight: 400,
                letterSpacing: '-0.035em',
                lineHeight: 1.05,
                textTransform: 'uppercase',
              }}
            >
              <span className="block not-italic text-[#171717]">
                Why Crown Excel Leads In Laptop
              </span>
              <span
                className="block italic text-[#147A5F] mt-1 sm:mt-1.5"
                style={{ fontStyle: 'italic' }}
              >
                Wholesale &amp; IT Distribution
              </span>
            </h2>
            <p className="text-sm sm:text-[15px] text-[#4b5563] font-inter leading-relaxed max-w-3xl mx-auto text-center mt-5 mb-16">
              Businesses rely on Crown Excel as a trusted IT hardware distributor delivering scalable, secure, and high-performance solutions across the Middle East. Our future-ready distribution model ensures seamless access, operational efficiency, and reliability, empowering businesses to stay competitive in today&apos;s tech-driven landscape.
            </p>
          </div>

          {/* 4 Connected Features with Alternating Curved Dashed Wave Line */}
          <div className="relative max-w-6xl mx-auto">
            {/* Desktop SVG Sinusoidal Dashed Wave Line */}
            <div className="hidden lg:block absolute inset-x-0 top-0 h-[280px] pointer-events-none z-0">
              <svg
                viewBox="0 0 1120 280"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M 10 165 C 25 45, 85 10, 140 10 C 195 10, 255 120, 280 165 C 305 210, 365 270, 420 270 C 475 270, 535 210, 560 165 C 585 120, 645 10, 700 10 C 755 10, 815 120, 840 165 C 865 210, 925 270, 980 270 C 1035 270, 1095 210, 1110 165"
                  stroke="#147A5F"
                  strokeWidth="2.5"
                  strokeDasharray="6 6"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* 4 Feature Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 relative z-10 text-center h-auto lg:h-[280px]">
              {/* Item 1 - Arch over top */}
              <div className="flex flex-col items-center justify-center px-4">
                {/* Medal ribbon icon matching reference */}
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-12 h-12 text-[#147A5F] mb-4 transition-transform duration-300 hover:scale-110"
                >
                  <path d="M12 2C8.69 2 6 4.69 6 8c0 2.21 1.2 4.15 2.97 5.19L6.5 21.5l5.5-2.5 5.5 2.5-2.47-8.31C16.8 12.15 18 10.21 18 8c0-3.31-2.69-6-6-6zm0 9c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
                </svg>
                <h3 className="text-lg sm:text-[19px] font-bold font-montserrat text-[#2D2D2D] leading-snug mb-2">
                  15+ Years of<br />Expertise
                </h3>
                <p className="text-xs sm:text-[13px] text-[#6b7280] font-inter leading-relaxed max-w-[200px] mx-auto">
                  Providing trusted IT support and tailored business solutions.
                </p>
              </div>

              {/* Item 2 - Bowl under bottom */}
              <div className="flex flex-col items-center justify-center px-4">
                <FaHandshake className="w-12 h-12 text-[#147A5F] mb-4 transition-transform duration-300 hover:scale-110" />
                <h3 className="text-lg sm:text-[19px] font-bold font-montserrat text-[#2D2D2D] leading-snug mb-2">
                  Fast &amp; Reliable IT<br />Supply
                </h3>
                <p className="text-xs sm:text-[13px] text-[#6b7280] font-inter leading-relaxed max-w-[200px] mx-auto">
                  Ensuring large stock availability and immediate product delivery.
                </p>
              </div>

              {/* Item 3 - Arch over top */}
              <div className="flex flex-col items-center justify-center px-4">
                <FaCreditCard className="w-12 h-12 text-[#147A5F] mb-4 transition-transform duration-300 hover:scale-110" />
                <h3 className="text-lg sm:text-[19px] font-bold font-montserrat text-[#2D2D2D] leading-snug mb-2">
                  Flexible Payment<br />Options
                </h3>
                <p className="text-xs sm:text-[13px] text-[#6b7280] font-inter leading-relaxed max-w-[200px] mx-auto">
                  Offering custom payment plans to fit your budget.
                </p>
              </div>

              {/* Item 4 - Bowl under bottom */}
              <div className="flex flex-col items-center justify-center px-4">
                <FaCog className="w-12 h-12 text-[#147A5F] mb-4 transition-transform duration-300 hover:scale-110" />
                <h3 className="text-lg sm:text-[19px] font-bold font-montserrat text-[#2D2D2D] leading-snug mb-2">
                  Tailored IT<br className="hidden sm:inline" /> Hardware
                </h3>
                <p className="text-xs sm:text-[13px] text-[#6b7280] font-inter leading-relaxed max-w-[200px] mx-auto">
                  Delivering customized hardware solutions for business needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* ========================================================================= */}
      {/* 8. BRAND PARTNERS ECOSYSTEM */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#147A5F] mb-2 block font-montserrat">
              Authorized Distribution & Sourcing
            </span>
            <h2
              className="font-anton font-normal uppercase text-center text-2xl sm:text-3xl lg:text-[38px] tracking-[-0.035em] leading-[1.08] text-[#171717] mt-1"
              style={{
                fontFamily: "'Anton', Impact, sans-serif",
                fontWeight: 400,
                letterSpacing: '-0.035em',
                lineHeight: 1.08,
                textTransform: 'uppercase',
              }}
            >
              Top Laptop Brands Distributed Across Dubai & UAE
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-5 items-center justify-items-center w-full">
            {brandLogos.map((brand, i) => (
              <div
                key={i}
                className="w-full h-24 sm:h-28 lg:h-32 rounded-2xl flex items-center justify-center p-4 sm:p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer border border-emerald-600/30"
                style={{ backgroundColor: '#147A5F' }}
              >
                <Image
                  src={brand.logo}
                  alt={`${brand.name} wholesale laptop supplier in UAE`}
                  width={120}
                  height={60}
                  className="max-h-11 sm:max-h-12 lg:max-h-14 max-w-[90px] sm:max-w-[100px] lg:max-w-[110px] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. EXACT SECTION FROM SCREENSHOT 3: High-Impact Showcase Banner Card */}
      {/* ========================================================================= */}
      <section className="py-16 bg-white" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 sm:p-12 relative overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
            {/* Curving green splash matching Screenshot 3 */}
            <div className="hidden sm:block absolute right-0 top-0 bottom-0 w-1/2 bg-[#147A5F] rounded-tl-[160px] rounded-bl-[160px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              {/* Left Side Content */}
              <div className="lg:col-span-6">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#147A5F] mb-3 block font-montserrat">
                  SECURE YOUR WHOLESALE DEAL FROM CROWNEXCEL
                </span>

                <h2
                  className="font-anton font-normal uppercase text-2xl sm:text-3xl lg:text-[36px] tracking-[-0.035em] leading-[1.08] mb-4 text-left"
                  style={{
                    fontFamily: "'Anton', Impact, sans-serif",
                    fontWeight: 400,
                    letterSpacing: '-0.035em',
                    lineHeight: 1.08,
                    textTransform: 'uppercase',
                  }}
                >
                  <span className="text-[#147A5F] italic block text-xl sm:text-2xl lg:text-[26px] tracking-tight mb-1.5" style={{ fontStyle: 'italic' }}>
                    Key Benefits
                  </span>
                  <span className="text-[#171717] block not-italic">
                    Why Choose Us as Your  Wholesale Supplier
                  </span>
                </h2>

                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-inter mb-8 max-w-xl">
                  Need dependable inventory for your business or retail store? Partner with Crown Excel for bulk commercial laptops, gaming rigs, and IT equipment with clear specifications and stable supply for UAE & GCC buyers.
                </p>

                <div className="flex flex-wrap gap-4">
                  <button
                    type="button"
                    onClick={() => openInquiryModal('Wholesale Stock List Request')}
                    className="bg-[#147A5F] hover:bg-[#0f604b] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow transition-all cursor-pointer uppercase tracking-wider hover:shadow-md"
                  >
                    REQUEST STOCK LIST
                  </button>

                  <a
                    href="https://wa.me/97143540566"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow transition-all cursor-pointer uppercase tracking-wider hover:shadow-md transform hover:-translate-y-0.5 active:scale-[0.98]"
                  >
                    <FaWhatsapp className="w-4.5 h-4.5" />
                    <span>CHAT ON WHATSAPP</span>
                  </a>
                </div>
              </div>

              {/* Right Side Key Benefits Display */}
              <div className="lg:col-span-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-white/60 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group">
                    <div className="w-9 h-9 rounded-xl bg-[#147A5F]/10 text-[#147A5F] flex items-center justify-center mb-3 group-hover:bg-[#147A5F] group-hover:text-white transition-colors duration-300">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h3 className="font-montserrat font-bold text-gray-900 text-xs sm:text-[13.5px] leading-snug mb-1.5">
                      100% Factory-Sealed Stock
                    </h3>
                    <p className="font-inter text-gray-600 text-[11px] sm:text-xs leading-relaxed">
                      Direct brand-authorized inventory with original serial numbers and full manufacturer warranties.
                    </p>
                  </div>

                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-white/60 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group">
                    <div className="w-9 h-9 rounded-xl bg-[#147A5F]/10 text-[#147A5F] flex items-center justify-center mb-3 group-hover:bg-[#147A5F] group-hover:text-white transition-colors duration-300">
                      <Boxes className="w-5 h-5" />
                    </div>
                    <h3 className="font-montserrat font-bold text-gray-900 text-xs sm:text-[13.5px] leading-snug mb-1.5">
                      Ready Dubai Central Inventory
                    </h3>
                    <p className="font-inter text-gray-600 text-[11px] sm:text-xs leading-relaxed">
                      Immediate physical stock in Bur Dubai for on-site inspection, pickup, or rapid local fleet dispatch.
                    </p>
                  </div>

                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-white/60 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group">
                    <div className="w-9 h-9 rounded-xl bg-[#147A5F]/10 text-[#147A5F] flex items-center justify-center mb-3 group-hover:bg-[#147A5F] group-hover:text-white transition-colors duration-300">
                      <DollarSign className="w-5 h-5" />
                    </div>
                    <h3 className="font-montserrat font-bold text-gray-900 text-xs sm:text-[13.5px] leading-snug mb-1.5">
                      Tiered Reseller Wholesale Margins
                    </h3>
                    <p className="font-inter text-gray-600 text-[11px] sm:text-xs leading-relaxed">
                      Competitive bulk pricing designed to protect margins for IT retailers, traders, and project contractors.
                    </p>
                  </div>

                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-white/60 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group">
                    <div className="w-9 h-9 rounded-xl bg-[#147A5F]/10 text-[#147A5F] flex items-center justify-center mb-3 group-hover:bg-[#147A5F] group-hover:text-white transition-colors duration-300">
                      <Truck className="w-5 h-5" />
                    </div>
                    <h3 className="font-montserrat font-bold text-gray-900 text-xs sm:text-[13.5px] leading-snug mb-1.5">
                      Express UAE Fleet & GCC Export
                    </h3>
                    <p className="font-inter text-gray-600 text-[11px] sm:text-xs leading-relaxed">
                      Door-to-door delivery across Dubai and UAE, with export packing and freight across Saudi Arabia and GCC.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. WORLDWIDE SERVICE AREAS: GLOBAL BULK DISTRIBUTION NETWORK */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F8FAFC] via-[#F4F8F6] to-white border-t border-gray-200/80 relative overflow-hidden">
        {/* Subtle Ambient Radial Glow */}
        <div
          aria-hidden="true"
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[350px] bg-emerald-100/35 blur-[120px] rounded-full pointer-events-none -z-0"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#147A5F] mb-3 block font-montserrat">
              We Delivered To The Listed Countries & Beyond
            </span>

            <h2
              className="font-anton font-normal uppercase text-center text-3xl sm:text-4xl lg:text-[46px] tracking-[-0.035em] leading-[1.05]"
              style={{
                fontFamily: "'Anton', Impact, sans-serif",
                fontWeight: 400,
                letterSpacing: '-0.035em',
                lineHeight: 1.05,
                textTransform: 'uppercase',
              }}
            >
              <span className="text-[#171717] block not-italic">
                Worldwide Service Areas
              </span>
              <span
                className="text-[#147A5F] italic block mt-1 sm:mt-1.5"
                style={{ fontStyle: 'italic' }}
              >
                16 Most Active International Wholesale Markets
              </span>
            </h2>

            <p className="text-gray-600 font-jakarta text-xs sm:text-sm md:text-[15.5px] leading-relaxed mt-4 max-w-3xl mx-auto font-normal">
              We ship wholesale computer equipment to every corner of the world. Below are our 16 most active markets with continuous orders. Bulk export available to all destinations with VAT &amp; export invoice and full logistics support.
            </p>
          </div>

          {/* 16 Active Markets Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-4.5 lg:gap-5 items-stretch mb-12 sm:mb-14">
            {worldwideServiceMarkets.map((country) => (
              <div
                key={country.name}
                className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-300 hover:border-[#147A5F] shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Row: Flag Alongside Country Name (No Badges) */}
                  <div className="flex items-center gap-3 mb-2">
                    {/* Real Vector SVG Flag */}
                    <div className="relative w-8 h-5.5 rounded-[4px] overflow-hidden border border-gray-200/90 shadow-2xs shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src={`/flags/${country.code}.svg`}
                        alt={`${country.name} flag`}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <h3
                      className="font-montserrat font-bold text-gray-900 text-[14.5px] sm:text-[15px] leading-snug group-hover:text-[#147A5F] transition-colors"
                      title={country.name}
                    >
                      {country.name}
                    </h3>
                  </div>

                  {/* Delivery Hub Cities */}
                  <p className="text-[12.5px] text-gray-500 font-inter leading-relaxed mb-3.5" title={country.hub}>
                    {country.hub}
                  </p>
                </div>

                {/* Footer: Freight Route Badge (#084032) */}
                <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-end">
                  <span
                    className="text-white font-medium text-[10.5px] bg-[#084032] px-2.5 py-1 rounded border border-[#084032] truncate min-w-0 text-right"
                    title={country.freight}
                  >
                    {country.freight}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Logistics & Export Documentation Card - Specific #084032 Container */}
          <div className="bg-[#084032] text-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-emerald-900/60 relative overflow-hidden">
            {/* Ambient Interior Depth Glows */}
            <div
              aria-hidden="true"
              className="absolute -top-24 -right-24 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-24 -left-24 w-80 h-80 bg-black/20 rounded-full blur-2xl pointer-events-none"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center mb-8 relative z-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-emerald-300 border border-white/10 flex items-center justify-center shrink-0">
                  <FileCheck2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-white text-sm sm:text-[15px] mb-1">
                    VAT &amp; Export Invoicing
                  </h4>
                  <p className="font-inter text-emerald-100/80 text-xs sm:text-[13px] leading-relaxed">
                    Formal commercial invoices, packing lists, and customs documentation tailored for fast cross-border logistics.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-emerald-300 border border-white/10 flex items-center justify-center shrink-0">
                  <Globe2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-white text-sm sm:text-[15px] mb-1">
                    Full Logistics Support
                  </h4>
                  <p className="font-inter text-emerald-100/80 text-xs sm:text-[13px] leading-relaxed">
                    Direct air freight and sea cargo coordinated from Dubai international hubs to your regional ports and warehouses.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-emerald-300 border border-white/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-white text-sm sm:text-[15px] mb-1">
                    Authentic Verified Hardware
                  </h4>
                  <p className="font-inter text-emerald-100/80 text-xs sm:text-[13px] leading-relaxed">
                    100% factory-sealed laptops, workstations, and consumer IT equipment with manufacturer serial number verification.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10 relative z-10">
              <div className="text-left">
                <p className="text-white font-montserrat font-bold text-sm sm:text-[15px]">
                  Need Bulk Computer Equipment Delivered To Your Country?
                </p>
                <p className="text-emerald-200/80 font-inter text-xs sm:text-[13px]">
                  Our international trade desk responds within hours with wholesale FOB/CIF pricing.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => openInquiryModal('Worldwide Wholesale Export Inquiry')}
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white hover:bg-emerald-50 text-[#084032] text-xs sm:text-sm font-bold font-montserrat uppercase tracking-wider rounded-xl shadow-sm hover:shadow transition-all cursor-pointer transform hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Request Export Quote</span>
                </button>

                <a
                  href={`https://wa.me/97143540566?text=${encodeURIComponent('Hello Crown Excel, I am inquiring about international wholesale computer equipment export to my country.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold font-montserrat uppercase tracking-wider rounded-xl shadow-sm hover:shadow transition-all cursor-pointer transform hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>WhatsApp Export Desk</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>







      {/* Official Verified Contact Popup with OTP Flow */}
      <ContactFormPopup
        isOpen={showContactPopup}
        onClose={() => setShowContactPopup(false)}
        preSelectedSubject={popupSubject}
      />
    </div>
  );
}
