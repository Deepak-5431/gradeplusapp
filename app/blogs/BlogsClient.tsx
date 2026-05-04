"use client";

import Link from 'next/link';
import Header from '../pages/Header';
import Footer from '../pages/Footer';
import { Clock, MessageCircle, Eye, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface BlogCardData {
  id: string;
  title: string;
  author: string;
  date: string;
  status: string;
  excerpt: string;
  views: number;
  likes: number;
  comments: number;
}

const getBlogImage = (id: string) => {
  const num = parseInt(id);
  const index = isNaN(num) ? 1 : ((num - 1) % 6) + 1;
  return `/bloggs/use${index}.webp`; 
};
const createSlug = (title: string) => {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
};

export default function BlogsClient({ initialBlogs }: { initialBlogs: BlogCardData[] }) {
  
  return (
    <>
      <Header />
      <div className="min-h-screen bg-slate-50 py-10 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Latest Insights
            </h1>
            <p className="text-slate-600 text-lg max-w-2xl">
              Discover powerful ideas on tech, system design, and development from our expert team.
            </p>
          </div>

          {initialBlogs && initialBlogs.length > 0 ? (
            <>
                 <Link href={`/blog/${initialBlogs[0].id}-${createSlug(initialBlogs[0].title)}`} className="block mb-12 active:scale-[0.99] transition-transform duration-200">                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-sm border border-slate-200 group">
                  <img
                    src={getBlogImage(initialBlogs[0].id)}
                    alt="Featured post"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white pr-6">
                    <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                      FEATURED
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">{initialBlogs[0].title}</h2>
                    <p className="text-slate-200 text-sm md:text-base max-w-xl line-clamp-2">
                      {initialBlogs[0].excerpt}
                    </p>
                  </div>
                </div>
              </Link>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {initialBlogs.slice(1).map((blog: BlogCardData, i: number) => (
                    <Link href={`/blog/${blog.id}-${createSlug(blog.title)}`} key={blog.id} className="group">                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg active:scale-[0.98] transition-all duration-200 overflow-hidden h-full flex flex-col"
                    >
                      <div className="relative h-48 overflow-hidden bg-slate-100">
                        <img
                          src={getBlogImage(blog.id)}
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        {blog.status === 'PRIVATE' && (
                          <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-sm tracking-wider">
                            PRIVATE
                          </div>
                        )}
                      </div>

                      <div className="p-6 flex flex-col grow">
                        <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                          <span className="font-semibold text-slate-700">{blog.author}</span>
                          <span>•</span>
                          <Clock size={12} /> {blog.date}
                        </div>

                        <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {blog.title}
                        </h2>

                        <p className="text-sm text-slate-600 mb-6 line-clamp-3 leading-relaxed">
                          {blog.excerpt}
                        </p>

                        <div className="mt-auto" />

                        <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                          <div className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                            Read <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                          </div>
                          
                          <div className="flex gap-3.5 text-xs text-slate-500">
                            <span className="flex items-center gap-1"><Eye size={15}/> {blog.views}</span>
                            <span className="flex items-center gap-1"><MessageCircle size={14}/> {blog.comments}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </>
          ) : (
             <div className="w-full p-6 bg-slate-50 text-slate-600 rounded-xl border border-slate-200 font-medium text-center">
               No articles found at the moment.
             </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}