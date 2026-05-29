import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, PlayCircle } from 'lucide-react';
import Header from '@/app/pages/Header';
import Footer from '@/app/pages/Footer';
import { Course, CourseModerator,CourseApiResponse } from '@/app/utils/types';
import { fetcher } from '@/app/utils/ApiServices';
import { ENDPOINTS } from '@/app/utils/endpoints';

export async function generateStaticParams() {
  try {
    const rawData = await fetcher<CourseApiResponse>(ENDPOINTS.COURSES.ALL);
  
    if (!rawData) return [];
    const courses: Course[] = Array.isArray(rawData) ? rawData : [rawData];

    return courses.map((course: Course) => ({
      id: String(course.id),
    }));
  } catch (error) {
    console.error("Failed to generate static params:", error);
    return [];
  }
}

async function getCourseData(id: string): Promise<Course | null> {
  try {
    const apiResponse = await fetcher<CourseApiResponse>(ENDPOINTS.COURSES.BY_ID(id));

    if (!apiResponse) return null;

    const apiCourse: Course = Array.isArray(apiResponse) ? apiResponse[0] : apiResponse;

    if (!apiCourse || !apiCourse.id) return null;

    const rawText = apiCourse.title || apiCourse.text || id;
    const cleanText = rawText.replace(/course/i, '').trim().toUpperCase();

    return {
      id: apiCourse.id || id,
      title: apiCourse.title || `${cleanText} Complete Course`,
      thumbnail: apiCourse.image || "",
      price: apiCourse.price,
      priceInWords: apiCourse.priceInWords,
      moderators: apiCourse.moderators || [],
      qualification: apiCourse.qualification,
      description: `The ultimate preparation course. Includes live interactive classes, mock tests, and comprehensive study material tailored for top rankers.`,
      rating: 4.8,
      reviews: 1245,
      enrolled: 8500,
      duration: 'Lifetime',
      features: [
        '200+ Hours of Live & Recorded Classes',
        '50+ Full-Length Mock Tests',
        'Detailed PDF Notes & Assignments'
      ]
    };
  } catch (error) {
    console.error("Failed to fetch course data:", error);
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const course = await getCourseData(id);

  if (!course) {
    return { title: 'Course Not Found | GradePlus' };
  }

  const baseUrl = 'https://gradeplusapp.com';
  const ogImage = course.thumbnail?.startsWith('http')
    ? course.thumbnail
    : `${baseUrl}${course.thumbnail || '/og-main.jpg'}`;

  return {
    title: `${course.title} | GradePlus`,
    description: course.description,
    openGraph: {
      title: `${course.title} | GradePlus`,
      description: course.description,
      url: `${baseUrl}/courses/details/${id}`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: course.title,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: course.title,
      description: course.description,
      images: [ogImage],
    },
  };
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
          <Link href="/courses/academics" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold">
            Explore All Courses
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Header />

      <section className="w-full border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16 flex flex-col md:flex-row gap-8 lg:gap-16 items-center">

          <div className="w-full md:w-[70%] relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group shrink-0 h-64 sm:h-80 md:h-80 lg:h-80">
            <div className="relative w-full h-full">
              <Image
                src={ENDPOINTS.ASSETS.AVATAR(course.thumbnail)}
                alt={course.title || 'Course Image'}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-slate-900/10 flex items-center justify-center group-hover:bg-slate-900/20 transition-colors pointer-events-none">
              <PlayCircle size={64} className="text-white/90 drop-shadow-md" strokeWidth={1.5} />
            </div>
          </div>

          <div className="w-full md:w-[30%] flex flex-col justify-center">
            <span className="text-xs md:text-sm text-blue-500 font-bold uppercase tracking-wider mb-2">
              Course Details
            </span>

            <h1 className="text-2xl md:text-2xl lg:text-3xl font-extrabold mb-4 leading-tight text-slate-900">
              {course.title}
            </h1>

            <div className="flex items-center gap-2 mb-8">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < Math.floor(course.rating || 0) ? "fill-yellow-400" : "fill-slate-200 text-slate-200"}
                  />
                ))}
              </div>
              <span className="text-sm text-slate-500 font-medium ml-1">
                {course.reviews?.toLocaleString()} ratings
              </span>
            </div>

            <div className="text-slate-600 mb-8 text-lg">
              Price: <span className="text-3xl font-bold text-slate-900 ml-2">
                ₹{course.price?.toLocaleString()}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-3.5 px-10 rounded-xl transition-all active:scale-95 shadow-md hover:shadow-lg w-full sm:w-auto">
                <a href='https://play.google.com/store/apps/details?id=com.app.iblib' target='#'>Enroll Now</a>
              </button>
            </div>
          </div>

        </div>
      </section>
       
      <main className="w-full max-w-7xl mx-auto py-12 px-4 md:px-8">

         

        {course.moderators && course.moderators.length > 0 && (
          <section className=" w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
              Know Your Instructors
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {course.moderators.map((teacher: CourseModerator, index: number) => {
                const headerColors = ['bg-blue-500', 'bg-orange-500', 'bg-emerald-500'];
                const headerColor = headerColors[index % headerColors.length];

                const avatar = ENDPOINTS.ASSETS.AVATAR(teacher.image);

                return (
                  <div
                    key={teacher.id || index}
                    className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col"
                  >
                    <div className={`h-24 ${headerColor} relative flex justify-center`}>
                      <div className="absolute -bottom-10 w-24 h-30 rounded-2xl overflow-hidden border-4 border-white shadow-md bg-white">
                        <Image
                          src={avatar}
                          alt={teacher.fullName || teacher.name || 'Instructor'}
                          width={96}
                          height={96}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>

                    <div className="pt-14 pb-8 px-6 grow flex flex-col">
                      <h3 className="text-xl font-bold text-slate-900 text-center mb-6">
                        {teacher.fullName || teacher.name || 'Instructor'}
                      </h3>

                      <div className="grid grid-cols-2 gap-y-5 gap-x-4 text-sm text-left">
                        <div>
                          <span className="block text-slate-900 font-bold mb-1">Experience</span>
                          <span className="text-slate-600">{teacher.experience || 'N/A'}</span>
                        </div>
                        <div>
                          <span className="block text-slate-900 font-bold mb-1">Expertise</span>
                          <span className="text-slate-600">{teacher.expertise || 'N/A'}</span>
                        </div>
                        <div>
                          <span className="block text-slate-900 font-bold mb-1">Qualification</span>
                          <span className="text-slate-600">{teacher.qualification || 'N/A'}</span>
                        </div>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}

