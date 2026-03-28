'use client';

import { useState } from 'react';
import { 
  ChevronDown,
  BookOpen, 
  Shield, 
  Award, 
  Landmark, 
  MapPin, 
  GraduationCap, 
  Building2, 
  Train, 
  ShieldAlert,
  Book,
  Microscope,
  Scale,
  Briefcase,
  LucideIcon 
} from 'lucide-react';

type TabKey = 'Academic' | 'Government' | 'Entrance';

interface SubCategory {
  id: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  items: string[];
}

interface TabConfig {
  icon: LucideIcon;
  color: string;
  activeBorder: string;
}

export default function ExploreCourse() {
  const [activeTab, setActiveTab] = useState<TabKey>('Academic');
  const [expandedSubCat, setExpandedSubCat] = useState<string | null>(null); 
  const [selectedItem, setSelectedItem] = useState<string>('');

  const academicClasses = ['LKG', 'UKG', 'CLASS-I', 'CLASS-II', 'CLASS-III', 'CLASS-IV', 'CLASS-V', 'CLASS-VI', 'CLASS-VII', 'CLASS-VIII', 'CLASS-IX', 'CLASS-X', 'CLASS-XI', 'CLASS-XII'];

  const dataMap: Record<TabKey, SubCategory[]> = {
    Government: [
      { id: 'SSC', title: 'SSC', desc: 'Staff Selection Commission', icon: Landmark, items: ['Selection Post', 'SSC-CGL', 'SSC-CPO SI', 'SSC-CHSL', 'SSC-GD', 'SSC-MTS', 'SSC-STENO'] },
      { id: 'UPSSSC', title: 'UPSSSC', desc: 'Uttar Pradesh State Services', icon: MapPin, items: ['VDO', 'Lekhpal', 'PET'] },
      { id: 'Teaching', title: 'Teaching', desc: 'Teaching & Education Exams', icon: GraduationCap, items: ['CTET', 'UPTET', 'Super TET'] },
      { id: 'Banking', title: 'Banking', desc: 'Banking & Insurance Exams', icon: Building2, items: ['IBPS PO', 'SBI Clerk', 'RBI Grade B'] },
      { id: 'Railway', title: 'Railway', desc: 'RRB & Railway Recruitment', icon: Train, items: ['RRB NTPC', 'RRB Group D', 'ALP'] },
      { id: 'Police Exams', title: 'Police Exams', desc: 'State & Central Police', icon: ShieldAlert, items: ['UP Police Constable', 'Delhi Police SI'] }
    ],
    Academic: [
      { id: 'CBSE', title: 'CBSE Board', desc: 'Central Board of Secondary Ed.', icon: Book, items: academicClasses },
      { id: 'ICSE', title: 'ICSE Board', desc: 'Indian Certificate of Secondary Ed.', icon: BookOpen, items: academicClasses },
      { id: 'UP', title: 'UP Board', desc: 'Uttar Pradesh State Board', icon: MapPin, items: academicClasses },
      { id: 'SSC-BOARD', title: 'State Board', desc: 'Secondary School Certificate', icon: Shield, items: academicClasses }
    ],
    Entrance: [
      { id: 'Eng', title: 'Engineering', desc: 'JEE, BITSAT, VITEEE', icon: Microscope, items: ['JEE Main', 'JEE Advanced', 'BITSAT', 'VITEEE', 'SRMJEEE'] },
      { id: 'Med', title: 'Medical', desc: 'NEET, AIIMS, JIPMER', icon: Award, items: ['NEET UG', 'NEET PG', 'AIIMS', 'JIPMER'] },
      { id: 'Law', title: 'Law', desc: 'CLAT, AILET, LSAT', icon: Scale, items: ['CLAT', 'AILET', 'LSAT India'] },
      { id: 'Mgmt', title: 'Management', desc: 'CAT, XAT, MAT', icon: Briefcase, items: ['CAT', 'XAT', 'MAT', 'CMAT'] }
    ]
  };

  const tabConfigs: Record<TabKey, TabConfig> = {
    Academic: { icon: BookOpen, color: 'text-blue-700', activeBorder: 'border-blue-700' },
    Government: { icon: Shield, color: 'text-blue-700', activeBorder: 'border-blue-700' },
    Entrance: { icon: Award, color: 'text-purple-700', activeBorder: 'border-purple-700' }
  };

  const activeData = dataMap[activeTab];

  const handleTabChange = (tab: TabKey) => {
    setActiveTab(tab);
    setExpandedSubCat(null); 
    setSelectedItem('');
  };

  const toggleExpand = (subCatId: string) => {
    if (expandedSubCat === subCatId) {
      setExpandedSubCat(null);
    } else {
      setExpandedSubCat(subCatId);
      setSelectedItem('');
    }
  };

  const activeCategoryData = activeData.find(cat => cat.id === expandedSubCat);

  return (
    <div className="min-h-screen w-full bg-[#F4F7FE] py-20 px-6 flex flex-col items-center font-sans">
      
      <div className="text-center mb-16">
        <h1 className="text-[#1E293B] text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">Explore Your Path</h1>
        <p className="text-slate-500 text-xl md:text-2xl">Select your domain, category, and target to get started.</p>
      </div>

      <div className="w-full max-w-350 rounded-[3rem] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-200 overflow-hidden relative pb-12">
        
        {/* Top Navigation Tabs */}
        <div className="flex relative z-10 bg-white border-b-2 border-slate-100">
          {(Object.keys(tabConfigs) as TabKey[]).map((tab) => {
            const Icon = tabConfigs[tab].icon;
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`flex-1 py-8 md:py-10 flex items-center justify-center gap-4 transition-all duration-300 border-b-[6px] ${
                  isActive 
                    ? `${tabConfigs[tab].activeBorder} bg-slate-50` 
                    : 'border-transparent hover:bg-slate-50'
                }`}
              >
                <Icon className={`w-7 h-7 md:w-10 md:h-10 ${isActive ? tabConfigs[tab].color : 'text-slate-500'}`} />
                <span className={`font-bold text-xl md:text-3xl ${isActive ? tabConfigs[tab].color : 'text-slate-600'}`}>
                  {tab}
                </span>
              </button>
            );
          })}
        </div>

        {/* Decorative Wave - Color matched to your image */}
        <div className="w-full relative h-20 pointer-events-none z-0">
           <svg viewBox="0 0 1440 120" className="absolute top-0 w-full h-full preserve-3d" preserveAspectRatio="none">
             <path 
               className="fill-[#dee2e7] transition-colors duration-500" 
               d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
             ></path>
           </svg>
        </div>

        <div className="px-8 md:px-14 relative z-10 pt-4">
          <h2 className="text-2xl md:text-4xl text-slate-800 font-bold mb-10">
            Select {activeTab === 'Academic' ? 'Board' : activeTab === 'Entrance' ? 'Field' : 'Category'} & Exam
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {activeData.map((subCategory) => {
              const isActive = expandedSubCat === subCategory.id;
              const Icon = subCategory.icon;
              
              return (
                <button 
                  key={subCategory.id}
                  onClick={() => toggleExpand(subCategory.id)}
                  className={`w-full p-6 md:p-8 rounded-3xl flex items-center gap-6 transition-all duration-300 border-2 ${
                    isActive 
                      ? 'bg-blue-50/50 border-blue-600 shadow-md ring-1 ring-blue-600/20 scale-[1.02]' 
                      : 'bg-white border-slate-200 hover:border-blue-400 hover:shadow-sm'
                  }`}
                >
                  <div className={`p-4 md:p-5 rounded-2xl shrink-0 transition-colors ${
                    isActive ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'
                  }`}>
                    <Icon className="w-8 h-8 md:w-10 md:h-10" />
                  </div>
                  
                  <div className="flex flex-col text-left">
                    <span className="font-bold text-2xl md:text-3xl text-slate-800 leading-tight">
                      {subCategory.title}
                    </span>
                    <span className="text-base md:text-lg text-slate-500 mt-2 line-clamp-1">
                      {subCategory.desc}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className={`transition-all duration-500 ease-in-out ${expandedSubCat ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'}`}>
            <div className="relative w-full flex justify-center items-center mt-14 mb-10">
              <div className="absolute w-full h-0.5 bg-slate-100 -z-10"></div>
              <button 
                onClick={() => setExpandedSubCat(null)}
                className="bg-white p-3 md:p-4 rounded-full border-2 border-slate-200 text-blue-600 hover:bg-blue-50 transition-colors shadow-sm"
              >
                <ChevronDown className="w-8 h-8 md:w-10 md:h-10" />
              </button>
            </div>
          </div>

          <div className={`transition-all duration-500 ease-in-out origin-top ${
            expandedSubCat ? 'max-h-300 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
            
            {activeCategoryData && (
              <div className="flex flex-col items-center animate-in fade-in zoom-in-95 duration-300 pb-10">
                <div className="bg-slate-50 border-2 border-slate-200 rounded-[2.5rem] p-8 md:p-12 w-full flex flex-wrap justify-center gap-4 md:gap-6 shadow-inner">
                  {activeCategoryData.items.map((item: string) => {
                    const isSelected = selectedItem === item;
                    return (
                      <button
                        key={item}
                        onClick={() => setSelectedItem(item)}
                        className={`px-8 py-5 md:px-10 md:py-6 rounded-2xl text-xl md:text-2xl font-bold transition-all duration-300 border-2 ${
                          isSelected 
                            ? 'bg-blue-700 border-blue-700 text-white shadow-[0_4px_20px_rgba(29,78,216,0.3)]' 
                            : 'bg-white border-slate-200 text-slate-600 hover:border-blue-400 hover:text-blue-700 shadow-sm'
                        }`}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-14 w-full flex justify-center">
                  <button 
                    disabled={!selectedItem}
                    className={`px-24 py-6 md:px-32 md:py-8 rounded-full font-bold text-2xl md:text-3xl transition-all duration-300 flex items-center justify-center gap-4 ${
                      selectedItem 
                        ? 'bg-linear-to-r from-blue-600 to-indigo-700 text-white shadow-[0_10px_40px_rgba(29,78,216,0.4)] hover:-translate-y-2' 
                        : 'bg-slate-100 text-slate-400 cursor-not-allowed border-2 border-slate-200'
                    }`}
                  >
                    Continue <span className="text-3xl md:text-4xl">→</span>
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}