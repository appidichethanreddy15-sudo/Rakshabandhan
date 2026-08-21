import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, ArrowRight, Heart } from 'lucide-react';
import { WashiTape } from './WashiTape';
import { ImageWithFallback } from './ImageWithFallback';

interface NicknameData {
  id: number;
  name: string;
  emoji: string;
  subtitle: string;
  badge: string;
  bgGradient: string;
  borderColor: string;
  textColor: string;
  glowEffect: string;
  accentIcon: string;
}

const nicknamesSequence: NicknameData[] = [
  {
    id: 1,
    name: "Maaa",
    emoji: "❤️",
    subtitle: "My safe place and the voice of pure comfort.",
    badge: "Warmth & Care",
    bgGradient: "bg-gradient-to-br from-[#FFF9F6] via-[#FFFDF9] to-[#FDF2F4]",
    borderColor: "border-[#C87D88]/40",
    textColor: "text-[#6C2231]",
    glowEffect: "shadow-[0_8px_30px_rgba(212,175,55,0.25)] ring-1 ring-[#D4AF37]/30",
    accentIcon: "✨"
  },
  {
    id: 2,
    name: "Ill One",
    emoji: "😂",
    subtitle: "For all the silly laughs, crazy drama, and inside jokes.",
    badge: "Our Silly Side",
    bgGradient: "bg-gradient-to-br from-[#FFFDF9] via-[#FAF6F0] to-[#FDF4F6]",
    borderColor: "border-[#D4AF37]/45",
    textColor: "text-[#6C2231]",
    glowEffect: "shadow-[0_8px_30px_rgba(200,125,136,0.2)] ring-1 ring-[#C87D88]/30",
    accentIcon: "🌸"
  },
  {
    id: 3,
    name: "Theodore",
    emoji: "✨",
    subtitle: "A special name for our truly unbreakable sibling bond.",
    badge: "Special Bond",
    bgGradient: "bg-gradient-to-br from-[#F8F1F7] via-[#FFFDF9] to-[#F7E6E8]",
    borderColor: "border-[#9B5DE5]/35",
    textColor: "text-[#5A235D]",
    glowEffect: "shadow-[0_8px_30px_rgba(155,93,229,0.25)] ring-1 ring-[#9B5DE5]/30",
    accentIcon: "⭐"
  },
  {
    id: 4,
    name: "Madam",
    emoji: "👑",
    subtitle: "Whenever you take charge and give your little brother orders!",
    badge: "When You Command",
    bgGradient: "bg-gradient-to-br from-[#FAF5EC] via-[#FFFDF9] to-[#F5ECE0]",
    borderColor: "border-[#A75360]/40",
    textColor: "text-[#6C2231]",
    glowEffect: "shadow-[0_8px_30px_rgba(212,175,55,0.25)] ring-1 ring-[#D4AF37]/40",
    accentIcon: "👑"
  },
  {
    id: 5,
    name: "Moon",
    emoji: "🌙",
    subtitle: "A quiet, gentle presence that brightens up the darkest nights.",
    badge: "Quiet Comfort",
    bgGradient: "bg-gradient-to-br from-[#ECE8F5] via-[#F4F0FB] to-[#FFFDF9]",
    borderColor: "border-[#8D72B8]/45",
    textColor: "text-[#4A3B69]",
    glowEffect: "shadow-[0_8px_32px_rgba(141,114,184,0.3)] ring-1 ring-[#8D72B8]/40",
    accentIcon: "✨"
  },
  {
    id: 6,
    name: "Light of My Life",
    emoji: "✨",
    subtitle: "Guiding me with advice, listening, and standing by me always.",
    badge: "Through Dark Days",
    bgGradient: "bg-gradient-to-br from-[#FDF6E2] via-[#FFFDF9] to-[#FAF1D6]",
    borderColor: "border-[#D4AF37]/60",
    textColor: "text-[#6C2231]",
    glowEffect: "shadow-[0_10px_35px_rgba(212,175,55,0.4)] ring-2 ring-[#D4AF37]/50",
    accentIcon: "💛"
  },
  {
    id: 7,
    name: "My Second Mother",
    emoji: "❤️",
    subtitle: "Always scolding, caring, feeding, and looking out for me like a mother.",
    badge: "Selfless Care",
    bgGradient: "bg-gradient-to-br from-[#FDF0F3] via-[#FFFDF9] to-[#FCE6EB]",
    borderColor: "border-[#C87D88]/50",
    textColor: "text-[#6C2231]",
    glowEffect: "shadow-[0_10px_35px_rgba(200,125,136,0.35)] ring-1 ring-[#C87D88]/40",
    accentIcon: "🌸"
  },
  {
    id: 8,
    name: "Bangaram",
    emoji: "❤️",
    subtitle: "My dearest non-blood sister chosen with the heart. Forever my Bangarammmm.",
    badge: "Forever My Sister",
    bgGradient: "bg-gradient-to-br from-[#FAF2DE] via-[#FFFDF9] to-[#F7E6E8]",
    borderColor: "border-[#D4AF37]",
    textColor: "text-[#6C2231]",
    glowEffect: "shadow-[0_12px_45px_rgba(212,175,55,0.6)] ring-2 ring-[#D4AF37]",
    accentIcon: "💖"
  }
];

interface NicknamesSectionProps {
  image: string;
  onNext: () => void;
}

export const NicknamesSection: React.FC<NicknamesSectionProps> = ({ image, onNext }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animStage, setAnimStage] = useState<'idle' | 'out' | 'in'>('idle');
  const [isAnimating, setIsAnimating] = useState(false);
  const [revealedNames, setRevealedNames] = useState<number[]>([0]);

  const currentNickname = nicknamesSequence[currentIndex];
  const isLast = currentIndex === nicknamesSequence.length - 1;

  const handleRevealNext = () => {
    if (isAnimating || isLast) return;

    setIsAnimating(true);
    setAnimStage('out');

    // 0.65s: Swap to next card and begin 3D entrance
    setTimeout(() => {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setRevealedNames((prev) => Array.from(new Set([...prev, nextIndex])));
      setAnimStage('in');

      // If revealing the final "Bangaram ❤️", trigger celebratory particle burst
      if (nextIndex === nicknamesSequence.length - 1) {
        try {
          confetti({
            particleCount: 65,
            spread: 80,
            origin: { y: 0.65 },
            colors: ['#D4AF37', '#9B5DE5', '#C87D88', '#FBF4DE', '#F472B6']
          });
        } catch {
          // ignore
        }
      }
    }, 650);

    // 1.4s: Settle and re-enable button
    setTimeout(() => {
      setAnimStage('idle');
      setIsAnimating(false);
    }, 1400);
  };

  return (
    <div className="w-full flex flex-col items-center text-center select-none">

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

      {/* 4. 3D Floating Interactive Nickname Card Stage */}
      <div className="w-full max-w-lg my-6 flex flex-col items-center relative perspective-1200">
        
        {/* Floating 3D Particles during transformation */}
        {isAnimating && (
          <div className="absolute inset-0 pointer-events-none z-30 flex items-center justify-center">
            <div className="absolute text-xl animate-particle-orbit [animation-delay:0ms]">✨</div>
            <div className="absolute text-lg animate-particle-orbit [animation-delay:200ms] text-[#9B5DE5]">💜</div>
            <div className="absolute text-xl animate-particle-orbit [animation-delay:400ms] text-[#D4AF37]">🌸</div>
            <div className="absolute text-base animate-particle-orbit [animation-delay:600ms]">❤️</div>
            <div className="absolute text-lg animate-particle-orbit [animation-delay:800ms] text-[#D4AF37]">⭐</div>
          </div>
        )}

        {/* 3D Transformable Nickname Card */}
        <div
          className={`w-full p-6 sm:p-8 rounded-3xl ${currentNickname.bgGradient} border-2 ${currentNickname.borderColor} ${currentNickname.glowEffect} transform-style-3d transition-all duration-300 relative overflow-hidden ${
            animStage === 'out'
              ? 'nickname-card-out'
              : animStage === 'in'
              ? 'nickname-card-in'
              : 'hover:scale-102 hover:-translate-y-1'
          }`}
        >
          {/* Subtle Ambient Card Top Shimmer */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-full blur-xl pointer-events-none" />

          {/* Card Header: Category & Counter */}
          <div className="flex items-center justify-between mb-4 border-b border-[#C87D88]/15 pb-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-[#C87D88]/20 shadow-2xs">
              <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#6C2231]">
                {currentNickname.badge}
              </span>
            </div>

            <span className="text-xs font-sans font-bold text-[#7E7275] tracking-widest uppercase">
              {currentIndex + 1} of {nicknamesSequence.length}
            </span>
          </div>

          {/* Nickname Title (Visual Focus) */}
          <div className="my-4 py-2 flex flex-col items-center justify-center">
            <div className="flex items-center justify-center gap-3">
              <h3 className={`font-handwritten text-4xl sm:text-6xl font-bold ${currentNickname.textColor} tracking-wide filter drop-shadow-xs`}>
                {currentNickname.name}
              </h3>
              <span className="text-3xl sm:text-4xl animate-bounce [animation-duration:2s]">
                {currentNickname.emoji}
              </span>
            </div>

            {/* Subtitle / Meaning Description */}
            <p className="font-serif-heading italic text-lg sm:text-xl text-[#524749] mt-3 max-w-sm mx-auto leading-snug">
              “{currentNickname.subtitle}”
            </p>
          </div>

          {/* Subtle Bottom Accent */}
          <div className="mt-4 pt-3 border-t border-[#C87D88]/15 flex items-center justify-center gap-2 text-xs text-[#7E7275]">
            <span>{currentNickname.accentIcon}</span>
            <span className="font-sans italic">A name only I get to call you</span>
            <span>{currentNickname.accentIcon}</span>
          </div>
        </div>

        {/* Action Button: Reveal Another Name vs Continue */}
        <div className="mt-6 flex flex-col items-center gap-3 w-full">
          {!isLast ? (
            <button
              onClick={handleRevealNext}
              disabled={isAnimating}
              className="inline-flex items-center justify-center gap-2.5 px-7 sm:px-9 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#6C2231] to-[#842D3D] text-[#FAF6F0] font-sans font-semibold text-sm sm:text-base shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border border-[#D4AF37]/40 disabled:opacity-60 disabled:pointer-events-none"
            >
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>Reveal Another Name → ({currentIndex + 1}/{nicknamesSequence.length})</span>
            </button>
          ) : (
            /* Finale Card & Continue Button */
            <div className="w-full animate-fade-in [animation-duration:600ms] space-y-5">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#FAF2DE]/80 via-[#FFFDF9] to-[#F7E6E8]/70 border border-[#D4AF37]/50 shadow-sm">
                <Heart className="w-6 h-6 text-[#D4AF37] fill-[#D4AF37] mx-auto mb-2 animate-pulse" />
                <p className="font-serif-heading text-xl sm:text-2xl text-[#6C2231] font-semibold leading-relaxed">
                  “Whatever I call you... you're still my dearest Akkaaa who became true family to me.”
                </p>
                <p className="font-handwritten text-3xl sm:text-4xl text-[#6C2231] font-bold mt-2">
                  Forever My Bangarammmm ❤️
                </p>
              </div>

              <button
                onClick={onNext}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#6C2231] to-[#842D3D] text-[#FAF6F0] font-sans font-semibold text-base shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer group border border-[#D4AF37]/40"
              >
                <span>Continue Our Story →</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}
        </div>

        {/* Small Scrapbook History Chips */}
        {revealedNames.length > 1 && (
          <div className="mt-8 pt-4 border-t border-[#C87D88]/20 w-full flex flex-wrap items-center justify-center gap-2">
            <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#7E7275] mr-1 block w-full sm:w-auto">
              Discovered:
            </span>
            {revealedNames.map((idx) => {
              const item = nicknamesSequence[idx];
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    if (!isAnimating && idx !== currentIndex) {
                      setIsAnimating(true);
                      setAnimStage('out');
                      setTimeout(() => {
                        setCurrentIndex(idx);
                        setAnimStage('in');
                      }, 650);
                      setTimeout(() => {
                        setAnimStage('idle');
                        setIsAnimating(false);
                      }, 1400);
                    }
                  }}
                  className={`px-3 py-1 rounded-full text-xs font-handwritten font-bold border transition-all cursor-pointer ${
                    idx === currentIndex
                      ? 'bg-[#6C2231] text-[#FAF6F0] border-[#D4AF37] scale-105 shadow-xs'
                      : 'bg-white/75 text-[#6C2231] border-[#C87D88]/30 hover:bg-[#F7E6E8]'
                  }`}
                >
                  {item.name} {item.emoji}
                </button>
              );
            })}
          </div>
        )}

      </div>

    </div>
  );
};
