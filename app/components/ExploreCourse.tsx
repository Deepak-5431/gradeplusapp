import ExploreCourseClient from '../pages/ExploreCourseClient';


const API_PREFIX = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';

async function fetchCategory(categoryUrlParam: string) {
  try {
    const res = await fetch(`${API_PREFIX}/api/study?category=${categoryUrlParam}`, {
      next: { revalidate: 3600 } 
    });
    
    if (!res.ok) return { data: [] };
    const json = await res.json();
    return json;
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
    Academic: academics.data || academics || [],
    Government: govt.data || govt || [],
    Entrance: entrance.data || entrance || []
  };

  return (
    <>
     
      <ExploreCourseClient initialData={fetchedData} />
      
    </>
  );
}