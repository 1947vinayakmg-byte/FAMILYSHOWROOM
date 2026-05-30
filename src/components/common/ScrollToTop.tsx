import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Utility layout helper to snap scroll back to top index on path change.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}
