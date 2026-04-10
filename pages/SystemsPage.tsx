import React, { useState } from 'react';
import { Zap, CloudOff, RefreshCw, Factory, CheckCircle2, ArrowRight, Filter } from 'lucide-react';

interface SystemsPageProps {
  onOpenBooking: () => void;
}

const SystemsPage: React.FC<SystemsPageProps> = ({ onOpenBooking }) => {
  const [typeFilter, setTypeFilter] = useState<string>('All');
  const [usageFilter, setUsageFilter] = useState<string>('All');

  const systems = [
    // OFF-GRID COMMERCIAL
    { type: 'Off Grid', name: '2kW UTL OFF-GRID System', capacity: '2', usage: 'Commercial', includes: ['4x Component', '1x Component', '2x Component'], price: '₹1,20,700' },
    { type: 'Off Grid', name: '3kW UTL OFF-GRID System', capacity: '3', usage: 'Commercial', includes: ['5x Component', '1x Component', '2x Component'], price: '₹1,43,500' },
    { type: 'Off Grid', name: '4kW UTL OFF-GRID System', capacity: '4', usage: 'Commercial', includes: ['7x Component', '1x Component', '4x Component'], price: '₹2,28,400' },
    { type: 'Off Grid', name: '5kW UTL OFF-GRID System', capacity: '5', usage: 'Commercial', includes: ['9x Component', '1x Component', '4x Component'], price: '₹2,62,000' },
    { type: 'Off Grid', name: '6kW UTL OFF-GRID System', capacity: '6', usage: 'Commercial', includes: ['10x Component', '1x Component', '8x Component'], price: '₹3,83,600' },
    { type: 'Off Grid', name: '7kW UTL OFF-GRID System', capacity: '7', usage: 'Commercial', includes: ['12x Component', '1x Component', '8x Component'], price: '₹4,17,200' },
    { type: 'Off Grid', name: '8kW UTL OFF-GRID System', capacity: '8', usage: 'Commercial', includes: ['14x Component', '1x Component', '10x Component'], price: '₹5,15,000' },
    { type: 'Off Grid', name: '10kW UTL OFF-GRID System', capacity: '10', usage: 'Commercial', includes: ['17x Component', '1x Component', '10x Component'], price: '₹5,70,400' },
    { type: 'Off Grid', name: '11kW UTL OFF-GRID System', capacity: '11', usage: 'Commercial', includes: ['19x Component', '1x Component', '15x Component'], price: '₹7,25,000' },
    { type: 'Off Grid', name: '12kW UTL OFF-GRID System', capacity: '12', usage: 'Commercial', includes: ['20x Component', '1x Component', '15x Component'], price: '₹7,46,800' },
    { type: 'Off Grid', name: '13kW UTL OFF-GRID System', capacity: '13', usage: 'Commercial', includes: ['22x Component', '1x Component', '15x Component'], price: '₹7,80,400' },
    { type: 'Off Grid', name: '14kW UTL OFF-GRID System', capacity: '14', usage: 'Commercial', includes: ['24x Component', '1x Component', '15x Component'], price: '₹8,14,000' },
    { type: 'Off Grid', name: '15kW UTL OFF-GRID System', capacity: '15', usage: 'Commercial', includes: ['26x Component', '1x Component', '15x Component'], price: '₹8,47,600' },
    { type: 'Off Grid', name: '16kW UTL OFF-GRID System', capacity: '16', usage: 'Commercial', includes: ['27x Component', '1x Component', '20x Component'], price: '₹9,68,600' },
    { type: 'Off Grid', name: '17kW UTL OFF-GRID System', capacity: '17', usage: 'Commercial', includes: ['29x Component', '1x Component', '20x Component'], price: '₹10,02,200' },
    { type: 'Off Grid', name: '18kW UTL OFF-GRID System', capacity: '18', usage: 'Commercial', includes: ['31x Component', '1x Component', '20x Component'], price: '₹10,15,800' },
    { type: 'Off Grid', name: '20kW UTL OFF-GRID System', capacity: '20', usage: 'Commercial', includes: ['35x Component', '1x Component', '20x Component'], price: '₹10,83,000' },

    // ON-GRID RESIDENTIAL
    { type: 'On Grid', name: '2kW UTL ON-GRID System', capacity: '2', usage: 'Residential', includes: ['1x Component', '4x Component', '1x Component'], price: '₹1,50,000' },
    { type: 'On Grid', name: '3kW UTL ON-GRID System', capacity: '3', usage: 'Residential', includes: ['6x Component', '1x Component', '1x Component'], price: '₹1,90,000' },
    { type: 'On Grid', name: '4kW UTL ON-GRID System', capacity: '4', usage: 'Residential', includes: ['8x Component', '1x Component', '1x Component'], price: '₹2,50,000' },
    { type: 'On Grid', name: '5kW UTL ON-GRID System', capacity: '5', usage: 'Residential', includes: ['10x Component', '1x Component', '1x Component'], price: '₹2,80,000' },
    { type: 'On Grid', name: '6kW UTL ON-GRID System', capacity: '6', usage: 'Residential', includes: ['12x Component', '1x Component', '1x Component'], price: '₹3,85,000' },
    { type: 'On Grid', name: '7kW UTL ON-GRID System', capacity: '7', usage: 'Residential', includes: ['14x Component', '1x Component', '1x Component'], price: '₹4,38,000' },
    { type: 'On Grid', name: '8kW UTL ON-GRID System', capacity: '8', usage: 'Residential', includes: ['16x Component', '1x Component', '1x Component'], price: '₹5,10,000' },
    { type: 'On Grid', name: '10kW UTL ON-GRID System', capacity: '10', usage: 'Residential', includes: ['1x Component', '1x Component', '20x Component'], price: '₹6,15,000' },

    // HYBRID RESIDENTIAL
    { type: 'Hybrid', name: '2kW UTL HYBRID System', capacity: '2', usage: 'Residential', includes: ['4x Component', '1x Component', '1x Component'], price: '₹2,00,000' },
    { type: 'Hybrid', name: '2kW UTL HYBRID Alternate', capacity: '2', usage: 'Residential', includes: ['4x Component', '1x Component', '1x Component'], price: '₹2,35,000' },
    { type: 'Hybrid', name: '3kW UTL HYBRID System', capacity: '3', usage: 'Residential', includes: ['6x Component', '1x Component', '1x Component'], price: '₹2,75,000' },
    { type: 'Hybrid', name: '3kW/24V Hybrid System', capacity: '3', usage: 'Residential', includes: ['6x Component', '1x Component', '1x Component'], price: '₹2,40,000' },
    { type: 'Hybrid', name: '4kW UTL HYBRID System', capacity: '4', usage: 'Residential', includes: ['8x Component', '1x Component', '1x Component'], price: '₹3,45,000' },
    { type: 'Hybrid', name: '5kW UTL HYBRID System', capacity: '5', usage: 'Residential', includes: ['10x Component', '1x Component', '1x Component'], price: '₹4,00,000' },
    { type: 'Hybrid', name: '6kW UTL HYBRID System', capacity: '6', usage: 'Residential', includes: ['12x Component', '1x Component', '1x Component'], price: '₹5,39,000' },
    { type: 'Hybrid', name: '7kW UTL HYBRID System', capacity: '7', usage: 'Residential', includes: ['14x Component', '1x Component', '2x Component'], price: '₹5,91,560' },
    { type: 'Hybrid', name: '8kW UTL HYBRID System', capacity: '8', usage: 'Residential', includes: ['16x Component', '1x Component', '10x Component'], price: '₹7,00,480' },
    { type: 'Hybrid', name: '10kW UTL HYBRID System', capacity: '10', usage: 'Residential', includes: ['20x Component', '1x Component', '10x Component'], price: '₹8,05,600' },

    // ATTA CHAKKI COMMERCIAL
    { type: 'Atta Chakki', name: '8.5kW UTL ATTA-CHAKKI System', capacity: '8.5', usage: 'Commercial', includes: ['16x Component', '1x Component', '1x Component'], price: '₹2,85,440' },
    { type: 'Atta Chakki', name: '17kW UTL ATTA-CHAKKI System', capacity: '17', usage: 'Commercial', includes: ['32x Component', '1x Component', '1x Component'], price: '₹5,42,880' },
    { type: 'Atta Chakki', name: '25.5kW UTL ATTA-CHAKKI System', capacity: '25.5', usage: 'Commercial', includes: ['45x Component', '1x Component', '1x Component'], price: '₹8,15,400' },
    { type: 'Atta Chakki', name: '34kW UTL ATTA-CHAKKI System', capacity: '34', usage: 'Commercial', includes: ['60x Component', '1x Component', '1x Component'], price: '₹10,86,200' },
  ];

  const filteredSystems = systems.filter(system => {
    const matchesType = typeFilter === 'All' || system.type === typeFilter;
    const matchesUsage = usageFilter === 'All' || system.usage === usageFilter;
    return matchesType && matchesUsage;
  });

  const getIcon = (type: string) => {
    switch(type) {
      case 'On Grid': return <Zap className="w-5 h-5" />;
      case 'Off Grid': return <CloudOff className="w-5 h-5" />;
      case 'Hybrid': return <RefreshCw className="w-5 h-5" />;
      case 'Atta Chakki': return <Factory className="w-5 h-5" />;
      default: return <Zap className="w-5 h-5" />;
    }
  };

  return (
    <section className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">Solar Energy Systems</h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed">
            Choose from our expertly configured solar packages designed for maximum efficiency and savings.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
          <div className="bg-white p-1.5 rounded-2xl shadow-sm border border-slate-100 flex flex-wrap justify-center gap-1">
            {['All', 'On Grid', 'Off Grid', 'Hybrid', 'Atta Chakki'].map((type) => (
              <button
                key={type}
                onClick={() => setTypeFilter(type)}
                className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${
                  typeFilter === type 
                    ? 'bg-brand text-white shadow-lg shadow-brand/20' 
                    : 'text-slate-500 hover:bg-slate-50'
                }`}
              >
                {type === 'All' ? 'All Types' : type}
              </button>
            ))}
          </div>

          <div className="bg-white p-1.5 rounded-2xl shadow-sm border border-slate-100 flex flex-wrap justify-center gap-1">
            {['All', 'Residential', 'Commercial'].map((usage) => (
              <button
                key={usage}
                onClick={() => setUsageFilter(usage)}
                className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${
                  usageFilter === usage 
                    ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/10' 
                    : 'text-slate-500 hover:bg-slate-50'
                }`}
              >
                {usage === 'All' ? 'All Usage' : usage}
              </button>
            ))}
          </div>
        </div>

        {/* Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSystems.map((system, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[2.5rem] p-10 shadow-[0_15px_40px_rgba(0,0,0,0.03)] border border-slate-50 hover:shadow-[0_30px_70px_rgba(45,102,246,0.1)] transition-all duration-500 group flex flex-col"
            >
              {/* Type Badge */}
              <div className="flex items-center gap-2 mb-8">
                <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                  system.type === 'On Grid' ? 'bg-blue-100 text-blue-600' :
                  system.type === 'Off Grid' ? 'bg-orange-100 text-orange-600' :
                  system.type === 'Hybrid' ? 'bg-indigo-100 text-indigo-600' :
                  'bg-emerald-100 text-emerald-600'
                }`}>
                  {getIcon(system.type)}
                  {system.type}
                </div>
              </div>

              {/* Title & Info */}
              <h3 className="text-2xl font-black text-slate-900 mb-2 leading-tight group-hover:text-brand transition-colors">
                {system.name}
              </h3>
              <div className="flex items-center gap-2 text-slate-400 font-bold text-sm mb-8">
                <span>{system.capacity}kW</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-200"></span>
                <span>{system.usage}</span>
              </div>

              {/* Includes List */}
              <div className="flex-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Includes</p>
                <ul className="space-y-4 mb-10">
                  {system.includes.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                      <CheckCircle2 className="w-5 h-5 text-brand" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price & Action */}
              <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                <p className="text-3xl font-black text-brand tracking-tight">{system.price}</p>
                <button 
                  onClick={onOpenBooking}
                  className="bg-brand-light p-3 rounded-full group-hover:bg-brand transition-all flex items-center justify-center transform group-hover:scale-110 active:scale-90"
                >
                  <ArrowRight className="w-6 h-6 text-brand group-hover:text-white transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredSystems.length === 0 && (
          <div className="text-center py-32">
            <Filter className="w-16 h-16 text-slate-200 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-slate-900 mb-2">No systems found</h3>
            <p className="text-slate-500">Try adjusting your filters to see more results.</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default SystemsPage;
