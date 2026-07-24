import React from 'react';
import OurServicesClient from './OurServicesClient';
import { generateCmsMetadata } from '@/lib/cms-fetch';

export async function generateMetadata() {
  return await generateCmsMetadata('/our-services', {
    title: 'Our Services | Crown Excel',
    description: 'Explore Crown Excel IT services including Cloud Computing, IT Consultancy, Infrastructure, Hardware AMC, Software Maintenance, and Cybersecurity.',
  });
}

export default function OurServicesPage() {
  return <OurServicesClient />;
}
