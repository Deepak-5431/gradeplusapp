'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface Banner {
  id: number;
  src: string;
  alt: string;
  link: string;
}

interface ExploreCard {
  id: string;
  title: string;
  img: string;
  link: string;
}

export default function CourseBannersFinal() {
  const router = useRouter();
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [exploreIndex, setExploreIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const carouselRef = useRef<HTMLDivElement>(null);
  const exploreRef = useRef<HTMLDivElement>(null);

  const carouselImages: Banner[] = [
    { id: 1, src: '/course/class-6-hn.webp', alt: 'Class 6 Course', link: '/courses/details/46' },
    { id: 2, src: '/course/class-7.webp', alt: 'Class 7 Course', link: '/courses/details/48' },
    { id: 3, src: '/course/class-6.webp', alt: 'Class 6 Course Variant', link: '/courses/details/46' }
  ];

  const exploreCards: ExploreCard[] = [
    { id: 'Academic', title: 'Academic Courses', img: '/course/academic.jpg', link: '/courses/academics' },
    { id: 'Government', title: 'Government Exams', img: '/course/government.webp', link: '/courses/government' },
    { id: 'Entrance', title: 'Entrance Exams', img: '/course/entrance.webp', link: '/courses/entrance' }
  ];

  const scrollToInternal = useCallback((container: HTMLDivElement | null, index: number) => {
    if (container && container.children[index]) {
      const target = container.children[index] as HTMLElement;
      container.scrollTo({
        left: target.offsetLeft - container.offsetLeft,
        behavior: 'smooth',
      });
    }
  }, []);

  // NEW: Syncs the active dot when the user manually swipes
  const handleScrollSync = useCallback((
    container: HTMLDivElement | null, 
    setIndex: React.Dispatch<React.SetStateAction<number>>
  ) => {
    if (!container || !container.children.length) return;

    let closestIndex = 0;
    let minDistance = Infinity;

    Array.from(container.children).forEach((child, index) => {
      const target = child as HTMLElement;
      const distance = Math.abs(target.offsetLeft - container.offsetLeft - container.scrollLeft);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setIndex((prev) => (prev === closestIndex ? prev : closestIndex));
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
      setExploreIndex((prev) => (prev + 1) % exploreCards.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, carouselImages.length, exploreCards.length]);

  // UPDATED: Only programmatic scroll if the user isn't interacting
  useEffect(() => {
    if (!isPaused) {
      scrollToInternal(carouselRef.current, currentIndex);
    }
  }, [currentIndex, isPaused, scrollToInternal]);

  useEffect(() => {
    if (!isPaused) {
      scrollToInternal(exploreRef.current, exploreIndex);
    }
  }, [exploreIndex, isPaused, scrollToInternal]);

  return (
    <div 
      className="w-full bg-[#fdfbf7] py-6 font-sans select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto space-y-10 px-4 sm:px-6 lg:px-8">

        {/* --- SECTION 1: ONLINE COURSES --- */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4 ml-1">Online Courses</h2>
          <div
            ref={carouselRef}
            onScroll={() => handleScrollSync(carouselRef.current, setCurrentIndex)} // ADDED ONSCROLL
            className="flex overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide [&::-webkit-scrollbar]:hidden"
          >
            {carouselImages.map((banner, i) => (
              <div
                key={banner.id}
                onClick={() => router.push(banner.link)}
                className="shrink-0 w-full sm:w-1/2 lg:w-1/3 snap-center px-2 cursor-pointer group"
              >
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-200 shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
                  <Image
                    src={banner.src}
                    alt={banner.alt}
                    fill
                    priority={i === 0}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-1.5 mt-3">
            {carouselImages.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrentIndex(i);
                  scrollToInternal(carouselRef.current, i); // Force programmatic scroll on click
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === i ? 'bg-blue-600 w-6' : 'bg-slate-300 w-2'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </section>

        {/* --- SECTION 2: EXPLORE COURSES --- */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4 ml-1">Explore Courses</h2>
          <div
            ref={exploreRef}
            onScroll={() => handleScrollSync(exploreRef.current, setExploreIndex)} // ADDED ONSCROLL
            className="flex overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide [&::-webkit-scrollbar]:hidden"
          >
            {exploreCards.map((card) => (
              <div
                key={card.id}
                onClick={() => router.push(card.link)}
                className="shrink-0 w-full sm:w-1/2 lg:w-1/3 snap-center px-2 cursor-pointer group"
              >
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-200 shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent flex items-end p-3">
                    <span className="text-white font-medium text-sm sm:text-base">{card.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-1.5 mt-1">
            {exploreCards.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setExploreIndex(i);
                  scrollToInternal(exploreRef.current, i); // Force programmatic scroll on click
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  exploreIndex === i ? 'bg-blue-600 w-6' : 'bg-slate-300 w-2'
                }`}
                aria-label={`Go to card ${i + 1}`}
              />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}