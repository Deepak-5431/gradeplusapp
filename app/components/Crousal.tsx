'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link'; 
import { ChevronLeft, ChevronRight, Play, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Crousal = () => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const slides = [
    {
      id: 'banner',
      type: 'full-bleed', 
      image: '/crowsel/banner.png', 
      mobileImage: '/crowsel/mobileview.png', 
      
      content: (
        <motion.div 
          className="text-white flex flex-row items-center text-center z-10 w-full max-w-xl p-4 md:p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          key={current} 
        >
        {/* <Link href="/know-more/mega-championship" className="flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-[0_4px_15px_rgba(0,0,0,0.5)] bg-slate-900/60 backdrop-blur-sm border-2 border-white/50 text-white hover:border-white hover:bg-white/20 text-sm">
              <Info className="w-4 h-4" /> Know More
            </Link> */}
        </motion.div>
      )
    },
    {
      id: 'ai-learning',
      type: 'full-bleed', 
      image: '/crowsel/one.png', 
      content: (
        <motion.div 
          className="text-white flex flex-col items-center md:items-start text-center md:text-left z-10 w-full max-w-xl p-4 md:p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          key={current} 
        >
          <div className="mb-8">
            <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4 [text-shadow:0px_2px_12px_rgba(0,0,0,0.9),0px_4px_25px_rgba(0,0,0,0.9)] text-white">
              AI-Powered Learning
            </h1>
            <p className="text-sm md:text-lg text-white/95 leading-relaxed font-semibold [text-shadow:0px_2px_8px_rgba(0,0,0,0.9),0px_2px_15px_rgba(0,0,0,0.8)]">
              Experience personalized education with our advanced AI technology that adapts to your learning style and pace.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start w-full">
            <a href="https://play.google.com/store/apps/details?id=com.app.iblib" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg bg-white text-[#016DAB] hover:bg-gray-100 text-sm">
              <Play className="w-4 h-4 fill-current" /> Play Store
            </a>
            <Link href="/know-more/ai-learning" className="flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-[0_4px_15px_rgba(0,0,0,0.5)] bg-slate-900/60 backdrop-blur-sm border-2 border-white/50 text-white hover:border-white hover:bg-white/20 text-sm">
              <Info className="w-4 h-4" /> Know More
            </Link>
          </div>
        </motion.div>
      )
    },
    {
      id: 'smart-assistant',
      type: 'full-bleed',
      image: '/crowsel/twoo.png',
      content: (
         <motion.div 
          className="text-white flex flex-col items-center md:items-start text-center md:text-left z-10 w-full max-w-xl p-4 md:p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          key={current} 
        >
          <div className="mb-8">
            <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4 [text-shadow:0px_2px_12px_rgba(0,0,0,0.9),0px_4px_25px_rgba(0,0,0,0.6)] text-white">
              Smart Study Assistant
            </h1>
            <p className="text-sm md:text-lg text-white/95 leading-relaxed font-semibold [text-shadow:0px_2px_8px_rgba(0,0,0,0.9),0px_2px_15px_rgba(0,0,0,0.8)]">
              Get instant help with our AI tutor available 24/7. Learn and practice in your own time and schedule beside given school assignments.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start w-full">
            <a href="https://play.google.com/store/apps/details?id=com.app.iblib" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg bg-white text-[#016DAB] hover:bg-gray-100 text-sm">
              <Play className="w-4 h-4 fill-current" /> Play Store
            </a>
            <Link href="/know-more/ai-learning" className="flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-[0_4px_15px_rgba(0,0,0,0.5)] bg-slate-900/60 backdrop-blur-sm border-2 border-white/50 text-white hover:border-white hover:bg-white/20 text-sm">
              <Info className="w-4 h-4" /> Know More
            </Link>
          </div>
        </motion.div>
      )
    },
    {
      id: 'self-paced',
      type: 'full-bleed',
      image: '/crowsel/thirdd.png',
       content: (
         <motion.div 
          className="text-white flex flex-col items-center md:items-start text-center md:text-left z-10 w-full max-w-xl p-4 md:p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          key={current} 
        >
          <div className="mb-8">
            <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4 [text-shadow:0px_2px_12px_rgba(0,0,0,0.9),0px_4px_25px_rgba(0,0,0,0.6)] text-white">
              Self-Paced Learning
            </h1>
            <p className="text-sm md:text-lg text-white/95 leading-relaxed font-semibold [text-shadow:0px_2px_8px_rgba(0,0,0,0.9),0px_2px_15px_rgba(0,0,0,0.8)]">
               You can learn and practice in your own time and schedule beside given school home assignments or exam.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start w-full">
            <a href="https://play.google.com/store/apps/details?id=com.app.iblib" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg bg-white text-[#016DAB] hover:bg-gray-100 text-sm">
              <Play className="w-4 h-4 fill-current" /> Play Store
            </a>
            <Link href="/know-more/ai-learning" className="flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-[0_4px_15px_rgba(0,0,0,0.5)] bg-slate-900/60 backdrop-blur-sm border-2 border-white/50 text-white hover:border-white hover:bg-white/20 text-sm">
              <Info className="w-4 h-4" /> Know More
            </Link>
          </div>
        </motion.div>
      )
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
        className="relative w-full overflow-hidden bg-slate-50"
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
      >
        <div className="relative w-full flex items-center min-h-145 md:min-h-0 md:h-112.5 lg:h-125">
          
          <AnimatePresence>
            {slides.map((slide, index) => {
              if (index !== current) return null; 

              return (
                <motion.div
                  key={slide.id}
                  className={`absolute inset-0 w-full h-full flex items-center`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  
                  {slide.type === 'full-bleed' && (
                    <>
                      <motion.div 
                        className="absolute inset-0 z-0"
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 1.1, opacity: 0 }}
                        transition={{ duration: 0.8 }}
                      >
                        {slide.mobileImage ? (
                          <>
                            <Image
                              src={slide.image}
                              alt="Carousel Background Desktop"
                              fill
                              className="object-cover hidden md:block" 
                              priority
                              quality={80}
                              sizes="100vw"
                            />
                            <Image
                              src={slide.mobileImage}
                              alt="Carousel Background Mobile"
                              fill
                              className="object-cover block md:hidden" 
                              priority
                              quality={80}
                              sizes="100vw"
                            />
                          </>
                        ) : (
                          <Image
                            src={slide.image}
                            alt="Carousel Background"
                            fill
                            className="object-cover"
                            priority
                            quality={80}
                            sizes="100vw"
                          />
                        )}
                      </motion.div>

                      {slide.id === 'banner' && (
                        <Link
                          href="/know-more/mega-championship"
                          aria-label="Open Mega Championship details"
                          className="absolute inset-0 z-10 cursor-pointer"
                        />
                      )}
                      
                      <div className={`relative z-20 mx-auto max-w-7xl px-4 md:px-8 lg:px-16 w-full flex justify-center md:justify-start h-full items-center ${slide.id === 'banner' ? 'pointer-events-none' : ''}`}>
                        {slide.content}
                      </div>
                    </>
                  )}

                  {slide.type === 'split' && (
                    <div className={`${slide} w-full h-full`}>
                      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 h-full">
                        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between h-full pt-10 pb-20 md:py-10 gap-6 md:gap-8">
                          
                          <div className="w-full md:w-1/2 flex justify-center md:justify-start z-10">
                            {slide.content}
                          </div>

                          <div className="w-full md:w-1/2 flex justify-center items-center shrink-0 md:shrink h-56 sm:h-72 md:h-full">
                            <div className="relative w-full h-full min-h-60 sm:min-h-70 md:min-h-95">
                              <Image
                                src={slide.image}
                                alt="Slide Image"
                                fill
                                className="object-contain drop-shadow-2xl"
                                priority={index === 0}
                                quality={80}
                                sizes="(max-width: 768px) 100vw, 50vw"
                              />
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  )}

                </motion.div>
              );
            })}
          </AnimatePresence>
          
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-slate-900/20 hover:bg-slate-900/40 backdrop-blur-md text-white p-2 md:p-3 rounded-full transition-all duration-300 transform hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-slate-900/20 hover:bg-slate-900/40 backdrop-blur-md text-white p-2 md:p-3 rounded-full transition-all duration-300 transform hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === current ? 'bg-white w-8 h-3 shadow-sm' : 'bg-white/40 w-3 h-3 hover:bg-white/80'
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