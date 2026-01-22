import React from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

const Incentives: React.FC = () => {
  return (
    <section id="incentives" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Government Subsidies & Policies</h2>
          
          <div className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-bold text-lg md:text-2xl shadow-lg mb-8 animate-in zoom-in duration-500">
            Residential Rooftop Solar System पर पाएं ₹78,000 तक की Subsidy
          </div>
          
          <p className="text-lg md:text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed font-medium">
            PM Surya Ghar Muft Bijli Yojna का लक्ष्य है 1 करोड़ घरों तक Solar Power पहुँचाना, 
            जो महीने के <span className="font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded">300 units तक Free बिजली</span> का लाभ देगा।
          </p>
        </div>

        {/* Subsidy Table */}
        <div className="overflow-x-auto rounded-xl shadow-xl border border-slate-200 mb-16">
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
              <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="p-4 md:p-6 font-semibold border-r border-slate-100">1kW On-grid solar system</td>
                <td className="p-4 md:p-6 border-r border-slate-100 font-medium">₹ 30,000</td>
                <td className="p-4 md:p-6 border-r border-slate-100 font-medium">₹ 15,000</td>
                <td className="p-4 md:p-6 font-extrabold text-green-700 text-lg">₹ 45,000</td>
              </tr>
              <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="p-4 md:p-6 font-semibold border-r border-slate-100">2kW On-grid Solar System</td>
                <td className="p-4 md:p-6 border-r border-slate-100 font-medium">₹ 60,000</td>
                <td className="p-4 md:p-6 border-r border-slate-100 font-medium">₹ 30,000</td>
                <td className="p-4 md:p-6 font-extrabold text-green-700 text-lg">₹ 90,000</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-4 md:p-6 font-semibold border-r border-slate-100">3kW or Above</td>
                <td className="p-4 md:p-6 border-r border-slate-100 font-medium">₹ 78,000</td>
                <td className="p-4 md:p-6 border-r border-slate-100 font-medium">₹ 30,000</td>
                <td className="p-4 md:p-6 font-extrabold text-green-700 text-lg">₹ 1,08,000</td>
              </tr>
            </tbody>
          </table>
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