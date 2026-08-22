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
  const [transitionType, setTransitionType] = useState<'book-turn' | 'photo-dive'>('book-turn');
  const [animKey, setAnimKey] = useState(location.pathname);
  const [showStardust, setShowStardust] = useState(false);

  useEffect(() => {
    const prevPath = prevPathRef.current;
    const currentPath = location.pathname;
    const prevIdx = routeOrder.indexOf(prevPath);
    const currIdx = routeOrder.indexOf(currentPath);

    // Determine 3D book turning direction
    const isFwd = currIdx >= prevIdx || prevIdx === -1;
    setDirection(isFwd ? 'forward' : 'backward');

    // Detect Page 1 -> Page 2 3D Photo Dive portal
    if (currentPath === '/my-words' && prevPath === '/') {
      setTransitionType('photo-dive');
    } else {
      setTransitionType('book-turn');
    }

    // Trigger subtle particles on major milestone transitions
    if (['/moments', '/rakhi', '/letter'].includes(currentPath)) {
      setShowStardust(true);
      const timer = setTimeout(() => setShowStardust(false), 900);
      return () => clearTimeout(timer);
    } else {
      setShowStardust(false);
    }

    prevPathRef.current = currentPath;
    setAnimKey(`${currentPath}-${Date.now()}`);

    // Instantaneous scroll to top to prevent landing partway down the new chapter
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    if (document.documentElement) {
      document.documentElement.scrollTop = 0;
    }
    if (document.body) {
      document.body.scrollTop = 0;
    }
  }, [location.pathname]);

  const getAnimationClass = () => {
    if (transitionType === 'photo-dive') {
      return 'animate-page2-emerge';
    }
    return direction === 'forward' ? 'book-turn-forward-in' : 'book-turn-backward-in';
  };

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
        className={`w-full flex flex-col flex-1 relative transform-style-3d z-10 ${getAnimationClass()}`}
      >
        {/* Subtle Paper Edge Lighting (Only on book turns) */}
        {transitionType === 'book-turn' && (
          <div className={direction === 'forward' ? 'paper-edge-left' : 'paper-edge-right'} />
        )}

        {/* Soft Golden Page Turn Sheen Sweep */}
        {transitionType === 'book-turn' && (
          <div className="book-page-sheen" />
        )}

        {/* Page Content */}
        {children}
      </div>
    </div>
  );
};
