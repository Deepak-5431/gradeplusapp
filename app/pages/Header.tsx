"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; 

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', href);
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-8 lg:px-16 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/AI/logo.webp" 
            alt="GradePlus Logo" 
            width={150} 
            height={35} 
            className="object-contain h-8 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-10 text-xl text-slate-600 md:flex">
          <Link href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-blue-600 hover:text-slate-900 transition-colors">
            Home
          </Link>
          <Link href="#keyfeatures" onClick={(e) => handleNavClick(e, '#keyfeatures')} className="hover:text-slate-900 transition-colors">
            App Features
          </Link>
          <Link href="#herosection" onClick={(e) => handleNavClick(e, '#herosection')} className="hover:text-slate-900 transition-colors">
            About
          </Link>
          <Link href="#testimonies" onClick={(e) => handleNavClick(e, '#testimonies')} className="hover:text-slate-900 transition-colors">
            Blogs
          </Link>
          <Link href="#gallery" onClick={(e) => handleNavClick(e, '#gallery')} className="hover:text-slate-900 transition-colors">
            Gallery
          </Link>
          <Link href="#form" onClick={(e) => handleNavClick(e, '#form')} className="hover:text-slate-900 transition-colors">
            Contact Us
          </Link>
        </nav>
{/*
        <Link
          href="#blank"
          className="hidden md:block rounded-md border border-blue-600 px-4 py-2 text-sm font-medium text-blue-600 transition hover:bg-blue-50"
        >
          Login
        </Link>*/}

        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-slate-800 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-slate-800 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-slate-800 transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="flex flex-col bg-white px-4 py-4 space-y-4 border-t border-slate-100">
          <Link href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-blue-600 hover:text-slate-900 transition-colors py-2">
            Home
          </Link>
          <Link href="#keyfeatures" onClick={(e) => handleNavClick(e, '#keyfeatures')} className="text-slate-600 hover:text-slate-900 transition-colors py-2">
            App Features
          </Link>
          <Link href="#herosection" onClick={(e) => handleNavClick(e, '#herosection')} className="text-slate-600 hover:text-slate-900 transition-colors py-2">
            About
          </Link>
          <Link href="#testimonies" onClick={(e) => handleNavClick(e, '#testimonies')} className="text-slate-600 hover:text-slate-900 transition-colors py-2">
            Blogs
          </Link>
          <Link href="#gallery" onClick={(e) => handleNavClick(e, '#gallery')} className="text-slate-600 hover:text-slate-900 transition-colors py-2">
            Gallery
          </Link>
          <Link href="#form" onClick={(e) => handleNavClick(e, '#form')} className="text-slate-600 hover:text-slate-900 transition-colors py-2">
            Contact Us
          </Link>
          {/*<Link
            href="/login"
            className="rounded-md border border-blue-600 px-4 py-2 text-sm font-medium text-blue-600 transition hover:bg-blue-50 text-center"
          >
            Login
          </Link>*/}
        </nav>
      </div>

      <div className="h-px w-full bg-slate-100" />
    </header>
  );
};

export default Header;