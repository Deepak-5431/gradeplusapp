'use client';

import Link from 'next/link';
import { 
  Trophy, 
  ChevronLeft,
  Download,
  AlertCircle,
  GraduationCap,
  Banknote,
  Scale,
  Clock,
  Smartphone,
  MapPin,
  Building2,
  BookOpen
} from 'lucide-react';

export default function MegaChampionshipPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans pb-24 md:pb-12">
      
      <div className="bg-slate-900 pt-6 pb-16 px-4 text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto flex justify-start relative z-20 mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-all text-sm font-bold bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/10 shadow-sm">
            <ChevronLeft className="w-4 h-4" /> Back
          </Link>
        </div>

        
        <div className="mx-auto max-w-3xl relative z-10">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 bg-amber-500/20 border border-amber-500/50 text-amber-400 font-bold tracking-widest text-xs rounded-full mb-6 uppercase">
            <Trophy className="w-4 h-4" /> GradePlus Mega Event
          </div>
          
          <h1 className="text-4xl font-black text-white md:text-5xl lg:text-6xl uppercase tracking-tight leading-tight mb-4">
            Win Up To <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-300 via-yellow-400 to-orange-500">
              ₹5,00,000 Cash!
            </span>
          </h1>
          
          <p className="text-lg text-slate-300 md:text-xl font-medium max-w-xl mx-auto mb-8">
            The biggest Knowledge Championship for Class 6th to 12th. Study smarter, compete, and win big.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        
        
        <div className="bg-white rounded-4xl shadow-2xl shadow-blue-900/10 border-4 border-blue-50 overflow-hidden mb-16">
          <div className="bg-blue-600 p-6 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-black tracking-wide">How to get your Entry Ticket?</h2>
            <p className="text-blue-100 mt-2 text-sm md:text-base">Follow these simple steps to confirm your participation</p>
          </div>
          
          <div className="p-6 md:p-10 space-y-8">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 shrink-0 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center font-black text-xl border-2 border-slate-200">1</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1" >Download the App</h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">Get the GradePlus App on your phone and create your free student account.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 shrink-0 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center font-black text-xl border-2 border-amber-200 shadow-[0_0_15px_rgba(245,158,11,0.3)]">2</div>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 w-full relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-amber-500 text-white text-[10px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-wider">Required</div>
                <h3 className="text-xl font-bold text-amber-900 mb-2">Unlock Your Premium Access</h3>
                <p className="text-amber-800 leading-relaxed text-sm md:text-base mb-4">
                  To participate, you must be an active premium student. Enroll in our 1-Year Course today!
                </p>
                <div className="flex flex-wrap gap-3 mb-3">
                  <span className="bg-white text-amber-700 font-bold px-3 py-1.5 rounded-lg border border-amber-200 text-sm shadow-sm">₹999 Plan</span>
                  <span className="bg-white text-amber-700 font-bold px-3 py-1.5 rounded-lg border border-amber-200 text-sm shadow-sm">₹1199 Plan</span>
                  <span className="bg-white text-amber-700 font-bold px-3 py-1.5 rounded-lg border border-amber-200 text-sm shadow-sm">₹1399 Plan</span>
                </div>
                <p className="text-xs text-amber-600/80 font-bold">*या ग्रेड प्लस के अन्य किसी प्रोग्राम के लिए कम से कम ₹1000 का भुगतान किया हो।</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Your Journey to ₹5 Lakhs</h2>
          
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-linear-to-b before:from-blue-200 before:via-amber-200 before:to-amber-500">
            
            <div className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-blue-500 text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">1</div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-5 rounded-2xl bg-white border border-slate-200 shadow-sm ml-4 md:ml-0">
                <h3 className="font-bold text-blue-600 text-sm uppercase tracking-wider mb-1">प्रथम चरण</h3>
                <h4 className="font-black text-xl text-slate-800 mb-2">School Level</h4>
                <p className="text-slate-500 text-xs mb-4">ऑनलाइन परीक्षा (रजिस्टर्ड मोबाइल के माध्यम से)। प्रत्येक कक्षा में प्रथम तीन स्थान प्राप्त करने वाले विद्यार्थियों को नकद पुरस्कार:</p>
                <div className="space-y-2 text-sm font-bold">
                  <div className="flex justify-between bg-slate-50 p-2 rounded border border-slate-100">
                    <span className="text-slate-600">प्रथम (1st)</span><span className="text-blue-700">₹2,000</span>
                  </div>
                  <div className="flex justify-between bg-slate-50 p-2 rounded border border-slate-100">
                    <span className="text-slate-600">द्वितीय (2nd)</span><span className="text-slate-900">₹1,000</span>
                  </div>
                  <div className="flex justify-between bg-slate-50 p-2 rounded border border-slate-100">
                    <span className="text-slate-600">तृतीय (3rd)</span><span className="text-slate-900">₹500</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-indigo-500 text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">2</div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-5 rounded-2xl bg-white border border-slate-200 shadow-sm ml-4 md:ml-0">
                <h3 className="font-bold text-indigo-600 text-sm uppercase tracking-wider mb-1">द्वितीय चरण</h3>
                <h4 className="font-black text-xl text-slate-800 mb-2">District Level</h4>
                <p className="text-slate-500 text-xs mb-4">ऑनलाइन परीक्षा। प्रत्येक स्कूल से अपनी-अपनी कक्षाओं में टॉप 3 (कुल 21) विद्यार्थी। परीक्षा जिला मुख्यालय पर (यात्रा व्यय स्वयं वहन करना होगा)।</p>
                <div className="space-y-2 text-sm font-bold">
                  <div className="flex justify-between bg-slate-50 p-2 rounded border border-slate-100">
                    <span className="text-slate-600">प्रथम (1st)</span><span className="text-indigo-700">₹50,000</span>
                  </div>
                  <div className="flex justify-between bg-slate-50 p-2 rounded border border-slate-100">
                    <span className="text-slate-600">द्वितीय (2nd)</span><span className="text-slate-900">₹25,000</span>
                  </div>
                  <div className="flex justify-between bg-slate-50 p-2 rounded border border-slate-100">
                    <span className="text-slate-600">तृतीय (3rd)</span><span className="text-slate-900">₹12,500</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-amber-500 text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">3</div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-5 rounded-2xl bg-white border border-slate-200 shadow-sm ml-4 md:ml-0">
                <h3 className="font-bold text-amber-600 text-sm uppercase tracking-wider mb-1">तृतीय चरण</h3>
                <h4 className="font-black text-xl text-slate-800 mb-2">State Level</h4>
                <p className="text-slate-500 text-xs mb-4">OMR आधारित परीक्षा मंडल स्तर पर। जिला स्तर के टॉप 3 विद्यार्थी भाग लेंगे। हर क्लास का बच्चा लखपति बनेगा!</p>
                <div className="space-y-2 text-sm font-bold">
                  <div className="flex justify-between bg-slate-50 p-2 rounded border border-slate-100">
                    <span className="text-slate-600">प्रथम (1st)</span><span className="text-amber-600">₹1,00,000</span>
                  </div>
                  <div className="flex justify-between bg-slate-50 p-2 rounded border border-slate-100">
                    <span className="text-slate-600">द्वितीय (2nd)</span><span className="text-slate-900">₹50,000</span>
                  </div>
                  <div className="flex justify-between bg-slate-50 p-2 rounded border border-slate-100">
                    <span className="text-slate-600">तृतीय (3rd)</span><span className="text-slate-900">₹25,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-white bg-linear-to-r from-orange-500 to-amber-500 text-white font-bold shadow-lg shadow-amber-500/40 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Trophy className="w-8 h-8" />
              </div>
              <div className="w-[calc(100%-5rem)] md:w-[calc(50%-3.5rem)] p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl ml-4 md:ml-0 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 blur-[50px] pointer-events-none"></div>
                <h3 className="font-bold text-amber-400 text-sm uppercase tracking-wider mb-1 relative z-10">अंतिम मेगा राउंड</h3>
                <h4 className="font-black text-2xl text-white mb-2 relative z-10">Online Live Quiz</h4>
                <p className="text-slate-400 text-xs mb-4 relative z-10">
                  राजधानी लखनऊ में आयोजित। तीसरे राउंड के बाद प्रत्येक कक्षा से 15 विद्यार्थियों का चयन किया जाएगा।
                </p>
                <div className="bg-linear-to-r from-amber-500 to-orange-600 p-4 rounded-xl flex justify-between items-center relative z-10">
                  <span className="text-sm font-bold text-white/90">प्रथम (1st Prize)</span>
                  <span className="font-black text-white text-2xl">₹5,00,000</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-black text-slate-900 mb-6 text-center flex justify-center items-center gap-3">
            <BookOpen className="w-8 h-8 text-blue-600" /> परीक्षा पैटर्न
          </h2>
          <div className="bg-white rounded-4xl p-6 md:p-8 shadow-sm border border-slate-200">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg font-bold text-sm">कुल प्रश्न: 100</span>
              <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg font-bold text-sm">अवधि: 120 Minutes</span>
              <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg font-bold text-sm">प्रकार: MCQ</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Class 6-8 */}
              <div className="border border-slate-200 rounded-2xl overflow-hidden">
                <div className="bg-slate-50 border-b border-slate-200 p-4 text-center">
                  <h3 className="font-black text-slate-800">Class 6th – 8th</h3>
                </div>
                <ul className="text-sm text-slate-600 font-medium divide-y divide-slate-100">
                  <li className="flex justify-between p-3 px-5"><span>Mathematics</span> <b>10</b></li>
                  <li className="flex justify-between p-3 px-5"><span>Science</span> <b>10</b></li>
                  <li className="flex justify-between p-3 px-5"><span>Hindi</span> <b>10</b></li>
                  <li className="flex justify-between p-3 px-5"><span>English</span> <b>10</b></li>
                  <li className="flex justify-between p-3 px-5"><span>General Knowledge</span> <b>40</b></li>
                  <li className="flex justify-between p-3 px-5"><span>Aptitude & Reasoning</span> <b>20</b></li>
                </ul>
              </div>

              {/* Class 9-10 */}
              <div className="border border-slate-200 rounded-2xl overflow-hidden">
                <div className="bg-blue-50 border-b border-blue-100 p-4 text-center">
                  <h3 className="font-black text-blue-900">Class 9th – 10th</h3>
                </div>
                <ul className="text-sm text-slate-600 font-medium divide-y divide-slate-100">
                  <li className="flex justify-between p-3 px-5"><span>Mathematics</span> <b>10</b></li>
                  <li className="flex justify-between p-3 px-5"><span>Science</span> <b>10</b></li>
                  <li className="flex justify-between p-3 px-5"><span>Hindi</span> <b>10</b></li>
                  <li className="flex justify-between p-3 px-5"><span>English</span> <b>10</b></li>
                  <li className="flex justify-between p-3 px-5"><span>General Knowledge</span> <b>30</b></li>
                  <li className="flex justify-between p-3 px-5"><span>Computer</span> <b>10</b></li>
                  <li className="flex justify-between p-3 px-5"><span>Aptitude & Reasoning</span> <b>20</b></li>
                </ul>
              </div>

              {/* Class 11-12 */}
              <div className="border border-slate-200 rounded-2xl overflow-hidden">
                <div className="bg-indigo-50 border-b border-indigo-100 p-4 text-center">
                  <h3 className="font-black text-indigo-900">Class 11th – 12th</h3>
                </div>
                <ul className="text-sm text-slate-600 font-medium divide-y divide-slate-100">
                  <li className="flex justify-between p-3 px-5"><span>Physics</span> <b>10</b></li>
                  <li className="flex justify-between p-3 px-5"><span>Chemistry</span> <b>10</b></li>
                  <li className="flex justify-between p-3 px-5"><span>Mathematics</span> <b>10</b></li>
                  <li className="flex justify-between p-3 px-5"><span>Biology</span> <b>10</b></li>
                  <li className="flex justify-between p-3 px-5"><span>Hindi</span> <b>10</b></li>
                  <li className="flex justify-between p-3 px-5"><span>English</span> <b>10</b></li>
                  <li className="flex justify-between p-3 px-5"><span>General Knowledge</span> <b>30</b></li>
                  <li className="flex justify-between p-3 px-5"><span>Aptitude & Reasoning</span> <b>10</b></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        
        <div className="mb-12">
          <h2 className="text-2xl font-black text-slate-900 mb-6 flex justify-center items-center gap-2">
            <AlertCircle className="w-6 h-6 text-slate-700" /> नियम एवं शर्तें (Terms & Conditions)
          </h2>
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-200 space-y-6">
            
            <div className="flex gap-4">
              <div className="shrink-0"><GraduationCap className="w-6 h-6 text-blue-500" /></div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">1. पात्रता (Eligibility)</h4>
                <p className="text-slate-600 text-sm leading-relaxed">इस प्रतियोगिता में कक्षा 6 से 12 तक के वही विद्यार्थी भाग ले सकते हैं जिन्होंने फ्री में Great Plus App डाउनलोड करने के बाद 1 वर्ष का कोर्स ₹999 / ₹1199 / ₹1399 में खरीदा होगा या ग्रेड प्लस के अन्य किसी प्रोग्राम के लिए कम से कम ₹1000 का भुगतान किया होगा।</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0"><Building2 className="w-6 h-6 text-indigo-500" /></div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">2. स्कूल/कॉलेज में परीक्षा आयोजन की शर्त</h4>
                <p className="text-slate-600 text-sm leading-relaxed">Level-1 (School Level) की परीक्षा संबंधित स्कूल/कॉलेज में तभी आयोजित की जाएगी जब उस संस्थान से कम से कम 100 विद्यार्थी 1 वर्ष के Paid Course में एडमिशन ले चुके हों। यदि विद्यार्थियों की संख्या 100 से कम होगी तो उस स्कूल के विद्यार्थियों का परीक्षा केंद्र निकट के किसी अन्य निर्धारित स्कूल/कॉलेज में बनाया जाएगा।</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0"><Smartphone className="w-6 h-6 text-teal-500" /></div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">3. परीक्षा संचालन का माध्यम</h4>
                <p className="text-slate-600 text-sm leading-relaxed">पहला राउंड (School Level) और दूसरा राउंड (District Level) विद्यार्थियों के रजिस्टर्ड मोबाइल नंबर के माध्यम से ऑनलाइन आयोजित किए जाएंगे।</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0"><Banknote className="w-6 h-6 text-green-500" /></div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">4. पुरस्कार वितरण</h4>
                <p className="text-slate-600 text-sm leading-relaxed">कैश पुरस्कार जीतने वाले विद्यार्थियों की राशि सीधे उनके बैंक खाते में ट्रांसफर की जाएगी।</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0"><Clock className="w-6 h-6 text-amber-500" /></div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">5. टाई-ब्रेकिंग नियम</h4>
                <p className="text-slate-600 text-sm leading-relaxed">यदि दो या अधिक विद्यार्थियों के समान अंक आते हैं तो विजेता का निर्णय जन्म तिथि के आधार पर किया जाएगा। जिस विद्यार्थी की उम्र अधिक होगी, उसे विजेता घोषित किया जाएगा।</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0"><Scale className="w-6 h-6 text-rose-500" /></div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">6. आयोजक का अधिकार</h4>
                <p className="text-slate-600 text-sm leading-relaxed">प्रतियोगिता से संबंधित सभी अंतिम निर्णय IBLIB EDUCATIONS PVT. LTD. के होंगे। आवश्यकता पड़ने पर आयोजक नियम एवं शर्तों में संशोधन कर सकते हैं।</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0"><MapPin className="w-6 h-6 text-slate-500" /></div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">7. क्षेत्राधिकार (Jurisdiction Clause)</h4>
                <p className="text-slate-600 text-sm leading-relaxed">किसी भी प्रकार के विवाद की स्थिति में केवल लखनऊ, उत्तर प्रदेश के सक्षम न्यायालयों का क्षेत्राधिकार मान्य होगा।</p>
              </div>
            </div>

          </div>
        </div>

      </div>

      
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 p-4 md:hidden z-50 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
        <button className="w-full bg-blue-600 text-white font-black text-lg py-4 rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-transform" onClick={() => {window.open("https://play.google.com/store/apps/details?id=com.app.iblib")}}>
          <Download className="w-5 h-5" /> Download App to Enter
          
        </button>
      </div>

    </main>
  );
}