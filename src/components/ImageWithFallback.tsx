import React, { useState } from 'react';
import { Image as ImageIcon, Heart } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackText?: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'auto';
  objectFit?: 'cover' | 'contain' | 'fill';
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  fallbackText = 'Our Memory Photograph',
  aspectRatio = 'auto',
  objectFit = 'cover'
}) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const aspectClass = {
    square: 'aspect-square',
    video: 'aspect-[16/9]',
    portrait: 'aspect-[3/4]',
    auto: ''
  }[aspectRatio];

  const fitClass = {
    cover: 'object-cover',
    contain: 'object-contain',
    fill: 'object-fill'
  }[objectFit];

  if (error) {
    return (
      <div
        className={`w-full ${aspectClass} min-h-[200px] flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#FAF6F0] via-[#F7E6E8]/40 to-[#FBF4DE]/50 border border-dashed border-[#C87D88]/30 rounded-md ${className}`}
      >
        <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center mb-3 shadow-sm text-[#C87D88]">
          <Heart className="w-6 h-6 fill-[#C87D88]/20 stroke-[#C87D88]" />
        </div>
        <p className="font-serif-heading text-lg font-medium text-[#6C2231] tracking-wide">
          {alt || fallbackText}
        </p>
        <span className="text-xs text-[#7E7275] font-handwritten text-base mt-1">
          A treasured photograph with Bangarammmm
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${aspectClass} ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-[#FAF6F0] animate-pulse flex items-center justify-center text-[#C87D88]/40 min-h-[220px]">
          <ImageIcon className="w-8 h-8 opacity-40 animate-bounce" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setError(true)}
        onLoad={() => setLoaded(true)}
        className={`w-full ${aspectRatio === 'auto' ? 'h-auto block' : 'h-full'} ${fitClass} transition-all duration-500 ${
          loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        }`}
      />
    </div>
  );
};
