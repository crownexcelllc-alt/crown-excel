import React from 'react'
import { generateCmsMetadata } from '@/lib/cms-fetch';

export async function generateMetadata() {
  return await generateCmsMetadata('/products', {
    title: 'Products | Crown Excel',
    description: 'Explore Crown Excel full catalog of IT hardware, laptops, PCs, printers, networking switches, routers, and biometrics in Dubai.',
  });
}

const Products = () => {
  return (
    <div>
    </div>
  )
}

export default Products
