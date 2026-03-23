'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, GraduationCap, Building2 } from 'lucide-react';

export default function CourseTabs() {
  const pathname = usePathname();

  const tabs = [
    { 
      name: 'Academic Courses', 
      href: '/course/academic_courses', 
      icon: BookOpen 
    },
    { 
      name: 'Entrance Exams', 
      href: '/course/enterance_exams', 
      icon: GraduationCap 
    },
    { 
      name: 'Government Exams', 
      href: '/course/government_exams', 
      icon: Building2 
    },
  ];

  return (
    <div className="w-full flex justify-center mb-12">
      <div className="flex bg-slate-200/60 p-1.5 rounded-full border border-slate-200 backdrop-blur-md overflow-x-auto hide-scrollbar">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = pathname === tab.href;

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 whitespace-nowrap ${
                isActive 
                  ? 'bg-white text-blue-600 shadow-md shadow-slate-200/50' 
                  : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100/50'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
              {tab.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}