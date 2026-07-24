import React from 'react';
import CrownExcelFamilyClient from './CrownExcelFamilyClient';
import { generateCmsMetadata } from '@/lib/cms-fetch';

export async function generateMetadata() {
  return await generateCmsMetadata('/company/crown-excel-family', {
    title: 'Crown Excel Family | Crown Excel',
    description: 'Meet the team and family behind Crown Excel IT Solutions in Dubai.',
  });
}

export default function CrownExcelFamilyPage() {
  return <CrownExcelFamilyClient />;
}
