import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { sequentialMemories, type StoryMemory } from '../data/memories';
import { WashiTape } from '../components/WashiTape';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { NicknamesSection } from '../components/NicknamesSection';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';

export const Memories: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const totalSteps = sequentialMemories.length;

  // Read current step from search param (1 to totalSteps)
  const stepParam = parseInt(searchParams.get('step') || '1', 10);
  const currentStep = isNaN(stepParam) || stepParam < 1 || stepParam > totalSteps ? 1 : stepParam;

  const prevStepRef = useRef(currentStep);
  const [turnDirection, setTurnDirection] = useState<'forward' | 'backward'>('forward');
  const [isTurnAnimActive, setIsTurnAnimActive] = useState(false);
  const [displayedMemory, setDisplayedMemory] = useState<StoryMemory>(
    sequentialMemories[currentStep - 1] || sequentialMemories[0]
  );

  useEffect(() => {
    const isForward = currentStep >= prevStepRef.current;
    setTurnDirection(isForward ? 'forward' : 'backward');
    prevStepRef.current = currentStep;

    setIsTurnAnimActive(true);
    setDisplayedMemory(sequentialMemories[currentStep - 1] || sequentialMemories[0]);

    const timer = setTimeout(() => {
      setIsTurnAnimActive(false);
    }, 600);

    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => clearTimeout(timer);
  }, [currentStep]);

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setSearchParams({ step: (currentStep + 1).toString() });
    } else {
      // Final step continues to Special Moments chapter
      navigate('/moments');
    }
  };

  return (
    <PageTransition>
      <div className="py-8 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto flex flex-col items-center min-h-[75vh] justify-between perspective-1200 overflow-hidden">
        
        {/* Subtle Scrapbook Progress Indicator */}
        <div className="w-full flex items-center justify-between mb-6 pb-3 border-b border-[#C87D88]/20">
          <div className="flex items-center gap-1.5 text-xs text-[#7E7275] font-sans font-medium uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Memory {displayedMemory.sectionNumber} of {totalSteps}</span>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {sequentialMemories.map((m) => (
              <button
                key={m.id}
                onClick={() => setSearchParams({ step: m.sectionNumber.toString() })}
                aria-label={`Jump to memory ${m.sectionNumber}`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  m.sectionNumber === displayedMemory.sectionNumber
                    ? 'bg-[#6C2231] scale-125 shadow-xs'
                    : m.sectionNumber < displayedMemory.sectionNumber
                    ? 'bg-[#D4AF37]/80'
                    : 'bg-[#C87D88]/25 hover:bg-[#C87D88]/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* 3D Memory Book Page Container */}
        <div
          key={displayedMemory.id}
          className={`w-full flex flex-col items-center text-center transform-style-3d relative ${
            isTurnAnimActive
              ? turnDirection === 'forward'
                ? 'memory-turn-forward-in'
                : 'memory-turn-backward-in'
              : ''
          }`}
        >
          {displayedMemory.isNicknames ? (
            /* Specialized Interactive 3D Nicknames Section */
            <NicknamesSection
              image={displayedMemory.image}
              onNext={handleNext}
            />
          ) : (
            /* Standard Storytelling Memory Card */
            <>
              {/* 1. Large Photograph in Polaroid Scrapbook Frame */}
              <div className="relative inline-block max-w-sm sm:max-w-md mx-auto my-2">
                {/* Top Washi Tape */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                  <WashiTape
                    color={displayedMemory.sectionNumber % 2 === 0 ? 'gold' : 'pink'}
                    rotation={displayedMemory.sectionNumber % 2 === 0 ? 'rotate-1' : '-rotate-2'}
                  />
                </div>

                <div className="polaroid-frame rounded-sm bg-white shadow-xl hover:rotate-0 transition-transform duration-500 overflow-hidden">
                  <ImageWithFallback
                    src={displayedMemory.image}
                    alt={displayedMemory.title}
                    aspectRatio="auto"
                    objectFit="contain"
                    className="rounded-xs max-h-[560px] sm:max-h-[620px] w-auto h-auto mx-auto"
                  />
                </div>
              </div>

              {/* 2. Date Below Photograph (Only if date is provided) */}
              {displayedMemory.date && (
                <div className="mt-4">
                  <span className="font-handwritten text-xl sm:text-2xl text-[#7E7275] tracking-wide">
                    {displayedMemory.date}
                  </span>
                </div>
              )}

              {/* 3. Short Emotional Title */}
              <h2 className="font-serif-heading text-2xl sm:text-4xl font-bold text-[#6C2231] tracking-tight leading-snug mt-3 mb-4 max-w-2xl px-2">
                {displayedMemory.title}
              </h2>

              {/* 4. Personal Paragraph Story */}
              <div className="paper-parchment rounded-2xl p-6 sm:p-8 border border-[#C87D88]/25 shadow-xs max-w-2xl w-full text-left my-2">
                <p className="font-sans text-base sm:text-lg text-[#2D2426] leading-relaxed whitespace-pre-line first-letter:font-serif-heading first-letter:text-3xl first-letter:font-bold first-letter:text-[#6C2231] first-letter:mr-1">
                  {displayedMemory.story}
                </p>
              </div>

              {/* Optional Closing Note on Final Section */}
              {displayedMemory.closingNote && (
                <div className="my-4 text-center">
                  <p className="font-handwritten text-2xl sm:text-3xl text-[#6C2231] flex items-center justify-center gap-2">
                    <Heart className="w-5 h-5 fill-[#6C2231]/20 text-[#6C2231]" />
                    <span>{displayedMemory.closingNote}</span>
                  </p>
                </div>
              )}

              {/* 5. Button to Continue to Next Memory */}
              <div className="mt-8 mb-4 w-full sm:w-auto">
                <button
                  onClick={handleNext}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#6C2231] to-[#842D3D] text-[#FAF6F0] font-sans font-semibold text-base shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer group border border-[#D4AF37]/30"
                >
                  <span>{displayedMemory.buttonText}</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </>
          )}

        </div>

      </div>
    </PageTransition>
  );
};
