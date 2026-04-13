'use client';

import { useState } from 'react';

export default function CreateBlog() {
  // Mock login state - toggle this to true to see the editor!
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 max-w-md w-full text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Author Login</h2>
          <p className="text-slate-500 mb-6">You must be logged in to write a blog.</p>
          <button 
            onClick={() => setIsLoggedIn(true)}
            className="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800"
          >
            Mock Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
        <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-6">
          <h1 className="text-3xl font-bold text-slate-900">Create New Post</h1>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
            Publish
          </button>
        </div>

        <div className="space-y-6">
          {/* Title Input */}
          <input 
            type="text" 
            placeholder="Blog Title..." 
            className="w-full text-4xl font-bold text-slate-900 placeholder:text-slate-300 focus:outline-none bg-transparent"
          />

          {/* Fake Toolbar */}
          <div className="flex gap-2 p-2 bg-slate-50 rounded-lg border border-slate-200">
            {['B', 'I', 'U', 'H1', 'H2', 'Quote', 'Link', 'Image'].map((tool) => (
              <button key={tool} className="px-3 py-1.5 text-sm font-semibold text-slate-600 hover:bg-slate-200 rounded">
                {tool}
              </button>
            ))}
          </div>

          {/* Editor Area */}
          <textarea 
            placeholder="Start writing your story..." 
            className="w-full h-125 text-lg text-slate-700 resize-none focus:outline-none bg-transparent"
          ></textarea>
        </div>
      </div>
    </div>
  );
}