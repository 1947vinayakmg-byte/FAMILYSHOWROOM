/**
 * Real cart API — syncs with the MongoDB backend via /api/cart.
 * Falls back gracefully to localStorage when the server is unreachable.
 */
import { apiFetch } from "./config";
import { CartItem } from "../types";

interface CartResponse {
  success: boolean;
  data: {
    items: Array<{
      _id: string;
      product: any;
      quantity: number;
      selectedSize: string;
      selectedColor: { name: string; hex: string };
    }>;
  };
}

export const cartApi = {
  /** Fetch the authenticated user's cart from the server. */
  async fetchCart(): Promise<CartItem[]> {
    try {
      const res = await apiFetch<CartResponse>("/api/cart");
      return (res.data?.items ?? []).map((item) => ({
        id: `${item.product?._id ?? item._id}_${item.selectedSize}_${item.selectedColor?.name ?? ""}`,
        product: item.product,
        selectedSize: item.selectedSize,
        selectedColor: item.selectedColor,
        quantity: item.quantity,
      }));
    } catch {
      // Fallback to localStorage if unauthenticated / server down
      const saved = localStorage.getItem("luxury_cart");
      return saved ? JSON.parse(saved) : [];
    }
  },

  /** Add a single item to the server cart. */
  async addItem(
    productId: string,
    quantity: number,
    selectedSize: string,
    selectedColor: { name: string; hex: string }
  ): Promise<void> {
    await apiFetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({ productId, quantity, selectedSize, selectedColor }),
    });
  },

  /** Update quantity of an existing cart item. */
  async updateItem(cartItemId: string, quantity: number): Promise<void> {
    await apiFetch(`/api/cart/${cartItemId}`, {
      method: "PUT",
      body: JSON.stringify({ quantity }),
    });
  },

  /** Remove one item from the server cart. */
  async removeItem(cartItemId: string): Promise<void> {
    await apiFetch(`/api/cart/${cartItemId}`, { method: "DELETE" });
  },

  /** Clear the entire server cart (called after checkout). */
  async clearCart(): Promise<void> {
    await apiFetch("/api/cart", { method: "DELETE" });
  },
};
