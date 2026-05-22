'use client';

import Image from 'next/image';
import { Brain, FileText, BarChart2, Video, ScanSearch, Sparkles } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: ScanSearch,
      title: 'AI Image Interpreter',
      description: 'Upload textbook questions, handwritten notes, and diagrams to receive instant AI-generated explanations and homework support',
    },
    {
      icon: Sparkles,
      title: '"Help Me to Solve" Tutor',
      description: 'Get guided step-by-step learning support from an AI tutor designed to improve conceptual understanding and problem-solving skills.',
    },
    {
      icon: FileText,
      title: 'Detailed AI Solutions',
      description: 'Receive accurate AI-generated solutions with detailed explanations for homework, assignments, and exam preparation.',
    },
    {
      icon: Brain,
      title: 'Adaptive AI Learning',
      description: 'GradePlus adapts learning recommendations based on student performance, learning speed, and academic progress.',
    },
    {
      icon: BarChart2,
      title: 'Predictive Performance',
      description: 'Track student performance using AI-powered analytics, progress reports, and smart academic insights',
    },
    {
      icon: Video,
      title: 'Smart Video Classrooms',
      description: 'Conduct engaging online classes with integrated virtual classrooms and digital learning support',
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#5A6A85] mb-4">
            Why Students & Schools Choose GradePlus
          </h2>
          <p className="text-gray-500 max-w-4xl mx-auto text-sm md:text-base">
            GradePlus helps students study smarter with AI tutoring, adaptive learning, and instant doubt solving while helping schools manage academics, examinations, and performance tracking efficiently.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          <div className="w-full lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="shrink-0 mt-1 text-[#016DAB]">
                  <feature.icon size={36} strokeWidth={2} />
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-[#016DAB] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-1">
                    {feature.description}
                  </p>
                  <div className="text-right">
                    <button className="text-[#016DAB] text-sm italic hover:underline">
                      more...
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end relative overflow-hidden">
            <div className="relative w-full max-w-125 aspect-square scale-100 lg:scale-110">
              <Image
                src="/school/featues.webp" 
                alt="GradePlus School Features"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;