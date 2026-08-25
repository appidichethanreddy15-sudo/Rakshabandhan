import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Star, ArrowRight, Sparkles } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { WashiTape } from '../components/WashiTape';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [isCardOpened, setIsCardOpened] = useState(false);
  const [diveStage, setDiveStage] = useState<'idle' | 'lifting' | 'expanding'>('idle');

  const handleOpenCard = () => {
    setIsCardOpened(true);
  };

  const handleContinue = () => {
    if (diveStage !== 'idle') return;

    // Phase 1 (0–180ms): Photo lifts from the page in 3D
    setDiveStage('lifting');

    // Phase 2 (180–650ms): Dive into photo portal with expanding warm light
    setTimeout(() => {
      setDiveStage('expanding');
    }, 180);

    // Phase 3 (680ms): Navigate to Page 2 (Words From My Heart)
    setTimeout(() => {
      navigate('/my-words');
    }, 680);
  };

  return (
    <PageTransition>
      <div className="relative overflow-hidden py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center perspective-1400">

        {/* Floating Decorative Elements */}
        <div className="absolute top-10 left-6 text-2xl animate-float opacity-70 pointer-events-none">✨</div>
        <div className="absolute top-24 right-10 text-xl animate-float [animation-delay:1.5s] opacity-70 pointer-events-none">🌸</div>
        <div className="absolute bottom-20 left-12 text-xl animate-float [animation-delay:2.5s] opacity-70 pointer-events-none">💛</div>

        {/* Small Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F7E6E8] border border-[#C87D88]/30 shadow-xs mb-6">
          <Heart className="w-3.5 h-3.5 text-[#6C2231] fill-[#6C2231]" />
          <span className="text-xs font-semibold uppercase tracking-widest text-[#6C2231]">
            A Personal Raksha Bandhan Presence
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="font-serif-heading text-4xl sm:text-6xl md:text-7xl font-bold text-[#6C2231] tracking-tight leading-[1.15] mb-4">
          Happy Raksha Bandhan Bangaramm ❤️ <span className="inline-block text-[#C87D88]">❤️</span>
        </h1>

        {/* Emotional Subtitle */}
        <p className="font-serif-heading italic text-xl sm:text-2xl md:text-3xl text-[#524749] max-w-2xl mx-auto leading-relaxed mb-8">
          “You enter my life as a stranger...<br className="hidden sm:inline" /> and somehow become family.”
        </p>

        {/* Scrapbook Polaroid Photo Card Stage */}
        <div className="relative max-w-sm sm:max-w-md mx-auto my-8 transform-style-3d">
          
          {/* Top Washi Tape */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
            <WashiTape color="gold" rotation="-rotate-1" />
          </div>

          {!isCardOpened ? (
            /* Unopened Card State: Interactive Tap to Reveal */
            <div
              onClick={handleOpenCard}
              className="paper-parchment rounded-2xl min-h-[460px] sm:min-h-[520px] p-8 sm:p-10 border-2 border-dashed border-[#C87D88]/40 shadow-xl cursor-pointer group hover:scale-102 hover:border-[#6C2231]/60 transition-all duration-300 select-none relative flex flex-col items-center justify-between"
            >
              <div className="pt-4 flex flex-col items-center">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C87D88] mb-2">
                  Special Delivery 💌
                </span>
                <span className="font-serif-heading font-bold text-2xl sm:text-3xl text-[#6C2231]">
                  A Keepsake for You
                </span>
              </div>

              <div className="flex flex-col items-center justify-center my-auto space-y-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#6C2231] to-[#842D3D] flex items-center justify-center text-[#FBF4DE] shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 border-2 border-[#D4AF37]">
                  <Heart className="w-10 h-10 fill-[#D4AF37] text-[#D4AF37] animate-pulse" />
                </div>
                
                <div className="space-y-1.5 px-2">
                  <span className="font-serif-heading font-bold text-xl sm:text-2xl text-[#6C2231] block">
                    Tap to Open Your Card
                  </span>
                  <p className="font-handwritten text-xl sm:text-2xl text-[#7E7275]">
                    Bangarammmm, I made something for you...
                  </p>
                </div>
              </div>

              <div className="pb-2">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-5 py-2 rounded-full bg-[#F7E6E8] text-[#6C2231] group-hover:bg-[#6C2231] group-hover:text-[#FAF6F0] transition-all shadow-xs">
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" /> Tap to Reveal Photo
                </span>
              </div>
            </div>
          ) : (
            /* Revealed Photo Card State */
            <div className="animate-fade-in [animation-duration:600ms]">
              
              {/* 3D Portal Warm Light Burst when diving */}
              {diveStage === 'expanding' && (
                <div className="absolute inset-0 z-40 pointer-events-none flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-[#D4AF37]/80 via-[#FAF3E0] to-[#FFFFFF] blur-2xl animate-portal-light" />
                  
                  {/* Subtle Warm Stardust Particles */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4">
                    <span className="text-sm text-[#D4AF37] animate-stardust-1">✨</span>
                    <span className="text-xs text-[#FAF3E0] animate-stardust-2">⭐</span>
                    <span className="text-xs text-[#F7E6E8] animate-stardust-3">🌸</span>
                    <span className="text-sm text-[#D4AF37] animate-stardust-1">✨</span>
                  </div>
                </div>
              )}

              {/* The Physical 3D Polaroid Photo Card */}
              <div
                className={`polaroid-frame rounded-md bg-white shadow-xl rotate-1 hover:rotate-0 transition-all duration-300 overflow-hidden transform-style-3d ${
                  diveStage === 'lifting'
                    ? 'animate-photo-dive-lift z-30'
                    : diveStage === 'expanding'
                    ? 'animate-photo-dive-expand z-30 pointer-events-none'
                    : ''
                }`}
              >
                <ImageWithFallback
                  src="/images/snap.jpeg"
                  alt="For My Bangarammmm"
                  aspectRatio="auto"
                  objectFit="contain"
                  className="rounded-xs w-full h-auto"
                />

                <div className="mt-4 pt-3 border-t border-[#F7E6E8] flex items-center justify-between px-2">
                  <span className="font-handwritten text-2xl text-[#6C2231]">
                    Almost Three years of an unbreakable bond ✨
                  </span>
                  <div className="flex items-center gap-1 text-[#D4AF37]">
                    <Star className="w-4 h-4 fill-[#D4AF37]" />
                    <span className="text-xs font-sans font-bold text-[#6C2231]">Sister for life</span>
                  </div>
                </div>
              </div>

              {/* Personal Note Below Photo */}
              <div className="max-w-md mx-auto my-6 animate-fade-in [animation-delay:200ms]">
                <p className="font-handwritten text-2xl sm:text-3xl text-[#6C2231] leading-relaxed">
                  “I made something for you.”
                </p>
              </div>

              {/* Direct Continue Button on Page 1 */}
              <div className="mt-6 mb-4">
                <button
                  onClick={handleContinue}
                  disabled={diveStage !== 'idle'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#6C2231] to-[#842D3D] text-[#FAF6F0] font-sans font-semibold text-base shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer group border border-[#D4AF37]/30 disabled:opacity-70 disabled:pointer-events-none"
                >
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  <span>Continue to Words From My Heart</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </PageTransition>
  );
};
