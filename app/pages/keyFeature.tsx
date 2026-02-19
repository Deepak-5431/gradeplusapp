'use client';

import { Camera, Grid3x3, PenTool, ArrowRight } from 'lucide-react';

export default function KeyFeatures() {
  const features = [
    {
      icon: Camera,
      title: 'Snap & Solve',
      description: 'Stuck on a problem? Just snap a photo to get instant, detailed solutions.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-500/20',
      iconColor: 'text-blue-400',
    },
    {
      icon: Grid3x3,
      title: 'Step-by-Step Learning',
      description: "Don't just get the answer. Understand the 'why' with broken-down explanations.",
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-500/20',
      iconColor: 'text-purple-400',
    },
    {
      icon: PenTool,
      title: 'Magic Canvas',
      description: 'Scribble notes or equations, and watch our AI turn them into answers instantly.',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-500/20',
      iconColor: 'text-pink-400',
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm font-medium text-blue-400">NEW FEATURES</span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          AI-Powered Superpowers
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-slate-300 text-center max-w-2xl mx-auto mb-16">
          Unlock your full potential with tools designed to make learning faster, smarter, and easier.
        </p>

        {/* Features */}
        <div className="space-y-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-linear-to-br from-slate-800 to-slate-700 rounded-2xl p-6 sm:p-8 border border-slate-600 hover:border-slate-500 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* linear overlay on hover */}
                <div className={`absolute inset-0 bg-linear-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                <div className="relative flex gap-6 items-start">
                  {/* Icon */}
                  <div className={`shrink-0 w-16 h-16 ${feature.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`${feature.iconColor}`} size={32} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-slate-300 text-lg">{feature.description}</p>
                  </div>

                  {/* Arrow */}
                  <div className="shrink-0 pt-2">
                    <ArrowRight className="text-slate-400 group-hover:text-slate-200 group-hover:translate-x-2 transition-all duration-300" size={24} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-linear-to-r from-blue-500 to-blue-600 rounded-xl font-bold text-white text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Try GradePlus for Free
          </button>
          <p className="text-slate-400 text-center">
            No credit card required. 7-day free trial.
          </p>
        </div>
      </div>
    </div>
  );
}
