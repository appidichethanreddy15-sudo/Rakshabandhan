import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, ShieldCheck } from 'lucide-react';

export const RakhiInteraction: React.FC = () => {
  const [tied, setTied] = useState(false);
  const [animating, setAnimating] = useState(false);

  const handleTieRakhi = () => {
    if (animating) return;
    setAnimating(true);

    // Trigger subtle confetti
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#D4AF37', '#C87D88', '#6C2231', '#F7E6E8']
      });
    } catch {
      // ignore
    }

    setTimeout(() => {
      setTied(true);
      setAnimating(false);
    }, 600);
  };

  return (
    <div className="relative paper-parchment rounded-3xl p-6 sm:p-10 border border-[#D4AF37]/40 shadow-lg text-center overflow-hidden">
      {/* Decorative Gold Corner Flairs */}
      <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#D4AF37]/50 rounded-tl-lg pointer-events-none" />
      <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#D4AF37]/50 rounded-tr-lg pointer-events-none" />
      <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#D4AF37]/50 rounded-bl-lg pointer-events-none" />
      <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#D4AF37]/50 rounded-br-lg pointer-events-none" />

      {/* SVG Rakhi Visual */}
      <div className="relative max-w-sm mx-auto my-6 py-4 flex flex-col items-center justify-center">
        {/* Animated Rakhi Thread */}
        <div className="relative w-full flex items-center justify-center">
          {/* Thread Line Left */}
          <div
            className={`h-1.5 flex-1 bg-gradient-to-r from-transparent via-[#C87D88] to-[#6C2231] rounded-full transition-all duration-700 ${
              tied ? 'shadow-[0_0_8px_rgba(212,175,55,0.8)] scale-y-125' : 'opacity-70'
            }`}
          />

          {/* Center Emblem / Dial */}
          <div
            className={`relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center transition-all duration-500 ${
              tied
                ? 'scale-110 animate-pulse-glow bg-gradient-to-tr from-[#D4AF37] via-[#FBF4DE] to-[#C87D88] ring-4 ring-[#6C2231]/30 shadow-xl'
                : 'bg-gradient-to-tr from-[#FAF6F0] to-[#F7E6E8] border-2 border-dashed border-[#C87D88]/60 shadow-sm'
            }`}
          >
            {/* Inner Sacred Rosette */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#6C2231] flex flex-col items-center justify-center text-[#FAF6F0] shadow-inner">
              <Heart
                className={`w-6 h-6 transition-transform duration-500 ${
                  tied ? 'fill-[#D4AF37] text-[#D4AF37] scale-110' : 'text-[#FAF6F0]'
                }`}
              />
              <span className="text-[8px] font-bold tracking-widest uppercase text-[#FAF6F0]/90 -mt-0.5">
                {tied ? 'PROTECTED' : 'RAKHI'}
              </span>
            </div>

            {/* Glowing Golden Beads Around */}
            {tied && (
              <>
                <div className="absolute -top-1 w-2.5 h-2.5 rounded-full bg-[#D4AF37] shadow-xs" />
                <div className="absolute -bottom-1 w-2.5 h-2.5 rounded-full bg-[#D4AF37] shadow-xs" />
                <div className="absolute -left-1 w-2.5 h-2.5 rounded-full bg-[#D4AF37] shadow-xs" />
                <div className="absolute -right-1 w-2.5 h-2.5 rounded-full bg-[#D4AF37] shadow-xs" />
              </>
            )}
          </div>

          {/* Thread Line Right */}
          <div
            className={`h-1.5 flex-1 bg-gradient-to-l from-transparent via-[#C87D88] to-[#6C2231] rounded-full transition-all duration-700 ${
              tied ? 'shadow-[0_0_8px_rgba(212,175,55,0.8)] scale-y-125' : 'opacity-70'
            }`}
          />
        </div>

        {/* Small Tassels */}
        {tied && (
          <div className="flex gap-4 mt-2 animate-fade-in">
            <span className="text-xs font-handwritten text-[#6C2231]">✦ Golden Thread ✦</span>
          </div>
        )}
      </div>

      {/* Button Action */}
      {!tied ? (
        <div className="mt-6">
          <p className="font-handwritten text-xl text-[#7E7275] mb-4">
            Even across distance, tie our sacred thread with a single tap.
          </p>
          <button
            onClick={handleTieRakhi}
            disabled={animating}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#6C2231] to-[#842D3D] text-[#FAF6F0] font-semibold text-base shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer group"
          >
            <Sparkles className="w-5 h-5 text-[#D4AF37] group-hover:rotate-45 transition-transform" />
            <span>Tie Rakhi Again ❤️</span>
          </button>
        </div>
      ) : (
        /* Revealed Heartfelt Message */
        <div className="mt-6 max-w-xl mx-auto animate-fade-in space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7E6E8] text-[#6C2231] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#6C2231]" />
            <span>Sacred Sibling Bond Renewed</span>
          </div>

          <div className="paper-texture p-6 sm:p-8 rounded-2xl border border-[#D4AF37]/30 text-left space-y-3 bg-[#FFFDF9]">
            <p className="font-serif-heading text-xl sm:text-2xl text-[#6C2231] font-semibold leading-relaxed">
              “Even though I can't be there beside you this Raksha Bandhan, nothing can change what you mean to me.”
            </p>
            <p className="text-base sm:text-lg text-[#2D2426] font-sans leading-relaxed">
              The bond is still here. The prayers are still here. The promise to always stand by you is still here.
            </p>
            <p className="font-handwritten text-2xl text-[#6C2231] text-right pt-2">
              Always. ❤️
            </p>
          </div>

          <button
            onClick={() => setTied(false)}
            className="text-xs uppercase tracking-wider font-semibold text-[#7E7275] hover:text-[#6C2231] transition-colors underline underline-offset-4 pt-2"
          >
            Reset Ritual
          </button>
        </div>
      )}
    </div>
  );
};
