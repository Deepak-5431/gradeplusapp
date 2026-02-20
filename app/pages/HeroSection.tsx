'use client';

import { BookOpen, Calculator, Languages, Play, Rocket, Star, FileEdit } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#016DAB] via-[#018BA0] to-[#01CB89] text-white overflow-hidden relative">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">

        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-white">AI TUTOR V2.0 LIVE</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6 leading-tight">
          GradePlus –{' '}
          <br className="hidden md:block" />
          Transforming Your School
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/90 text-center max-w-3xl mx-auto mb-10">
          Experience the future of education with AI-driven insights, real-time assistance,
          and personalized learning paths designed for success.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#016DAB] rounded-full font-bold hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Launch App
            <Rocket size={20} />
          </button>
          <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white/40 rounded-full font-semibold text-white hover:bg-white/30 transition-all duration-300">
            <Play size={20} fill="white" />
            Watch Demo
          </button>
        </div>

        {/* Social Proof */}
        <div className="flex flex-col items-center gap-3 mb-16">
          <div className="flex -space-x-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-12 h-12 rounded-full bg-linear-to-br from-white to-gray-100 border-2 border-[#016DAB] flex items-center justify-center text-sm font-bold text-[#016DAB]"
              >
                {String.fromCharCode(64 + i)}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            <Star className="text-yellow-300 fill-yellow-300" size={18} />
            <span className="font-semibold text-white">4.9/5 from students</span>
          </div>
        </div>

        {/* Showcase Section - AI Solution Mockup */}
        <div className="mb-24 max-w-4xl mx-auto">
          <div className="relative">
            {/* User Query Bubble */}
            <div className="mb-6 flex justify-start max-w-md">
              <div className="bg-[#016DAB]/80 backdrop-blur-sm rounded-3xl rounded-tl-sm px-6 py-4 shadow-xl border border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <p className="text-sm font-medium text-white/80">Insight you have just thought of...</p>
                </div>
                <p className="font-semibold text-white">🤔</p>
              </div>
            </div>

            {/* AI Response Card */}
            <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-6 md:p-8 shadow-2xl border border-white/50 relative overflow-hidden">
              {/* AI Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#01CB89] px-3 py-1.5 rounded-full">
                <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
                  <FileEdit className="text-[#01CB89]" size={14} />
                </div>
                <span className="text-xs font-bold text-white">AI SOLUTION</span>
              </div>

              <div className="mt-12">
                <p className="text-gray-700 text-center mb-4">
                  Based on the derivative rules, here's a step-by-step breakdown using the chain rule...
                </p>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-lg h-3 mb-4 overflow-hidden">
                  <div className="bg-linear-to-r from-[#016DAB] to-[#01CB89] h-full w-2/3 rounded-lg"></div>
                </div>

                {/* Mockup Placeholder */}
                <div className="bg-linear-to-br from-gray-100 to-gray-200 rounded-2xl h-32 flex items-center justify-center opacity-60">
                  <p className="text-gray-500 text-sm">Solution Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pb-20">
          {[
            { icon: FileEdit, label: 'Essay Helper', color: 'from-emerald-500 to-emerald-600' },
            { icon: BookOpen, label: 'Quiz Maker', color: 'from-blue-500 to-blue-600' },
            { icon: Calculator, label: 'Math Solver', color: 'from-purple-500 to-purple-600' },
            { icon: Languages, label: 'Translator', color: 'from-orange-500 to-orange-600' },
          ].map((feature, index) => (
            <div
              key={index}
              className="group bg-linear-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 cursor-pointer hover:bg-white/20"
            >
              <div className={`w-14 h-14 bg-linear-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <feature.icon className="text-white" size={26} />
              </div>
              <h3 className="text-base font-semibold text-white">{feature.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
