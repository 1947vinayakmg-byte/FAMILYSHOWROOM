/**
 * Helper to calculate adjusted luxury price based on selected garment size.
 * - S, XS, Free Size, and infant sizes (2-3Y) are base price.
 * - M and young children sizes (4-5Y) add 5%.
 * - L and mid-kids sizes (6-7Y, 8-9Y) add 10%.
 * - XL and older kids sizes (10-11Y) add 15%.
 * - XXL and pre-teen sizes (12-13Y) add 20%.
 * - Bespoke Custom tailoring adds 25%.
 */
export const getPriceForSize = (basePrice: number, size: string): number => {
  if (!size) return basePrice;
  const s = size.trim().toUpperCase();

  if (s === 'S' || s === 'XS' || s === 'FREE SIZE' || s === '2-3Y') {
    return basePrice;
  }
  if (s === 'M' || s === '4-5Y') {
    return Math.round(basePrice * 1.05);
  }
  if (s === 'L' || s === '6-7Y' || s === '8-9Y') {
    return Math.round(basePrice * 1.10);
  }
  if (s === 'XL' || s === '10-11Y') {
    return Math.round(basePrice * 1.15);
  }
  if (s === 'XXL' || s === '12-13Y') {
    return Math.round(basePrice * 1.20);
  }
  if (s === 'CUSTOM') {
    return Math.round(basePrice * 1.25);
  }
  
  return basePrice;
};
