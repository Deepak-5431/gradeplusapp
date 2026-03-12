'use client';

import { useState } from 'react';
import { BookOpen, Code, Brain, Globe, Calculator, Atom, FileText, Cpu, ChevronRight, Zap } from 'lucide-react';

const courseData = [
  {
    id: 'foundation',
    title: 'K-12 Foundation',
    icon: BookOpen,
    courses: [
      { name: 'Mathematics Mastery', level: 'Class 6-10', desc: 'Core algebra, geometry, and early calculus.', icon: Calculator, highlighted: true, price: '₹1,999/mo' },
      { name: 'Science Explorer', level: 'Class 6-10', desc: 'Physics, chemistry, and biology fundamentals.', icon: Atom, price: '₹1,499/mo' },
      { name: 'English Literature', level: 'Class 8-12', desc: 'Reading comprehension and essay writing.', icon: FileText, price: '₹1,299/mo' },
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
    <section className="py-20 bg-slate-50"> 
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
          
          <div className="w-full lg:w-[30%] flex flex-col gap-2 bg-slate-100/60 p-3 rounded-3xl border border-slate-200/50">
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
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 min-h-100">
              
              <h3 className="text-2xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100">
                {courseData.find(c => c.id === activeCategory)?.title} Courses
              </h3>
              
              <div className="grid border-black grid-cols-1 xl:grid-cols-2 gap-6">
                {currentCourses.map((course, idx) => {
                  const CourseIcon = course.icon;
                  const isHighlighted = course.highlighted;

                  return (
                    <div 
                      key={idx} 
                      className={`relative  flex flex-col overflow-hidden group rounded-2xl transition-all duration-500 border hover:-translate-y-1 ${
                        isHighlighted 
                          ? 'border-violet-200 hover:border-violet-300 hover:shadow-lg hover:shadow-violet-100/50' 
                          : 'border-slate-200 hover:border-slate-300 hover:shadow-md'
                      }`}
                    >
                      <div className={`p-6 flex-1 ${isHighlighted ? 'bg-violet-50/30' : 'bg-white'}`}>
                        {isHighlighted && (
                          <div className="absolute top-4 right-4 flex items-center gap-1 bg-white border border-violet-100 text-violet-600 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                            <Zap className="w-3 h-3 fill-violet-100" />
                            Neural Choice
                          </div>
                        )}

                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-105 ${
                          isHighlighted ? 'bg-violet-100 text-violet-600' : 'bg-slate-100 text-slate-600 group-hover:bg-cyan-50 group-hover:text-cyan-600'
                        }`}>
                          <CourseIcon className="w-6 h-6" />
                        </div>
                        
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="text-lg font-semibold text-slate-900 transition-colors">
                            {course.name}
                          </h4>
                        </div>
                        
                        <div className="inline-block mb-3 px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md">
                          {course.level}
                        </div>

                        <p className="text-sm text-slate-600 leading-relaxed">
                          {course.desc}
                        </p>
                      </div>

                      <div className={`px-6 py-4 border-t flex items-center justify-between ${
                        isHighlighted ? 'bg-violet-100/40 border-violet-100' : 'bg-slate-50 border-slate-100'
                      }`}>
                        <div className="flex flex-col">
                          <span className="text-xs font-medium text-slate-500 mb-0.5">Starting at</span>
                          <span className="text-lg font-bold text-slate-900">{course.price}</span>
                        </div>
                        <button className={`px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
                          isHighlighted 
                            ? 'bg-violet-600 text-white hover:bg-violet-700 shadow-sm shadow-violet-200' 
                            : 'bg-white border border-slate-200 text-slate-800 hover:bg-slate-100 hover:border-slate-300'
                        }`}>
                          Book a Seat
                        </button>
                      </div>

                    </div>
                  );
                })}
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;