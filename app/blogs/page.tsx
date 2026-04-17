"use client";

import Link from 'next/link';
import Header from '../pages/Header';
import Footer from '../pages/Footer';
import { Clock, ThumbsUp, MessageCircle, Eye, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const MOCK_BLOGS = [
  { id: '1', title: 'English Subject Review', author: 'Mahendra Ojha', date: '27 Apr 2023', status: 'PRIVATE', excerpt: 'Recent work and estimates to complete English subject from Kindergarten to Year 12 for all boards.', likes: 2, comments: 0, views: 268 },
  { id: '2', title: 'Understanding System Design', author: 'Tech Team', date: '15 May 2023', status: 'PUBLIC', excerpt: 'A guide to scaling backend architectures, load balancing, caching, and sharding.', likes: 45, comments: 12, views: 1024 },
  { id: '3', title: 'Mastering Advanced SQL', author: 'Data Team', date: '02 Jun 2023', status: 'PRIVATE', excerpt: 'Deep dive into window functions, CTEs, and query optimization.', likes: 18, comments: 3, views: 412 },
  { id: '4', title: 'Future of Web Development', author: 'Frontend Team', date: '02 Jun 2023', status: 'PUBLIC', excerpt: 'Exploring the latest trends in React, Next.js, and modern CSS architecture.', likes: 24, comments: 8, views: 800 }
];

const getBlogImage = (id: string) => {
  const num = parseInt(id);
  const index = isNaN(num) ? 1 : ((num - 1) % 6) + 1;
  return `/bloggs/use${index}.webp`; 
};

export default function Blogs() {
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

          {/* 1. Fixed the broken link and assigned Blog #1's image to the Featured post! */}
          <Link href="/blogs/1" className="block mb-12 active:scale-[0.99] transition-transform duration-200">
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-sm border border-slate-200 group">
              <img
                src={getBlogImage('1')}
                alt="Featured post"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white pr-6">
                <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                  FEATURED
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Build scalable systems like a pro</h2>
                <p className="text-slate-200 text-sm md:text-base max-w-xl">Learn the architecture secrets behind handling millions of requests per second.</p>
              </div>
            </div>
          </Link>

          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {MOCK_BLOGS.map((blog, i) => (
              <Link href={`/blogs/${blog.id}`} key={blog.id} className="group">
                <motion.div
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
                        <span className="flex items-center gap-1"><ThumbsUp size={14}/> {blog.likes}</span>
                        <span className="flex items-center gap-1"><MessageCircle size={14}/> {blog.comments}</span>
                      </div>
                    </div>

                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}