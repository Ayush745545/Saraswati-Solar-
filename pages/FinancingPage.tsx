import React, { useState } from 'react';
import { Calculator, ArrowRight, Building2, Percent, Gift, CheckCircle2, ChevronRight, ShieldCheck, Zap, Wallet, Landmark, Info } from 'lucide-react';

interface FinancingPageProps {
  onOpenCalculator: () => void;
}

const FinancingPage: React.FC<FinancingPageProps> = ({ onOpenCalculator }) => {
  const [activeTab, setActiveTab] = useState<'psb' | 'private' | 'nbfc' | 'govt'>('psb');

  const stats = [
    { label: "Banks & NBFCs", value: "20+" },
    { label: "Loan Products", value: "16" },
    { label: "Starting Interest", value: "6%" },
    { label: "Max Subsidy", value: "₹78k" },
  ];

  const lenderData = {
    psb: {
      title: "Public Sector Banks",
      subtitle: "10 PSBs offering competitive rates",
      lenders: [
        { name: "State Bank of India", code: "SBI", tag: "Government Backed" },
        { name: "Punjab National Bank", code: "PNB", tag: "Government Backed" },
        { name: "Union Bank of India", code: "Union Bank", tag: "Government Backed" },
        { name: "Bank of Baroda", code: "BoB", tag: "Government Backed" },
        { name: "Canara Bank", code: "Canara", tag: "Government Backed" },
        { name: "Bank of India", code: "BOI", tag: "Government Backed" },
        { name: "Indian Bank", code: "Indian Bank", tag: "Government Backed" },
        { name: "UCO Bank", code: "UCO", tag: "Government Backed" },
        { name: "Central Bank of India", code: "CBI", tag: "Government Backed" },
        { name: "Bank of Maharashtra", code: "BoM", tag: "Government Backed" },
      ]
    },
    private: {
      title: "Private Sector Banks",
      subtitle: "5 private banks with digital-first approach",
      lenders: [
        { name: "ICICI Bank", code: "ICICI", tag: "Fast Digital Approval" },
        { name: "HDFC Bank", code: "HDFC", tag: "Fast Digital Approval" },
        { name: "Axis Bank", code: "Axis", tag: "Fast Digital Approval" },
        { name: "IDBI Bank", code: "IDBI", tag: "Fast Digital Approval" },
        { name: "Yes Bank", code: "Yes Bank", tag: "Fast Digital Approval" },
      ]
    },
    nbfc: {
      title: "NBFCs & Fintechs",
      subtitle: "4 specialized lenders for solar projects",
      lenders: [
        { name: "Electronica Finance Ltd", code: "EFL", tag: "Flexible Terms" },
        { name: "Ecofy", code: "Ecofy", tag: "Flexible Terms" },
        { name: "Credit Fair", code: "Credit Fair", tag: "Flexible Terms" },
        { name: "Tata Capital", code: "Tata Capital", tag: "Flexible Terms" },
      ]
    },
    govt: {
      title: "Government Institutions",
      subtitle: "Specialized MSME financing",
      lenders: [
        { name: "Small Industries Development Bank of India", code: "SIDBI", tag: "MSME Focus" },
      ]
    }
  };

  const features = [
    {
      icon: <Building2 className="w-6 h-6 text-brand" />,
      title: "Banks & Lenders",
      desc: "Explore 20+ financial institutions offering solar loans - from PSBs to NBFCs",
      list: ["Public Sector Banks", "Private Banks", "NBFCs & Fintechs"],
      linkText: "View All Banks",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Percent className="w-6 h-6 text-orange-600" />,
      title: "Loan Products",
      desc: "Compare 16 loan products with interest rates from 6% to 14%",
      list: ["Collateral-Free Options", "Up to 10 Years Tenure", "Digital Approval"],
      linkText: "Compare Loans",
      bgColor: "bg-orange-50"
    },
    {
      icon: <Gift className="w-6 h-6 text-green-600" />,
      title: "Subsidies & Incentives",
      desc: "Get up to ₹78,000 central subsidy + state top-ups",
      list: ["PM Surya Ghar Scheme", "State-wise Top-ups", "Tax Benefits for C&I"],
      linkText: "View Subsidies",
      bgColor: "bg-green-50"
    }
  ];

  const steps = [
    {
      title: "Calculate Your Requirements",
      desc: "Use our financing calculator to determine your system size, cost, and subsidy eligibility"
    },
    {
      title: "Compare Loan Options",
      desc: "Browse through 16 loan products from 20+ lenders and find the best interest rates and terms"
    },
    {
      title: "Apply for Subsidy",
      desc: "Register on PM Surya Ghar portal and claim your central + state subsidies"
    },
    {
      title: "Get Your Solar System",
      desc: "Install your system with minimal upfront cost and start saving on electricity bills"
    }
  ];

  return (
    <section className="pt-20 bg-slate-50/50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-orange-600 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
            Solar Financing <br />Made Simple
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-medium mb-12 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Compare 20+ banks, get up to ₹78,000 subsidy, and find the perfect loan for your solar project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <button 
              onClick={onOpenCalculator}
              className="bg-white text-brand px-10 py-5 rounded-2xl font-black text-lg shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3"
            >
              <Calculator className="w-5 h-5" />
              Calculate Financing
            </button>
            <button className="bg-transparent text-white border-2 border-white/40 px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 group">
              Compare Loans
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-50 text-center flex flex-col items-center justify-center transform hover:-translate-y-1 transition-transform duration-300">
              <p className="text-4xl md:text-5xl font-black text-brand mb-2">{stat.value}</p>
              <p className="text-slate-400 font-bold text-sm uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-10 md:p-12 rounded-[3.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.03)] border border-slate-50 group hover:shadow-[0_30px_70px_rgba(45,102,246,0.1)] transition-all duration-500">
              <div className={`${feature.bgColor} w-16 h-16 rounded-[1.5rem] flex items-center justify-center mb-8`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-6">{feature.title}</h3>
              <p className="text-slate-500 font-medium mb-10 leading-relaxed text-lg">{feature.desc}</p>
              <ul className="space-y-4 mb-10">
                {feature.list.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-bold">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="text-brand font-black group-hover:gap-3 transition-all flex items-center gap-2">
                {feature.linkText}
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Banks & Lenders Section (NEW) */}
      <div id="banks" className="bg-white py-24 md:py-32 border-y border-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Solar Financing Banks & Lenders</h2>
            <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">20 trusted financial institutions offering solar loans across India</p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {(['psb', 'private', 'nbfc', 'govt'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-4 rounded-2xl font-black transition-all ${
                  activeTab === tab 
                  ? 'bg-brand text-white shadow-xl shadow-brand/20 scale-105' 
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                }`}
              >
                {lenderData[tab].title}
              </button>
            ))}
          </div>

          {/* Lender Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 animate-in fade-in duration-500">
            {lenderData[activeTab].lenders.map((lender, index) => (
              <div key={index} className="bg-white border border-slate-100 p-8 rounded-[2.5rem] text-center hover:shadow-xl hover:border-brand/20 transition-all group overflow-hidden relative">
                 <div className="absolute top-0 right-0">
                    <div className="bg-brand text-white text-[8px] font-black uppercase tracking-widest px-3 py-1.5 rounded-bl-xl flex items-center gap-1.5">
                      JanSamarth
                    </div>
                 </div>
                 <div className="text-4xl font-black text-slate-900 mb-2 group-hover:text-brand transition-colors">{lender.code}</div>
                 <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-6 px-2 truncate" title={lender.name}>{lender.name}</div>
                 <div className="inline-flex items-center gap-1.5 bg-brand-light text-brand px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tight">
                    <ShieldCheck className="w-3 h-3" />
                    {lender.tag}
                 </div>
              </div>
            ))}
          </div>

          {/* Compare Loan Products CTA */}
          <div className="mt-20 bg-slate-50 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 border border-white">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-black text-slate-900 mb-4">Compare Loan Products</h3>
              <p className="text-slate-500 font-medium text-lg leading-relaxed">
                View detailed loan products from all these lenders with interest rates, tenure, and features
              </p>
            </div>
            <button className="bg-white text-brand border border-brand/20 px-10 py-5 rounded-2xl font-black text-lg shadow-sm hover:bg-brand hover:text-white hover:shadow-xl transition-all flex items-center gap-2">
              View All Loans
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-white py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">How Solar Financing Works</h2>
          </div>
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-8 items-start group">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-brand text-white font-black text-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-black text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed text-lg">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-gradient-to-r from-brand to-orange-600 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-[0_40px_100px_rgba(37,99,235,0.25)]">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Ready to Go Solar?</h2>
            <p className="text-xl text-white/80 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
              Use our financing calculator to get personalized loan and subsidy estimates
            </p>
            <button 
              onClick={onOpenCalculator}
              className="bg-white text-brand px-12 py-5 rounded-3xl font-black text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 mx-auto"
            >
              <Calculator className="w-6 h-6" />
              Start Calculating
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancingPage;
