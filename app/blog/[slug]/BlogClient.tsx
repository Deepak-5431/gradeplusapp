"use client";

import { useState } from 'react';
import Header from '@/app/pages/Header';
import Footer from '@/app/pages/Footer';
import { Clock, Eye, Share2, Check } from 'lucide-react';

interface Blog {
  id: string;
  title: string;
  author: string;
  date: string;
  views: number;
  content: string;
  excerpt?: string; 
}

export default function BlogClient({ 
  initialBlog, 
  relatedBlogs 
}: { 
  initialBlog: Blog;
  relatedBlogs: any[]; 
}) {
  const [isCopied, setIsCopied] = useState(false);

  const handleShare = async () => {
    const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

    if (navigator.share) {
      try {
        await navigator.share({
          title: initialBlog.title,
          text: `Check out this article: ${initialBlog.title}`,
          url: currentUrl,
        });
      } catch (err) {
        console.log("User dismissed share menu");
      }
    } else {
      try {
        await navigator.clipboard.writeText(currentUrl);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      } catch (err) {
        console.error("Clipboard copy failed", err);
      }
    }
  };

  return (
    <>
      <Header />
      
      <div className="h-64 md:h-96 w-full bg-slate-900 relative">
        <img 
          src={`/bloggs/use${(parseInt(initialBlog.id) % 6) || 1}.webp`} 
          alt={initialBlog.title}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 max-w-7xl mx-auto">
           <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight max-w-4xl">
             {initialBlog.title}
           </h1>
           <div className="flex flex-wrap items-center gap-4 text-sm text-slate-200">
             <span className="font-bold text-blue-400">{initialBlog.author}</span>
             <span className="flex items-center gap-1"><Clock size={16}/> {initialBlog.date}</span>
             <span className="flex items-center gap-1"><Eye size={16}/> {initialBlog.views} Views</span>
           </div>
        </div>
      </div>

      {/* MAIN CONTENT GRID */}
      <div className="min-h-screen bg-slate-50 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
              <article className="prose prose-lg prose-blue max-w-none text-slate-700">
                <div dangerouslySetInnerHTML={{ __html: initialBlog.content || initialBlog.excerpt || "" }} />
              </article>
            </div>

          
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Share this Post</h3>
                  <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                    Help your fellow students by sharing this revision guide with your network.
                  </p>
                  <button 
                    onClick={handleShare}
                    disabled={isCopied}
                    className={`w-full cursor-pointer py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 shadow-sm border ${
                      isCopied 
                        ? 'bg-green-50 border-green-200 text-green-600' 
                        : 'bg-blue-600 border-blue-700 text-white hover:bg-blue-700'
                    }`}
                  >
                    {isCopied ? (
                      <><Check size={18} /> Link Copied!</>
                    ) : (
                      <><Share2 size={18} /> Share Article</>
                    )}
                  </button>
                </div>

                
                {relatedBlogs && relatedBlogs.length > 0 && (
                  <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-4">
                      More by {initialBlog.author}
                    </h3>
                    <div className="space-y-4">
                      {relatedBlogs.map((sideBlog) => {
                        const titleSlug = sideBlog.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                        return (
                          <a 
                            key={sideBlog.id}
                            href={`/blog/${sideBlog.id}-${titleSlug}`}
                            className="group block border-b border-slate-100 pb-4 last:border-0 last:pb-0"
                          >
                            <h4 className="font-semibold text-slate-800 text-sm group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
                              {sideBlog.title}
                            </h4>
                            <span className="text-xs text-slate-500 flex items-center gap-1">
                              <Clock size={12}/> {sideBlog.date}
                            </span>
                          </a>
                        )
                      })}
                    </div>
                  </div>
                )}

              </div>
            </aside>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}