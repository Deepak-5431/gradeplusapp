'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function CourseBannersFinal() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('Academic');
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const carouselImages = [
    { id: 1, src: '/course/class-6-hn.webp', alt: 'Class 6 Course', link: '/courses/details/46' },
    { id: 2, src: '/course/class-7.webp', alt: 'Class 7 Course', link: '/courses/details/48' },
    { id: 3, src: '/course/class-6.webp', alt: 'Class 6 Course Variant', link: '/courses/details/46' }
  ];

  const exploreCards = [
    { id: 'Academic', title: 'Academic Courses', img: '/course/academic.jpg', link: '/academic' },
    { id: 'Government', title: 'Government Exams', img: '/course/government.webp', link: '/government' },
    { id: 'Entrance', title: 'Entrance Exams', img: '/course/entrance.webp', link: '/entrance' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [carouselImages.length]);

  useEffect(() => {
    if (carouselRef.current) {
      const childWidth = carouselRef.current.clientWidth; 
      carouselRef.current.scrollTo({
        left: currentIndex * childWidth,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  return (
    <div className="w-full bg-[#fdfbf7] py-8 px-4 md:px-6 font-sans">
      <div className="max-w-6xl mx-auto space-y-12">

        <section>
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-5">
            Online Courses
          </h2>
          
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide [&::-webkit-scrollbar]:hidden"
          >
            {carouselImages.map((banner) => (
              <div 
                key={banner.id} 
                onClick={() => router.push(banner.link)} 
                className="shrink-0 w-full snap-center rounded-xl overflow-hidden  border-slate-200 shadow-sm cursor-pointer"
              >
                <img 
                  src={banner.src} 
                  alt={banner.alt} 
                  className="w-full h-auto object-cover block"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-2 mt-4">
            {carouselImages.map((_, i) => (
              <div 
                key={i} 
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === i ? 'bg-blue-600 w-6' : 'bg-slate-300 w-2'
                }`} 
              />
            ))}
          </div>
        </section>

        {/* --- 2. EXPLORE COURSES --- */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-5">
            Explore Courses
          </h2>
          
          {/* FIXED: Added justify-items-center to keep the smaller cards perfectly centered in their columns */}
          <div className="grid grid-cols-3 gap-3 md:gap-5 justify-items-center">
            {exploreCards.map((card) => {
              const isActive = activeTab === card.id;
              
              return (
                <div 
                  key={card.id}
                  onClick={() => {
                    setActiveTab(card.id);
                    router.push(card.link);
                  }} 
                  className={`w-full max-w-32.5 sm:max-w-45 md:max-w-60 relative rounded-xl overflow-hidden bg-white cursor-pointer transition-all duration-300 group ${
                    isActive 
                      ? '   -translate-y-1' 
                      : 'border border-slate-200 shadow-sm hover:border-blue-300 hover:-translate-y-0.5'
                  }`}
                >
                  <img 
                    src={card.img} 
                    alt={card.title} 
                    className={`w-full h-auto object-cover transition-transform duration-500 block ${
                      isActive ? 'scale-105' : 'group-hover:scale-105'
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
}