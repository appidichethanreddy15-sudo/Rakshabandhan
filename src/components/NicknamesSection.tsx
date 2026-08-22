import React, { useState, useRef } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
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
    bgGradient: "bg-[#FDF2F4]",
    borderColor: "border-[#C87D88]/40",
    textColor: "text-[#6C2231]",
    glowEffect: "shadow-sm",
    accentIcon: "✨"
  },
  {
    id: 2,
    name: "Ill One",
    emoji: "😂",
    subtitle: "For all the silly laughs, crazy drama, and inside jokes.",
    badge: "Our Silly Side",
    bgGradient: "bg-[#FFFDF9]",
    borderColor: "border-[#D4AF37]/50",
    textColor: "text-[#6C2231]",
    glowEffect: "shadow-sm",
    accentIcon: "🌸"
  },
  {
    id: 3,
    name: "Theodore",
    emoji: "✨",
    subtitle: "A special name for our truly unbreakable sibling bond.",
    badge: "Special Bond",
    bgGradient: "bg-[#F7E6E8]",
    borderColor: "border-[#9B5DE5]/35",
    textColor: "text-[#5A235D]",
    glowEffect: "shadow-sm",
    accentIcon: "⭐"
  },
  {
    id: 4,
    name: "Madam",
    emoji: "👑",
    subtitle: "Whenever you take charge and give your little brother orders!",
    badge: "When You Command",
    bgGradient: "bg-[#FAF6F0]",
    borderColor: "border-[#A75360]/35",
    textColor: "text-[#6C2231]",
    glowEffect: "shadow-sm",
    accentIcon: "👑"
  },
  {
    id: 5,
    name: "Moon",
    emoji: "🌙",
    subtitle: "A quiet, gentle presence that brightens up the darkest nights.",
    badge: "Quiet Comfort",
    bgGradient: "bg-[#ECE8F5]",
    borderColor: "border-[#8D72B8]/40",
    textColor: "text-[#4A3B69]",
    glowEffect: "shadow-sm",
    accentIcon: "✨"
  },
  {
    id: 6,
    name: "Light of My Life",
    emoji: "✨",
    subtitle: "Guiding me with advice, listening, and standing by me always.",
    badge: "Through Dark Days",
    bgGradient: "bg-[#FDF6E2]",
    borderColor: "border-[#D4AF37]/55",
    textColor: "text-[#6C2231]",
    glowEffect: "shadow-sm",
    accentIcon: "💛"
  },
  {
    id: 7,
    name: "My Second Mother",
    emoji: "❤️",
    subtitle: "Always scolding, caring, feeding, and looking out for me like a mother.",
    badge: "Selfless Care",
    bgGradient: "bg-[#FCEEF2]",
    borderColor: "border-[#C87D88]/45",
    textColor: "text-[#6C2231]",
    glowEffect: "shadow-sm",
    accentIcon: "🌸"
  },
  {
    id: 8,
    name: "Bangaram",
    emoji: "❤️",
    subtitle: "My dearest non-blood sister chosen with the heart. Forever my Bangarammmm.",
    badge: "Forever My Sister",
    bgGradient: "bg-gradient-to-r from-[#F7E6E8] to-[#FAF3E0]",
    borderColor: "border-[#D4AF37]",
    textColor: "text-[#6C2231]",
    glowEffect: "shadow-[0_4px_20px_rgba(212,175,55,0.4)] ring-2 ring-[#D4AF37]",
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
  const [revealedIndices, setRevealedIndices] = useState<number[]>([0]);
  const [mouseTilt, setMouseTilt] = useState({ rotateX: 0, rotateY: 0 });

  // 3D Page Turn on Continue
  const [isPageTurning, setIsPageTurning] = useState(false);
  const cardContainerRef = useRef<HTMLDivElement>(null);

  const currentNickname = nicknamesSequence[currentIndex];
  const isLast = currentIndex === nicknamesSequence.length - 1;

  // Ultra-Fast 3D Reveal Handler (Total: ~450ms)
  const handleRevealNext = () => {
    if (isAnimating || isLast) return;

    setIsAnimating(true);
    setAnimStage('out');

    // Phase 1 (160ms Exit): Rotate and recede
    setTimeout(() => {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      setRevealedIndices((prev) => Array.from(new Set([...prev, nextIdx])));
      setAnimStage('in');
    }, 160);

    // Phase 2 (290ms Entrance): Rotate into place & settle
    setTimeout(() => {
      setAnimStage('idle');
      setIsAnimating(false);
    }, 450);
  };

  // 3D Desktop Mouse Parallax Effect (±5 degrees tilt)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isAnimating) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const xRatio = (e.clientX - rect.left) / rect.width - 0.5;
    const yRatio = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseTilt({
      rotateY: xRatio * 10,  // -5deg to +5deg
      rotateX: -yRatio * 10  // -5deg to +5deg
    });
  };

  const handleMouseLeave = () => {
    setMouseTilt({ rotateX: 0, rotateY: 0 });
  };

  // Final Continue Action with 3D Page Turn
  const handleFinalContinue = () => {
    setIsPageTurning(true);
    setTimeout(() => {
      onNext();
    }, 400);
  };

  return (
    <div
      className={`w-full flex flex-col items-center text-center select-none transition-all duration-300 ${
        isPageTurning ? 'memory-turn-forward-out pointer-events-none' : ''
      }`}
    >

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

      {/* 4. Physical 3D Floating Nickname Card Stage with Depth Layers & Mouse Parallax */}
      <div
        ref={cardContainerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full max-w-md my-4 flex flex-col items-center relative perspective-1200"
      >
        
        {/* Subtle 3D Sparkle Particles (Emits 4–5 subtle sparkles during reveal) */}
        {isAnimating && (
          <div className="absolute inset-0 pointer-events-none z-30 flex items-center justify-center">
            <span className="absolute -top-3 left-10 text-sm animate-mini-sparkle [animation-delay:0ms]">✨</span>
            <span className="absolute -top-2 right-12 text-xs text-[#D4AF37] animate-mini-sparkle [animation-delay:80ms]">⭐</span>
            <span className="absolute -bottom-2 left-16 text-sm text-[#C87D88] animate-mini-sparkle [animation-delay:120ms]">🌸</span>
            <span className="absolute -bottom-3 right-10 text-xs text-[#6C2231] animate-mini-sparkle [animation-delay:160ms]">❤️</span>
          </div>
        )}

        {/* 3D Multi-Layer Card System */}
        <div
          style={{
            transform: !isAnimating
              ? `rotateX(${mouseTilt.rotateX}deg) rotateY(${mouseTilt.rotateY}deg)`
              : undefined,
            transition: !isAnimating ? 'transform 0.15s ease-out' : undefined
          }}
          className="relative w-full transform-style-3d cursor-default py-2"
        >
          {/* Layer 1: Secondary Paper Depth Card Behind */}
          <div className="absolute inset-0 translate-y-1 -translate-z-4 -rotate-1 rounded-2xl bg-[#F5ECE0] border border-[#D4AF37]/30 opacity-70 pointer-events-none shadow-sm" />

          {/* Layer 2: Soft Ambient Shadow */}
          <div className="absolute inset-0 translate-y-2 blur-md bg-[#2D2426]/10 rounded-2xl pointer-events-none" />

          {/* Layer 3: Main Front Floating 3D Card */}
          <div
            className={`w-full p-4 sm:p-5 rounded-2xl ${currentNickname.bgGradient} border-2 ${currentNickname.borderColor} ${currentNickname.glowEffect} transform-style-3d translate-z-8 shadow-md relative overflow-hidden ${
              animStage === 'out'
                ? 'animate-fast-3d-out'
                : animStage === 'in'
                ? 'animate-fast-3d-in'
                : ''
            }`}
          >
            {/* Subtle Light Beam */}
            {isAnimating && <div className="card-light-sweep" />}

            {/* Card Header: Badge + Counter */}
            <div className="flex items-center justify-between mb-2 translate-z-4">
              <span className="text-[11px] font-sans font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/85 border border-[#C87D88]/20 text-[#7E7275] shadow-2xs">
                {currentNickname.badge}
              </span>

              <span className="text-[11px] font-sans font-bold text-[#7E7275]/80 tracking-widest uppercase">
                {currentIndex + 1} of {nicknamesSequence.length}
              </span>
            </div>

            {/* Nickname Title (Main Focus - Large & Readable) */}
            <div className="flex items-center justify-center gap-2 py-1 translate-z-6">
              <span className={`font-handwritten text-3xl sm:text-4xl font-bold ${currentNickname.textColor} tracking-wide drop-shadow-2xs`}>
                {currentNickname.name}
              </span>
              <span className="text-2xl animate-bounce [animation-duration:2s]">
                {currentNickname.emoji}
              </span>
            </div>

            {/* Subtitle / Meaning Description */}
            <p className="font-serif-heading italic text-xs sm:text-sm text-[#524749] mt-1 text-center translate-z-3">
              “{currentNickname.subtitle}”
            </p>
          </div>
        </div>

        {/* 5. Reveal Button / Final Action */}
        {!isLast ? (
          <div className="mt-4">
            <button
              onClick={handleRevealNext}
              disabled={isAnimating}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#6C2231] to-[#842D3D] text-[#FAF6F0] hover:shadow-lg hover:scale-104 active:scale-96 transition-all text-xs font-semibold uppercase tracking-widest shadow-md border border-[#D4AF37]/35 cursor-pointer disabled:opacity-75 disabled:pointer-events-none group"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] group-hover:rotate-45 transition-transform" />
              <span>Reveal Another Name → ({currentIndex + 1}/{nicknamesSequence.length})</span>
            </button>
          </div>
        ) : (
          /* Sequence Complete: Emotional Note + Final Continue Button */
          <div className="w-full animate-fade-in [animation-duration:400ms] mt-4 space-y-4">
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#F7E6E8]/85 via-[#FFFDF9] to-[#FBF4DE]/80 border-2 border-[#D4AF37]/60 shadow-md">
              <p className="font-serif-heading text-lg sm:text-xl text-[#6C2231] font-semibold leading-relaxed">
                “Whatever I call you... you're still the same person who became family to me.”
              </p>
              <p className="font-handwritten text-3xl sm:text-4xl text-[#6C2231] font-bold mt-1.5">
                Bangarammmm ❤️
              </p>
            </div>

            {/* Final Continue Button */}
            <div className="pt-2">
              <button
                onClick={handleFinalContinue}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 sm:px-11 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#6C2231] to-[#842D3D] text-[#FAF6F0] font-sans font-semibold text-base shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer group border border-[#D4AF37]/40"
              >
                <span>Continue Our Story</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        )}

        {/* Small Discovered Badges */}
        {revealedIndices.length > 1 && (
          <div className="mt-6 pt-3 border-t border-[#C87D88]/15 w-full flex flex-wrap items-center justify-center gap-1.5">
            {revealedIndices.map((idx) => {
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
                      }, 160);
                      setTimeout(() => {
                        setAnimStage('idle');
                        setIsAnimating(false);
                      }, 450);
                    }
                  }}
                  className={`px-2.5 py-0.5 rounded-full text-xs font-handwritten font-bold border transition-all cursor-pointer ${
                    idx === currentIndex
                      ? 'bg-[#6C2231] text-[#FAF6F0] border-[#D4AF37] scale-105 shadow-2xs'
                      : 'bg-white/85 text-[#6C2231] border-[#C87D88]/25 hover:bg-[#F7E6E8]'
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
