import CourseTabs from "@/app/components/CourseTabs";

export default function AcademicCoursesPage() {
  return (
    <div className="min-h-screen py-20 bg-slate-50 flex flex-col items-center">
      <CourseTabs />
      <h1 className="text-4xl font-black">Academic Courses</h1>
    </div>
  );
}