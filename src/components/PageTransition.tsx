import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

// Canonical sequential order of pages across the website
const routeOrder = [
  '/welcome',
  '/wishes',
  '/',
  '/my-words',
  '/memories',
  '/moments',
  '/rakhi',
  '/letter'
];

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const prevPathRef = useRef(location.pathname);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const [animKey, setAnimKey] = useState(location.pathname);
  const [showStardust, setShowStardust] = useState(false);

  useEffect(() => {
    const prevIdx = routeOrder.indexOf(prevPathRef.current);
    const currIdx = routeOrder.indexOf(location.pathname);

    // Determine 3D book turning direction
    if (currIdx >= prevIdx || prevIdx === -1) {
      setDirection('forward');
    } else {
      setDirection('backward');
    }

    // Trigger subtle particles on major milestone transitions
    if (['/moments', '/rakhi', '/letter'].includes(location.pathname)) {
      setShowStardust(true);
      const timer = setTimeout(() => setShowStardust(false), 900);
      return () => clearTimeout(timer);
    } else {
      setShowStardust(false);
    }

    prevPathRef.current = location.pathname;
    setAnimKey(`${location.pathname}-${Date.now()}`);

    // Smooth scroll to top when turning pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="scrapbook-stack-container book-spine-crease w-full flex flex-col flex-1 overflow-x-hidden">
      
      {/* Layer 1: Stacked Backing Page in 3D Depth */}
      <div className="scrapbook-page-stack-layer-1" />

      {/* Layer 2: Deeper Stacked Page in 3D Depth */}
      <div className="scrapbook-page-stack-layer-2" />

      {/* Subtle Milestone Floating Golden Stardust Particles */}
      {showStardust && (
        <div className="absolute top-12 left-1/2 -translate-x-1/2 pointer-events-none z-50 flex items-center justify-center gap-6">
          <span className="text-sm text-[#D4AF37] animate-stardust-1">✨</span>
          <span className="text-xs text-[#C87D88] animate-stardust-2">🌸</span>
          <span className="text-sm text-[#D4AF37] animate-stardust-3">⭐</span>
        </div>
      )}

      {/* 3D Active Turning Book Page Wrapper */}
      <div
        key={animKey}
        className={`w-full flex flex-col flex-1 relative transform-style-3d z-10 ${
          direction === 'forward' ? 'book-turn-forward-in' : 'book-turn-backward-in'
        }`}
      >
        {/* Subtle Paper Edge Lighting */}
        <div className={direction === 'forward' ? 'paper-edge-left' : 'paper-edge-right'} />

        {/* Soft Golden Page Turn Sheen Sweep */}
        <div className="book-page-sheen" />

        {/* Page Content */}
        {children}
      </div>
    </div>
  );
};
