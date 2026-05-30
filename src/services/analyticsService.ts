/**
 * Simulated showroom analytics and user behavior telemetry.
 */

export const analyticsService = {
  trackEvent(event: string, properties?: Record<string, any>) {
    console.log(`[Luxury Analytics Event] - ${event}`, properties);
  },

  trackPageView(page: string) {
    console.log(`[Luxury Analytics PageView] - Entered: ${page}`);
  }
};
