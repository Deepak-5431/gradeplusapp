import { Metadata } from 'next';
import BlogsClient from './BlogsClient';
import { fetcher } from '../utils/ApiServices';
import { Blog } from '../utils/types';
import { ENDPOINTS } from '../utils/endpoints';

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

export default async function BlogsPage() {
  // 👇 2. Using the smart fetcher with strict <Blog[]> typing!
  const blogs = await fetcher<Blog[]>(ENDPOINTS.BLOGS.ALL) || [];
  
  return <BlogsClient initialBlogs={blogs} />;
}