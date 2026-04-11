import React, { useState } from 'react';
import { X, User, MapPin, FileText, CheckCircle2, ChevronRight, Lock, Zap, ShieldCheck, ArrowLeft, Loader2 } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    city: '',
    bill: '₹2500 - ₹5000',
    roofType: 'Concrete (Flat)',
    comments: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const steps = [
    { id: 1, label: 'Details', sub: 'Personal', icon: User },
    { id: 2, label: 'Site Info', sub: 'Install', icon: MapPin },
    { id: 3, label: 'Check', sub: 'Review', icon: FileText },
    { id: 4, label: 'Done', sub: 'Complete', icon: CheckCircle2 },
  ];

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(prev => Math.min(prev + 1, 4));
  };

  const handleBack = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Construct WhatsApp message with form details
    const message = `*New Solar Inquiry from Website*
    
Name: ${formData.fullName}
Mobile: ${formData.mobile}
Email: ${formData.email || 'Not Provided'}
City: ${formData.city}
Bill: ${formData.bill}
Roof Type: ${formData.roofType}

*Inquiry ID:* SAR-${Math.floor(1000 + Math.random() * 9000)}`;

    // Encode and open WhatsApp
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919897147441?text=${encodedMessage}`, '_blank');

    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setStep(4);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-5xl h-full sm:h-auto sm:min-h-[600px] md:h-[650px] sm:rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in zoom-in-95 duration-300 ring-1 ring-white/10">
        
        {/* Left Sidebar (Dark Blue) */}
        <div className="w-full md:w-80 bg-[#0B1C3E] p-8 text-white flex flex-col justify-between relative overflow-hidden flex-shrink-0">
          {/* Decorative gradients */}
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none translate-x-1/3 translate-y-1/3"></div>

          <div className="relative z-10">
            <h2 className="text-2xl font-black mb-2 tracking-tight">Get Started Today</h2>
            <p className="text-slate-400 text-sm font-medium mb-12">Free professional solar consultation</p>

            {/* Steps Indicator */}
            <div className="space-y-8">
              {steps.map((s) => {
                const isActive = step === s.id;
                const isCompleted = step > s.id;
                
                return (
                  <div key={s.id} className="flex items-center gap-4 group">
                    <div className={`
                      w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 border
                      ${isActive ? 'bg-brand border-brand text-white shadow-lg shadow-brand/40 scale-110' : ''}
                      ${isCompleted ? 'bg-green-500/20 border-green-500/50 text-green-400' : ''}
                      ${!isActive && !isCompleted ? 'bg-transparent border-slate-700 text-slate-500' : ''}
                    `}>
                      {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : <s.icon className="w-5 h-5" />}
                    </div>
                    <div className="flex flex-col">
                      <span className={`text-sm font-black transition-colors ${isActive ? 'text-white' : isCompleted ? 'text-slate-200' : 'text-slate-500'}`}>
                        {s.label}
                      </span>
                      <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{s.sub}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Trusted Partner Badge */}
          <div className="relative z-10 mt-12 pt-8 border-t border-slate-800/50">
            <div className="flex items-center gap-2 mb-3 text-green-400">
               <ShieldCheck className="w-5 h-5" />
               <span className="text-[10px] font-black tracking-[0.2em] uppercase">Trusted Partner</span>
            </div>
            <p className="text-[10px] text-slate-400 leading-relaxed font-medium">
              Your data is secure. We follow strict privacy policies and government compliance for solar implementation.
            </p>
          </div>
        </div>

        {/* Right Content Area (White) */}
        <div className="flex-1 bg-white p-6 md:p-12 relative overflow-y-auto custom-scrollbar flex flex-col">
          <button 
            onClick={onClose} 
            className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors p-2 hover:bg-slate-100 rounded-full z-20"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex-1 flex flex-col justify-center max-w-xl mx-auto w-full">
            
            {/* Step 1: Personal Info */}
            {step === 1 && (
              <form onSubmit={handleNext} className="animate-in fade-in slide-in-from-right-8 duration-500">
                <div className="mb-8">
                  <h3 className="text-3xl font-black text-slate-900 mb-2">Personal Information</h3>
                  <p className="text-slate-500 font-medium">Your contact details for the application</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Full Name *</label>
                    <input 
                      required
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleChange('fullName', e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-brand/5 focus:border-brand outline-none transition-all placeholder:text-slate-400 text-slate-900 font-bold"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Mobile Number *</label>
                    <input 
                      required
                      type="tel"
                      value={formData.mobile}
                      onChange={(e) => handleChange('mobile', e.target.value)}
                      placeholder="10-digit number"
                      pattern="[0-9]{10}"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-brand/5 focus:border-brand outline-none transition-all placeholder:text-slate-400 text-slate-900 font-bold"
                    />
                    <div className="flex items-center gap-1.5 mt-3 text-green-600">
                      <Zap className="w-3.5 h-3.5 fill-current" />
                      <span className="text-xs font-bold">We'll use this for WhatsApp updates</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Email (Optional)</label>
                    <input 
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="name@example.com"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-brand/5 focus:border-brand outline-none transition-all placeholder:text-slate-400 text-slate-900 font-bold"
                    />
                  </div>
                </div>

                <div className="mt-12 flex items-center justify-between">
                   <div className="flex items-center gap-2 text-slate-400">
                      <Lock className="w-4 h-4" />
                      <span className="text-[10px] font-black tracking-widest uppercase">Secure</span>
                   </div>
                   <button 
                    type="submit"
                    className="bg-brand hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-black flex items-center gap-2 transition-all transform hover:translate-x-1 shadow-xl hover:shadow-brand/20 active:scale-95"
                   >
                     Continue <ChevronRight className="w-5 h-5" />
                   </button>
                </div>
              </form>
            )}

            {/* Step 2: Install Info */}
            {step === 2 && (
              <form onSubmit={handleNext} className="animate-in fade-in slide-in-from-right-8 duration-500">
                 <div className="mb-8">
                  <h3 className="text-3xl font-black text-slate-900 mb-2">Install Site Info</h3>
                  <p className="text-slate-500 font-medium">Where do you want to install solar?</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">City / Village *</label>
                    <input 
                      required
                      type="text"
                      value={formData.city}
                      onChange={(e) => handleChange('city', e.target.value)}
                      placeholder="e.g. Talheri Buzurg"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-brand/5 focus:border-brand outline-none transition-all placeholder:text-slate-400 text-slate-900 font-bold"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Monthly Bill *</label>
                      <select 
                        value={formData.bill}
                        onChange={(e) => handleChange('bill', e.target.value)}
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-brand/5 focus:border-brand outline-none transition-all text-slate-900 font-bold appearance-none cursor-pointer"
                      >
                        <option>₹1000 - ₹2500</option>
                        <option>₹2500 - ₹5000</option>
                        <option>₹5000 - ₹10000</option>
                        <option>₹10000+</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Roof Type *</label>
                      <select 
                        value={formData.roofType}
                        onChange={(e) => handleChange('roofType', e.target.value)}
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-brand/5 focus:border-brand outline-none transition-all text-slate-900 font-bold appearance-none cursor-pointer"
                      >
                        <option>Concrete (Flat)</option>
                        <option>Tin Shed</option>
                        <option>Tile / Slant</option>
                        <option>Ground Mount</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex items-center justify-between">
                   <button 
                    type="button"
                    onClick={handleBack}
                    className="text-slate-400 hover:text-slate-600 font-black text-xs flex items-center gap-2 px-2 transition-colors"
                   >
                     <ArrowLeft className="w-4 h-4" /> Back
                   </button>
                   <button 
                    type="submit"
                    className="bg-brand hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-black flex items-center gap-2 transition-all transform hover:translate-x-1 shadow-xl hover:shadow-brand/20 active:scale-95"
                   >
                     Continue <ChevronRight className="w-5 h-5" />
                   </button>
                </div>
              </form>
            )}

            {/* Step 3: Review */}
            {step === 3 && (
              <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                <div className="mb-8">
                  <h3 className="text-3xl font-black text-slate-900 mb-2">Review Check</h3>
                  <p className="text-slate-500 font-medium">Please confirm your information is correct.</p>
                </div>

                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 space-y-5 mb-10">
                  <div className="flex justify-between border-b border-slate-200 pb-4">
                    <span className="text-slate-400 text-xs font-black uppercase tracking-widest">Name</span>
                    <span className="font-bold text-slate-900">{formData.fullName}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-4">
                    <span className="text-slate-400 text-xs font-black uppercase tracking-widest">Mobile</span>
                    <span className="font-bold text-slate-900">{formData.mobile}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-4">
                    <span className="text-slate-400 text-xs font-black uppercase tracking-widest">City</span>
                    <span className="font-bold text-slate-900">{formData.city}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 text-xs font-black uppercase tracking-widest">System Estimate</span>
                    <span className="font-black text-brand">
                      {formData.bill === '₹1000 - ₹2500' ? '2kW - 3kW' : 
                       formData.bill === '₹2500 - ₹5000' ? '3kW - 5kW' : '5kW+'}
                    </span>
                  </div>
                </div>

                <div className="mt-12 flex items-center justify-between">
                   <button 
                    type="button"
                    onClick={handleBack}
                    className="text-slate-400 hover:text-slate-600 font-black text-xs flex items-center gap-2 px-2 transition-colors"
                   >
                     <ArrowLeft className="w-4 h-4" /> Edit
                   </button>
                   <button 
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-2xl font-black flex items-center gap-2 transition-all transform hover:-translate-y-1 shadow-xl hover:shadow-orange-500/20 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                   >
                     {isSubmitting ? (
                       <>
                        <Loader2 className="w-5 h-5 animate-spin" /> Redirecting...
                       </>
                     ) : (
                       <>
                        Submit on WhatsApp <CheckCircle2 className="w-5 h-5" />
                       </>
                     )}
                   </button>
                </div>
              </div>
            )}

            {/* Step 4: Complete */}
            {step === 4 && (
              <div className="flex flex-col items-center text-center animate-in zoom-in duration-500">
                <div className="w-24 h-24 bg-green-100 rounded-[2rem] flex items-center justify-center mb-8 rotate-3 shadow-lg shadow-green-100/50">
                  <CheckCircle2 className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-3">Complete Done!</h3>
                <p className="text-slate-500 font-medium mb-10 max-w-sm leading-relaxed">
                  Fast professional redirected to WhatsApp. Please hit <strong>Send</strong> to complete your inquiry for <strong>{formData.fullName}</strong>.
                </p>
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 w-full mb-10 shadow-inner">
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-2">Inquiry Reference ID</p>
                  <p className="text-2xl font-mono font-black text-brand tracking-widest">SAR-{Math.floor(1000 + Math.random() * 9000)}</p>
                </div>
                <button 
                  onClick={onClose}
                  className="text-slate-400 font-black text-xs hover:text-brand transition-colors uppercase tracking-widest"
                >
                  Close Window
                </button>
              </div>
            )}
          </div>

          <div className="mt-auto pt-8 border-t border-slate-50 text-center md:text-left">
            <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest flex items-center justify-center md:justify-start gap-2">
              <Lock className="w-3.5 h-3.5 opacity-50" />
              Data Secure & Confidential • SARASWATI SOLAR Power Solution Team
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;