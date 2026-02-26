const Applink = () => {
  return (
    <section className="bg-slate-200 py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        
        <h2 className="text-4xl md:text-5xl font-semibold text-slate-800">
          Download GradePlus!
        </h2>

        <p className="mt-6 text-lg text-slate-700 leading-relaxed">
          GradePlus for Parents/Students is a simple application. Parents can
          check and monitor their kids performance and activities in school.
          This application facilitates and provides a holistic view of kid's
          attendance, fee invoices, exam results, performance in tests and many
          more details.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href="#"
            className="inline-block transition-transform duration-300 hover:scale-105"
          >
            <img
              src="/AI/playstore.png" 
              alt="Get it on Google Play"
              className="h-14 w-auto"
            />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Applink;