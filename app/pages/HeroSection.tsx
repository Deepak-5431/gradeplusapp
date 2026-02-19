'use client';

import { ArrowRight, BookOpen, Calculator, Languages, Zap } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">

        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm font-medium text-blue-400">NEW: AI TUTOR V2.0</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6 leading-tight">
          Supercharge Your Grades with{' '}
          <span className="bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Artificial Intelligence
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-300 text-center max-w-3xl mx-auto mb-8">
          The ultimate study companion. Instant answers, essay assistance, and personalized quizzes—all in your pocket.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-linear-to-r from-blue-500 to-blue-600 rounded-full font-semibold text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
            Get Started Free
            <ArrowRight size={20} />
          </button>
          <button className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-slate-500 rounded-full font-semibold text-white hover:bg-slate-700/50 transition-all duration-300">
            <Zap size={20} />
            View Features
          </button>
        </div>

        {/* Social Proof */}
        <div className="flex flex-col items-center gap-3 mb-16">
          <div className="flex -space-x-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-linear-to-br from-amber-300 to-amber-500 border-2 border-slate-800 flex items-center justify-center text-sm font-bold text-slate-900"
              >
                {i}
              </div>
            ))}
            <div className="w-10 h-10 rounded-full bg-blue-500 border-2 border-slate-800 flex items-center justify-center text-xs font-bold text-white">
              +
            </div>
          </div>
          <p className="text-slate-400 text-center">
            <span className="font-semibold text-white">10k+</span> Trusted by 10,000+ students worldwide
          </p>
        </div>

        {/* Showcase Section */}
        <div className="mb-24 max-w-2xl mx-auto">
          <div className="relative">
            {/* Chat Bubble */}
            <div className="mb-6 flex justify-end">
              <div className="max-w-xs bg-linear-to-r from-blue-500 to-blue-600 rounded-3xl rounded-tr-sm px-6 py-4 shadow-lg">
                <p className="font-semibold">Explain quantum entanglement like I'm 5.</p>
              </div>
            </div>

            {/* AI Response Card */}
            <div className="bg-linear-to-br from-slate-800 to-slate-700 rounded-2xl p-6 border border-slate-600 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <Zap size={20} />
                </div>
                <h3 className="font-semibold">Imagine you have two magic dice. 🎲</h3>
              </div>
              <div className="w-full bg-slate-600 rounded-lg h-2 mb-3 overflow-hidden">
                <div className="bg-linear-to-r from-blue-400 to-blue-600 h-full w-1/3 animate-pulse"></div>
              </div>
              <p className="text-sm text-slate-400">Generating explanation...</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {[
            { icon: BookOpen, label: 'ESSAY HELPER', title: 'Essays' },
            { icon: Zap, label: 'QUIZ MAKER', title: 'Quizzes' },
            { icon: Calculator, label: 'MATH SOLVER', title: 'Math' },
            { icon: Languages, label: 'TRANSLATOR', title: 'Translate' },
          ].map((feature, index) => (
            <div
              key={index}
              className="group bg-linear-to-br from-slate-800 to-slate-700 rounded-2xl p-6 border border-slate-600 hover:border-blue-500/30 transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                <feature.icon className="text-blue-400" size={24} />
              </div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                {feature.label}
              </p>
              <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
