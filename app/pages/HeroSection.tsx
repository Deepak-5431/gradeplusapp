'use client';

import Image from 'next/image';
import { Brain, FileText, BarChart2, Video, ScanSearch, Sparkles } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: ScanSearch,
      title: 'AI Image Interpreter',
      description: 'Stuck on a problem? Simply snap a picture. Our AI instantly interprets complex equations, geometry diagrams, and word problems.',
    },
    {
      icon: Sparkles,
      title: '"Help Me to Solve" Tutor',
      description: 'Instead of just giving the final answer, our AI acts as a personal tutor, guiding students step-by-step to master core concepts.',
    },
    {
      icon: FileText,
      title: 'Detailed AI Solutions',
      description: 'Generate instant, comprehensive step-by-step solutions for homework and test preparation across all major subjects.',
    },
    {
      icon: Brain,
      title: 'Adaptive AI Learning',
      description: 'Our AI analyzes learning patterns to provide a highly personalized and interactive path tailored to each student\'s pace.',
    },
    {
      icon: BarChart2,
      title: 'Predictive Performance',
      description: 'Leverage artificial intelligence to analyze student and teacher performance trends, predicting areas where extra support is needed.',
    },
    {
      icon: Video,
      title: 'Smart Video Classrooms',
      description: 'Take classes online with our fully integrated video conferencing system, enhanced with AI-driven engagement tracking.',
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#5A6A85] mb-4">
            Why GradePlus is a right choice for you
          </h2>
          <p className="text-gray-500 max-w-4xl mx-auto text-sm md:text-base">
            GradePlus's advanced AI features make it the best choice for your educational institute. 
            Explore how our smart tools empower students and educators.
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
                src="/school/featues.png" 
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