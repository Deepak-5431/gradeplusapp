'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

const Schools = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center', slidesToScroll: 2 });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const testimonials = [
    {
      id: 1,
      schoolName: 'St Gabriel Convent',
      role: 'School Principal',
      logo: '/client/client-01.1.png',
      text: 'Always available to answer any questions. Very knowledgeable about the services they provide. Would recommend to everyone!',
    },
    {
      id: 2,
      schoolName: 'Samir International',
      role: 'School Principal',
      logo: '/client/client-2.png',
      text: 'I feel privileged to share my views on IBLIB, it\'s not been too much time connected with them but I can say that my teaching staff and students are delighted nd comfortable in using it.',
    },
    {
      id: 3,
      schoolName: 'Delhi Public School',
      role: 'Academic Head',
      logo: '/client/client-3.png',
      text: 'The platform has revolutionized how we manage our curriculum. The interface is intuitive and students love using it for their studies.',
    },
    {
      id: 4,
      schoolName: 'Modern Education Institute',
      role: 'Director',
      logo: '/client/client-4.jpg',
      text: 'Outstanding support team and seamless integration with our existing systems. Highly appreciated by both staff and students.',
    },
    {
      id: 5,
      schoolName: 'Cambridge International',
      role: 'School Principal',
      logo: '/client/client-5.png',
      text: 'The analytics and reporting features have given us invaluable insights into student performance and learning patterns.',
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
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();
  const scrollTo = (index: number) => emblaApi && emblaApi.scrollTo(index);

  const totalSlides = Math.ceil(testimonials.length / 2);

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#4A7BA7] to-[#016DAB] bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-gray-600 text-xl">
            Here What our Users Say...
          </p>
        </div>

        {/* Embla Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="min-w-0 flex-[0_0_50%] md:flex-[0_0_50%] lg:flex-[0_0_50%] p-4"
                >
                  <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 h-full hover:border-[#01CB89] hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    {/* Logo */}
                    <div className="flex justify-start mb-6">
                      <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                        <Image
                          src={testimonial.logo}
                          alt={testimonial.schoolName}
                          fill
                          className="object-contain p-2"
                          sizes="100px"
                        />
                      </div>
                    </div>

                    {/* School Name */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {testimonial.schoolName}
                    </h3>

                    {/* Testimonial Text */}
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {testimonial.text}
                    </p>

                    {/* Role */}
                    <div className="pt-6 border-t border-gray-200">
                      <p className="text-sm font-semibold text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          {canScrollPrev && (
            <button
              onClick={scrollPrev}
              className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-[#016DAB] to-[#01CB89] text-white p-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {canScrollNext && (
            <button
              onClick={scrollNext}
              className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-[#016DAB] to-[#01CB89] text-white p-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index * 2)}
              className={`transition-all duration-300 rounded-full ${
                index === selectedIndex
                  ? 'bg-[#016DAB] w-3 h-3'
                  : 'bg-gray-300 w-2 h-2 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonials ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schools;
