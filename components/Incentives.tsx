import React from 'react';
import { CheckCircle2, Zap, ArrowRight, Landmark, ShieldCheck } from 'lucide-react';

const Incentives: React.FC = () => {
  const subsidyData = [
    { size: "1kW System", central: "₹30,000", state: "₹15,000", total: "₹45,000" },
    { size: "2kW System", central: "₹60,000", state: "₹30,000", total: "₹90,000" },
    { size: "3kW or Above", central: "₹78,000", state: "₹30,000", total: "₹1,08,000" },
  ];

  return (
    <section id="incentives" className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light text-brand text-xs font-bold tracking-wider mb-6 uppercase">
            <Landmark className="w-4 h-4" /> Subsidy Specialist
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Government <span className="text-brand">Subsidies</span> & Policies
          </h2>
          
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-2xl font-bold text-sm md:text-base shadow-lg shadow-green-600/10 mb-8">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
              <span className="uppercase tracking-widest text-[10px] font-black">Live</span>
            </div>
            <div className="w-px h-5 bg-white/30"></div>
            <span>PM Surya Ghar Phase 2: Get up to <strong className="text-white">₹1,08,000</strong> Benefit</span>
          </div>

          <p className="text-xl text-slate-500 leading-relaxed font-medium">
            PM Surya Ghar Muft Bijli Yojna का लक्ष्य है 1 करोड़ घरों तक Solar Power पहुँचाना, 
            जो महीने के <span className="text-brand font-bold underline decoration-brand/30 decoration-2 underline-offset-4">300 units तक Free बिजली</span> का लाभ देगा।
          </p>
        </div>

        {/* Subsidy Highlight Card */}
        <div className="bg-white rounded-[3rem] shadow-[0_30px_70px_rgba(0,0,0,0.04)] border border-slate-50 overflow-hidden mb-16">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="p-8 font-bold text-slate-400 uppercase tracking-widest text-[10px]">Project Size</th>
                  <th className="p-8 font-bold text-slate-400 uppercase tracking-widest text-[10px]">Central Subsidy</th>
                  <th className="p-8 font-bold text-slate-400 uppercase tracking-widest text-[10px]">UP State Subsidy</th>
                  <th className="p-8 font-bold text-brand uppercase tracking-widest text-[10px] text-right">Max Benefit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {subsidyData.map((row, index) => (
                  <tr key={index} className="group hover:bg-brand-light/20 transition-colors">
                    <td className="p-8 font-bold text-slate-900 text-lg">{row.size}</td>
                    <td className="p-8 font-semibold text-slate-600">{row.central}</td>
                    <td className="p-8 font-semibold text-slate-600">{row.state}</td>
                    <td className="p-8 text-right">
                       <span className="inline-block bg-brand text-white px-6 py-2 rounded-xl font-bold text-lg shadow-lg shadow-brand/10 group-hover:scale-105 transition-all">
                        {row.total}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Steps to Claim */}
          <div className="bg-white rounded-[2.5rem] p-10 border border-slate-50 shadow-sm flex flex-col h-full group">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <Zap className="w-6 h-6 text-brand" /> 3 Steps to Claim
            </h3>
            <ul className="space-y-6 flex-1">
              <li className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-light text-brand font-bold text-lg flex items-center justify-center border border-brand/5">1</div>
                <div>
                  <p className="text-slate-900 font-bold text-lg">Submit Application</p>
                  <p className="text-slate-500 text-sm mt-1">Submit your application online on the national portal of Rooftop Solar.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-light text-brand font-bold text-lg flex items-center justify-center border border-brand/5">2</div>
                <div>
                  <p className="text-slate-900 font-bold text-lg">Choose Vendor</p>
                  <p className="text-slate-500 text-sm mt-1">Select <span className="font-bold text-brand">Saraswati Solar</span> as your trusted installer.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-light text-brand font-bold text-lg flex items-center justify-center border border-brand/5">3</div>
                <div>
                  <p className="text-slate-900 font-bold text-lg">Receive Subsidy</p>
                  <p className="text-slate-500 text-sm mt-1">The subsidy amount is credited directly to your bank account after commissioning.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Guarantee Section */}
          <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white shadow-xl flex flex-col h-full relative overflow-hidden">
            <ShieldCheck className="absolute top-6 right-6 w-16 h-16 text-white/5 -rotate-12" />
            <h3 className="text-2xl font-bold mb-8">Eligibility & Terms</h3>
            <ul className="space-y-6 flex-1">
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-brand flex-shrink-0 mt-0.5" />
                <span className="text-white/80 font-medium leading-relaxed">Only <strong>residential rooftop solar</strong> systems are eligible for subsidy.</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-brand flex-shrink-0 mt-0.5" />
                <span className="text-white/80 font-medium leading-relaxed">Systems up to <strong>10kW</strong> are covered under the scheme.</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-brand flex-shrink-0 mt-0.5" />
                <span className="text-white/80 font-medium leading-relaxed">Direct benefit transfer ensures no middleman involvement.</span>
              </li>
            </ul>
            
            <button className="mt-10 flex items-center justify-center gap-2 bg-white text-slate-900 w-full py-4 rounded-2xl font-bold hover:bg-brand hover:text-white transition-all group">
              Learn More About Subsidies
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Incentives;