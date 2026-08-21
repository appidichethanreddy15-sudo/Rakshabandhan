import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Heart } from 'lucide-react';
import { ambientAudio } from '../utils/audioEngine';

export const Welcome: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // When visiting the front/welcome page, stop the music and reset to beginning
    ambientAudio.stop();
  }, []);

  const handleStepInside = () => {
    // 1. Mark as completed in sessionStorage
    sessionStorage.setItem('visited_memory_book', 'true');

    // 2. Start background music from the beginning on user click
    ambientAudio.playFromStart();

    // 3. Navigate forward to the Wishes celebration page (preserving history)
    navigate('/wishes');
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-6 sm:px-10 py-12 text-center bg-[#FAF6F0] relative overflow-hidden select-none">

      {/* Soft Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-[#F7E6E8]/50 via-[#FBF4DE]/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Centered Content Box */}
      <div className="max-w-3xl mx-auto flex flex-col items-center justify-center space-y-8 sm:space-y-10">

        {/* Subtle Minimal Top Heart Icon */}
        <div className="w-10 h-10 rounded-full bg-[#F7E6E8]/80 flex items-center justify-center border border-[#C87D88]/30 shadow-xs animate-fade-in">
          <Heart className="w-5 h-5 text-[#6C2231] fill-[#6C2231]/20" />
        </div>

        {/* The Exact Emotional Intro Text */}
        <div className="space-y-4 animate-fade-in [animation-duration:900ms]">
          <h1 className="font-serif-heading text-3xl sm:text-5xl md:text-6xl font-medium text-[#6C2231] tracking-tight leading-[1.35] sm:leading-[1.3]">
            “I didn't buy you a gift this year,<br className="hidden sm:inline" />
            <span className="font-semibold italic text-[#842D3D]"> so I built you a whole website instead.</span>”
          </h1>

          <p className="font-handwritten text-2xl sm:text-3xl text-[#7E7275] pt-2">
            For My Bangarammmm ❤️
          </p>
        </div>

        {/* Step Inside Button */}
        <div className="pt-2 animate-fade-in [animation-duration:900ms] [animation-delay:350ms]">
          <button
            onClick={handleStepInside}
            className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#6C2231] to-[#842D3D] text-[#FAF6F0] font-sans font-medium text-base sm:text-lg shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer border border-[#D4AF37]/30"
          >
            <span>Step Inside</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>

      {/* Subtle Bottom Watermark */}
      <div className="absolute bottom-6 left-0 right-0 text-center text-xs text-[#7E7275]/70 font-sans tracking-widest uppercase">
        A Brother's Memory Book
      </div>

    </div>
  );
};
