'use client';

import Image from 'next/image';
import { Camera, Grid3x3, PenTool, Rocket, Sparkles } from 'lucide-react';

export default function KeyFeatures() {
  const features = [
    {
      icon: Camera,
      title: 'Detailed solution',
      description: 'Stuck on a problem? Just snap a photo to get instant, detailed solutions. Our AI instantly recognizes complex formulas and text.',
      image: '/AI/4.jpg',
    },
    {
      icon: Grid3x3,
      title: 'Help me to Solve',
      description: "Don't just get the answer. Understand the 'why' with complex logic broken down into bite-sized, digestible steps.",
      image: '/AI/2.png',
    },
    {
      icon: PenTool,
      title: 'Image Interpreter',
      description: 'Write anything. Scribble equations, draw diagrams, or jot down notes and watch our visual AI solve them in real-time.',
      image: '/AI/3.png',
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#0B1121] text-white py-24 overflow-hidden flex flex-col items-center">
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(1000%); }
        }
        .animate-scanner {
          animation: scan 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}} />

   
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[40px_40px]"></div>
      
      <div className="absolute top-[10%] left-[-10%] w-160 h-160 rounded-full bg-[#01CB89] opacity-10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-160 h-160 rounded-full bg-[#016DAB] opacity-15 blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"> 
        
        <div className="flex flex-col items-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#01CB89]/10 border border-[#01CB89]/30 rounded-full backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(1,203,137,0.2)]">
            <Sparkles className="w-4 h-4 text-[#01CB89]" />
            <span className="text-sm font-semibold text-[#01CB89] uppercase tracking-wide">GradePlus Intelligence</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 bg-linear-to-r from-white via-[#e2e8f0] to-[#94a3b8] bg-clip-text text-transparent">
            AI-Powered Superpowers
          </h2>
          <p className="text-lg md:text-xl text-slate-400 text-center max-w-3xl mx-auto">
            Experience the next generation of learning. Watch as our algorithms analyze, process, and solve your hardest questions in milliseconds.
          </p>
        </div>

        <div className="space-y-24 lg:space-y-32 mb-24">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isImageRight = index % 2 !== 0; // Alternates layout

            return (
              <div 
                key={index} 
                className={`flex flex-col ${isImageRight ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
              >
                
                <div className="w-full lg:w-1/2 relative group">
                  <div className="absolute -inset-4 border border-slate-700/50 rounded-3xl z-0">
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#01CB89] rounded-tl-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#016DAB] rounded-br-3xl"></div>
                  </div>

                  <div className="relative z-10 bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl aspect-4/3 flex items-center justify-center">
                    
                    <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
                      <div className="w-full h-32 bg-linear-to-b from-transparent via-[#01CB89]/10 to-[#01CB89]/30 border-b-2 border-[#01CB89] shadow-[0_5px_20px_rgba(1,203,137,0.4)] animate-scanner"></div>
                    </div>

                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>

                <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="w-16 h-16 mb-6 bg-linear-to-br from-[#016DAB] to-[#01CB89] rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(1,109,171,0.3)]">
                    <Icon className="text-white" size={32} />
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                    {feature.title}
                  </h3>
                  
                  <p className="text-lg text-slate-400 leading-relaxed mb-8">
                    {feature.description}
                  </p>

                  <div className="space-y-3 w-full max-w-md">
                    <div className="flex items-center gap-3 text-sm text-slate-300 bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                      <div className="w-2 h-2 rounded-full bg-[#01CB89] animate-pulse"></div>
                      Processing Engine: Online
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-300 bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                      <div className="w-2 h-2 rounded-full bg-[#016DAB] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      Accuracy Rate: 99.8%
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        <div className="flex flex-col items-center gap-4 relative z-20">
          <button className="group px-8 py-4 bg-transparent border-2 border-[#01CB89] rounded-2xl font-bold text-white text-lg hover:bg-[#01CB89] hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(1,203,137,0.2)] hover:shadow-[0_0_40px_rgba(1,203,137,0.6)]">
            Initialize AI Tutor
            <Rocket size={20} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </div>
  );
}