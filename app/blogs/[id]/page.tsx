export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}

export default async function SingleBlog({ params }: { params: Promise<{ id: string }> }) {
  
  const { id } = await params;

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <article className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        
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
              <span className="text-slate-400 font-medium">Image uploaded soon</span>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}