import React, { useState } from 'react';
import { Lock, Unlock, Sparkles, Heart } from 'lucide-react';
import type { HiddenCard } from '../data/specialMoments';

interface HiddenSecretCardProps {
  card: HiddenCard;
}

export const HiddenSecretCard: React.FC<HiddenSecretCardProps> = ({ card }) => {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <div
      onClick={() => setUnlocked(!unlocked)}
      className={`relative paper-parchment rounded-2xl p-6 sm:p-7 border border-[#C87D88]/30 shadow-sm cursor-pointer transition-all duration-300 ${
        unlocked
          ? 'bg-gradient-to-br from-[#FFFDF9] via-[#FAF6F0] to-[#FDF2F4] shadow-md ring-1 ring-[#D4AF37]/50'
          : 'hover:shadow-md hover:-translate-y-1 bg-[#FFFDF9]'
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div
            className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
              unlocked ? 'bg-[#6C2231] text-[#FAF6F0]' : 'bg-[#F7E6E8] text-[#6C2231]'
            }`}
          >
            {unlocked ? <Unlock className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#7E7275]">
            {unlocked ? 'Secret Revealed' : 'Secret Memory Box'}
          </span>
        </div>

        <span className="text-xs font-handwritten text-lg text-[#C87D88]">
          {unlocked ? 'Tap to close' : 'Tap to open'}
        </span>
      </div>

      <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#6C2231] mb-2 leading-snug">
        {card.prompt}
      </h3>

      {unlocked ? (
        <div className="mt-3 pt-3 border-t border-dashed border-[#C87D88]/30 animate-fade-in">
          <p className="text-sm sm:text-base text-[#2D2426] leading-relaxed font-sans font-normal">
            {card.revealedText}
          </p>
          <div className="mt-3 flex items-center justify-end gap-1.5 text-xs text-[#6C2231] font-handwritten text-lg">
            <Heart className="w-3.5 h-3.5 fill-[#C87D88]/20 stroke-[#C87D88]" />
            <span>Forever your brother</span>
          </div>
        </div>
      ) : (
        <div className="mt-2 py-3 px-4 rounded-xl bg-[#FAF6F0]/80 border border-dashed border-[#C87D88]/30 flex items-center justify-between text-xs text-[#7E7275]">
          <span>This note is sealed just for you...</span>
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
        </div>
      )}
    </div>
  );
};
