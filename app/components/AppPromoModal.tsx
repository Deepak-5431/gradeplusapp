"use client";

import { useState, useEffect } from "react";

export default function AppPromoModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Wait 1.5 seconds after page load to show the popup (better UX)
    const timer = setTimeout(() => {
      // Check if the user already dismissed it today
      const hasSeenModal = sessionStorage.getItem("hasSeenAppPromo");
      if (!hasSeenModal) {
        setIsOpen(true);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Save to session storage so it doesn't pop up on every single course they click today
    sessionStorage.setItem("hasSeenAppPromo", "true");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-md rounded-2xl overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-300">
        
        {/* Top Image Area */}
        <div className="bg-[#e6f4ff] w-full h-48 relative flex items-center justify-center">
          <div className="text-blue-300 font-extrabold text-3xl opacity-50 tracking-widest">
             GRADEPLUS APP
          </div>
        </div>

        {/* Content Area */}
        <div className="p-8 text-center">
          <p className="text-slate-500 font-medium mb-1">Get GradePlus App for</p>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Exclusive App-Only Features</h2>
          <p className="text-slate-600 text-sm mb-8">
            Practice tests, AI doubt-solving, and offline video downloads!
          </p>

          {/* Buttons */}
          <div className="space-y-2">
            <button 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-md shadow-blue-600/20 active:scale-95"
            >
              Open in App
            </button>
            <button 
              onClick={handleClose}
              className="w-full bg-transparent hover:bg-slate-50 text-blue-600 font-semibold py-3.5 rounded-xl transition-all active:scale-95"
            >
              Continue in Web
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}