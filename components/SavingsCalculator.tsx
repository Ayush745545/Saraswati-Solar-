import React, { useState, useEffect } from 'react';
import { X, Calculator, Sun, Zap, BadgeCheck, Clock, ArrowRight, Info, TrendingUp, AlertTriangle } from 'lucide-react';

interface SavingsCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

const SavingsCalculator: React.FC<SavingsCalculatorProps> = ({ isOpen, onClose }) => {
  const [bill, setBill] = useState(2000);
  const [systemSize, setSystemSize] = useState(0);
  const [annualSavings, setAnnualSavings] = useState(0);
  const [dailyGen, setDailyGen] = useState(0);
  const [financials, setFinancials] = useState({ total: 0, subsidy: 0, net: 0, stateSubsidy: 0 });
  const [payback, setPayback] = useState({ central: "0", withState: "0" });

  // Constants for UP region (Updated for 2026 Reality)
  const UNIT_RATE = 7.0; // Real-world tariff avg (Reality: 1500-1600 savings for 2kW)
  const DAILY_GENERATION_PER_KW = 4; // units per day per kW
  const COST_PER_KW = 70000; // Market Reality: ~1.4L for 2kW
  
  // Standardized to 360 days (12 months * 30 days) for financial modeling
  const GENERATION_DAYS = 360; 

  useEffect(() => {
    // 1. Estimate units consumed based on bill
    const unitsConsumed = bill / UNIT_RATE;
    
    // 2. Calculate required system size (units / generation per kW)
    // Round up to nearest 1kW, minimum 1kW
    let size = (unitsConsumed / 30) / DAILY_GENERATION_PER_KW;
    size = Math.max(1, Math.ceil(size)); 
    
    // 3. Daily Generation
    const daily = size * DAILY_GENERATION_PER_KW;

    // 4. Annual Savings Calculation
    // Formula: Daily Units * 360 days * Rate
    const calculatedAnnualSavings = daily * GENERATION_DAYS * UNIT_RATE;
    
    // 5. Cost & Subsidy Calculation (PM Surya Ghar Yojana - Central Only)
    const totalCost = size * COST_PER_KW;
    
    let centralSubsidy = 0;
    // MNRE Subsidy Structure (Central)
    if (size === 1) {
        centralSubsidy = 30000;
    } else if (size === 2) {
        centralSubsidy = 60000;
    } else if (size >= 3) {
        centralSubsidy = 78000;
    }

    // UP State Subsidy Structure (Bonus)
    let stateSubsidy = 0;
    if (size === 1) {
        stateSubsidy = 15000;
    } else if (size >= 2) {
        // Capped at 30k typically for residential
        stateSubsidy = 30000;
    }

    const netCostCentral = totalCost - centralSubsidy;
    const netCostTotal = netCostCentral - stateSubsidy;

    // Payback Period Calculations
    // 1. Standard (Central Only)
    const paybackYearsCentral = netCostCentral / calculatedAnnualSavings;
    
    // 2. Best Case (With State Subsidy)
    const paybackYearsTotal = netCostTotal / calculatedAnnualSavings;

    setSystemSize(size);
    setAnnualSavings(calculatedAnnualSavings);
    setDailyGen(daily);
    setFinancials({
        total: totalCost,
        subsidy: centralSubsidy,
        net: netCostCentral,
        stateSubsidy: stateSubsidy
    });
    setPayback({
        central: paybackYearsCentral.toFixed(1),
        withState: paybackYearsTotal.toFixed(1)
    });

  }, [bill]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-blue-900 p-5 flex justify-between items-center text-white flex-shrink-0">
          <div className="flex items-center gap-3">
            <Calculator className="w-6 h-6 text-orange-400" />
            <div>
                <h3 className="text-xl font-bold leading-none">Solar Reality Check</h3>
                <p className="text-xs text-blue-300 mt-1">PM Surya Ghar Yojana 2025-26 Estimates</p>
            </div>
          </div>
          <button onClick={onClose} className="text-blue-200 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
          {/* Slider Section */}
          <div className="mb-8 bg-slate-50 p-6 rounded-xl border border-slate-100">
            <label className="block text-slate-700 font-bold mb-4 flex justify-between items-end">
              <span className="text-sm uppercase tracking-wider text-slate-500">Your Monthly Bill</span>
              <span className="text-blue-900 text-3xl font-extrabold">₹{bill.toLocaleString()}</span>
            </label>
            <input 
              type="range" 
              min="1000" 
              max="15000" 
              step="500" 
              value={bill} 
              onChange={(e) => setBill(parseInt(e.target.value))}
              className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500 hover:accent-orange-600 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500/50"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-3 font-medium">
              <span>₹1,000</span>
              <span>₹15,000+</span>
            </div>
          </div>

          {/* System Specs Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex flex-col items-center justify-center text-center">
                <Sun className="w-8 h-8 text-orange-500 mb-2" />
                <p className="text-slate-500 text-xs font-bold uppercase">System Size</p>
                <p className="text-2xl font-bold text-slate-900">{systemSize} kW</p>
            </div>
            <div className="bg-green-50 p-4 rounded-xl border border-green-100 flex flex-col items-center justify-center text-center">
                <Zap className="w-8 h-8 text-green-600 mb-2" />
                <p className="text-slate-500 text-xs font-bold uppercase">Daily Generation</p>
                <p className="text-2xl font-bold text-slate-900">{dailyGen} Units</p>
            </div>
          </div>

          {/* Savings Highlight */}
          <div className="bg-slate-900 text-white rounded-xl p-5 mb-8 shadow-lg flex items-center justify-between relative overflow-hidden">
             <div className="relative z-10">
                <p className="text-slate-400 text-[10px] md:text-xs font-bold uppercase mb-1">Annual Savings (at ₹{UNIT_RATE}/unit)</p>
                <p className="text-2xl md:text-3xl font-bold text-green-400">₹{annualSavings.toLocaleString()}</p>
             </div>
             <div className="h-10 w-px bg-slate-700 relative z-10"></div>
             <div className="relative z-10 text-right">
                <p className="text-slate-400 text-[10px] md:text-xs font-bold uppercase mb-1">Lifetime (25Y)</p>
                <p className="text-2xl md:text-3xl font-bold text-orange-400">₹{(annualSavings * 25).toLocaleString()}</p>
             </div>
          </div>

          {/* Price & Subsidy Breakdown (The "Truth") */}
          <div className="border-t border-slate-200 pt-6 mb-8">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Investment Reality Check</h4>
            <div className="space-y-3">
                <div className="flex justify-between items-center text-slate-600 font-medium">
                    <span>Initial System Cost</span>
                    <span>₹{financials.total.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between items-center text-green-700 font-medium bg-green-50 p-3 rounded-lg border border-green-100">
                    <div className="flex items-center gap-2">
                      <BadgeCheck className="w-5 h-5" /> 
                      <span className="text-sm">Central Govt. Subsidy</span>
                    </div>
                    <span>- ₹{financials.subsidy.toLocaleString()}</span>
                </div>

                <div className="flex justify-between items-center text-lg font-bold text-slate-900 pt-2 border-t border-dashed border-slate-300 mt-2">
                    <span>Effective Cost (Central)</span>
                    <span>₹{financials.net.toLocaleString()}</span>
                </div>

                {/* Payback Cards */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="bg-slate-100 p-3 rounded-lg border border-slate-200 flex flex-col items-center justify-center text-center">
                        <Clock className="w-4 h-4 text-slate-500 mb-1" />
                        <span className="text-xs text-slate-500 font-medium uppercase">Standard Payback</span>
                        <span className="text-lg font-bold text-slate-900">{payback.central} Years</span>
                    </div>
                    
                    <div className="bg-orange-50 p-3 rounded-lg border border-orange-200 flex flex-col items-center justify-center text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-orange-500 text-white text-[9px] px-2 py-0.5 rounded-bl-lg font-bold">
                            WITH UP SUBSIDY
                        </div>
                        <TrendingUp className="w-4 h-4 text-orange-600 mb-1" />
                        <span className="text-xs text-orange-800 font-medium uppercase">Bonus Payback</span>
                        <span className="text-lg font-bold text-orange-700">{payback.withState} Years</span>
                    </div>
                </div>

                {/* UP State Subsidy Note */}
                <div className="mt-2 flex items-start gap-2 text-xs text-blue-700 bg-blue-50 p-2.5 rounded-lg border border-blue-100">
                    <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>UP State Subsidy:</strong> An additional <strong>₹{financials.stateSubsidy.toLocaleString()}</strong> is available (subject to funds), reducing your final effective cost to <strong>₹{(financials.net - financials.stateSubsidy).toLocaleString()}</strong>.
                    </span>
                </div>

            </div>
          </div>

          {/* CTA */}
          <a 
            href="#contact"
            onClick={onClose}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-orange-500/20 transform hover:-translate-y-0.5"
          >
            Get Detailed Quote for {systemSize}kW
            <ArrowRight className="w-5 h-5" />
          </a>
          
          <div className="mt-4 flex gap-2 items-start text-[10px] text-slate-400 bg-slate-50 p-3 rounded-lg">
             <AlertTriangle className="w-4 h-4 flex-shrink-0 text-orange-400" />
             <p className="leading-relaxed">
               <strong>Reality Check:</strong> "Initial System Cost" is the amount you pay upfront to the vendor. Subsidies are credited to your bank account 30-45 days after installation. Estimates based on ₹{UNIT_RATE}/unit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingsCalculator;