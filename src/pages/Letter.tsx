import React, { useState } from 'react';
import { PageTransition } from '../components/PageTransition';
import { letterData } from '../data/letterData';
import { WashiTape } from '../components/WashiTape';
import { Sparkles, Heart, Gift, X } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ImageWithFallback } from '../components/ImageWithFallback';

// 6 Milestone Orbiting Memories for Grand Finale
const finaleOrbitMemories = [
  { id: 1, title: "Our First Chapter", img: "/images/journey.jpg", anim: "animate-finale-orbit-1" },
  { id: 2, title: "Birthday Joy", img: "/images/birthday1.jpg", anim: "animate-finale-orbit-2" },
  { id: 3, title: "The Memorable Night", img: "/images/night-memory.jpg", anim: "animate-finale-orbit-3" },
  { id: 4, title: "Bike Ride Adventures", img: "/images/bike_ride.jpg", anim: "animate-finale-orbit-4" },
  { id: 5, title: "Hand Art & Silly Jokes", img: "/images/hand_art.jpg", anim: "animate-finale-orbit-5" },
  { id: 6, title: "Pure Sisterly Care", img: "/images/maa_wrist.png", anim: "animate-finale-orbit-6" },
];

export const Letter: React.FC = () => {
  const [surpriseOpen, setSurpriseOpen] = useState(false);
  const [finaleStage, setFinaleStage] = useState<'emerge' | 'orbit' | 'converge' | 'reveal'>('emerge');

  const handleOpenSurprise = () => {
    setSurpriseOpen(true);
    setFinaleStage('emerge');

    // Stage 1 -> Stage 2: 3D Memories Orbit around 3D Rakhi (0.7s)
    setTimeout(() => {
      setFinaleStage('orbit');
      try {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.5 },
          colors: ['#D4AF37', '#9B5DE5', '#C87D88', '#FAF6F0']
        });
      } catch {
        // ignore
      }
    }, 700);

    // Stage 2 -> Stage 3: Orbiting Memories Converge Inward into the Rakhi (3.4s)
    setTimeout(() => {
      setFinaleStage('converge');
      try {
        confetti({
          particleCount: 75,
          spread: 90,
          origin: { y: 0.55 },
          colors: ['#D4AF37', '#9B5DE5', '#C87D88', '#FBF4DE', '#F472B6']
        });
      } catch {
        // ignore
      }
    }, 3400);

    // Stage 3 -> Stage 4: Grand Emotional Climax Reveal (4.6s)
    setTimeout(() => {
      setFinaleStage('reveal');
      try {
        confetti({
          particleCount: 100,
          spread: 100,
          origin: { y: 0.6 },
          colors: ['#D4AF37', '#C87D88', '#6C2231', '#FFD700', '#F7E6E8', '#9B5DE5']
        });
      } catch {
        // ignore
      }
    }, 4600);
  };

  const handleCloseSurprise = () => {
    setSurpriseOpen(false);
  };

  return (
    <PageTransition>
      <div className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">

        {/* Page Intro Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#F7E6E8] text-[#6C2231] text-xs font-semibold uppercase tracking-widest mb-4">
            <Heart className="w-3.5 h-3.5 fill-[#6C2231]/30" />
            <span>Chapter 6 • Final Letter & Wishes</span>
          </div>

          <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold text-[#6C2231] tracking-tight mb-3">
            To My Dearest Sister
          </h1>

          <p className="font-handwritten text-2xl sm:text-3xl text-[#524749]">
            A message from the deepest part of my heart.
          </p>
        </div>

        {/* The Exact Letter Card */}
        <div className="relative paper-texture rounded-3xl p-8 sm:p-14 border border-[#C87D88]/30 shadow-xl mb-12 bg-[#FFFDF9] text-center">

          {/* Top Decorative Washi Tape */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
            <WashiTape color="gold" rotation="rotate-1" />
          </div>

          {/* Salutation */}
          <div className="mb-6">
            <span className="font-handwritten text-3xl sm:text-4xl text-[#6C2231] font-bold">
              {letterData.salutation}
            </span>
          </div>

          {/* Exact Theodore Quote Message */}
          <div className="my-8 py-6 px-4 sm:px-8 bg-gradient-to-br from-[#FAF6F0] via-[#FFFDF9] to-[#FDF2F4] rounded-2xl border border-[#D4AF37]/30 shadow-xs">
            <p className="font-serif-heading text-xl sm:text-2xl text-[#2D2426] leading-relaxed italic font-medium">
              {letterData.coreMessage}
            </p>
          </div>

          {/* Sibling Quote */}
          <div className="my-6 max-w-xl mx-auto">
            <p className="font-sans text-sm sm:text-base text-[#7E7275] leading-relaxed italic">
              “{letterData.quote}”
            </p>
          </div>

          {/* Closing & Signature */}
          <div className="mt-8 pt-6 border-t border-[#C87D88]/20 flex flex-col items-center gap-2">
            <span className="font-serif-heading text-xl sm:text-2xl font-bold text-[#6C2231]">
              {letterData.closing}
            </span>
            <p className="font-handwritten text-2xl sm:text-3xl text-[#524749]">
              {letterData.signature}
            </p>
          </div>
        </div>

        {/* Final Surprise Trigger Button */}
        <div className="text-center mb-16">
          <p className="font-handwritten text-2xl text-[#7E7275] mb-4">
            There is still one final message waiting for you...
          </p>

          <button
            onClick={handleOpenSurprise}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#C87D88] to-[#6C2231] text-white font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer group border border-[#D4AF37]/40"
          >
            <Gift className="w-6 h-6 text-[#FBF4DE] group-hover:rotate-12 transition-transform" />
            <span>One Last Thing... 👀</span>
            <Sparkles className="w-5 h-5 text-[#FBF4DE]" />
          </button>
        </div>

        {/* ==========================================================================
            🌟 THE GRAND 3D CINEMATIC FINALE EXPERIENCE (“One Last Thing... 👀”)
            ✨ 3D cinematic reveal | 🎀 3D Rakhi | 🖼️ Floating 3D Depth | ❤️ Memories Orbit | 💜 3D Transformation
            ========================================================================== */}
        {surpriseOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 select-none animate-fade-in [animation-duration:400ms]">
            
            {/* Depth of Field Backdrop: Deep Cosmic Scrapbook Theater */}
            <div
              onClick={handleCloseSurprise}
              className="absolute inset-0 bg-[#120612]/92 backdrop-blur-xl transition-opacity duration-700"
            />

            {/* Radiant Ambient Aura */}
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-all duration-1000 ${
                finaleStage === 'orbit' || finaleStage === 'converge'
                  ? 'w-[520px] h-[520px] sm:w-[700px] sm:h-[700px] bg-radial from-[#D4AF37]/50 via-[#9B5DE5]/35 to-transparent blur-3xl opacity-100 scale-125'
                  : 'w-80 h-80 bg-radial from-[#D4AF37]/35 via-[#9B5DE5]/20 to-transparent blur-2xl opacity-80 scale-100'
              }`}
            />

            {/* Close Button */}
            <button
              onClick={handleCloseSurprise}
              className="absolute top-5 right-5 z-30 text-[#FAF6F0]/70 hover:text-[#FAF6F0] transition-colors p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md cursor-pointer"
              aria-label="Close ceremony"
            >
              <X className="w-5 h-5" />
            </button>

            {/* 3D Perspective Stage */}
            <div className="relative z-20 max-w-xl w-full flex flex-col items-center justify-center perspective-1400 text-center">

              {/* 1. Orbiting 3D Memories Constellation (Active during 'orbit') */}
              {finaleStage === 'orbit' && (
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-10">
                  {finaleOrbitMemories.map((m) => (
                    <div
                      key={m.id}
                      className={`absolute flex flex-col items-center justify-center ${m.anim}`}
                    >
                      <div className="polaroid-frame bg-white p-1 rounded-xs shadow-2xl scale-75 hover:scale-95 transition-transform duration-300 border border-[#D4AF37]/60">
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
                  finaleStage === 'orbit'
                    ? 'scale-120 translate-z-10 rotate-y-6 drop-shadow-[0_0_45px_rgba(212,175,55,0.9)]'
                    : finaleStage === 'converge'
                    ? 'scale-135 translate-z-16 rotate-y-12 drop-shadow-[0_0_65px_rgba(212,175,55,1)] animate-pulse'
                    : finaleStage === 'reveal'
                    ? 'scale-110 translate-z-4 rotate-y-0 drop-shadow-[0_0_35px_rgba(212,175,55,0.7)]'
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
                        FOREVER
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
                {finaleStage === 'emerge' && (
                  <div className="animate-fade-in space-y-2">
                    <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
                      ✦ Unveiling Our Lifelong Story ✦
                    </p>
                    <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-white">
                      Gathering Every Precious Memory...
                    </h3>
                  </div>
                )}

                {finaleStage === 'orbit' && (
                  <div className="animate-fade-in space-y-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#9B5DE5]/30 border border-[#9B5DE5]/50 text-[#E9D5FF] text-xs font-semibold uppercase tracking-widest">
                      <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Every Laugh & Every Memory We Shared</span>
                    </div>
                    <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-white">
                      “Three unforgettable years... sealed into one eternal bond.”
                    </h3>
                  </div>
                )}

                {finaleStage === 'converge' && (
                  <div className="animate-fade-in space-y-2">
                    <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
                      ✦ One Final Message From My Heart ✦
                    </p>
                    <h3 className="font-serif-heading text-2xl sm:text-4xl font-bold text-[#FFFDF9]">
                      For My Dearest Akkaaa ❤️
                    </h3>
                  </div>
                )}

                {finaleStage === 'reveal' && (
                  <div className="animate-fade-in [animation-duration:700ms] space-y-4">
                    <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#2A1528] via-[#1E0D1C] to-[#160814] border border-[#D4AF37]/60 shadow-2xl text-left space-y-3">
                      
                      <div className="flex items-center justify-between border-b border-[#D4AF37]/25 pb-2">
                        <span className="text-[11px] uppercase tracking-widest text-[#D4AF37] font-bold">
                          ✦ To My Dearest Akkaaa 🌸 ✦
                        </span>
                        <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                      </div>

                      <h3 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#FFFDF9] tracking-tight filter drop-shadow-xs">
                        I Love youu Bangaramm <span className="text-[#D4AF37]">❤️</span>
                      </h3>

                      <p className="text-sm sm:text-base text-gray-200 font-sans leading-relaxed">
                        No matter how many silly names I call you or where life takes us, in my heart, you will always be my dearest <strong className="font-serif-heading text-lg text-[#FBF4DE]">Akkaaa</strong>—my safe place, my guide, and my true family.
                      </p>

                      <div className="pt-2 border-t border-[#D4AF37]/20 flex items-center justify-between">
                        <p className="font-handwritten text-2xl sm:text-3xl text-[#E9D5FF] font-bold">
                          Always & Forever, Akkaaa ✨
                        </p>
                        <span className="font-serif-heading italic text-[#D4AF37] text-sm sm:text-base font-semibold">
                          — Always your brother ❤️
                        </span>
                      </div>
                    </div>

                    {/* Replay / Close Action */}
                    <div className="pt-2 flex items-center justify-center gap-3">
                      <button
                        onClick={handleCloseSurprise}
                        className="px-8 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E2C055] text-[#241126] font-sans font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
                      >
                        Cherish This Memory ❤️
                      </button>
                    </div>
                  </div>
                )}
              </div>

            </div>

          </div>
        )}

      </div>
    </PageTransition>
  );
};
