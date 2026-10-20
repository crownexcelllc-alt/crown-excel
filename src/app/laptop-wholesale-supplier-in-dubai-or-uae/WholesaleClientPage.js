'use client';

import React, { useState, useEffect, useMemo } from 'react';
import ContactFormPopup from '@/Components/ContactFormPopup/ContactFormPopup';

import WholesaleHeroSection from './_components/WholesaleHeroSection';
import WholesaleCategoriesSection from './_components/WholesaleCategoriesSection';
import WholesaleProductsSection from './_components/WholesaleProductsSection';
import WholesaleWhyCrownExcelSection from './_components/WholesaleWhyCrownExcelSection';
import WholesaleBrandsSection from './_components/WholesaleBrandsSection';
import WholesaleKeyBenefitsSection from './_components/WholesaleKeyBenefitsSection';
import WholesaleWorldwideAreasSection from './_components/WholesaleWorldwideAreasSection';

export default function WholesaleClientPage() {
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openGeneralInquiryModal = () => {
    setSelectedProduct(null);
    setShowContactPopup(true);
  };

  const openProductInquiryModal = (product) => {
    setSelectedProduct(product);
    setShowContactPopup(true);
  };

  const WHATSAPP_PHONE = '971505033860';
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkMobile = () => {
        const ua = navigator.userAgent || '';
        setIsMobile(
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua) ||
          window.innerWidth < 768
        );
      };
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);

  const getWhatsAppUrl = (message = '') => {
    const encoded = message ? encodeURIComponent(message) : '';
    const base = isMobile ? 'https://api.whatsapp.com/send/' : 'https://web.whatsapp.com/send/';
    return `${base}?phone=${WHATSAPP_PHONE}${encoded ? `&text=${encoded}` : ''}&type=phone_number&app_absent=0`;
  };

  const handleWhatsAppRedirect = (e, message = '') => {
    const encoded = message ? encodeURIComponent(message) : '';
    const targetUrl = isMobile
      ? `https://api.whatsapp.com/send/?phone=${WHATSAPP_PHONE}${encoded ? `&text=${encoded}` : ''}&type=phone_number&app_absent=0`
      : `https://web.whatsapp.com/send/?phone=${WHATSAPP_PHONE}${encoded ? `&text=${encoded}` : ''}&type=phone_number&app_absent=0`;

    if (e && e.currentTarget) {
      e.currentTarget.href = targetUrl;
    }

    if (typeof window !== 'undefined') {
      const win = window.open(targetUrl, '_blank', 'noopener,noreferrer');
      if (win) {
        if (e && e.preventDefault) e.preventDefault();
      }
    }
  };

  // Hero Typewriter Animation
  const heroCategories = useMemo(() => [
    { name: 'Gaming Laptops' },
    { name: 'Desktop PCs' },
    { name: 'Personal Laptops' },
    { name: 'All-In-One PCs' },
    { name: 'Business Laptops' },
    { name: 'Printers & Copiers' },
    { name: 'Routers & Switches' },
  ], []);

  const [activeHeroCatIndex, setActiveHeroCatIndex] = useState(0);
  const [typedHeroText, setTypedHeroText] = useState('Gaming Laptops');
  const [isHeroDeleting, setIsHeroDeleting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);
      const listener = (e) => setPrefersReducedMotion(e.matches);
      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
    }
  }, []);

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

  return (
    <div className="bg-[#FDFDFE] text-[#2D2D2D] selection:bg-[#147A5F] selection:text-white">
      {/* 1. Hero Section */}
      <WholesaleHeroSection
        openGeneralInquiryModal={openGeneralInquiryModal}
        getWhatsAppUrl={getWhatsAppUrl}
        handleWhatsAppRedirect={handleWhatsAppRedirect}
        typedHeroText={typedHeroText}
        prefersReducedMotion={prefersReducedMotion}
      />

      {/* 2. Product Categories */}
      <WholesaleCategoriesSection />

      {/* 3. Product Cards */}
      <WholesaleProductsSection
        openProductInquiryModal={openProductInquiryModal}
        getWhatsAppUrl={getWhatsAppUrl}
        handleWhatsAppRedirect={handleWhatsAppRedirect}
      />

      {/* 4. Why Crown Excel Leads (4 Pillars) */}
      <WholesaleWhyCrownExcelSection />

      {/* 5. Brands Section */}
      <WholesaleBrandsSection />

      {/* 6. Key Benefits Showcase Banner */}
      <WholesaleKeyBenefitsSection
        openGeneralInquiryModal={openGeneralInquiryModal}
        getWhatsAppUrl={getWhatsAppUrl}
        handleWhatsAppRedirect={handleWhatsAppRedirect}
      />

      {/* 7. Worldwide Service Areas */}
      <WholesaleWorldwideAreasSection
        openGeneralInquiryModal={openGeneralInquiryModal}
        getWhatsAppUrl={getWhatsAppUrl}
        handleWhatsAppRedirect={handleWhatsAppRedirect}
      />

      {/* Inquiry Form Modal */}
      <ContactFormPopup
        isOpen={showContactPopup}
        onClose={() => {
          setShowContactPopup(false);
          setSelectedProduct(null);
        }}
        defaultSubject="Wholesale Inquiries"
        showProductFields={true}
        initialProductName={selectedProduct?.name || ''}
        initialProductBarcode={selectedProduct?.barcode || ''}
        isProductReadOnly={Boolean(selectedProduct)}
        requireCaptcha={false}
      />
    </div>
  );
}
