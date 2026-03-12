'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Form = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
		captcha: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Add form submission logic here
		console.log('Form submitted:', formData);
		alert('Message sent successfully!');
		setFormData({ name: '', email: '', subject: '', message: '', captcha: '' });
	};

	return (
		<section className="py-16 bg-gray-50">
			<div className="mx-auto max-w-6xl px-4 text-center md:px-6">
				<h2 className="text-4xl font-bold text-slate-900 mb-3">Contact</h2>
				<p className="text-slate-600 mb-12">
					Please complete the form below. A member of our staff will respond to you promptly.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="bg-white p-6 rounded-lg shadow-sm">
							<div className="flex items-center gap-4 mb-3">
								<MapPin className="text-blue-500" size={24} />
								<h3 className="text-lg font-semibold text-slate-900">ADDRESS</h3>
							</div>
							<p className="text-slate-600 ml-10">
								UGF-03, Trinity Square Complex
								<br />
								Near Badshahnagar Metro Station
								<br />
								Mahanagar, Lucknow 226006
							</p>
						</div>

						{/* Phone */}
						<div className="bg-white p-6 rounded-lg shadow-sm">
							<div className="flex items-center gap-4 mb-3">
								<Phone className="text-blue-500" size={24} />
								<h3 className="text-lg font-semibold text-slate-900">CALL US</h3>
							</div>
							<p className="text-slate-600 ml-10">
								0522-4301355
								<br />
								+91-7522861133
							</p>
						</div>

						{/* Email */}
						<div className="bg-white p-6 rounded-lg shadow-sm">
							<div className="flex items-center gap-4 mb-3">
								<Mail className="text-blue-500" size={24} />
								<h3 className="text-lg font-semibold text-slate-900">EMAIL US</h3>
							</div>
							<p className="text-slate-600 ml-10">
								info@iblib.com
								<br />
								iblib.info@gmail.com
							</p>
						</div>

						{/* Working Hours */}
						<div className="bg-white p-6 rounded-lg shadow-sm">
							<div className="flex items-center gap-4 mb-3">
								<Clock className="text-blue-500" size={24} />
								<h3 className="text-lg font-semibold text-slate-900">WORKING HOURS</h3>
							</div>
							<p className="text-slate-600 ml-10">
								Mon - Sat: 9AM to 6PM
							</p>
						</div>
					</div>

					{/* Contact Form */}
					<form onSubmit={handleSubmit} className="space-y-4">
						<input
							type="text"
							name="name"
							placeholder="Your Name"
							value={formData.name}
							onChange={handleChange}
							required
							className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
						<input
							type="email"
							name="email"
							placeholder="Email"
							value={formData.email}
							onChange={handleChange}
							required
							className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
						<input
							type="text"
							name="subject"
							placeholder="Subject"
							value={formData.subject}
							onChange={handleChange}
							className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
						<textarea
							name="message"
							placeholder="Leave Message"
							value={formData.message}
							onChange={handleChange}
							rows={5}
							className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
						/>
						
						{/* Captcha */}
						<div className="bg-yellow-400 p-3 rounded text-sm font-semibold">
							What is 34 + 55 ? <span className="text-red-600">*</span>
						</div>
						<input
							type="text"
							name="captcha"
							placeholder="Enter answer"
							value={formData.captcha}
							onChange={handleChange}
							required
							className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>

						<button
							type="submit"
							className="w-full md:w-auto px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all"
						>
							Send Message
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Form;
