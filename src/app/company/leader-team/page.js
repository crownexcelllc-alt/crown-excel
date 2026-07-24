import React from 'react';
import { generateCmsMetadata } from '@/lib/cms-fetch';

export async function generateMetadata() {
  return await generateCmsMetadata('/company/leader-team', {
    title: 'Leadership Team | Crown Excel',
    description: 'Meet the leadership and executive team driving innovation at Crown Excel.',
  });
}

export default function LeaderTeamPage() {
  return (
    <div>
      Leadership Team
    </div>
  );
}