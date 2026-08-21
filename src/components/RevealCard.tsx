import React, { useState } from 'react';
import { Sparkles, RotateCw, Heart } from 'lucide-react';
import type { MeaningItem } from '../data/meaningData';
import { WashiTape } from './WashiTape';

interface RevealCardProps {
  item: MeaningItem;
  index?: number;
}

export const RevealCard: React.FC<RevealCardProps> = ({ item, index = 0 }) => {
  const [flipped, setFlipped] = useState(false);

  const tapeColors: ('pink' | 'gold' | 'lavender' | 'cream')[] = ['pink', 'gold', 'lavender', 'cream'];
  const currentTape = tapeColors[index % tapeColors.length];

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="perspective-1000 w-full max-w-2xl h-60 sm:h-52 cursor-pointer group select-none relative"
    >
      {/* Small Washi Tape at Top */}
      <div className="absolute -top-3 left-8 z-30">
        <WashiTape color={currentTape} rotation={index % 2 === 0 ? '-rotate-2' : 'rotate-2'} />
      </div>

      <div
        className={`relative w-full h-full duration-500 transform-style-3d transition-transform rounded-2xl shadow-sm hover:shadow-md ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front of Card */}
        <div
          className={`absolute inset-0 w-full h-full backface-hidden rounded-2xl p-5 sm:p-6 flex flex-col justify-between border border-[#C87D88]/30 bg-gradient-to-br ${item.bgGradient}`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl sm:text-3xl p-2 rounded-xl bg-white/80 shadow-xs border border-white/70">
                {item.icon}
              </span>
              <div>
                <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#6C2231] leading-tight">
                  {item.title}
                </h3>
                <span className="text-[11px] uppercase tracking-wider text-[#7E7275] font-semibold">
                  Role {index + 1} of 8
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-[#6C2231] bg-white/80 px-3 py-1.5 rounded-full border border-[#C87D88]/20 shadow-xs group-hover:bg-[#F7E6E8] transition-colors">
              <span>Tap to flip</span>
              <RotateCw className="w-3 h-3 text-[#C87D88] group-hover:rotate-180 transition-transform duration-500" />
            </div>
          </div>

          <div className="my-auto pl-1">
            <p className="font-handwritten text-xl sm:text-2xl text-[#2D2426]">
              “{item.shortSnippet}”
            </p>
          </div>

          <div className="pt-2 border-t border-[#C87D88]/20 flex items-center justify-between text-xs text-[#7E7275]">
            <span className="font-medium text-[#6C2231] flex items-center gap-1">
              <Heart className="w-3.5 h-3.5 fill-[#C87D88]/30 text-[#C87D88]" /> Read what this means to me
            </span>
            <span className="text-[10px] uppercase font-bold text-[#7E7275]">Click Card ➔</span>
          </div>
        </div>

        {/* Back of Card */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl p-5 sm:p-6 flex flex-col justify-between border border-[#D4AF37]/40 bg-[#FFFDF9] shadow-md"
        >
          <div className="flex items-center justify-between pb-2 border-b border-[#F7E6E8]">
            <div className="flex items-center gap-2">
              <span className="text-xl">{item.icon}</span>
              <h4 className="font-serif-heading font-bold text-lg text-[#6C2231]">
                {item.title}
              </h4>
            </div>
            <div className="flex items-center gap-1 text-xs text-[#D4AF37]">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="font-sans font-semibold text-[#6C2231]">From My Heart</span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#2D2426] leading-relaxed font-sans my-auto px-1">
            {item.description}
          </p>

          <div className="pt-2 border-t border-dashed border-[#C87D88]/20 flex items-center justify-between text-xs text-[#7E7275]">
            <span className="font-handwritten text-lg text-[#6C2231]">
              For Bangarammmm ❤️
            </span>
            <span className="text-[10px] uppercase font-bold text-[#7E7275] flex items-center gap-1">
              <RotateCw className="w-3 h-3 text-[#7E7275]" /> Tap to flip back
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
