import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Header from '@/app/pages/Header';
import Footer from '@/app/pages/Footer';
import { PlayCircle, Star, BookOpen } from 'lucide-react';
import { Course,CourseApiResponse } from '@/app/utils/types';
import { fetcher } from '@/app/utils/ApiServices';
import { ENDPOINTS } from '@/app/utils/endpoints';

const categoryConfig: Record<string, { keyword: string; title: string; description: string }> = {
  'academics': { 
    keyword: 'academics', 
    title: 'Explore Academic Courses',
    description: 'Master your school curriculum with our comprehensive interactive classes and study materials.'
  },
  'government': { 
    keyword: 'government', 
    title: 'Government Exams',
    description: 'Prepare for top government exams with expertly crafted test series and live sessions.'
  },
  'entrance': { 
    keyword: 'entrance', 
    title: 'Entrance Exams',
    description: 'Crack your competitive entrance exams and secure your future with our targeted preparation courses.'
  }
};

async function fetchCoursesByCategory(keyword: string): Promise<Course[]> {
  try {
    const rawData = await fetcher<CourseApiResponse>(ENDPOINTS.COURSES.BY_CATEGORY(keyword));
    
    if (!rawData) return [];
    return Array.isArray(rawData) ? rawData : [rawData];
    
  } catch (error) {
    console.error("Failed to fetch courses:", error);
    return [];
  }
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ category: string }> 
}): Promise<Metadata> {
  const resolvedParams = await params;
  const urlCategory = resolvedParams.category;
  const pageData = categoryConfig[urlCategory];

  if (!pageData) {
    return { title: 'Category Not Found | Gradeplus' };
  }

  return {
    title: `${pageData.title} | Gradeplus`,
    description: pageData.description,
    openGraph: {
      title: `${pageData.title} | Gradeplus`,
      description: pageData.description,
      url: `https://gradeplusapp.com/courses/${urlCategory}`,
      siteName: 'Gradeplus',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: pageData.title,
      description: pageData.description,
    }
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params;
  const urlCategory = resolvedParams.category;

  const pageData = categoryConfig[urlCategory];

  if (!pageData) {
    notFound();
  }

  const courses = await fetchCoursesByCategory(pageData.keyword);

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
            {pageData.title}
          </h1>
          
          <p className="text-slate-500 text-lg max-w-2xl">
            {pageData.description}
          </p>
        </div>

        {courses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8">
            {courses.map((course: Course) => {
              const cleanTitle = course.text ? course.text : 'Course';

              return (
                <Link 
                  href={`/courses/details/${course.id}`} 
                  key={course.id}
                  className="group bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-blue-200 transition-all duration-300 flex flex-col"
                >
                  <div className="relative w-full aspect-video bg-slate-100 overflow-hidden">                    
                    <Image 
                      src={ENDPOINTS.ASSETS.AVATAR(course.image)} 
                      alt={cleanTitle}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-fill group-hover:scale-105 transition-transform duration-500"                    
                    />
                    
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/20 transition-colors duration-300" />
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90 group-hover:scale-100">
                      <div className="bg-white/95 p-3 rounded-full shadow-xl text-blue-600">
                        <PlayCircle size={32} fill="currentColor" className="text-white" />
                      </div>
                    </div>

                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-slate-800 uppercase tracking-wide border border-white/20 shadow-sm">
                      {course.type || 'Course'}
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 flex flex-col grow">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {cleanTitle}
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
            <h3 className="text-xl font-bold text-slate-700 mb-2">No courses available for {pageData.title}</h3>
            <p className="text-slate-500">courses will be available soon we are working on it</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}