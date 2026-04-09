import React, { useState } from 'react';
import { MapPin, Sun, ArrowRight, CheckCircle2 } from 'lucide-react';

const LocalSEO: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const areas = [
    {
      name: "Deoband",
      tagline: "Solar Panel Installation in Deoband",
      description: "Deoband homeowners are rapidly switching to rooftop solar to beat rising electricity costs. As the nearest authorized Adani Solar EPC partner, Saraswati Solar has completed 500+ residential installations across Deoband city and surrounding villages.",
      highlights: [
        "Same-day site survey availability for Deoband residents",
        "Dedicated installation team just 20 mins from Deoband",
        "Full UPPCL net metering handled for Deoband subdivision",
        "Dr. Sharma from Deoband saved ₹3,800/month on electricity"
      ],
      keyword: "solar panel installation Deoband"
    },
    {
      name: "Gangoh",
      tagline: "Best Solar Subsidy Guide for Gangoh Residents",
      description: "Gangoh residents can now access up to ₹1,08,000 in total solar subsidies through PM Surya Ghar Yojana and UP State Subsidy. Saraswati Solar is the leading vendor handling complete subsidy documentation for Gangoh tehsil.",
      highlights: [
        "Complete subsidy paperwork handled — zero hassle for you",
        "₹78,000 Central + ₹30,000 State = ₹1,08,000 total benefit",
        "Fast-track processing for Gangoh electricity subdivision",
        "Serving Gangoh, Sarsawa, and Jhaludbi areas"
      ],
      keyword: "solar subsidy Gangoh UP"
    },
    {
      name: "Nakur",
      tagline: "Solar Panels for Homes in Nakur",
      description: "From independent houses to farmhouses on the outskirts, Nakur's growing residential sector is ideal for solar. Saraswati Solar provides customized solutions for Nakur's mix of concrete roofs and tin-shed structures.",
      highlights: [
        "Custom solutions for both flat and tin-shed roofs",
        "3kW systems starting from ₹1,12,000 after subsidy",
        "Galvanized mounting for Nakur's high-wind areas",
        "Ongoing maintenance support from our Talheri Buzurg center"
      ],
      keyword: "solar panels Nakur Saharanpur"
    },
    {
      name: "Rampur Maniharan",
      tagline: "Rampur Maniharan Solar Solutions",
      description: "Rampur Maniharan's agricultural community and small industries benefit significantly from solar power. We provide both residential rooftop and commercial solar solutions with competitive pricing and full government subsidy support.",
      highlights: [
        "Agricultural pump solar solutions available",
        "Commercial 10kW+ systems for local industries",
        "EMI options through SBI and PNB Rampur Maniharan branches",
        "Serving the entire Rampur Maniharan block"
      ],
      keyword: "solar installation Rampur Maniharan"
    },
  ];

  return (
    <section id="service-areas" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-xs font-bold tracking-wider mb-4 uppercase">
            <MapPin className="w-3.5 h-3.5" /> Serving All of Saharanpur District
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Solar Solutions <span className="text-blue-600">Near You</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We proudly serve every corner of Saharanpur district with local installation teams and dedicated area support.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
          {areas.map((area, index) => (
            <button
              key={area.name}
              onClick={() => setActiveTab(index)}
              className={`
                px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300
                ${activeTab === index 
                  ? 'bg-blue-900 text-white shadow-lg shadow-blue-900/20 scale-105' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-700'
                }
              `}
            >
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                {area.name}
              </span>
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        {areas.map((area, index) => (
          activeTab === index && (
            <div
              key={area.name}
              className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden animate-in fade-in duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5">
                
                {/* Left: Content */}
                <div className="lg:col-span-3 p-8 md:p-10">
                  <div className="flex items-center gap-2 mb-3">
                    <Sun className="w-5 h-5 text-orange-500" />
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">Now Serving {area.name}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                    {area.tagline}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-8">
                    {area.description}
                  </p>

                  <ul className="space-y-4 mb-8">
                    {area.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 font-medium text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg hover:shadow-orange-500/20 transform hover:-translate-y-0.5"
                  >
                    Get Quote for {area.name}
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>

                {/* Right: Stats / Map placeholder */}
                <div className="lg:col-span-2 bg-gradient-to-br from-blue-900 to-blue-800 p-8 md:p-10 flex flex-col justify-center text-white">
                  <div className="space-y-8">
                    <div>
                      <p className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-1">Installations in {area.name}</p>
                      <p className="text-4xl font-black">500+</p>
                    </div>
                    <div>
                      <p className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-1">Average Monthly Savings</p>
                      <p className="text-4xl font-black text-green-400">₹3,500</p>
                    </div>
                    <div>
                      <p className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-1">Response Time</p>
                      <p className="text-4xl font-black text-orange-400">24 hrs</p>
                    </div>
                    <div className="pt-6 border-t border-blue-700">
                      <p className="text-blue-300 text-sm">
                        📍 Nearest Center: <strong className="text-white">Talheri Buzurg</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        ))}
      </div>
    </section>
  );
};

export default LocalSEO;
