export const dynamic = 'force-dynamic';

import { MetadataRoute } from 'next';

const API_PREFIX = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";
const BASE_URL = 'https://gradeplusapp.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}`, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${BASE_URL}/blogs`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
    { url: `${BASE_URL}/courses/academics`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/courses/government`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/courses/entrance`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
  ];

  try {
    const [blogsRes, coursesRes] = await Promise.allSettled([
      fetch(`${API_PREFIX}/api/blogs`).then(res => res.json()),
      fetch(`${API_PREFIX}/api/course`).then(res => res.json())
    ]);

    let dynamicRoutes: MetadataRoute.Sitemap = [];

    if (blogsRes.status === 'fulfilled' && Array.isArray(blogsRes.value)) {
      const blogRoutes = blogsRes.value.map((blog: any) => {
        const titleSlug = blog.title ? blog.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') : '';
        const slugPath = `${blog.id}-${titleSlug}`;
        
        return {
          url: `${BASE_URL}/blog/${slugPath}`, 
          lastModified: new Date(blog.date || blog.updatedAt || Date.now()), 
          changeFrequency: 'weekly' as const,
          priority: 0.7,
        };
      });
      dynamicRoutes = [...dynamicRoutes, ...blogRoutes];
    }

    if (coursesRes.status === 'fulfilled') {
      const coursesData = Array.isArray(coursesRes.value) ? coursesRes.value : coursesRes.value.data || [];
      
      if (Array.isArray(coursesData)) {
        const courseRoutes = coursesData.map((course: any) => ({
          url: `${BASE_URL}/courses/details/${course.id}`, 
          lastModified: new Date(),
          changeFrequency: 'weekly' as const,
          priority: 0.8,
        }));
        dynamicRoutes = [...dynamicRoutes, ...courseRoutes];
      }
    }

    return [...staticRoutes, ...dynamicRoutes];
    
  } catch (error) {
    console.error("Failed to generate complete sitemap:", error);
    return staticRoutes; 
  }
}

