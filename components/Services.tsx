import React from 'react';
import { Zap, CheckCircle2, Factory, Calculator } from 'lucide-react';

interface ServicesProps {
  onOpenCalculator: () => void;
}

const Services: React.FC<ServicesProps> = ({ onOpenCalculator }) => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Premium Rooftop Solar</h2>
          <p className="text-lg text-slate-600">
             Authorized partners for PM Surya Ghar Yojana. We deliver high-efficiency On-Grid solar systems tailored for your roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Residential Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 transform hover:-translate-y-1 transition-transform duration-300 flex flex-col">
            <div className="bg-blue-900 p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-orange-500 w-24 h-24 rounded-full opacity-20 blur-xl"></div>
              <div className="flex justify-between items-start relative z-10">
                <div>
                  <h3 className="text-2xl font-bold">3 kW On-Grid System</h3>
                  <p className="text-blue-200 text-sm mt-1">Most Popular for Homes</p>
                </div>
                <Zap className="w-8 h-8 text-orange-400" />
              </div>
            </div>
            
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-baseline mb-2">
                <span className="text-4xl font-extrabold text-slate-900 tracking-tight">₹1,12,000</span>
                <span className="ml-2 text-sm text-slate-500 font-medium">approx.</span>
              </div>
              <p className="text-green-600 font-medium text-xs mb-6 bg-green-50 px-3 py-1 rounded-full inline-block self-start">
                *Price after ₹78,000 Govt Subsidy
              </p>

              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Complete Adani Solar Kit</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Net Metering Included</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Mobile App Monitoring</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Installation & Commissioning</span>
                </li>
              </ul>

              <div className="space-y-3 mt-auto">
                <a 
                  href="#contact"
                  className="block w-full text-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
                >
                  Book Now
                </a>
                <button
                  onClick={onOpenCalculator}
                  className="w-full flex items-center justify-center gap-2 bg-white border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 text-slate-700 font-bold py-3 px-4 rounded-lg transition-all"
                >
                  <Calculator className="w-4 h-4" />
                  Calculate Savings
                </button>
              </div>
            </div>
          </div>

          {/* Commercial Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 transform hover:-translate-y-1 transition-transform duration-300 flex flex-col">
            <div className="bg-slate-800 p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-blue-500 w-24 h-24 rounded-full opacity-20 blur-xl"></div>
              <div className="flex justify-between items-start relative z-10">
                <div>
                  <h3 className="text-2xl font-bold">10 kW Commercial</h3>
                  <p className="text-slate-300 text-sm mt-1">Schools, Offices & Factories</p>
                </div>
                <Factory className="w-8 h-8 text-blue-400" />
              </div>
            </div>
            
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-baseline mb-2">
                <span className="text-4xl font-extrabold text-slate-900 tracking-tight">Custom Quote</span>
              </div>
              <p className="text-blue-600 font-medium text-xs mb-6 bg-blue-50 px-3 py-1 rounded-full inline-block self-start">
                *Eligible for Commercial Tax Benefits
              </p>

              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-slate-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Generates ~1200 Units/month</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-slate-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">High Efficiency TOPCon Modules</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-slate-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Three Phase Inverter</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-slate-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">ROI in approx. 3-4 years</span>
                </li>
              </ul>

              <div className="space-y-3 mt-auto">
                <a 
                  href="#contact"
                  className="block w-full text-center bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-4 rounded-lg transition-colors"
                >
                  Request Site Survey
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-xs text-slate-400 mt-8 text-center italic">
          *Note: Final price varies by site conditions, structure height, and wire length.
        </p>
      </div>
    </section>
  );
};

export default Services;