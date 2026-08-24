import Page from "./_components/page";
import { generateCmsMetadata } from "@/lib/cms-fetch";

export async function generateMetadata() {
  return await generateCmsMetadata('/', {
    title: 'Crown Excel | IT Hardware and Solutions in Dubai',
    description: 'Crown Excel provides IT hardware, infrastructure, networking, and managed technology solutions for businesses in Dubai and the UAE.',
    alternates: {
      canonical: 'https://www.crownexcel.ae/',
    },
  });
}

export default function Home() {
  return <Page />;
}
