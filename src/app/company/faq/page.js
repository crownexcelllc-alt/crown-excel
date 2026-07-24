import React from 'react';
import Faq from './_components/page';
import { generateCmsMetadata } from '@/lib/cms-fetch';

export async function generateMetadata() {
  return await generateCmsMetadata('/company/faq', {
    title: 'Frequently Asked Questions | Crown Excel',
    description: 'Find answers to common questions about Crown Excel IT hardware, infrastructure, and services.',
  });
}

export default function FaqPage() {
  return (
    <div>
      <Faq />
    </div>
  );
}
