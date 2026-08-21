import React, { useState } from 'react';
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
    setIsCinematicActive(true);
    setSequenceStage('emerge');

    // Stage 1 -> Stage 2: Memories start orbiting in 3D around Rakhi (0.7s)
    setTimeout(() => {
      setSequenceStage('orbit');
      try {
        confetti({
          particleCount: 40,
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
          particleCount: 60,
          spread: 85,
          origin: { y: 0.55 },
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
          🌟 THE GRAND 3D CINEMATIC “TIE RAKHI AGAIN” EXPERIENCE
          ✨ 3D cinematic reveal | 🎀 3D Rakhi | 🖼️ Floating 3D Depth | ❤️ Memories Orbit | 💜 3D Transformation
          ========================================================================== */}
      {isCinematicActive && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 select-none animate-fade-in [animation-duration:400ms]">
          
          {/* Depth of Field Backdrop */}
          <div
            onClick={handleCloseModal}
            className="absolute inset-0 bg-[#160814]/90 backdrop-blur-lg transition-opacity duration-700"
          />

          {/* Radiant Cosmic Golden/Purple Ambient Lighting */}
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-all duration-1000 ${
              sequenceStage === 'orbit' || sequenceStage === 'converge'
                ? 'w-[500px] h-[500px] sm:w-[650px] sm:h-[650px] bg-radial from-[#D4AF37]/50 via-[#9B5DE5]/35 to-transparent blur-3xl opacity-100 scale-125'
                : 'w-80 h-80 bg-radial from-[#D4AF37]/30 via-[#9B5DE5]/20 to-transparent blur-2xl opacity-80 scale-100'
            }`}
          />

          {/* Close Button */}
          <button
            onClick={handleCloseModal}
            className="absolute top-5 right-5 z-30 text-[#FAF6F0]/70 hover:text-[#FAF6F0] transition-colors p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md cursor-pointer"
            aria-label="Close ceremony"
          >
            <X className="w-5 h-5" />
          </button>

          {/* 3D Perspective Stage */}
          <div className="relative z-20 max-w-xl w-full flex flex-col items-center justify-center perspective-1200 text-center">

            {/* 1. Orbiting 3D Memories Constellation (Active during 'orbit') */}
            {sequenceStage === 'orbit' && (
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-10">
                {orbitingMemories.map((m) => (
                  <div
                    key={m.id}
                    className={`absolute flex flex-col items-center justify-center ${m.anim}`}
                  >
                    <div className="polaroid-frame bg-white p-1 rounded-xs shadow-2xl scale-75 hover:scale-95 transition-transform duration-300 border border-[#D4AF37]/50">
                      <ImageWithFallback
                        src={m.img}
                        alt={m.title}
                        aspectRatio="square"
                        objectFit="cover"
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xs"
                      />
                      <span className="text-[9px] font-handwritten text-[#6C2231] font-bold block text-center truncate max-w-[80px]">
                        {m.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 2. Floating 3D Signature Rakhi Centerpiece */}
            <div
              className={`transform-style-3d transition-all duration-700 ease-out py-6 ${
                sequenceStage === 'orbit'
                  ? 'scale-120 translate-z-10 rotate-y-6 drop-shadow-[0_0_45px_rgba(212,175,55,0.9)]'
                  : sequenceStage === 'converge'
                  ? 'scale-135 translate-z-16 rotate-y-12 drop-shadow-[0_0_60px_rgba(212,175,55,1)] animate-pulse'
                  : sequenceStage === 'reveal'
                  ? 'scale-110 translate-z-4 rotate-y-0 drop-shadow-[0_0_30px_rgba(212,175,55,0.7)]'
                  : 'scale-100 rotate-y-0'
              }`}
            >
              <div className="relative flex items-center justify-center">
                {/* 3D Silk Threads Left */}
                <div className="w-16 sm:w-28 h-1.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-[#9B5DE5] rounded-full shadow-[0_0_12px_rgba(212,175,55,0.9)]" />

                {/* 3D Sacred Central Rosette */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-2.5 bg-gradient-to-tr from-[#D4AF37] via-[#FFFDF9] to-[#9B5DE5] ring-4 ring-[#D4AF37]/80 shadow-[0_0_50px_rgba(212,175,55,0.8)] flex items-center justify-center animate-pulse-glow">
                  <div className="w-full h-full rounded-full bg-[#6C2231] border-2 border-[#D4AF37] flex flex-col items-center justify-center text-[#FAF6F0] shadow-inner">
                    <Heart className="w-9 h-9 sm:w-10 sm:h-10 text-[#D4AF37] fill-[#D4AF37] animate-pulse" />
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#FBF4DE] mt-1">
                      RAKHI
                    </span>
                  </div>

                  {/* Golden Embellishment Beads */}
                  <div className="absolute -top-2 w-3.5 h-3.5 rounded-full bg-[#D4AF37] shadow-sm" />
                  <div className="absolute -bottom-2 w-3.5 h-3.5 rounded-full bg-[#D4AF37] shadow-sm" />
                  <div className="absolute -left-2 w-3.5 h-3.5 rounded-full bg-[#D4AF37] shadow-sm" />
                  <div className="absolute -right-2 w-3.5 h-3.5 rounded-full bg-[#D4AF37] shadow-sm" />
                </div>

                {/* 3D Silk Threads Right */}
                <div className="w-16 sm:w-28 h-1.5 bg-gradient-to-l from-transparent via-[#D4AF37] to-[#9B5DE5] rounded-full shadow-[0_0_12px_rgba(212,175,55,0.9)]" />
              </div>
            </div>

            {/* 3. Dynamic Narrative & Emotional 3D Reveal */}
            <div className="mt-4 max-w-lg mx-auto space-y-4 px-4">
              {sequenceStage === 'emerge' && (
                <div className="animate-fade-in space-y-2">
                  <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
                    ✦ Initiating Sacred Sibling Ceremony ✦
                  </p>
                  <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-white">
                    Connecting Across The Distance...
                  </h3>
                </div>
              )}

              {sequenceStage === 'orbit' && (
                <div className="animate-fade-in space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#9B5DE5]/30 border border-[#9B5DE5]/50 text-[#E9D5FF] text-xs font-semibold uppercase tracking-widest">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Every Memory We Shared In 3 Years</span>
                  </div>
                  <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-white">
                    “Every moment, every laugh, tied into one sacred bond.”
                  </h3>
                </div>
              )}

              {sequenceStage === 'converge' && (
                <div className="animate-fade-in space-y-2">
                  <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
                    ✦ Sealing Our Lifetime Promise ✦
                  </p>
                  <h3 className="font-serif-heading text-2xl sm:text-4xl font-bold text-[#FFFDF9]">
                    Pure Trust & Unbreakable Love ❤️
                  </h3>
                </div>
              )}

              {sequenceStage === 'reveal' && (
                <div className="animate-fade-in [animation-duration:700ms] space-y-4">
                  <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#2A1528] via-[#1E0D1C] to-[#160814] border border-[#D4AF37]/60 shadow-2xl text-left space-y-3">
                    <div className="flex items-center justify-between border-b border-[#D4AF37]/25 pb-2">
                      <span className="text-[11px] uppercase tracking-widest text-[#D4AF37] font-bold">
                        ✦ Sacred Sibling Bond Renewed ✦
                      </span>
                      <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                    </div>

                    <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#FFFDF9] leading-snug">
                      “Some moments are worth living again. ❤️”
                    </h3>

                    <p className="text-sm sm:text-base text-gray-200 font-sans leading-relaxed">
                      No matter where life takes us, you will always be my sister, my guide, and my true family. The sacred thread tied on my wrist remains untangled forever.
                    </p>

                    <p className="font-handwritten text-2xl sm:text-3xl text-[#E9D5FF] text-right pt-2 font-bold">
                      Forever My Bangarammmm ❤️ (Akkaaa)
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <button
                      onClick={handleCloseModal}
                      className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/10 text-white font-sans text-xs font-semibold hover:bg-white/20 transition-all cursor-pointer"
                    >
                      Return to Scrapbook
                    </button>
                    <button
                      onClick={handleContinueToLetter}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E2C055] text-[#241126] font-sans font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer group"
                    >
                      <span>Read Final Chapter Letter →</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>
      )}

    </div>
  );
};
