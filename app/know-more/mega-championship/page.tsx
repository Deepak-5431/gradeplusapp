'use client';

import Link from 'next/link';
import { 
  Trophy, 
  GraduationCap, 
  Sparkles,
  ChevronLeft,
  MapPin,
  Smartphone,
  ScrollText,
  AlertCircle,
  Building2,
  Banknote,
  Scale,
  Clock,
  BookOpen
} from 'lucide-react';

export default function MegaChampionshipPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20 font-sans">
      
      {/* --- HEADER BANNER --- */}
      <div className="bg-slate-900 pt-16 pb-28 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-blue-500/10 blur-[100px] pointer-events-none"></div>
        <div className="mx-auto max-w-4xl relative z-10">
          <Link href="/" className="inline-flex float-left items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 text-sm font-semibold">
            <ChevronLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="inline-block px-4 py-1.5 bg-amber-500/20 border border-amber-500/50 text-amber-400 font-bold tracking-widest text-xs rounded-full mb-6 uppercase">
            नियम एवं शर्तें (Terms & Conditions)
          </div>
          <h1 className="text-4xl font-black text-white md:text-5xl lg:text-6xl uppercase tracking-tight leading-tight">
            Knowledge <br />
            <span className="text-amber-400">Championship</span>
          </h1>
          <p className="mt-6 text-lg text-slate-300 md:text-xl font-medium max-w-2xl mx-auto">
            कृपया प्रतियोगिता में भाग लेने से पहले सभी नियम, पुरस्कार और परीक्षा पैटर्न को ध्यान से पढ़ें।
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 -mt-16 sm:px-6 lg:px-8 relative z-20">
        
        {/* --- TOP HIGHLIGHT CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          <div className="bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-4">
              <Trophy className="w-6 h-6" />
            </div>
            <h3 className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-1">Mega Prize</h3>
            <p className="text-2xl font-black text-slate-900">₹5,00,000</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-1">Eligibility</h3>
            <p className="text-lg font-bold text-slate-900">Class 6th to 12th</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mb-4">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-1">Requirement</h3>
            <p className="text-lg font-bold text-teal-600">Active Paid Plan</p>
          </div>
        </div>

        {/* --- ROUNDS & PRIZES SECTION --- */}
        <section className="mb-16">
          <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-3 justify-center md:justify-start">
            <Sparkles className="w-8 h-8 text-amber-500" /> 
            प्रतियोगिता के चरण एवं पुरस्कार
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Round 1 */}
            <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 font-bold text-xs rounded-lg mb-4">चरण 1</div>
              <h3 className="text-xl font-black text-slate-800 mb-2">School Level (स्कूल स्तर)</h3>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                ऑनलाइन परीक्षा (रजिस्टर्ड मोबाइल के माध्यम से)। संबंधित स्कूल में परीक्षा तभी होगी जब वहाँ से कम से कम 100 Paid विद्यार्थी हों।
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center bg-amber-50 px-4 py-3 rounded-xl border border-amber-100">
                  <span className="font-bold text-amber-900">प्रथम पुरस्कार</span>
                  <span className="font-black text-amber-600 text-lg">₹2,000</span>
                </div>
                <div className="flex justify-between items-center bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                  <span className="font-bold text-slate-700">द्वितीय पुरस्कार</span>
                  <span className="font-bold text-slate-900">₹1,000</span>
                </div>
                <div className="flex justify-between items-center bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                  <span className="font-bold text-slate-700">तृतीय पुरस्कार</span>
                  <span className="font-bold text-slate-900">₹500</span>
                </div>
              </div>
            </div>

            {/* Round 2 */}
            <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 font-bold text-xs rounded-lg mb-4">चरण 2</div>
              <h3 className="text-xl font-black text-slate-800 mb-2">District Level (जिला स्तर)</h3>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                ऑनलाइन परीक्षा। प्रत्येक स्कूल से अपनी कक्षा में टॉप 3 (कुल 21 विद्यार्थी) जिला मुख्यालय पर परीक्षा देंगे।
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center bg-amber-50 px-4 py-3 rounded-xl border border-amber-100">
                  <span className="font-bold text-amber-900">प्रथम पुरस्कार</span>
                  <span className="font-black text-amber-600 text-lg">₹50,000</span>
                </div>
                <div className="flex justify-between items-center bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                  <span className="font-bold text-slate-700">द्वितीय पुरस्कार</span>
                  <span className="font-bold text-slate-900">₹25,000</span>
                </div>
                <div className="flex justify-between items-center bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                  <span className="font-bold text-slate-700">तृतीय पुरस्कार</span>
                  <span className="font-bold text-slate-900">₹12,500</span>
                </div>
              </div>
            </div>

            {/* Round 3 */}
            <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 font-bold text-xs rounded-lg mb-4">चरण 3</div>
              <h3 className="text-xl font-black text-slate-800 mb-2">State Level (राज्य स्तर)</h3>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                यह परीक्षा OMR आधारित होगी और मंडल स्तर पर आयोजित की जाएगी। जिला स्तर के टॉप 3 विद्यार्थी भाग लेंगे।
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center bg-amber-50 px-4 py-3 rounded-xl border border-amber-100">
                  <span className="font-bold text-amber-900">प्रथम पुरस्कार</span>
                  <span className="font-black text-amber-600 text-lg">₹1,00,000</span>
                </div>
                <div className="flex justify-between items-center bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                  <span className="font-bold text-slate-700">द्वितीय पुरस्कार</span>
                  <span className="font-bold text-slate-900">₹50,000</span>
                </div>
                <div className="flex justify-between items-center bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                  <span className="font-bold text-slate-700">तृतीय पुरस्कार</span>
                  <span className="font-bold text-slate-900">₹25,000</span>
                </div>
              </div>
            </div>

            {/* Mega Round */}
            <div className="bg-slate-900 rounded-[2rem] p-6 shadow-xl shadow-slate-900/20 border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 blur-[50px] rounded-full pointer-events-none"></div>
              <div className="inline-block px-3 py-1 bg-amber-500/20 text-amber-400 border border-amber-500/30 font-bold text-xs rounded-lg mb-4 relative z-10">अंतिम चरण</div>
              <h3 className="text-xl font-black text-white mb-2 relative z-10">Mega Round (Live Quiz)</h3>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed relative z-10">
                राजधानी लखनऊ में लाइव क्विज। तीसरे राउंड के बाद प्रत्येक कक्षा से 15 विद्यार्थियों का चयन किया जाएगा।
              </p>
              <div className="mt-auto pt-4 relative z-10">
                <div className="flex justify-between items-center bg-gradient-to-r from-amber-500 to-orange-600 px-5 py-4 rounded-xl shadow-lg">
                  <span className="font-bold text-white">सुपर टॉपर (प्रथम)</span>
                  <span className="font-black text-white text-2xl">₹5,00,000</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- EXAM PATTERN SECTION --- */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 text-center md:text-left">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-2 flex items-center gap-3 justify-center md:justify-start">
                <BookOpen className="w-8 h-8 text-blue-600" /> 
                परीक्षा पैटर्न (Exam Pattern)
              </h2>
              <p className="text-slate-500 font-medium">कुल प्रश्न: 100 | समय: 120 मिनट | प्रकार: बहुविकल्पीय (MCQ)</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Pattern 6-8 */}
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="bg-slate-100 p-4 text-center border-b border-slate-200">
                <h3 className="font-black text-slate-800 text-lg">Class 6th – 8th</h3>
              </div>
              <div className="p-0">
                <ul className="divide-y divide-slate-100 text-sm font-medium">
                  <li className="flex justify-between p-4 hover:bg-slate-50"><span className="text-slate-600">Mathematics</span><span className="font-bold text-slate-900">10</span></li>
                  <li className="flex justify-between p-4 hover:bg-slate-50"><span className="text-slate-600">Science</span><span className="font-bold text-slate-900">10</span></li>
                  <li className="flex justify-between p-4 hover:bg-slate-50"><span className="text-slate-600">Hindi</span><span className="font-bold text-slate-900">10</span></li>
                  <li className="flex justify-between p-4 hover:bg-slate-50"><span className="text-slate-600">English</span><span className="font-bold text-slate-900">10</span></li>
                  <li className="flex justify-between p-4 hover:bg-slate-50"><span className="text-slate-600">General Knowledge</span><span className="font-bold text-slate-900">40</span></li>
                  <li className="flex justify-between p-4 hover:bg-slate-50"><span className="text-slate-600">Aptitude & Reasoning</span><span className="font-bold text-slate-900">20</span></li>
                </ul>
              </div>
            </div>

            {/* Pattern 9-10 */}
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="bg-blue-50 p-4 text-center border-b border-blue-100">
                <h3 className="font-black text-blue-900 text-lg">Class 9th – 10th</h3>
              </div>
              <div className="p-0">
                <ul className="divide-y divide-slate-100 text-sm font-medium">
                  <li className="flex justify-between p-4 hover:bg-slate-50"><span className="text-slate-600">Mathematics</span><span className="font-bold text-slate-900">10</span></li>
                  <li className="flex justify-between p-4 hover:bg-slate-50"><span className="text-slate-600">Science</span><span className="font-bold text-slate-900">10</span></li>
                  <li className="flex justify-between p-4 hover:bg-slate-50"><span className="text-slate-600">Hindi</span><span className="font-bold text-slate-900">10</span></li>
                  <li className="flex justify-between p-4 hover:bg-slate-50"><span className="text-slate-600">English</span><span className="font-bold text-slate-900">10</span></li>
                  <li className="flex justify-between p-4 hover:bg-slate-50"><span className="text-slate-600">General Knowledge</span><span className="font-bold text-slate-900">30</span></li>
                  <li className="flex justify-between p-4 hover:bg-slate-50"><span className="text-slate-600">Computer</span><span className="font-bold text-slate-900">10</span></li>
                  <li className="flex justify-between p-4 hover:bg-slate-50"><span className="text-slate-600">Aptitude & Reasoning</span><span className="font-bold text-slate-900">20</span></li>
                </ul>
              </div>
            </div>

            {/* Pattern 11-12 */}
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="bg-indigo-50 p-4 text-center border-b border-indigo-100">
                <h3 className="font-black text-indigo-900 text-lg">Class 11th – 12th</h3>
              </div>
              <div className="p-0">
                <ul className="divide-y divide-slate-100 text-sm font-medium">
                  <li className="flex justify-between p-4 hover:bg-slate-50"><span className="text-slate-600">Physics / Bio</span><span className="font-bold text-slate-900">10 / 10</span></li>
                  <li className="flex justify-between p-4 hover:bg-slate-50"><span className="text-slate-600">Chemistry</span><span className="font-bold text-slate-900">10</span></li>
                  <li className="flex justify-between p-4 hover:bg-slate-50"><span className="text-slate-600">Mathematics</span><span className="font-bold text-slate-900">10</span></li>
                  <li className="flex justify-between p-4 hover:bg-slate-50"><span className="text-slate-600">Hindi</span><span className="font-bold text-slate-900">10</span></li>
                  <li className="flex justify-between p-4 hover:bg-slate-50"><span className="text-slate-600">English</span><span className="font-bold text-slate-900">10</span></li>
                  <li className="flex justify-between p-4 hover:bg-slate-50"><span className="text-slate-600">General Knowledge</span><span className="font-bold text-slate-900">30</span></li>
                  <li className="flex justify-between p-4 hover:bg-slate-50"><span className="text-slate-600">Aptitude & Reasoning</span><span className="font-bold text-slate-900">10</span></li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* --- RULES & GUIDELINES --- */}
        <section className="bg-white rounded-[2rem] p-6 md:p-10 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
            <ScrollText className="w-6 h-6 text-slate-700" /> 
            महत्वपूर्ण नियम (Important Guidelines)
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-12 md:gap-y-8">
            <div className="flex gap-4">
              <div className="shrink-0 mt-1"><AlertCircle className="w-5 h-5 text-blue-500" /></div>
              <div>
                <h4 className="font-bold text-slate-800 mb-1">पात्रता (Eligibility)</h4>
                <p className="text-slate-600 text-sm leading-relaxed">इस प्रतियोगिता में वही विद्यार्थी भाग ले सकते हैं जिन्होंने GradePlus App डाउनलोड करके 1 वर्ष का कोर्स (₹999 / ₹1199 / ₹1399) खरीदा हो या कम से कम ₹1000 का भुगतान किया हो।</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 mt-1"><Building2 className="w-5 h-5 text-emerald-500" /></div>
              <div>
                <h4 className="font-bold text-slate-800 mb-1">परीक्षा केंद्र की शर्त</h4>
                <p className="text-slate-600 text-sm leading-relaxed">Level-1 की परीक्षा स्कूल में तभी होगी जब वहां 100 से अधिक Paid विद्यार्थी हों। अन्यथा, निकट के किसी अन्य निर्धारित स्कूल में केंद्र बनाया जाएगा।</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 mt-1"><Banknote className="w-5 h-5 text-amber-500" /></div>
              <div>
                <h4 className="font-bold text-slate-800 mb-1">पुरस्कार वितरण</h4>
                <p className="text-slate-600 text-sm leading-relaxed">कैश पुरस्कार जीतने वाले विद्यार्थियों की राशि सीधे उनके बैंक खाते (Direct Bank Transfer) में ट्रांसफर की जाएगी।</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 mt-1"><Clock className="w-5 h-5 text-rose-500" /></div>
              <div>
                <h4 className="font-bold text-slate-800 mb-1">टाई-ब्रेकिंग नियम</h4>
                <p className="text-slate-600 text-sm leading-relaxed">यदि दो या अधिक विद्यार्थियों के समान अंक आते हैं, तो विजेता का निर्णय जन्म तिथि के आधार पर होगा। अधिक उम्र वाले विद्यार्थी को विजेता घोषित किया जाएगा।</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 mt-1"><Scale className="w-5 h-5 text-slate-500" /></div>
              <div>
                <h4 className="font-bold text-slate-800 mb-1">आयोजक का अधिकार एवं क्षेत्राधिकार</h4>
                <p className="text-slate-600 text-sm leading-relaxed">सभी अंतिम निर्णय IBLIB EDUCATIONS PVT. LTD. के होंगे। विवाद की स्थिति में केवल लखनऊ, उत्तर प्रदेश के न्यायालयों का क्षेत्राधिकार मान्य होगा।</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}