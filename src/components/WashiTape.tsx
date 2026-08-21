import React from 'react';

interface WashiTapeProps {
  color?: 'pink' | 'gold' | 'lavender' | 'cream';
  className?: string;
  rotation?: string;
}

export const WashiTape: React.FC<WashiTapeProps> = ({
  color = 'pink',
  className = '',
  rotation = '-rotate-2'
}) => {
  const colorStyles = {
    pink: 'bg-[#F7E6E8]/90 border-l-2 border-r-2 border-dashed border-[#C87D88]/40 shadow-sm',
    gold: 'bg-[#FBF4DE]/90 border-l-2 border-r-2 border-dashed border-[#D4AF37]/50 shadow-sm',
    lavender: 'bg-[#EFEBF7]/90 border-l-2 border-r-2 border-dashed border-[#A78ECC]/40 shadow-sm',
    cream: 'bg-[#F5EFEB]/90 border-l-2 border-r-2 border-dashed border-[#D5C6BA]/50 shadow-sm'
  };

  return (
    <div
      className={`h-6 w-24 md:w-28 absolute z-20 pointer-events-none transform ${rotation} ${colorStyles[color]} ${className}`}
      style={{
        clipPath: 'polygon(0% 0%, 5% 50%, 0% 100%, 100% 100%, 95% 50%, 100% 0%)'
      }}
    />
  );
};
