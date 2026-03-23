'use client';

import { useState, useEffect, useRef } from 'react';
import { BookOpen, GraduationCap, Building2, CheckCircle2, ChevronRight } from 'lucide-react';

const mainCategories = [
  {
    id: 'academic',
    title: 'Academic Courses',
    desc: 'Master your school curriculum. Comprehensive classes for CBSE, ICSE, UP Board, and more from Class 6 to 12.',
    icon: BookOpen,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50',
    activeBorder: 'border-blue-500',
    subCourses: [
      { name: 'Class 6', subtitle: 'Foundation' },
      { name: 'Class 7', subtitle: 'Foundation' },
      { name: 'Class 8', subtitle: 'Foundation' },
      { name: 'Class 9', subtitle: 'Foundation' },
      { name: 'Class 10', subtitle: 'Board perp'},
      { name: 'Class 11', subtitle: 'Board Prep'},
      { name: 'Class 12', subtitle: 'Advanced'},
      { name: 'Olympiad', subtitle: 'Competitive'}
    ]
  },
  {
    id: 'entrance',
    title: 'Entrance Exams',
    desc: 'Prepare for top engineering and medical exams like JEE Main/Advanced and NEET with expert guidance.',
    icon: GraduationCap,
    iconColor: 'text-indigo-600',
    iconBg: 'bg-indigo-50',
    activeBorder: 'border-indigo-500',
    subCourses: [
      { name: 'JEE Main & Adv', subtitle: 'Engineering' },
      { name: 'NEET UG', subtitle: 'Medical' },
      { name: 'CUET', subtitle: 'University' },
      { name: 'NDA', subtitle: 'Defence' }
    ]
  },
  {
    id: 'gov',
    title: 'Government Exams',
    desc: 'Secure your future. Dedicated preparation for UPSC, SSC, Banking, and State Teaching exams.',
    icon: Building2,
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-50',
    activeBorder: 'border-emerald-500',
    subCourses: [
      { name: 'SSC CGL / CHSL', subtitle: 'Staff Selection' },
      { name: 'Banking PO & Clerk', subtitle: 'IBPS / SBI' },
      { name: 'UPSC CSE', subtitle: 'Civil Services' },
      { name: 'State TET', subtitle: 'Teaching' }
    ]
  }
];

const ExploreCourses = () => {
  const [activeCategory, setActiveCategory] = useState(mainCategories[0].id);

  const activeData = mainCategories.find(cat => cat.id === activeCategory);

  // --- AUTO SCROLL LOGIC ---
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeData || !scrollRef.current) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        
        // Check if scrolled to the end (with a 10px buffer)
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          // Snap back to the start
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Scroll right by roughly one card width (approx 220px)
          scrollRef.current.scrollBy({ left: 220, behavior: 'smooth' });
        }
      }
    }, 3000); // 3 seconds

    // Clear interval on unmount or when changing categories
    return () => clearInterval(interval);
  }, [activeData]);
  // -------------------------

  return (
    <section className="relative py-24 bg-slate-50 min-h-screen font-sans flex flex-col justify-center overflow-hidden">

      <div className="absolute top-0 left-[-10%] w-125 h-125 rounded-full bg-blue-400/5 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-125 h-125 rounded-full bg-teal-400/5 blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 w-full">

        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6 tracking-tight">
            Choose Your <span className="text-indigo-600 bg-indigo-50 px-4 py-1 rounded-2xl inline-block mt-2 md:mt-0">Pathway</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            Whether you are focusing on school boards, cracking a competitive entrance, or aiming for a government job, we have a structured path for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {mainCategories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group text-left flex flex-col bg-white rounded-4xl p-8 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border-2 ${isActive
                    ? `${category.activeBorder} shadow-[0_8px_30px_rgba(0,0,0,0.08)] -translate-y-2`
                    : 'border-transparent hover:border-slate-200 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] opacity-80 hover:opacity-100'
                  }`}
              >

                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'} ${category.iconBg} ${category.iconColor}`}>
                  <Icon className="w-6 h-6" strokeWidth={2.5} />
                </div>

                <div className="flex-1 mb-8">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">
                    {category.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    {category.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 w-full">
                  <span className={`text-sm font-bold transition-colors ${isActive ? category.iconColor : 'text-slate-400'}`}>
                    {isActive ? 'Currently Selected' : 'Select Pathway'}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isActive ? category.iconBg + ' ' + category.iconColor : 'bg-slate-100 text-slate-400'}`}>
                    {isActive ? <CheckCircle2 className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                  </div>
                </div>

              </button>
            );
          })}
        </div>

        {activeData && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-center mb-6 px-2">
              <h3 className="text-xl font-bold text-slate-800">
                Available in <span >{activeData.title}</span>
              </h3>
            </div>

            {/* Attached scrollRef to this scrollable container */}
            <div ref={scrollRef} className="w-full overflow-x-auto pb-6 px-2 hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
              <div className="flex w-max min-w-full justify-start gap-4 md:justify-center">
                {activeData.subCourses.map((sub, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col justify-center min-w-50 bg-white p-5 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all cursor-pointer group shrink-0"
                  >
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                      {sub.subtitle}
                    </span>
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-bold text-slate-800 group-hover:text-slate-900">
                        {sub.name}
                      </h4>
                      <ChevronRight className={`w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all ${activeData.iconColor}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default ExploreCourses;