/**
 * Centralized API configuration for the client.
 * Set VITE_API_URL in client/.env to override in production.
 */
export const API_BASE_URL =
  (import.meta as any).env?.VITE_API_URL ?? "http://localhost:5000";

/**
 * Wrapper around fetch that attaches credentials (cookies) on every request
 * and throws a structured error if the response is not OK.
 */
export async function apiFetch<T = unknown>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_BASE_URL}${path}`;
  const res = await fetch(url, {
    ...options,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers ?? {}),
    },
  });

  if (!res.ok) {
    let message = `API error ${res.status}`;
    try {
      const body = await res.json();
      message = body?.message ?? message;
    } catch {
      // ignore JSON parse errors
    }
    throw new Error(message);
  }

  // 204 No Content — return null
  if (res.status === 204) return null as T;
  return res.json() as Promise<T>;
}
