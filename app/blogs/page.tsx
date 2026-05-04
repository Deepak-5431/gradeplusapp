import { Metadata } from 'next';
import BlogsClient from './BlogsClient';

export const metadata: Metadata = {
  title: "All Blogs & Articles | GradePlus",
  description: "Discover powerful ideas on tech, system design, and development from our expert team.",
  openGraph: {
    title: "All Blogs & Articles | GradePlus",
    description: "Discover powerful ideas on tech, system design, and development from our expert team.",
    url: 'https://gradeplusapp.com/blogs',
    siteName: 'GradePlus',
    type: 'website',
    images: [
      {
        url: 'https://gradeplusapp.com/bloggs/use1.webp',
        width: 1200,
        height: 630,
        alt: 'GradePlus Blogs',
      }
    ],
  }
};

const API_PREFIX = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';

async function getBlogs() {
  try {
    const res = await fetch(`${API_PREFIX}/api/blogs`, {
      next: { revalidate: 86400 } 
    });
    
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    return [];
  }
}

export default async function BlogsPage() {
  const blogs = await getBlogs();
  
  return <BlogsClient initialBlogs={blogs} />;
}