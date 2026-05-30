import React from 'react';
import { useShop } from '../context/ShopContext';
import PageBanner from '../components/common/PageBanner';
import ProductCatalogLayout from '../components/product/ProductCatalogLayout';

export default function Collection() {
  const { products } = useShop();

  return (
    <div className="bg-[#FAF7F2] min-h-screen text-[#1a1a1a] pb-16" id="collections-view">
      {/* Dynamic editorial heading banner */}
      <PageBanner
        tagline="Grand Flagship Catalog"
        title="Haute Couture Portfolios"
        description="Browse certified royal handlooms, Savile Row tailored suits, and family wedding attire, verified under pure Silk Mark stamps."
      />

      <ProductCatalogLayout initialProducts={products} categoryKey="all" />
    </div>
  );
}
