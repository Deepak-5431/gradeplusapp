'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

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
            
            {/* ADDRESS SECTION */}
            <div className="bg-white p-6 rounded-lg shadow-sm text-left">
              <div className="flex items-center gap-3 mb-4">
                {/* Fixed width container centers the icon */}
                <div className="w-6 flex justify-center">
                  <MapPin className="text-blue-500" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">ADDRESS</h3>
              </div>
              <div className="text-slate-600 pl-9 space-y-5 leading-relaxed">
                <div>
                  <h4 className="font-semibold text-slate-800">REGIONAL OFFICE</h4>
                  <p>UGF 03, Trinity Square</p>
                  <p>Badshah Nagar Metro Station</p>
                  <p>Mahanagar, Lucknow-226006</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">REGIONAL OFFICE</h4>
                  <p>B2 404, Boomerang, Chandivali</p>
                  <p>Andheri(E), Mumbai-400084</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">INTERNATIONAL OFFICE</h4>
                  <p>33 Mount Sinai Rise</p>
                  <p>Singapore-276954</p>
                </div>
              </div>
            </div>

            {/* CONTACT SECTION */}
            <div className="bg-white p-6 rounded-lg shadow-sm text-left">
              {/* Phone Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 flex justify-center">
                  <Phone className="text-blue-500" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">CONTACT</h3>
              </div>
              
              <div className="text-slate-600 space-y-6 leading-relaxed">
                {/* CALL Details */}
                <div className="pl-9">
                  <h4 className="text-sm font-semibold text-slate-800 mb-1">CALL</h4>
                  <p>(+91) 70800 05275</p>
                  <p>(+91) 63959 52271</p>
                  <p>(+65) 8798 0736</p>
                  <p>(+91) 63641 60785</p>
                </div>
                
                {/* MAIL Header & Details - Now pulled out to align perfectly with Phone */}
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-6 flex justify-center">
                      <Mail className="text-blue-500" size={20} />
                    </div>
                    <h4 className="text-sm font-semibold text-slate-800">MAIL</h4>
                  </div>
                  <div className="pl-9">
                    <p>info@iblib.com</p>
                    <p>iblib.info@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

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