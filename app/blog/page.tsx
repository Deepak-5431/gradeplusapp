import { Metadata } from "next";
import SingleBlogPage from "./BlogClient"; 


const API_PREFIX = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ id?: string }> }): Promise<Metadata> {
  const params = await searchParams;
  const id = params.id;
  
  if (!id) {
    return { title: "Blog Not Found" };
  }

  try {
    const blog = await fetch(`${API_PREFIX}/api/blogs/${id}`).then((res) => res.json());

    const num = parseInt(id);
    const index = isNaN(num) ? 1 : ((num - 1) % 6) + 1;
    
    const imageUrl = `https://gradeplusapp.com/bloggs/use${index}.webp`;
    
    const pageUrl = `https://gradeplusapp.com/blog?id=${id}`;

    return {
      title: `${blog.title} | GradePlus Blog`,
      description: blog.excerpt || "Read the latest updates and articles from GradePlus.",
      alternates: {
        canonical: pageUrl, 
      },
      openGraph: {
        title: blog.title,
        description: blog.excerpt,
        url: pageUrl, 
        siteName: "GradePlus",
        images: [
          {
            url: imageUrl, 
            width: 1200,
            height: 630,
            alt: blog.title,
          },
        ],
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title: blog.title,
        description: blog.excerpt,
        images: [imageUrl], 
      },
    };
  } catch (error) {
    return { title: "GradePlus Blog" };
  }
}

export default function Page() {
  return <SingleBlogPage />;
}