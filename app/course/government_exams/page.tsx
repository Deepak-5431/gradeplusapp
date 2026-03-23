import CourseTabs from "@/app/components/CourseTabs";

export default function GovernmentExamsPage() {
  return (
    <div className="min-h-screen py-20 bg-slate-50 flex flex-col items-center">
      <CourseTabs />
      <h1 className="text-4xl font-black">Government Exams</h1>
    </div>
  );
}