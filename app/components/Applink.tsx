"use client";

import { motion } from "framer-motion";

const Applink = () => {
  return (
    <section className="bg-slate-200  overflow-hidden">
      <div className="mx-auto max-w-6xl  flex flex-col md:flex-row-reverse items-center gap-12  px-4">
        
        <motion.div
          className="w-full md:w-[30%] flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="/AI/newsr.webp"
            alt="GradePlus App Preview Desktop"
            className="hidden md:block w-[150%] max-w-none h-auto max-h-[90vh] object-contain rounded-xl"
          />

          
          <img
            src="/AI/logins.webp"
            alt="GradePlus App Preview Mobile"
            className="block md:hidden w-full max-w-75 h-auto object-contain rounded-xl"
          />
        </motion.div>

        
        <motion.div
          className="w-full md:w-[70%] text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-800">
            Download GradePlus!
          </h2>

          <p className="mt-6 text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto md:mx-0">
            GradePlus for Parents/Students is a simple application. Parents can
            check and monitor their kids' performance and activities in school.
            This application facilitates and provides a holistic view of kid's
            attendance, fee invoices, exam results, performance in tests and many
            more details.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-8">
            <a
              href="https://play.google.com/store/apps/details?id=com.app.iblib"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-105"
            >
              <img
                src="/AI/playstore.webp"
                alt="Get it on Google Play"
                className="h-14 w-auto"
              />
            </a>

            <div className="flex flex-col items-center">
              <img
                src="/AI/GradePlusApp.webp"
                alt="Scan QR Code"
                className="h-28 w-28 rounded-lg shadow-md"
              />
              <span className="mt-2 text-sm font-medium text-slate-600">
                Scan to Download
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Applink;