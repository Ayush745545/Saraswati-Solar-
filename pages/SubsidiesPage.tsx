import React from 'react';
import { Landmark, CheckCircle2, Zap, ArrowRight, ShieldCheck, Calculator, Info, Award, TrendingUp } from 'lucide-react';

interface SubsidiesPageProps {
  onOpenCalculator: () => void;
}

const SubsidiesPage: React.FC<SubsidiesPageProps> = ({ onOpenCalculator }) => {
  const topUpStates = [
    { name: "Uttar Pradesh", max: "₹30k", rate: "₹15k/kW", desc: "UPNEDA: ₹15,000/kW up to max ₹30,000" },
    { name: "Haryana", max: "₹50k", rate: "₹25k/kW", desc: "Income Based: Up to ₹50,000 for income < ₹1.8L. Others ₹20,000 max." },
    { name: "Assam", max: "₹45k", rate: "₹15k/kW", desc: "Assam Solar Policy: ₹15,000/kW up to max ₹45,000 (Special Category)" },
    { name: "Rajasthan", max: "₹30k", rate: "₹10k/kW", desc: "District-wise Top-up Schemes up to ₹30,000." },
    { name: "Delhi", max: "₹30k", rate: "₹10k/kW", desc: "Capital Subsidy ₹10k/kW + GBI of ₹2-3/unit for 5 years." },
    { name: "Madhya Pradesh", max: "₹20k", rate: "State Subsidy", desc: "State Subsidy ~₹15,000 - ₹20,000 available." },
  ];

  const centralOnlyStates = [
    "Bihar", "Chandigarh", "Chhattisgarh", "Dadra & Nagar Haveli", "Daman & Diu", "Goa", "Gujarat", 
    "Jammu & Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Odisha", "Pondicherry", 
    "Punjab", "Tamil Nadu", "Uttarakhand", "West Bengal", "Maharashtra", "Andaman and Nicobar Islands", 
    "Andhra Pradesh"
  ];

  const specialCategoryStates = [
    "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Sikkim", "Tripura", "Arunachal Pradesh", "Himachal Pradesh"
  ];

  return (
    <section className="pt-32 pb-24 bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light text-brand text-xs font-bold tracking-wider mb-8 uppercase">
             <Landmark className="w-4 h-4" /> Comprehensive National Guide
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight">
            Solar Subsidies <br />& <span className="text-brand">Incentives</span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed font-medium mb-12">
            Complete guide to subsidies across all 35 states and UTs in India. Updated for PM Surya Ghar Phase 2.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
             <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-sm font-bold text-slate-700">PM Surya Ghar: Up to ₹78k</span>
             </div>
             <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-sm font-bold text-slate-700">9 Special States: Up to ₹85.8k</span>
             </div>
             <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-sm font-bold text-slate-700">6 States with Top-ups</span>
             </div>
          </div>
        </div>

        {/* Central Govt Section */}
        <div className="mb-32">
           <div className="flex flex-col md:flex-row items-baseline gap-4 mb-12 border-b border-slate-100 pb-8">
              <h2 className="text-3xl font-bold text-slate-900">Central Government Subsidies</h2>
              <span className="text-brand font-bold uppercase tracking-widest text-xs">PM Surya Ghar: Muft Bijli Yojana</span>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* General Category Card */}
              <div className="bg-white rounded-[3rem] p-10 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-slate-50">
                 <div className="flex items-center gap-4 mb-10">
                    <div className="p-3 bg-brand-light rounded-2xl">
                       <Zap className="w-6 h-6 text-brand" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">General Category States</h3>
                 </div>

                 <div className="space-y-10">
                    <div className="flex items-start gap-6">
                       <div className="flex-shrink-0 w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center font-bold text-slate-400">0-2</div>
                       <div>
                          <p className="text-xl font-bold text-slate-900 mb-1">₹30k/kW</p>
                          <p className="text-slate-500 font-medium">₹30,000 per kW for first 2 kW capacity</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-6">
                       <div className="flex-shrink-0 w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center font-bold text-slate-400">2-3</div>
                       <div>
                          <p className="text-xl font-bold text-slate-900 mb-1">₹18k/kW</p>
                          <p className="text-slate-500 font-medium">₹18,000 per kW for capacity between 2-3 kW</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-6 pt-6 border-t border-slate-50">
                       <div className="flex-shrink-0 w-12 h-12 bg-brand text-white rounded-xl flex items-center justify-center font-bold">3+</div>
                       <div>
                          <p className="text-xl font-bold text-brand mb-1">₹78,000 Max</p>
                          <p className="text-slate-500 font-medium">Maximum subsidy capped at ₹78,000 for 3 kW and above</p>
                       </div>
                    </div>
                 </div>

                 <div className="mt-12 grid grid-cols-3 gap-4">
                    <div className="text-center p-3 rounded-2xl bg-slate-50">
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Modules</p>
                       <p className="text-xs font-bold text-slate-700">DCR Mandatory</p>
                    </div>
                    <div className="text-center p-3 rounded-2xl bg-slate-50">
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">System</p>
                       <p className="text-xs font-bold text-slate-700">Net Metering</p>
                    </div>
                    <div className="text-center p-3 rounded-2xl bg-slate-50">
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Process</p>
                       <p className="text-xs font-bold text-slate-700">Direct Xfer</p>
                    </div>
                 </div>
              </div>

              {/* Special Category Card */}
              <div className="bg-slate-900 rounded-[3rem] p-10 md:p-14 text-white shadow-[0_30px_70px_rgba(15,23,42,0.15)]">
                 <div className="flex items-center gap-4 mb-10">
                    <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md">
                       <Award className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">Special Category States</h3>
                 </div>

                 <div className="space-y-10">
                    <div className="flex items-start gap-6">
                       <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center font-bold text-white/40">0-2</div>
                       <div>
                          <p className="text-xl font-bold text-white mb-1">₹33k/kW</p>
                          <p className="text-white/50 font-medium">₹33,000 per kW for first 2 kW capacity (Special Category)</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-6">
                       <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center font-bold text-white/40">2-3</div>
                       <div>
                          <p className="text-xl font-bold text-white mb-1">₹19.8k/kW</p>
                          <p className="text-white/50 font-medium">₹19,800 per kW for capacity between 2-3 kW (Special Category)</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-6 pt-6 border-t border-white/5">
                       <div className="flex-shrink-0 w-12 h-12 bg-brand text-white rounded-xl flex items-center justify-center font-bold">3+</div>
                       <div>
                          <p className="text-xl font-bold text-brand mb-1">₹85,800 Max</p>
                          <p className="text-white/50 font-medium">Maximum subsidy capped at ₹85,800 for 3 kW and above (Special Category)</p>
                       </div>
                    </div>
                 </div>

                 <div className="mt-12 p-6 bg-white/5 rounded-[2rem] border border-white/10">
                    <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-4">Eligible States/UTs</p>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs font-bold text-white/70">
                       <p>• NER (8 States)</p>
                       <p>• Uttarakhand</p>
                       <p>• Himachal Pradesh</p>
                       <p>• J&K / Ladakh</p>
                       <p>• A&N / Lakshadweep</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Commercial Section */}
        <div className="mb-32">
           <div className="flex items-center gap-4 mb-12 border-b border-slate-100 pb-8">
              <h2 className="text-3xl font-bold text-slate-900">Commercial & Industrial Tax Benefits</h2>
              <div className="bg-slate-100 px-3 py-1 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-widest">Accelerated Depreciation</div>
           </div>

           <div className="bg-white rounded-[4rem] p-10 md:p-20 shadow-[0_40px_100px_rgba(0,0,0,0.04)] border border-slate-50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2"></div>
              
              <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
                 <div className="lg:w-1/2">
                    <h3 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">No direct subsidy, but <span className="text-brand">massive</span> tax savings.</h3>
                    <div className="space-y-8">
                       <div className="flex gap-6">
                          <div className="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center font-black text-2xl text-brand">40%</div>
                          <div>
                             <p className="font-bold text-slate-900 text-xl">Standard Depreciation</p>
                             <p className="text-slate-500">First year write-off on solar assets for existing businesses.</p>
                          </div>
                       </div>
                       <div className="flex gap-6">
                          <div className="w-16 h-16 bg-brand rounded-2xl flex items-center justify-center font-black text-2xl text-white">60%</div>
                          <div>
                             <p className="font-bold text-slate-900 text-xl">With Additional Depreciation</p>
                             <p className="text-slate-500">Available for new manufacturing plants and machinery upgrades.</p>
                          </div>
                       </div>
                    </div>
                 </div>

                 <div className="lg:w-1/2 w-full">
                    <div className="bg-slate-900 p-10 rounded-[3rem] text-white shadow-2xl">
                       <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-8">Example Calculation</p>
                       <div className="space-y-6">
                          <div className="flex justify-between items-baseline">
                             <span className="text-white/60">Project Cost</span>
                             <span className="text-2xl font-bold">₹10 Lakh</span>
                          </div>
                          <div className="flex justify-between items-baseline">
                             <span className="text-white/60">Depreciation (60%)</span>
                             <span className="text-2xl font-bold text-brand">₹6.0 Lakh</span>
                          </div>
                          <div className="flex justify-between items-baseline pb-6 border-b border-white/10">
                             <span className="text-white/60">Tax Rate</span>
                             <span className="text-2xl font-bold">29%</span>
                          </div>
                          <div className="flex justify-between items-center pt-4">
                             <span className="text-lg font-bold">Year 1 Tax Saving</span>
                             <span className="text-3xl font-black text-green-400">₹1.74 Lakh</span>
                          </div>
                       </div>
                       <div className="mt-8 flex items-center gap-2 text-[10px] text-white/30 italic">
                          <Info className="w-3 h-3" />
                          <span>Final benefit depends on your company's tax bracket.</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Top-up States Section */}
        <div className="mb-32">
           <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Additional Top-up Subsidies</h2>
              <p className="text-lg text-slate-500 font-medium">These 6 states offer extra state-funded benefits on top of the central PM Surya Ghar subsidy.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {topUpStates.map((state) => (
                 <div key={state.name} className="bg-white p-10 rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.03)] border border-slate-50 relative overflow-hidden group hover:border-brand transition-all duration-500">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-brand-light rounded-bl-[4rem] flex items-center justify-center translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500">
                       <TrendingUp className="w-6 h-6 text-brand" />
                    </div>
                    <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-2">State Top-up</p>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">{state.name}</h3>
                    <div className="flex items-center gap-6 mb-8">
                       <span className="text-3xl font-black text-brand">{state.max}</span>
                       <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{state.rate}</span>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">{state.desc}</p>
                 </div>
              ))}
           </div>
        </div>

        {/* National Directory Section */}
        <div className="mb-32">
           <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">National Subsidy Directory</h2>
              <p className="text-lg text-slate-500 font-medium">PM Surya Ghar benefits apply across all 35 States and Union Territories.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {centralOnlyStates.map(state => (
                 <div key={state} className="bg-white p-5 rounded-2xl border border-slate-50 flex items-center justify-between hover:border-brand/30 transition-colors group">
                    <span className="font-bold text-slate-700 text-sm">{state}</span>
                    <span className="text-[10px] font-black text-brand uppercase tracking-tighter bg-brand-light px-2 py-1 rounded-lg group-hover:bg-brand group-hover:text-white transition-colors">₹78k Max</span>
                 </div>
              ))}
              {specialCategoryStates.map(state => (
                 <div key={state} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 flex items-center justify-between hover:border-brand/30 transition-colors group">
                    <span className="font-bold text-white text-sm">{state}</span>
                    <span className="text-[10px] font-black text-brand uppercase tracking-tighter bg-white/10 px-2 py-1 rounded-lg group-hover:bg-brand group-hover:text-white transition-colors">₹85.8k Max</span>
                 </div>
              ))}
           </div>
        </div>

        {/* Final CTA Section */}
        <div className="animate-in fade-in slide-in-from-top-4 duration-700 delay-300">
           <div className="bg-brand rounded-[4rem] p-10 md:p-20 text-white text-center shadow-[0_40px_100px_rgba(45,102,246,0.25)] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand via-brand to-blue-800"></div>
              <ShieldCheck className="absolute top-10 right-10 w-40 h-40 text-white/5 -rotate-12" />
              
              <div className="relative z-10 max-w-3xl mx-auto">
                 <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Calculate Your Exact Subsidy</h2>
                 <p className="text-xl text-white/80 font-medium mb-12">
                   Use our interactive calculator to get a precise breakdown of central + state benefits for your specific location and system size.
                 </p>
                 <button 
                  onClick={onOpenCalculator}
                  className="bg-white text-brand px-12 py-5 rounded-[2rem] font-black text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3 mx-auto"
                 >
                    <Calculator className="w-6 h-6" />
                    Open Calculator
                    <ArrowRight className="w-5 h-5 ml-2" />
                 </button>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default SubsidiesPage;
