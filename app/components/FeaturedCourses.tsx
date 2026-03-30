'use client';

import { useState } from 'react';
import { ArrowRight, Flame, Play, X } from 'lucide-react';
import Image from 'next/image';

const popularCourses = [
  { 
    id: 1, 
    name: 'Mole Concept | Lecture - 1 | NEET - Chemistry | Crash Course | NEET 2024', 
    channel: 'GradePlus Foundation',
    youtubeId: 'Lz0kJ0hT-Ic', 
    duration: '1:04:20',
    popular: true 
  },
  { 
    id: 2, 
    name: 'JEE Advanced Prep: Limits & Derivatives Masterclass', 
    channel: 'GradePlus Foundation',
    youtubeId: 'dZOAIvyzMSU',
    duration: '45:12',
    popular: false 
  },
  { 
    id: 3, 
    name: 'NEET Biology Focus: Human Anatomy Top 50 MCQs', 
    channel: 'GradePlus Foundation',
    youtubeId: '64Ld2OTXiAU',
    duration: '52:10',
    popular: true
  },
  { 
    id: 4, 
    name: 'Full-Stack Next.js: Build an AI App from Scratch', 
    channel: 'GradePlus Tech',
    youtubeId: 'agLaWA-O-pE',
    duration: '2:15:00',
    popular: false
  },
  { 
    id: 5, 
    name: 'Olympiad Training: Advanced Number Theory', 
    channel: 'GradePlus Foundation',
    youtubeId: 'vka6P22_MiM',
    duration: '38:45',
    popular: true
  },
];

const infiniteCourses = [...popularCourses, ...popularCourses];

const FeaturedCourses = () => {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  return (
    <>
      <section className="py-8 bg-slate-100 border-t border-slate-200 overflow-hidden relative">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-none tracking-tight">
                Featured <span className="text-red-600">Courses</span>
              </h2>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-slate-300"></span>
              <p className="hidden sm:block text-sm text-slate-500 font-medium">
                Watch our latest crash courses
              </p>
            </div>
            <button className="flex items-center gap-1 text-sm text-red-600 font-bold hover:text-red-700 transition-colors">
              View channel <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="relative w-full flex overflow-hidden">
          
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes infinite-scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(-50% - 8px)); } 
            }
            .animate-infinite-scroll {
              animation: infinite-scroll 40s linear infinite;
              ${playingVideoId ? 'animation-play-state: paused;' : ''}
            }
            .animate-infinite-scroll:hover {
              animation-play-state: paused;
            }
          `}} />

          <div className="flex w-max gap-5 px-4 md:px-8 animate-infinite-scroll pt-2 pb-4">
            {infiniteCourses.map((course, idx) => {
              return (
                <div 
                  key={`${course.id}-${idx}`} 
                  onClick={() => setPlayingVideoId(course.youtubeId)}
                  className="w-70 lg:w-85 shrink-0 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300  flex-col group hover:-translate-y-1 cursor-pointer block overflow-hidden text-left"
                >
                  
                  <div className="relative w-full aspect-video bg-slate-200 overflow-hidden">
                    <Image 
                      src={`https://img.youtube.com/vi/${course.youtubeId}/maxresdefault.jpg`} 
                      alt={course.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 280px, 340px"
                    />
                    
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300 shadow-lg">
                        <Play className="w-5 h-5 text-white ml-1" fill="currentColor" />
                      </div>
                    </div>

                    <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm tracking-wide">
                      {course.duration}
                    </div>
                  </div>

                  <div className="p-3.5 flex flex-col flex-1">
                    <h3 className="font-bold text-slate-900 text-sm leading-snug group-hover:text-red-600 transition-colors line-clamp-2 mb-1.5">
                      {course.name}
                    </h3>
                    
                    <span className="text-xs font-medium text-slate-500 mb-3">
                      {course.channel}
                    </span>

                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-100">
                      <div className="flex items-center gap-2">
                        {course.popular && (
                          <div className="flex items-center gap-0.5 bg-red-50 border border-red-100 text-red-600 text-[9px] font-bold uppercase px-1.5 py-0.5 rounded-md">
                            <Flame className="w-2.5 h-2.5" /> Trending
                          </div>
                        )}
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 group-hover:text-red-600 uppercase tracking-wider transition-colors">
                        Watch Video
                      </span>
                    </div>

                  </div>
                  
                </div>
              );
            })}
          </div>

          

        </div>
      </section>

      {playingVideoId && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-8">
          
          <div 
            className="absolute inset-0 "
            onClick={() => setPlayingVideoId(null)}
          ></div>

          <div className="relative w-full max-w-4xl bg-white p-2 md:p-3 rounded-2xl shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-300">
            
            <div className="flex justify-end pb-2 md:pb-3 pr-1 md:pr-2 pt-1">
              <button 
                onClick={() => setPlayingVideoId(null)}
                className="text-slate-500 hover:text-red-600 transition-colors bg-slate-100 hover:bg-red-50 rounded-full p-1.5"
                aria-label="Close video"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>

           
            <div className="relative w-full aspect-video bg-black rounded-lg md:rounded-xl overflow-hidden ring-1 ring-slate-200">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${playingVideoId}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default FeaturedCourses;