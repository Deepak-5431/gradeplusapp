'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronUp } from "lucide-react";
import Image from "next/image";

const SocialIcon = ({ label, href }: { label: string; href: string }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
    >
      {label}
    </a>
  );
};

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
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

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full bg-white relative">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-2 md:px-6 lg:grid-cols-4">
        
        <div className="space-y-3">
          <div className="flex items-center gap-2">
          <Image 
            src="/AI/logo.png" 
            alt="GradePlus Logo" 
            width={150} 
            height={35} 
            className="object-contain h-8 w-auto"
          />
          </div>
          <p className="text-sm text-slate-500 leading-relaxed mt-4">
            UGF-03, Trinity Square Complex<br />
            Near Badshahnagar Metro Station<br />
            Mahanagar Lucknow 226006
          </p>
          <p className="text-sm text-slate-500 mt-2">
            <span className="font-semibold text-slate-700">Phone:</span> 0522-4301355
            <br />
            <span className="font-semibold text-slate-700">Email:</span> info@iblib.com
          </p>
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
              <Link href="#features" className="hover:text-teal-600 transition-colors">
                App Features
              </Link>
            </li>
            <li>
              <Link href="#gallery" className="hover:text-teal-600 transition-colors">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="#pricing" className="hover:text-teal-600 transition-colors">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-teal-600 transition-colors">
                Contact Us
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
            <SocialIcon label="Y" href="https://www.youtube.com/c/IBLIBEducations" />
            <SocialIcon label="F" href="https://www.facebook.com/iblibeducations" />
            <SocialIcon label="in" href="https://www.linkedin.com/in/iblib-educations-41072a217" />
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