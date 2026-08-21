import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { meaningCards } from '../data/meaningData';
import { RevealCard } from '../components/RevealCard';
import { Heart, Sparkles } from 'lucide-react';

export const Meaning: React.FC = () => {
  return (
    <PageTransition>
      <div className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#F7E6E8] text-[#6C2231] text-xs font-semibold uppercase tracking-widest mb-4">
            <Heart className="w-3.5 h-3.5 fill-[#6C2231]" />
            <span>Interactive Role Cards</span>
          </div>

          <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold text-[#6C2231] tracking-tight mb-3">
            What You Mean to Me
          </h1>

          <p className="font-handwritten text-2xl sm:text-3xl text-[#524749] max-w-xl mx-auto">
            You play so many roles in my life, Bangarammmm. Tap any card below to flip it and read what you mean to me.
          </p>
        </div>

        {/* Cards Stacked One Below Another (Vertical Layout) */}
        <div className="flex flex-col items-center gap-8 w-full">
          {meaningCards.map((item, index) => (
            <div key={item.id} className="w-full flex justify-center">
              <RevealCard item={item} index={index} />
            </div>
          ))}
        </div>

        {/* Bottom Sibling Quote */}
        <div className="mt-16 text-center max-w-2xl mx-auto p-8 rounded-3xl paper-parchment border border-[#D4AF37]/30 shadow-xs">
          <Sparkles className="w-5 h-5 text-[#D4AF37] mx-auto mb-3" />
          <p className="font-serif-heading italic text-xl sm:text-2xl text-[#6C2231] leading-relaxed">
            “You are not just one thing to me. You are all of these, every single day.”
          </p>
          <span className="font-handwritten text-xl text-[#7E7275] block mt-2">
            — Forever grateful for you, Bangarammmm
          </span>
        </div>

      </div>
    </PageTransition>
  );
};
