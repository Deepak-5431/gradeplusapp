import { Metadata } from 'next';
import BlogClient from './BlogClient';
import { fetcher } from '@/app/utils/ApiServices';
import { ENDPOINTS } from '@/app/utils/endpoints';
import { Blog } from '@/app/utils/types';

export const dynamicParams = true;

export async function generateStaticParams() {
  try {
    const blogs = await fetcher<Blog[]>(ENDPOINTS.BLOGS.ALL);
    if(!blogs) return [];
    
    return blogs.map((blog: Blog) => {
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

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const id = resolvedParams.slug.split('-')[0];
  
  const blog = await fetcher<Blog>(ENDPOINTS.BLOGS.BY_ID(id));

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
  
  const blog = await fetcher<Blog>(ENDPOINTS.BLOGS.BY_ID(id));

  if (!blog) {
    return <div className="min-h-screen flex items-center justify-center text-2xl font-bold">Article not found.</div>;
  }

  let relatedBlogs: Blog[] = [];
  try {
    const AllAuthorBlogs = await fetcher<Blog[]>(ENDPOINTS.BLOGS.BY_AUTHOR(blog.author));
    
    if(AllAuthorBlogs){
      relatedBlogs = AllAuthorBlogs
        .filter((b: Blog) => b.id.toString() !== id.toString())
        .slice(0,3);
    }
  } catch (error) {
    console.error("Failed to fetch related blogs", error);
  }

  return <BlogClient initialBlog={blog} relatedBlogs={relatedBlogs} />;
}