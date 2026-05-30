/**
 * Real authentication API — hits the Node/Express backend.
 * Replaces the previous simulation that accepted any @-containing email.
 */
import { apiFetch } from "./config";

export interface UserSession {
  _id: string;
  email: string;
  name: string;
  role: string;
}

interface AuthResponse {
  success: boolean;
  data: {
    user: UserSession;
    accessToken: string;
  };
  message?: string;
}

export const authApi = {
  async login(
    email: string,
    password: string
  ): Promise<{ user: UserSession; accessToken: string }> {
    const res = await apiFetch<AuthResponse>("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    return res.data;
  },

  async register(
    name: string,
    email: string,
    password: string
  ): Promise<{ user: UserSession; accessToken: string }> {
    const res = await apiFetch<AuthResponse>("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
    });
    return res.data;
  },

  async logout(): Promise<void> {
    await apiFetch("/api/auth/logout", { method: "POST" });
  },

  async getMe(): Promise<UserSession> {
    const res = await apiFetch<{ success: boolean; data: UserSession }>(
      "/api/auth/me"
    );
    return res.data;
  },
};
