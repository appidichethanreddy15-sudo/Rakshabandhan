import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PreviousPageButton } from './components/PreviousPageButton';
import { Welcome } from './pages/Welcome';
import { Wishes } from './pages/Wishes';
import { Home } from './pages/Home';
import { MyWords } from './pages/MyWords';
import { Memories } from './pages/Memories';
import { Moments } from './pages/Moments';
import { Rakhi } from './pages/Rakhi';
import { Letter } from './pages/Letter';

// Distinct, harmonious color themes for each page/chapter
const pageThemeMap: Record<string, { bg: string; aura1: string; aura2: string }> = {
  '/welcome': {
    // Opening: Warm Cream & Gold
    bg: 'bg-gradient-to-br from-[#FAF5EC] via-[#FDF9F2] to-[#F5ECE0]',
    aura1: 'bg-[#FBF0DC]/60',
    aura2: 'bg-[#F7E6E8]/40'
  },
  '/wishes': {
    // 3D Raksha Bandhan Celebration: Deep Royal Plum & Starburst Gold
    bg: 'bg-gradient-to-b from-[#241126] via-[#1a0c1b] to-[#120713]',
    aura1: 'bg-[#9B5DE5]/20',
    aura2: 'bg-[#D4AF37]/20'
  },
  '/': {
    // Chapter 1: Home - Soft Rose-Peach & Warm Sunbeam
    bg: 'bg-gradient-to-br from-[#FFF5F2] via-[#FDF0EE] to-[#FCEBE4]',
    aura1: 'bg-[#FCE3DF]/70',
    aura2: 'bg-[#FDF6E2]/50'
  },
  '/my-words': {
    // Chapter 2: Words From My Heart - Soft Lavender Blush & Misty Violet
    bg: 'bg-gradient-to-br from-[#F6EFF8] via-[#FAF4FB] to-[#ECE4F2]',
    aura1: 'bg-[#EFE4F7]/70',
    aura2: 'bg-[#FCEEF2]/50'
  },
  '/memories': {
    // Chapter 3: Our Memories - Warm Golden Amber & Honey Cream
    bg: 'bg-gradient-to-br from-[#FAF3E0] via-[#FCF8EC] to-[#F6ECD2]',
    aura1: 'bg-[#FDEFC8]/70',
    aura2: 'bg-[#F9E6C4]/50'
  },
  '/moments': {
    // Chapter 4: Special Moments & The Night Memory - Dreamy Twilight Mauve
    bg: 'bg-gradient-to-br from-[#ECE8F5] via-[#F1EDF9] to-[#E2DCEF]',
    aura1: 'bg-[#DDD4EE]/70',
    aura2: 'bg-[#EBDFF0]/50'
  },
  '/rakhi': {
    // Chapter 5: Rakhi - Warm Saffron & Terracotta Keepsake
    bg: 'bg-gradient-to-br from-[#FFF2E6] via-[#FDF1E3] to-[#FDE6D5]',
    aura1: 'bg-[#FDDCC0]/70',
    aura2: 'bg-[#FDF2D9]/50'
  },
  '/letter': {
    // Chapter 6: Final Letter - Royal Vintage Parchment & Golden Shimmer
    bg: 'bg-gradient-to-br from-[#FDF6E2] via-[#FCF2D9] to-[#F8ECC8]',
    aura1: 'bg-[#FBEEC2]/80',
    aura2: 'bg-[#FCE1C2]/60'
  }
};

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const [checkedInitialEntry, setCheckedInitialEntry] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('visited_memory_book');
    // If first time landing on root '/', redirect to welcome once
    if (!hasVisited && location.pathname === '/') {
      navigate('/welcome', { replace: true });
    }
    setCheckedInitialEntry(true);
  }, [location.pathname, navigate]);

  const isIntroPage = location.pathname === '/welcome' || location.pathname === '/wishes';
  const currentTheme = pageThemeMap[location.pathname] || pageThemeMap['/'];

  if (!checkedInitialEntry) return null;

  return (
    <div
      className={`flex flex-col min-h-screen ${currentTheme.bg} text-[#2D2426] transition-colors duration-700 relative overflow-hidden`}
    >
      {/* Dynamic Ambient Background Light Auras */}
      <div
        className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none -z-10 ${currentTheme.aura1} transition-all duration-700`}
      />
      <div
        className={`absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none -z-10 ${currentTheme.aura2} transition-all duration-700`}
      />

      {!isIntroPage && <Navbar />}
      <main className="flex-1 w-full relative z-10">
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/wishes" element={<Wishes />} />
          <Route path="/" element={<Home />} />
          <Route path="/my-words" element={<MyWords />} />
          <Route path="/memories" element={<Memories />} />
          <Route path="/moments" element={<Moments />} />
          <Route path="/rakhi" element={<Rakhi />} />
          <Route path="/letter" element={<Letter />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      {!isIntroPage && <Footer />}
      <PreviousPageButton />
    </div>
  );
}

export function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
