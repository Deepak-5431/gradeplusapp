import Header from "@/app/pages/Header";
import Footer from "@/app/pages/Footer";
import Link from "next/link";

const MOCK_BLOGS = [
  { id: '1', title: 'The Rise of AI Interpreters', author: 'Deepak Editor', category: 'Technology', readTime: '5 min' },
  { id: '2', title: 'Understanding System Design', author: 'Tech Team', category: 'Engineering', readTime: '8 min' },
  { id: '3', title: 'Mastering Advanced SQL', author: 'Data Team', category: 'Database', readTime: '6 min' },
  { id: '4', title: 'Future of Web Development', author: 'Frontend Team', category: 'Technology', readTime: '7 min' },
  { id: '5', title: 'Cloud Computing Essentials', author: 'DevOps Team', category: 'Cloud', readTime: '10 min' },
];

export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' }
  ];
}

export default async function SingleBlog({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // Filter out the current blog and show other blogs
  const otherBlogs = MOCK_BLOGS.filter(blog => blog.id !== id);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Two column layout */}
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Main blog content - Left side */}
            <div className="lg:w-2/3">
              <article className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="w-full h-48 md:h-64 bg-slate-900 flex items-center justify-center p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500 opacity-20 rounded-full blur-3xl -mr-20 -mt-20"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500 opacity-20 rounded-full blur-3xl -ml-10 -mb-10"></div>
                  <h1 className="text-3xl md:text-5xl font-extrabold text-white text-center z-10 leading-tight">
                    Blog Post #{id}
                  </h1>
                </div>

                <div className="p-8 md:p-12">
                  <div className="flex items-center text-slate-500 text-sm mb-8 border-b border-slate-100 pb-6">
                    <span className="font-semibold text-teal-600 uppercase tracking-wider">Technology</span>
                    <span className="mx-3">•</span>
                    <span>By Deepak editor</span>
                  </div>

                  <div className="text-slate-700 leading-relaxed space-y-6 text-lg">
                    <p>This is where the content for blog {id} will go once connected to the API.</p>
                    <div className="w-full h-64 bg-slate-100 rounded-xl flex items-center justify-center border-2 border-dashed border-slate-300 my-8">
                      <span className="text-slate-400 font-medium">Content uploaded soon</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* Sidebar with other blogs - Right side */}
            <div className="lg:w-1/3">
              <div className="sticky top-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <span className="w-1 h-6 bg-teal-600 rounded-full mr-3"></span>
                  More Stories
                </h2>
                
                <div className="space-y-4">
                  {otherBlogs.map((blog) => (
                    <Link href={`/blogs/${blog.id}`} key={blog.id}>
                      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-5 hover:shadow-md transition-all cursor-pointer group">
                        <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">
                          {blog.category}
                        </span>
                        <h3 className="text-lg font-bold text-slate-900 mt-1 mb-3 group-hover:text-teal-600 transition-colors line-clamp-2">
                          {blog.title}
                        </h3>
                        <div className="flex justify-between items-center text-sm text-slate-500">
                          <span>{blog.author}</span>
                          <span className="text-xs">{blog.readTime} read</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                <Link 
                  href="/blogs" 
                  className="mt-6 inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors"
                >
                  View all blogs
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}