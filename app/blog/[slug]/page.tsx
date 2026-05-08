import { Metadata } from 'next';
import BlogClient from './BlogClient';

const API_PREFIX = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';

export const dynamicParams = true;

export async function generateStaticParams() {
  try {
    const res = await fetch(`${API_PREFIX}/api/blogs`);
    if (!res.ok) return [];
    
    const blogs = await res.json();
    
    return blogs.map((blog: any) => {
      const titleSlug = blog.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
      return {
        slug: `${blog.id}-${titleSlug}`,
      };
    });
  } catch (error) {
    console.error("Failed to generate static params:", error);
    return []; 
  }
}


async function getSingleBlog(id: string) {
  try {
    const res = await fetch(`${API_PREFIX}/api/blogs/${id}`, {
      next: { revalidate: 31536000 } 
    });
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const id = resolvedParams.slug.split('-')[0];
  
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
      images: [`https://gradeplusapp.com/bloggs/use${(parseInt(id) % 6) || 1}.webp`], 
    }
  };
}

export default async function SingleBlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.slug.split('-')[0];
  
  const blog = await getSingleBlog(id);

  if (!blog) {
    return <div className="min-h-screen flex items-center justify-center text-2xl font-bold">Article not found.</div>;
  }

  let relatedBlogs = [];
  try {
    const relatedRes = await fetch(`${API_PREFIX}/api/blogs?author=${encodeURIComponent(blog.author)}`, {
      next: { revalidate: 86400 }
    });
    
    if (relatedRes.ok) {
      const allAuthorBlogs = await relatedRes.json();
      relatedBlogs = allAuthorBlogs
        .filter((b: any) => b.id.toString() !== id)
        .slice(0, 3);
    }
  } catch (error) {
    console.error("Failed to fetch related blogs", error);
  }

  return <BlogClient initialBlog={blog} relatedBlogs={relatedBlogs} />;
}