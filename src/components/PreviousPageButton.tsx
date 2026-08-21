import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const previousRouteMap: Record<string, string> = {
  '/my-words': '/',
  '/memories': '/my-words',
  '/moments': '/memories?step=8',
  '/rakhi': '/moments',
  '/letter': '/rakhi',
  '/': '/wishes',
  '/wishes': '/welcome'
};

export const PreviousPageButton: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Never show on the Welcome entry page
  if (location.pathname === '/welcome') {
    return null;
  }

  const handleBack = () => {
    // If inside sequential memories, step backwards 8 -> 7 -> 6 -> 5 -> 4 -> 3 -> 2 -> 1 -> /my-words
    if (location.pathname === '/memories') {
      const searchParams = new URLSearchParams(location.search);
      const step = parseInt(searchParams.get('step') || '1', 10);
      if (step > 1) {
        navigate(`/memories?step=${step - 1}`);
        return;
      }
      navigate('/my-words');
      return;
    }

    const targetRoute = previousRouteMap[location.pathname];
    if (targetRoute) {
      navigate(targetRoute);
    } else if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/welcome');
    }
  };

  return (
    <button
      onClick={handleBack}
      aria-label="Go back to previous page"
      className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 group flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FFFDF9]/95 backdrop-blur-md border border-[#C87D88]/35 text-[#6C2231] shadow-md hover:shadow-lg hover:border-[#6C2231]/50 hover:bg-[#F7E6E8]/80 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 cursor-pointer select-none"
    >
      <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-[#6C2231] group-hover:-translate-x-1 transition-transform duration-200" />
    </button>
  );
};
