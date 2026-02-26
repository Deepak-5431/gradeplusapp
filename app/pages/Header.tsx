import Link from "next/link";
import Image from "next/image"; 

const Header = () => {
  return (
    <header className="w-full bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span>
            <Image 
              src="/favicon.ico" 
              alt="GradePlus Logo" 
              width={24} 
              height={24} 
              className="object-contain"
            />
          </span>
          <span className="font-semibold text-slate-800 text-2xl">GradePlus</span>
        </Link>

        <nav className="hidden items-center gap-10 text-xl text-slate-600 md:flex">
          <Link href="#home" className="text-blue-600 hover:text-slate-900 transition-colors">
            Home
          </Link>
          <Link href="#keyfeatures" className="hover:text-slate-900 transition-colors">
            App Features
          </Link>
          <Link href="#herosection" className="hover:text-slate-900 transition-colors">
            About
          </Link>
          <Link href="#testimonies" className="hover:text-slate-900 transition-colors">
            Blogs
          </Link>
          <Link href="#gallery" className="hover:text-slate-900 transition-colors">
            Gallery
          </Link>
          <Link href="#form" className="hover:text-slate-900 transition-colors">
            Contact Us
          </Link>
        </nav>

        <Link
          href="/login"
          className="rounded-md border border-blue-600 px-4 py-2 text-sm font-medium text-blue-600 transition hover:bg-blue-50"
        >
          Login
        </Link>
      </div>
      <div className="h-px w-full bg-slate-100" />
    </header>
  );
};

export default Header;