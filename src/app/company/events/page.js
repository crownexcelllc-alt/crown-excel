import React from 'react';
import Events from './_components/page';
import { generateCmsMetadata } from '@/lib/cms-fetch';

export async function generateMetadata() {
  return await generateCmsMetadata('/company/events', {
    title: 'Events | Crown Excel',
    description: 'Stay updated with events, announcements, and news from Crown Excel.',
  });
}

export default function EventsPage() {
  return (
    <div>
      <Events />
    </div>
  );
}
