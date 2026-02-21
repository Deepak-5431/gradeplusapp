import Link from "next/link";

const Header = () => {
	return (
		<header className="w-full bg-white">
			<div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
				<Link href="/" className="flex items-center gap-2">
					<span className="inline-flex h-10 w-12 items-center justify-center rounded-full bg-teal-600 text-white">
						G
					</span>
					<span className=" font-semibold text-slate-800 text-2xl">GradePlus</span>
				</Link>

				<nav className="hidden items-center gap-10 text-xl text-slate-600 md:flex">
					<Link href="#home" className="text-blue-600">
						Home
					</Link>
					<Link href="#features" className="hover:text-slate-900">
						App Features
					</Link>
					<Link href="#about" className="hover:text-slate-900">
						About
					</Link>
					<Link href="#blogs" className="hover:text-slate-900">
						Blogs
					</Link>
					<Link href="#gallery" className="hover:text-slate-900">
						Gallery
					</Link>
					<Link href="#contact" className="hover:text-slate-900">
						Contact Us
					</Link>
				</nav>

				<Link
					href="#login"
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
