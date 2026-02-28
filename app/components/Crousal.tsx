'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Play, Phone } from 'lucide-react';

const Crousal = () => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const slides = [
    {
      title: 'AI-Powered Learning',
      description: 'Experience personalized education with our advanced AI technology that adapts to your learning style and pace.',
      image: '/crowsel/a13.png',
      buttons: [
        { text: 'Play Store', icon: Play },
        { text: 'Ask For Demo', icon: Phone }
      ]
    },
    {
      title: 'Smart Study Assistant',
      description: 'Get instant help with our AI tutor available 24/7. Learn and practice in your own time and schedule beside given school assignments.',
      image: '/crowsel/aipowers.png',
      buttons: [
        { text: 'Play Store', icon: Play },
        { text: 'Ask For Demo', icon: Phone }
      ]
    },
    {
      title: 'Self-Paced Learning',
      description: 'You can learn and practice in your own time and schedule beside given school home assignments or exam.',
      image: '/crowsel/selfpacedlearning.png',
      buttons: [
        { text: 'Play Store', icon: Play },
        { text: 'Ask For Demo', icon: Phone }
      ]
    }
  ];

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay, slides.length]);

  const goToSlide = (index: number) => {
    setCurrent(index);
    setAutoPlay(false);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoPlay(false);
  };

  return (
    <section className="w-full">
      <div
        className="relative w-full bg-linear-to-r from-[#016DAB] to-[#01CB89] overflow-hidden"
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
      >
        <div className="relative w-full h-162.5 md:h-112.5 lg:h-125">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === current ? 'opacity-100' : 'opacity-0 z-0'
              } ${index === current ? 'z-10' : ''}`}
            >
              <div className="container mx-auto px-4 md:px-8 lg:px-16 h-full">
                <div className="flex flex-col md:flex-row items-center justify-between h-full py-10 md:py-12 gap-8">
                  
                  <div className="w-full md:w-1/2 text-white space-y-4 md:space-y-6 mt-8 md:mt-0 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-xl mx-auto md:mx-0">
                      {slide.description}
                    </p>
                    
                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 pt-2 justify-center md:justify-start">
                      {slide.buttons.map((button, idx) => {
                        const Icon = button.icon;
                        return (
                          <button
                            key={idx}
                            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg ${
                              idx === 0
                                ? 'bg-white text-[#016DAB] hover:bg-gray-100'
                                : 'bg-transparent border-2 border-white text-white hover:bg-white/10'
                            }`}
                          >
                            <Icon className="w-5 h-5" />
                            {button.text}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right Side - Image */}
                  <div className="w-full md:w-1/2 flex justify-center items-center h-80 md:h-full">
                    <div className="relative w-full h-full min-h-80 md:min-h-96">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-contain drop-shadow-2xl"
                        priority={index === 0}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-all duration-300 transform hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-all duration-300 transform hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === current
                  ? 'bg-white w-8 h-3'
                  : 'bg-white/50 w-3 h-3 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Crousal;