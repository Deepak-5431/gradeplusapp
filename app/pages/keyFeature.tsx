'use client';

import { Camera, Grid3x3, PenTool, Rocket } from 'lucide-react';

export default function KeyFeatures() {
  const features = [
    {
      icon: Camera,
      title: 'Snap & Solve',
      description: 'Stuck on a problem? Just snap a photo to get instant, detailed solutions.',
    },
    {
      icon: Grid3x3,
      title: 'Step-by-Step',
      description: "Don't just get the answer. Understand the 'why' with complex logic broken down.",
    },
    {
      icon: PenTool,
      title: 'Magic Canvas',
      description: 'Write anything. Scribble equations or notes and watch AI solve them.',
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#01CB89]/10 border border-[#01CB89]/30 rounded-full">
            <div className="w-2 h-2 bg-[#01CB89] rounded-full"></div>
            <span className="text-sm font-semibold text-[#01CB89] uppercase tracking-wide">NEW FEATURES</span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-linear-to-r from-[#01CB89] to-[#016DAB] bg-clip-text text-transparent">
          AI-Powered Superpowers
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-slate-400 text-center max-w-2xl mx-auto mb-16">
          Unlock your full potential with tools designed to make learning faster, smarter, and easier.
        </p>

        {/* Features */}
        <div className="space-y-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-linear-to-br from-slate-800/80 to-slate-900/80 rounded-3xl p-6 sm:p-8 border border-slate-700/50 hover:border-[#01CB89]/30 transition-all duration-300 cursor-pointer"
              >
                <div className="relative flex gap-6 items-start">
                  {/* Icon */}
                  <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-linear-to-br from-[#016DAB] to-[#01CB89] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="text-white" size={36} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">{feature.title}</h3>
                    <p className="text-slate-400 text-base sm:text-lg leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-linear-to-r from-[#016DAB] to-[#01CB89] rounded-2xl font-bold text-white text-lg hover:shadow-2xl hover:shadow-[#01CB89]/30 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
            Try GradePlus for Free
            <Rocket size={20} />
          </button>
          <p className="text-slate-500 text-center text-sm">
            No credit card required. 7-day free trial.
          </p>
        </div>
      </div>
    </div>
  );
}
