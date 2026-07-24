import { getApiBase } from '@/lib/api-helper';
import AppointmentLinksView from './AppointmentLinksView';
import { generateCmsMetadata } from '@/lib/cms-fetch';

export async function generateMetadata() {
  return await generateCmsMetadata('/appointments', {
    title: 'Book an Appointment - Crown Excel',
    description: 'Schedule an appointment with Crown Excel using our easy online booking system powered by Google Calendar.',
  });
}

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function AppointmentsPublicPage() {
  const apiBase = getApiBase();
  let links = [];

  try {
    const res = await fetch(`${apiBase}/api/appointments`, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      links = data.links || [];
    }
  } catch (err) {
    console.error('Error fetching appointment links:', err);
  }

  return <AppointmentLinksView links={links} />;
}
