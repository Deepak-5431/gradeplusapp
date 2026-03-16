'use client';

import { FileText, Presentation, Sparkles } from 'lucide-react';
import Image from 'next/image';

const SubjectiveAssesment = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-200 border-t border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase mb-4 border border-blue-100">
            <Sparkles className="w-4 h-4" />
            GradePlus AI
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tight mb-4">
            AI Study Assistant: Revise & Present Effortlessly
          </h2>
          <p className="text-slate-500 font-medium text-lg md:text-xl">
            Optimize your revision workflow with smart AI tools.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          
          <div className="bg-white rounded-3xl p-6 md:p-8 border-2 border-dashed border-slate-300 hover:border-blue-400 transition-colors shadow-sm group">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Presentation className="w-6 h-6 text-blue-600" />
              <h3 className="text-lg md:text-xl font-black text-slate-800 uppercase tracking-wider text-center">
                Text-to-Presentation Converter
              </h3>
            </div>

            <div className="relative w-full aspect-4/3 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden group-hover:shadow-md transition-shadow">
              <Image 
                src="/AI/use1.png" 
                alt="AI PPT Generation" 
                fill
                className="object-contain p-2"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              
             
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-8 border-2 border-dashed border-slate-300 hover:border-blue-400 transition-colors shadow-sm group">
            <div className="flex items-center justify-center gap-3 mb-8">
              <FileText className="w-6 h-6 text-teal-600" />
              <h3 className="text-lg md:text-xl font-black text-slate-800 uppercase tracking-wider text-center">
               PPT GENERATOR
              </h3>
            </div>

            <div className="relative w-full aspect-4/3 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden group-hover:shadow-md transition-shadow">
              <Image 
                src="/AI/us2.png" 
                alt="AI Text Summary" 
                fill
                className="object-contain p-2"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              
             
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SubjectiveAssesment;