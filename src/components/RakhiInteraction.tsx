import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, ShieldCheck } from 'lucide-react';

export const RakhiInteraction: React.FC = () => {
  const [tied, setTied] = useState(false);
  const [is3DActive, setIs3DActive] = useState(false);
  const [rakhi3DStage, setRakhi3DStage] = useState<'emerge' | 'zoom' | 'settle'>('emerge');

  const handleTieRakhi = () => {
    if (is3DActive) return;
    setIs3DActive(true);
    setRakhi3DStage('emerge');

    // 0.6s: Unexpected 3D moment - moves closer, glows, and releases particles
    setTimeout(() => {
      setRakhi3DStage('zoom');
      try {
        confetti({
          particleCount: 55,
          spread: 75,
          origin: { y: 0.5 },
          colors: ['#D4AF37', '#9B5DE5', '#C87D88', '#FBF4DE', '#F472B6']
        });
      } catch {
        // ignore
      }
    }, 650);

    // 1.8s: Settle back into position
    setTimeout(() => {
      setRakhi3DStage('settle');
    }, 1800);

    // 2.6s: Complete the ritual and transition to the renewed promise card
    setTimeout(() => {
      setIs3DActive(false);
      setTied(true);
    }, 2600);
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
                  tied ? 'fill-[#D4AF37] text-[#D4AF37] scale-110 animate-pulse' : 'text-[#FAF6F0]'
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
            disabled={is3DActive}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#6C2231] to-[#842D3D] text-[#FAF6F0] font-semibold text-base shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer group disabled:opacity-60 disabled:pointer-events-none border border-[#D4AF37]/40"
          >
            <Sparkles className="w-5 h-5 text-[#D4AF37] group-hover:rotate-45 transition-transform" />
            <span>Tie Rakhi Again ❤️</span>
          </button>
        </div>
      ) : (
        /* Revealed Heartfelt Message */
        <div className="mt-6 max-w-xl mx-auto animate-fade-in [animation-duration:600ms] space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F7E6E8] text-[#6C2231] text-xs font-bold uppercase tracking-wider shadow-xs border border-[#C87D88]/30">
            <ShieldCheck className="w-4 h-4 text-[#6C2231]" />
            <span>Sacred Sibling Bond Renewed</span>
          </div>

          <div className="paper-texture p-6 sm:p-8 rounded-2xl border border-[#D4AF37]/40 text-left space-y-3 bg-[#FFFDF9] shadow-sm">
            <p className="font-serif-heading text-xl sm:text-2xl text-[#6C2231] font-semibold leading-relaxed">
              “Even though I can't be there beside you this Raksha Bandhan, nothing can change what you mean to me.”
            </p>
            <p className="text-base sm:text-lg text-[#2D2426] font-sans leading-relaxed">
              The bond is still here. The prayers are still here. The promise to always stand by you is still here.
            </p>
            <p className="font-handwritten text-2xl sm:text-3xl text-[#6C2231] text-right pt-2 font-bold">
              Always. ❤️
            </p>
          </div>

          <button
            onClick={() => setTied(false)}
            className="text-xs uppercase tracking-wider font-semibold text-[#7E7275] hover:text-[#6C2231] transition-colors underline underline-offset-4 pt-2 cursor-pointer"
          >
            Tie Rakhi Again
          </button>
        </div>
      )}

      {/* ==========================================================================
          3D Cinematic "Tie Rakhi Again" Experience Overlay
          ========================================================================== */}
      {is3DActive && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 select-none animate-fade-in [animation-duration:350ms]">
          {/* Depth of Field Backdrop: Softly Blurred & Dimmed */}
          <div className="absolute inset-0 bg-[#1D0C1A]/85 backdrop-blur-md transition-opacity duration-500" />

          {/* Radiant Center Aura */}
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-all duration-700 ${
              rakhi3DStage === 'zoom'
                ? 'w-[420px] h-[420px] sm:w-[540px] sm:h-[540px] bg-radial from-[#D4AF37]/45 via-[#9B5DE5]/30 to-transparent blur-3xl opacity-100 scale-125'
                : 'w-72 h-72 bg-radial from-[#D4AF37]/25 via-[#9B5DE5]/20 to-transparent blur-2xl opacity-80 scale-100'
            }`}
          />

          {/* 3D Rakhi Container */}
          <div className="relative z-20 max-w-sm w-full p-8 rounded-3xl bg-gradient-to-b from-[#2A1528] via-[#1E0D1C] to-[#160814] border border-[#D4AF37]/50 shadow-2xl text-center flex flex-col items-center justify-center space-y-6">
            
            {/* 3D Sacred Rakhi Graphic with Unexpected Depth Zoom */}
            <div
              className={`transform-style-3d transition-all duration-700 ease-out py-4 ${
                rakhi3DStage === 'zoom'
                  ? 'scale-130 translate-z-12 rotate-y-12 drop-shadow-[0_0_35px_rgba(212,175,55,0.85)]'
                  : 'scale-100 rotate-y-0 drop-shadow-[0_0_15px_rgba(212,175,55,0.45)]'
              }`}
            >
              <div className="relative flex items-center justify-center">
                {/* Thread Left */}
                <div className="w-14 sm:w-20 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-[#9B5DE5] rounded-full shadow-[0_0_8px_rgba(212,175,55,0.8)]" />

                {/* Center Sacred Rosette */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-2 bg-gradient-to-tr from-[#D4AF37] via-[#FBF4DE] to-[#9B5DE5] ring-4 ring-[#D4AF37]/60 shadow-[0_0_40px_rgba(212,175,55,0.6)] flex items-center justify-center animate-pulse-glow">
                  <div className="w-full h-full rounded-full bg-[#6C2231] border-2 border-[#D4AF37] flex flex-col items-center justify-center text-[#FAF6F0] shadow-inner">
                    <Heart className="w-8 h-8 sm:w-9 sm:h-9 text-[#D4AF37] fill-[#D4AF37] animate-pulse" />
                    <span className="text-[9px] font-bold tracking-widest uppercase text-[#FBF4DE] mt-0.5">
                      RAKSHA BANDHAN
                    </span>
                  </div>

                  {/* Decorative Outer Beads */}
                  <div className="absolute -top-1.5 w-3 h-3 rounded-full bg-[#D4AF37] shadow-xs" />
                  <div className="absolute -bottom-1.5 w-3 h-3 rounded-full bg-[#D4AF37] shadow-xs" />
                  <div className="absolute -left-1.5 w-3 h-3 rounded-full bg-[#D4AF37] shadow-xs" />
                  <div className="absolute -right-1.5 w-3 h-3 rounded-full bg-[#D4AF37] shadow-xs" />
                </div>

                {/* Thread Right */}
                <div className="w-14 sm:w-20 h-1 bg-gradient-to-l from-transparent via-[#D4AF37] to-[#9B5DE5] rounded-full shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
              </div>
            </div>

            {/* Emotional Message */}
            <div className="space-y-2 pt-1">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
                <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                <span>Renewing Sacred Bond</span>
                <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              </div>

              <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#FFFDF9] leading-snug">
                “Tying Our Sacred Thread... ❤️”
              </h3>

              <p className="font-handwritten text-xl sm:text-2xl text-[#E9D5FF] pt-1">
                For My Dearest Akkaaa (Bangarammmm)
              </p>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
