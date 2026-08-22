import React, { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop: React.FC = () => {
  const { pathname, search } = useLocation();

  // Disable default browser scroll restoration to prevent landing on previous page scroll positions
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useLayoutEffect(() => {
    // Instantaneous reset to the very top before paint
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });

    if (document.documentElement) {
      document.documentElement.scrollTop = 0;
    }
    if (document.body) {
      document.body.scrollTop = 0;
    }

    // Microtask backup frame to guarantee mobile viewport top alignment
    const frameId = requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      if (document.documentElement) {
        document.documentElement.scrollTop = 0;
      }
      if (document.body) {
        document.body.scrollTop = 0;
      }
    });

    return () => cancelAnimationFrame(frameId);
  }, [pathname, search]);

  return null;
};
