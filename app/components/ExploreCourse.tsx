import ExploreCourseClient from '../pages/ExploreCourseClient';
import Header from '@/app/pages/Header';
import Footer from '@/app/pages/Footer';

const API_PREFIX = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';

async function fetchCategory(categoryUrlParam: string) {
  try {
    const res = await fetch(`${API_PREFIX}/api/study/${categoryUrlParam}`, {
      next: { revalidate: 3600 } 
    });
    if (!res.ok) return { data: [] };
    return await res.json();
  } catch (error) {
    console.error(`Failed to fetch ${categoryUrlParam}:`, error);
    return { data: [] };
  }
}

export default async function ExploreCourse() {
  const [academics, govt, entrance] = await Promise.all([
    fetchCategory('academics'),
    fetchCategory('govt-exams'),
    fetchCategory('entrance-exams')
  ]);

  const fetchedData = {
    Academic: academics.data || [],
    Government: govt.data || [],
    Entrance: entrance.data || []
  };

  // ✅ FIX: Remove "allCourses={allCourses}" here
  return <ExploreCourseClient initialData={fetchedData} />;
}