/**
 * Generates a pre-filled WhatsApp click-to-chat URL.
 * @param phone - The target phone number, default is DLF Emporio concierge +919999999999
 * @param message - The text message to prefill.
 * @returns Fully encoded WhatsApp URL.
 */
export function generateWhatsAppLink(
  message: string,
  phone = '919999999999'
): string {
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedText}`;
}
