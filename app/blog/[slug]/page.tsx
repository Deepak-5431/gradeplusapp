// app/blog/[slug]/page.tsx
import { Metadata } from 'next';
import BlogClient from './BlogClient';

const API_PREFIX = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';

// 1. Fetching function with the 24-hour cache!
async function getSingleBlog(id: string) {
  try {
    const res = await fetch(`${API_PREFIX}/api/blogs/${id}`, {
      next: { revalidate: 86400 } // 24-hour cache (ISR)
    });
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    return null;
  }
}

// 2. The SEO Generator
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const id = resolvedParams.slug.split('-')[0]; // Extract "235" from "235-how-to-study"
  
  const blog = await getSingleBlog(id);

  if (!blog) {
    return { title: 'Blog Not Found | GradePlus' };
  }

  return {
    title: `${blog.title} | GradePlus`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: 'article',
      // You can even dynamically set the image based on the ID here!
      images: [`https://gradeplusapp.com/bloggs/use${(parseInt(id) % 6) || 1}.webp`], 
    }
  };
}

// 3. The Main Page Component
export default async function SingleBlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.slug.split('-')[0]; // Extract the ID again
  
  const blog = await getSingleBlog(id);

  if (!blog) {
    return <div className="min-h-screen flex items-center justify-center text-2xl font-bold">Article not found.</div>;
  }

  // Pass the fully loaded data to your Client Component!
  return <BlogClient initialBlog={blog} />;
}