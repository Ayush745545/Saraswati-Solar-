import React from 'react';
import { Award, Users, ThumbsUp, Shield, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold tracking-wider mb-6 uppercase">
              <Shield className="w-4 h-4" /> Trusted Solar EPC
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              About <span className="text-blue-600">Saraswati Solar</span> Power Solution
            </h2>
            
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed mb-10">
              <p>
                We are a leading rooftop solar EPC company serving Uttar Pradesh, rooted firmly in <strong>Talheri Buzurg, Saharanpur</strong>. 
                As an authorized MNRE and Adani Solar partner, we specialize in high-performance solar installations that empower homeowners and small businesses to switch to clean energy effortlessly.
              </p>
              <p>
                At Saraswati Solar, we believe in <strong>uncompromising quality and total transparency</strong>. We use only premium Tier-1 components like Adani modules and Havells cabling to ensure your system performs flawlessly for over 25 years. From initial site survey to structural installation, net-metering with UPPCL, and final subsidy paperwork—our expert team handles everything end-to-end.
              </p>
            </div>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Local Experts</h3>
                  <p className="text-sm text-slate-500">Dedicated Saharanpur District team.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Authorized EPC</h3>
                  <p className="text-sm text-slate-500">PM Surya Ghar Yojana Approved.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <ThumbsUp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Quality Promise</h3>
                  <p className="text-sm text-slate-500">100% Transparent Pricing & Parts.</p>
                </div>
              </div>
            </div>

            <a href="#contact" className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-blue-900/25">
              Talk to our Experts
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Right: Images & Stats Stack */}
          <div className="relative">
            {/* Decorative background shape */}
            <div className="absolute inset-0 bg-blue-50 rounded-[3rem] transform rotate-3 scale-105 origin-bottom-right"></div>
            
            <div className="relative z-10 grid grid-cols-2 gap-4">
              {/* Image 1: Main Installation */}
              <div className="col-span-2 rounded-3xl overflow-hidden shadow-xl h-64 border-4 border-white">
                <img 
                  src="/img/hero-solar-installation.jpg" 
                  alt="Saraswati Solar expert team installing premium Adani panels in Saharanpur district" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* Stat Box 1 */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-6 text-white shadow-xl flex flex-col justify-center border-4 border-white">
                <div className="text-4xl font-black mb-1">20k+</div>
                <div className="text-blue-200 text-xs font-bold uppercase tracking-wider">Happy Families</div>
              </div>

              {/* Image 2 / Stat Box 2 */}
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-6 text-white shadow-xl flex flex-col justify-center border-4 border-white">
                <div className="text-4xl font-black mb-1">25<span className="text-2xl text-orange-200">yrs</span></div>
                <div className="text-orange-100 text-xs font-bold uppercase tracking-wider">Performance Warranty</div>
              </div>
            </div>

            {/* Floating 'Adani Authorized' Badge */}
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 bg-white rounded-2xl p-4 shadow-2xl border border-slate-100 z-20 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 leading-none mb-1 uppercase">Certified</div>
                  <div className="font-black text-slate-800 text-sm leading-tight">Adani Solar<br/>Partner</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;