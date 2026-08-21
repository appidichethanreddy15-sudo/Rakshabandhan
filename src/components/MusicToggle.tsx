import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { ambientAudio } from '../utils/audioEngine';

export const MusicToggle: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(ambientAudio.getStatus());

  useEffect(() => {
    const unsubscribe = ambientAudio.subscribe((playing) => {
      setIsPlaying(playing);
    });
    return unsubscribe;
  }, []);

  const toggleMusic = () => {
    ambientAudio.toggle();
  };

  return (
    <button
      onClick={toggleMusic}
      aria-label={isPlaying ? "Pause background music" : "Play background music"}
      className={`group relative flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs tracking-wider transition-all duration-300 shadow-sm cursor-pointer ${
        isPlaying
          ? 'bg-[#6C2231] text-[#FAF6F0] border-[#6C2231] shadow-[#6C2231]/20'
          : 'bg-white/80 text-[#6C2231] border-[#C87D88]/30 hover:border-[#6C2231]/50 hover:bg-[#F7E6E8]/40'
      }`}
    >
      {isPlaying ? (
        <Volume2 className="w-3.5 h-3.5 animate-pulse text-[#D4AF37]" />
      ) : (
        <VolumeX className="w-3.5 h-3.5 text-[#7E7275]" />
      )}
      <span className="font-medium hidden sm:inline">
        {isPlaying ? 'Rakhi Song Playing 🎵' : 'Play Music'}
      </span>
      {isPlaying && (
        <div className="flex items-end gap-0.5 h-2.5">
          <span className="w-0.5 bg-[#D4AF37] h-full animate-bounce [animation-delay:0ms]"></span>
          <span className="w-0.5 bg-[#D4AF37] h-2/3 animate-bounce [animation-delay:150ms]"></span>
          <span className="w-0.5 bg-[#D4AF37] h-4/5 animate-bounce [animation-delay:300ms]"></span>
        </div>
      )}
      {!isPlaying && (
        <Music className="w-3 h-3 text-[#C87D88] opacity-60 group-hover:rotate-12 transition-transform" />
      )}
    </button>
  );
};
