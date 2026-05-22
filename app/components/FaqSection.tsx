import React from 'react';
import Image from 'next/image';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  { id: 1, question: "What is GradePlus?", answer: "GradePlus is an AI-powered study app that helps students with homework solutions, doubt solving, exam preparation, and personalized learning." },
  { id: 2, question: "Is GradePlus suitable for CBSE students?", answer: "Yes, GradePlus supports CBSE students with study materials, AI doubt solving, revision support, and exam preparation tools." },
  { id: 3, question: "Can GradePlus solve homework questions?", answer: "Yes, students can upload handwritten or typed questions and receive instant AI-generated step-by-step solutions." },
  { id: 4, question: "Does GradePlus provide exam preparation support?", answer: "Yes, GradePlus offers MCQ practice, revision support, online tests, and personalized learning recommendations." },
  { id: 5, question: "Is GradePlus available for ICSE students?", answer: "Yes, GradePlus supports ICSE students along with CBSE and state board learners." },
  { id: 6, question: "Does GradePlus provide performance tracking?", answer: "Yes, GradePlus includes student performance analytics, progress tracking, and smart learning insights." },
  { id: 7, question: "Can schools use GradePlus?", answer: "Yes, schools and educational institutions can use GradePlus for examination systems, attendance tracking, fee management, and online learning workflows." }
];

interface FaqSchema {
  "@context": string;
  "@type": string;
  mainEntity: {
    "@type": string;
    name: string;
    acceptedAnswer: {
      "@type": string;
      text: string;
    };
  }[];
}

export default function FaqSection(): React.ReactElement {
  
  const faqSchema: FaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section 
      id="faq" 
      className="w-full bg-slate-50 py-16 md:py-24 border-t border-slate-200 relative overflow-hidden"
      aria-labelledby="faq-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-7">
            <div className="text-left mb-10">
              <h2 
                id="faq-heading"
                className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight"
              >
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Everything you need to know about GradePlus
              </p>
            </div>

            <div className="space-y-4">
              {faqData.map((faq: FaqItem) => (
                <details
                  key={faq.id}
                  className="group bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden transition-shadow duration-200 hover:shadow-md [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer list-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset">
                    <span className="text-base md:text-lg font-semibold text-slate-900 pr-4">
                      {faq.question}
                    </span>
                    
                    <span className="shrink-0 ml-4 text-slate-500 transition-transform duration-200 group-open:rotate-180">
                      <svg 
                        className="w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M19 9l-7 7-7-7" 
                        />
                      </svg>
                    </span>
                  </summary>

                  <div className="px-6 pb-5 pt-0">
                    <p className="text-slate-600 leading-relaxed text-base">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-10 text-left">
              <p className="text-slate-500 text-sm cursor-pointer">
                Still have questions?{' '}
                <a 
                  // href="/contact" 
                  className="text-blue-600 font-medium hover:text-blue-700 hover:underline transition-colors"
                >
                  Contact our support team
                </a>
              </p>
            </div>
          </div>

          <div className=" w-full hidden lg:block sticky top-24 lg:col-span-5">
            <div className="relative w-full h-137.5 xl:h-162.5 flex items-center justify-center">
              <Image 
                src="/AI/faqbot.webp" 
                alt="GradePlus AI Assistant" 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-center drop-shadow-2xl hover:-translate-y-2 transition-transform duration-500 scale-110 lg:scale-125"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
