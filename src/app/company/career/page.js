import React from 'react';
import Career from './_components/page';
import { generateCmsMetadata } from '@/lib/cms-fetch';

export async function generateMetadata() {
  return await generateCmsMetadata('/company/career', {
    title: 'Careers | Crown Excel',
    description: 'Explore career opportunities and job openings at Crown Excel IT Solutions in Dubai.',
  });
}

export default function CareerPage() {
  return (
    <div>
      <Career />
    </div>
  );
}
