'use client';

import Link from 'next/link';
import { 
  Trophy, 
  GraduationCap, 
  Smartphone, 
  CalendarDays, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Sparkles,
  ChevronLeft
} from 'lucide-react';

export default function MegaChampionshipPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-16 font-sans">
      
      {/* Header Banner */}
      <div className="bg-slate-900 pt-16 pb-24 px-4 text-center">
        <div className="mx-auto max-w-4xl">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 text-sm font-semibold">
            <ChevronLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-3xl font-black text-white md:text-5xl lg:text-6xl uppercase tracking-tight leading-tight">
            3 Round Mega <br />
            <span className="text-amber-400">Knowledge Championship</span>
          </h1>
          <p className="mt-6 text-lg text-slate-300 md:text-xl font-medium max-w-2xl mx-auto">
            Stop Studying Harder, Start Studying Smarter. Compete, learn, and win big!
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 -mt-12 sm:px-6 lg:px-8">
        
        {/* Key Highlights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          
          <div className="bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center transform transition-transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-4">
              <Trophy className="w-6 h-6" />
            </div>
            <h3 className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-1">Total Prize Pool</h3>
            <p className="text-2xl font-black text-slate-900">More Than ₹3 Crore</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center transform transition-transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-1">Eligibility</h3>
            <p className="text-lg font-bold text-slate-900">Class 6th to 12th</p>
            <p className="text-xs text-slate-500 mt-1">(CBSE | ICSE | UP Board)</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center transform transition-transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mb-4">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-1">Entry Fee</h3>
            <p className="text-2xl font-black text-teal-600">100% Free</p>
            <p className="text-xs text-slate-500 mt-1">via GradePlus App</p>
          </div>

        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column (Prizes & Info) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Mega Prizes Section */}
            <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200">
              <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-amber-500" /> Mega Prizes
              </h2>
              
              <div className="space-y-4">
                <div className="bg-linear-to-r from-amber-50 to-orange-50 border border-amber-200 p-5 rounded-2xl flex items-center justify-between">
                  <div>
                    <h3 className="font-black text-amber-900 text-lg md:text-xl">Super Topper</h3>
                    <p className="text-amber-700 font-medium text-sm">The Knowledge Legend Award</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl md:text-3xl font-black text-amber-600">₹5,00,000</p>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Final Round Topper</h3>
                    <p className="text-slate-500 font-medium text-sm">For each class (6th to 12th)</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl md:text-2xl font-black text-slate-700">₹1,00,000</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Schedule Section - COMPLETELY CLEANED FOR HYDRATION FIX */}
            <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200">
              <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-2">
                <CalendarDays className="w-6 h-6 text-blue-500" /> Championship Schedule
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-600 text-xs uppercase tracking-wider">
                      <th className="p-4 rounded-tl-xl">Round Level</th>
                      <th className="p-4">Exam Date</th>
                      <th className="p-4">Result Date</th>
                      <th className="p-4 rounded-tr-xl">Prize Dist.</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm font-medium text-slate-700 divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-bold text-slate-900">1st: School Level</td>
                      <td className="p-4">11 Oct 2026</td>
                      <td className="p-4">18 Oct 2026</td>
                      <td className="p-4">25 Oct 2026</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-bold text-slate-900">2nd: District Level</td>
                      <td className="p-4">15 Nov 2026</td>
                      <td className="p-4">22 Nov 2026</td>
                      <td className="p-4">29 Nov 2026</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-bold text-slate-900">3rd: State Level</td>
                      <td className="p-4">27 Dec 2026</td>
                      <td className="p-4">03 Jan 2027</td>
                      <td className="p-4">10 Jan 2027</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 p-4 bg-teal-50 border border-teal-100 rounded-xl flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></div>
                <p className="text-sm font-bold text-teal-800">
                  Live Quiz Contest: 15, 16, 17 Jan 2027
                </p>
              </div>
            </section>

          </div>

          {/* Right Column (Sidebar) */}
          <div className="space-y-8">
            
            {/* Bonus Box */}
            <div className="bg-linear-to-br from-indigo-600 to-violet-700 rounded-3xl p-6 md:p-8 text-white shadow-xl shadow-indigo-200">
              <h3 className="text-xl font-black mb-2">Download Bonus!</h3>
              <p className="text-indigo-100 text-sm mb-6 leading-relaxed">
                तुरंत पायें ₹50 का कैशबैक Artificial Intelligence Assistant फीचर के लिए।
              </p>
              <div className="bg-white/10 border border-white/20 rounded-xl p-4 text-center backdrop-blur-sm">
                <p className="text-xs uppercase tracking-widest text-indigo-200 font-bold mb-1">Use Code</p>
                <p className="text-2xl font-black tracking-widest">GPAI</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200">
              <h3 className="text-lg font-black text-slate-900 mb-6">Contact & Details</h3>
              
              <ul className="space-y-5 text-sm font-medium text-slate-600">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-slate-400 shrink-0" />
                  <a href="tel:7393997213" className="hover:text-blue-600 transition-colors">7393997213</a>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-slate-400 shrink-0" />
                  <div className="flex flex-col gap-1">
                    <a href="https://www.iblib.com" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">www.iblib.com</a>
                    <a href="https://gradeplusapp.com" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">gradeplusapp.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-slate-400 shrink-0" />
                  <a href="mailto:iblib.info@gmail.com" className="hover:text-blue-600 transition-colors">iblib.info@gmail.com</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-slate-400 shrink-0" />
                  <span className="leading-relaxed">
                    IBLIB EDUCATIONS PVT. LTD.<br />
                    UGF 03, Trinity Sqaure, Badshah Nagar<br />
                    Mahanagar, Lucknow - 226006
                  </span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}