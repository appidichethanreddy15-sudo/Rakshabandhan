import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { sequentialMemories, type StoryMemory } from '../data/memories';
import { WashiTape } from '../components/WashiTape';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { NicknamesSection } from '../components/NicknamesSection';
import { MemoryTunnelTransition } from '../components/MemoryTunnelTransition';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';

// Renders a story paragraph, optionally highlighting a specific sentence with emotional accent styling
function renderStory(story: string, highlight?: string) {
  if (!highlight || !story.includes(highlight)) {
    return (
      <p className="font-sans text-base sm:text-lg text-[#2D2426] leading-relaxed whitespace-pre-line first-letter:font-serif-heading first-letter:text-3xl first-letter:font-bold first-letter:text-[#6C2231] first-letter:mr-1">
        {story}
      </p>
    );
  }

  const parts = story.split(highlight);
  return (
    <p className="font-sans text-base sm:text-lg text-[#2D2426] leading-relaxed first-letter:font-serif-heading first-letter:text-3xl first-letter:font-bold first-letter:text-[#6C2231] first-letter:mr-1">
      {parts[0]}
      <span
        className="italic"
        style={{
          fontFamily: "'Georgia', 'Times New Roman', serif",
          color: '#8B2A3A',
          textShadow: '0 0 18px rgba(196,108,130,0.35)',
          letterSpacing: '0.01em',
          fontWeight: 500,
        }}
      >
        {highlight}
      </span>
      {parts[1]}
    </p>
  );
}

// Easily configurable memory steps that trigger the 3D Memory Tunnel transition
// (e.g. Step 3 -> Step 4, and Step 5 -> Step 6)
const TUNNEL_STEP_TRANSITIONS = [3, 5];

export const Memories: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const totalSteps = sequentialMemories.length;

  // Read current step from search param (1 to totalSteps)
  const stepParam = parseInt(searchParams.get('step') || '1', 10);
  const currentStep = isNaN(stepParam) || stepParam < 1 || stepParam > totalSteps ? 1 : stepParam;

  const prevStepRef = useRef(currentStep);
  const [turnDirection, setTurnDirection] = useState<'forward' | 'backward'>('forward');
  const [turnStage, setTurnStage] = useState<'idle' | 'lifting' | 'turningOut' | 'turningIn'>('idle');
  const [isPhotoLifting, setIsPhotoLifting] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  // 3D Memory Tunnel State
  const [isTunnelActive, setIsTunnelActive] = useState(false);
  const [tunnelTargetStep, setTunnelTargetStep] = useState<number | null>(null);

  const [displayedMemory, setDisplayedMemory] = useState<StoryMemory>(
    sequentialMemories[currentStep - 1] || sequentialMemories[0]
  );

  useEffect(() => {
    const isForward = currentStep >= prevStepRef.current;
    setTurnDirection(isForward ? 'forward' : 'backward');
    prevStepRef.current = currentStep;

    setDisplayedMemory(sequentialMemories[currentStep - 1] || sequentialMemories[0]);
    setTurnStage('turningIn');
    setIsNavigating(false);
    setIsPhotoLifting(false);
    setIsTunnelActive(false);

    const timer = setTimeout(() => {
      setTurnStage('idle');
    }, 650);

    // Instant top reset when switching between steps
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    if (document.documentElement) {
      document.documentElement.scrollTop = 0;
    }
    if (document.body) {
      document.body.scrollTop = 0;
    }

    return () => clearTimeout(timer);
  }, [currentStep]);

  // Handle Forward Navigation (With 3D Memory Tunnel on configured steps)
  const handleNext = () => {
    if (isNavigating || turnStage !== 'idle') return;

    if (currentStep < totalSteps) {
      const nextStepNum = currentStep + 1;

      // Check if current step transition uses the 3D Memory Tunnel
      if (TUNNEL_STEP_TRANSITIONS.includes(currentStep)) {
        setIsNavigating(true);
        setTunnelTargetStep(nextStepNum);
        setIsTunnelActive(true);
        return;
      }

      // Normal 3D Scrapbook Page Turn
      setIsNavigating(true);
      setIsPhotoLifting(true);

      // Phase 1 (140ms): Photo lifts up in 3D
      setTimeout(() => {
        setTurnStage('turningOut');
        setTurnDirection('forward');

        // Phase 2 (160ms): Page swings away & loads next memory
        setTimeout(() => {
          setSearchParams({ step: nextStepNum.toString() });
        }, 160);
      }, 140);
    } else {
      // Final step continues to Special Moments chapter
      navigate('/moments');
    }
  };

  // Tunnel complete callback
  const handleTunnelComplete = () => {
    if (tunnelTargetStep) {
      setSearchParams({ step: tunnelTargetStep.toString() });
    }
    setIsTunnelActive(false);
    setIsNavigating(false);
  };

  // Jump to specific step from dots
  const handleDotJump = (stepNum: number) => {
    if (isNavigating || stepNum === currentStep) return;
    setIsNavigating(true);
    setTurnDirection(stepNum > currentStep ? 'forward' : 'backward');
    setTurnStage('turningOut');
    setTimeout(() => {
      setSearchParams({ step: stepNum.toString() });
    }, 160);
  };

  // Determine current 3D page turn CSS class
  const getPageTurnClass = () => {
    if (turnStage === 'turningOut') {
      return turnDirection === 'forward' ? 'memory-turn-forward-out' : 'memory-turn-backward-out';
    }
    if (turnStage === 'turningIn') {
      return turnDirection === 'forward' ? 'memory-turn-forward-in' : 'memory-turn-backward-in';
    }
    return '';
  };

  const nextMemory = sequentialMemories[currentStep] || sequentialMemories[0];
  const allMemoryImages = sequentialMemories.map((m) => m.image);

  return (
    <PageTransition>
      {/* 3D Memory Tunnel Overlay during selected transitions */}
      {isTunnelActive && (
        <MemoryTunnelTransition
          fromImage={displayedMemory.image}
          fromTitle={displayedMemory.title}
          toImage={nextMemory.image}
          toTitle={nextMemory.title}
          corridorPhotos={allMemoryImages}
          onComplete={handleTunnelComplete}
        />
      )}

      <div className="py-8 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto flex flex-col items-center min-h-[75vh] justify-between perspective-1400 overflow-hidden">
        
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
                onClick={() => handleDotJump(m.sectionNumber)}
                disabled={isNavigating}
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
          className={`w-full flex flex-col items-center text-center transform-style-3d relative ${getPageTurnClass()}`}
        >
          {/* Subtle Page Edge Lighting */}
          <div className={turnDirection === 'forward' ? 'paper-edge-left' : 'paper-edge-right'} />

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
              <div
                className={`relative inline-block max-w-sm sm:max-w-md mx-auto my-2 transition-transform duration-200 transform-style-3d ${
                  isPhotoLifting ? 'animate-photo-lift' : ''
                }`}
              >
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
                {renderStory(displayedMemory.story, displayedMemory.storyHighlight)}
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

              {/* 5. Button to Continue to Next Memory with Instant Click Feedback */}
              <div className="mt-8 mb-4 w-full sm:w-auto">
                <button
                  onClick={handleNext}
                  disabled={isNavigating}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#6C2231] to-[#842D3D] text-[#FAF6F0] font-sans font-semibold text-base shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer group border border-[#D4AF37]/30 disabled:opacity-75 disabled:pointer-events-none"
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
