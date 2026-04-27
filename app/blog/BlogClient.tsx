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

function AuthorSidebar({ currentAuthor, currentBlogId }: { currentAuthor: string, currentBlogId: string }) {
  const { data: allBlogs, error, isLoading } = useSWR(
    `${API_PREFIX}/api/blogs`,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateIfStale: false, 
    }
  );

  if (isLoading) return <div className="animate-pulse text-sm text-slate-400 p-6 bg-white rounded-2xl border border-slate-100">Loading author's work...</div>;
  if (error || !allBlogs) return null;

  const allRelatedBlogs = allBlogs.filter((b: any) => b.author === currentAuthor && b.id !== currentBlogId);

  if (allRelatedBlogs.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
        <h3 className="font-bold text-slate-900 mb-2">More from {currentAuthor}</h3>
        <p className="text-sm text-slate-500">No other articles published yet.</p>
      </div>
    );
  }

  const featuredBlogs = allRelatedBlogs.slice(0, 3);
  const remainingBlogs = allRelatedBlogs.slice(3);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="bg-slate-50/50 p-6 border-b border-slate-100 flex items-center justify-between">
        <h3 className="font-bold text-slate-900 flex items-center gap-3 text-lg">
          <span className="w-3 h-3 rounded-full bg-teal-500"></span>
          More from {currentAuthor}
        </h3>
        {allRelatedBlogs.length > 3 && (
           <span className="text-xs font-bold text-teal-600 bg-teal-50 px-2 py-1 rounded-full border border-teal-100">
             {allRelatedBlogs.length} Articles
           </span>
        )}
      </div>

      <div className="flex flex-col px-5 pt-5 pb-6 space-y-6">
        
        <div className="space-y-6">
          {featuredBlogs.map((b: any) => (
            <Link 
              href={`/blog?id=${b.id}`} 
              key={b.id} 
              className="group flex flex-row lg:flex-col bg-white hover:bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden active:scale-[0.99] transition-all shadow-sm hover:shadow-md"
            >
              <div className="relative w-32 sm:w-40 lg:w-full h-auto lg:h-44 shrink-0 bg-slate-100 overflow-hidden border-r lg:border-r-0 lg:border-b border-slate-100">
                <img src={getBlogImage(b.id)} alt={b.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out" />
              </div>
              
              <div className="grow flex flex-col justify-center p-4 lg:p-5">
                <h4 className="text-base font-bold text-slate-800 group-hover:text-teal-600 transition-colors line-clamp-2 leading-snug mb-3">
                  {b.title}
                </h4>
                
                <div className="flex items-center justify-between mt-auto">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    {b.date}
                  </p>
                  <svg className="w-5 h-5 text-teal-600 opacity-0 group-hover:opacity-100 -translate-x-3 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {remainingBlogs.length > 0 && (
          <div className="pt-2 border-t border-slate-100 mt-2">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 px-1">Older Articles</h4>
            <div className="flex flex-col divide-y divide-slate-100/60">
              {remainingBlogs.map((b: any) => (
                <Link href={`/blog?id=${b.id}`} key={b.id} className="group py-3 px-1 block active:bg-slate-50 rounded-lg transition-colors">
                  <h5 className="text-[13px] font-semibold text-slate-700 group-hover:text-teal-600 transition-colors line-clamp-1">
                    {b.title}
                  </h5>
                  <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider">{b.date}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

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
                
                <span className="font-medium text-slate-700">By {blog.author}</span>
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
          
          {id && blog && blog.author && (
            <AuthorSidebar currentAuthor={blog.author} currentBlogId={id} />
          )}
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