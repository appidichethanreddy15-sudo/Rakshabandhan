import React, { useState } from 'react';
import { Sparkles, ArrowRight, Plus } from 'lucide-react';
import { WashiTape } from './WashiTape';
import { ImageWithFallback } from './ImageWithFallback';

interface NicknameItem {
  id: number;
  name: string;
  emoji: string;
  badge?: string;
  bg: string;
  border: string;
  text: string;
  rotation: string;
}

const nicknamesList: NicknameItem[] = [
  { id: 1, name: "Maaa", emoji: "❤️", badge: "Pure Love", bg: "bg-[#FDF2F4]", border: "border-[#C87D88]/40", text: "text-[#6C2231]", rotation: "-rotate-1" },
  { id: 2, name: "Ill One", emoji: "😂", badge: "Our Silly Side", bg: "bg-[#FFFDF9]", border: "border-[#D4AF37]/50", text: "text-[#6C2231]", rotation: "rotate-1.5" },
  { id: 3, name: "Theodore", emoji: "✨", badge: "Unbreakable Sibling Bond", bg: "bg-[#F7E6E8]", border: "border-[#C87D88]/40", text: "text-[#6C2231]", rotation: "-rotate-2" },
  { id: 4, name: "Gaajubomma", emoji: "🥺💕", badge: "My Precious Little Sister", bg: "bg-[#FFF5F7]", border: "border-[#FFB4C2]", text: "text-[#6C2231]", rotation: "rotate-1" },
  { id: 5, name: "Madam", emoji: "👑", badge: "When You Command", bg: "bg-[#FAF6F0]", border: "border-[#A75360]/30", text: "text-[#524749]", rotation: "-rotate-1" },
  { id: 6, name: "Moon", emoji: "🌙", badge: "Quiet Comfort", bg: "bg-[#ECE8F5]", border: "border-[#8D72B8]/40", text: "text-[#4A3B69]", rotation: "-rotate-1.5" },
  { id: 7, name: "Light of My Life", emoji: "✨", badge: "Through Dark Days", bg: "bg-[#FDF6E2]", border: "border-[#D4AF37]/60", text: "text-[#6C2231]", rotation: "rotate-2" },
  { id: 8, name: "Akkaaa", emoji: "🥺❤️", badge: "My Heartfelt Guide & Sister", bg: "bg-gradient-to-r from-[#FCEEF2] to-[#FAF3E0]", border: "border-[#D4AF37]/80", text: "text-[#6C2231]", rotation: "rotate-1" },
  { id: 9, name: "My Second Mother", emoji: "❤️", badge: "Your Caring Nature", bg: "bg-[#FCEEF2]", border: "border-[#C87D88]/50", text: "text-[#6C2231]", rotation: "-rotate-1" },
  { id: 10, name: "Bangaram", emoji: "❤️", badge: "Forever My Sister", bg: "bg-gradient-to-r from-[#F7E6E8] to-[#FAF3E0]", border: "border-[#D4AF37]", text: "text-[#6C2231]", rotation: "rotate-0" }
];

interface NicknamesSectionProps {
  image: string;
  buttonText?: string;
  onNext: () => void;
}

export const NicknamesSection: React.FC<NicknamesSectionProps> = ({ image, buttonText = "Continue To The Next Chapter →", onNext }) => {
  // Start by showing the first 1 nickname; user taps to reveal more
  const [revealedCount, setRevealedCount] = useState(1);

  const isAllRevealed = revealedCount >= nicknamesList.length;

  const handleRevealNext = () => {
    if (!isAllRevealed) {
      setRevealedCount((prev) => Math.min(prev + 1, nicknamesList.length));
    }
  };

  return (
    <div className="w-full flex flex-col items-center text-center">
      
      {/* 1. Photograph in Polaroid Scrapbook Frame */}
      <div className="relative inline-block max-w-sm sm:max-w-md mx-auto my-2">
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
          <WashiTape color="pink" rotation="-rotate-2" />
        </div>

        <div className="polaroid-frame rounded-sm bg-white shadow-xl hover:rotate-0 transition-transform duration-500 overflow-hidden">
          <ImageWithFallback
            src={image}
            alt="You Have So Many Names"
            aspectRatio="auto"
            objectFit="contain"
            className="rounded-xs max-h-[460px] sm:max-h-[500px] w-auto h-auto mx-auto"
          />
        </div>
      </div>

      {/* 2. Emotional Title */}
      <h2 className="font-serif-heading text-2xl sm:text-4xl font-bold text-[#6C2231] tracking-tight leading-snug mt-4 mb-3 max-w-2xl px-2">
        You Have So Many Names... ❤️
      </h2>

      {/* 3. Personal First-Person Paragraph */}
      <div className="paper-parchment rounded-2xl p-6 sm:p-8 border border-[#C87D88]/25 shadow-xs max-w-2xl w-full text-left my-3">
        <p className="font-sans text-base sm:text-lg text-[#2D2426] leading-relaxed whitespace-pre-line first-letter:font-serif-heading first-letter:text-3xl first-letter:font-bold first-letter:text-[#6C2231] first-letter:mr-1">
          Over these years, you somehow collected so many names from me. Some came from random moments, some from our fights, some from my affection, and some... I don't even remember how they started. 😂 But every name has a little story behind it, and every time I call you by one of them, it feels like I'm talking to a different little part of the person you became in my life.
        </p>
      </div>

      {/* 4. Interactive Nicknames Scrapbook Stack */}
      <div
        onClick={handleRevealNext}
        className="w-full max-w-2xl my-6 flex flex-col items-center gap-3.5 select-none cursor-pointer"
      >
        <div className="flex flex-col items-center gap-3 w-full">
          {nicknamesList.slice(0, revealedCount).map((item) => (
            <div
              key={item.id}
              className={`w-full max-w-md p-4 sm:p-5 rounded-2xl ${item.bg} border-2 ${item.border} ${item.rotation} shadow-sm hover:shadow-md hover:scale-102 transition-all duration-300 animate-fade-in`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-handwritten text-2xl sm:text-3xl font-bold text-[#6C2231]">
                    {item.name}
                  </span>
                  <span className="text-xl">{item.emoji}</span>
                </div>
                {item.badge && (
                  <span className="text-[11px] font-sans font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/80 border border-[#C87D88]/20 text-[#7E7275]">
                    {item.badge}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Reveal Next Name Prompt / Button */}
        {!isAllRevealed && (
          <div className="mt-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleRevealNext();
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#F7E6E8] text-[#6C2231] hover:bg-[#6C2231] hover:text-[#FAF6F0] transition-all text-xs font-semibold uppercase tracking-widest shadow-xs border border-[#C87D88]/30 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Reveal another name → ({revealedCount}/{nicknamesList.length})</span>
            </button>
          </div>
        )}
      </div>

      {/* 5. Post-Reveal Emotional Ending */}
      {isAllRevealed && (
        <div className="animate-fade-in [animation-duration:600ms] max-w-xl mx-auto my-6 space-y-4">
          
          <p className="font-sans text-sm sm:text-base text-[#7E7275] italic">
            “Okay... I think that's enough names for one person. 😂❤️”
          </p>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#F7E6E8]/70 via-[#FFFDF9] to-[#FBF4DE]/60 border border-[#D4AF37]/40 shadow-xs">
            <Sparkles className="w-5 h-5 text-[#D4AF37] mx-auto mb-2" />
            <p className="font-serif-heading text-xl sm:text-2xl text-[#6C2231] font-semibold leading-relaxed">
              “Whatever I call you... you're still my dearest Akkaaa who became family to me.”
            </p>
            <p className="font-handwritten text-3xl sm:text-4xl text-[#6C2231] font-bold mt-2">
              Bangarammmm ❤️ (Akkaaa)
            </p>
          </div>
        </div>
      )}

      {/* 6. Continue Button */}
      <div className="mt-6 mb-4 w-full sm:w-auto">
        <button
          onClick={onNext}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#6C2231] to-[#842D3D] text-[#FAF6F0] font-sans font-semibold text-base shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer group border border-[#D4AF37]/30"
        >
          <span>{buttonText}</span>
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

    </div>
  );
};
