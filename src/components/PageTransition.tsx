import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

const routeOrder = [
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

  useEffect(() => {
    const prevIdx = routeOrder.indexOf(prevPathRef.current);
    const currIdx = routeOrder.indexOf(location.pathname);

    // Determine turning direction: if moving forward or looping, turn forward, else backward
    if (currIdx >= prevIdx || prevIdx === -1) {
      setDirection('forward');
    } else {
      setDirection('backward');
    }

    prevPathRef.current = location.pathname;
    setAnimKey(`${location.pathname}-${Date.now()}`);

    // Smooth scroll to top when turning pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="book-turn-container book-spine-crease w-full flex flex-col flex-1">
      {/* 3D Book Page Turn Wrapper */}
      <div
        key={animKey}
        className={`w-full flex flex-col flex-1 relative ${
          direction === 'forward' ? 'book-turn-forward' : 'book-turn-backward'
        }`}
      >
        {/* Soft Golden Page Turn Sheen Highlight */}
        <div className="book-page-sheen" />

        {/* Page Content */}
        {children}
      </div>
    </div>
  );
};
