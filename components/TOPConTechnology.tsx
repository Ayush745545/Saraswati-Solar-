import React from 'react';
import { Sun, Thermometer, Shield, Zap, TrendingUp, ChevronRight } from 'lucide-react';

const TOPConTechnology: React.FC = () => {
  const advantages = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Higher Efficiency",
      stat: "22%+",
      description: "TOPCon cells achieve over 22% module efficiency vs ~20% for standard Mono PERC, generating more power per square foot of roof space."
    },
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: "Heat Tolerant",
      stat: "-0.30%/°C",
      description: "Lower temperature coefficient means TOPCon panels lose less output in UP's scorching 45°C+ summers compared to conventional panels."
    },
    {
      icon: <Sun className="w-6 h-6" />,
      title: "Bi-facial Gain",
      stat: "Up to 10%",
      description: "Glass-glass design captures reflected light from the back, generating bonus energy from your white terrace or light-colored roof."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "30-Year Warranty",
      stat: "30 Yrs",
      description: "Adani TOPCon modules come with an industry-leading 30-year performance warranty with less than 0.4% annual degradation."
    },
  ];

  return (
    <section className="py-20 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-wider mb-4 uppercase">
            <Zap className="w-3.5 h-3.5" />
            Advanced Technology
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why TOPCon Bi-facial Panels Are <span className="text-blue-600">Ideal for UP</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Uttar Pradesh's hot, dusty climate demands solar panels that perform under extreme conditions. TOPCon (Tunnel Oxide Passivated Contact) technology is the latest evolution in solar cells — and we bring it to your rooftop through Adani Solar.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">

          {/* Left: Comparison Visual */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
              {/* Header */}
              <div className="bg-blue-900 text-white p-6">
                <h3 className="text-xl font-bold mb-1">Technology Comparison</h3>
                <p className="text-blue-200 text-sm">At 45°C Ambient Temperature (UP Summer)</p>
              </div>
              
              {/* Comparison Rows */}
              <div className="divide-y divide-slate-100">
                {/* Row 1 */}
                <div className="grid grid-cols-3 text-sm">
                  <div className="p-4 font-bold text-slate-500 bg-slate-50">Spec</div>
                  <div className="p-4 font-bold text-center text-slate-400 bg-slate-50">Mono PERC</div>
                  <div className="p-4 font-bold text-center text-blue-700 bg-blue-50">TOPCon ✦</div>
                </div>
                <div className="grid grid-cols-3 text-sm">
                  <div className="p-4 font-medium text-slate-700">Efficiency</div>
                  <div className="p-4 text-center text-slate-500">~20%</div>
                  <div className="p-4 text-center font-bold text-blue-700 bg-blue-50/50">22%+</div>
                </div>
                <div className="grid grid-cols-3 text-sm">
                  <div className="p-4 font-medium text-slate-700">Temp. Loss</div>
                  <div className="p-4 text-center text-slate-500">-0.35%/°C</div>
                  <div className="p-4 text-center font-bold text-blue-700 bg-blue-50/50">-0.30%/°C</div>
                </div>
                <div className="grid grid-cols-3 text-sm">
                  <div className="p-4 font-medium text-slate-700">Bi-facial</div>
                  <div className="p-4 text-center text-slate-400">No</div>
                  <div className="p-4 text-center font-bold text-green-600 bg-blue-50/50">Yes ✓</div>
                </div>
                <div className="grid grid-cols-3 text-sm">
                  <div className="p-4 font-medium text-slate-700">Warranty</div>
                  <div className="p-4 text-center text-slate-500">25 Yrs</div>
                  <div className="p-4 text-center font-bold text-blue-700 bg-blue-50/50">30 Yrs</div>
                </div>
                <div className="grid grid-cols-3 text-sm">
                  <div className="p-4 font-medium text-slate-700">Degradation</div>
                  <div className="p-4 text-center text-slate-500">0.55%/yr</div>
                  <div className="p-4 text-center font-bold text-blue-700 bg-blue-50/50">0.40%/yr</div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 bg-orange-50 border-t border-orange-100">
                <p className="text-xs text-orange-800 font-medium text-center">
                  ✦ TOPCon generates <strong>~8-12% more energy</strong> annually in hot UP climate
                </p>
              </div>
            </div>
          </div>

          {/* Right: Advantage Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {advantage.icon}
                  </div>
                  <div className="text-2xl font-black text-blue-900">{advantage.stat}</div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{advantage.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{advantage.description}</p>
              </div>
            ))}

            {/* CTA Card */}
            <div className="sm:col-span-2 bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
              <div>
                <h3 className="text-xl font-bold mb-1">Upgrade to TOPCon Today</h3>
                <p className="text-blue-200 text-sm">Get the latest technology at competitive prices with full subsidy support.</p>
              </div>
              <a
                href="#contact"
                className="whitespace-nowrap bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg hover:shadow-orange-500/20 transform hover:-translate-y-0.5"
              >
                Get Quote <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TOPConTechnology;
