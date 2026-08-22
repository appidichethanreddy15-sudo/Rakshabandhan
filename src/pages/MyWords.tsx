import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { ParagraphCard } from '../components/ParagraphCard';
import { Sparkles, BookOpen, Heart } from 'lucide-react';
import { WashiTape } from '../components/WashiTape';
import { ImageWithFallback } from '../components/ImageWithFallback';

export const MyWords: React.FC = () => {
  return (
    <PageTransition>
      <div className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        
        {/* Page Intro Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#F7E6E8] text-[#6C2231] text-xs font-semibold uppercase tracking-widest mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Chapter 2 • Words From My Heart</span>
          </div>

          <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold text-[#6C2231] tracking-tight mb-3">
            Words From My Heart
          </h1>

          <p className="font-handwritten text-2xl sm:text-3xl text-[#524749]">
            Things I wanted to write down and tell you directly, Bangarammmm.
          </p>
        </div>

        {/* Minimized Emotional Paragraph Card (4-5 lines) */}
        <div className="my-8">
          <ParagraphCard
            number="A LETTER TO MY SISTER"
            handwrittenNote="Three years of an unbreakable bond."
            tapeColor="gold"
            tapeRotation="-rotate-1"
            hasBookmark={true}
          >
            <p className="font-sans text-base sm:text-lg text-[#2D2426] leading-relaxed">
              Three years ago, you entered my life as a stranger, and somewhere between everyday conversations, shared routines, silly arguments, and heartfelt moments, you became my real sister. We’ve had our misunderstandings, but across more than a thousand days, we never let anything break our bond. You have been the light in my darkest days, my safe space, and my greatest comfort. Bangarammmm, no matter where life takes us, you will always be irreplaceable to me.
            </p>
          </ParagraphCard>
        </div>

        {/* Polaroid Photo with User's Real Photo */}
        <div className="relative max-w-md mx-auto my-10">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
            <WashiTape color="pink" rotation="rotate-1" />
          </div>
          <div className="polaroid-frame rounded-sm bg-white shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500 overflow-hidden">
            <ImageWithFallback
              src="/images/small.png"
              alt="Quiet moments together"
              aspectRatio="auto"
              objectFit="contain"
              className="max-h-[500px] w-full rounded-xs bg-black"
            />
            <div className="mt-3 text-center">
              <span className="font-handwritten text-xl sm:text-2xl text-[#6C2231]">
                “Somewhere between random talks, you became my everyday person.”
              </span>
            </div>
          </div>
        </div>

        {/* Sibling Closing Note */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#F7E6E8]/70 via-[#FFFDF9] to-[#FBF4DE]/60 border border-[#C87D88]/30 text-center">
          <Sparkles className="w-5 h-5 text-[#D4AF37] mx-auto mb-2" />
          <p className="font-serif-heading italic text-xl sm:text-2xl text-[#6C2231] max-w-xl mx-auto leading-relaxed">
            “No distance, no argument, and no amount of time can ever change the place you have in my heart.”
          </p>
          <span className="font-handwritten text-xl text-[#524749] flex items-center justify-center gap-1.5 mt-3">
            <Heart className="w-4 h-4 fill-[#6C2231]/20 text-[#6C2231]" /> Always your brother
          </span>
        </div>

      </div>
    </PageTransition>
  );
};
