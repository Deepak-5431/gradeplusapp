'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface ApiCourse {
  id: string | number;
  text: string;
  image: string;
  type?: string;
}

interface Banner {
  id: number | string;
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

export default function CourseBannersFinal({ 
  apiCourses = [] 
}: { 
  apiCourses?: ApiCourse[] 
}) {
  const router = useRouter();

  const carouselPlugins = useMemo(() => [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })], []);
  const explorePlugins = useMemo(() => [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })], []);
  
  const [carouselRef, carouselApi] = useEmblaCarousel({ align: 'start', loop: true }, carouselPlugins);
  const [exploreRef, exploreApi] = useEmblaCarousel({ align: 'start', loop: true }, explorePlugins);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [exploreIndex, setExploreIndex] = useState(0);

  const carouselImages: Banner[] = apiCourses.length > 0 
    ? apiCourses.map((course) => ({
        id: course.id,
        src: course.image,
        alt: course.text,
        link: `/courses/details/${course.id}` 
      }))
    : [
        { id: 1, src: '/course/class-6-hn.webp', alt: 'Class 6 Course', link: '/courses/details/46' },
        { id: 2, src: '/course/class-7.webp', alt: 'Class 7 Course', link: '/courses/details/48' },
        { id: 3, src: '/course/class-6.webp', alt: 'Class 6 Course Variant', link: '/courses/details/46' }
      ];

  const exploreCards: ExploreCard[] = [
    { id: 'Academic', title: 'Academic Courses', img: '/course/academic.jpg', link: '/courses/academics' },
    { id: 'Government', title: 'Government Exams', img: '/course/government.webp', link: '/courses/government' },
    { id: 'Entrance', title: 'Entrance Exams', img: '/course/entrance.webp', link: '/courses/entrance' }
  ];

  useEffect(() => {
    if (carouselApi) carouselApi.reInit();
  }, [carouselApi, carouselImages.length]);

  useEffect(() => {
    if (exploreApi) exploreApi.reInit();
  }, [exploreApi, exploreCards.length]);

  useEffect(() => {
    if (!carouselApi) return;
    const onSelect = () => setCurrentIndex(carouselApi.selectedScrollSnap());
    carouselApi.on('select', onSelect);
    return () => { carouselApi.off('select', onSelect); };
  }, [carouselApi]);

  useEffect(() => {
    if (!exploreApi) return;
    const onSelect = () => setExploreIndex(exploreApi.selectedScrollSnap());
    exploreApi.on('select', onSelect);
    return () => { exploreApi.off('select', onSelect); };
  }, [exploreApi]);

  const scrollToCarousel = useCallback((index: number) => carouselApi?.scrollTo(index), [carouselApi]);
  const scrollToExplore = useCallback((index: number) => exploreApi?.scrollTo(index), [exploreApi]);

  if (carouselImages.length === 0) return null;

  return (
    
<div className="w-full bg-[#0B1120] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[32px_32px] py-16 font-sans">      <div className="max-w-7xl mx-auto space-y-16 px-4 sm:px-6 lg:px-8">

      
        <div className="flex justify-center mb-6">
          <div className="relative inline-flex group cursor-pointer">
            <div className="absolute inset-0 bg-emerald-500/20 blur-md rounded-full group-hover:bg-emerald-500/30 transition-all duration-500"></div>
            
            <button 
            //  onClick={() => console.log('Route to Intelligence!')} 
              className="relative flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-emerald-500/40 bg-slate-950/80 backdrop-blur-sm text-emerald-400 font-bold tracking-widest text-sm sm:text-base shadow-[0_0_15px_rgba(16,185,129,0.15)] group-hover:border-emerald-400 group-hover:text-emerald-300 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.25)] transition-all"
            >
              <svg 
                className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300 transition-colors" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"/>
                <circle cx="6" cy="18" r="1"/>
              </svg>
              GRADEPLUS SUPER COURSES
            </button>
          </div>
        </div>


        
        <section>
          <div className="text-center mb-10 px-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Trending Online Courses
            </h2>
            <p className="text-slate-400 mt-3 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Experience the next generation of learning. Watch as our interactive modules and expert teachers guide you to top percentiles.
            </p>
          </div>
          
          <div className="overflow-hidden select-none" ref={carouselRef}>
            <div className="flex -ml-4">
              {carouselImages.map((banner, i) => (
                <div
                  key={banner.id}
                  onClick={() => router.push(banner.link)}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4 cursor-pointer group"
                >
                  <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-slate-800 shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:border-emerald-500/50 group-hover:shadow-emerald-500/10">
                    <Image
                      src={banner.src}
                      alt={banner.alt}
                      fill
                      priority={i === 0}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center gap-2 mt-6">
            {carouselImages.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToCarousel(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === i ? 'bg-emerald-400 w-8' : 'bg-slate-700 w-2 hover:bg-slate-500'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </section>


        
        <section>
          <div className="text-center mb-10 px-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Explore Academic Courses
            </h2>
            <p className="text-slate-400 mt-3 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Master your school curriculum with our comprehensive interactive classes and study materials designed specifically for your board.
            </p>
          </div>
          
          <div className="overflow-hidden select-none" ref={exploreRef}>
            <div className="flex -ml-4">
              {exploreCards.map((card) => (
                <div
                  key={card.id}
                  onClick={() => router.push(card.link)}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4 cursor-pointer group"
                >
                  <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-slate-800 shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:border-emerald-500/50 group-hover:shadow-emerald-500/10">
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-900/40 to-transparent flex items-end p-5">
                      <span className="text-white font-bold text-lg tracking-wide group-hover:text-emerald-300 transition-colors">
                        {card.title}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center gap-2 mt-6">
            {exploreCards.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToExplore(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  exploreIndex === i ? 'bg-emerald-400 w-8' : 'bg-slate-700 w-2 hover:bg-slate-500'
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