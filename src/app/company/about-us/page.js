import React from 'react';
import AboutUs from './_components/page';
import { generateCmsMetadata } from '@/lib/cms-fetch';

export async function generateMetadata() {
  return await generateCmsMetadata('/company/about-us', {
    title: 'About Us | Crown Excel',
    description: 'Learn about Crown Excel, a leading IT hardware and infrastructure solutions provider based in Dubai.',
  });
}

export default function AboutUsPage() {
  return (
    <div>
      <AboutUs />
    </div>
  );
}
