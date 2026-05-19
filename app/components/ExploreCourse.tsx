import ExploreCourseClient from '../pages/ExploreCourseClient';

const API_PREFIX = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';

async function getOnlineCourses() {
  try {
    const res = await fetch(`${API_PREFIX}/api/course`, {
      next: { revalidate: 3600 } 
    });
    
    if (!res.ok) return [];
    
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Failed to fetch courses for banner:", error);
    return [];
  }
}

export default async function ExploreCourse() {
  const courses = await getOnlineCourses();

  return (
  <>
  <ExploreCourseClient apiCourses={courses} />
  </>
  );

}

