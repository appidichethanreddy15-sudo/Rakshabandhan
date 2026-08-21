import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { MusicToggle } from './MusicToggle';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/45 backdrop-blur-md border-b border-[#C87D88]/20 transition-all shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-center h-16 sm:h-18">

          {/* Centered Logo & Brand Text */}
          <Link
            to="/"
            className="group flex items-center justify-center gap-2.5 focus:outline-none select-none"
            aria-label="Home page for Bangarammmm"
          >
            <div className="w-8 h-8 rounded-full bg-[#F7E6E8] flex items-center justify-center border border-[#C87D88]/30 group-hover:bg-[#F3D5D9] transition-colors shadow-xs shrink-0">
              <Heart className="w-4 h-4 text-[#6C2231] fill-[#6C2231] group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col text-center sm:text-left">
              <span className="font-serif-heading font-semibold text-lg sm:text-xl text-[#6C2231] tracking-wide flex items-center justify-center sm:justify-start gap-1.5 leading-tight">
                Bangarammmm
                <span className="text-xs text-[#D4AF37] font-normal opacity-90">❤️</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[#7E7275] font-medium block">
                A Sister's Memory Book
              </span>
            </div>
          </Link>

          {/* Discreet Right Action: Music Toggle */}
          <div className="absolute right-0 flex items-center">
            <MusicToggle />
          </div>

        </div>
      </div>
    </header>
  );
};
