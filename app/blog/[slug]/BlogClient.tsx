"use client";
import Header from '@/app/pages/Header';
import Footer from '@/app/pages/Footer';
import { Clock, Eye,  } from 'lucide-react';

export default function BlogClient({ initialBlog }: { initialBlog: any }) {
  
  return (
    <>
      <Header />
      <div className="min-h-screen bg-slate-50 py-16 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          
          <div className="h-64 md:h-96 w-full bg-slate-100 relative">
            <img 
              src={`/bloggs/use${(parseInt(initialBlog.id) % 6) || 1}.webp`} 
              alt={initialBlog.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-6">
              <span className="font-bold text-blue-600">{initialBlog.author}</span>
              <span className="flex items-center gap-1"><Clock size={16}/> {initialBlog.date}</span>
              <span className="flex items-center gap-1"><Eye size={16}/> {initialBlog.views} Views</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
              {initialBlog.title}
            </h1>

            <div className="prose prose-lg prose-blue max-w-none text-slate-700">
              <div dangerouslySetInnerHTML={{ __html: initialBlog.content || initialBlog.excerpt }} />
            </div>
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}