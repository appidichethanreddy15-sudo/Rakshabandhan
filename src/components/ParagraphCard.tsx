import React from 'react';
import { Heart, Sparkles, Quote } from 'lucide-react';
import { WashiTape } from './WashiTape';

interface ParagraphCardProps {
  number?: string;
  handwrittenNote?: string;
  children: React.ReactNode;
  tapeColor?: 'pink' | 'gold' | 'lavender' | 'cream';
  tapeRotation?: string;
  className?: string;
  hasBookmark?: boolean;
}

export const ParagraphCard: React.FC<ParagraphCardProps> = ({
  number,
  handwrittenNote,
  children,
  tapeColor = 'cream',
  tapeRotation = '-rotate-1',
  className = '',
  hasBookmark = false
}) => {
  return (
    <article
      className={`relative paper-parchment rounded-2xl p-6 sm:p-8 md:p-10 border border-[#C87D88]/30 shadow-sm hover:shadow-md transition-shadow ${className}`}
    >
      {/* Top Washi Tape */}
      <div className="absolute -top-3 left-10">
        <WashiTape color={tapeColor} rotation={tapeRotation} />
      </div>

      {/* Bookmark Ribbon */}
      {hasBookmark && (
        <div className="absolute top-0 right-8 w-5 h-12 bg-[#6C2231] shadow-xs flex items-end justify-center pb-1">
          <div className="w-0 h-0 border-x-[10px] border-x-transparent border-b-[8px] border-b-[#FAF6F0]" />
        </div>
      )}

      {/* Card Header with optional entry number */}
      <div className="flex items-center justify-between mb-4">
        {number && (
          <span className="scrapbook-stamp text-[10px] tracking-widest">
            {number}
          </span>
        )}
        <Quote className="w-5 h-5 text-[#C87D88]/30" />
      </div>

      {/* Paragraph Body */}
      <div className="text-[#2D2426] text-base sm:text-lg leading-relaxed font-sans space-y-4">
        {children}
      </div>

      {/* Handwritten Margin Note */}
      {handwrittenNote && (
        <div className="mt-6 pt-4 border-t border-dashed border-[#C87D88]/30 flex items-center justify-between">
          <p className="font-handwritten text-lg sm:text-xl text-[#6C2231] flex items-center gap-2">
            <Heart className="w-4 h-4 text-[#C87D88] fill-[#C87D88]/20 shrink-0" />
            <span>{handwrittenNote}</span>
          </p>
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
        </div>
      )}
    </article>
  );
};
