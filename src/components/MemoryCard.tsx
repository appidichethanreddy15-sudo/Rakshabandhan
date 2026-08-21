import React from 'react';
import { ArrowRight, Calendar, Bookmark, Heart } from 'lucide-react';
import type { MemoryItem } from '../data/memories';
import { ImageWithFallback } from './ImageWithFallback';
import { WashiTape } from './WashiTape';

interface MemoryCardProps {
  memory: MemoryItem;
  onOpen: (memory: MemoryItem) => void;
}

export const MemoryCard: React.FC<MemoryCardProps> = ({ memory, onOpen }) => {
  const rotationClass = memory.rotation || 'rotate-0';

  if (memory.cardType === 'polaroid') {
    return (
      <div
        onClick={() => onOpen(memory)}
        className={`group relative polaroid-frame rounded-sm cursor-pointer transform ${rotationClass} transition-all duration-300 flex flex-col justify-between h-full bg-white hover:z-20`}
      >
        <div className="absolute -top-3 right-6">
          <WashiTape color="pink" rotation="-rotate-3" />
        </div>

        <div>
          <div className="overflow-hidden rounded-xs bg-[#FAF6F0] mb-3">
            <ImageWithFallback
              src={memory.image}
              alt={memory.title}
              aspectRatio="square"
              className="group-hover:scale-105 transition-transform duration-500 max-h-[220px]"
            />
          </div>

          <div className="px-1">
            <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-[#7E7275] mb-1 font-medium">
              <span>{memory.date}</span>
              {memory.tag && <span className="text-[#C87D88]">#{memory.tag}</span>}
            </div>

            <h3 className="font-serif-heading text-lg font-semibold text-[#6C2231] line-clamp-1 mb-1.5 group-hover:text-[#842D3D] transition-colors">
              {memory.title}
            </h3>

            <p className="text-xs text-[#524749] line-clamp-2 leading-relaxed font-sans">
              {memory.teaser}
            </p>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-[#F7E6E8] flex items-center justify-between">
          <span className="text-xs font-semibold text-[#6C2231] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
            Open Memory <ArrowRight className="w-3.5 h-3.5" />
          </span>
          <Heart className="w-3.5 h-3.5 text-[#C87D88]/40 group-hover:text-[#C87D88] transition-colors" />
        </div>
      </div>
    );
  }

  if (memory.cardType === 'large') {
    return (
      <div
        onClick={() => onOpen(memory)}
        className={`group relative paper-parchment rounded-2xl p-5 sm:p-6 cursor-pointer transform ${rotationClass} transition-all duration-300 border border-[#C87D88]/30 hover:shadow-lg hover:z-20 flex flex-col sm:flex-row gap-5 items-center`}
      >
        <div className="absolute -top-3 left-8">
          <WashiTape color="gold" rotation="rotate-1" />
        </div>

        <div className="w-full sm:w-1/2 overflow-hidden rounded-xl polaroid-frame bg-white shadow-xs">
          <ImageWithFallback
            src={memory.image}
            alt={memory.title}
            aspectRatio="video"
            className="group-hover:scale-105 transition-transform duration-500 max-h-[190px]"
          />
        </div>

        <div className="w-full sm:w-1/2 flex flex-col justify-between text-left">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#7E7275] mb-1.5">
              <Calendar className="w-3 h-3 text-[#C87D88]" />
              <span className="font-medium">{memory.date}</span>
              {memory.tag && (
                <span className="px-2 py-0.5 rounded-full bg-[#FAF6F0] text-[10px] uppercase font-bold text-[#6C2231] border border-[#C87D88]/20">
                  {memory.tag}
                </span>
              )}
            </div>

            <h3 className="font-serif-heading text-xl font-semibold text-[#6C2231] leading-snug mb-2 group-hover:text-[#842D3D]">
              {memory.title}
            </h3>

            <p className="text-xs sm:text-sm text-[#524749] line-clamp-3 leading-relaxed mb-4">
              {memory.teaser}
            </p>
          </div>

          <button className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6C2231] group-hover:text-[#842D3D]">
            <span>Open Memory</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    );
  }

  // Scrapbook paper / Overlapping style default
  return (
    <div
      onClick={() => onOpen(memory)}
      className={`group relative paper-texture rounded-xl p-5 cursor-pointer transform ${rotationClass} transition-all duration-300 border border-[#C87D88]/25 hover:shadow-md hover:z-20 flex flex-col justify-between h-full bg-[#FFFDF9]`}
    >
      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
        <WashiTape color="lavender" rotation="-rotate-1" />
      </div>

      <div>
        <div className="flex items-center justify-between text-xs text-[#7E7275] mb-3 mt-1">
          <span className="scrapbook-stamp text-[10px]">
            {memory.date}
          </span>
          {memory.tag && (
            <span className="text-[11px] font-medium text-[#7E7275]">
              {memory.tag}
            </span>
          )}
        </div>

        <div className="overflow-hidden rounded-lg mb-3 shadow-xs border border-[#C87D88]/15 bg-white p-1.5">
          <ImageWithFallback
            src={memory.image}
            alt={memory.title}
            aspectRatio="video"
            className="rounded-sm group-hover:scale-105 transition-transform duration-500 max-h-[170px]"
          />
        </div>

        <h3 className="font-serif-heading text-lg font-semibold text-[#6C2231] leading-snug mb-1.5 group-hover:text-[#842D3D]">
          {memory.title}
        </h3>

        <p className="text-xs text-[#524749] line-clamp-3 leading-relaxed">
          {memory.teaser}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-dashed border-[#C87D88]/30 flex items-center justify-between">
        <span className="text-xs font-semibold text-[#6C2231] flex items-center gap-1">
          Open Memory <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </span>
        <Bookmark className="w-3.5 h-3.5 text-[#D4AF37]" />
      </div>
    </div>
  );
};
