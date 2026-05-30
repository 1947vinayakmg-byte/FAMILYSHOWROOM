/**
 * Formats a number to an Indian Rupee (INR) currency string.
 * @param price - The numeric price to format.
 * @returns Formatted string, e.g. "₹50,000"
 */
export function formatPrice(price: number): string {
  return `₹${price.toLocaleString('en-IN')}`;
}
