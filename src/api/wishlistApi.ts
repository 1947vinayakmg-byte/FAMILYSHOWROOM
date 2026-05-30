/**
 * Real wishlist API — syncs with MongoDB backend via /api/wishlist.
 * Falls back to localStorage when unauthenticated.
 */
import { apiFetch } from "./config";
import { Product } from "../types";

interface WishlistResponse {
  success: boolean;
  data: {
    items: Product[];
  };
}

export const wishlistApi = {
  async fetchWishlist(): Promise<Product[]> {
    try {
      const res = await apiFetch<WishlistResponse>("/api/wishlist");
      return res.data?.items ?? [];
    } catch {
      const saved = localStorage.getItem("luxury_wishlist");
      return saved ? JSON.parse(saved) : [];
    }
  },

  async addItem(productId: string): Promise<void> {
    await apiFetch("/api/wishlist", {
      method: "POST",
      body: JSON.stringify({ productId }),
    });
  },

  async removeItem(productId: string): Promise<void> {
    await apiFetch(`/api/wishlist/${productId}`, { method: "DELETE" });
  },

  async clearWishlist(): Promise<void> {
    await apiFetch("/api/wishlist", { method: "DELETE" });
  },
};
