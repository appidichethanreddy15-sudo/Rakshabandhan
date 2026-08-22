import React, { useState } from 'react';
import { PageTransition } from '../components/PageTransition';
import { letterData } from '../data/letterData';
import { WashiTape } from '../components/WashiTape';
import { Sparkles, Heart, Gift, X, Shield } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ImageWithFallback } from '../components/ImageWithFallback';

// 6 Milestone Keepsake Memories for the 3D Gallery Cascade
const keepsakeGalleryMemories = [
  { id: 1, title: "Our First Chapter", img: "/images/journey.jpg", classAnim: "animate-cascade-1" },
  { id: 2, title: "Birthday Joy", img: "/images/birthday1.jpg", classAnim: "animate-cascade-2" },
  { id: 3, title: "The Memorable Night", img: "/images/night-memory.jpg", classAnim: "animate-cascade-3" },
  { id: 4, title: "Bike Ride Adventures", img: "/images/bike_ride.jpg", classAnim: "animate-cascade-4" },
  { id: 5, title: "Hand Art & Silly Jokes", img: "/images/hand_art.jpg", classAnim: "animate-cascade-5" },
  { id: 6, title: "Pure Sisterly Care", img: "/images/maa_wrist.png", classAnim: "animate-cascade-6" },
];

export const Letter: React.FC = () => {
  const [surpriseOpen, setSurpriseOpen] = useState(false);
  const [experienceStage, setExperienceStage] = useState<'locked' | 'unfolding' | 'cascade' | 'climax'>('locked');

  const handleOpenSurprise = () => {
    setSurpriseOpen(true);
    setExperienceStage('locked');

    // Stage 1 -> 2: Golden Wax Seal Breaks & 3D Chest Unfolds (0.8s)
    setTimeout(() => {
      setExperienceStage('unfolding');
      try {
        confetti({
          particleCount: 45,
          spread: 70,
          origin: { y: 0.5 },
          colors: ['#D4AF37', '#FAF3E0', '#F7E6E8']
        });
      } catch {
        // ignore
      }
    }, 800);

    // Stage 2 -> 3: 3D Holographic Memories Fan Upwards into Gallery (2.2s)
    setTimeout(() => {
      setExperienceStage('cascade');
      try {
        confetti({
          particleCount: 65,
          spread: 85,
          origin: { y: 0.55 },
          colors: ['#D4AF37', '#9B5DE5', '#C87D88', '#FBF4DE']
        });
      } catch {
        // ignore
      }
    }, 2200);

    // Stage 3 -> 4: The Grand Heartfelt Parchment Rises to the Front (4.2s)
    setTimeout(() => {
      setExperienceStage('climax');
      try {
        confetti({
          particleCount: 110,
          spread: 100,
          origin: { y: 0.6 },
          colors: ['#D4AF37', '#C87D88', '#6C2231', '#FFD700', '#F7E6E8', '#9B5DE5']
        });
      } catch {
        // ignore
      }
    }, 4200);
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
            🌟 UNIQUE 3D ROYAL GIFT CHEST & HOLOGRAPHIC CASCADE EXPERIENCE
            ✨ 3D Gift Box Unfold | 🖼️ Holographic Memory Fan | 💜 Climax Parchment Rise
            ========================================================================== */}
        {surpriseOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 select-none animate-fade-in [animation-duration:400ms]">
            
            {/* Depth of Field Backdrop: Deep Royal Plum & Gold Theater */}
            <div
              onClick={handleCloseSurprise}
              className="absolute inset-0 bg-[#0F040E]/92 backdrop-blur-xl transition-opacity duration-700"
            />

            {/* Radiant Ambient Light Beam */}
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-all duration-1000 ${
                experienceStage === 'cascade' || experienceStage === 'climax'
                  ? 'w-[520px] h-[520px] sm:w-[680px] sm:h-[680px] bg-radial from-[#D4AF37]/45 via-[#842D3D]/30 to-transparent blur-3xl opacity-100 scale-125'
                  : 'w-72 h-72 bg-radial from-[#D4AF37]/25 via-[#C87D88]/20 to-transparent blur-2xl opacity-75 scale-100'
              }`}
            />

            {/* Close Button */}
            <button
              onClick={handleCloseSurprise}
              className="absolute top-5 right-5 z-30 text-[#FAF6F0]/70 hover:text-[#FAF6F0] transition-colors p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md cursor-pointer"
              aria-label="Close surprise"
            >
              <X className="w-5 h-5" />
            </button>

            {/* 3D Perspective Stage */}
            <div className="relative z-20 max-w-xl w-full flex flex-col items-center justify-center perspective-1400 text-center">

              {/* 1. Floating 3D Royal Keepsake Heart */}
              {(experienceStage === 'locked' || experienceStage === 'unfolding') && (
                <div className="animate-gift-box-emerge transform-style-3d flex flex-col items-center py-6">
                  <div className="relative flex flex-col items-center justify-center space-y-5">
                    
                    {/* 3D Radiant Heart Jewel Container */}
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center transform-style-3d">
                      
                      {/* Outer 3D Heart Aura Ring */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#D4AF37]/50 via-[#842D3D]/30 to-[#9B5DE5]/30 blur-xl animate-pulse-glow" />

                      {/* 3D Royal Heart Emblem */}
                      <div
                        className={`relative z-10 w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-br from-[#6C2231] via-[#842D3D] to-[#4A1520] border-3 border-[#D4AF37] shadow-[0_15px_40px_rgba(212,175,55,0.6)] flex items-center justify-center transform-style-3d ${
                          experienceStage === 'unfolding' ? 'animate-wax-seal-burst scale-110' : 'animate-float'
                        }`}
                      >
                        {/* Inner Golden Ring */}
                        <div className="w-28 h-28 sm:w-34 sm:h-34 rounded-full border border-[#D4AF37]/50 flex items-center justify-center bg-radial from-[#9B5DE5]/20 via-[#4A1520] to-[#25070E] shadow-inner">
                          <Heart className="w-16 h-16 sm:w-20 sm:h-20 fill-[#D4AF37] text-[#FAF6F0] drop-shadow-[0_8px_20px_rgba(212,175,55,0.9)] animate-pulse" />
                        </div>

                        {/* Floating Sparkles on Heart */}
                        <Sparkles className="absolute top-2 right-4 w-5 h-5 text-[#FAF6F0] animate-spin [animation-duration:5s]" />
                        <Sparkles className="absolute bottom-3 left-4 w-4 h-4 text-[#D4AF37] animate-bounce [animation-duration:2.5s]" />
                      </div>
                    </div>

                    {/* Title & Status */}
                    <div className="space-y-1.5 text-center">
                      <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#D4AF37] flex items-center justify-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>A Special Brother's Keepsake</span>
                        <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                      </span>
                      <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-white tracking-wide">
                        {experienceStage === 'locked' ? "Unlocking Your Heart Keepsake... ❤️" : "Opening Sealed Memories... ✨"}
                      </h3>
                    </div>

                  </div>
                </div>
              )}

              {/* 2. 3D Floating Holographic Memory Cascade Gallery (Active during 'cascade') */}
              {experienceStage === 'cascade' && (
                <div className="relative w-full h-72 sm:h-80 flex items-center justify-center transform-style-3d">
                  {keepsakeGalleryMemories.map((m) => (
                    <div
                      key={m.id}
                      className={`absolute flex flex-col items-center justify-center ${m.classAnim}`}
                    >
                      <div className="polaroid-frame bg-white p-1.5 rounded-xs shadow-[0_15px_30px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform duration-300 border border-[#D4AF37]/70">
                        <ImageWithFallback
                          src={m.img}
                          alt={m.title}
                          aspectRatio="square"
                          objectFit="cover"
                          className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xs"
                        />
                        <span className="text-[10px] font-handwritten text-[#6C2231] font-bold block text-center truncate max-w-[90px] mt-0.5">
                          {m.title}
                        </span>
                      </div>
                    </div>
                  ))}

                  <div className="absolute bottom-2 inset-x-0 text-center animate-fade-in">
                    <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold bg-black/60 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 backdrop-blur-md">
                      ✦ Unfurling 3 Unforgettable Years ✦
                    </span>
                  </div>
                </div>
              )}

              {/* 3. The Grand Heartfelt Climax Parchment (Active during 'climax') */}
              {experienceStage === 'climax' && (
                <div className="animate-parchment-rise transform-style-3d w-full space-y-4">
                  <div className="relative p-6 sm:p-9 rounded-3xl bg-gradient-to-b from-[#250C15] via-[#1A070E] to-[#120409] border-2 border-[#D4AF37] shadow-[0_0_50px_rgba(212,175,55,0.6)] text-left space-y-4">
                    
                    {/* Top Header */}
                    <div className="flex items-center justify-between border-b border-[#D4AF37]/30 pb-2.5">
                      <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#FBF4DE] text-[11px] font-bold uppercase tracking-widest">
                        <Shield className="w-3 h-3 text-[#D4AF37]" />
                        <span>To My Dearest Akkaaa 🌸</span>
                      </div>
                      <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                    </div>

                    {/* Big Heartfelt Reveal */}
                    <div className="py-2 border-y border-[#D4AF37]/20 bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent text-center">
                      <h3 className="font-serif-heading text-3xl sm:text-5xl font-bold text-[#FFFDF9] tracking-tight filter drop-shadow-md">
                        I Love youu Bangaramm <span className="text-[#D4AF37]">❤️</span>
                      </h3>
                    </div>

                    {/* Narrative Message */}
                    <div className="space-y-3 text-sm sm:text-base text-gray-200 font-sans leading-relaxed">
                      <p className="font-serif-heading italic text-base sm:text-lg text-[#FBF4DE]">
                        “I didn't buy you a gift this year, so I built you a whole website instead.”
                      </p>
                      <p>
                        No matter how many silly names I call you or where life takes us, in my heart, you will always be my dearest <strong className="font-serif-heading text-lg text-[#D4AF37]">Akkaaa</strong>—my safe place, my guide, and my true family.
                      </p>
                    </div>

                    {/* Footer Signature */}
                    <div className="pt-3 border-t border-[#D4AF37]/25 flex items-center justify-between">
                      <p className="font-handwritten text-2xl sm:text-3xl text-[#E9D5FF] font-bold">
                        Always & Forever, Akkaaa ✨
                      </p>
                      <span className="font-serif-heading italic text-[#D4AF37] text-sm sm:text-base font-semibold">
                        — Always your brother Chethan ❤️
                      </span>
                    </div>

                  </div>

                  {/* Cherish Button */}
                  <div className="pt-2 flex items-center justify-center">
                    <button
                      onClick={handleCloseSurprise}
                      className="px-8 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E2C055] text-[#241126] font-sans font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
                    >
                      Cherish This Forever ❤️
                    </button>
                  </div>
                </div>
              )}

            </div>

          </div>
        )}

      </div>
    </PageTransition>
  );
};
