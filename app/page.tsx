import Footer from "./pages/Footer";
import Header from "./pages/Header";

const Home = () => {
  return (
    <div>
      <Header />

      <main className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="rounded-2xl border border-slate-100 bg-slate-50 p-10 text-slate-700">
          <h1 className="text-2xl font-semibold text-slate-900">
            GradePlus App Platform
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600">
            Showcase your AI-powered features like image interpretation, detailed
            solutions, and a Canva-style editor. Replace this section with your
            hero, product highlights, and call-to-action blocks.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
