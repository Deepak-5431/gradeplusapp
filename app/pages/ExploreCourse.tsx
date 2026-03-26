'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Shield, Award } from 'lucide-react';

const ExploreCourse = () => {
  const [activeMainTab, setActiveMainTab] = useState<'Academic' | 'Government' | 'Entrance'>('Academic');

  const [isExpanded, setIsExpanded] = useState(false);

  const [activeBoard, setActiveBoard] = useState('CBSE');
  const [activeClass, setActiveClass] = useState('CLASS-X');

  const [activeGovCategory, setActiveGovCategory] = useState('SSC');
  const [activeGovExam, setActiveGovExam] = useState('SSC-CGL');
  
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

  
  const handleTabChange = (tab: 'Academic' | 'Government' | 'Entrance') => {
    setActiveMainTab(tab);
    setIsExpanded(false); 
  };

  const handleBoardChange = (board: string) => {
    setActiveBoard(board);
    setIsExpanded(true);
  };

  const handleGovCategoryChange = (category: string) => {
    setActiveGovCategory(category);
    setActiveGovExam(govExamsList[category as keyof typeof govExamsList][0]);
    setIsExpanded(true);
  };

  const handleEntranceCategoryChange = (category: string) => {
    setActiveEntranceCategory(category);
    setActiveEntranceExam(entranceExamsList[category as keyof typeof entranceExamsList][0]);
    setIsExpanded(true);
  };

  return (
    <div className="w-full bg-[#0B0D14] py-16 md:py-24 px-4 flex flex-col items-center font-sans transition-all duration-500 ease-in-out">
      
      <div className="text-center mb-10 px-4">
        <p className="text-slate-400 text-4xl ">
          Select your target curriculum, exams, and goals to get started.
        </p>
      </div>

      <div className="w-full max-w-5xl flex flex-col items-center">
        
        <div className="flex bg-[#15192B] rounded-full p-1.5 mb-10 w-full md:max-w-2xl shadow-inner border border-slate-800/60">
          {['Academic', 'Government', 'Entrance'].map((tab) => {
            const isActive = activeMainTab === tab;
            return (
              <button
                key={tab}
                onClick={() => handleTabChange(tab as any)}
                className={`flex-1 py-3.5 text-sm md:text-base font-bold rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'bg-blue-600 text-white border border-blue-400 shadow-[0_0_20px_rgba(37,99,235,0.5)] transform scale-[1.02]' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        <div className="w-full flex justify-center items-center gap-3 mb-8">
          <span className="text-slate-400 text-sm font-medium">Step {isExpanded ? '2' : '1'} of 2</span>
          <div className="flex gap-1.5 ml-1">
            <div className={`w-2.5 h-2.5 rounded-full transition-colors ${!isExpanded ? 'bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.8)]' : 'bg-slate-700'}`}></div>
            <div className={`w-2.5 h-2.5 rounded-full transition-colors ${isExpanded ? 'bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.8)]' : 'bg-slate-700'}`}></div>
          </div>
        </div>

    
        <div className="w-full flex flex-col items-center space-y-4">
          <h3 className="text-white text-lg md:text-xl font-bold px-2 text-center tracking-wide">
            {activeMainTab === 'Academic' ? 'Select Board' : activeMainTab === 'Government' ? 'Exam Category' : 'Field of Study'}
          </h3>
          
         
          <div className="w-full md:w-fit max-w-full bg-[#15192B] border border-slate-700/50 rounded-4xl p-2 flex overflow-x-auto md:flex-wrap hide-scrollbar gap-2 shadow-lg justify-start md:justify-center transition-all duration-300">
            
            
            {activeMainTab === 'Academic' && academicBoards.map((board) => (
              <button
                key={board}
                onClick={() => handleBoardChange(board)}
                className={`px-6 py-3.5 rounded-3xl flex items-center gap-2 whitespace-nowrap text-sm md:text-base font-bold transition-all duration-300 ${
                  activeBoard === board 
                    ? 'bg-blue-600/20 text-white border border-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.4)]' 
                    : 'bg-transparent border border-transparent text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                {activeBoard === board && <BookOpen className="w-4 h-4 text-blue-400" />}
                {board}
              </button>
            ))}

           
            {activeMainTab === 'Government' && Object.keys(govExamsList).map((cat) => (
              <button
                key={cat}
                onClick={() => handleGovCategoryChange(cat)}
                className={`px-6 py-3.5 rounded-3xl flex items-center gap-2 whitespace-nowrap text-sm md:text-base font-bold transition-all duration-300 ${
                  activeGovCategory === cat 
                    ? 'bg-blue-600/20 text-white border border-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.4)]' 
                    : 'bg-transparent border border-transparent text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                {activeGovCategory === cat && <Shield className="w-4 h-4 text-blue-400" />}
                {cat}
              </button>
            ))}

          
            {activeMainTab === 'Entrance' && Object.keys(entranceExamsList).map((field) => (
              <button
                key={field}
                onClick={() => handleEntranceCategoryChange(field)}
                className={`px-6 py-3.5 rounded-3xl flex items-center gap-2 whitespace-nowrap text-sm md:text-base font-bold transition-all duration-300 ${
                  activeEntranceCategory === field 
                    ? 'bg-blue-600/20 text-white border border-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.4)]' 
                    : 'bg-transparent border border-transparent text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                {activeEntranceCategory === field && <Award className="w-4 h-4 text-blue-400" />}
                {field}
              </button>
            ))}

          </div>
        </div>

        <div className="relative w-full max-w-3xl my-8 flex justify-center items-center">
          <div className="absolute w-full h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent"></div>
          <div className="absolute w-32 h-6 bg-blue-500/20 blur-xl rounded-full"></div>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="relative z-10 text-blue-400 hover:text-blue-300 transition-colors animate-bounce mt-2 focus:outline-none bg-[#0B0D14] px-4"
          >
            {isExpanded ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
          </button>
        </div>

        {isExpanded && (
          <div className="w-full flex flex-col items-center space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
            <h3 className="text-white text-lg md:text-xl font-bold px-2 text-center tracking-wide">
              {activeMainTab === 'Academic' ? 'Select Class' : 'Target Exam'}
            </h3>
            
            <div className="w-full md:w-fit max-w-full bg-[#15192B] border border-slate-700/50 rounded-4xl p-3 shadow-lg transition-all duration-300">
              
              {activeMainTab === 'Academic' && (
                <div className="flex flex-wrap justify-center gap-3 max-h-64 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-600 max-w-4xl">
                  {academicClasses.map((cls) => (
                    <button
                      key={cls}
                      onClick={() => setActiveClass(cls)}
                      className={`py-3 px-5 rounded-2xl text-sm font-bold transition-all duration-300 ${
                        activeClass === cls 
                          ? 'bg-blue-600/20 text-white border border-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.4)]' 
                          : 'bg-slate-800/40 border border-slate-700/50 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                      }`}
                    >
                      {cls}
                    </button>
                  ))}
                </div>
              )}

              {activeMainTab === 'Government' && (
                <div className="flex flex-wrap justify-center gap-3 max-h-64 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-600 max-w-4xl">
                  {govExamsList[activeGovCategory as keyof typeof govExamsList].map((exam) => (
                    <button
                      key={exam}
                      onClick={() => setActiveGovExam(exam)}
                      className={`px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-300 ${
                        activeGovExam === exam 
                          ? 'bg-blue-600/20 text-white border border-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.4)]' 
                          : 'bg-slate-800/40 border border-slate-700/50 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                      }`}
                    >
                      {exam}
                    </button>
                  ))}
                </div>
              )}

              {activeMainTab === 'Entrance' && (
                <div className="flex flex-wrap justify-center gap-3 max-h-64 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-600 max-w-4xl">
                  {entranceExamsList[activeEntranceCategory as keyof typeof entranceExamsList].map((exam) => (
                    <button
                      key={exam}
                      onClick={() => setActiveEntranceExam(exam)}
                      className={`px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-300 ${
                        activeEntranceExam === exam 
                          ? 'bg-blue-600/20 text-white border border-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.4)]' 
                          : 'bg-slate-800/40 border border-slate-700/50 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                      }`}
                    >
                      {exam}
                    </button>
                  ))}
                </div>
              )}

            </div>
            
            <div className="pt-10 pb-4 flex justify-center w-full">
               <button className="w-full max-w-xs py-4 rounded-full font-bold text-white text-lg bg-blue-600 hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] tracking-wide">
                Continue →
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default ExploreCourse;