/**
 * Simple validation functions for checkout and contact forms.
 */

export function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export function validatePhone(phone: string): boolean {
  // Checks if the phone number has a reasonable length
  const clean = phone.replace(/[^\d+]/g, '');
  return clean.length >= 10;
}

export function validatePincode(pincode: string): boolean {
  // Checks for a standard 6 digit Indian pin code
  return /^\d{6}$/.test(pincode);
}
