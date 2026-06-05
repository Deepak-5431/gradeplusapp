"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Phone, X, MessageCircle } from 'lucide-react';

export default function SupportWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-16 right-0 z-60 flex flex-col items-end">
      
      <div 
        className={`bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-6 w-[320px] mb-4 origin-bottom-right transition-all duration-300 ease-out border border-slate-100 ${
          isOpen ? 'scale-100 opacity-100 visible' : 'scale-90 opacity-0 invisible'
        }`}
      >
        <div className="flex justify-between items-start mb-5">
          <div className="pr-4">
            <h3 className="text-lg font-bold text-slate-900 mb-1">Talk to a counsellor</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Have doubts? Our support team will be happy to assist you!
            </p>
          </div>
          <div className="shrink-0 w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center overflow-hidden">
             <Image 
               src="/AI/counsellor-avatar.webp" 
               alt="Counsellor" 
               width={56} 
               height={56} 
               className="object-cover"
             />
          </div>
        </div>

        <a 
          href="tel:7522861133" 
          className="flex items-center justify-center gap-2 w-full py-3 bg-white border border-[#5c4ce1] text-[#5c4ce1] rounded-xl font-bold text-lg hover:bg-[#5c4ce1]/5 transition-colors"
        >
          <Phone size={28} className="fill-[#5c4ce1]" />
          7522861133
        </a>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#3b2db0] text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
        aria-label="Toggle Support Chat"
      >
        {isOpen ? <X size={36} /> : <MessageCircle size={36} />}
      </button>

    </div>
  );
}