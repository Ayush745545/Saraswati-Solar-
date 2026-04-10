import React, { useState } from 'react';
import { Package, Search, ArrowRight, ShieldCheck } from 'lucide-react';

const ProductsPage: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const products = [
    { 
      title: 'Solar Panel Mounting Structure', 
      desc: 'Robust aluminum/GI rack for rooftop or ground installation', 
      image: '/product/Solar panel roof.png', 
      sku: 'SSP-MNT-001',
      category: 'Structure'
    },
    { 
      title: 'Solar Water Heater', 
      desc: 'Evacuated tube type with insulated copper tank', 
      image: '/product/Solar water heater.png', 
      sku: 'SSP-SWH-002',
      category: 'Heating'
    },
    { 
      title: 'Solar Street Light System', 
      desc: 'Integrated panel + LED lamp + pole assembly', 
      image: '/product/Solar street light.png', 
      sku: 'SSP-SSL-003',
      category: 'Lighting'
    },
    { 
      title: 'Solar Inverter', 
      desc: 'On-grid string inverter with MPPT tracking', 
      image: '/product/solar-inveetor.png', 
      sku: 'SSP-INV-004',
      category: 'Electronics'
    },
    { 
      title: 'Solar Battery', 
      desc: 'Tubular lead-acid & lithium-ion storage', 
      image: '/product/solar-battery.png', 
      sku: 'SSP-BAT-005',
      category: 'Storage'
    },
    { 
      title: 'DC Solar Cables', 
      desc: 'UV-resistant red & black cables with MC4 connectors', 
      image: '/product/DC-solar- cables.png', 
      sku: 'SSP-CBL-006',
      category: 'Wiring'
    },
    { 
      title: 'Lightning Arresters', 
      desc: 'Copper & brass air terminals for surge protection', 
      image: '/product/Lightning arresters.png', 
      sku: 'SSP-LTA-007',
      category: 'Protection'
    },
    { 
      title: 'Electric Energy Meter', 
      desc: 'Smart bi-directional net meter for UPPCL grid sync', 
      image: '/product/meter.png', 
      sku: 'SSP-MTR-008',
      category: 'Metering'
    },
    { 
      title: 'Solar Lantern', 
      desc: 'Portable LED lantern with integrated solar panel', 
      image: '/product/laintain.png', 
      sku: 'SSP-LNT-009',
      category: 'Portable'
    },
    { 
      title: 'DC Distribution Box (DCDB)', 
      desc: 'Protection box with MCB, SPD, fuse holders & DIN rails', 
      image: '/product/Solar-DC-Distribition.png', 
      sku: 'SSP-DCB-010',
      category: 'Protection'
    },
    { 
      title: 'Earthing / Grounding Kit', 
      desc: 'Copper-bonded earth rod & chemical compound', 
      image: '/product/equpments.png', 
      sku: 'SSP-ETH-011',
      category: 'Safety'
    },
    { 
      title: 'Solar Mounting Hardware', 
      desc: 'Mid clamps, end clamps, bolts, hex nuts & washers', 
      image: '/product/71-E0x34XRL._AC_.jpg', 
      sku: 'SSP-HRD-012',
      category: 'Fasteners'
    },
  ];

  return (
    <section className="pt-32 pb-24 bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light text-brand text-xs font-bold tracking-wider mb-6 uppercase">
            <Package className="w-4 h-4" /> Complete Product Range
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Our <span className="text-brand">Products</span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed font-medium">
            Explore our curated product offerings for residential and commercial projects.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((p, index) => (
            <div 
              key={p.sku} 
              className="group bg-white rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-slate-100 overflow-hidden flex flex-col hover:shadow-[0_20px_50px_rgba(45,102,246,0.1)] hover:-translate-y-2 transition-all duration-500"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[4/3] bg-slate-50">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-contain p-6 transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-white/90 backdrop-blur-md text-brand text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm border border-brand/10">
                    {p.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-brand/5 backdrop-blur-[2px] flex items-center justify-center transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                  <button className="bg-brand text-white font-bold px-6 py-3 rounded-xl shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-sm hover:bg-brand/90">
                    Get Quote
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="font-bold text-lg text-slate-900 mb-3 leading-tight group-hover:text-brand transition-colors">
                  {p.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                  {p.desc}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-2.5 py-1.5 rounded-lg">
                    {p.sku}
                  </span>
                  <button className="flex items-center gap-1.5 text-brand font-bold text-sm hover:gap-2.5 transition-all">
                    Enquire
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Certification Note */}
        <div className="mt-20 text-center animate-in fade-in slide-in-from-top-4 duration-700 delay-300">
          <div className="inline-flex items-center gap-4 bg-brand-light/30 border border-brand/10 rounded-3xl px-8 py-5 shadow-sm">
            <div className="bg-brand p-2 rounded-full">
               <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <p className="text-lg text-slate-700 font-medium">
              All products are <strong className="text-brand">BIS certified</strong> and eligible for PM Surya Ghar Yojana subsidy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
