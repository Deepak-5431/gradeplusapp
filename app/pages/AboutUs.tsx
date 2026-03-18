'use client';

import { useState } from 'react';
import { 
  Search, BookOpen, MonitorPlay, Users, FileText, 
  Clock, ArrowRight, Flame, GraduationCap, Calendar
} from 'lucide-react';

const courseCatalog = [
  {
    id: 1,
    title: 'JEE Advanced Physics Mastery',
    desc: 'Complete physics curriculum with advanced problem-solving techniques.',
    class: 'Class 12',
    type: 'Recorded',
    year: '2025',
    price: '₹3,499',
    originalPrice: '₹5,000',
    popular: true,
  },
  {
    id: 2,
    title: 'NEET Biology Crash Course',
    desc: 'High-yield biology revision covering NCERT line-by-line.',
    class: 'Dropper',
    type: 'Live',
    year: '2025',
    price: '₹2,999',
    originalPrice: '₹4,500',
    popular: false,
  },
  {
    id: 3,
    title: '10th Board Achievers Batch',
    desc: 'Offline classroom program covering Maths and Science comprehensively.',
    class: 'Class 10',
    type: 'Offline',
    year: '2026',
    price: '₹12,000',
    originalPrice: '₹15,000',
    popular: true,
  },
  {
    id: 4,
    title: 'All India JEE Mock Test Series',
    desc: '30 full-length mock tests with detailed AI performance analysis.',
    class: 'Class 12',
    type: 'Test Series',
    year: '2025',
    price: '₹999',
    originalPrice: '₹1,500',
    popular: true,
  },
  {
    id: 5,
    title: 'Foundation Mathematics',
    desc: 'Build strong basics in algebra and geometry for future competitive exams.',
    class: 'Class 9',
    type: 'Recorded',
    year: '2026',
    price: '₹1,499',
    originalPrice: '₹2,000',
    popular: false,
  },
  {
    id: 6,
    title: 'Class 11 Chemistry Essentials',
    desc: 'Physical and organic chemistry detailed lectures and notes.',
    class: 'Class 11',
    type: 'Recorded',
    year: '2026',
    price: '₹2,499',
    originalPrice: '₹3,500',
    popular: false,
  }
];


const FILTERS = {
  classes: ['All', 'Class 9', 'Class 10', 'Class 11', 'Class 12', 'Dropper'],
  types: ['All', 'Recorded', 'Live', 'Offline', 'Test Series'],
  years: ['All', '2025', '2026']
};

const ExploreCourses = () => {
  
  const [activeClass, setActiveClass] = useState('All');
  const [activeType, setActiveType] = useState('All');
  const [activeYear, setActiveYear] = useState('All');

  
  const filteredCourses = courseCatalog.filter((course) => {
    const matchClass = activeClass === 'All' || course.class === activeClass;
    const matchType = activeType === 'All' || course.type === activeType;
    const matchYear = activeYear === 'All' || course.year === activeYear;
    return matchClass && matchType && matchYear;
  });

  
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Recorded': return <MonitorPlay className="w-4 h-4" />;
      case 'Live': return <Clock className="w-4 h-4" />;
      case 'Offline': return <Users className="w-4 h-4" />;
      case 'Test Series': return <FileText className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };


  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Recorded': return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Live': return 'bg-red-50 text-red-700 border-red-200';
      case 'Offline': return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'Test Series': return 'bg-orange-50 text-orange-700 border-orange-200';
      default: return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  return (
    <section className="py-20 bg-slate-100 min-h-screen font-sans">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        
       
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Find Your Perfect <span className="text-teal-600">Course</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            Filter by your class, preferred learning mode, and target exam year to get exactly what you need.
          </p>
        </div>

        
        <div className="bg-white p-4 md:p-6 rounded-2xl md:rounded-full shadow-sm border border-slate-200 mb-12 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          
          <div className="flex flex-col md:flex-row gap-4 w-full overflow-x-auto pb-2 md:pb-0 hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
            
           
            <div className="flex items-center gap-2 shrink-0">
              <GraduationCap className="w-5 h-5 text-slate-400" />
              <div className="flex bg-slate-100 p-1 rounded-full">
                {FILTERS.classes.map((c) => (
                  <button
                    key={c}
                    onClick={() => setActiveClass(c)}
                    className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                      activeClass === c 
                        ? 'bg-white text-slate-900 shadow-sm' 
                        : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div className="hidden md:block w-px h-8 bg-slate-200 shrink-0"></div>

            
            <div className="flex items-center gap-2 shrink-0">
              <MonitorPlay className="w-5 h-5 text-slate-400" />
              <div className="flex bg-slate-100 p-1 rounded-full">
                {FILTERS.types.map((t) => (
                  <button
                    key={t}
                    onClick={() => setActiveType(t)}
                    className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                      activeType === t 
                        ? 'bg-white text-slate-900 shadow-sm' 
                        : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="hidden md:block w-px h-8 bg-slate-200 shrink-0"></div>

            
            <div className="flex items-center gap-2 shrink-0">
              <Calendar className="w-5 h-5 text-slate-400" />
              <div className="flex bg-slate-100 p-1 rounded-full">
                {FILTERS.years.map((y) => (
                  <button
                    key={y}
                    onClick={() => setActiveYear(y)}
                    className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                      activeYear === y 
                        ? 'bg-white text-slate-900 shadow-sm' 
                        : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    {y}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredCourses.map((course) => (
              <div 
                key={course.id} 
                className="group bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                
                <div className="p-6 pb-4 flex items-start justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${getTypeColor(course.type)}`}>
                      {getTypeIcon(course.type)}
                      {course.type}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-600 border border-slate-200">
                      Target {course.year}
                    </span>
                  </div>
                  
                  {course.popular && (
                    <div className="flex items-center gap-1 text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border border-amber-200 shrink-0">
                      <Flame className="w-3 h-3 fill-amber-500" /> Popular
                    </div>
                  )}
                </div>

               
                <div className="px-6 flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight group-hover:text-teal-700 transition-colors">
                    {course.title}
                  </h3>
                  <div className="text-xs font-bold text-teal-600 mb-3 uppercase tracking-wide">
                    {course.class}
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
                    {course.desc}
                  </p>
                </div>

                
                <div className="p-6 mt-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/50">
                  <div>
                    <div className="text-xs text-slate-400 font-semibold line-through mb-0.5">
                      {course.originalPrice}
                    </div>
                    <div className="text-xl font-black text-slate-900">
                      {course.price}
                    </div>
                  </div>
                  
                  <button className="flex items-center gap-2 px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white text-sm font-bold rounded-xl transition-colors shadow-sm shadow-teal-600/20">
                    Enroll Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        ) : (
          
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
            <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">No courses found</h3>
            <p className="text-slate-500">
              Try adjusting your filters to see more available options.
            </p>
            <button 
              onClick={() => {
                setActiveClass('All');
                setActiveType('All');
                setActiveYear('All');
              }}
              className="mt-6 px-6 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-full transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

export default ExploreCourses;