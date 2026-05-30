/**
 * Real orders API — creates and fetches orders via /api/orders on the backend.
 */
import { apiFetch } from "./config";
import { OrderDetails } from "../types";

export interface OrderResponse {
  success: boolean;
  orderId: string;
  details: OrderDetails;
  timestamp: string;
}

interface CreateOrderPayload {
  items: Array<{
    product: string; // product _id
    quantity: number;
    selectedSize: string;
    selectedColor: { name: string; hex: string };
    price: number;
  }>;
  shippingAddress: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
  };
  paymentMethod: "cod" | "online";
  couponCode?: string;
  totalAmount: number;
}

export const orderApi = {
  async createOrder(
    details: OrderDetails,
    items: CreateOrderPayload["items"],
    totalAmount: number,
    couponCode?: string
  ): Promise<OrderResponse> {
    const payload: CreateOrderPayload = {
      items,
      shippingAddress: {
        fullName: details.fullName,
        email: details.email,
        phone: details.phone,
        address: details.address,
        city: details.city,
        state: details.state,
        pincode: details.pincode,
      },
      paymentMethod: details.paymentMethod,
      totalAmount,
      ...(couponCode ? { couponCode } : {}),
    };

    const res = await apiFetch<{
      success: boolean;
      data: { _id: string; createdAt: string };
    }>("/api/orders", {
      method: "POST",
      body: JSON.stringify(payload),
    });

    return {
      success: res.success,
      orderId: res.data._id,
      details,
      timestamp: res.data.createdAt,
    };
  },

  async getMyOrders(): Promise<any[]> {
    const res = await apiFetch<{ success: boolean; data: any[] }>(
      "/api/orders/my"
    );
    return res.data ?? [];
  },

  async getOrderById(id: string): Promise<any> {
    const res = await apiFetch<{ success: boolean; data: any }>(
      `/api/orders/${id}`
    );
    return res.data;
  },
};
