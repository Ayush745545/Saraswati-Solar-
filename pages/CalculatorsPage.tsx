import React, { useState, useMemo } from 'react';
import { Calculator, Landmark, Zap, Sun, Banknote, ShieldCheck, ChevronRight, Info, AlertCircle, Percent, TrendingUp, ArrowRight, Building2, Home, Plus, Minus, CheckCircle2, BarChart3, BadgeCheck } from 'lucide-react';

interface CalculatorsPageProps {
  onOpenBooking: () => void;
}

const CalculatorsPage: React.FC<CalculatorsPageProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'financing' | 'load' | 'roi' | 'subsidy' | 'emi'>('financing');

  // ── FINANCING TOOL STATE ──
  const [sector, setSector] = useState<'residential' | 'commercial'>('residential');
  const [selectedState, setSelectedState] = useState('Uttar Pradesh');
  const [systemSize, setSystemSize] = useState(3);
  const [selectedProductId, setSelectedProductId] = useState('bob-standalone');

  // ── LOAD CALCULATOR STATE ──
  const [appliances, setAppliances] = useState([
    { name: 'LED Lights',       watts: 10,   qty: 8,  hours: 8,  icon: '💡' },
    { name: 'Ceiling Fans',     watts: 75,   qty: 4,  hours: 12, icon: '🌀' },
    { name: 'Refrigerator',     watts: 200,  qty: 1,  hours: 24, icon: '🧊' },
    { name: 'Television',       watts: 100,  qty: 1,  hours: 6,  icon: '📺' },
    { name: 'Washing Machine',  watts: 500,  qty: 1,  hours: 1,  icon: '🧺' },
    { name: 'Air Conditioner',  watts: 1500, qty: 0,  hours: 8,  icon: '❄️' },
    { name: 'Water Pump',       watts: 750,  qty: 0,  hours: 2,  icon: '💧' },
    { name: 'Microwave Oven',   watts: 1200, qty: 0,  hours: 0.5,icon: '🍽️' },
    { name: 'Iron',             watts: 1000, qty: 0,  hours: 0.5,icon: '👔' },
    { name: 'Computer / Laptop',watts: 150,  qty: 1,  hours: 6,  icon: '💻' },
  ]);

  // ── ROI TOOL STATE ──
  const [monthlyBill, setMonthlyBill] = useState(3000);
  const [roiSystemCost, setRoiSystemCost] = useState(180000);

  // ── SUBSIDY TOOL STATE ──
  const [subsidyKw, setSubsidyKw] = useState(3);
  const [subsidySector, setSubsidySector] = useState<'residential' | 'commercial'>('residential');

  // ── EMI TOOL STATE ──
  const [emiLoanAmount, setEmiLoanAmount] = useState(150000);
  const [emiInterestRate, setEmiInterestRate] = useState(7);
  const [emiTenure, setEmiTenure] = useState(7);

  // ── CONSTANTS ──
  const COST_PER_KW = 60000;
  const UNIT_RATE = 7.0;
  const DAILY_GEN_PER_KW = 4; // kWh per day per kW
  const GEN_DAYS = 360;

  const states = [
    "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", 
    "Dadra & Nagar Haveli and Daman & Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu & Kashmir", 
    "Jharkhand", "Karnataka", "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", 
    "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", 
    "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  const loanProducts = [
    { id: 'bob-standalone', bank: 'Bank of Baroda', name: 'PM Surya Ghar Yojana - Standalone', rate: '6% - 8.5%', rateNum: 7, maxTenure: 10, collateral: 'Free up to ₹6.0L', maxLoan: '₹6.0L', features: ['Zero Processing Fee', 'No Foreclosure Charges', '90% Financing'] },
    { id: 'sbi-surya', bank: 'State Bank of India', name: 'SBI Surya Shakti Loan', rate: '7% - 9%', rateNum: 8, maxTenure: 10, collateral: 'Collateral Free', maxLoan: '₹10.0L', features: ['Digital Processing', 'Dedicated Support', 'Fast Sanction'] },
    { id: 'pnb-solar', bank: 'Punjab National Bank', name: 'PNB Solar Loan', rate: '7.5% - 9.5%', rateNum: 8.5, maxTenure: 10, collateral: 'Free up to ₹5.0L', maxLoan: '₹5.0L', features: ['JanSamarth Listed', 'Quick Approval', '85% Financing'] },
    { id: 'icici-green', bank: 'ICICI Bank', name: 'Green Energy Loan', rate: '8% - 10%', rateNum: 9, maxTenure: 7, collateral: 'Collateral Free', maxLoan: '₹15.0L', features: ['Digital-First', 'Instant Pre-approval', 'Flexible Tenure'] },
  ];

  // ── SHARED SUBSIDY LOGIC ──
  const getSubsidy = (kw: number, type: 'residential' | 'commercial') => {
    if (type === 'commercial') return 0;
    if (kw <= 0) return 0;
    if (kw === 1) return 30000;
    if (kw === 2) return 60000;
    return 78000; // 3kW+ capped
  };

  // ── FINANCING CALCULATIONS ──
  const financialSummary = useMemo(() => {
    const costPerKw = sector === 'residential' ? COST_PER_KW : 55000;
    const totalCost = systemSize * costPerKw;
    const centralSubsidy = getSubsidy(systemSize, sector);
    const stateSubsidy = sector === 'residential' ? (systemSize >= 2 ? 30000 : 15000) : 0;
    const netCost = totalCost - centralSubsidy - stateSubsidy;
    const loanAmount = Math.round(netCost * 0.9);
    const contribution = Math.round(netCost * 0.1);
    const product = loanProducts.find(p => p.id === selectedProductId) || loanProducts[0];
    const r = product.rateNum / 100 / 12;
    const n = product.maxTenure * 12;
    const emi = loanAmount > 0 ? Math.round((loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)) : 0;
    return { totalCost, centralSubsidy, stateSubsidy, netCost, loanAmount, contribution, emi };
  }, [systemSize, sector, selectedProductId]);

  const selectedProduct = loanProducts.find(p => p.id === selectedProductId) || loanProducts[0];

  // ── LOAD CALCULATIONS ──
  const loadSummary = useMemo(() => {
    const totalWh = appliances.reduce((sum, a) => sum + (a.watts * a.qty * a.hours), 0);
    const totalKwh = totalWh / 1000;
    const requiredKw = Math.max(1, Math.ceil(totalKwh / DAILY_GEN_PER_KW));
    const estimatedCost = requiredKw * COST_PER_KW;
    const subsidy = getSubsidy(requiredKw, 'residential');
    return { totalKwh: Math.round(totalKwh * 10) / 10, requiredKw, estimatedCost, subsidy };
  }, [appliances]);

  // ── ROI CALCULATIONS ──
  const roiSummary = useMemo(() => {
    const unitsPerMonth = monthlyBill / UNIT_RATE;
    const suggestedKw = Math.max(1, Math.ceil((unitsPerMonth / 30) / DAILY_GEN_PER_KW));
    const annualSavings = suggestedKw * DAILY_GEN_PER_KW * GEN_DAYS * UNIT_RATE;
    const subsidy = getSubsidy(suggestedKw, 'residential');
    const netCost = roiSystemCost - subsidy;
    const paybackYears = netCost > 0 ? Math.round((netCost / annualSavings) * 10) / 10 : 0;
    const lifetimeSavings = annualSavings * 25;
    const lifetimeProfit = lifetimeSavings - netCost;
    return { suggestedKw, annualSavings, paybackYears, lifetimeSavings, lifetimeProfit, subsidy, netCost };
  }, [monthlyBill, roiSystemCost]);

  // ── SUBSIDY CALCULATIONS ──
  const subsidySummary = useMemo(() => {
    const totalCost = subsidyKw * COST_PER_KW;
    const centralSubsidy = getSubsidy(subsidyKw, subsidySector);
    const stateSubsidy = subsidySector === 'residential' ? (subsidyKw >= 2 ? 30000 : 15000) : 0;
    const netCost = totalCost - centralSubsidy - stateSubsidy;
    const savingsPercent = totalCost > 0 ? Math.round(((centralSubsidy + stateSubsidy) / totalCost) * 100) : 0;
    return { totalCost, centralSubsidy, stateSubsidy, netCost, savingsPercent };
  }, [subsidyKw, subsidySector]);

  // ── EMI CALCULATIONS ──
  const emiSummary = useMemo(() => {
    const r = emiInterestRate / 100 / 12;
    const n = emiTenure * 12;
    const emi = emiLoanAmount > 0 ? Math.round((emiLoanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)) : 0;
    const totalPayable = emi * n;
    const totalInterest = totalPayable - emiLoanAmount;
    return { emi, totalPayable, totalInterest };
  }, [emiLoanAmount, emiInterestRate, emiTenure]);

  // ── APPLIANCE HELPERS ──
  const updateAppliance = (index: number, field: 'qty' | 'hours', delta: number) => {
    setAppliances(prev => prev.map((a, i) => {
      if (i !== index) return a;
      const newVal = field === 'qty' ? Math.max(0, a.qty + delta) : Math.max(0, Math.round((a.hours + delta) * 10) / 10);
      return { ...a, [field]: newVal };
    }));
  };

  const tabLabels: Record<string, { label: string; icon: React.ReactNode }> = {
    financing: { label: 'Financing', icon: <Landmark className="w-4 h-4" /> },
    load:      { label: 'Power Load', icon: <Zap className="w-4 h-4" /> },
    roi:       { label: 'Savings & ROI', icon: <TrendingUp className="w-4 h-4" /> },
    subsidy:   { label: 'Subsidy Check', icon: <BadgeCheck className="w-4 h-4" /> },
    emi:       { label: 'EMI Calculator', icon: <Banknote className="w-4 h-4" /> },
  };

  return (
    <section className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
            Solar Energy <span className="text-brand">Tools</span>
          </h1>
          <p className="text-base text-slate-500 font-medium leading-relaxed">
            Estimate savings, subsidies, load, and financing in one place.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {(Object.keys(tabLabels) as Array<keyof typeof tabLabels>).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-6 py-3.5 rounded-2xl font-black transition-all text-xs flex items-center gap-2 ${
                activeTab === tab 
                ? 'bg-brand text-white shadow-xl shadow-brand/20 scale-105' 
                : 'bg-white text-slate-400 hover:bg-slate-50 border border-slate-100 hover:text-slate-600'
              }`}
            >
              {tabLabels[tab].icon}
              {tabLabels[tab].label}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-[3rem] shadow-[0_30px_70px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden">
          
          {/* ═══════════════════════════════════════════════════ */}
          {/* TOOL 1: FINANCING                                   */}
          {/* ═══════════════════════════════════════════════════ */}
          {activeTab === 'financing' && (
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-slate-100">
                <h2 className="text-3xl font-black text-slate-900 mb-10 flex items-center gap-3">
                  <Landmark className="w-8 h-8 text-brand" /> Financing
                </h2>
                <div className="space-y-10">
                  {/* Sector */}
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Sector</label>
                    <div className="flex bg-slate-100 p-1.5 rounded-2xl">
                      <button onClick={() => setSector('residential')} className={`flex-1 py-3 px-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${sector === 'residential' ? 'bg-white text-brand shadow-sm' : 'text-slate-500'}`}>
                        <Home className="w-4 h-4" /> Residential
                      </button>
                      <button onClick={() => setSector('commercial')} className={`flex-1 py-3 px-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${sector === 'commercial' ? 'bg-white text-brand shadow-sm' : 'text-slate-500'}`}>
                        <Building2 className="w-4 h-4" /> Commercial
                      </button>
                    </div>
                  </div>
                  {/* State */}
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">State</label>
                    <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)} className="w-full bg-slate-50 border border-slate-200 p-5 rounded-2xl font-bold text-slate-900 outline-none focus:border-brand focus:ring-4 focus:ring-brand/5 appearance-none cursor-pointer">
                      {states.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  {/* System Size */}
                  <div>
                    <div className="flex justify-between items-end mb-4">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">System Size: {systemSize} kW</label>
                    </div>
                    <input type="range" min="1" max="10" step="1" value={systemSize} onChange={(e) => setSystemSize(parseInt(e.target.value))} className="w-full h-3 bg-slate-100 rounded-full appearance-none cursor-pointer accent-brand" />
                    <div className="flex justify-between mt-2 text-[10px] font-bold text-slate-400"><span>1 kW</span><span>10 kW</span></div>
                  </div>
                  {/* Estimated Cost */}
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Estimated System Cost</div>
                    <div className="text-3xl font-black text-slate-900">₹{financialSummary.totalCost.toLocaleString()}</div>
                  </div>
                  {/* Select Loan Product */}
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Select Loan Product</label>
                    <select value={selectedProductId} onChange={(e) => setSelectedProductId(e.target.value)} className="w-full bg-slate-50 border border-slate-200 p-5 rounded-2xl font-bold text-slate-900 outline-none focus:border-brand focus:ring-4 focus:ring-brand/5 appearance-none cursor-pointer text-sm">
                      {loanProducts.map(p => <option key={p.id} value={p.id}>{p.bank} - {p.name} ({p.rate})</option>)}
                    </select>
                  </div>
                </div>
              </div>

              {/* Right: Results */}
              <div className="p-10 md:p-14 bg-slate-50/50 flex flex-col justify-between">
                <div>
                  {/* Bank Card */}
                  <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm mb-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-brand/5 flex items-center justify-center text-brand font-black text-lg">{selectedProduct.bank.split(' ').map(n => n[0]).join('')}</div>
                      <div>
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{selectedProduct.bank}</div>
                        <div className="text-base font-black text-slate-900">{selectedProduct.name}</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6 mb-6">
                      <div><div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Interest Rate</div><div className="text-lg font-black text-brand">{selectedProduct.rate}</div></div>
                      <div><div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Max Tenure</div><div className="text-lg font-black text-slate-900">{selectedProduct.maxTenure} years</div></div>
                      <div><div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Collateral</div><div className="text-sm font-bold text-slate-900">{selectedProduct.collateral}</div></div>
                      <div><div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Max Loan</div><div className="text-lg font-black text-slate-900">{selectedProduct.maxLoan}</div></div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.features.map((f, i) => (<span key={i} className="bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-tight flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5" />{f}</span>))}
                    </div>
                  </div>
                  {/* Summary Table */}
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center"><span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">System Cost</span><span className="font-black text-slate-900 text-lg">₹{financialSummary.totalCost.toLocaleString()}</span></div>
                    <div className="flex justify-between items-center py-3 border-y border-slate-100"><span className="text-emerald-600 font-bold uppercase tracking-widest text-[10px]">Central Subsidy</span><span className="font-black text-emerald-600">- ₹{financialSummary.centralSubsidy.toLocaleString()}</span></div>
                    <div className="flex justify-between items-center py-3 border-b border-slate-100"><span className="text-emerald-600 font-bold uppercase tracking-widest text-[10px]">State Subsidy</span><span className="font-black text-emerald-600">- ₹{financialSummary.stateSubsidy.toLocaleString()}</span></div>
                    <div className="flex justify-between items-center pt-2"><span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Net Cost</span><span className="font-black text-slate-900 text-2xl">₹{financialSummary.netCost.toLocaleString()}</span></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white p-5 rounded-3xl border border-brand/10 text-center"><div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Loan Amount (90%)</div><div className="text-xl font-black text-brand">₹{financialSummary.loanAmount.toLocaleString()}</div></div>
                    <div className="bg-white p-5 rounded-3xl border border-slate-100 text-center"><div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Your Contribution (10%)</div><div className="text-xl font-black text-slate-900">₹{financialSummary.contribution.toLocaleString()}</div></div>
                  </div>
                </div>
                {/* EMI Result */}
                <div>
                  <div className="bg-brand rounded-[2.5rem] p-8 text-white relative overflow-hidden mb-6 shadow-2xl shadow-brand/20">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                    <div className="relative z-10 flex items-center justify-between">
                      <div><div className="text-[10px] font-black text-white/50 uppercase tracking-[0.2em] mb-2">Monthly EMI</div><div className="text-5xl font-black">₹{financialSummary.emi.toLocaleString()}</div></div>
                      <button onClick={onOpenBooking} className="bg-white text-brand px-6 py-4 rounded-2xl font-black hover:scale-105 transition-all text-sm shadow-xl">Apply Now</button>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 p-4 rounded-2xl border border-emerald-100">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <p className="text-xs font-black uppercase tracking-wider">Save up to ₹{(financialSummary.centralSubsidy + financialSummary.stateSubsidy).toLocaleString()} with government subsidies!</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ═══════════════════════════════════════════════════ */}
          {/* TOOL 2: POWER LOAD CALCULATOR                      */}
          {/* ═══════════════════════════════════════════════════ */}
          {activeTab === 'load' && (
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="lg:col-span-2 p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-slate-100">
                <h2 className="text-3xl font-black text-slate-900 mb-3 flex items-center gap-3"><Zap className="w-8 h-8 text-brand" /> Power Load Calculator</h2>
                <p className="text-slate-500 font-medium mb-10">Select your appliances, quantities, and usage hours to estimate solar capacity needed.</p>

                <div className="space-y-4">
                  {/* Table Header */}
                  <div className="grid grid-cols-12 gap-4 px-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    <div className="col-span-4">Appliance</div>
                    <div className="col-span-2 text-center">Watts</div>
                    <div className="col-span-3 text-center">Quantity</div>
                    <div className="col-span-3 text-center">Hours/Day</div>
                  </div>

                  {appliances.map((a, i) => (
                    <div key={i} className={`grid grid-cols-12 gap-4 items-center p-4 rounded-2xl border transition-all ${a.qty > 0 ? 'bg-brand/[0.02] border-brand/10' : 'bg-slate-50 border-slate-100'}`}>
                      <div className="col-span-4 flex items-center gap-3">
                        <span className="text-2xl">{a.icon}</span>
                        <span className="font-bold text-slate-900 text-sm">{a.name}</span>
                      </div>
                      <div className="col-span-2 text-center text-sm text-slate-500 font-bold">{a.watts}W</div>
                      <div className="col-span-3 flex items-center justify-center gap-2">
                        <button onClick={() => updateAppliance(i, 'qty', -1)} className="w-8 h-8 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-slate-400 hover:text-red-500 hover:border-red-200 transition-colors"><Minus className="w-3.5 h-3.5" /></button>
                        <span className="w-8 text-center font-black text-slate-900">{a.qty}</span>
                        <button onClick={() => updateAppliance(i, 'qty', 1)} className="w-8 h-8 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-slate-400 hover:text-brand hover:border-brand/30 transition-colors"><Plus className="w-3.5 h-3.5" /></button>
                      </div>
                      <div className="col-span-3 flex items-center justify-center gap-2">
                        <button onClick={() => updateAppliance(i, 'hours', -0.5)} className="w-8 h-8 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-slate-400 hover:text-red-500 hover:border-red-200 transition-colors"><Minus className="w-3.5 h-3.5" /></button>
                        <span className="w-10 text-center font-black text-slate-900 text-sm">{a.hours}h</span>
                        <button onClick={() => updateAppliance(i, 'hours', 0.5)} className="w-8 h-8 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-slate-400 hover:text-brand hover:border-brand/30 transition-colors"><Plus className="w-3.5 h-3.5" /></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Sidebar: Results */}
              <div className="p-10 md:p-14 bg-slate-50/50 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-8">Load Summary</h3>
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-3xl border border-slate-100 text-center">
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Daily Consumption</div>
                      <div className="text-3xl font-black text-slate-900">{loadSummary.totalKwh} <span className="text-lg text-slate-400">kWh</span></div>
                    </div>
                    <div className="bg-brand rounded-3xl p-6 text-center text-white shadow-xl shadow-brand/20">
                      <div className="text-[10px] font-black text-white/50 uppercase tracking-widest mb-2">Recommended System</div>
                      <div className="text-5xl font-black">{loadSummary.requiredKw} <span className="text-xl text-white/60">kW</span></div>
                    </div>
                    <div className="bg-white p-6 rounded-3xl border border-slate-100 text-center">
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Estimated Cost</div>
                      <div className="text-2xl font-black text-slate-900">₹{loadSummary.estimatedCost.toLocaleString()}</div>
                    </div>
                    <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-100 text-center">
                      <div className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-2">Eligible Subsidy</div>
                      <div className="text-2xl font-black text-emerald-600">₹{loadSummary.subsidy.toLocaleString()}</div>
                    </div>
                  </div>
                </div>
                <button onClick={onOpenBooking} className="mt-10 w-full bg-brand text-white px-8 py-5 rounded-2xl font-black shadow-xl hover:shadow-brand/20 transition-all flex items-center justify-center gap-2">
                  Get Quote for {loadSummary.requiredKw}kW System <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* ═══════════════════════════════════════════════════ */}
          {/* TOOL 3: SAVINGS & ROI                              */}
          {/* ═══════════════════════════════════════════════════ */}
          {activeTab === 'roi' && (
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-slate-100">
                <h2 className="text-3xl font-black text-slate-900 mb-3 flex items-center gap-3"><TrendingUp className="w-8 h-8 text-brand" /> Savings & ROI</h2>
                <p className="text-slate-500 font-medium mb-10">See how quickly your solar system pays for itself and the lifetime profit.</p>
                <div className="space-y-10">
                  <div>
                    <div className="flex justify-between items-end mb-4">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Monthly Electricity Bill</label>
                      <span className="text-brand text-3xl font-black">₹{monthlyBill.toLocaleString()}</span>
                    </div>
                    <input type="range" min="500" max="15000" step="500" value={monthlyBill} onChange={(e) => setMonthlyBill(parseInt(e.target.value))} className="w-full h-3 bg-slate-100 rounded-full appearance-none cursor-pointer accent-brand" />
                    <div className="flex justify-between mt-2 text-[10px] font-bold text-slate-400"><span>₹500</span><span>₹15,000</span></div>
                  </div>
                  <div>
                    <div className="flex justify-between items-end mb-4">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">System Cost (₹)</label>
                      <span className="text-slate-900 text-2xl font-black">₹{roiSystemCost.toLocaleString()}</span>
                    </div>
                    <input type="range" min="60000" max="600000" step="10000" value={roiSystemCost} onChange={(e) => setRoiSystemCost(parseInt(e.target.value))} className="w-full h-3 bg-slate-100 rounded-full appearance-none cursor-pointer accent-brand" />
                    <div className="flex justify-between mt-2 text-[10px] font-bold text-slate-400"><span>₹60k</span><span>₹6.0L</span></div>
                  </div>

                  {/* Info Row */}
                  <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100 flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div className="text-xs text-blue-700 font-bold leading-relaxed">
                      Based on 1kW = 4 units/day at ₹{UNIT_RATE}/unit tariff. Suggested system: <strong>{roiSummary.suggestedKw}kW</strong>. Eligible PM Surya Ghar subsidy: <strong>₹{roiSummary.subsidy.toLocaleString()}</strong>.
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: ROI Dashboard */}
              <div className="p-10 md:p-14 bg-slate-50/50 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-8">ROI Dashboard</h3>
                  {/* Payback Visual */}
                  <div className="bg-white p-6 rounded-3xl border border-slate-100 mb-8">
                    <div className="flex justify-between text-[10px] text-slate-400 font-black uppercase tracking-widest mb-3"><span>Investment</span><span>25 Year Panel Life</span></div>
                    <div className="w-full h-5 bg-slate-100 rounded-full overflow-hidden relative">
                      <div className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full transition-all duration-700" style={{ width: `${Math.min((roiSummary.paybackYears / 25) * 100, 100)}%` }}></div>
                    </div>
                    <div className="flex justify-between text-[10px] mt-2"><span className="text-orange-600 font-black">← Payback: {roiSummary.paybackYears} yrs</span><span className="text-emerald-600 font-black">Free Electricity →</span></div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-orange-50 p-6 rounded-3xl border border-orange-100 text-center">
                      <div className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-2">Years to Payback</div>
                      <div className="text-4xl font-black text-orange-600">{roiSummary.paybackYears}</div>
                    </div>
                    <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-100 text-center">
                      <div className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-2">Annual Savings</div>
                      <div className="text-2xl font-black text-emerald-600">₹{roiSummary.annualSavings.toLocaleString()}</div>
                    </div>
                  </div>

                  <div className="bg-brand rounded-3xl p-8 text-white shadow-2xl shadow-brand/20 mb-8">
                    <div className="text-[10px] font-black text-white/50 uppercase tracking-[0.2em] mb-2">25-Year Lifetime Savings</div>
                    <div className="text-4xl font-black">₹{roiSummary.lifetimeSavings.toLocaleString()}</div>
                    <div className="mt-4 pt-4 border-t border-white/10 flex justify-between">
                      <span className="text-white/50 text-xs font-bold">Net Profit (After Cost)</span>
                      <span className="text-xl font-black text-emerald-300">₹{roiSummary.lifetimeProfit.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                <button onClick={onOpenBooking} className="w-full bg-brand text-white px-8 py-5 rounded-2xl font-black shadow-xl hover:shadow-brand/20 transition-all flex items-center justify-center gap-2">
                  Get Free Consultation <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* ═══════════════════════════════════════════════════ */}
          {/* TOOL 4: SUBSIDY CHECK                              */}
          {/* ═══════════════════════════════════════════════════ */}
          {activeTab === 'subsidy' && (
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-slate-100">
                <h2 className="text-3xl font-black text-slate-900 mb-3 flex items-center gap-3"><BadgeCheck className="w-8 h-8 text-brand" /> Subsidy Check</h2>
                <p className="text-slate-500 font-medium mb-10">Check your eligibility under PM Surya Ghar Muft Bijli Yojana.</p>
                <div className="space-y-10">
                  {/* Sector */}
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Category</label>
                    <div className="flex bg-slate-100 p-1.5 rounded-2xl">
                      <button onClick={() => setSubsidySector('residential')} className={`flex-1 py-3 px-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${subsidySector === 'residential' ? 'bg-white text-brand shadow-sm' : 'text-slate-500'}`}>
                        <Home className="w-4 h-4" /> Residential
                      </button>
                      <button onClick={() => setSubsidySector('commercial')} className={`flex-1 py-3 px-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${subsidySector === 'commercial' ? 'bg-white text-brand shadow-sm' : 'text-slate-500'}`}>
                        <Building2 className="w-4 h-4" /> Commercial
                      </button>
                    </div>
                  </div>
                  {/* kW select */}
                  <div>
                    <div className="flex justify-between items-end mb-4">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">System Size</label>
                      <span className="text-brand text-3xl font-black">{subsidyKw} kW</span>
                    </div>
                    <input type="range" min="1" max="10" step="1" value={subsidyKw} onChange={(e) => setSubsidyKw(parseInt(e.target.value))} className="w-full h-3 bg-slate-100 rounded-full appearance-none cursor-pointer accent-brand" />
                    <div className="flex justify-between mt-2 text-[10px] font-bold text-slate-400"><span>1 kW</span><span>10 kW</span></div>
                  </div>

                  {/* Subsidy Rules Table */}
                  <div className="bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden">
                    <div className="px-6 py-4 bg-slate-100 text-[10px] font-black text-slate-500 uppercase tracking-widest">PM Surya Ghar Subsidy Slab (Residential)</div>
                    <div className="divide-y divide-slate-100">
                      <div className="px-6 py-4 flex justify-between items-center"><span className="font-bold text-slate-700">0 – 1 kW</span><span className="font-black text-brand">₹30,000 /kW</span></div>
                      <div className="px-6 py-4 flex justify-between items-center"><span className="font-bold text-slate-700">1 – 2 kW</span><span className="font-black text-brand">₹30,000 /kW</span></div>
                      <div className="px-6 py-4 flex justify-between items-center"><span className="font-bold text-slate-700">2 – 3 kW</span><span className="font-black text-brand">₹18,000 /kW</span></div>
                      <div className="px-6 py-4 flex justify-between items-center bg-orange-50"><span className="font-bold text-orange-700">3 kW+ (Capped)</span><span className="font-black text-orange-600">Max ₹78,000</span></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Subsidy Results */}
              <div className="p-10 md:p-14 bg-slate-50/50 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-8">Your Subsidy Breakdown</h3>

                  {subsidySector === 'commercial' ? (
                    <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100 text-center mb-8">
                      <AlertCircle className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                      <h4 className="text-xl font-black text-orange-700 mb-2">No Direct Subsidy</h4>
                      <p className="text-sm text-orange-600 font-medium">Commercial & Industrial installations are not eligible for PM Surya Ghar subsidy. However, they qualify for <strong>Accelerated Depreciation (40%)</strong> and <strong>tax benefits</strong>.</p>
                    </div>
                  ) : (
                    <>
                      <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100 text-center mb-8 shadow-sm">
                        <div className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-2">Central Government Subsidy</div>
                        <div className="text-5xl font-black text-emerald-600">₹{subsidySummary.centralSubsidy.toLocaleString()}</div>
                      </div>
                      <div className="bg-blue-50 rounded-3xl p-6 border border-blue-100 text-center mb-8">
                        <div className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-2">State Top-Up (Est.)</div>
                        <div className="text-3xl font-black text-blue-600">₹{subsidySummary.stateSubsidy.toLocaleString()}</div>
                      </div>
                    </>
                  )}

                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center"><span className="text-slate-500 font-bold text-sm">System Cost</span><span className="font-black text-slate-900">₹{subsidySummary.totalCost.toLocaleString()}</span></div>
                    <div className="flex justify-between items-center py-3 border-y border-slate-100"><span className="text-emerald-600 font-bold text-sm">Total Subsidy</span><span className="font-black text-emerald-600">- ₹{(subsidySummary.centralSubsidy + subsidySummary.stateSubsidy).toLocaleString()}</span></div>
                    <div className="flex justify-between items-center"><span className="text-slate-900 font-black text-sm">You Pay</span><span className="font-black text-slate-900 text-2xl">₹{subsidySummary.netCost.toLocaleString()}</span></div>
                  </div>

                  {subsidySector === 'residential' && (
                    <div className="bg-brand rounded-3xl p-6 text-white text-center shadow-xl shadow-brand/20">
                      <div className="text-[10px] font-black text-white/60 uppercase tracking-widest mb-1">You Save</div>
                      <div className="text-4xl font-black">{subsidySummary.savingsPercent}%</div>
                      <div className="text-white/60 text-xs font-bold mt-1">of your total system cost</div>
                    </div>
                  )}
                </div>
                <button onClick={onOpenBooking} className="mt-10 w-full bg-brand text-white px-8 py-5 rounded-2xl font-black shadow-xl hover:shadow-brand/20 transition-all flex items-center justify-center gap-2">
                  Apply for Subsidy <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* ═══════════════════════════════════════════════════ */}
          {/* TOOL 5: EMI CALCULATOR                             */}
          {/* ═══════════════════════════════════════════════════ */}
          {activeTab === 'emi' && (
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-slate-100">
                <h2 className="text-3xl font-black text-slate-900 mb-3 flex items-center gap-3"><Banknote className="w-8 h-8 text-brand" /> EMI Calculator</h2>
                <p className="text-slate-500 font-medium mb-10">Adjust loan parameters to calculate your monthly installment.</p>
                <div className="space-y-10">
                  {/* Loan Amount */}
                  <div>
                    <div className="flex justify-between items-end mb-4">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Loan Amount</label>
                      <span className="text-brand text-3xl font-black">₹{emiLoanAmount.toLocaleString()}</span>
                    </div>
                    <input type="range" min="50000" max="1000000" step="10000" value={emiLoanAmount} onChange={(e) => setEmiLoanAmount(parseInt(e.target.value))} className="w-full h-3 bg-slate-100 rounded-full appearance-none cursor-pointer accent-brand" />
                    <div className="flex justify-between mt-2 text-[10px] font-bold text-slate-400"><span>₹50k</span><span>₹10.0L</span></div>
                  </div>
                  {/* Interest Rate */}
                  <div>
                    <div className="flex justify-between items-end mb-4">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Interest Rate</label>
                      <span className="text-orange-600 text-3xl font-black">{emiInterestRate}%</span>
                    </div>
                    <input type="range" min="6" max="13" step="0.5" value={emiInterestRate} onChange={(e) => setEmiInterestRate(parseFloat(e.target.value))} className="w-full h-3 bg-slate-100 rounded-full appearance-none cursor-pointer accent-orange-500" />
                    <div className="flex justify-between mt-2 text-[10px] font-bold text-slate-400"><span>6%</span><span>13%</span></div>
                  </div>
                  {/* Tenure */}
                  <div>
                    <div className="flex justify-between items-end mb-4">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Loan Tenure</label>
                      <span className="text-slate-900 text-3xl font-black">{emiTenure} <span className="text-lg text-slate-400">Years</span></span>
                    </div>
                    <input type="range" min="1" max="10" step="1" value={emiTenure} onChange={(e) => setEmiTenure(parseInt(e.target.value))} className="w-full h-3 bg-slate-100 rounded-full appearance-none cursor-pointer accent-brand" />
                    <div className="flex justify-between mt-2 text-[10px] font-bold text-slate-400"><span>1 Year</span><span>10 Years</span></div>
                  </div>
                </div>
              </div>

              {/* Right: EMI Dashboard */}
              <div className="p-10 md:p-14 bg-slate-50/50 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-8">EMI Breakdown</h3>

                  <div className="bg-brand rounded-[2.5rem] p-10 text-white relative overflow-hidden mb-10 shadow-2xl shadow-brand/20">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                    <div className="relative z-10 text-center">
                      <div className="text-[10px] font-black text-white/50 uppercase tracking-[0.2em] mb-3">Your Monthly EMI</div>
                      <div className="text-6xl font-black">₹{emiSummary.emi.toLocaleString()}</div>
                    </div>
                  </div>

                  <div className="space-y-4 mb-10">
                    <div className="flex justify-between items-center p-5 bg-white rounded-2xl border border-slate-100">
                      <span className="text-slate-500 font-bold text-sm">Principal Loan Amount</span>
                      <span className="font-black text-slate-900 text-lg">₹{emiLoanAmount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center p-5 bg-orange-50 rounded-2xl border border-orange-100">
                      <span className="text-orange-600 font-bold text-sm">Total Interest Payable</span>
                      <span className="font-black text-orange-600 text-lg">₹{emiSummary.totalInterest.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center p-5 bg-slate-100 rounded-2xl border border-slate-200">
                      <span className="text-slate-700 font-bold text-sm">Total Amount Payable</span>
                      <span className="font-black text-slate-900 text-lg">₹{emiSummary.totalPayable.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Visual Breakdown */}
                  <div className="bg-white p-6 rounded-3xl border border-slate-100">
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Principal vs Interest</div>
                    <div className="w-full h-6 bg-slate-100 rounded-full overflow-hidden flex">
                      <div className="h-full bg-brand rounded-l-full transition-all duration-500" style={{ width: `${emiSummary.totalPayable > 0 ? (emiLoanAmount / emiSummary.totalPayable) * 100 : 0}%` }}></div>
                      <div className="h-full bg-orange-400 rounded-r-full transition-all duration-500" style={{ width: `${emiSummary.totalPayable > 0 ? (emiSummary.totalInterest / emiSummary.totalPayable) * 100 : 0}%` }}></div>
                    </div>
                    <div className="flex justify-between mt-3 text-xs">
                      <span className="flex items-center gap-2 font-bold text-brand"><span className="w-3 h-3 bg-brand rounded-full inline-block"></span>Principal ({emiSummary.totalPayable > 0 ? Math.round((emiLoanAmount / emiSummary.totalPayable) * 100) : 0}%)</span>
                      <span className="flex items-center gap-2 font-bold text-orange-500"><span className="w-3 h-3 bg-orange-400 rounded-full inline-block"></span>Interest ({emiSummary.totalPayable > 0 ? Math.round((emiSummary.totalInterest / emiSummary.totalPayable) * 100) : 0}%)</span>
                    </div>
                  </div>
                </div>

                <button onClick={onOpenBooking} className="mt-10 w-full bg-brand text-white px-8 py-5 rounded-2xl font-black shadow-xl hover:shadow-brand/20 transition-all flex items-center justify-center gap-2">
                  Apply for Solar Loan <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Trust Bar */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col items-center text-center">
            <Percent className="w-10 h-10 text-orange-500 mb-6" />
            <h4 className="text-xl font-black text-slate-900 mb-4">Precision Logic</h4>
            <p className="text-slate-500 text-sm font-medium">Calculations based on PM Surya Ghar Yojana 2025-26 official guidelines and MNRE standards.</p>
          </div>
          <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col items-center text-center">
            <BarChart3 className="w-10 h-10 text-brand mb-6" />
            <h4 className="text-xl font-black text-slate-900 mb-4">Real-Time Data</h4>
            <p className="text-slate-500 text-sm font-medium">Updated interest rates from SBI, Bank of Baroda, PNB, and ICICI Bank solar loan products.</p>
          </div>
          <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col items-center text-center">
            <TrendingUp className="w-10 h-10 text-emerald-600 mb-6" />
            <h4 className="text-xl font-black text-slate-900 mb-4">Instant ROI</h4>
            <p className="text-slate-500 text-sm font-medium">Verify your payback period including state top-ups, tax benefits, and generation estimates.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CalculatorsPage;
