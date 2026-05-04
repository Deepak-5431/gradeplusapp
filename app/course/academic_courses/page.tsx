import CourseTabs from "@/app/components/CourseTabs";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function AcademicCoursesPage() {
  return (
    <div className="min-h-screen py-10 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors font-semibold bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm hover:shadow-md"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        <CourseTabs />

        <div className="flex flex-col items-center justify-center pt-10">
          <h1 className="text-4xl font-black text-slate-900 mb-4">
            ACADMENIC COURSES
          </h1>
          <p className="text-lg text-slate-600 text-center max-w-2xl">
            we will show here latest courses from cirriculam which are of top priority matters
          </p>
        </div>

      </div>
    </div>
  );
}