import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, ShieldCheck, X, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ImageWithFallback } from './ImageWithFallback';

// 6 Keepsake Orbiting Memories
const orbitingMemories = [
  { id: 1, title: "Our First Chapter", img: "/images/journey.jpg", anim: "animate-memory-orbit-1" },
  { id: 2, title: "Birthday Joy", img: "/images/birthday1.jpg", anim: "animate-memory-orbit-2" },
  { id: 3, title: "The Memorable Night", img: "/images/night-memory.jpg", anim: "animate-memory-orbit-3" },
  { id: 4, title: "Bike Ride Adventures", img: "/images/bike_ride.jpg", anim: "animate-memory-orbit-4" },
  { id: 5, title: "Hand Art & Silly Jokes", img: "/images/hand_art.jpg", anim: "animate-memory-orbit-5" },
  { id: 6, title: "Pure Sisterly Care", img: "/images/maa_wrist.png", anim: "animate-memory-orbit-6" },
];

export const RakhiInteraction: React.FC = () => {
  const navigate = useNavigate();
  const [tied, setTied] = useState(false);
  const [isCinematicActive, setIsCinematicActive] = useState(false);
  const [sequenceStage, setSequenceStage] = useState<'emerge' | 'orbit' | 'converge' | 'reveal'>('emerge');

  const handleTieRakhi = () => {
    if (isCinematicActive) return;

    // Immediately trigger the viewport-centered celebration without shifting user scroll
    setIsCinematicActive(true);
    setSequenceStage('emerge');

    // Stage 1 -> Stage 2: Memories start orbiting in 3D around Rakhi (0.7s)
    setTimeout(() => {
      setSequenceStage('orbit');
      try {
        confetti({
          particleCount: 35,
          spread: 60,
          origin: { y: 0.5 },
          colors: ['#D4AF37', '#9B5DE5', '#C87D88', '#FAF6F0']
        });
      } catch {
        // ignore
      }
    }, 700);

    // Stage 2 -> Stage 3: Memories converge inward into the glowing Rakhi (3.4s)
    setTimeout(() => {
      setSequenceStage('converge');
      try {
        confetti({
          particleCount: 50,
          spread: 80,
          origin: { y: 0.5 },
          colors: ['#D4AF37', '#9B5DE5', '#C87D88', '#FBF4DE', '#F472B6']
        });
      } catch {
        // ignore
      }
    }, 3400);

    // Stage 3 -> Stage 4: Emotional Reveal & Grand Settle (4.6s)
    setTimeout(() => {
      setSequenceStage('reveal');
      setTied(true);
    }, 4600);
  };

  const handleCloseModal = () => {
    setIsCinematicActive(false);
  };

  const handleContinueToLetter = () => {
    setIsCinematicActive(false);
    navigate('/letter');
  };

  return (
    <div className="relative paper-parchment rounded-3xl p-6 sm:p-10 border border-[#D4AF37]/40 shadow-lg text-center overflow-hidden">
      {/* Decorative Gold Corner Flairs */}
      <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#D4AF37]/50 rounded-tl-lg pointer-events-none" />
      <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#D4AF37]/50 rounded-tr-lg pointer-events-none" />
      <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#D4AF37]/50 rounded-bl-lg pointer-events-none" />
      <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#D4AF37]/50 rounded-br-lg pointer-events-none" />

      {/* Static / Base Rakhi Visual */}
      <div className="relative max-w-sm mx-auto my-6 py-4 flex flex-col items-center justify-center">
        <div className="relative w-full flex items-center justify-center">
          {/* Thread Line Left */}
          <div
            className={`h-1.5 flex-1 bg-gradient-to-r from-transparent via-[#C87D88] to-[#6C2231] rounded-full transition-all duration-700 ${
              tied ? 'shadow-[0_0_8px_rgba(212,175,55,0.8)] scale-y-125' : 'opacity-70'
            }`}
          />

          {/* Center Emblem */}
          <div
            className={`relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center transition-all duration-500 ${
              tied
                ? 'scale-110 animate-pulse-glow bg-gradient-to-tr from-[#D4AF37] via-[#FBF4DE] to-[#C87D88] ring-4 ring-[#6C2231]/30 shadow-xl'
                : 'bg-gradient-to-tr from-[#FAF6F0] to-[#F7E6E8] border-2 border-dashed border-[#C87D88]/60 shadow-sm'
            }`}
          >
            {/* Inner Sacred Rosette */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#6C2231] to-[#842D3D] flex items-center justify-center text-[#FBF4DE] shadow-md border-2 border-[#D4AF37]">
              <Heart
                className={`w-7 h-7 sm:w-8 sm:h-8 transition-all duration-500 ${
                  tied ? 'fill-[#D4AF37] text-[#D4AF37] scale-110' : 'text-[#FAF6F0]'
                }`}
              />
            </div>

            {/* Glowing Aura Ring when tied */}
            {tied && (
              <div className="absolute inset-0 rounded-full border-2 border-[#D4AF37] animate-ping opacity-30 pointer-events-none" />
            )}
          </div>

          {/* Thread Line Right */}
          <div
            className={`h-1.5 flex-1 bg-gradient-to-l from-transparent via-[#C87D88] to-[#6C2231] rounded-full transition-all duration-700 ${
              tied ? 'shadow-[0_0_8px_rgba(212,175,55,0.8)] scale-y-125' : 'opacity-70'
            }`}
          />
        </div>

        {tied && (
          <div className="flex gap-4 mt-2 animate-fade-in">
            <span className="text-xs font-handwritten text-[#6C2231]">✦ Golden Thread Tied Forever ✦</span>
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
            disabled={isCinematicActive}
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

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <button
              onClick={handleTieRakhi}
              className="text-xs uppercase tracking-wider font-semibold text-[#7E7275] hover:text-[#6C2231] transition-colors underline underline-offset-4 cursor-pointer"
            >
              Replay 3D Ceremony
            </button>
            <button
              onClick={() => navigate('/letter')}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#6C2231] text-[#FAF6F0] text-xs font-bold uppercase tracking-widest hover:bg-[#842D3D] shadow-sm hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <span>Read Final Letter →</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
            </button>
          </div>
        </div>
      )}

      {/* ==========================================================================
          🌟 THE GRAND 3D CINEMATIC VIEWPORT PORTAL OVERLAY
          Rendered via React createPortal to document.body to guarantee 100dvh centering
          on Mobile & Desktop without clipping or scroll offsets.
          ========================================================================== */}
      {isCinematicActive &&
        typeof document !== 'undefined' &&
        createPortal(
          <div className="fixed inset-0 w-screen h-[100dvh] min-h-[100dvh] z-[99999] flex items-center justify-center p-4 select-none overflow-y-auto pt-[env(safe-area-inset-top,1rem)] pb-[env(safe-area-inset-bottom,1rem)] animate-fade-in [animation-duration:350ms]">
            
            {/* Depth of Field Backdrop */}
            <div
              onClick={handleCloseModal}
              className="fixed inset-0 bg-[#160814]/95 backdrop-blur-xl transition-opacity duration-500"
            />

            {/* Radiant Cosmic Golden/Purple Ambient Lighting in Viewport Center */}
            <div
              className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-all duration-1000 ${
                sequenceStage === 'orbit' || sequenceStage === 'converge'
                  ? 'w-[320px] h-[320px] sm:w-[600px] sm:h-[600px] bg-radial from-[#D4AF37]/50 via-[#9B5DE5]/35 to-transparent blur-3xl opacity-100 scale-110'
                  : 'w-64 h-64 sm:w-80 sm:h-80 bg-radial from-[#D4AF37]/30 via-[#9B5DE5]/20 to-transparent blur-2xl opacity-80 scale-100'
              }`}
            />

            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[100000] text-[#FAF6F0]/80 hover:text-[#FAF6F0] transition-colors p-2.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md cursor-pointer border border-white/20 shadow-lg active:scale-95"
              aria-label="Close ceremony"
            >
              <X className="w-5 h-5" />
            </button>

            {/* 3D Sacred Space Container */}
            <div className="relative z-[99999] w-full max-w-lg sm:max-w-2xl flex flex-col items-center justify-center my-auto perspective-1200 py-4">
              
              {/* The 3D Golden Sacred Stage with Orbiting Memories */}
              <div className="relative w-64 h-64 sm:w-96 sm:h-96 flex items-center justify-center transform-style-3d my-2 sm:my-4">
                
                {/* 1. Orbiting Memories Constellation (6 Orbiting Polaroids) */}
                {(sequenceStage === 'orbit' || sequenceStage === 'converge') && (
                  <div
                    className={`absolute inset-0 flex items-center justify-center pointer-events-none transform-style-3d transition-all duration-1000 ${
                      sequenceStage === 'converge' ? 'scale-0 opacity-0 blur-xs' : 'scale-100 opacity-100'
                    }`}
                  >
                    {orbitingMemories.map((mem) => (
                      <div
                        key={mem.id}
                        className={`absolute w-16 sm:w-24 p-1 sm:p-1.5 rounded-sm bg-white/95 shadow-2xl border border-[#D4AF37]/60 transform-style-3d ${mem.anim}`}
                      >
                        <ImageWithFallback
                          src={mem.img}
                          alt={mem.title}
                          aspectRatio="auto"
                          className="rounded-xs h-12 sm:h-20 w-full object-cover"
                        />
                        <span className="font-handwritten text-[9px] sm:text-[10px] text-[#6C2231] block text-center truncate mt-0.5 font-bold">
                          {mem.title}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* 2. Floating 3D Rakhi Keepsake */}
                <div
                  className={`relative z-20 w-28 h-28 sm:w-44 sm:h-44 rounded-full flex items-center justify-center transform-style-3d transition-all duration-700 ${
                    sequenceStage === 'emerge'
                      ? 'scale-80 opacity-80 rotate-12'
                      : sequenceStage === 'orbit'
                      ? 'scale-100 opacity-100 animate-float'
                      : sequenceStage === 'converge'
                      ? 'scale-115 sm:scale-125 animate-pulse-glow rotate-0'
                      : 'scale-105 sm:scale-110 shadow-[0_0_50px_rgba(212,175,55,0.9)]'
                  }`}
                >
                  {/* 3D Golden Rosette Halo */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#D4AF37] via-[#FFFDF9] to-[#C87D88] p-1.5 shadow-2xl ring-4 ring-[#D4AF37]/60">
                    <div className="w-full h-full rounded-full bg-gradient-to-b from-[#6C2231] via-[#842D3D] to-[#4A1520] flex items-center justify-center border-2 border-[#D4AF37]">
                      
                      {/* Center 3D Heart / Sacred Symbol */}
                      <div className="relative flex items-center justify-center">
                        <Heart className="w-12 h-12 sm:w-20 sm:h-20 fill-[#D4AF37] text-[#FAF6F0] drop-shadow-[0_4px_12px_rgba(212,175,55,0.8)] animate-pulse" />
                        <Sparkles className="absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 text-[#FFFDF9] animate-spin [animation-duration:6s]" />
                      </div>

                    </div>
                  </div>

                  {/* Left & Right Flowing Golden Threads */}
                  <div className="absolute left-[-45px] sm:left-[-90px] w-12 sm:w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-[#C87D88] rounded-full shadow-[0_0_10px_#D4AF37]" />
                  <div className="absolute right-[-45px] sm:right-[-90px] w-12 sm:w-24 h-1 bg-gradient-to-l from-transparent via-[#D4AF37] to-[#C87D88] rounded-full shadow-[0_0_10px_#D4AF37]" />
                </div>

              </div>

              {/* 3. Cinematic Text & Story Arc */}
              <div className="text-center max-w-md sm:max-w-lg mx-auto mt-2 px-2 min-h-[120px] flex flex-col items-center justify-center">
                
                {sequenceStage === 'emerge' && (
                  <div className="animate-fade-in space-y-1">
                    <p className="text-[11px] sm:text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                      ✦ Renewing Sacred Thread ✦
                    </p>
                    <h3 className="font-serif-heading text-xl sm:text-3xl font-bold text-white leading-tight">
                      Connecting Our Bond Across The Distance...
                    </h3>
                  </div>
                )}

                {sequenceStage === 'orbit' && (
                  <div className="animate-fade-in space-y-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-0.5 sm:py-1 rounded-full bg-[#9B5DE5]/30 border border-[#9B5DE5]/50 text-[#E9D5FF] text-[11px] sm:text-xs font-semibold uppercase tracking-widest">
                      <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Every Memory We Shared In 3 Years</span>
                    </div>
                    <h3 className="font-serif-heading text-xl sm:text-3xl font-bold text-white leading-tight">
                      “Every moment, every laugh, tied into one sacred bond.”
                    </h3>
                  </div>
                )}

                {sequenceStage === 'converge' && (
                  <div className="animate-fade-in space-y-1.5">
                    <p className="text-[11px] sm:text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
                      ✦ Sealing Our Lifetime Promise ✦
                    </p>
                    <h3 className="font-serif-heading text-2xl sm:text-4xl font-bold text-[#FFFDF9]">
                      Pure Trust & Unbreakable Love ❤️
                    </h3>
                  </div>
                )}

                {sequenceStage === 'reveal' && (
                  <div className="animate-fade-in [animation-duration:600ms] space-y-3 sm:space-y-4 w-full">
                    <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#2A1528] via-[#1E0D1C] to-[#160814] border border-[#D4AF37]/60 shadow-2xl text-left space-y-2 sm:space-y-3">
                      <div className="flex items-center justify-between border-b border-[#D4AF37]/25 pb-2">
                        <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#D4AF37] font-bold">
                          ✦ Sacred Sibling Bond Renewed ✦
                        </span>
                        <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                      </div>

                      <h3 className="font-serif-heading text-xl sm:text-3xl font-bold text-[#FFFDF9] leading-snug">
                        “Some moments are worth living again. ❤️”
                      </h3>

                      <p className="text-xs sm:text-base text-gray-200 font-sans leading-relaxed">
                        No matter where life takes us, you will always be my sister, my guide, and my true family. The sacred thread tied on my wrist remains untangled forever.
                      </p>

                      <p className="font-handwritten text-xl sm:text-3xl text-[#E9D5FF] text-right pt-1 font-bold">
                        Forever My Bangarammmm ❤️ (Akkaaa)
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-1">
                      <button
                        onClick={handleCloseModal}
                        className="w-full sm:w-auto px-5 py-2.5 sm:py-3 rounded-full bg-white/10 text-white font-sans text-xs font-semibold hover:bg-white/20 transition-all cursor-pointer active:scale-95"
                      >
                        Return to Scrapbook
                      </button>
                      <button
                        onClick={handleContinueToLetter}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E2C055] text-[#241126] font-sans font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer group"
                      >
                        <span>Read Final Chapter Letter →</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

            </div>

          </div>,
          document.body
        )}

    </div>
  );
};
