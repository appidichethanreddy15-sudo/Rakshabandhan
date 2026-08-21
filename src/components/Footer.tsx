import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Heart, Sparkles, BookOpen } from 'lucide-react';

interface RouteMapItem {
  path: string;
  title: string;
  nextPath: string;
  nextTitle: string;
  pageNumber: number;
}

const pageRoutes: RouteMapItem[] = [
  { path: '/', title: 'Cover Page', nextPath: '/my-words', nextTitle: 'Words From My Heart', pageNumber: 1 },
  { path: '/my-words', title: 'Words From My Heart', nextPath: '/memories', nextTitle: 'Our Memories', pageNumber: 2 },
  { path: '/memories', title: 'Our Memories', nextPath: '/moments', nextTitle: 'Special Moments & Night', pageNumber: 3 },
  { path: '/moments', title: 'Special Moments', nextPath: '/rakhi', nextTitle: "Last Year's Rakhi", pageNumber: 4 },
  { path: '/rakhi', title: 'Raksha Bandhan', nextPath: '/letter', nextTitle: 'Raksha Bandhan Wishes', pageNumber: 5 },
  { path: '/letter', title: 'Final Wishes', nextPath: '/', nextTitle: 'Return to Beginning', pageNumber: 6 }
];

export const Footer: React.FC = () => {
  const location = useLocation();
  const currentRoute = pageRoutes.find((r) => r.path === location.pathname) || pageRoutes[0];
  
  // Hide the chapter turn card on the sequential Memories page to avoid showing two buttons at the same time
  const hideTurnCard = location.pathname === '/memories';

  return (
    <footer className="mt-auto border-t border-[#C87D88]/20 bg-white/30 backdrop-blur-md pt-8 pb-12 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Turn Page Card (Only shown on non-sequential pages) */}
        {!hideTurnCard && (
          <div className="relative paper-texture rounded-2xl p-6 sm:p-8 mb-10 border border-[#C87D88]/30 shadow-sm overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6 group hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-full bg-[#F7E6E8] flex items-center justify-center text-[#6C2231] shrink-0 border border-[#C87D88]/20">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#7E7275]">
                  Turn to Next Page • Chapter {currentRoute.pageNumber + 1 > 6 ? 1 : currentRoute.pageNumber + 1}
                </span>
                <h3 className="font-serif-heading text-xl sm:text-2xl font-semibold text-[#6C2231] mt-0.5">
                  {currentRoute.nextTitle}
                </h3>
              </div>
            </div>

            <Link
              to={currentRoute.nextPath}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#6C2231] text-[#FAF6F0] hover:bg-[#842D3D] transition-all font-medium text-sm shadow-sm group-hover:scale-105 active:scale-95"
            >
              <span>Read Next Page</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}

        {/* Footer Bottom info */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-[#7E7275]">
          <div className="flex items-center gap-2">
            <Heart className="w-3.5 h-3.5 text-[#C87D88] fill-[#C87D88]/30" />
            <span>Dedicated lovingly to my non-blood sister, Bangarammmm</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-handwritten text-base text-[#6C2231]">
              Page {currentRoute.pageNumber} of 6
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-[#D4AF37] font-medium">
              <Sparkles className="w-3 h-3" /> Raksha Bandhan Keepsake
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
