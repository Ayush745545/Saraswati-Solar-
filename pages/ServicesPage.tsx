import React, { useState, useMemo } from 'react';
import { Home, Building2, Factory, Banknote, Landmark, Box, Wrench, Layout, Zap, Layers, ArrowRight, CheckCircle2, Calculator, MessageSquare, Star, ChevronRight, MapPin, ShieldCheck, Headphones, CreditCard } from 'lucide-react';

interface ServicesPageProps {
  onOpenCalculator: () => void;
  onOpenBooking: () => void;
}

interface ServiceItem {
  id: string;
  name: string;
  desc: string;
  featured: boolean;
  inclusions?: string[];
  whyChooseUs?: { title: string; desc: string }[];
}

interface Category {
  id: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  count: string;
  color: string;
  items: ServiceItem[];
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenCalculator, onOpenBooking }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  const indianStates = [
    "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", 
    "Dadra & Nagar Haveli and Daman & Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu & Kashmir", 
    "Jharkhand", "Karnataka", "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", 
    "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", 
    "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  const commonInclusions = [
    'Expert consultation and site assessment',
    'Detailed project planning and design',
    'Quality components from trusted brands',
    'Professional installation by certified team',
    'Complete documentation and compliance',
    'Post-installation support and warranty'
  ];

  const commonReasons = [
    { title: 'MNRE Approved', desc: 'Government-certified installations ensuring quality and subsidy eligibility.' },
    { title: 'Transparent Pricing', desc: 'No hidden costs, clear breakdown of all expenses and subsidies.' },
    { title: 'End-to-End Service', desc: 'From consultation to commissioning and beyond.' }
  ];

  const categories: Category[] = useMemo(() => [
    { 
      id: 'residential', 
      icon: <Home className="w-8 h-8" />, 
      title: 'Residential Solar', 
      desc: 'Solar solutions for homes, villas, and apartments', 
      count: '10 services', 
      color: 'bg-blue-50 text-blue-600',
      items: [
        { id: 'res-on-grid', name: 'On-Grid Solar System Installation', desc: 'Grid-connected solar systems for homes with net metering benefits', featured: true, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'res-off-grid', name: 'Off-Grid Solar System Installation', desc: 'Complete energy independence with battery backup for homes', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'res-hybrid', name: 'Hybrid Solar System Installation', desc: 'Best of both worlds - grid connection with battery backup', featured: true, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'res-rooftop', name: 'Rooftop Solar for Homes', desc: 'Customized rooftop solar solutions for villas and apartments', featured: true, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'res-capacity', name: 'Solar System Capacity Planning', desc: 'Expert sizing from 1KW to 10KW+ based on your consumption', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'res-subsidy', name: 'Solar Subsidy Assistance', desc: 'PM Surya Ghar Yojana subsidy processing and documentation', featured: true, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'res-metering', name: 'Net Metering Application', desc: 'Complete net metering setup and DISCOM approval', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'res-amc', name: 'Residential Solar AMC', desc: 'Annual maintenance contracts for worry-free operation', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'res-upgrade', name: 'Solar System Upgrade', desc: 'Upgrade old inverters and panels to latest technology', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'res-monitoring', name: 'Solar Monitoring Setup', desc: 'Real-time monitoring via mobile app and web dashboard', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
      ]
    },
    { 
      id: 'commercial', 
      icon: <Building2 className="w-8 h-8" />, 
      title: 'Commercial Solar', 
      desc: 'Solar systems for businesses, schools, and offices', 
      count: '10 services', 
      color: 'bg-indigo-50 text-indigo-600',
      items: [
        { id: 'com-rooftop', name: 'Commercial Rooftop Solar', desc: 'Large-scale rooftop installations for commercial buildings', featured: true, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'com-on-grid', name: 'On-Grid Solar for Business', desc: 'Reduce operational costs with grid-tied commercial systems', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'com-schools', name: 'Solar for Schools & Colleges', desc: 'Educational institutions solar solutions with subsidy benefits', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'com-hospitals', name: 'Solar for Hospitals', desc: 'Reliable power backup for healthcare facilities', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'com-hotels', name: 'Solar for Hotels & Resorts', desc: 'Hospitality sector energy cost optimization', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'com-offices', name: 'Solar for Offices & IT Parks', desc: 'Corporate solar solutions with CSR benefits', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'com-audit', name: 'Energy Audit & Feasibility', desc: 'Comprehensive energy analysis and solar ROI study', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'com-peak', name: 'Peak Load Management', desc: 'Reduce demand charges with smart solar integration', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'com-metering', name: 'Commercial Net Metering', desc: 'Power export setup and DISCOM coordination', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'com-maint', name: 'Commercial Solar Maintenance', desc: 'Long-term maintenance contracts for businesses', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
      ]
    },
    { 
      id: 'industrial', 
      icon: <Factory className="w-8 h-8" />, 
      title: 'Industrial Solar', 
      desc: 'High-capacity solar for factories and manufacturing', 
      count: '10 services', 
      color: 'bg-slate-50 text-slate-600',
      items: [
        { id: 'ind-rooftop', name: 'Industrial Rooftop Solar', desc: 'High-capacity rooftop systems for factories and warehouses', featured: true, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'ind-ground', name: 'Ground-Mounted Solar Plant', desc: 'Large-scale ground installations for industrial estates', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'ind-captive', name: 'Captive Solar Power Plant', desc: 'Dedicated solar plants for manufacturing units', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'ind-mfg', name: 'Solar for Manufacturing', desc: 'Heavy industry solar solutions with high ROI', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'ind-mills', name: 'Solar for Mills & Cold Storage', desc: 'Specialized solutions for rice mills, flour mills, cold storage', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'ind-high', name: 'High-Capacity Solar Systems', desc: 'Mega projects from 50KW to 5MW+', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'ind-ht', name: 'HT Panel Coordination', desc: 'Transformer and high-tension panel integration', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'ind-open', name: 'Open Access Solar', desc: 'Open access consulting and setup for large consumers', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'ind-optimize', name: 'Energy Cost Optimization', desc: 'Industrial energy efficiency and cost reduction', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'ind-om', name: 'Industrial O&M Services', desc: 'Long-term operations and maintenance for industrial plants', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
      ]
    },
    { 
      id: 'financing', 
      icon: <Banknote className="w-8 h-8" />, 
      title: 'Solar Financing', 
      desc: 'Loan assistance and EMI plans for solar projects', 
      count: '8 services', 
      color: 'bg-emerald-50 text-emerald-600',
      items: [
        { id: 'fin-loan', name: 'Solar Loan Assistance', desc: 'End-to-end loan processing for solar projects', featured: true, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'fin-emi', name: 'EMI Calculation & Planning', desc: 'Flexible EMI options tailored to your budget', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'fin-zero', name: 'Zero Down Payment Plans', desc: 'Start solar with minimal upfront investment', featured: true, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'fin-tieups', name: 'Bank & NBFC Tie-ups', desc: 'Pre-approved loans from leading financial institutions', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'fin-govt', name: 'Government Solar Finance', desc: 'Government-backed solar financing schemes', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'fin-biz', name: 'Business Solar Financing', desc: 'Commercial and industrial project financing', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'fin-res', name: 'Residential Solar EMI', desc: 'Easy monthly installments for home solar systems', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'fin-subsidy', name: 'Subsidy + Loan Processing', desc: 'Combined subsidy and loan application handling', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
      ]
    },
    { 
      id: 'government', 
      icon: <Landmark className="w-8 h-8" />, 
      title: 'Government & Subsidy', 
      desc: 'PM Surya Ghar and state subsidy processing', 
      count: '8 services', 
      color: 'bg-amber-50 text-amber-600',
      items: [
        { id: 'gov-subsidy', name: 'PM Surya Ghar Subsidy', desc: 'Complete PM Surya Ghar Yojana subsidy processing', featured: true, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'gov-mnre', name: 'MNRE Approved Installation', desc: 'Ministry-approved vendors and quality standards', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'gov-sna', name: 'State Nodal Agency Support', desc: 'UPNEDA and state agency coordination', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'gov-online', name: 'Online Subsidy Application', desc: 'Digital subsidy filing and tracking', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'gov-doc', name: 'Document Verification', desc: 'Complete documentation assistance and verification', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'gov-discom', name: 'DISCOM Coordination', desc: 'Electricity board approvals and coordination', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'gov-followup', name: 'Subsidy Claim Follow-up', desc: 'Regular follow-up until subsidy disbursement', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'gov-inspect', name: 'Post-Installation Inspection', desc: 'Government inspection support and clearance', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
      ]
    },
    { 
      id: 'components', 
      icon: <Box className="w-8 h-8" />, 
      title: 'Solar Components', 
      desc: 'Panels, inverters, batteries, and accessories', 
      count: '8 services', 
      color: 'bg-purple-50 text-purple-600',
      items: [
        { id: 'comp-panels', name: 'Solar Panels Supply', desc: 'Mono, Poly, and TOPCon solar panels from top brands', featured: true, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'comp-inv', name: 'Solar Inverters', desc: 'On-Grid, Off-Grid, and Hybrid inverters', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'comp-bat', name: 'Solar Batteries', desc: 'Lithium and tubular batteries for backup', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'comp-str', name: 'Mounting Structures', desc: 'Durable aluminum and galvanized mounting systems', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'comp-cbl', name: 'Solar Cables', desc: 'High-quality DC and AC cables', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'comp-junc', name: 'Junction Boxes', desc: 'Weather-proof solar junction boxes', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'comp-mon', name: 'Monitoring Devices', desc: 'Smart monitoring and data logging systems', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'comp-safe', name: 'Safety Equipment', desc: 'Earthing, lightning arrestors, and safety gear', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
      ]
    },
    { 
      id: 'maintenance', 
      icon: <Wrench className="w-8 h-8" />, 
      title: 'Maintenance & AMC', 
      desc: 'Annual maintenance and repair services', 
      count: '8 services', 
      color: 'bg-rose-50 text-rose-600',
      items: [
        { id: 'maint-amc', name: 'Annual Maintenance Contract', desc: 'Comprehensive AMC for solar systems', featured: true, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'maint-clean', name: 'Solar Panel Cleaning', desc: 'Professional cleaning for maximum efficiency', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'maint-inv', name: 'Inverter Health Check', desc: 'Regular inverter diagnostics and servicing', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'maint-audit', name: 'Performance Audit', desc: 'Generation analysis and optimization', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'maint-fault', name: 'Fault Detection & Repair', desc: '24/7 fault detection and quick repairs', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'maint-upg', name: 'Inverter Replacement', desc: 'Inverter upgrade and replacement service', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'maint-safe', name: 'Safety Inspection', desc: 'Wiring and electrical safety audits', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'maint-opt', name: 'System Optimization', desc: 'Performance tuning and efficiency improvement', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
      ]
    },
    { 
      id: 'consulting', 
      icon: <Layout className="w-8 h-8" />, 
      title: 'Consulting & Survey', 
      desc: 'Site surveys, feasibility studies, and planning', 
      count: '8 services', 
      color: 'bg-cyan-50 text-cyan-600',
      items: [
        { id: 'cons-site', name: 'Site Survey & Analysis', desc: 'Shadow analysis and site assessment', featured: true, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'cons-load', name: 'Load Calculation', desc: 'Accurate load analysis and system design', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'cons-roi', name: 'ROI & Payback Calculation', desc: 'Financial analysis and return on investment', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'cons-feas', name: 'Solar Feasibility Report', desc: 'Detailed technical and financial feasibility study', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'cons-design', name: 'Plant Design & Layout', desc: 'Professional CAD drawings and layouts', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'cons-exp', name: 'Expansion Consulting', desc: 'System expansion and upgrade planning', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'cons-tpi', name: 'Third-Party Inspection', desc: 'Independent quality and performance inspection', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'cons-vend', name: 'Vendor Evaluation', desc: 'Vendor comparison and selection consulting', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
      ]
    },
    { 
      id: 'special', 
      icon: <Zap className="w-8 h-8" />, 
      title: 'Special Solutions', 
      desc: 'Agricultural, EV charging, and niche applications', 
      count: '8 services', 
      color: 'bg-orange-50 text-orange-600',
      items: [
        { id: 'spec-agri', name: 'Agricultural Solar', desc: 'Solar solutions for farms and tubewells', featured: true, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'spec-pump', name: 'Solar Water Pumps', desc: 'Submersible and surface solar pump installation', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'spec-farm', name: 'Solar for Farmhouses', desc: 'Off-grid solutions for remote farmhouses', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'spec-street', name: 'Solar Street Lights', desc: 'Standalone solar street lighting systems', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'spec-cctv', name: 'Solar CCTV Power', desc: 'Solar-powered surveillance systems', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'spec-ev', name: 'Solar EV Charging', desc: 'Solar-powered electric vehicle charging stations', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'spec-remote', name: 'Solar for Remote Areas', desc: 'Off-grid solutions for remote locations', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'spec-port', name: 'Portable Solar Systems', desc: 'Mobile and portable solar power units', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
      ]
    },
    { 
      id: 'epc', 
      icon: <Layers className="w-8 h-8" />, 
      title: 'EPC Services', 
      desc: 'Turnkey engineering, procurement, and construction', 
      count: '8 services', 
      color: 'bg-brand-light text-brand',
      items: [
        { id: 'epc-end', name: 'End-to-End Solar EPC', desc: 'Complete turnkey solar project execution', featured: true, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'epc-design', name: 'Design & Procurement', desc: 'Engineering design and component procurement', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'epc-pm', name: 'Project Management', desc: 'Professional project management and coordination', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'epc-comm', name: 'Commissioning & Testing', desc: 'System commissioning and performance testing', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'epc-grid', name: 'Grid Synchronization', desc: 'Grid connection and synchronization', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'epc-guar', name: 'Performance Guarantee', desc: 'Long-term performance warranties', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'epc-doc', name: 'Documentation & Compliance', desc: 'Complete regulatory compliance and documentation', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
        { id: 'epc-om', name: 'Long-Term O&M', desc: 'Post-installation operations and maintenance support', featured: false, inclusions: commonInclusions, whyChooseUs: commonReasons },
      ]
    },
  ], [commonInclusions, commonReasons]);

  const selectedService = useMemo(() => {
    if (!selectedServiceId) return null;
    for (const cat of categories) {
      const found = cat.items.find(item => item.id === selectedServiceId);
      if (found) return { ...found, category: cat };
    }
    return null;
  }, [selectedServiceId, categories]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleServiceClick = (id: string) => {
    setSelectedServiceId(id);
    scrollToTop();
  };

  if (selectedService) {
    return (
      <section className="pt-32 pb-24 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm font-bold mb-12">
            <button onClick={() => setSelectedServiceId(null)} className="text-slate-400 hover:text-brand transition-colors">Services</button>
            <ChevronRight className="w-4 h-4 text-slate-300" />
            <button onClick={() => setSelectedServiceId(null)} className="text-slate-400 hover:text-brand transition-colors">{selectedService.category.title}</button>
            <ChevronRight className="w-4 h-4 text-slate-300" />
            <span className="text-slate-900">{selectedService.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              {/* Header */}
              <div className="mb-12">
                {selectedService.featured && (
                  <span className="inline-flex items-center gap-2 bg-brand-light text-brand px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                    <Star className="w-3 h-3 fill-brand" />
                    Featured Service
                  </span>
                )}
                <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">{selectedService.name}</h1>
                <p className="text-xl text-slate-500 font-medium leading-relaxed">{selectedService.desc}</p>
              </div>

              {/* What's Included */}
              <div className="bg-slate-50 rounded-[3rem] p-10 md:p-14 mb-16">
                <h2 className="text-2xl font-black text-slate-900 mb-8">What's Included</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {(selectedService.inclusions || [
                    'Detailed site assessment',
                    'Customized system design',
                    'High-quality branded components',
                    'Installation by certified experts',
                    'End-to-end documentation support',
                    'Performance testing & handover'
                  ]).map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="mt-1 w-6 h-6 rounded-full bg-brand-light flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-brand" />
                      </div>
                      <span className="text-slate-700 font-bold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Saraswati Solar */}
              <div className="mb-16">
                <h2 className="text-2xl font-black text-slate-900 mb-10">Why Choose Saraswati Solar?</h2>
                <div className="space-y-8">
                  {(selectedService.whyChooseUs || [
                    { title: 'MNRE Registered Partner', desc: 'As an approved vendor, we ensure your system meets all government safety and efficiency standards.' },
                    { title: 'Transparent Costing', desc: 'Get a clear breakdown of equipment costs, labor, and expected government subsidies with zero hidden fees.' },
                    { title: 'Lifetime Technical Support', desc: 'Our dedicated support team is available 24/7 to handle any queries or maintenance needs post-installation.' }
                  ]).map((item, i) => (
                    <div key={i} className="flex gap-8 group">
                      <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center font-black text-xl text-brand group-hover:bg-brand group-hover:text-white transition-all">
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Get Started Today */}
              <div className="bg-brand rounded-[3rem] p-10 md:p-16 text-white text-center shadow-2xl shadow-brand/20">
                <h2 className="text-3xl font-black mb-6">Get Started Today</h2>
                <p className="text-white/80 font-medium mb-10 max-w-lg mx-auto leading-relaxed">Request a free consultation and customized quote. Our experts will get back to you within 24 hours.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button onClick={onOpenBooking} className="bg-white text-brand px-8 py-4 rounded-2xl font-black shadow-xl hover:scale-105 active:scale-95 transition-all">Contact Us</button>
                  <button onClick={onOpenCalculator} className="bg-brand-light/20 text-white border border-white/20 px-8 py-4 rounded-2xl font-black backdrop-blur-md hover:bg-white/10 transition-all">Use Calculator</button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-12">
              {/* Related Services */}
              <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm">
                <h3 className="text-xl font-black text-slate-900 mb-8">Related Services</h3>
                <div className="space-y-4">
                  {selectedService.category.items.filter(i => i.id !== selectedService.id).slice(0, 5).map(item => (
                    <button 
                      key={item.id} 
                      onClick={() => handleServiceClick(item.id)}
                      className="w-full text-left p-4 rounded-2xl hover:bg-slate-50 transition-colors group flex items-center justify-between"
                    >
                      <span className="font-bold text-slate-700 group-hover:text-brand transition-colors">{item.name}</span>
                      <ArrowRight className="w-4 h-4 text-slate-200 group-hover:text-brand group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm">
                <div className="flex items-center gap-3 mb-8">
                  <MapPin className="w-6 h-6 text-brand" />
                  <h3 className="text-xl font-black text-slate-900">Services by State</h3>
                </div>
                <div className="grid grid-cols-1 gap-2 max-h-[400px] overflow-y-auto custom-scrollbar pr-2 text-sm">
                  {indianStates.map(state => (
                    <div key={state} className="p-3 border-b border-slate-50 text-slate-600 font-medium hover:text-brand transition-colors cursor-default">
                      {state}
                    </div>
                  ))}
                </div>
                <p className="mt-8 text-xs text-slate-400 font-bold uppercase tracking-widest text-center">Available Across all 35 States & UTs</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-32 pb-24 bg-slate-50/30 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-tight">
            Solar <span className="text-brand">Services</span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed font-medium mb-12">
            Explore our comprehensive range of solar solutions tailored for every need. From residential rooftops to mega-industrial plants, we handle it all.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onOpenCalculator}
              className="bg-brand text-white px-8 py-4 rounded-2xl font-black shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Calculator className="w-5 h-5" />
              Use Calculators
            </button>
            <button 
              onClick={onOpenBooking}
              className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl font-black hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5 text-brand" />
              Contact Expert
            </button>
          </div>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-32">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                const element = document.getElementById(cat.id);
                if (element) {
                   const offset = 100;
                   const elementPosition = element.getBoundingClientRect().top;
                   const offsetPosition = elementPosition + window.pageYOffset - offset;
                   window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
              className="bg-white p-8 rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-slate-100 text-left hover:border-brand/40 hover:shadow-[0_20px_50px_rgba(45,102,246,0.08)] transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl ${cat.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {cat.icon}
              </div>
              <h3 className="font-black text-slate-900 text-lg mb-2 group-hover:text-brand transition-colors leading-tight">{cat.title}</h3>
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{cat.count}</p>
            </button>
          ))}
        </div>

        {/* Detailed Sections (Catalog) */}
        <div className="space-y-32">
          {categories.map((cat) => (
            <div key={cat.id} id={cat.id} className="scroll-mt-32">
              <div className="flex flex-col md:flex-row items-baseline gap-6 mb-12 border-b border-slate-100 pb-8">
                <div className={`w-12 h-12 rounded-xl ${cat.color} flex items-center justify-center flex-shrink-0`}>
                  {cat.icon}
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900">{cat.title}</h2>
                  <p className="text-slate-500 font-medium mt-1">{cat.desc}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cat.items.map((service, idx) => (
                  <button 
                    key={service.id} 
                    onClick={() => handleServiceClick(service.id)}
                    className="bg-white p-8 rounded-3xl border border-slate-50 shadow-sm hover:shadow-[0_20px_50px_rgba(45,102,246,0.1)] hover:border-brand/20 text-left transition-all group relative overflow-hidden"
                  >
                    {service.featured && (
                      <div className="absolute top-0 right-0">
                        <div className="bg-brand text-white text-[8px] font-black uppercase tracking-widest px-4 py-1.5 rounded-bl-xl flex items-center gap-1.5">
                          <Star className="w-2.5 h-2.5 fill-white" />
                          Featured
                        </div>
                      </div>
                    )}
                    <div className="flex gap-4 items-start">
                      <div className={`mt-1 p-2 rounded-lg transition-colors ${service.featured ? 'bg-brand-light text-brand' : 'bg-slate-50 text-slate-300'} group-hover:bg-brand group-hover:text-white`}>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900 text-lg mb-2 group-hover:text-brand transition-colors">{service.name}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed font-medium line-clamp-2">{service.desc}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Section Specific CTA */}
              {(cat.id === 'residential' || cat.id === 'commercial' || cat.id === 'epc') && (
                <div className="mt-12 bg-white rounded-[2.5rem] p-10 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
                  <div className="text-center md:text-left">
                    <h4 className="text-2xl font-black text-slate-900 mb-2">Interested in {cat.title}?</h4>
                    <p className="text-slate-500 font-medium">Get a free consultation and customized quote for your project.</p>
                  </div>
                  <div className="flex gap-4">
                    <button onClick={onOpenCalculator} className="bg-brand-light text-brand px-8 py-3 rounded-2xl font-black hover:bg-brand hover:text-white transition-all">
                      {cat.id === 'residential' ? 'Calculate Savings' : 'Get Quote'}
                    </button>
                    <button onClick={onOpenBooking} className="text-slate-600 font-bold hover:text-brand transition-colors">Contact Us</button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Final Help Section */}
        <div className="mt-32 bg-slate-900 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand opacity-10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Need Help Choosing?</h2>
            <p className="text-xl text-white/70 font-medium mb-12">
              Our solar experts are here to guide you to the perfect solution for your needs. We'll help you navigate subsidies, financing, and technical specifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={onOpenCalculator}
                className="bg-brand text-white px-10 py-5 rounded-[2rem] font-black text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3"
              >
                <Calculator className="w-6 h-6" />
                Start Calculating
              </button>
              <button 
                onClick={onOpenBooking}
                className="bg-white/10 text-white border border-white/20 px-10 py-5 rounded-[2rem] font-black text-xl backdrop-blur-md hover:bg-white/20 transition-all"
              >
                Contact Expert
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesPage;
