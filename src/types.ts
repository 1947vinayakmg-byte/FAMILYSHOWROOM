export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'women' | 'men' | 'kids' | 'wedding';
  subcategory: string;
  price: number;
  originalPrice: number;
  description: string;
  images: string[];
  sizes: string[];
  colors: { name: string; hex: string }[];
  rating: number;
  reviewsCount: number;
  fabric: string;
  work: string;
  care: string;
  isTrending?: boolean;
  isNew?: boolean;
  isWeddingCollection?: boolean;
  stock: number;
  reviews: Review[];
}

export interface CartItem {
  id: string; // unique cart entry id, usually `${productId}_${size}_${color}`
  product: Product;
  selectedSize: string;
  selectedColor: { name: string; hex: string };
  quantity: number;
}

export interface OrderDetails {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  paymentMethod: 'cod' | 'online';
  cardName?: string;
  cardNumber?: string;
  cardExpiry?: string;
  cardCvv?: string;
}

export interface Coupon {
  code: string;
  discountType: 'percentage' | 'fixed';
  value: number;
  minSpend: number;
  description: string;
}
