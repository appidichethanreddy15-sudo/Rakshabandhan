import React, { useState } from 'react';
import { PageTransition } from '../components/PageTransition';
import { birthdayData, type BirthdayPhoto } from '../data/birthdayData';
import { PolaroidCard } from '../components/PolaroidCard';
import { Cake, Sparkles, X, Quote } from 'lucide-react';
import { WashiTape } from '../components/WashiTape';
import { ImageWithFallback } from '../components/ImageWithFallback';

export const Birthday: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<BirthdayPhoto | null>(null);

  return (
    <PageTransition>
      <div className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#FBF4DE] text-[#6C2231] border border-[#D4AF37]/30 text-xs font-semibold uppercase tracking-widest mb-4">
            <Cake className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Dedicated Birthday Chapter</span>
          </div>

          <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold text-[#6C2231] tracking-tight mb-4">
            {birthdayData.title}
          </h1>

          <p className="font-serif-heading italic text-xl sm:text-2xl text-[#524749] max-w-2xl mx-auto">
            “{birthdayData.subtitle}”
          </p>
        </div>

        {/* Emotional Reflection Card */}
        <div className="relative paper-parchment rounded-3xl p-6 sm:p-10 border border-[#C87D88]/30 shadow-md mb-14 text-left">
          <div className="absolute -top-3 left-12">
            <WashiTape color="pink" rotation="-rotate-2" />
          </div>

          <div className="flex items-center gap-2 text-xs text-[#7E7275] mb-3">
            <Quote className="w-5 h-5 text-[#C87D88]" />
            <span className="font-bold uppercase tracking-wider">A Brother's Reflection</span>
          </div>

          <p className="font-sans text-base sm:text-lg text-[#2D2426] leading-relaxed mb-4 whitespace-pre-line">
            {birthdayData.reflection}
          </p>

          <div className="pt-4 border-t border-dashed border-[#C87D88]/30 flex items-center justify-between">
            <span className="font-handwritten text-2xl text-[#6C2231]">
              Seeing you smile made the entire celebration unforgettable.
            </span>
            <Sparkles className="w-5 h-5 text-[#D4AF37]" />
          </div>
        </div>

        {/* Scrapbook Collage Grid */}
        <div className="mb-14">
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="h-px w-12 bg-[#C87D88]/40" />
            <span className="font-serif-heading text-xl font-bold text-[#6C2231]">
              Birthday Snapshots & Memories
            </span>
            <span className="h-px w-12 bg-[#C87D88]/40" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {birthdayData.photos.map((photo, index) => (
              <div key={photo.id} className="flex justify-center">
                <PolaroidCard
                  image={photo.image}
                  caption={photo.caption}
                  date={photo.date}
                  rotation={photo.rotation}
                  tapeColor={index % 2 === 0 ? 'gold' : 'lavender'}
                  onClick={() => setSelectedPhoto(photo)}
                  aspectRatio="square"
                  className="w-full max-w-sm"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Sweet Note Banner */}
        <div className="paper-texture rounded-2xl p-6 border border-[#D4AF37]/30 text-center max-w-2xl mx-auto">
          <p className="font-handwritten text-2xl text-[#6C2231] leading-relaxed">
            “No matter how many birthdays pass by, you will always be my little Bangarammmm to cheer for.”
          </p>
        </div>

        {/* Modal for larger birthday story view */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2D2426]/60 backdrop-blur-sm animate-fade-in"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="relative max-w-lg w-full paper-parchment rounded-2xl p-6 sm:p-8 border border-[#C87D88]/40 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                aria-label="Close photo view"
                className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-[#F7E6E8] text-[#6C2231] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="polaroid-frame rounded-sm bg-white shadow-md mb-4">
                <ImageWithFallback
                  src={selectedPhoto.image}
                  alt={selectedPhoto.caption}
                  aspectRatio="square"
                  className="max-h-[320px]"
                />
              </div>

              <h3 className="font-serif-heading text-2xl font-bold text-[#6C2231] mb-2">
                {selectedPhoto.caption}
              </h3>

              <p className="text-base text-[#2D2426] leading-relaxed font-sans mb-4">
                {selectedPhoto.story}
              </p>

              <div className="pt-3 border-t border-dashed border-[#C87D88]/30 flex items-center justify-between text-xs text-[#7E7275]">
                <span className="font-handwritten text-lg text-[#6C2231]">
                  Birthday Keepsake ❤️
                </span>
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="font-semibold uppercase tracking-wider text-[#6C2231]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </PageTransition>
  );
};
