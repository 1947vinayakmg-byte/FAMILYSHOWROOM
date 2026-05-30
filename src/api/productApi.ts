/**
 * Real products API — fetches from the MongoDB backend via /api/products.
 * Falls back to the local data catalogue when the server is unreachable.
 */
import { apiFetch } from "./config";
import { Product } from "../types";
import { EXCLUSIVE_PRODUCTS } from "../data/products";

interface ProductsResponse {
  success: boolean;
  data: {
    products: any[];
    total: number;
    page: number;
    pages: number;
  };
}

export interface ProductQuery {
  category?: string;
  search?: string;
  page?: number;
  limit?: number;
  sort?: string;
}

const mapServerProduct = (p: any): Product => {
  // Category mapping from ObjectId/Object reference to client union strings
  let catStr: 'wedding' | 'women' | 'men' | 'kids' = 'wedding';
  if (p.category) {
    const name = (p.category.name || p.category.slug || String(p.category)).toLowerCase();
    if (name.includes('wedding')) catStr = 'wedding';
    else if (name.includes('women')) catStr = 'women';
    else if (name.includes('men')) catStr = 'men';
    else if (name.includes('kids')) catStr = 'kids';
  }

  // Map images: server returns {url, publicId}[]
  const images = Array.isArray(p.images)
    ? p.images.map((img: any) => typeof img === 'string' ? img : img.url)
    : [];

  // Map colors: server returns string[] (color names); client expects {name, hex}[]
  const colors = Array.isArray(p.colors)
    ? p.colors.map((c: any) => {
        if (typeof c === 'object' && c !== null) {
          return { name: c.name || '', hex: c.hex || '#C8A96B' };
        }
        return { name: String(c), hex: '#C8A96B' };
      })
    : [];

  return {
    id: p._id || p.id,
    name: p.name || p.title || 'Bespoke Garment',
    category: catStr,
    subcategory: p.subcategory || (p.category?.name || 'Couture'),
    price: p.price || 0,
    originalPrice: p.compareAtPrice || p.originalPrice || p.price || 0,
    description: p.description || '',
    images: images.length > 0 ? images : ['https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=600&auto=format&fit=crop'],
    sizes: p.sizes || ['M'],
    colors: colors,
    rating: p.ratings || p.rating || 4.8,
    reviewsCount: p.numReviews || p.reviewsCount || 0,
    fabric: p.brand || p.fabric || 'Premium Silk/Velvet',
    work: p.work || 'Handcrafted Embellishments',
    care: p.care || 'Dry Clean Only',
    isTrending: p.isFeatured || p.isTrending || false,
    isNew: p.isNew || true,
    isWeddingCollection: catStr === 'wedding' || p.isWeddingCollection,
    stock: p.stock ?? 10,
    reviews: Array.isArray(p.reviews) ? p.reviews.map((r: any) => ({
      id: r._id || r.id,
      author: r.userName || r.author || 'Maison Guest',
      rating: r.rating || 5,
      comment: r.comment || '',
      date: r.createdAt || r.date || new Date().toISOString().split('T')[0]
    })) : []
  };
};

export const productApi = {
  async getProducts(query: ProductQuery = {}): Promise<Product[]> {
    try {
      const params = new URLSearchParams();
      if (query.category) params.set("category", query.category);
      if (query.search) params.set("search", query.search);
      if (query.page) params.set("page", String(query.page));
      if (query.limit) params.set("limit", String(query.limit));
      if (query.sort) params.set("sort", query.sort);

      const qs = params.toString();
      const res = await apiFetch<ProductsResponse>(
        `/api/products${qs ? `?${qs}` : ""}`
      );
      const serverProducts = res.data?.products ?? [];
      return serverProducts.map(mapServerProduct);
    } catch {
      // Fallback to local dataset when server is unreachable
      return EXCLUSIVE_PRODUCTS.map(mapServerProduct);
    }
  },

  async getProductById(id: string): Promise<Product | undefined> {
    try {
      const res = await apiFetch<{ success: boolean; data: any }>(
        `/api/products/${id}`
      );
      if (res.data) {
        const prodData = res.data.product || res.data;
        const mapped = mapServerProduct(prodData);
        if (res.data.reviews) {
          mapped.reviews = res.data.reviews.map((r: any) => ({
            id: r._id || r.id,
            author: r.user?.name || r.userName || r.author || 'Maison Guest',
            rating: r.rating || 5,
            comment: r.comment || '',
            date: r.createdAt || r.date || new Date().toISOString().split('T')[0]
          }));
          mapped.reviewsCount = mapped.reviews.length;
        }
        return mapped;
      }
      return undefined;
    } catch {
      const fallback = EXCLUSIVE_PRODUCTS.find((p) => p.id === id);
      return fallback ? mapServerProduct(fallback) : undefined;
    }
  },

  async getFeaturedProducts(): Promise<Product[]> {
    try {
      const res = await apiFetch<ProductsResponse>(
        "/api/products?featured=true&limit=8"
      );
      const serverProducts = res.data?.products ?? [];
      return serverProducts.map(mapServerProduct);
    } catch {
      return EXCLUSIVE_PRODUCTS.map(mapServerProduct).filter((p) => p.isTrending || p.isNew).slice(
        0,
        8
      );
    }
  },
};
