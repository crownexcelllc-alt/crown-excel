import React from 'react';
import PhonesBanner from '@/app/_components/Products/Phones/PhonesBanner/PhonesBanner';
import BestSellingPhones from '@/app/_components/Products/Phones/BestSellingPhones/BestSellingPhones';
import UltimatePhones from '@/app/_components/Products/Phones/UltimatePhones/UltimatePhones';
import AllinOnePhones from '@/app/_components/Products/Phones/AllinOnePhones/AllinOnePhones';
import PhonesBrand from '@/app/_components/Products/Phones/PhonesBrand/PhonesBrand';
import PhonesWhyFromUs from '@/app/_components/Products/Phones/PhonesWhyFromUs/PhonesWhyFromUs';
import { generateCmsMetadata } from '@/lib/cms-fetch';

export async function generateMetadata() {
  return await generateCmsMetadata('/products/phones', {
    title: 'Phones Wholesale Supplier',
    description: 'Leading phones wholesale supplier in Dubai, UAE. Bulk supply of smartphones, Apple iPhone, Samsung Galaxy, VoIP phones, PBX systems, and enterprise mobile hardware.',
    alternates: {
      canonical: 'https://www.crownexcel.ae/products/phones',
    },
    openGraph: {
      title: 'Phones Wholesale Supplier | Crown Excel',
      description: 'Leading phones wholesale supplier in Dubai, UAE. Bulk supply of smartphones, Apple iPhone, Samsung Galaxy, VoIP phones, PBX systems, and enterprise mobile hardware.',
      url: 'https://www.crownexcel.ae/products/phones',
    },
  });
}

const PhonesPage = () => {
  return (
    <main>
      <PhonesBanner />
      <BestSellingPhones />
      <UltimatePhones />
      <AllinOnePhones />
      <PhonesBrand />
      <PhonesWhyFromUs />
    </main>
  );
};

export default PhonesPage;
