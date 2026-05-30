/**
 * Shared constants for the luxury boutique.
 */

export const CONCIERGE_PHONE = '919999999999';

export const OUTLETS = [
  {
    id: 'delhi',
    name: 'DLF Emporio Flagship Showroom',
    address: 'VIP Ward Suite-104, Second Floor, DLF Emporio, Vasant Kunj, New Delhi, 110070',
    hours: '11:00 AM - 08:30 PM (Mon-Sun)',
    tel: '+91 6360510473',
    landmark: 'Next to Louis Vuitton suite entrance'
  },
  {
    id: 'hyderabad',
    name: 'Jubilee Hills Couture Studio',
    address: 'Road Number 36, Landmark Mansion, Jubilee Hills, Hyderabad, Telangana, 500033',
    hours: '11:00 AM - 09:00 PM (Mon-Sun)',
    tel: '+91 88888 88888',
    landmark: 'Opposite Oakwood private park'
  }
];

export const PAVILIONS = [
  { name: 'all', label: 'All products' },
  { name: 'wedding', label: 'Wedding Pavilion' },
  { name: 'women', label: 'Heritage Women' },
  { name: 'men', label: 'Regal Men' },
  { name: 'kids', label: 'DEMO Kids' }
];

export const FABRICS = ['all', 'Velvet', 'Silk', 'Organza', 'Wool', 'Chanderi'];

export const SUBCATEGORY_VISUALS: Record<string, string> = {
  all: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=150&h=150&q=80',
  'Bridal Lehengas': 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=150&h=150&q=80',
  'Groom Sherwanis': 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&w=150&h=150&q=80',
  'Handloom Sarees': 'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?auto=format&fit=crop&w=150&h=150&q=80',
  'Bandhgalas': 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=150&h=150&q=80',
  'Designer Lehengas': 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=150&h=150&q=80',
  'Kids Festive Wear': 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=150&h=150&q=80',
  'Loungewear & Tuxedos': 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=150&h=150&q=80',
  'Cocktail Sarees': 'https://images.unsplash.com/photo-1583391265517-35bbadd01209?auto=format&fit=crop&w=150&h=150&q=80',
  'Anarkalis & Salwars': 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=150&h=150&q=80'
};
