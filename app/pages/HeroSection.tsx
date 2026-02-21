'use client';

import Image from 'next/image';
import { Brain, FileText, Atom, Video, BarChart2, Contact } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: 'Adaptive E-Learning Features',
      description: 'Adaptive Learning provides an intuitive, practical and highly interactive approach between the user and the platform.',
    },
    {
      icon: Video,
      title: 'Video Conferencing',
      description: 'Take your classes online with our fully integrated video conferencing system on our platform. No need to download any other app.',
    },
    {
      icon: FileText,
      title: 'Conduct Online Test',
      description: 'Create test papers and assign to individual or group of students. And check their performance graphically.',
    },
    {
      icon: BarChart2,
      title: 'Performance Analysis',
      description: 'Our Artificial intelligence tool helps in analyzing teachers and students performance',
    },
    {
      icon: Atom,
      title: 'Finance Management',
      description: 'This system manage student fees, school expenses, inventory and create realtime MIS view and much more.',
    },
    {
      icon: Contact,
      title: 'Integrated Communication',
      description: 'Official integrated communication platform for Schools, Teachers, Students and Parents',
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#5A6A85] mb-4">
            Why GradePlus is a right choice for you
          </h2>
          <p className="text-gray-500 max-w-4xl mx-auto text-sm md:text-base">
            GradePlus's advanced features makes it a best choice for your educational institute. 
            Find some advanced feature highlights of GradePlus.
          </p>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Left Side: Features Grid */}
          <div className="w-full lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                {/* Icon */}
                <div className="shrink-0 mt-1 text-[#016DAB]">
                  <feature.icon size={36} strokeWidth={2} />
                </div>
                
                {/* Text Content */}
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

          {/* Right Side: Illustration */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-500 aspect-square">
              <Image
                src="/school/features.png" 
                alt="GradePlus School Features"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 40vw"
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