'use client';

import { useState } from 'react';
import { BookOpen, Code, Brain, Globe, Calculator, Atom, FileText, Cpu, ChevronRight, Flame, ChevronDown } from 'lucide-react';

const courseData = [
  {
    id: 'foundation',
    title: 'K-12 Foundation',
    icon: BookOpen,
    courses: [
      { name: 'Mathematics Mastery', level: 'Class 6-10', desc: 'Core algebra, geometry, and early calculus.', icon: Calculator, highlighted: true, price: '₹1,999/mo' },
      { name: 'Science Explorer', level: 'Class 6-10', desc: 'Physics, chemistry, and biology fundamentals.', icon: Atom, price: '₹1,499/mo' },
      { name: 'English Literature', level: 'Class 8-12', desc: 'Reading comprehension and essay writing.', icon: FileText, price: '₹1,299/mo' },
      { name: 'Social Studies', level: 'Class 6-10', desc: 'History, Geography, and Civics foundation.', icon: Globe, price: '₹1,199/mo' }, 
    ]
  },
  {
    id: 'competitive',
    title: 'Competitive Exams',
    icon: Brain,
    courses: [
      { name: 'JEE Prep', level: 'Class 11-12', desc: 'Advanced engineering entrance preparation.', icon: Cpu, highlighted: true, price: '₹3,499/mo' },
      { name: 'NEET Focus', level: 'Class 11-12', desc: 'Comprehensive medical entrance biology.', icon: Atom, price: '₹3,499/mo' },
      { name: 'Olympiad Training', level: 'Class 8-10', desc: 'Advanced problem-solving techniques.', icon: Brain, price: '₹2,999/mo' },
    ]
  },
  {
    id: 'coding',
    title: 'Coding & AI',
    icon: Code,
    courses: [
      { name: 'Web Development', level: 'Beginner to Pro', desc: 'Build modern websites with React & Next.js.', icon: Code, highlighted: true, price: '₹2,499/mo' },
      { name: 'Python Basics', level: 'Beginner', desc: 'Learn programming fundamentals with Python.', icon: FileText, price: '₹1,999/mo' },
      { name: 'Intro to AI', level: 'Intermediate', desc: 'Understand the basics of Artificial Intelligence.', icon: Cpu, price: '₹2,999/mo' },
    ]
  },
  {
    id: 'languages',
    title: 'Language Arts',
    icon: Globe,
    courses: [
      { name: 'Spoken English', level: 'All Levels', desc: 'Improve fluency and public speaking skills.', icon: Globe, highlighted: true, price: '₹999/mo' },
      { name: 'French Basics', level: 'Beginner', desc: 'Introduction to French vocabulary and grammar.', icon: BookOpen, price: '₹1,499/mo' },
    ]
  }
];

const AboutUs = () => {
  const [activeCategory, setActiveCategory] = useState(courseData[0].id);

  const currentCourses = courseData.find(cat => cat.id === activeCategory)?.courses || [];

  return (
    <section className="py-20 bg-slate-100"> 
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Learning <span className="text-teal-600">Paths</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            Explore our comprehensive curriculum designed to build strong foundations and advanced skills at a comfortable pace.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          
          <div className="w-full lg:w-[30%] flex flex-col gap-2 bg-slate-50/60 p-3 rounded-3xl border border-slate-200/50">
            {courseData.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`group flex items-center justify-between w-full p-4 rounded-2xl text-left transition-all duration-500 border ${
                    isActive 
                      ? 'bg-white border-teal-100 shadow-sm text-teal-700 translate-x-1' 
                      : 'bg-transparent border-transparent text-slate-700 hover:bg-slate-200/50 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg transition-colors duration-500 ${isActive ? 'bg-teal-50 text-teal-600' : 'bg-slate-200/50 text-slate-500 group-hover:bg-white group-hover:text-slate-700'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`font-medium text-base ${isActive ? 'font-semibold' : ''}`}>{category.title}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-all duration-500 ease-out ${isActive ? 'opacity-100 text-teal-400 translate-x-0' : 'opacity-0 -translate-x-4'}`} />
                </button>
              );
            })}
          </div>

          <div className="w-full lg:w-[70%]">
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100">
              
              <h3 className="text-2xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100">
                {courseData.find(c => c.id === activeCategory)?.title} Courses
              </h3>
              
              <div className="relative">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 max-h-105 overflow-y-auto pr-2 pb-8 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  
                  {currentCourses.map((course, idx) => {
                    const CourseIcon = course.icon;
                    const isHighlighted = course.highlighted;

                    return (
                      <div 
                        key={idx} 
                        className={`relative flex flex-col overflow-hidden group rounded-2xl transition-all duration-300 border hover:-translate-y-1 ${
                          isHighlighted 
                            ? 'border-amber-200 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-100/40' 
                            : 'border-slate-200 hover:border-slate-300 hover:shadow-md'
                        }`}
                      >
                        <div className={`p-4 flex-1 ${isHighlighted ? 'bg-amber-50/40' : 'bg-white'}`}>
                          <div className="flex items-start justify-between gap-2">
                            
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 shrink-0 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105 ${
                                isHighlighted ? 'bg-amber-100 text-amber-600' : 'bg-slate-100 text-slate-600 group-hover:bg-teal-50 group-hover:text-teal-600'
                              }`}>
                                <CourseIcon className="w-5 h-5" />
                              </div>
                              <div>
                                <h4 className="text-base font-bold text-slate-900 leading-tight mb-1 group-hover:text-teal-700 transition-colors">
                                  {course.name}
                                </h4>
                                <div className="inline-block px-2 py-0.5 bg-slate-100 border border-slate-200 text-slate-600 text-[10px] font-semibold rounded">
                                  {course.level}
                                </div>
                              </div>
                            </div>

                            {isHighlighted && (
                              <div className="flex shrink-0 items-center gap-1 bg-linear-to-r from-amber-100 to-orange-100 border border-amber-200 text-amber-700 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md shadow-sm">
                                <Flame className="w-3 h-3 fill-amber-500 text-amber-500" />
                                Popular
                              </div>
                            )}
                          </div>

                          <p className="text-sm text-slate-600 leading-relaxed mt-3 line-clamp-2">
                            {course.desc}
                          </p>
                        </div>

                        <div className={`px-4 py-3 border-t flex items-center justify-between ${
                          isHighlighted ? 'bg-amber-100/30 border-amber-100' : 'bg-slate-50 border-slate-100'
                        }`}>
                          <div className="flex flex-col">
                            <span className="text-[10px] uppercase tracking-wide font-semibold text-slate-500 mb-0.5">Starting at</span>
                            <span className="text-base font-bold text-slate-900">{course.price}</span>
                          </div>
                          <button className={`px-4 py-1.5 text-sm font-semibold rounded-lg transition-all duration-300 ${
                            isHighlighted 
                              ? 'bg-amber-500 text-white hover:bg-amber-600 shadow-sm shadow-amber-200' 
                              : 'bg-white border border-slate-200 text-slate-800 hover:bg-slate-100 hover:border-slate-300'
                          }`}>
                            Book Seat
                          </button>
                        </div>

                      </div>
                    );
                  })}
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white via-white/80 to-transparent pointer-events-none flex items-end justify-center pb-2">
                  <button className="pointer-events-auto flex items-center gap-2 px-5 py-2 bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-700 rounded-full text-sm font-semibold transition-all shadow-sm hover:shadow-md translate-y-2">
                    View More Courses <ChevronDown className="w-4 h-4" />
                  </button>
                </div>

              </div>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;