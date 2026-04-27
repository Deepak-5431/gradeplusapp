export const dynamic = 'force-dynamic';

import { MetadataRoute } from 'next';

const API_PREFIX = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    {
      url: 'https://gradeplusapp.com', 
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: 'https://gradeplusapp.com/blogs',
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
  ];

  try {
    const blogs = await fetch(`${API_PREFIX}/api/blogs`).then(res => res.json());

    const dynamicBlogRoutes = blogs.map((blog: any) => ({
      url: `https://gradeplusapp.com/blog?id=${blog.id}`,
      lastModified: new Date(blog.date || Date.now()), 
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }));

    return [...staticRoutes, ...dynamicBlogRoutes];
    
  } catch (error) {
    console.error("Failed to generate sitemap blogs:", error);
    return staticRoutes;
  }
}