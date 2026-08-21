import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { RakhiInteraction } from '../components/RakhiInteraction';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { WashiTape } from '../components/WashiTape';
import { Sparkles, Shield, Compass, Calendar } from 'lucide-react';

export const Rakhi: React.FC = () => {
  return (
    <PageTransition>
      <div className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#F7E6E8] text-[#6C2231] text-xs font-semibold uppercase tracking-widest mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>Chapter 6 • Sacred Raksha Bandhan Keepsake</span>
          </div>

          <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold text-[#6C2231] tracking-tight mb-3">
            Last Year's Rakhi & Forever Promise
          </h1>

          <p className="font-handwritten text-2xl sm:text-3xl text-[#524749]">
            The moment you tied that sacred thread on my wrist, you became my sister forever.
          </p>
        </div>

        {/* Featured Section: Last Year's Rakhi Memory with Your Photo */}
        <div className="relative paper-parchment rounded-3xl p-6 sm:p-10 border border-[#C87D88]/30 shadow-md mb-16">
          <div className="absolute -top-3 left-10 z-10">
            <WashiTape color="gold" rotation="-rotate-1" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Featured Photo of the Real Rakhi */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="polaroid-frame rounded-sm bg-white shadow-xl rotate-1 hover:rotate-0 transition-transform max-w-sm w-full">
                <ImageWithFallback
                  src="/images/rakhi.jpg"
                  alt="Last year's Rakhi on my wrist"
                  aspectRatio="auto"
                  className="rounded-xs max-h-[380px] w-full object-contain bg-[#FAF6F0]"
                />
                <div className="mt-3 text-center px-1">
                  <span className="text-[11px] uppercase tracking-wider text-[#7E7275] font-semibold block mb-0.5">
                    Raksha Bandhan Keepsake
                  </span>
                  <p className="font-handwritten text-xl text-[#6C2231]">
                    “The sacred thread that sealed our bond.”
                  </p>
                </div>
              </div>
            </div>

            {/* Emotional Narrative */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="flex items-center gap-2 text-xs text-[#7E7275]">
                <Calendar className="w-3.5 h-3.5 text-[#C87D88]" />
                <span className="font-bold uppercase tracking-wider">A Memory I Will Never Forget</span>
              </div>

              <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#6C2231] leading-tight">
                When You Tied That Rakhi
              </h2>

              <p className="text-base sm:text-lg text-[#2D2426] leading-relaxed font-sans font-normal">
                When you tied that Rakhi on my wrist last year, it wasn't just a traditional custom or a simple ritual. For me, it was the moment our unspoken sibling relationship became absolute truth.
              </p>

              <p className="text-base sm:text-lg text-[#2D2426] leading-relaxed font-sans font-normal">
                We weren't born under the same roof, and we didn't share childhood toys. But when you tied that thread, you gave me the honor of being your brother, your protector, and your lifelong cheerleader. It is a moment etched deeply into my memory, and one I will cherish for as long as I live.
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs text-[#6C2231] font-semibold">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span>Unconditional trust, protection, and sisterly love.</span>
              </div>
            </div>

          </div>
        </div>

        {/* Section 2: This Year & Missing Her */}
        <div className="relative paper-texture rounded-3xl p-6 sm:p-10 border border-[#D4AF37]/40 shadow-sm mb-16 bg-gradient-to-br from-[#FFFDF9] via-[#FAF6F0] to-[#FDF2F4] text-left">
          <div className="absolute -top-3 right-12 z-10">
            <WashiTape color="pink" rotation="rotate-2" />
          </div>

          <div className="flex items-center gap-2 text-xs text-[#C87D88] font-bold uppercase tracking-wider mb-2">
            <Compass className="w-4 h-4" />
            <span>Across The Distance • This Year's Raksha Bandhan</span>
          </div>

          <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#6C2231] mb-4">
            Even Though I Am Far Away This Year...
          </h3>

          <div className="space-y-4 text-base sm:text-lg text-[#2D2426] leading-relaxed font-sans">
            <p>
              This year, I am far away from you. I miss being around you, and I genuinely wish I could be standing right in front of you so you could tie another Rakhi on my wrist in person.
            </p>
            <p>
              I miss the laughter, the teasing, and creating another festive memory together. But I want to remind you that physical distance is only geographical. It cannot touch or weaken the bond we have spent three years building with pure trust and understanding.
            </p>
            <p className="font-serif-heading italic text-xl text-[#6C2231] font-medium pt-2">
              “Distance cannot change what you mean to me. You are my sister today, and you will be my sister always.”
            </p>
          </div>
        </div>

        {/* Section 3: Interactive Rakhi Tying Ceremony */}
        <div className="mb-12">
          <div className="text-center mb-6">
            <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#6C2231]">
              Tie Our Digital Rakhi
            </h3>
            <p className="font-handwritten text-xl text-[#7E7275] mt-1">
              Tap the button below to renew our sacred thread and brotherly promise.
            </p>
          </div>

          <RakhiInteraction />
        </div>

      </div>
    </PageTransition>
  );
};
