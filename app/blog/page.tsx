"use client";

import Header from "@/app/pages/Header";
import Footer from "@/app/pages/Footer";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { Suspense } from "react";

const API_PREFIX = process.env.NEXT_PUBLIC_API_URL || ''; 
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const getBlogImage = (id: string | null) => {
  if (!id) return '';
  const num = parseInt(id);
  const index = isNaN(num) ? 1 : ((num - 1) % 6) + 1;
  return `/bloggs/use${index}.webp`; 
};

function BlogContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id"); 
  const coverImage = getBlogImage(id);

  const { data: blog, error, isLoading } = useSWR(
    id ? `${API_PREFIX}/api/blogs/${id}` : null,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
    }
  );

  if (!id && !isLoading) {
    return <div className="text-center py-20 text-slate-600">Invalid Blog ID. Go back to <Link href="/blogs" className="text-teal-600 font-semibold hover:underline">Blogs</Link></div>;
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8">           
      <div className="lg:w-2/3">
        {isLoading && (
            <div className="w-full h-96 bg-white rounded-2xl flex items-center justify-center border border-slate-100 shadow-sm">
              <div className="w-8 h-8 border-4 border-teal-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
        )}

        {error && (
            <div className="w-full p-8 bg-red-50 text-red-600 rounded-2xl border border-red-200">
              Failed to load the article. Please try again.
            </div>
        )}

        {blog && (
          <article className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="w-full h-48 md:h-64 flex items-center justify-center p-8 relative overflow-hidden">
              <img src={coverImage} alt="Cover" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-slate-900/60"></div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white text-center z-10 leading-tight">
                {blog.title}
              </h1>
            </div>

            <div className="p-8 md:p-12">
              <div className="flex items-center text-slate-500 text-sm mb-8 border-b border-slate-100 pb-6">
                <span className="font-semibold text-teal-600 uppercase tracking-wider">
                  {blog.status === 'PRIVATE' ? 'Private Article' : 'Public Article'}
                </span>
                <span className="mx-3">•</span>
                {/*<span>By {blog.author}</span>*/}
                <span className="mx-3">•</span>
                <span>{blog.date}</span>
              </div>

              <div className="text-slate-800 leading-relaxed space-y-6 text-lg blog-content-wrapper">
                {blog.content ? (
                  <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                ) : (
                  <p className="text-slate-400 italic">No detailed content available for this post.</p>
                )}
              </div>
            </div>
          </article>
        )}
      </div>

      <div className="lg:w-1/3">
        <div className="sticky top-8">
          <Link href="/blogs" className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors mb-6">
            <svg className="w-4 h-4 mr-2 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Back to all blogs
          </Link>
          
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <h3 className="font-bold text-slate-900 mb-2">More updates coming soon!</h3>
            <p className="text-sm text-slate-500">Check back later for recommended articles.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SingleBlogPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">         
          <Suspense fallback={<div className="w-full py-20 text-center font-semibold animate-pulse text-slate-500">Loading Article...</div>}>
            <BlogContent />
          </Suspense>
        </div>
      </div>
      <Footer />
    </>
  );
}