'use client';

import Link from 'next/link';
import { 
  ArrowLeft, 
  PenTool, 
  Wand2, 
  FlaskConical, 
  BrainCircuit,
  TabletSmartphone,
  MousePointer2
} from 'lucide-react';

export default function SmartAssistantPage() {
  const features = [
    {
      icon: PenTool,
      title: 'Infinite Blank Canvas',
      desc: 'Scribble, write, or sketch. Use your finger, a stylus, or your mouse to draw science diagrams or write out complex questions naturally.',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: Wand2,
      title: 'Auto-Fix Magic',
      desc: 'Drew a wobbly circle or a messy cell structure? Our AI instantly detects your intent and snaps your scribbles into perfectly clean, labeled diagrams.',
      color: 'bg-fuchsia-100 text-fuchsia-600',
    },
    {
      icon: FlaskConical,
      title: 'Deep Science Insights',
      desc: 'Draw a chemical bond, the solar system, or a physics pendulum. The AI recognizes the concept and generates a dedicated, detailed lesson about it.',
      color: 'bg-emerald-100 text-emerald-600',
    },
    {
      icon: BrainCircuit,
      title: 'Contextual Doubt Solving',
      desc: 'Write a question next to your drawing. The assistant links your visual sketch to your written query to provide highly accurate, contextual answers.',
      color: 'bg-blue-100 text-blue-600',
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 font-sans selection:bg-purple-200 relative overflow-hidden">
      
      {/* Canvas Dot Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-size[24px_24px] opacity-60 pointer-events-none z-0"></div>

      {/* Top Navigation Bar */}
      <div className="max-w-5xl mx-auto px-4 py-6 md:px-8 relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>

      <div className="max-w-5xl mx-auto px-4 pb-20 md:px-8 relative z-10">
        
        {/* --- HERO SECTION --- */}
        <div className="text-center py-12 md:py-20 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 text-purple-700 font-bold text-sm mb-6">
            <PenTool className="w-4 h-4" /> Interactive Whiteboard
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-6">
            Your Ideas, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-fuchsia-600">
              Perfected by AI.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Don't just type—draw. Scribble a biology diagram, write a physics equation, or sketch a chemistry compound. Our Smart Assistant auto-fixes your art and explains the science behind it.
          </p>
        </div>

        {/* --- VISUAL SHOWCASE (Scribble to Solution) --- */}
        <div className="w-full bg-white rounded-[2.5rem] shadow-xl border border-slate-200 p-2 mb-20 overflow-hidden group">
          <div className="bg-slate-50 rounded-4xl p-6 md:p-10 border border-slate-100 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden">
            
            {/* Simulated "Scribble" Side */}
            <div className="flex-1 w-full text-center relative z-10">
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 block">You Draw</span>
              <div className="h-48 border-2 border-dashed border-slate-300 rounded-3xl bg-white flex items-center justify-center relative">
                {/* A messy, hand-drawn looking representation */}
                <div className="w-24 h-24 border-4 border-slate-800 rounded-full flex items-center justify-center opacity-60 transform -rotate-12 blur-[0.5px]">
                  <span className="text-4xl font-marker">H₂O</span>
                </div>
                <PenTool className="absolute bottom-4 right-4 text-slate-300 w-6 h-6 animate-pulse" />
              </div>
            </div>

            {/* Glowing Transformation Arrow */}
            <div className="w-12 h-12 shrink-0 bg-linear-to-r from-purple-500 to-fuchsia-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.5)] z-10 group-hover:scale-110 transition-transform">
              <Wand2 className="w-6 h-6 text-white animate-spin-slow" />
            </div>

            {/* Simulated "AI Result" Side */}
            <div className="flex-1 w-full text-center relative z-10">
              <span className="text-sm font-bold text-fuchsia-500 uppercase tracking-widest mb-4 block">AI Delivers</span>
              <div className="h-48 border-2 border-fuchsia-100 rounded-3xl bg-white shadow-lg flex flex-col items-center justify-center p-4">
                 {/* A clean, structured representation */}
                 <div className="text-center mb-3">
                   <div className="text-lg font-bold text-slate-800">Water Molecule</div>
                   <div className="text-sm text-fuchsia-600 font-semibold">Polar Covalent Bond</div>
                 </div>
                 <p className="text-xs text-slate-500 leading-relaxed text-left bg-slate-50 p-3 rounded-xl border border-slate-100">
                   Water consists of two hydrogen atoms bonded to one oxygen atom. Its bent shape gives it a partial positive and negative charge...
                 </p>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-fuchsia-400/10 blur-[60px] rounded-full pointer-events-none z-0"></div>
          </div>
        </div>

        {/* --- HOW IT WORKS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20 relative z-10">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="bg-white p-8 rounded-4xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${feature.color}`}>
                  <Icon className="w-7 h-7" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            );
          })}
        </div>

        {/* --- PLATFORM AVAILABILITY SECTION --- */}
        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden text-center">
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-purple-600/30 blur-[100px] rounded-full pointer-events-none"></div>

          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 relative z-10">Grab a Stylus or a Mouse</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-10 relative z-10">
            The Smart Study Assistant is fully optimized for touch screens, tablets, and desktop browsers.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative z-10">
            {/* Tablet/Mobile */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl flex items-center gap-4 w-full md:w-auto hover:bg-white/15 transition-colors cursor-pointer">
              <div className="p-3 bg-purple-500 rounded-xl">
                <TabletSmartphone className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-white font-bold">App & Tablet</div>
                <div className="text-purple-300 text-sm">Draw with your finger/stylus</div>
              </div>
            </div>

            {/* Desktop/Web */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl flex items-center gap-4 w-full md:w-auto hover:bg-white/15 transition-colors cursor-pointer">
              <div className="p-3 bg-fuchsia-500 rounded-xl">
                <MousePointer2 className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-white font-bold">Web Browser</div>
                <div className="text-fuchsia-300 text-sm">Sketch with your mouse/trackpad</div>
              </div>
            </div>
          </div>
          
        </div>

      </div>
    </main>
  );
}