'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronUp } from "lucide-react";


const SocialIcon = ({
  label,
  href,
  svgPath,
  iconBgClass,
}: {
  label: string;
  href: string;
  svgPath: React.ReactNode;
  iconBgClass: string;
}) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-transparent text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-md ${iconBgClass}`}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className="h-5 w-5"
      >
        {svgPath}
      </svg>
    </a>
  );
};

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full bg-white relative">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-2 md:px-6 lg:grid-cols-4">
        
        <div className="space-y-4">
          <div className="flex items-center gap-2">
          <Image 
            src="/AI/logo.webp" 
            alt="GradePlus Logo" 
            width={150} 
            height={35} 
            className="object-contain h-8 w-auto"
          />
          </div>

          <div className="space-y-4 text-sm text-slate-500 leading-relaxed mt-2">
            <div>
              <h4 className="text-xs font-bold tracking-wide text-slate-800">REGIONAL OFFICE</h4>
              <p>
                UGF 03, Trinity Square<br />
                Badshah Nagar Metro Station<br />
                Mahanagar, Lucknow-226006
              </p>
              <a href="tel:+917080005275" className="mt-1 inline-block font-medium text-slate-700 hover:text-teal-600 transition-colors">
                (+91) 70800 05275
              </a>
            </div>

            <div>
              <h4 className="text-xs font-bold tracking-wide text-slate-800">REGIONAL OFFICE</h4>
              <p>
                B2 404, Boomerang, Chandivali<br />
                Andheri(E), Mumbai-400084
              </p>
              <a href="tel:+916395952271" className="mt-1 inline-block font-medium text-slate-700 hover:text-teal-600 transition-colors">
                (+91) 63959 52271
              </a>
            </div>

            <div>
              <h4 className="text-xs font-bold tracking-wide text-slate-800">INTERNATIONAL OFFICE</h4>
              <p>
                33 Mount Sinai Rise<br />
                Singapore-276954
              </p>
              <a href="tel:+6587980736" className="mt-1 inline-block font-medium text-slate-700 hover:text-teal-600 transition-colors">
                (+65) 8798 0736
              </a>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-bold text-slate-800">Useful Links</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-500">
            <li>
              <Link href="#home" className="hover:text-teal-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="#keyfeatures" className="hover:text-teal-600 transition-colors">
                App Features
              </Link>
            </li>
            <li>
              <Link href="#gallery" className="hover:text-teal-600 transition-colors">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="#form" className="hover:text-teal-600 transition-colors">
                Contact Form
              </Link>
            </li>
            <li>
              <Link href="#testimonies" className="hover:text-teal-600 transition-colors">
                Testimonials
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-base font-bold text-slate-800">Our Core Features</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-500">
            <li className="hover:text-teal-600 transition-colors cursor-pointer">All Board Curriculum Customizable</li>
            <li className="hover:text-teal-600 transition-colors cursor-pointer">Online Examination System</li>
            <li className="hover:text-teal-600 transition-colors cursor-pointer">Fee Management System</li>
            <li className="hover:text-teal-600 transition-colors cursor-pointer">TimeTable Management System</li>
            <li className="hover:text-teal-600 transition-colors cursor-pointer">Finance Management</li>
          </ul>
        </div>

        <div>
          <h3 className="text-base font-bold text-slate-800">Our Social Networks</h3>
          <p className="mt-4 text-sm text-slate-500 leading-relaxed">
            Please support us by sharing and following us.
          </p>
          <div className="mt-6 flex items-center gap-3">
            
            <SocialIcon 
              label="YouTube" 
              href="https://www.youtube.com/c/IBLIBEducations" 
              iconBgClass="bg-red-600"
              svgPath={<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />}
            />
            <SocialIcon 
              label="Facebook" 
              href="https://www.facebook.com/iblibeducations" 
              iconBgClass="bg-blue-600"
              svgPath={<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />}
            />
            <SocialIcon 
              label="LinkedIn" 
              href="https://www.linkedin.com/in/iblib-educations-41072a217" 
              iconBgClass="bg-sky-700"
              svgPath={<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />}
            />
          </div>
        </div>
      </div>

      <div className="border-t border-slate-300 bg-slate-50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-slate-500 md:flex-row md:px-6 font-medium">
          <span>Copyright IBLIB Educations. All Rights Reserved</span>
          <span>Powered By <span className="text-teal-600 font-bold">IBLIB Educations</span></span>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-2 right-6 p-3 bg-teal-600 text-white rounded-full shadow-lg shadow-teal-600/30 hover:bg-teal-700 hover:-translate-y-1 transition-all duration-300 z-50 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6" strokeWidth={2.5} />
      </button>
    </footer>
  );
};

export default Footer;