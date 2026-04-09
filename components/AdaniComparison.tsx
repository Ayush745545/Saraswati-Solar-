import React from 'react';
import { ShieldCheck, AlertTriangle, CheckCircle2, XCircle, Award } from 'lucide-react';

const AdaniComparison: React.FC = () => {
  const comparisonRows = [
    {
      feature: "Product Warranty",
      adani: "25-30 Years Performance Warranty",
      generic: "5-10 Years (often unenforceable)",
      adaniGood: true,
    },
    {
      feature: "Module Efficiency",
      adani: "20-22%+ (Mono PERC / TOPCon)",
      generic: "15-18% (Polycrystalline)",
      adaniGood: true,
    },
    {
      feature: "Annual Degradation",
      adani: "< 0.5% per year",
      generic: "0.8-1.2% per year",
      adaniGood: true,
    },
    {
      feature: "BIS / IEC Certified",
      adani: "Full BIS & IEC 61215/61730",
      generic: "Often uncertified or expired",
      adaniGood: true,
    },
    {
      feature: "After-Sales Support",
      adani: "Pan-India service network + local Saraswati Solar support",
      generic: "No service center, manufacturer unreachable",
      adaniGood: true,
    },
    {
      feature: "Subsidy Eligible",
      adani: "100% eligible under PM Surya Ghar",
      generic: "May not qualify for MNRE subsidy",
      adaniGood: true,
    },
    {
      feature: "Bank Financing",
      adani: "Approved by all major banks for solar loans",
      generic: "Banks hesitant to finance",
      adaniGood: true,
    },
  ];

  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-bold tracking-wider mb-4 uppercase">
            <Award className="w-3.5 h-3.5" /> Authorized Adani Partner
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Adani Solar? <span className="text-blue-600">The Smart Choice</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Not all solar panels are created equal. See how Adani Solar stacks up against cheap, unbranded alternatives.
          </p>
        </div>

        {/* Comparison Table - Desktop */}
        <div className="hidden md:block overflow-hidden rounded-2xl shadow-xl border border-slate-200 mb-8">
          <table className="w-full">
            <thead>
              <tr>
                <th className="bg-slate-100 text-slate-700 p-5 text-left font-bold text-sm uppercase tracking-wider w-1/4">Feature</th>
                <th className="bg-blue-900 text-white p-5 text-center font-bold text-sm uppercase tracking-wider w-[37.5%]">
                  <div className="flex items-center justify-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-orange-400" />
                    Adani Solar (via Saraswati Solar)
                  </div>
                </th>
                <th className="bg-slate-700 text-white p-5 text-center font-bold text-sm uppercase tracking-wider w-[37.5%]">
                  <div className="flex items-center justify-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-400" />
                    Generic / Unbranded Panels
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {comparisonRows.map((row, index) => (
                <tr key={index} className="hover:bg-slate-50 transition-colors">
                  <td className="p-5 font-semibold text-slate-900 bg-slate-50/50">{row.feature}</td>
                  <td className="p-5 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-slate-700 font-medium text-sm">{row.adani}</span>
                    </div>
                  </td>
                  <td className="p-5 text-center bg-red-50/30">
                    <div className="flex items-center justify-center gap-2">
                      <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <span className="text-slate-500 text-sm">{row.generic}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Comparison Cards - Mobile */}
        <div className="md:hidden space-y-4 mb-8">
          {comparisonRows.map((row, index) => (
            <div key={index} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-slate-100 px-5 py-3">
                <p className="font-bold text-slate-800 text-sm">{row.feature}</p>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex items-start gap-3 bg-green-50 p-3 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[10px] font-bold text-green-700 uppercase tracking-wider mb-0.5">Adani Solar</p>
                    <p className="text-sm text-slate-700 font-medium">{row.adani}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-red-50 p-3 rounded-lg">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[10px] font-bold text-red-500 uppercase tracking-wider mb-0.5">Generic Panels</p>
                    <p className="text-sm text-slate-500">{row.generic}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-6 py-3 rounded-xl">
            <ShieldCheck className="w-5 h-5 text-blue-600" />
            <p className="text-sm font-medium text-blue-800">
              Saraswati Solar is Saharanpur's <strong>authorized Adani Solar EPC partner</strong> — ensuring genuine products and full warranty coverage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdaniComparison;
