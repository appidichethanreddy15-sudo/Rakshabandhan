import React, { useMemo } from 'react';

interface Star {
  id: number;
  top: string;
  left: string;
  size: string;
  opacity: number;
  duration: string;
  delay: string;
}

export const SpaceBackground: React.FC = () => {
  // Generate random stars once on mount
  const stars: Star[] = useMemo(() => {
    return Array.from({ length: 55 }, (_, i) => ({
      id: i,
      top: `${(Math.sin(i * 99) * 0.5 + 0.5) * 100}%`,
      left: `${(Math.cos(i * 77) * 0.5 + 0.5) * 100}%`,
      size: i % 7 === 0 ? 'w-1.5 h-1.5' : i % 3 === 0 ? 'w-1 h-1' : 'w-0.5 h-0.5',
      opacity: 0.25 + (i % 5) * 0.15,
      duration: `${2.5 + (i % 4) * 1.2}s`,
      delay: `${(i % 5) * 0.8}s`
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden select-none">
      
      {/* Deep Space Cosmic Sky Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#06030B] via-[#0D0818] to-[#07040D]" />

      {/* Cosmic Nebula Dust Clouds */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#6C2231]/25 via-[#4A154B]/20 to-transparent rounded-full blur-[120px] opacity-70" />
      <div className="absolute bottom-10 left-10 w-[550px] h-[550px] bg-gradient-to-tr from-[#1E1B4B]/30 via-[#2E1065]/20 to-transparent rounded-full blur-[110px] opacity-60" />
      <div className="absolute top-1/2 left-1/3 w-[450px] h-[450px] bg-gradient-to-r from-[#D4AF37]/10 via-[#F59E0B]/10 to-transparent rounded-full blur-[90px] opacity-50" />

      {/* Luminous Glowing Moon */}
      <div className="absolute top-8 right-6 sm:top-14 sm:right-16 md:right-28 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full transition-all duration-700">
        
        {/* Outer Lunar Aura / Corona */}
        <div className="absolute -inset-8 sm:-inset-12 rounded-full bg-gradient-to-tr from-[#FBF4DE]/25 via-[#D4AF37]/15 to-transparent blur-2xl animate-pulse-slow pointer-events-none" />
        
        {/* Moon Sphere Body */}
        <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#FFFDF2] via-[#F4EAC8] to-[#D9C694] shadow-[0_0_50px_rgba(251,244,222,0.45),inset_-12px_-12px_24px_rgba(100,75,40,0.35),inset_8px_8px_16px_rgba(255,255,255,0.8)] overflow-hidden border border-[#FFFDF8]/40">
          
          {/* Subtle Lunar Surface Craters */}
          <div className="absolute top-4 left-6 w-7 h-6 rounded-full bg-[#C7B582]/30 blur-[1px]" />
          <div className="absolute top-12 left-12 w-10 h-8 rounded-full bg-[#BFAF7B]/25 blur-[1.5px]" />
          <div className="absolute bottom-6 left-8 w-12 h-10 rounded-full bg-[#C2AF72]/30 blur-[2px]" />
          <div className="absolute top-8 right-5 w-8 h-7 rounded-full bg-[#BFAF7B]/20 blur-[1px]" />
          <div className="absolute bottom-10 right-8 w-6 h-5 rounded-full bg-[#D4C38E]/25 blur-[1px]" />
          
          {/* Subtle Lunar Mare Texture Swirl */}
          <div className="absolute inset-0 bg-radial from-transparent via-[#8C7A4B]/10 to-[#594926]/20 mix-blend-multiply" />
        </div>
      </div>

      {/* Twinkling Space Stars Field */}
      {stars.map((star) => (
        <div
          key={star.id}
          style={{
            top: star.top,
            left: star.left,
            animationDuration: star.duration,
            animationDelay: star.delay
          }}
          className={`absolute ${star.size} rounded-full bg-white animate-twinkle shadow-[0_0_4px_rgba(255,255,255,0.9)]`}
        />
      ))}

      {/* Subtle Shooting Star Starlight Streaks */}
      <div className="shooting-star shooting-star-1" />
      <div className="shooting-star shooting-star-2" />

      {/* Soft Ground Starlight Glow */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#06030B] via-[#06030B]/80 to-transparent" />
    </div>
  );
};
