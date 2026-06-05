"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Smartphone, ChevronLeft, ChevronRight } from 'lucide-react';

export default function AppDownloadWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex items-start">
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#5c4ce1] text-white p-3 rounded-l-xl shadow-[-4px_4px_10px_rgba(0,0,0,0.1)] flex items-center justify-center transition-colors hover:bg-[#4b3ec2] h-14"
        aria-label="Toggle App Download"
      >
        {isOpen ? (
          <ChevronRight size={24} />
        ) : (
          <div className="flex items-center gap-1">
            <Smartphone size={24} />
            <ChevronLeft size={18} />
          </div>
        )}
      </button>

      <div
        className={`bg-[#5c4ce1] text-white overflow-hidden transition-all duration-300 ease-in-out rounded-bl-xl flex flex-col items-center ${
          isOpen ? 'w-48 p-5 opacity-100 shadow-[-4px_4px_10px_rgba(0,0,0,0.1)]' : 'w-0 p-0 opacity-0'
        }`}
      >
        <div className="bg-white p-2 rounded-lg w-full mb-3 aspect-square flex items-center justify-center">
          <Image
            src="/AI/GradePlusApp.webp" 
            alt="Scan to download GradePlus app"
            width={150}
            height={150}
            className="w-full h-auto"
          />
        </div>
        <p className="font-semibold text-lg tracking-wide whitespace-nowrap">Scan Me</p>
      </div>
      
    </div>
  );
}