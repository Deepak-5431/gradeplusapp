const Applink = () => {
  return (
    <section className="bg-slate-200 py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-slate-800">
          Download GradePlus!
        </h2>

        {/* Description */}
        <p className="mt-6 text-lg text-slate-700 leading-relaxed">
          GradePlus for Parents/Students is a simple application. Parents can
          check and monitor their kids performance and activities in school.
          This application facilitates and provides a holistic view of kid's
          attendance, fee invoices, exam results, performance in tests and many
          more details.
        </p>

        {/* Download Section */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8">

          {/* Play Store Button */}
          <a
            href="https://play.google.com/store/apps/details?id=com.app.iblib"
            className="transition-transform duration-300 hover:scale-105"
          >
            <img
              src="/AI/playstore.png" 
              alt="Get it on Google Play"
              className="h-14 w-auto"
            />
          </a>

          {/* QR Code */}
          <div className="flex flex-col items-center">
            <img
              src="/AI/GradePlusApp.png"
              alt="Scan QR Code"
              className="h-28 w-28 rounded-lg shadow-md"
            />
            <span className="mt-2 text-sm text-slate-600">
              Scan to Download
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Applink;