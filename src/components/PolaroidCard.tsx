import React from 'react';
import { WashiTape } from './WashiTape';
import { ImageWithFallback } from './ImageWithFallback';

interface PolaroidCardProps {
  image: string;
  caption: string;
  date?: string;
  rotation?: string;
  tapeColor?: 'pink' | 'gold' | 'lavender' | 'cream';
  className?: string;
  onClick?: () => void;
  aspectRatio?: 'square' | 'portrait' | 'video';
}

export const PolaroidCard: React.FC<PolaroidCardProps> = ({
  image,
  caption,
  date,
  rotation = '-rotate-2',
  tapeColor = 'pink',
  className = '',
  onClick,
  aspectRatio = 'square'
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative group polaroid-frame rounded-sm cursor-pointer transform ${rotation} transition-all duration-300 ${className}`}
    >
      {/* Washi Tape at Top Center */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
        <WashiTape color={tapeColor} rotation="rotate-1" />
      </div>

      {/* Photo with fallback */}
      <div className="mt-1 overflow-hidden rounded-xs bg-[#FAF6F0]">
        <ImageWithFallback
          src={image}
          alt={caption}
          aspectRatio={aspectRatio}
          className="group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Polaroid Handwritten Caption */}
      <div className="mt-3.5 px-1 text-center">
        {date && (
          <span className="block text-[11px] uppercase tracking-wider text-[#7E7275] font-sans font-medium mb-0.5">
            {date}
          </span>
        )}
        <p className="font-handwritten text-lg sm:text-xl text-[#2D2426] leading-tight group-hover:text-[#6C2231] transition-colors">
          {caption}
        </p>
      </div>
    </div>
  );
};
