import Link from "next/link";

const SocialIcon = ({ label }: { label: string }) => {
	return (
		<span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700">
			{label}
		</span>
	);
};

const Footer = () => {
	return (
		<footer className="w-full bg-white">
			<div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-2 md:px-6 lg:grid-cols-4">
				<div className="space-y-3">
					<div className="flex items-center gap-2">
						<span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 text-white">
							G
						</span>
						<span className="text-lg font-semibold text-slate-800">GradePlus</span>
					</div>
					<p className="text-sm text-slate-500">
						UGF-03, Trinity Square Complex<br />
						Near Badshahnagar Metro Station<br />
						Mahanagar Lucknow 226006
					</p>
					<p className="text-sm text-slate-500">
						<span className="font-semibold text-slate-700">Phone:</span> 0522-4301355
						<br />
						<span className="font-semibold text-slate-700">Email:</span> info@iblib.com
					</p>
				</div>

				<div>
					<h3 className="text-sm font-semibold text-slate-800">Useful Links</h3>
					<ul className="mt-3 space-y-2 text-sm text-slate-500">
						<li>
							<Link href="#home" className="hover:text-slate-900">
								Home
							</Link>
						</li>
						<li>
							<Link href="#features" className="hover:text-slate-900">
								App Features
							</Link>
						</li>
						<li>
							<Link href="#gallery" className="hover:text-slate-900">
								Gallery
							</Link>
						</li>
						<li>
							<Link href="#pricing" className="hover:text-slate-900">
								Pricing
							</Link>
						</li>
						<li>
							<Link href="#contact" className="hover:text-slate-900">
								Contact Us
							</Link>
						</li>
					</ul>
				</div>

				<div>
					<h3 className="text-sm font-semibold text-slate-800">Our Core Features</h3>
					<ul className="mt-3 space-y-2 text-sm text-slate-500">
						<li>All Board Curriculum Customizable</li>
						<li>Online Examination System</li>
						<li>Fee Management System</li>
						<li>TimeTable Management System</li>
						<li>Finance Management</li>
					</ul>
				</div>

				<div>
					<h3 className="text-sm font-semibold text-slate-800">Our Social Networks</h3>
					<p className="mt-3 text-sm text-slate-500">
						Please support us by sharing and following us.
					</p>
					<div className="mt-4 flex items-center gap-3">
						<SocialIcon label="Y" />
						<SocialIcon label="F" />
						<SocialIcon label="in" />
					</div>
				</div>
			</div>

			<div className="border-t border-slate-100">
				<div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 text-xs text-slate-500 md:flex-row md:px-6">
					<span>Copyright IBLIB Educations. All Rights Reserved</span>
					<span>Powered By IBLIB Educations</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
