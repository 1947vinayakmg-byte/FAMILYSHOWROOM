import React from 'react';
import { Product } from '../../types';
import ProductCard from '../product/ProductCard';

interface WishlistItemProps {
  product: Product;
}

export default function WishlistItem({ product }: WishlistItemProps) {
  return <ProductCard product={product} />;
}
