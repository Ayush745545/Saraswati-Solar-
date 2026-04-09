import React from 'react';
import { CheckCircle2, AlertCircle, Zap } from 'lucide-react';

const Incentives: React.FC = () => {
  const subsidyData = [
    { size: "1kW On-grid solar system", central: "₹ 30,000", state: "₹ 15,000", total: "₹ 45,000" },
    { size: "2kW On-grid Solar System", central: "₹ 60,000", state: "₹ 30,000", total: "₹ 90,000" },
    { size: "3kW or Above", central: "₹ 78,000", state: "₹ 30,000", total: "₹ 1,08,000" },
  ];

  return (
    <section id="incentives" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Government Subsidies & Policies</h2>
          
          {/* Subsidy Urgency Badge */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full font-bold text-sm md:text-base shadow-lg shadow-green-600/20 mb-6 animate-in zoom-in duration-500">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse"></div>
              <span className="uppercase tracking-wider text-xs font-black">LIVE</span>
            </div>
            <div className="w-px h-5 bg-white/30"></div>
            <span>PM Surya Ghar Yojana Phase 2 Active — Apply now for <strong>₹1,08,000</strong> total benefit</span>
          </div>

          <div className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-bold text-lg md:text-2xl shadow-lg mb-8 animate-in zoom-in duration-500">
            Residential Rooftop Solar System पर पाएं ₹78,000 तक की Subsidy
          </div>
          
          <p className="text-lg md:text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed font-medium">
            PM Surya Ghar Muft Bijli Yojna का लक्ष्य है 1 करोड़ घरों तक Solar Power पहुँचाना, 
            जो महीने के <span className="font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded">300 units तक Free बिजली</span> का लाभ देगा।
          </p>
        </div>

        {/* Subsidy Table — Desktop */}
        <div className="hidden md:block overflow-x-auto rounded-xl shadow-xl border border-slate-200 mb-16">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-gradient-to-r from-red-600 to-red-700 text-white">
                <th className="p-4 md:p-6 font-bold border-r border-red-500 text-sm md:text-lg w-1/4">Project Size</th>
                <th className="p-4 md:p-6 font-bold border-r border-red-500 text-sm md:text-lg w-1/4">Central Subsidy</th>
                <th className="p-4 md:p-6 font-bold border-r border-red-500 text-sm md:text-lg w-1/4">UP State Subsidy*</th>
                <th className="p-4 md:p-6 font-bold text-sm md:text-lg w-1/4">Max Benefit</th>
              </tr>
            </thead>
            <tbody className="bg-white text-slate-800">
              {subsidyData.map((row, index) => (
                <tr key={index} className={`${index < subsidyData.length - 1 ? 'border-b border-slate-100' : ''} hover:bg-slate-50 transition-colors`}>
                  <td className="p-4 md:p-6 font-semibold border-r border-slate-100">{row.size}</td>
                  <td className="p-4 md:p-6 border-r border-slate-100 font-medium">{row.central}</td>
                  <td className="p-4 md:p-6 border-r border-slate-100 font-medium">{row.state}</td>
                  <td className="p-4 md:p-6 font-extrabold text-green-700 text-lg">{row.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Subsidy Cards — Mobile */}
        <div className="md:hidden space-y-4 mb-16">
          {subsidyData.map((row, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
              {/* Card Header */}
              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-5 py-4 flex items-center justify-between">
                <h3 className="font-bold text-lg">{row.size}</h3>
                <Zap className="w-5 h-5 text-orange-300" />
              </div>
              {/* Card Body */}
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500 text-sm font-medium">Central Subsidy</span>
                  <span className="text-slate-900 font-bold">{row.central}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500 text-sm font-medium">UP State Subsidy*</span>
                  <span className="text-slate-900 font-bold">{row.state}</span>
                </div>
                <div className="flex items-center justify-between py-3 bg-green-50 -mx-5 px-5 rounded-b-xl">
                  <span className="text-green-800 text-sm font-bold uppercase tracking-wider">Max Benefit</span>
                  <span className="text-green-700 font-extrabold text-xl">{row.total}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Steps to Claim */}
          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 flex flex-col h-full shadow-md">
            <h3 className="text-2xl font-bold text-white mb-8 bg-blue-600 px-6 py-3 rounded-lg inline-block self-start shadow-md">
              3 Simple Steps to Claim Subsidy
            </h3>
            <ul className="space-y-8 flex-1">
              <li className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border-2 border-blue-600 text-blue-700 font-bold text-lg flex items-center justify-center shadow-sm">1</div>
                <div>
                  <p className="text-slate-800 font-semibold text-lg">Submit Application</p>
                  <p className="text-slate-600 text-sm mt-1">Submit your application online on the national portal of Rooftop Solar.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border-2 border-blue-600 text-blue-700 font-bold text-lg flex items-center justify-center shadow-sm">2</div>
                <div>
                  <p className="text-slate-800 font-semibold text-lg">Choose Vendor</p>
                  <p className="text-slate-600 text-sm mt-1">Choose a suitable vendor (Select <span className="font-bold text-blue-700">Saraswati Solar</span>).</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border-2 border-blue-600 text-blue-700 font-bold text-lg flex items-center justify-center shadow-sm">3</div>
                <div>
                  <p className="text-slate-800 font-semibold text-lg">Receive Subsidy</p>
                  <p className="text-slate-600 text-sm mt-1">Wait till you get the applicable subsidy amount directly in your bank account.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Terms & Conditions */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg flex flex-col h-full">
            <h3 className="text-2xl font-bold text-white mb-8 bg-blue-600 px-6 py-3 rounded-lg inline-block self-start shadow-md">
              Terms and Conditions
            </h3>
            <ul className="space-y-6 flex-1">
              <li className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium">Only <strong>residential rooftop solar panel</strong> systems are eligible.</span>
              </li>
              <li className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium">Only <strong>On-grid and Hybrid</strong> solar systems are eligible.</span>
              </li>
              <li className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium">No subsidy is applicable for systems larger than 10kW.</span>
              </li>
            </ul>
            
            <div className="mt-8 p-4 bg-orange-50 rounded-lg border border-orange-100 flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-orange-800 italic">
                   *UP State Subsidy is subject to availability of state funds and specific approval. Amounts listed are maximum potential benefits.
                </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Incentives;