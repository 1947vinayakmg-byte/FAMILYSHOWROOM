import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product, CartItem, OrderDetails, Coupon } from '../types';
import { EXCLUSIVE_PRODUCTS } from '../data/products';
import { authApi } from '../api/authApi';
import { cartApi } from '../api/cartApi';
import { wishlistApi } from '../api/wishlistApi';
import { productApi } from '../api/productApi';
import { getPriceForSize } from '../utils/priceHelper';

// ── Coupon bridge: read admin-managed coupons from shared localStorage ──────
// Admin panel stores coupons under 'luxury_db_coupons' with fields:
//   { id, code, discountType, value, minPurchase, expiryDate, active, redemptionsCount }
// Client Coupon type uses:  { code, discountType, value, minSpend, description }
interface AdminCoupon {
  id: string;
  code: string;
  discountType: 'percentage' | 'fixed';
  value: number;
  minPurchase?: number;
  expiryDate?: string;
  active: boolean;
  redemptionsCount: number;
}

function getAdminCoupons(): AdminCoupon[] {
  try {
    const raw = localStorage.getItem('luxury_db_coupons');
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function findAdminCoupon(code: string): AdminCoupon | undefined {
  const all = getAdminCoupons();
  return all.find(
    (c) => c.code.toUpperCase() === code.trim().toUpperCase() && c.active
  );
}

function adminToCoupon(ac: AdminCoupon): Coupon {
  return {
    code: ac.code,
    discountType: ac.discountType,
    value: ac.value,
    minSpend: ac.minPurchase ?? 0,
    description: `${ac.discountType === 'percentage' ? ac.value + '% off' : '₹' + ac.value.toLocaleString() + ' off'}${
      ac.minPurchase ? ` on orders above ₹${ac.minPurchase.toLocaleString()}` : ''
    }`
  };
}

// ── Admin Product bridge: read products from admin localStorage ───────────────
// Admin panel stores products under 'luxury_db_products' — we can bridge these
// to the client store when the backend server is unreachable.
interface AdminProduct {
  id: string;
  title: string;
  description: string;
  images: string[];
  category: string;
  sizes: string[];
  colors: string[];
  price: number;
  originalPrice?: number;
  discount?: number;
  sku: string;
  stock: number;
  code: string;
  isDeleted?: boolean;
}

function getAdminProducts(): Product[] {
  try {
    const raw = localStorage.getItem('luxury_db_products');
    if (!raw) return [];
    const parsed: AdminProduct[] = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    // Map admin Product shape → client Product shape
    return parsed
      .filter(p => !p.isDeleted)
      .map(p => ({
        id: p.id,
        name: p.title,
        category: (p.category as 'women' | 'men' | 'kids' | 'wedding') || 'women',
        subcategory: p.category,
        price: p.price,
        originalPrice: p.originalPrice || p.price,
        description: p.description,
        images: p.images,
        sizes: p.sizes,
        // Admin stores colors as strings; client needs {name, hex}
        colors: p.colors.map(c => ({
          name: typeof c === 'string' ? c : (c as any).name,
          hex: '#C8A96B'
        })),
        rating: 4.5,
        reviewsCount: 0,
        fabric: 'Premium Fabric',
        work: 'Hand-crafted',
        care: 'Dry clean only',
        stock: p.stock,
        reviews: [],
        isTrending: false,
        isNew: true
      }));
  } catch {
    return [];
  }
}

interface ShopContextType {
  products: Product[];
  cart: CartItem[];
  wishlist: Product[];
  searchKeyword: string;
  setSearchKeyword: (keyword: string) => void;
  activeCoupon: Coupon | null;
  authUser: { email: string; name: string } | null;
  toast: { message: string; type: 'success' | 'info' | 'error' } | null;

  addToCart: (product: Product, size: string, color: { name: string; hex: string }, quantity?: number) => void;
  removeFromCart: (cartItemId: string) => void;
  updateCartQuantity: (cartItemId: string, change: number) => void;
  clearCart: () => void;

  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;

  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;

  showToast: (message: string, type: 'success' | 'info' | 'error') => void;
  hideToast: () => void;

  login: (email: string, password?: string) => Promise<boolean>;
  logout: () => void;
  register: (name: string, email: string, password?: string) => Promise<boolean>;

  cartCount: number;
  cartSubtotal: number;
  cartDiscount: number;
  cartTotal: number;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};

export const ShopProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>(EXCLUSIVE_PRODUCTS);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [activeCoupon, setActiveCoupon] = useState<Coupon | null>(() => {
    const saved = localStorage.getItem('luxury_coupon');
    return saved ? JSON.parse(saved) : null;
  });
  const [authUser, setAuthUser] = useState<{ email: string; name: string } | null>(() => {
    const saved = localStorage.getItem('luxury_user');
    return saved ? JSON.parse(saved) : null;
  });
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'info' | 'error' } | null>(null);

  // 1. Load active products: Backend API → Admin localStorage bridge → Static fallback
  useEffect(() => {
    productApi.getProducts()
      .then(prods => {
        if (prods && prods.length > 0) {
          setProducts(prods);
        } else {
          // Backend returned nothing — try admin localStorage bridge
          const adminProds = getAdminProducts();
          if (adminProds.length > 0) setProducts(adminProds);
          // else EXCLUSIVE_PRODUCTS stays as initial state
        }
      })
      .catch(() => {
        // Network error — fallback to admin localStorage bridge
        const adminProds = getAdminProducts();
        if (adminProds.length > 0) setProducts(adminProds);
      });

    // Real-time sync: when admin saves products in another tab
    const onStorage = (e: StorageEvent) => {
      if (e.key === 'luxury_db_products') {
        const adminProds = getAdminProducts();
        if (adminProds.length > 0) setProducts(adminProds);
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  // 2. Load and sync cart & wishlist when authUser changes
  useEffect(() => {
    const syncUserData = async () => {
      if (authUser) {
        try {
          const dbCart = await cartApi.fetchCart();
          const adjustedCart = dbCart.map(item => ({
            ...item,
            product: {
              ...item.product,
              price: getPriceForSize(item.product.price, item.selectedSize),
              originalPrice: getPriceForSize(item.product.originalPrice, item.selectedSize),
            }
          }));
          setCart(adjustedCart);
          const dbWish = await wishlistApi.fetchWishlist();
          setWishlist(dbWish);
        } catch (err) {
          console.error('Failed to retrieve user cloud registers:', err);
        }
      } else {
        // Fallback guest checkouts
        const savedCart = localStorage.getItem('luxury_cart');
        const parsedCart: CartItem[] = savedCart ? JSON.parse(savedCart) : [];
        const adjustedCart = parsedCart.map(item => ({
          ...item,
          product: {
            ...item.product,
            price: getPriceForSize(item.product.price, item.selectedSize),
            originalPrice: getPriceForSize(item.product.originalPrice, item.selectedSize),
          }
        }));
        setCart(adjustedCart);
        const savedWish = localStorage.getItem('luxury_wishlist');
        setWishlist(savedWish ? JSON.parse(savedWish) : []);
      }
    };
    syncUserData();
  }, [authUser]);

  // Sync state to local storage for guests
  useEffect(() => {
    if (!authUser) {
      localStorage.setItem('luxury_cart', JSON.stringify(cart));
    }
  }, [cart, authUser]);

  useEffect(() => {
    if (!authUser) {
      localStorage.setItem('luxury_wishlist', JSON.stringify(wishlist));
    }
  }, [wishlist, authUser]);

  useEffect(() => {
    if (activeCoupon) {
      localStorage.setItem('luxury_coupon', JSON.stringify(activeCoupon));
    } else {
      localStorage.removeItem('luxury_coupon');
    }
  }, [activeCoupon]);

  useEffect(() => {
    if (authUser) {
      localStorage.setItem('luxury_user', JSON.stringify(authUser));
    } else {
      localStorage.removeItem('luxury_user');
    }
  }, [authUser]);

  // Toast utilities
  const showToast = (message: string, type: 'success' | 'info' | 'error') => {
    setToast({ message, type });
  };

  const hideToast = () => {
    setToast(null);
  };

  // Auto clean toast after 4s
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        hideToast();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // Cart operations
  const addToCart = async (product: Product, size: string, color: { name: string; hex: string }, quantity = 1) => {
    const cartItemId = `${product.id}_${size}_${color.name}`;

    const adjustedPrice = getPriceForSize(product.price, size);
    const adjustedOriginalPrice = getPriceForSize(product.originalPrice, size);
    const adjustedProduct = {
      ...product,
      price: adjustedPrice,
      originalPrice: adjustedOriginalPrice
    };

    if (authUser) {
      try {
        await cartApi.addItem(product.id, quantity, size, color);
        // Refresh full cart from backend to be safe
        const dbCart = await cartApi.fetchCart();
        const adjustedCart = dbCart.map(item => ({
          ...item,
          product: {
            ...item.product,
            price: getPriceForSize(item.product.price, item.selectedSize),
            originalPrice: getPriceForSize(item.product.originalPrice, item.selectedSize),
          }
        }));
        setCart(adjustedCart);
        showToast(`Added ${product.name} (${size}) to cart`, 'success');
      } catch (err: any) {
        showToast(err.message || 'Failed to add item to cart', 'error');
      }
    } else {
      // Guest local storage
      setCart((prevCart) => {
        const existing = prevCart.find((item) => item.id === cartItemId);
        if (existing) {
          showToast(`Increased quantity of ${product.name} in cart`, 'success');
          return prevCart.map((item) =>
            item.id === cartItemId ? { ...item, quantity: item.quantity + quantity } : item
          );
        }
        showToast(`Added ${product.name} (${size}) to cart`, 'success');
        return [...prevCart, { id: cartItemId, product: adjustedProduct, selectedSize: size, selectedColor: color, quantity }];
      });
    }
  };

  const removeFromCart = async (cartItemId: string) => {
    if (authUser) {
      try {
        // Find product ID from cart item or split it
        const prodId = cartItemId.split('_')[0];
        await cartApi.removeItem(prodId);
        const dbCart = await cartApi.fetchCart();
        setCart(dbCart);
        showToast(`Removed item from cart`, 'info');
      } catch (err: any) {
        showToast(err.message || 'Failed to remove item', 'error');
      }
    } else {
      setCart((prevCart) => {
        const removedItem = prevCart.find((item) => item.id === cartItemId);
        if (removedItem) {
          showToast(`Removed ${removedItem.product.name} from cart`, 'info');
        }
        return prevCart.filter((item) => item.id !== cartItemId);
      });
    }
  };

  const updateCartQuantity = async (cartItemId: string, change: number) => {
    const targetItem = cart.find(item => item.id === cartItemId);
    if (!targetItem) return;
    const nextQty = Math.max(1, targetItem.quantity + change);

    if (authUser) {
      try {
        const prodId = cartItemId.split('_')[0];
        await cartApi.updateItem(prodId, nextQty);
        const dbCart = await cartApi.fetchCart();
        setCart(dbCart);
      } catch (err: any) {
        showToast(err.message || 'Failed to update quantity', 'error');
      }
    } else {
      setCart((prevCart) =>
        prevCart.map((item) => {
          if (item.id === cartItemId) {
            return { ...item, quantity: nextQty };
          }
          return item;
        })
      );
    }
  };

  const clearCart = async () => {
    if (authUser) {
      try {
        await cartApi.clearCart();
      } catch (err) {
        console.error('Failed to clear cloud cart:', err);
      }
    }
    setCart([]);
    setActiveCoupon(null);
  };

  // Wishlist operations
  const toggleWishlist = async (product: Product) => {
    const exists = wishlist.some((item) => item.id === product.id);
    if (authUser) {
      try {
        if (exists) {
          await wishlistApi.removeItem(product.id);
          showToast(`Removed ${product.name} from Wishlist`, 'info');
        } else {
          await wishlistApi.addItem(product.id);
          showToast(`Saved ${product.name} to Wishlist`, 'success');
        }
        const dbWish = await wishlistApi.fetchWishlist();
        setWishlist(dbWish);
      } catch (err: any) {
        showToast(err.message || 'Failed to update wishlist', 'error');
      }
    } else {
      setWishlist((prevWishlist) => {
        if (exists) {
          showToast(`Removed ${product.name} from Wishlist`, 'info');
          return prevWishlist.filter((item) => item.id !== product.id);
        } else {
          showToast(`Saved ${product.name} to Wishlist`, 'success');
          return [...prevWishlist, product];
        }
      });
    }
  };

  const isInWishlist = (productId: string) => {
    return wishlist.some((item) => item.id === productId);
  };

  // Coupon handling — reads from admin's localStorage (luxury_db_coupons)
  const applyCoupon = (code: string): boolean => {
    const adminCoupon = findAdminCoupon(code);

    if (!adminCoupon) {
      showToast('Invalid or expired promo coupon code', 'error');
      return false;
    }

    // Check expiry date
    if (adminCoupon.expiryDate) {
      const expiry = new Date(adminCoupon.expiryDate);
      expiry.setHours(23, 59, 59, 999);
      if (new Date() > expiry) {
        showToast(`Coupon ${adminCoupon.code} has expired`, 'error');
        return false;
      }
    }

    const minSpend = adminCoupon.minPurchase ?? 0;
    if (minSpend > 0 && cartSubtotal < minSpend) {
      showToast(`This coupon requires a minimum spend of ₹${minSpend.toLocaleString()}`, 'error');
      return false;
    }

    const coupon = adminToCoupon(adminCoupon);
    setActiveCoupon(coupon);
    showToast(`Coupon ${coupon.code} applied successfully!`, 'success');
    return true;
  };

  const removeCoupon = () => {
    setActiveCoupon(null);
    showToast('Promo coupon removed', 'info');
  };

  // Auth operations
  const login = async (email: string, password = ''): Promise<boolean> => {
    try {
      const res = await authApi.login(email, password);
      setAuthUser({ email: res.user.email, name: res.user.name });
      showToast(`Welcome back, ${res.user.name}!`, 'success');
      return true;
    } catch (err: any) {
      showToast(err.message || 'Credentials rejected', 'error');
      throw err;
    }
  };

  const logout = async () => {
    try {
      await authApi.logout();
    } catch (err) {
      console.error('Logout API failure:', err);
    }
    setAuthUser(null);
    setCart([]);
    setWishlist([]);
    setActiveCoupon(null);
    showToast('Logged out of your showroom profile', 'info');
  };

  const register = async (name: string, email: string, password = ''): Promise<boolean> => {
    try {
      const res = await authApi.register(name, email, password);
      setAuthUser({ email: res.user.email, name: res.user.name });
      showToast(`Profile created successfully. Welcome to DEMO!`, 'success');
      return true;
    } catch (err: any) {
      showToast(err.message || 'Registration failed', 'error');
      throw err;
    }
  };

  // Computed Cart values
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const cartSubtotal = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);

  let cartDiscount = 0;
  if (activeCoupon) {
    if (activeCoupon.discountType === 'percentage') {
      cartDiscount = Math.round((cartSubtotal * activeCoupon.value) / 100);
    } else {
      cartDiscount = Math.min(activeCoupon.value, cartSubtotal);
    }
  }

  const cartTotal = Math.max(0, cartSubtotal - cartDiscount);

  return (
    <ShopContext.Provider
      value={{
        products,
        cart,
        wishlist,
        searchKeyword,
        setSearchKeyword,
        activeCoupon,
        authUser,
        toast,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        toggleWishlist,
        isInWishlist,
        applyCoupon,
        removeCoupon,
        showToast,
        hideToast,
        login,
        logout,
        register,
        cartCount,
        cartSubtotal,
        cartDiscount,
        cartTotal
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
