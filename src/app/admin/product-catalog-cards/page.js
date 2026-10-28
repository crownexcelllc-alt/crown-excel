import React from 'react';
import ProductCatalogCardsClient from './ProductCatalogCardsClient';

export const metadata = {
  title: 'Product Catalog Cards | Crown Excel Admin',
};

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function ProductCatalogCardsPage() {
  return <ProductCatalogCardsClient />;
}
