import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { specialMoments, hiddenCards } from '../data/specialMoments';
import { HiddenSecretCard } from '../components/HiddenSecretCard';
import { Sparkles, Moon, Heart, Lock } from 'lucide-react';
import { ImageWithFallback } from '../components/ImageWithFallback';

export const Moments: React.FC = () => {
  const nightMemory = specialMoments.find((m) => m.id === 'night-memory');

  return (
    <PageTransition>
      <div className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#FAF6F0] border border-[#C87D88]/30 text-[#6C2231] text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Chapter 4 • Special Moments</span>
          </div>

          <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold text-[#6C2231] tracking-tight mb-3">
            Special Moments We Shared
          </h1>

          <p className="font-handwritten text-2xl sm:text-3xl text-[#524749]">
            The little secrets and unforgettable chapters from our three years.
          </p>
        </div>

        {/* Feature 1: The Memorable Night (Nighttime Atmosphere Card) */}
        {nightMemory && (
          <div className="mb-16">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#241E2F] to-[#171320] text-[#FAF6F0] p-6 sm:p-10 md:p-12 shadow-2xl border border-[#D4AF37]/30">
              
              {/* Starry Night Sky Accents */}
              <div className="absolute top-4 right-6 flex items-center gap-1.5 text-xs text-[#D4AF37] font-semibold uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full backdrop-blur-xs">
                <Moon className="w-3.5 h-3.5" />
                <span>A Wholesome Sibling Memory</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Visual Frame */}
                <div className="lg:col-span-5">
                  <div className="polaroid-frame rounded-sm bg-[#FAF6F0] p-2 text-[#2D2426] shadow-lg -rotate-1 hover:rotate-0 transition-transform overflow-hidden">
                    <ImageWithFallback
                      src="/images/night-memory.jpg"
                      alt="The memorable night"
                      aspectRatio="auto"
                      objectFit="contain"
                      className="rounded-xs max-h-[280px] w-full bg-black/95"
                    />
                    <div className="mt-2 text-center">
                      <span className="font-handwritten text-xl text-[#6C2231]">
                        “A night of comfort, trust & quiet peace.”
                      </span>
                    </div>
                  </div>
                </div>

                {/* Night Story Narrative */}
                <div className="lg:col-span-7 space-y-4 text-left">
                  <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
                    Chapter of Pure Trust
                  </span>

                  <h2 className="font-serif-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                    {nightMemory.title}
                  </h2>

                  <p className="font-handwritten text-2xl text-[#E8C872]">
                    “{nightMemory.preview}”
                  </p>

                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-sans font-light">
                    {nightMemory.fullStory}
                  </p>

                  <div className="pt-3 flex items-center gap-2 text-xs text-gray-400 border-t border-white/10">
                    <Heart className="w-3.5 h-3.5 text-[#C87D88] fill-[#C87D88]" />
                    <span>Pure comfort, trust, and brotherly affection.</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* Feature 2: Hidden Memory Cards (3 Secret Wax-Sealed Cards) */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF6F0] border border-[#D4AF37]/40 text-[#6C2231] text-xs font-bold uppercase tracking-widest mb-2">
              <Lock className="w-3 h-3 text-[#D4AF37]" />
              <span>Surprise Sealed Notes</span>
            </div>
            <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#6C2231]">
              Three Things I Kept in My Heart
            </h2>
            <p className="font-handwritten text-xl text-[#7E7275] mt-1">
              Tap each sealed card to reveal what I never said out loud.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hiddenCards.map((card) => (
              <HiddenSecretCard key={card.id} card={card} />
            ))}
          </div>
        </div>

      </div>
    </PageTransition>
  );
};
