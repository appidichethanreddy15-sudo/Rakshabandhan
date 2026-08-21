import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CelebrationTransition } from '../components/CelebrationTransition';
import { ambientAudio } from '../utils/audioEngine';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Wishes: React.FC = () => {
  const navigate = useNavigate();
  const [canProceed, setCanProceed] = useState(false);

  useEffect(() => {
    // Ensure background music is playing
    if (!ambientAudio.getStatus()) {
      ambientAudio.play();
    }

    // Show manual continue button after 2.5s so user has total control
    const timer = setTimeout(() => {
      setCanProceed(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleProceed = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-b from-[#241126] via-[#1a0c1b] to-[#120713] text-[#FAF6F0] select-none flex flex-col items-center justify-center">
      
      {/* 3D Raksha Bandhan Celebration Scene */}
      <CelebrationTransition onComplete={handleProceed} />

      {/* Interactive Continue Button in case user wants to proceed immediately */}
      {canProceed && (
        <div className="fixed bottom-8 sm:bottom-12 z-50 animate-fade-in [animation-duration:500ms]">
          <button
            onClick={handleProceed}
            className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C87D88] text-[#241126] font-sans font-bold text-sm shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border border-[#FBF4DE]/40"
          >
            <Sparkles className="w-4 h-4" />
            <span>Continue to Page 1</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
