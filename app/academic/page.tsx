import Link from 'next/link';
import Image from 'next/image';
import Header from '@/app/pages/Header';
import Footer from '@/app/pages/Footer';
import { PlayCircle, Star,  BookOpen } from 'lucide-react';

const API_PREFIX = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';

async function fetchAllCourses() {
  try {
    const res = await fetch(`${API_PREFIX}/api/course`, {
      next: { revalidate: 3600 }
    });
    if (!res.ok) return [];
    
    const rawData = await res.json();
    
    if (Array.isArray(rawData)) return rawData;
    if (rawData.data && Array.isArray(rawData.data)) return rawData.data;
    if (rawData.id) return [rawData]; 
    
    return [];
  } catch (error) {
    console.error("Failed to fetch courses:", error);
    return [];
  }
}

export default async function AllCoursesPage() {
  const courses = await fetchAllCourses();

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7FE] font-sans">
      <Header />
      
      <main className="grow pt-12 pb-24 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="mb-12 text-center md:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-5 py-2 text-sm font-extrabold text-blue-700 uppercase tracking-wide mb-4 shadow-sm">
            <BookOpen className="w-4 h-4" />
            Our Catalog
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Explore Academic Courses
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl">
            Browse our complete collection of interactive courses, live classes, and test series. Select a course to view details and enroll.
          </p>
        </div>

        {courses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8">
            {courses.map((course: any) => {
              const cleanTitle = course.text ? course.text.replace(/Course/i, '').trim() : 'Course';
              
              return (
                <Link 
                  href={`/courses/details/${course.id}`} 
                  key={course.id}
                  className="group bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-blue-200 transition-all duration-300 flex flex-col"
                >
                  <div className="relative w-full aspect-4/3 bg-slate-100 overflow-hidden">
                    
                    <Image 
                      src={course.image || '/course/academic.jpg'} 
                      alt={course.text || 'Course'}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-contain group-hover:scale-105 transition-transform duration-500"                    />
                    
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/20 transition-colors duration-300" />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90 group-hover:scale-100">
                      <div className="bg-white/95 p-3 rounded-full shadow-xl text-blue-600">
                        <PlayCircle size={32} fill="currentColor" className="text-white" />
                      </div>
                    </div>

                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-slate-800 uppercase tracking-wide border border-white/20 shadow-sm">
                      {course.type || 'Course'}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col grow">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {course.text}
                    </h3>
                    
                    <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-yellow-500 font-bold text-sm">
                        <Star size={16} fill="currentColor" />
                        <span>4.8</span>
                      </div>
                      <span className="text-blue-600 font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        View Details →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="w-full py-20 flex flex-col items-center justify-center bg-white rounded-3xl border border-slate-200 border-dashed">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4">
              <BookOpen className="w-10 h-10 text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-slate-700 mb-2">No courses found</h3>
            <p className="text-slate-500">Check back later or ensure your backend API is running.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}