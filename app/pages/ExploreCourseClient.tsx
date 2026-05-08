'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  BookOpen, Shield, Award, Landmark, MapPin, GraduationCap, 
  Building2, Train, ShieldAlert, Book, Microscope, Scale, 
  Briefcase, LucideIcon, ArrowLeft, Loader2
} from 'lucide-react';

type TabKey = 'Academic' | 'Government' | 'Entrance';

interface SubCategory {
  id: string;
  title: string;
  desc: string;
  icon: LucideIcon;
}

interface TabConfig {
  icon: LucideIcon;
  color: string;
  activeBorder: string;
}

// STATIC DICTIONARY: Use this to ensure "Targets" show up immediately
const staticTargetDictionary: Record<string, string[]> = {
  // Academic
  'CBSE': ['Class 10', 'Class 11', 'Class 12'],
  'ICSE': ['Class 10', 'Class 11', 'Class 12'],
  'UP-BOARD': ['Class 9', 'Class 10', 'Class 11', 'Class 12'],
  'SSC-BOARD': ['Class 10', 'Class 12'],
  // Government
  'SSC': ['SSC CGL', 'SSC CHSL', 'SSC MTS', 'SSC GD'],
  'Banking': ['IBPS PO', 'SBI Clerk', 'RBI Assistant'],
  'Railway': ['RRB NTPC', 'Group D', 'ALP'],
  'UPSSSC': ['PET', 'Lekhpal', 'VDO'],
  'Teaching': ['CTET', 'UPTET', 'Super TET'],
  // Entrance
  'Engineering Exams': ['JEE Main', 'JEE Advanced', 'BITSAT'],
  'Medical Exams': ['NEET UG', 'AIIMS'],
  'Law Exams': ['CLAT', 'AILET'],
  'Management Exams': ['CAT', 'MAT', 'XAT']
};

export default function ExploreCourseClient({ 
  initialData 
}: { 
  initialData: Record<TabKey, string[]> 
}) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabKey>('Academic');
  const [expandedSubCat, setExpandedSubCat] = useState<string | null>(null); 
  const [selectedItem, setSelectedItem] = useState<string>('');
  const [subItems, setSubItems] = useState<string[]>([]);

  // ICON DICTIONARY: Maps Board IDs to UI Visuals
  const iconDictionary: Record<string, { icon: LucideIcon, desc: string, title: string }> = {
    'SSC': { icon: Landmark, desc: 'Staff Selection Commission', title: 'SSC' },
    'UPSSSC': { icon: MapPin, desc: 'Uttar Pradesh State Services', title: 'UPSSSC' },
    'Teaching': { icon: GraduationCap, desc: 'Teaching & Education Exams', title: 'Teaching' },
    'Banking': { icon: Building2, desc: 'Banking & Insurance Exams', title: 'Banking' },
    'Railway': { icon: Train, desc: 'RRB & Railway Recruitment', title: 'Railway' },
    'CBSE': { icon: Book, desc: 'Central Board of Secondary Ed.', title: 'CBSE Board' },
    'ICSE': { icon: BookOpen, desc: 'Indian Certificate of Secondary Ed.', title: 'ICSE Board' },
    'UP-BOARD': { icon: MapPin, desc: 'Uttar Pradesh State Board', title: 'UP Board' },
    'SSC-BOARD': { icon: Shield, desc: 'Secondary School Certificate', title: 'State Board' },
    'Engineering Exams': { icon: Microscope, desc: 'JEE, BITSAT, VITEEE', title: 'Engineering' },
    'Medical Exams': { icon: Award, desc: 'NEET, AIIMS, JIPMER', title: 'Medical' },
    'Law Exams': { icon: Scale, desc: 'CLAT, AILET, LSAT', title: 'Law' },
    'Management Exams': { icon: Briefcase, desc: 'CAT, XAT, MAT', title: 'Management' }
  };

  // Switch to Static Mode for Targets
  useEffect(() => {
    if (!expandedSubCat) {
      setSubItems([]);
      return;
    }
    // Pulling from our local list instead of a risky fetch
    const targets = staticTargetDictionary[expandedSubCat] || [];
    setSubItems(targets);
  }, [expandedSubCat]);

  const dataMap: Record<TabKey, SubCategory[]> = {
    Academic: (initialData.Academic || []).map(item => ({
      id: item,
      title: iconDictionary[item]?.title || `${item} Board`,
      desc: iconDictionary[item]?.desc || `${item} Curriculum`,
      icon: iconDictionary[item]?.icon || BookOpen,
    })),
    Government: (initialData.Government || []).map(item => ({
      id: item,
      title: iconDictionary[item]?.title || item,
      desc: iconDictionary[item]?.desc || `${item} Exams`,
      icon: iconDictionary[item]?.icon || ShieldAlert,
    })),
    Entrance: (initialData.Entrance || []).map(item => ({
      id: item,
      title: iconDictionary[item]?.title || item,
      desc: iconDictionary[item]?.desc || `${item} Entrance`,
      icon: iconDictionary[item]?.icon || Award,
    }))
  };

  const tabConfigs: Record<TabKey, TabConfig> = {
    Academic: { icon: BookOpen, color: 'text-blue-700', activeBorder: 'border-blue-700' },
    Government: { icon: Shield, color: 'text-blue-700', activeBorder: 'border-blue-700' },
    Entrance: { icon: Award, color: 'text-purple-700', activeBorder: 'border-purple-700' }
  };

  const handleTabChange = (tab: TabKey) => {
    setActiveTab(tab);
    setExpandedSubCat(null); 
    setSelectedItem('');
  };

  return (
    <div className="min-h-screen w-full bg-[#F4F7FE] py-12 px-4 md:px-6 flex flex-col items-center font-sans">
      <div className="text-center mb-10">
        <h1 className="text-[#1E293B] text-3xl md:text-5xl font-extrabold mb-3">Explore Your Path</h1>
        <p className="text-slate-500 text-lg">Select your category, board, and target to get started.</p>
      </div>

      <div className="w-full max-w-5xl rounded-4xl bg-white shadow-lg border border-slate-200 overflow-hidden relative pb-10">
        <div className="flex bg-white border-b-2 border-slate-100">
          {(Object.keys(tabConfigs) as TabKey[]).map((tab) => {
            const Icon = tabConfigs[tab].icon;
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`flex-1 py-6 flex items-center justify-center gap-3 border-b-4 transition-all ${
                  isActive ? `${tabConfigs[tab].activeBorder} bg-slate-50` : 'border-transparent hover:bg-slate-50'
                }`}
              >
                <Icon className={`w-6 h-6 md:w-8 ${isActive ? tabConfigs[tab].color : 'text-slate-500'}`} />
                <span className={`font-bold text-lg md:text-2xl ${isActive ? tabConfigs[tab].color : 'text-slate-600'}`}>{tab}</span>
              </button>
            );
          })}
        </div>

        <div className="px-6 md:px-10 pt-10 min-h-100">
          {!expandedSubCat ? (
            <div>
              <h2 className="text-xl md:text-2xl text-slate-800 font-bold mb-6">Select {activeTab === 'Academic' ? 'Board' : 'Category'}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dataMap[activeTab].map((subCategory) => (
                  <button 
                    key={subCategory.id}
                    onClick={() => setExpandedSubCat(subCategory.id)}
                    className="w-full p-6 rounded-2xl flex items-center gap-4 border-2 bg-white border-slate-200 hover:border-blue-400 hover:shadow-md transition-all active:scale-95"
                  >
                    <div className="p-4 rounded-xl bg-blue-50 text-blue-600">
                      <subCategory.icon className="w-8 h-8" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-bold text-lg text-slate-800">{subCategory.title}</span>
                      <span className="text-sm text-slate-500 line-clamp-1">{subCategory.desc}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <div className="w-full flex items-center justify-between mb-8">
                 <button onClick={() => setExpandedSubCat(null)} className="flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold transition-colors">
                   <ArrowLeft className="w-4 h-4" /> Back to {activeTab}
                 </button>
                 <h2 className="text-xl md:text-2xl text-slate-800 font-bold">Target for {expandedSubCat}</h2>
              </div>

              <div className="bg-slate-50 border-2 border-slate-200 rounded-3xl p-8 w-full flex flex-wrap justify-center gap-4">
                {subItems.length > 0 ? (
                  subItems.map((item) => (
                    <button
                      key={item}
                      onClick={() => setSelectedItem(item)}
                      className={`px-6 py-4 rounded-xl text-lg font-bold transition-all border-2 ${
                        selectedItem === item ? 'bg-blue-700 border-blue-700 text-white' : 'bg-white border-slate-200 text-slate-600 hover:border-blue-400'
                      }`}
                    >
                      {item}
                    </button>
                  ))
                ) : (
                  <p className="text-slate-500 italic">No targets defined for this category.</p>
                )}
              </div>

              <div className="mt-10">
                <button 
                  disabled={!selectedItem}
                  onClick={() => router.push('/all-courses')} 
                  className={`px-16 py-4 rounded-full font-bold text-xl transition-all ${
                    selectedItem ? 'bg-blue-600 text-white shadow-lg' : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  Continue →
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}