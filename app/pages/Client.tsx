'use client';

import  { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';

interface SchoolReview {
  id: number;
  schoolName: string;
  role: string;
  logo: string;
  text: string;
}

const schoolReviews: SchoolReview[] = [
  {
    id: 1,
    schoolName: 'YADUVANSHI ADARSH INTER COLLEGE',
    role: 'School Principal',
    logo: '/client/client-01.1.png',
    text: 'Always available to answer any questions. Very knowledgeable about the services they provide. Would recommend to everyone!',
  },
  {
    id: 2,
    schoolName: 'NEW VISION INTER COLLEGE',
    role: 'School Principal',
    logo: '/client/client-2.png',
    text: 'I feel privileged to share my views on IBLIB, it\'s not been too much time connected with them but I can say that my teaching staff and students are delighted nd comfortable in using it.',
  },
  {
    id: 3,
    schoolName: 'R.S.D.D INTER COLLEGE',
    role: 'Academic Head',
    logo: '/client/client-3.png',
    text: 'The platform has revolutionized how we manage our curriculum. The interface is intuitive and students love using it for their studies.',
  },
  {
    id: 4,
    schoolName: 'R.P ADACDEMY',
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
  {
    id: 6, 
    schoolName: 'Global International Academy',
    role: 'Dean of Academics',
    logo: '/client/client-2.png', 
    text: 'An absolute game-changer for our administrative and academic staff. GradePlus simplifies daily tasks and improves communication across the board.',
  }
];

const Client = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [autoPlay, setAutoPlay] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('reInit', () => setScrollSnaps(emblaApi.scrollSnapList()));
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi || !autoPlay) return;
    const timer = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);
    return () => clearInterval(timer);
  }, [emblaApi, autoPlay]);

  const scrollTo = (index: number) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
    setAutoPlay(false);
  };

  return (
    <section className="bg-gray-50 py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by <span className="bg-linear-to-r from-[#016DAB] to-[#01CB89] bg-clip-text text-transparent">Leading Organizations</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover what industry leaders say about their experience with GradePlus
          </p>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
          onTouchStart={() => setAutoPlay(false)}
          onTouchEnd={() => setAutoPlay(true)}
        >
          <div className="overflow-hidden px-4 -mx-4" ref={emblaRef}>
            <div className="flex -ml-4 py-6"> 
              {schoolReviews.map((review) => (
                <div 
                  key={review.id} 
                  className="min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4"
                >
                  <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 h-full hover:border-[#01CB89] hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col">
                    <div className="flex justify-start mb-6">
                      <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-gray-100 shrink-0">
                        <Image
                          src={review.logo}
                          alt={review.schoolName}
                          fill
                          className="object-contain p-2"
                          sizes="100px"
                        />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {review.schoolName}
                    </h3>

                    <p className="text-gray-700 leading-relaxed mb-6 grow">
                      "{review.text}"
                    </p>

                    <div className="pt-6 border-t border-gray-200 mt-auto">
                      <p className="text-sm font-semibold text-gray-600">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8 md:mt-12">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`transition-all duration-300 rounded-full ${
                index === selectedIndex 
                  ? 'bg-linear-to-r from-[#016DAB] to-[#01CB89] w-8 h-3' 
                  : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Client;