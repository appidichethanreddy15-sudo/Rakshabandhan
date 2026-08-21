import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, ArrowRight, Heart, X } from 'lucide-react';
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
  const [variation, setVariation] = useState<0 | 1 | 2 | 3>(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showLightSweep, setShowLightSweep] = useState(false);
  const [revealedIndices, setRevealedIndices] = useState<number[]>([0]);

  // "Tie Rakhi Again" 3D Modal Experience
  const [showTieRakhiModal, setShowTieRakhiModal] = useState(false);
  const [rakhiStage, setRakhiStage] = useState<'enter' | 'closer' | 'settle'>('enter');

  // Final Page Turn Animation
  const [isPageTurning, setIsPageTurning] = useState(false);

  const currentNickname = nicknamesSequence[currentIndex];
  const isLast = currentIndex === nicknamesSequence.length - 1;

  // Handle Nickname 3D Reveal with 4 Unpredictable Variations
  const handleRevealNext = () => {
    if (isAnimating || isLast) return;

    setIsAnimating(true);
    const nextVar = ((variation + 1) % 4) as 0 | 1 | 2 | 3;
    setVariation(nextVar);
    setAnimStage('out');
    setShowLightSweep(true);

    // 0.55s: Swap to next card & start 3D entrance
    setTimeout(() => {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      setRevealedIndices((prev) => Array.from(new Set([...prev, nextIdx])));
      setAnimStage('in');

      // If revealing the final "Bangaram ❤️", trigger delicate celebratory particle burst
      if (nextIdx === nicknamesSequence.length - 1) {
        try {
          confetti({
            particleCount: 50,
            spread: 75,
            origin: { y: 0.65 },
            colors: ['#D4AF37', '#9B5DE5', '#C87D88', '#FBF4DE', '#F472B6']
          });
        } catch {
          // ignore
        }
      }
    }, 550);

    // 1.2s: Settle and re-enable button
    setTimeout(() => {
      setAnimStage('idle');
      setShowLightSweep(false);
      setIsAnimating(false);
    }, 1200);
  };

  // Trigger "Tie Rakhi Again" 3D Experience
  const handleTieRakhiAgain = () => {
    setShowTieRakhiModal(true);
    setRakhiStage('enter');

    // Unexpected 3D moment: moves closer for a moment and glows (0.8s)
    setTimeout(() => {
      setRakhiStage('closer');
      try {
        confetti({
          particleCount: 45,
          spread: 60,
          origin: { y: 0.5 },
          colors: ['#D4AF37', '#9B5DE5', '#C87D88', '#FAF6F0']
        });
      } catch {
        // ignore
      }
    }, 800);

    // Settle smoothly back (1.8s)
    setTimeout(() => {
      setRakhiStage('settle');
    }, 1800);
  };

  // Handle Final Continue Button with 3D Scrapbook Page Turn
  const handleFinalContinue = () => {
    setIsPageTurning(true);
    setTimeout(() => {
      onNext();
    }, 450);
  };

  // Select dynamic CSS class based on active variation
  const getAnimClass = () => {
    if (animStage === 'out') {
      if (variation === 0) return 'nickname-var-a-out';
      if (variation === 1) return 'nickname-var-b-out';
      if (variation === 2) return 'nickname-var-c-out';
      return 'nickname-var-d-out';
    }
    if (animStage === 'in') {
      if (variation === 0) return 'nickname-var-a-in';
      if (variation === 1) return 'nickname-var-b-in';
      if (variation === 2) return 'nickname-var-c-in';
      return 'nickname-var-d-in';
    }
    return 'hover:scale-101 hover:-translate-y-0.5';
  };

  return (
    <div
      className={`w-full flex flex-col items-center text-center select-none transition-all duration-400 ${
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

      {/* 4. Compact 3D Floating Nickname Card (Preserved Original Small Size) */}
      <div className="w-full max-w-md my-4 flex flex-col items-center relative perspective-1200">
        
        {/* Subtle Floating Particles during transition */}
        {isAnimating && (
          <div className="absolute inset-0 pointer-events-none z-30 flex items-center justify-center">
            <div className="absolute text-sm animate-particle-orbit [animation-delay:0ms]">✨</div>
            <div className="absolute text-xs animate-particle-orbit [animation-delay:200ms] text-[#9B5DE5]">💜</div>
            <div className="absolute text-sm animate-particle-orbit [animation-delay:400ms] text-[#D4AF37]">🌸</div>
            <div className="absolute text-xs animate-particle-orbit [animation-delay:600ms]">❤️</div>
          </div>
        )}

        {/* The Original Compact Card */}
        <div
          className={`w-full p-4 sm:p-5 rounded-2xl ${currentNickname.bgGradient} border-2 ${currentNickname.borderColor} ${currentNickname.glowEffect} transform-style-3d transition-all duration-300 relative overflow-hidden ${getAnimClass()}`}
        >
          {/* 3D Diagonal Light Sweep */}
          {showLightSweep && <div className="card-light-sweep" />}

          {/* Card Header: Badge + Counter */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-sans font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/80 border border-[#C87D88]/20 text-[#7E7275]">
              {currentNickname.badge}
            </span>

            <span className="text-[11px] font-sans font-bold text-[#7E7275]/80 tracking-widest uppercase">
              {currentIndex + 1} of {nicknamesSequence.length}
            </span>
          </div>

          {/* Nickname Title (Visual Focus) */}
          <div className="flex items-center justify-center gap-2 py-1">
            <span className={`font-handwritten text-2xl sm:text-3xl font-bold ${currentNickname.textColor}`}>
              {currentNickname.name}
            </span>
            <span className="text-xl">{currentNickname.emoji}</span>
          </div>

          {/* Subtitle snippet */}
          <p className="font-serif-heading italic text-xs sm:text-sm text-[#524749] mt-1 text-center">
            “{currentNickname.subtitle}”
          </p>
        </div>

        {/* Reveal Next Name Button */}
        {!isLast ? (
          <div className="mt-4">
            <button
              onClick={handleRevealNext}
              disabled={isAnimating}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#F7E6E8] text-[#6C2231] hover:bg-[#6C2231] hover:text-[#FAF6F0] transition-all text-xs font-semibold uppercase tracking-widest shadow-xs border border-[#C87D88]/30 cursor-pointer disabled:opacity-60 disabled:pointer-events-none active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Reveal another name → ({currentIndex + 1}/{nicknamesSequence.length})</span>
            </button>
          </div>
        ) : (
          /* Sequence Complete: Emotional Note + "Tie Rakhi Again" + Final Continue Button */
          <div className="w-full animate-fade-in [animation-duration:500ms] mt-4 space-y-4">
            <p className="font-sans text-xs sm:text-sm text-[#7E7275] italic">
              “Okay... I think that's enough names for one person. 😂❤️”
            </p>

            <div className="p-4 rounded-xl bg-gradient-to-br from-[#F7E6E8]/70 via-[#FFFDF9] to-[#FBF4DE]/60 border border-[#D4AF37]/40 shadow-xs">
              <p className="font-serif-heading text-lg sm:text-xl text-[#6C2231] font-semibold leading-relaxed">
                “Whatever I call you... you're still my dearest Akkaaa who became true family to me.”
              </p>
              <p className="font-handwritten text-2xl sm:text-3xl text-[#6C2231] font-bold mt-1">
                Bangarammmm ❤️ (Akkaaa)
              </p>
            </div>

            {/* Special Action: "Tie Rakhi Again" */}
            <div className="pt-1">
              <button
                onClick={handleTieRakhiAgain}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#FBF4DE] to-[#C87D88] text-[#6C2231] hover:shadow-md hover:scale-105 active:scale-95 transition-all text-xs font-bold uppercase tracking-wider border border-[#D4AF37]/50 shadow-xs cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#6C2231]" />
                <span>Tie Rakhi Again ❤️</span>
              </button>
            </div>

            {/* Final Action: Continue Our Story with 3D Page Turn */}
            <div className="pt-2">
              <button
                onClick={handleFinalContinue}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#6C2231] to-[#842D3D] text-[#FAF6F0] font-sans font-semibold text-base shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer group border border-[#D4AF37]/30"
              >
                <span>Continue Our Story →</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        )}

        {/* Small Discovered Chips */}
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
                      setShowLightSweep(true);
                      setTimeout(() => {
                        setCurrentIndex(idx);
                        setAnimStage('in');
                      }, 550);
                      setTimeout(() => {
                        setAnimStage('idle');
                        setShowLightSweep(false);
                        setIsAnimating(false);
                      }, 1200);
                    }
                  }}
                  className={`px-2.5 py-0.5 rounded-full text-xs font-handwritten font-bold border transition-all cursor-pointer ${
                    idx === currentIndex
                      ? 'bg-[#6C2231] text-[#FAF6F0] border-[#D4AF37] scale-105 shadow-2xs'
                      : 'bg-white/80 text-[#6C2231] border-[#C87D88]/25 hover:bg-[#F7E6E8]'
                  }`}
                >
                  {item.name} {item.emoji}
                </button>
              );
            })}
          </div>
        )}

      </div>

      {/* ==========================================================================
          “Tie Rakhi Again” 3D Cinematic Experience Modal Overlay
          ========================================================================== */}
      {showTieRakhiModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 select-none animate-fade-in [animation-duration:400ms]">
          {/* Depth of Field Backdrop: Softly Blurred & Dimmed */}
          <div
            onClick={() => setShowTieRakhiModal(false)}
            className="absolute inset-0 bg-[#200E1C]/85 backdrop-blur-md transition-opacity duration-500"
          />

          {/* Radiant Golden/Purple Ambient Aura */}
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-all duration-700 ${
              rakhiStage === 'closer'
                ? 'w-96 h-96 bg-radial from-[#D4AF37]/45 via-[#9B5DE5]/30 to-transparent blur-3xl opacity-100 scale-125'
                : 'w-72 h-72 bg-radial from-[#D4AF37]/25 via-[#9B5DE5]/20 to-transparent blur-2xl opacity-80 scale-100'
            }`}
          />

          {/* 3D Rakhi Container */}
          <div className="relative z-20 max-w-sm w-full p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#2A1528] via-[#1E0D1C] to-[#160814] border border-[#D4AF37]/50 shadow-2xl text-center flex flex-col items-center justify-center space-y-5">
            
            {/* Close Button */}
            <button
              onClick={() => setShowTieRakhiModal(false)}
              className="absolute top-4 right-4 text-[#FAF6F0]/60 hover:text-[#FAF6F0] transition-colors p-1 rounded-full hover:bg-white/10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* 3D Sacred Rakhi Graphic with Unexpected Depth Zoom */}
            <div
              className={`transform-style-3d transition-all duration-700 ease-out py-2 ${
                rakhiStage === 'closer'
                  ? 'scale-125 translate-z-10 rotate-y-12 drop-shadow-[0_0_30px_rgba(212,175,55,0.8)]'
                  : 'scale-100 rotate-y-0 drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]'
              }`}
            >
              <div className="relative flex items-center justify-center">
                {/* Thread Left */}
                <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-[#9B5DE5] rounded-full shadow-[0_0_6px_rgba(212,175,55,0.8)]" />

                {/* Center Sacred Rosette */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-2 bg-gradient-to-tr from-[#D4AF37] via-[#FBF4DE] to-[#9B5DE5] ring-4 ring-[#D4AF37]/60 shadow-[0_0_35px_rgba(212,175,55,0.6)] flex items-center justify-center animate-pulse-glow">
                  <div className="w-full h-full rounded-full bg-[#6C2231] border-2 border-[#D4AF37] flex flex-col items-center justify-center text-[#FAF6F0] shadow-inner">
                    <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-[#D4AF37] fill-[#D4AF37] animate-pulse" />
                    <span className="text-[8px] font-bold tracking-widest uppercase text-[#FBF4DE] mt-0.5">
                      RAKHI
                    </span>
                  </div>

                  {/* Decorative Outer Beads */}
                  <div className="absolute -top-1 w-2.5 h-2.5 rounded-full bg-[#D4AF37] shadow-xs" />
                  <div className="absolute -bottom-1 w-2.5 h-2.5 rounded-full bg-[#D4AF37] shadow-xs" />
                  <div className="absolute -left-1 w-2.5 h-2.5 rounded-full bg-[#D4AF37] shadow-xs" />
                  <div className="absolute -right-1 w-2.5 h-2.5 rounded-full bg-[#D4AF37] shadow-xs" />
                </div>

                {/* Thread Right */}
                <div className="w-12 sm:w-16 h-1 bg-gradient-to-l from-transparent via-[#D4AF37] to-[#9B5DE5] rounded-full shadow-[0_0_6px_rgba(212,175,55,0.8)]" />
              </div>
            </div>

            {/* Emotional Message */}
            <div className="space-y-2 pt-1">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
                <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                <span>Sacred Bond Renewed</span>
                <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              </div>

              <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#FFFDF9] leading-snug">
                “Some moments are worth living again. ❤️”
              </h3>

              <p className="font-handwritten text-xl sm:text-2xl text-[#E9D5FF] pt-1">
                For My Dearest Akkaaa (Bangarammmm)
              </p>
            </div>

            {/* Close / Return Button */}
            <div className="pt-2">
              <button
                onClick={() => setShowTieRakhiModal(false)}
                className="px-6 py-2 rounded-full bg-[#D4AF37] text-[#241126] font-sans font-bold text-xs shadow-md hover:bg-[#FBF4DE] hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                Close & Return to Memory Book
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
