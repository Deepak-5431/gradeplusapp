'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

const StudentReviews = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Jenkins',
      role: 'High School Senior',
      avatar: '/client/client-01.1.png', 
      text: 'The Image Interpreter is a lifesaver! Whenever I get stuck on a tricky geometry diagram, I just snap a picture, and the AI instantly recognizes the problem and explains it.',
    },
    {
      id: 2,
      name: 'David Chen',
      role: 'College Freshman',
      avatar: '/client/client-2.png',
      text: 'I love the "Help Me to Solve" feature. Instead of just giving me the final answer, it acts like a real tutor, guiding me step-by-step so I actually learn the core concepts.',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: '10th Grade Student',
      avatar: '/client/client-3.png',
      text: 'Getting a Detailed Solution for my physics homework has boosted my grades so much. It breaks down complex equations into simple, easy-to-understand steps.',
    },
    {
      id: 4,
      name: 'Michael Chang',
      role: 'Middle School Student',
      avatar: '/client/client-4.jpg',
      text: 'Whenever I don\'t understand a math word problem, I just take a photo. The image interpreter scans it perfectly and gives me a detailed solution that makes complete sense.',
    },
    {
      id: 5,
      name: 'Jessica Taylor',
      role: 'High School Junior',
      avatar: '/client/client-5.png',
      text: 'The combination of the image scanner and the step-by-step solver makes studying for exams so much less stressful. It\'s the best AI study buddy I\'ve ever had!',
    },
  ];

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList()); 

    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('reInit', () => setScrollSnaps(emblaApi.scrollSnapList())); 
  }, [emblaApi, onSelect]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();
  const scrollTo = (index: number) => emblaApi && emblaApi.scrollTo(index);

  return (
    <section className="py-20 px-4 bg-gray-50 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-linear-to-r from-[#4A7BA7] to-[#016DAB] bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl px-4">
            See how our AI tools are helping students succeed...
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
            <div className="flex -ml-4"> 
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] pl-4 py-4"
                >
                  <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8 h-full hover:border-[#01CB89] hover:shadow-xl transition-all duration-300 transform md:hover:scale-105">
                    
                    <div className="flex justify-start mb-4 md:mb-6">
                      <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden bg-gray-100 shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="object-contain p-2"
                          sizes="(max-width: 768px) 80px, 100px"
                        />
                      </div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                      {testimonial.name}
                    </h3>

                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                      "{testimonial.text}"
                    </p>

                    <div className="pt-4 md:pt-6 border-t border-gray-200 mt-auto">
                      <p className="text-xs md:text-sm font-semibold text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {canScrollPrev && (
            <button
              onClick={scrollPrev}
              className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-linear-to-r from-[#016DAB] to-[#01CB89] text-white p-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {canScrollNext && (
            <button
              onClick={scrollNext}
              className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-linear-to-r from-[#016DAB] to-[#01CB89] text-white p-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        <div className="flex justify-center gap-2 mt-8 md:mt-12">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`transition-all duration-300 rounded-full ${
                index === selectedIndex
                  ? 'bg-[#016DAB] w-3 h-3'
                  : 'bg-gray-300 w-2 h-2 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentReviews;