'use client';

import { useState } from 'react';
import {  Bot, CheckCircle2, ScanText, FileWarning, X } from 'lucide-react';
import Image from 'next/image';

const SubjectiveAssessment = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="relative py-20 md:py-32 bg-linear-to-b from-slate-100 via-slate-50 to-white border-t border-slate-200 font-sans overflow-hidden text-slate-900 flex flex-col items-center">
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-size-[40px_40px]"></div>
      
      <div className="absolute top-[10%] left-[-5%] w-150 h-150 rounded-full bg-blue-500/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-5%] w-150 h-150 rounded-full bg-teal-500/10 blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-blue-100 rounded-full shadow-md shadow-blue-500/5 mb-6">
            <ScanText className="w-4 h-4 text-blue-600 animate-pulse" />
            <span className="text-sm font-bold text-slate-700 uppercase tracking-wide">Smart Evaluation</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-slate-900">
            AI Subjective Assessment
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Stop manually checking homework. Upload handwritten answers and watch our AI detect calculation errors and provide step-by-step solutions instantly.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            <div className="w-full lg:w-1/2 flex justify-center relative">
              
              <div className="absolute inset-0 bg-blue-400/20 blur-3xl rounded-full w-3/4 h-3/4 mx-auto my-auto -z-10"></div>

              <div 
                className="relative w-fit bg-white p-3 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 cursor-pointer transition-transform hover:scale-[1.02]"
                onClick={() => setSelectedImage('/AI/first.jpeg')}
              >
                <Image 
                  src="/AI/first.webp" 
                  alt="Original Student Handwriting" 
                  width={400}
                  height={550}
                  className="object-contain rounded-2xl"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-slate-900/5 transition-colors rounded-3xl flex items-center justify-center">
                  <span className="opacity-0 hover:opacity-100 text-slate-900 bg-white/90 shadow-lg px-4 py-2 rounded-full text-xs font-bold transition-opacity backdrop-blur-md">Click to expand</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left">
              <h3 className="text-3xl md:text-4xl font-black mb-4 text-slate-900">
                1. Capture Raw Handwriting
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Students simply snap a photo of their notebook. It doesn't matter if the handwriting is messy, includes complex symbols, or geometry diagrams.
              </p>
              
              <div className="space-y-4 w-full max-w-md">
                <div className="flex items-start gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-blue-50 p-2 rounded-lg shrink-0 mt-0.5 border border-blue-100">
                    <Bot className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      Advanced OCR Engine 
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                      </span>
                    </h4>
                    <p className="text-sm text-slate-500 mt-1">Accurately extracts numbers, formulas, and text from varying handwriting styles.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
            
            <div className="w-full lg:w-1/2 flex justify-center relative">
              
              <div className="absolute inset-0 bg-teal-400/20 blur-3xl rounded-full w-3/4 h-3/4 mx-auto my-auto -z-10"></div>

              <div 
                className="relative w-fit bg-white p-3 rounded-3xl border-2 border-teal-300 shadow-2xl shadow-teal-500/10 cursor-pointer transition-transform hover:scale-[1.02]"
                onClick={() => setSelectedImage('/AI/second.jpeg')}
              >
                <Image 
                  src="/AI/second.webp"  
                  alt="AI Evaluated and Corrected Work" 
                  width={400}
                  height={550}
                  className="object-contain rounded-2xl"
                />
                
                <div className="absolute top-3 left-3 right-3 bottom-3 overflow-hidden rounded-2xl pointer-events-none z-10">
                  <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-transparent via-teal-400/20 to-teal-400/40 border-b-2 border-teal-500 animate-[scan_1.5s_linear_infinite] shadow-[0_5px_20px_rgba(20,184,166,0.3)] backdrop-blur-[1px]"></div>
                </div>

                <div className="absolute inset-0 bg-black/0 hover:bg-slate-900/5 transition-colors rounded-3xl flex items-center justify-center z-20">
                  <span className="opacity-0 hover:opacity-100 text-teal-900 bg-teal-50/90 shadow-lg px-4 py-2 rounded-full text-xs font-bold transition-opacity backdrop-blur-md">Click to expand</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left">
              <h3 className="text-3xl md:text-4xl font-black mb-4 text-slate-900">
                2. Instant AI Grading
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Our AI doesn't just check the final answer. It reads line by line to find exactly where the logical mistake happened, acting as a personal 24/7 tutor.
              </p>
              
              <div className="space-y-4 w-full max-w-md">
                <div className="flex items-start gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-amber-50 p-2 rounded-lg shrink-0 mt-0.5 border border-amber-100">
                    <FileWarning className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Pinpoints Formula Errors</h4>
                    <p className="text-sm text-slate-500 mt-1">Identifies the exact mathematical or logical flaw in the student's workflow.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-teal-50 p-2 rounded-lg shrink-0 mt-0.5 border border-teal-100">
                    <CheckCircle2 className="w-5 h-5 text-teal-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Step-by-Step Solutions</h4>
                    <p className="text-sm text-slate-500 mt-1">Provides the correct formula and walks the student through the right path.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedImage(null)} 
        >
          <div className="relative w-full max-w-4xl h-[85vh] bg-white rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-full p-2 transition-colors shadow-sm"
            >
              <X className="w-5 h-5" />
            </button>
            
            <Image 
              src={selectedImage}
              alt="Expanded view"
              fill
              className="object-contain p-4 md:p-8"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0% { top: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}} />
    </section>
  );
};

export default SubjectiveAssessment;