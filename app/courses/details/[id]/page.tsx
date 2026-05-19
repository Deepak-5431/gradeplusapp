import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronRight, Clock, Users, Star, PlayCircle, Check, 
} from 'lucide-react';
import Header from '@/app/pages/Header';
import Footer from '@/app/pages/Footer'; 

const API_PREFIX = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';

export async function generateStaticParams() {
  try {
    const res = await fetch(`${API_PREFIX}/api/course`);
    if (!res.ok) return [];
    
    const rawData = await res.json();
    let courses = [];
    
    if (Array.isArray(rawData)) courses = rawData;
    else if (rawData.data && Array.isArray(rawData.data)) courses = rawData.data;
    else if (rawData.id) courses = [rawData];

    return courses.map((course: any) => ({
      id: String(course.id),
    }));
  } catch (error) {
    console.error("Failed to generate static params:", error);
    return [];
  }
}

async function getCourseData(id: string) {
  try {
    const res = await fetch(`${API_PREFIX}/api/course?id=${id}`, {
      next: { revalidate: 3600 } 
    });

    if (!res.ok) return null;
    
    const apiCourse = await res.json();
    if (!apiCourse || !apiCourse.id) return null;

    const rawText = apiCourse.text || id;
    const cleanText = rawText.replace(/course/i, '').trim().toUpperCase();

    return {
      id: apiCourse.id || id,
      title: `${cleanText} Complete Course`, 
      thumbnail: apiCourse.image || "", 
      description: `The ultimate preparation course. Includes live interactive classes, mock tests, and comprehensive study material tailored for top rankers.`,
     // price: 2499,
     // discountPrice: 1399,
      rating: 4.8,
      reviews: 1245,
      enrolled: 8500,
      duration: 'Lifetime',
      instructor: {
        name: 'Rahul Sharma',
        expertise: 'Senior Faculty'
      },
      features: [
        '200+ Hours of Live & Recorded Classes',
        '50+ Full-Length Mock Tests',
        'Detailed PDF Notes & Assignments'
      ],
      syllabus: [
        { 
          module: 'Module 1: Foundations & Basics', 
          lessons: 12, 
          duration: '14 hrs',
          topics: ['Introduction to Core Concepts', 'Important Formulas & Shortcuts'] 
        }
      ]
    };
  } catch (error) {
    console.error("Failed to fetch course data:", error);
    return null;
  }
}

export default async function CourseItemPage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  
  const course = await getCourseData(id);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Header />
        <div className="grow flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Course Not Found</h1>
          <p className="text-slate-500 mb-6">We couldn't find the details for this specific course.</p>
          <Link href="/all-courses" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold">
            Explore All Courses
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Header />
      
      <div className="bg-slate-900 text-white pt-8 pb-28 relative overflow-hidden font-sans">
        <div className="absolute inset-0 bg-slate-900 flex items-center justify-center opacity-20 pointer-events-none">
          
          <Image 
            src={course.thumbnail} 
            alt="Course background" 
            fill
            priority
            className="object-cover blur-xl" 
          />
          <div className="absolute inset-0 bg-linear-to-b from-slate-900/40 via-slate-900/80 to-slate-900" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400 mb-8 capitalize font-medium">
            <Link href="/all-courses" className="hover:text-white transition-colors">All Courses</Link>
            <ChevronRight size={14} className="text-slate-600" />
            <span className="text-slate-200">Course {id}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-widest">
                  Best Seller
                </span>
                <span className="flex items-center gap-1.5 text-yellow-400 text-sm font-bold">
                  <Star size={16} className="fill-yellow-400" /> 
                  {course.rating} <span className="text-slate-400 font-normal">({course.reviews.toLocaleString()} ratings)</span>
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight lg:pr-10">
                {course.title}
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-3xl">
                {course.description}
              </p>

              <div className="flex flex-wrap gap-4 text-sm font-medium">
                <div className="flex items-center gap-2 text-slate-200">
                  <Clock size={18} className="text-slate-400" /> {course.duration} Access
                </div>
                <div className="hidden sm:block w-px h-5 bg-slate-700"></div>
                <div className="flex items-center gap-2 text-slate-200">
                  <Users size={18} className="text-slate-400" /> {course.enrolled.toLocaleString()}+ Students enrolled
                </div>
              </div>
            </div>

            <aside className="lg:hidden col-span-1 bg-white p-5 rounded-2xl shadow-xl text-slate-900 border border-slate-200">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-100 mb-4 border border-slate-200">
                
                <Image 
                  src={course.thumbnail} 
                  alt={course.title} 
                  fill
                  className="object-contain" 
                />
              </div>
              <div className="flex items-end gap-3 mb-1">
                {/*<span className="text-4xl font-extrabold">₹{course.discountPrice}</span>
                <span className="text-lg text-slate-500 line-through mb-1">₹{course.price}</span> */}
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all active:scale-95 shadow-md shadow-blue-600/20">
                Enroll Now
              </button>
            </aside>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-slate-50 pb-20 font-sans">
        <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <section className="p-6 md:p-10 border-b border-slate-100 bg-slate-50/50">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">What you'll learn</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                  {course.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check size={20} className="text-blue-600 shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="text-slate-700 text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="lg:col-span-4 hidden lg:block">
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-1.5 sticky top-24">
                <div className="relative w-full aspect-video bg-slate-50 rounded-xl overflow-hidden group cursor-pointer border border-slate-100">
                  <Image 
                    src={course.thumbnail} 
                    alt={course.title} 
                    fill
                    className="object-contain" 
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/30 transition-colors flex items-center justify-center">
                    <div className="bg-white/95 p-4 rounded-full shadow-lg group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <PlayCircle size={36} fill="currentColor" className="text-slate-800 group-hover:text-blue-600 group-hover:fill-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-end gap-3 mb-4">
                   {/* <span className="text-4xl font-extrabold text-slate-900">₹{course.discountPrice}</span> */}
                   {/* <span className="text-lg text-slate-400 line-through mb-1">₹{course.price}</span> */}
                  </div>
                 {/* <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all active:scale-95 mb-3 shadow-md shadow-blue-600/20 text-lg">
                    Add to Cart
                  </button>*/}
                  <button className="w-full bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-bold py-4 rounded-xl transition-all active:scale-95 text-lg">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
