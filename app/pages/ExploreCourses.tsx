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

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeData || !scrollRef.current) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
         
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 220, behavior: 'smooth' });
        }
      }
    }, 3000); // 3 seconds

    
    return () => clearInterval(interval);
  }, [activeData]);
  

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

            {/* scroll here will work  */}
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


{/* 
  //old desktop explore course
  'use client';

import { useState } from 'react';
import { BookOpen, Landmark, Stethoscope } from 'lucide-react';

const ExploreCourse = () => {
  // Mobile Tab State
  const [activeMainTab, setActiveMainTab] = useState<'Academic' | 'Government' | 'Entrance'>('Academic');

  // Academic State
  const [activeBoard, setActiveBoard] = useState('CBSE');
  const [activeClass, setActiveClass] = useState('CLASS-X');

  // Government State
  const [activeGovCategory, setActiveGovCategory] = useState('SSC');
  const [activeGovExam, setActiveGovExam] = useState('SSC-CGL');
  
  // Entrance State
  const [activeEntranceCategory, setActiveEntranceCategory] = useState('Engineering');
  const [activeEntranceExam, setActiveEntranceExam] = useState('JEE Main');


  const govExamsList = {
    'SSC': ['Selection Post', 'SSC-CGL', 'SSC-CPO SI', 'SSC-CHSL', 'SSC-GD', 'SSC-MTS', 'SSC-STENO'],
    'UPSSSC': ['VDO', 'Lekhpal', 'PET'],
    'Teaching': ['CTET', 'UPTET', 'Super TET'],
    'Banking': ['IBPS PO', 'SBI Clerk', 'RBI Grade B'],
    'Railway': ['RRB NTPC', 'RRB Group D', 'ALP'],
    'Police Exams': ['UP Police Constable', 'Delhi Police SI']
  };

  const entranceExamsList = {
    'Engineering': ['JEE Main', 'JEE Advanced', 'BITSAT', 'VITEEE', 'SRMJEEE'],
    'Medical': ['NEET UG', 'NEET PG', 'AIIMS', 'JIPMER']
  };

  const academicClasses = ['LKG', 'UKG', 'CLASS-I', 'CLASS-II', 'CLASS-III', 'CLASS-IV', 'CLASS-V', 'CLASS-VI', 'CLASS-VII', 'CLASS-VIII', 'CLASS-IX', 'CLASS-X', 'CLASS-XI', 'CLASS-XII'];
  const academicBoards = ['CBSE', 'ICSE', 'UP-BOARD', 'UP-BOARD HINDI', 'SSC-BOARD'];

  const handleGovCategoryChange = (category: string) => {
    setActiveGovCategory(category);
    setActiveGovExam(govExamsList[category as keyof typeof govExamsList][0]);
  };

  const handleEntranceCategoryChange = (category: string) => {
    setActiveEntranceCategory(category);
    setActiveEntranceExam(entranceExamsList[category as keyof typeof entranceExamsList][0]);
  };

  return (
    <div className="w-full min-h-screen font-sans">
      

      <div className="lg:hidden w-full min-h-screen bg-[#111322] p-4 flex flex-col justify-center">
        <div className="w-full max-w-md mx-auto bg-[#1A1D2D] rounded-[2.5rem] border border-slate-700/50 shadow-2xl flex flex-col overflow-hidden">
          
          <div className="p-6 grow">
            <div className="flex bg-slate-800/50 rounded-full p-1.5 mb-8 shadow-inner">
              {['Academic', 'Government', 'Entrance'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveMainTab(tab as any)}
                  className={`flex-1 py-2.5 text-sm font-bold rounded-full transition-all ${
                    activeMainTab === tab 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {activeMainTab === 'Academic' && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div>
                  <h3 className="text-white text-lg font-bold mb-4">Select Board</h3>
                  <div className="flex flex-wrap gap-3">
                    {academicBoards.map((board) => (
                      <button
                        key={board}
                        onClick={() => setActiveBoard(board)}
                        className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                          activeBoard === board 
                            ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]' 
                            : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                        }`}
                      >
                        {board}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-white text-lg font-bold mb-4">Select Class</h3>
                  <div className="flex flex-wrap gap-3 h-56 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-600">
                    {academicClasses.map((cls) => (
                      <button
                        key={cls}
                        onClick={() => setActiveClass(cls)}
                        className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                          activeClass === cls 
                            ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]' 
                            : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                        }`}
                      >
                        {cls}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeMainTab === 'Government' && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div>
                  <h3 className="text-white text-lg font-bold mb-4">Exam Category</h3>
                  <div className="flex flex-wrap gap-3">
                    {Object.keys(govExamsList).map((cat) => (
                      <button
                        key={cat}
                        onClick={() => handleGovCategoryChange(cat)}
                        className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                          activeGovCategory === cat 
                            ? 'bg-emerald-600 text-white shadow-[0_0_15px_rgba(5,150,105,0.4)]' 
                            : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-white text-lg font-bold mb-4">Target Exam</h3>
                  <div className="flex flex-wrap gap-3 h-56 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-600">
                    {govExamsList[activeGovCategory as keyof typeof govExamsList].map((exam) => (
                      <button
                        key={exam}
                        onClick={() => setActiveGovExam(exam)}
                        className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                          activeGovExam === exam 
                            ? 'bg-emerald-600 text-white shadow-[0_0_15px_rgba(5,150,105,0.4)]' 
                            : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                        }`}
                      >
                        {exam}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeMainTab === 'Entrance' && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div>
                  <h3 className="text-white text-lg font-bold mb-4">Field of Study</h3>
                  <div className="flex flex-wrap gap-3">
                    {Object.keys(entranceExamsList).map((field) => (
                      <button
                        key={field}
                        onClick={() => handleEntranceCategoryChange(field)}
                        className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                          activeEntranceCategory === field 
                            ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(147,51,234,0.4)]' 
                            : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                        }`}
                      >
                        {field}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-white text-lg font-bold mb-4">Target Exam</h3>
                  <div className="flex flex-wrap gap-3 h-56 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-600">
                    {entranceExamsList[activeEntranceCategory as keyof typeof entranceExamsList].map((exam) => (
                      <button
                        key={exam}
                        onClick={() => setActiveEntranceExam(exam)}
                        className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                          activeEntranceExam === exam 
                            ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(147,51,234,0.4)]' 
                            : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                        }`}
                      >
                        {exam}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 border-t border-slate-700/50 bg-[#1A1D2D]">
            <button className="w-full py-4 rounded-full font-bold text-white text-lg bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)]">
              Continue to Dashboard →
            </button>
          </div>
        </div>
      </div>

      
     
      <div className="hidden lg:block w-full min-h-screen bg-slate-50 p-6 md:p-12 font-sans">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Choose Your Learning Path</h2>
            <p className="text-lg text-slate-500">Select your target curriculum, exams, and goals to get started.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <div className="bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
              
              <div className="relative pt-8 px-8 pb-20 bg-slate-900 overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/30 blur-3xl rounded-full pointer-events-none group-hover:bg-blue-400/40 transition-colors duration-500"></div>
                <div className="relative z-10 flex items-center gap-5">
                  <div className="p-3.5 bg-white/10 backdrop-blur-md text-blue-400 rounded-2xl border border-white/10 shadow-inner">
                    <BookOpen className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-black text-white tracking-wide">Academic</h3>
                </div>
                <div className="absolute -bottom-px left-0 w-full leading-none z-0">
                  <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-16 md:h-20" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#ffffff" d="M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,160C672,139,768,117,864,128C960,139,1056,181,1152,192C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                  </svg>
                </div>
              </div>

              <div className="px-8 pb-8 pt-2 space-y-8 grow flex flex-col relative z-10">
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">1. Select Board</label>
                  <div className="flex flex-wrap gap-2.5">
                    {academicBoards.map((board) => (
                      <button
                        key={board}
                        onClick={() => setActiveBoard(board)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                          activeBoard === board 
                            ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20 ring-2 ring-blue-600 ring-offset-2' 
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {board}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">2. Select Class</label>
                  <div className="grid grid-cols-3 gap-3 h-48 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-200">
                    {academicClasses.map((cls) => (
                      <button
                        key={cls}
                        onClick={() => setActiveClass(cls)}
                        className={`py-2.5 px-1 rounded-2xl text-xs font-bold transition-all flex items-center justify-center text-center ${
                          activeClass === cls 
                            ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' 
                            : 'bg-white border-2 border-slate-100 text-slate-600 hover:border-blue-200 hover:bg-blue-50'
                        }`}
                      >
                        {cls}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="pt-6 mt-auto">
                  <button className="w-full py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-600/30">
                    Continue to {activeClass}
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
              
              <div className="relative pt-8 px-8 pb-20 bg-slate-900 overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/30 blur-3xl rounded-full pointer-events-none group-hover:bg-emerald-400/40 transition-colors duration-500"></div>
                <div className="relative z-10 flex items-center gap-5">
                  <div className="p-3.5 bg-white/10 backdrop-blur-md text-emerald-400 rounded-2xl border border-white/10 shadow-inner">
                    <Landmark className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-black text-white tracking-wide">Government</h3>
                </div>
                <div className="absolute -bottom-px left-0 w-full leading-none z-0">
                  <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-16 md:h-20" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#ffffff" d="M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,160C672,139,768,117,864,128C960,139,1056,181,1152,192C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                  </svg>
                </div>
              </div>

              <div className="px-8 pb-8 pt-2 space-y-8 grow flex flex-col relative z-10">
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">1. Exam Category</label>
                  <div className="flex flex-wrap gap-2.5">
                    {Object.keys(govExamsList).map((cat) => (
                      <button
                        key={cat}
                        onClick={() => handleGovCategoryChange(cat)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                          activeGovCategory === cat 
                            ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20 ring-2 ring-emerald-600 ring-offset-2' 
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">2. Target Exam</label>
                  <div className="grid grid-cols-2 gap-3 h-48 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-200">
                    {govExamsList[activeGovCategory as keyof typeof govExamsList].map((exam) => (
                      <button
                        key={exam}
                        onClick={() => setActiveGovExam(exam)}
                        className={`py-2.5 px-2 rounded-2xl text-xs font-bold transition-all flex items-center justify-center text-center ${
                          activeGovExam === exam 
                            ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20' 
                            : 'bg-white border-2 border-slate-100 text-slate-600 hover:border-emerald-200 hover:bg-emerald-50'
                        }`}
                      >
                        {exam}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-auto">
                  <button className="w-full py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-emerald-600 transition-all duration-300 shadow-lg hover:shadow-emerald-600/30">
                    Prepare for {activeGovExam}
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
              
              <div className="relative pt-8 px-8 pb-20 bg-slate-900 overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/30 blur-3xl rounded-full pointer-events-none group-hover:bg-purple-400/40 transition-colors duration-500"></div>
                <div className="relative z-10 flex items-center gap-5">
                  <div className="p-3.5 bg-white/10 backdrop-blur-md text-purple-400 rounded-2xl border border-white/10 shadow-inner">
                    <Stethoscope className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-black text-white tracking-wide">Entrance</h3>
                </div>
                <div className="absolute -bottom-px left-0 w-full leading-none z-0">
                  <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-16 md:h-20" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#ffffff" d="M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,160C672,139,768,117,864,128C960,139,1056,181,1152,192C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                  </svg>
                </div>
              </div>

              <div className="px-8 pb-8 pt-2 space-y-8 grow flex flex-col relative z-10">
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">1. Field of Study</label>
                  <div className="flex flex-wrap gap-2.5">
                    {Object.keys(entranceExamsList).map((field) => (
                      <button
                        key={field}
                        onClick={() => handleEntranceCategoryChange(field)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                          activeEntranceCategory === field 
                            ? 'bg-purple-600 text-white shadow-md shadow-purple-600/20 ring-2 ring-purple-600 ring-offset-2' 
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {field}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">2. Target Exam</label>
                  <div className="grid grid-cols-2 gap-3 h-48 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-200">
                    {entranceExamsList[activeEntranceCategory as keyof typeof entranceExamsList].map((exam) => (
                      <button
                        key={exam}
                        onClick={() => setActiveEntranceExam(exam)}
                        className={`py-2.5 px-2 rounded-2xl text-xs font-bold transition-all flex items-center justify-center text-center ${
                          activeEntranceExam === exam 
                            ? 'bg-purple-600 text-white shadow-md shadow-purple-600/20' 
                            : 'bg-white border-2 border-slate-100 text-slate-600 hover:border-purple-200 hover:bg-purple-50'
                        }`}
                      >
                        {exam}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-auto">
                  <button className="w-full py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-purple-600 transition-all duration-300 shadow-lg hover:shadow-purple-600/30">
                    Explore {activeEntranceExam}
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default ExploreCourse;
  
  */}