'use client';

import Link from 'next/link';
import { 
  ArrowLeft, 
  Clock, 
  Map, 
  CalendarCheck, 
  PlayCircle, 
  Trophy,
  Coffee
} from 'lucide-react';

export default function SelfPacedPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-amber-200 pb-20">
      
      {/* Top Navigation Bar */}
      <div className="max-w-6xl mx-auto px-4 py-6 md:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm hover:shadow">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* --- HERO SECTION --- */}
        <div className="text-left md:text-center py-10 md:py-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 border border-amber-200 text-amber-700 font-bold text-sm mb-6">
            <Clock className="w-4 h-4" /> Learn on Your Terms
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-6">
            No Rush. No Pressure. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 to-orange-600">
              Just Total Flexibility.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl md:mx-auto font-medium">
            Explore modular learning designed to fit perfectly around your busy school schedule, homework assignments, and extracurriculars.
          </p>
        </div>

        {/* --- BENTO BOX DASHBOARD GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
          
          {/* BENTO 1: The Roadmap (Spans 2 columns on desktop) */}
          <div className="md:col-span-2 bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 group-hover:bg-amber-100 transition-colors"></div>
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="mb-8">
                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-4">
                  <Map className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Custom Learning Roadmaps</h3>
                <p className="text-slate-500 max-w-md">Your curriculum is broken down into a clear, visual path. See exactly where you are and what's next, without feeling overwhelmed.</p>
              </div>

              {/* Simulated visual roadmap UI */}
              <div className="flex items-center gap-2 md:gap-4 w-full mt-auto pt-4">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-lg"><Trophy className="w-4 h-4" /></div>
                  <div className="text-xs font-bold text-slate-400">Ch 1</div>
                </div>
                <div className="flex-1 h-1.5 bg-amber-500 rounded-full"></div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-lg"><Trophy className="w-4 h-4" /></div>
                  <div className="text-xs font-bold text-slate-400">Ch 2</div>
                </div>
                <div className="flex-1 h-1.5 bg-slate-100 rounded-full relative overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-1/2 bg-amber-500 rounded-full"></div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center shadow-sm"></div>
                  <div className="text-xs font-bold text-slate-400">Ch 3</div>
                </div>
                <div className="flex-1 h-1.5 bg-slate-100 rounded-full hidden md:block"></div>
                <div className="flex-col items-center gap-2 hidden md:flex">
                  <div className="w-8 h-8 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center shadow-sm"></div>
                  <div className="text-xs font-bold text-slate-400">Ch 4</div>
                </div>
              </div>
            </div>
          </div>

          {/* BENTO 2: Bite-Sized Modules */}
          <div className="bg-emerald-50 rounded-[2.5rem] p-8 shadow-sm border border-emerald-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center items-center text-center">
            <div className="w-16 h-16 bg-white text-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-sm">
              <Coffee className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-emerald-900 mb-3">Bite-Sized Modules</h3>
            <p className="text-emerald-700/80 text-sm">
              Only have 15 minutes before dinner? Dive into micro-lessons that fit perfectly into small pockets of your day.
            </p>
          </div>

          {/* BENTO 3: Pause & Play */}
          <div className="bg-slate-900 rounded-[2.5rem] p-8 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/30 blur-[50px] rounded-full pointer-events-none"></div>
            
            <div className="w-12 h-12 bg-white/10 text-blue-400 rounded-2xl flex items-center justify-center mb-4 border border-white/10">
              <PlayCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Pause & Resume</h3>
              <p className="text-slate-400 text-sm">
                Exam tomorrow? Pause your extracurricular modules and focus on revisions. Resume right where you left off whenever you're ready.
              </p>
            </div>
          </div>

          {/* BENTO 4: School Sync (Spans 2 columns on desktop) */}
          <div className="md:col-span-2 bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center mb-4">
                <CalendarCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Sync with School Assignments</h3>
              <p className="text-slate-500">
                Our platform doesn't compete with your schoolwork; it supports it. Select topics that align with your current school chapters to reinforce what you learn in class, making homework a breeze.
              </p>
            </div>
            
            {/* Visual Calendar Element */}
            <div className="w-full md:w-64 bg-rose-50 border border-rose-100 rounded-3xl p-5 shrink-0">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-rose-900">This Week</span>
                <span className="text-xs bg-rose-200 text-rose-700 px-2 py-1 rounded-md font-bold">Synced</span>
              </div>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-xl shadow-sm border border-rose-100 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <div className="text-sm font-bold text-slate-700">School Math HW</div>
                </div>
                <div className="bg-white p-3 rounded-xl shadow-sm border border-rose-100 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                  <div className="text-sm font-bold text-slate-700">GradePlus App: Algebra</div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}