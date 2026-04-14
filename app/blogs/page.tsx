import Link from 'next/link';
import Header from '../pages/Header';
import Footer from '../pages/Footer';

const MOCK_BLOGS = [
  { id: '1', title: 'The Rise of AI Interpreters', author: 'Deepak Editor', category: 'Technology', readTime: '5 min' },
  { id: '2', title: 'Understanding System Design', author: 'Tech Team', category: 'Engineering', readTime: '8 min' },
  { id: '3', title: 'Mastering Advanced SQL', author: 'Data Team', category: 'Database', readTime: '6 min' },
  { id: '4', title: 'Future of Web Development', author: 'Frontend Team', category: 'Technology', readTime: '7 min' },
  { id: '5', title: 'Cloud Computing Essentials', author: 'DevOps Team', category: 'Cloud', readTime: '10 min' },
];

export default function Blogs() {
  return (
    <>
    <Header />
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-extrabold text-slate-900">Latest Updates</h1>
         { /*<Link href="/blogs/create" className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full font-semibold transition-colors">
            Write a Blog
          </Link>*/}
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_BLOGS.map((blogs) => (
            <Link href={`/blogs/${blogs.id}`} key={blogs.id}>
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow cursor-pointer h-full flex flex-col">
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider mb-2">{blogs.category}</span>
                <h2 className="text-xl font-bold text-slate-900 mb-3">{blogs.title}</h2>
                <div className="mt-auto pt-4 border-t border-slate-50 flex justify-between text-sm text-slate-500">
                  <span>{blogs.author}</span>
                  <span>{blogs.readTime} read</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}