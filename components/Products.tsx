import React, { useState } from 'react';
import { ArrowRight, Search, Package } from 'lucide-react';

const Products: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const products = [
    { 
      title: 'Solar Panel Mounting Structure', 
      shortTitle: 'Mounting Structure',
      desc: 'Robust aluminum/GI rack for rooftop or ground installation', 
      image: '/product/Solar panel roof.png', 
      imageAlt: 'Solar panel mounting structure',
      sku: 'SSP-MNT-001',
      category: 'Structure'
    },
    { 
      title: 'Solar Water Heater', 
      shortTitle: 'Water Heater',
      desc: 'Evacuated tube type with insulated copper tank', 
      image: '/product/Solar water heater.png', 
      imageAlt: 'Solar water heater',
      sku: 'SSP-SWH-002',
      category: 'Heating'
    },
    { 
      title: 'Solar Street Light System', 
      shortTitle: 'Street Light',
      desc: 'Integrated panel + LED lamp + pole assembly', 
      image: '/product/Solar street light.png', 
      imageAlt: 'Solar street light system',
      sku: 'SSP-SSL-003',
      category: 'Lighting'
    },
    { 
      title: 'Solar Inverter', 
      shortTitle: 'Inverter',
      desc: 'On-grid string inverter with MPPT tracking & monitoring', 
      image: '/product/solar-inveetor.png', 
      imageAlt: 'Solar inverter',
      sku: 'SSP-INV-004',
      category: 'Electronics'
    },
    { 
      title: 'Solar Battery', 
      shortTitle: 'Battery',
      desc: 'Tubular lead-acid & lithium-ion for energy storage', 
      image: '/product/solar-battery.png', 
      imageAlt: 'Solar battery',
      sku: 'SSP-BAT-005',
      category: 'Storage'
    },
    { 
      title: 'DC Solar Cables', 
      shortTitle: 'DC Cables',
      desc: 'UV-resistant red & black cables with MC4 connectors', 
      image: '/product/DC-solar- cables.png', 
      imageAlt: 'DC solar cables',
      sku: 'SSP-CBL-006',
      category: 'Wiring'
    },
    { 
      title: 'Lightning Arresters', 
      shortTitle: 'Arresters',
      desc: 'Copper & brass air terminals for surge protection', 
      image: '/product/Lightning arresters.png', 
      imageAlt: 'Lightning arresters',
      sku: 'SSP-LTA-007',
      category: 'Protection'
    },
    { 
      title: 'Electric Energy Meter', 
      shortTitle: 'Net Meter',
      desc: 'Smart bi-directional net meter for UPPCL grid sync', 
      image: '/product/meter.png', 
      imageAlt: 'Energy meter',
      sku: 'SSP-MTR-008',
      category: 'Metering'
    },
    { 
      title: 'Solar Lantern', 
      shortTitle: 'Lantern',
      desc: 'Portable LED lantern with integrated solar panel', 
      image: '/product/laintain.png', 
      imageAlt: 'Solar lantern',
      sku: 'SSP-LNT-009',
      category: 'Portable'
    },
    { 
      title: 'DC Distribution Box (DCDB)', 
      shortTitle: 'DCDB',
      desc: 'Protection box with MCB, SPD, fuse holders & DIN rails', 
      image: '/product/Solar-DC-Distribition.png', 
      imageAlt: 'DC Distribution Box',
      sku: 'SSP-DCB-010',
      category: 'Protection'
    },
    { 
      title: 'Earthing / Grounding Kit', 
      shortTitle: 'Earthing Kit',
      desc: 'Copper-bonded earth rod, chemical compound & brass clamps', 
      image: '/product/equpments.png', 
      imageAlt: 'Earthing kit',
      sku: 'SSP-ETH-011',
      category: 'Safety'
    },
    { 
      title: 'Solar Mounting Hardware', 
      shortTitle: 'Hardware Kit',
      desc: 'Mid clamps, end clamps, bolts, hex nuts & washers', 
      image: '/product/71-E0x34XRL._AC_.jpg', 
      imageAlt: 'Mounting hardware',
      sku: 'SSP-HRD-012',
      category: 'Fasteners'
    },
  ];

  return (
    <section id="products" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-bold tracking-wider mb-4 uppercase">
            <Package className="w-3.5 h-3.5" /> Complete Product Range
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">Products</h2>
          <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto">
            Explore our curated product offerings for residential and commercial projects.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((p, index) => (
            <div 
              key={p.sku} 
              className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 aspect-[4/3]">
                <img
                  src={p.image}
                  alt={p.imageAlt || p.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent flex items-end justify-center pb-6 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                  <a 
                    href="#contact"
                    className="flex items-center gap-2 bg-white text-blue-900 font-bold px-5 py-2.5 rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-sm hover:bg-orange-500 hover:text-white"
                  >
                    <Search className="w-4 h-4" />
                    Get Quote
                  </a>  
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-white/90 backdrop-blur-sm text-slate-700 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/50 shadow-sm">
                    {p.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-bold text-base text-slate-900 mb-1.5 leading-tight group-hover:text-blue-700 transition-colors">
                  {p.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">
                  {p.desc}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider bg-slate-50 px-2 py-1 rounded">
                    {p.sku}
                  </span>
                  <a 
                    href="#contact" 
                    className="flex items-center gap-1 text-orange-600 font-bold text-sm hover:text-orange-700 hover:gap-2 transition-all"
                  >
                    Enquire
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 bg-white border border-slate-200 rounded-full px-6 py-3 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <p className="text-sm text-slate-600 font-medium">
              All products are <strong className="text-slate-900">BIS certified</strong> and eligible for PM Surya Ghar Yojana subsidy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
