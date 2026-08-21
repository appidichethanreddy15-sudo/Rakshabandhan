import React, { useState } from 'react';
import { PageTransition } from '../components/PageTransition';
import { letterData } from '../data/letterData';
import { WashiTape } from '../components/WashiTape';
import { Sparkles, Heart, Star, Gift, X } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Letter: React.FC = () => {
  const [surpriseOpen, setSurpriseOpen] = useState(false);

  const handleOpenSurprise = () => {
    setSurpriseOpen(true);
    // Fire festive celebration confetti
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#C87D88', '#6C2231', '#FFD700', '#F7E6E8']
    });
  };

  return (
    <PageTransition>
      <div className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">

        {/* Page Intro Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#F7E6E8] text-[#6C2231] text-xs font-semibold uppercase tracking-widest mb-4">
            <Heart className="w-3.5 h-3.5 fill-[#6C2231]/30" />
            <span>Chapter 7 • Final Wishes</span>
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
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#C87D88] to-[#6C2231] text-white font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer group"
          >
            <Gift className="w-6 h-6 text-[#FBF4DE] group-hover:rotate-12 transition-transform" />
            <span>One Last Thing... 👀</span>
            <Sparkles className="w-5 h-5 text-[#FBF4DE]" />
          </button>
        </div>

        {/* Final Surprise Modal / Overlay */}
        {surpriseOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#2D2426]/70 backdrop-blur-md animate-fade-in"
            onClick={() => setSurpriseOpen(false)}
          >
            <div
              className="relative max-w-xl w-full paper-parchment rounded-3xl p-8 sm:p-12 border-2 border-[#D4AF37] shadow-2xl text-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSurpriseOpen(false)}
                aria-label="Close surprise"
                className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-[#F7E6E8] text-[#6C2231] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#6C2231] to-[#C87D88] flex items-center justify-center mx-auto mb-4 shadow-md text-[#FBF4DE] border-2 border-[#D4AF37]">
                <Heart className="w-8 h-8 fill-[#D4AF37] text-[#D4AF37] animate-pulse" />
              </div>

              <div className="mb-2">
                <span className="inline-block px-3.5 py-1 rounded-full bg-[#F7E6E8] text-[#6C2231] font-sans font-bold text-xs uppercase tracking-widest border border-[#C87D88]/30">
                  To My Dearest Akkaaa 🌸
                </span>
              </div>

              <h2 className="font-serif-heading text-base sm:text-lg font-medium text-[#7E7275] mb-2">
                {letterData.finalSurprise.title}
              </h2>

              {/* Big Heartfelt Confession */}
              <div className="my-5 py-4 border-y border-[#C87D88]/20 bg-gradient-to-r from-transparent via-[#F7E6E8]/40 to-transparent">
                <h3 className="font-serif-heading text-3xl sm:text-5xl font-bold text-[#6C2231] tracking-tight filter drop-shadow-xs">
                  I Love youu Bangaramm <span className="text-[#C87D88]">❤️</span>
                </h3>
              </div>

              <div className="space-y-3 text-base sm:text-lg text-[#2D2426] leading-relaxed font-sans">
                <p>
                  No matter how many silly names I call you or where life takes us, in my heart, you will always be my dearest <strong className="font-serif-heading text-xl text-[#6C2231]">Akkaaa</strong>—my safe place, my guide, and my true family.
                </p>
                <p className="font-handwritten text-3xl sm:text-4xl text-[#6C2231] font-bold pt-2">
                  Always & Forever, Akkaaa ✨
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-dashed border-[#D4AF37]/40 flex items-center justify-center gap-2">
                <Star className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                <span className="font-serif-heading italic text-[#6C2231] text-lg font-semibold">
                  Always your brother ❤️
                </span>
                <Star className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
              </div>
            </div>
          </div>
        )}

      </div>
    </PageTransition>
  );
};
