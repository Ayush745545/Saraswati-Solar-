import React from 'react';
import { ShieldCheck, Star, Calculator, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenCalculator: () => void;
  onOpenBooking: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenCalculator, onOpenBooking }) => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="z-10 animate-in fade-in slide-in-from-bottom-8 duration-700 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold tracking-wider mb-6 border border-orange-200 uppercase">
              <ShieldCheck className="w-4 h-4" />
              AUTHORIZED PARTNER • TALHERI BUZURG
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              Switch to Solar with <span className="text-blue-600">Saraswati Solar</span> Power Solution
            </h1>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We are Saharanpur's authorized rooftop solar partner (MNRE approved).
              Save big on electricity bills with premium Adani Solar panels and PM Surya Ghar Yojana subsidies.
            </p>

            {/* Solar House Illustration - Centered above pricing cards */}
            <div className="flex justify-center items-end mb-6">
              <div className="relative flex flex-col items-center w-full max-w-xs">
                <img
                  src="/img/ChatGPT Image Jan 18, 2026, 11_24_25 AM.png"
                  alt="Solar house and person illustration"
                  className="w-full h-auto object-contain"
                  style={{ maxHeight: '180px', minWidth: '120px' }}
                />
                {/* Soft shadow under house base */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 bottom-0 w-3/4 h-5 rounded-full"
                  style={{
                    background: 'radial-gradient(ellipse at center, rgba(30,58,138,0.10) 0%, rgba(30,58,138,0.04) 60%, transparent 100%)',
                    filter: 'blur(2.5px)',
                  }}
                />
              </div>
            </div>
            {/* Subsidy Table */}
            <div className="overflow-hidden rounded-xl border border-slate-200 shadow-lg bg-white mb-10 ring-1 ring-slate-100">
              <table className="w-full text-sm md:text-base">
                <thead>
                  <tr className="bg-[#1e3a8a] text-white">
                    <th className="py-4 px-4 text-left font-semibold">Capacity</th>
                    <th className="py-4 px-4 text-center font-semibold">Central Subsidy</th>
                    <th className="py-4 px-4 text-center font-semibold">State Subsidy</th>
                    <th className="py-4 px-4 text-center font-semibold">Total Subsidy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 font-medium text-slate-900">1 kW</td>
                    <td className="py-4 px-4 text-center text-slate-600">₹30,000</td>
                    <td className="py-4 px-4 text-center text-slate-600">₹15,000</td>
                    <td className="py-4 px-4 text-center font-bold text-blue-700">₹45,000</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 font-medium text-slate-900">2 kW</td>
                    <td className="py-4 px-4 text-center text-slate-600">₹60,000</td>
                    <td className="py-4 px-4 text-center text-slate-600">₹30,000</td>
                    <td className="py-4 px-4 text-center font-bold text-blue-700">₹90,000</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 font-medium text-slate-900">3 kW</td>
                    <td className="py-4 px-4 text-center text-slate-600">₹78,000</td>
                    <td className="py-4 px-4 text-center text-slate-600">₹30,000</td>
                    <td className="py-4 px-4 text-center font-bold text-blue-700">₹1,08,000</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 font-medium text-slate-900">Above 3kW</td>
                    <td className="py-4 px-4 text-center text-slate-600">₹78,000</td>
                    <td className="py-4 px-4 text-center text-slate-600">₹30,000</td>
                    <td className="py-4 px-4 text-center font-bold text-blue-700">₹1,08,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOpenCalculator}
                className="flex items-center justify-center gap-2 bg-[#f97316] hover:bg-orange-600 text-white text-lg font-bold py-4 px-8 rounded-lg shadow-lg shadow-orange-500/30 transition-all transform hover:-translate-y-1"
              >
                <Calculator className="w-5 h-5" />
                Calculate Savings
              </button>
              <a
                href="#services"
                className="flex items-center justify-center gap-2 bg-white border-2 border-slate-200 hover:border-blue-900 text-slate-700 hover:text-blue-900 text-lg font-bold py-4 px-8 rounded-lg transition-all"
              >
                View Solutions
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Image Content */}
          <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-200 order-1 lg:order-2">
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-900/5 aspect-[4/3] group">
              <img
                src="/img/hero-family-solar.jpg"
                alt="Happy Indian Family with 3kW Solar System in Saharanpur"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>

              {/* Floating Badge on Image */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-white/50 animate-bounce-slow">
                <p className="text-2xl font-black text-blue-900 text-center leading-none mb-1">20,000+</p>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center">परिवारों का भरोसा</p>
              </div>
            </div>

            {/* Bottom Trust Indicators */}
            <div className="flex flex-col sm:flex-row gap-6 mt-8 justify-center lg:justify-start">
              {/* Trust Box 1 */}
              <div className="bg-white p-5 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 flex items-center gap-4 flex-1 transform hover:-translate-y-1 transition-transform">
                <div className="bg-orange-50 p-3 rounded-full">
                  <ShieldCheck className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Trusted by</p>
                  <p className="text-lg font-bold text-slate-900 leading-tight">20,000+ <br /><span className="text-sm font-medium text-slate-500">Happy Families</span></p>
                </div>
              </div>

              {/* Trust Box 2 */}
              <div className="bg-white p-5 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 flex items-center gap-4 flex-1 transform hover:-translate-y-1 transition-transform">
                <div className="bg-white p-1 rounded-full border border-slate-100 w-12 h-12 flex items-center justify-center relative overflow-hidden">
                  {/* Google G logo simulation */}
                  <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                </div>
                <div>
                  <div className="flex gap-0.5 mb-1">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />)}
                  </div>
                  <p className="text-sm font-bold text-slate-700">Rated 4.7 on Google</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;