import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import AppDownloadWidget from '@/app/components/ui/AppDownloadWidget';
import SupportWidget from '@/app/components/ui/callwidget';
import {Calendar,Trophy,ChevronRight,BookOpen, Star, FileText } from 'lucide-react';
import Header from '@/app/pages/Header';
import Footer from '@/app/pages/Footer';
import { Course, CourseModerator, CourseApiResponse } from '@/app/utils/types';
import { fetcher } from '@/app/utils/ApiServices';
import { ENDPOINTS } from '@/app/utils/endpoints';

function formatScheduleDate(rawString: string) {
  if (!rawString || rawString.length < 8) return rawString; // Fallback if format is weird

  const year = rawString.substring(0, 4);
  const month = rawString.substring(4, 6);
  const day = rawString.substring(6, 8);

  const dateObj = new Date(`${year}-${month}-${day}T00:00:00`);

  return new Intl.DateTimeFormat('en-GB', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }).format(dateObj);
}

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
      link: apiCourse.link,
      docs: apiCourse.docs,
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
      ],
      testseries: apiCourse.testseries || null,
      schedules: apiCourse.schedules || []
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
          width: 500,
          height: 1200,
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
       <AppDownloadWidget />
       <SupportWidget />
      <section className="w-full border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16 flex flex-col md:flex-row gap-8 lg:gap-16 items-center">

          <div className="w-full md:w-[70%] relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group shrink-0">

            <Image
              src={ENDPOINTS.ASSETS.AVATAR(course.thumbnail)}
              alt={course.title || 'Course Image'}
              width={1200}
              height={550}
              className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              priority
            />

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
                <a href='https://play.google.com/store/apps/details?id=com.app.iblib' target='_blank' rel="noopener noreferrer">Enroll Now</a>
              </button>

              {course.docs && (
                <a
                  href={course.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-lg font-bold py-3.5 px-8 rounded-xl transition-all active:scale-95 shadow-sm w-full sm:w-auto"
                >
                  <FileText size={20} />
                  Download PDF
                </a>
              )}
            </div>
          </div>

        </div>
      </section>

      <main className="w-full max-w-7xl mx-auto py-12 px-4 md:px-8">

        {course.moderators && course.moderators.length > 0 && (
          <section className="mt-6 w-full">
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

        {(course.testseries || (course.schedules && course.schedules.length > 0)) && (
          <div className="mt-16 flex flex-col gap-8 w-full">
            
            {course.testseries && (
              <section className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm w-full">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl shrink-0">
                      <Trophy size={28} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900">Included Test Series</h2>
                      <p className="text-slate-500 mt-1">All test series included in your plan</p>
                    </div>
                  </div>
                  
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <a href='https://play.google.com/store/apps/details?id=com.app.iblib' target='_blank' rel="noopener noreferrer" className="flex flex-col p-6 rounded-2xl border-2 border-purple-100 bg-purple-50/30 hover:bg-purple-50/60 transition-colors h-full">
                    <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                      <BookOpen size={24} />
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg">{course.testseries.data}</h3>
                    <p className="text-slate-500 text-sm mb-6">Test Series</p>
                    <div className="mt-auto">
                      <span className="text-2xl font-bold text-purple-700">{course.testseries.response}</span>
                      <span className="text-slate-500 ml-2">Tests</span>
                    </div>
                  </a>
                </div>
              </section>
            )}

            {course.schedules && course.schedules.length > 0 && (
              <section className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm w-full">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl shrink-0">
                      <Calendar size={28} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900">Class Schedule</h2>
                      <p className="text-slate-500 mt-1">Your upcoming classes</p>
                    </div>
                  </div>
                  
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {course.schedules.map((schedule, index) => (
                    <div key={index} className="flex flex-col p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:border-blue-200 transition-colors h-full">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0" />
                        <h3 className="font-bold text-slate-900 leading-tight">{schedule.data}</h3>
                      </div>
                      
                      <div className="flex flex-col gap-3 mt-auto text-slate-600 text-sm font-medium">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} className="text-slate-400 shrink-0" />
                          <span>{formatScheduleDate(schedule.response)}</span> 
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

          </div>
        )}

      </main>
      
      {course.link && (
        <section className="w-full mt-12">
          <div className="w-full h-262 bg-white rounded-2xl overflow-hidden border border-slate-200">
            <iframe
              src={`https://iblib.com/user/eventdetails.html?id=${course.link}`}
              className="w-full h-full"
              title="Course Details"
            />
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}