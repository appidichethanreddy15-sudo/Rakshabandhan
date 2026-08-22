import React, { useEffect, useState } from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

interface MemoryTunnelTransitionProps {
  fromImage: string;
  fromTitle: string;
  toImage: string;
  toTitle: string;
  corridorPhotos: string[];
  onComplete: () => void;
}

export const MemoryTunnelTransition: React.FC<MemoryTunnelTransitionProps> = ({
  fromImage,
  fromTitle,
  toImage,
  toTitle,
  corridorPhotos,
  onComplete
}) => {
  const [phase, setPhase] = useState<'recede' | 'corridor' | 'emerge' | 'done'>('recede');

  useEffect(() => {
    // 0ms: Start receding current memory
    const t1 = setTimeout(() => {
      setPhase('corridor');
    }, 450);

    // 750ms: Start emerging new memory from depth
    const t2 = setTimeout(() => {
      setPhase('emerge');
    }, 700);

    // 1350ms: Complete and hand over to target memory
    const t3 = setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 1350);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-[#1E0E20]/95 via-[#140816]/98 to-[#0B040D] backdrop-blur-md overflow-hidden select-none perspective-1400">
      
      {/* Dynamic Warm Ambient Light Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#D4AF37]/15 blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#9B5DE5]/20 blur-3xl pointer-events-none animate-pulse [animation-delay:500ms]" />

      {/* Floating Golden Stardust Particles in 3D Space */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <span className="absolute top-1/4 left-1/6 text-sm text-[#D4AF37] animate-stardust-1">✨</span>
        <span className="absolute top-1/3 right-1/5 text-xs text-[#F7E6E8] animate-stardust-2">🌸</span>
        <span className="absolute bottom-1/3 left-1/4 text-sm text-[#D4AF37] animate-stardust-3">⭐</span>
        <span className="absolute bottom-1/4 right-1/4 text-xs text-[#C87D88] animate-stardust-1">✨</span>
      </div>

      {/* Top Nostalgic Guidance Text */}
      <div className="absolute top-8 sm:top-12 z-40 text-center px-4 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 border border-[#D4AF37]/30 backdrop-blur-xs mb-2">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#FBF4DE]">
            Memory Journey
          </span>
        </div>
        <p className="font-serif-heading italic text-xl sm:text-2xl text-[#FAF3E0] drop-shadow-md">
          “Going deeper into our memories...”
        </p>
      </div>

      {/* 3D Tunnel Depth Stage */}
      <div className="relative w-full max-w-lg h-[520px] flex items-center justify-center transform-style-3d animate-tunnel-corridor">

        {/* Depth Layers: Faint Corridor Photographs on Sides */}
        {corridorPhotos.slice(0, 6).map((imgSrc, idx) => {
          const depthOffsets = [
            'left-[-60px] top-4 -rotate-12 translate-z-[-200px] scale-75 opacity-40',
            'right-[-60px] top-8 rotate-12 translate-z-[-320px] scale-70 opacity-35',
            'left-[-40px] bottom-6 rotate-6 translate-z-[-450px] scale-60 opacity-30',
            'right-[-40px] bottom-10 -rotate-8 translate-z-[-550px] scale-55 opacity-25',
            'left-4 top-1/3 -rotate-6 translate-z-[-650px] scale-45 opacity-20',
            'right-4 top-1/3 rotate-6 translate-z-[-720px] scale-40 opacity-15'
          ];

          return (
            <div
              key={idx}
              className={`absolute pointer-events-none transition-all duration-700 ${depthOffsets[idx % depthOffsets.length]}`}
            >
              <div className="p-1.5 bg-white/80 rounded-sm shadow-lg border border-[#D4AF37]/20 w-32 sm:w-40">
                <ImageWithFallback
                  src={imgSrc}
                  alt="Memory Echo"
                  aspectRatio="auto"
                  objectFit="cover"
                  className="rounded-xs h-28 sm:h-36 w-full grayscale-[30%]"
                />
              </div>
            </div>
          );
        })}

        {/* Phase 1 & 2: Receding Current Memory Photo */}
        {(phase === 'recede' || phase === 'corridor') && (
          <div className="absolute z-20 flex flex-col items-center animate-tunnel-recede">
            <div className="polaroid-frame rounded-sm bg-white shadow-2xl p-2.5 sm:p-3 w-64 sm:w-80">
              <ImageWithFallback
                src={fromImage}
                alt={fromTitle}
                aspectRatio="auto"
                objectFit="contain"
                className="rounded-xs max-h-[340px] w-full"
              />
              <div className="mt-2 text-center">
                <span className="font-handwritten text-lg text-[#6C2231] truncate block">
                  {fromTitle}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Phase 3: Emerging Target Memory Photo */}
        {(phase === 'emerge' || phase === 'corridor') && (
          <div className="absolute z-30 flex flex-col items-center animate-tunnel-emerge">
            <div className="polaroid-frame rounded-sm bg-white shadow-2xl p-2.5 sm:p-3 w-68 sm:w-84 border-2 border-[#D4AF37]/50">
              <ImageWithFallback
                src={toImage}
                alt={toTitle}
                aspectRatio="auto"
                objectFit="contain"
                className="rounded-xs max-h-[360px] w-full"
              />
              <div className="mt-2 text-center flex items-center justify-center gap-1.5">
                <Heart className="w-3.5 h-3.5 fill-[#C87D88] text-[#C87D88]" />
                <span className="font-handwritten text-xl font-bold text-[#6C2231] truncate block">
                  {toTitle}
                </span>
              </div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
