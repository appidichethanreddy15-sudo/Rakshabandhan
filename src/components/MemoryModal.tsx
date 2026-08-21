import React, { useEffect } from 'react';
import { X, Calendar, Heart } from 'lucide-react';
import type { MemoryItem } from '../data/memories';
import { ImageWithFallback } from './ImageWithFallback';
import { WashiTape } from './WashiTape';

interface MemoryModalProps {
  memory: MemoryItem | null;
  onClose: () => void;
}

export const MemoryModal: React.FC<MemoryModalProps> = ({ memory, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (memory) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [memory, onClose]);

  if (!memory) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#2D2426]/60 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto paper-parchment rounded-2xl border border-[#C87D88]/40 shadow-2xl p-6 sm:p-8 md:p-10 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Washi Tape Accent */}
        <div className="absolute -top-3 left-12">
          <WashiTape color="gold" rotation="rotate-2" />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close memory modal"
          className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-[#F7E6E8] text-[#6C2231] transition-colors border border-[#C87D88]/20 shadow-xs focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Date & Tag */}
        <div className="flex flex-wrap items-center gap-3 mb-4 mt-2">
          <div className="scrapbook-stamp">
            <Calendar className="w-3 h-3 mr-1" />
            <span>{memory.date}</span>
          </div>
          {memory.tag && (
            <span className="text-xs font-medium uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FAF6F0] border border-[#C87D88]/20 text-[#6C2231]">
              {memory.tag}
            </span>
          )}
        </div>

        {/* Title */}
        <h2 className="font-serif-heading text-2xl sm:text-3xl font-semibold text-[#6C2231] leading-tight mb-4">
          {memory.title}
        </h2>

        {/* Main Photo Frame */}
        <div className="polaroid-frame rounded-sm mb-6 bg-white shadow-md">
          <ImageWithFallback
            src={memory.image}
            alt={memory.title}
            aspectRatio="video"
            className="rounded-xs max-h-[360px]"
          />
        </div>

        {/* Story in Natural Paragraphs */}
        <div className="prose prose-stone max-w-none text-[#2D2426] leading-relaxed text-base sm:text-lg mb-6 font-sans">
          <p className="whitespace-pre-line first-letter:text-3xl first-letter:font-serif-heading first-letter:text-[#6C2231] first-letter:font-bold first-letter:mr-1">
            {memory.story}
          </p>
        </div>

        {/* Additional Photos if available */}
        {memory.additionalImages && memory.additionalImages.length > 0 && (
          <div className="mt-8 pt-6 border-t border-[#C87D88]/20">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#7E7275] block mb-3">
              Additional Snapshots from this memory
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {memory.additionalImages.map((img: string, idx: number) => (
                <div key={idx} className="polaroid-frame rounded-xs bg-white shadow-xs">
                  <ImageWithFallback
                    src={img}
                    alt={`Additional memory ${idx + 1}`}
                    aspectRatio="square"
                    className="max-h-[220px]"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Closing note */}
        <div className="mt-8 pt-4 border-t border-dashed border-[#C87D88]/30 flex items-center justify-between">
          <span className="font-handwritten text-xl text-[#6C2231] flex items-center gap-1.5">
            <Heart className="w-4 h-4 fill-[#C87D88]/20 stroke-[#C87D88]" /> Always remembered, Bangarammmm
          </span>
          <button
            onClick={onClose}
            className="text-xs font-semibold uppercase tracking-wider text-[#7E7275] hover:text-[#6C2231] transition-colors"
          >
            Close Memory ✕
          </button>
        </div>
      </div>
    </div>
  );
};
