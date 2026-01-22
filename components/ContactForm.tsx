import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, Send, CheckCircle2, MapPin } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    city: '',
    bill: '',
    roofType: 'Concrete (Flat)',
    comments: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message with form details
    const message = `*New Solar Inquiry from Website*

Name: ${formData.name}
Mobile: ${formData.mobile}
Email: ${formData.email}
City: ${formData.city}
Bill: ${formData.bill}
Roof Type: ${formData.roofType}
Comments: ${formData.comments}`;

    // Encode and open WhatsApp
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919897147441?text=${encodedMessage}`, '_blank');
    
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative">
      
      {/* Header Section */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6 tracking-tight">
          Get Your Free Consultation
        </h2>
        <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-6">
          Serving Talheri Buzurg, Saharanpur, and surrounding regions. 
          Book a site visit today and get VIP fast-track subsidy assessment.
        </p>
        <div className="flex items-center justify-center gap-4">
           <a href="https://wa.me/919897147441" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-green-600 font-bold bg-green-50 px-4 py-2 rounded-full hover:bg-green-100 transition-colors">
              <MessageCircle className="w-5 h-5" /> WhatsApp Now
           </a>
           <a href="tel:+919897147441" className="inline-flex items-center gap-2 text-blue-600 font-bold bg-blue-50 px-4 py-2 rounded-full hover:bg-blue-100 transition-colors">
              <Phone className="w-5 h-5" /> Call Expert
           </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left: Form Section */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-10">
            {submitted ? (
              <div className="h-96 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-in zoom-in duration-300">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h3>
                <p className="text-slate-600 max-w-sm mx-auto">
                  Thank you, <strong>{formData.name}</strong>. We have redirected you to WhatsApp to send your details. Our solar expert will reply shortly.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-orange-600 font-bold hover:underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900">Request Callback</h3>
                  <p className="text-slate-500 mt-1">Fill the form below to get a custom solar quote.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Full Name</label>
                      <input 
                        required
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-800 text-white rounded-lg border-transparent focus:border-orange-500 focus:bg-slate-700 focus:ring-0 transition-colors placeholder:text-slate-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Mobile Number</label>
                      <input 
                        required
                        name="mobile"
                        type="tel"
                        placeholder="10-digit Number"
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-800 text-white rounded-lg border-transparent focus:border-orange-500 focus:bg-slate-700 focus:ring-0 transition-colors placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Email</label>
                      <input 
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-800 text-white rounded-lg border-transparent focus:border-orange-500 focus:bg-slate-700 focus:ring-0 transition-colors placeholder:text-slate-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">City</label>
                      <input 
                        required
                        name="city"
                        type="text"
                        placeholder="e.g. Saharanpur"
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-800 text-white rounded-lg border-transparent focus:border-orange-500 focus:bg-slate-700 focus:ring-0 transition-colors placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Monthly Electricity Bill</label>
                        <input 
                        required
                        name="bill"
                        type="text"
                        placeholder="e.g. ₹2500"
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-800 text-white rounded-lg border-transparent focus:border-orange-500 focus:bg-slate-700 focus:ring-0 transition-colors placeholder:text-slate-400"
                        />
                     </div>
                     <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Roof Type</label>
                        <select 
                        name="roofType"
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-800 text-white rounded-lg border-transparent focus:border-orange-500 focus:bg-slate-700 focus:ring-0 transition-colors placeholder:text-slate-400"
                        >
                            <option>Concrete (Flat)</option>
                            <option>Tin Shed</option>
                            <option>Tile / Slanted</option>
                        </select>
                     </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Additional Comments</label>
                    <textarea 
                      name="comments"
                      rows={3}
                      placeholder="Any specific requirement?"
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-800 text-white rounded-lg border-transparent focus:border-orange-500 focus:bg-slate-700 focus:ring-0 transition-colors placeholder:text-slate-400 resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-lg"
                  >
                    Request Callback on WhatsApp
                  </button>
                  <p className="text-xs text-center text-slate-400 mt-2">
                      Your privacy is important to us. We do not share your details.
                  </p>
                </form>
              </>
            )}
          </div>

          {/* Right: Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Call Card */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 flex items-center gap-6 group hover:border-orange-200 transition-colors">
              <div className="bg-blue-50 p-4 rounded-full group-hover:bg-blue-100 transition-colors">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <p className="text-slate-500 font-bold text-sm uppercase tracking-wide">Call Us</p>
                <a href="tel:+919897147441" className="text-xl md:text-2xl font-bold text-slate-900 hover:text-orange-600 transition-colors">
                  98971 47441
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 flex items-center gap-6 group hover:border-orange-200 transition-colors">
              <div className="bg-blue-50 p-4 rounded-full group-hover:bg-blue-100 transition-colors">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <div className="overflow-hidden">
                <p className="text-slate-500 font-bold text-sm uppercase tracking-wide">Send an Email</p>
                <a href="mailto:help@upsolarexpert.com" className="text-lg font-bold text-slate-900 hover:text-orange-600 transition-colors break-words">
                  help@upsolarexpert.com
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 flex items-center gap-6 group hover:border-orange-200 transition-colors">
               <div className="bg-blue-50 p-4 rounded-full group-hover:bg-blue-100 transition-colors">
                  <MapPin className="w-8 h-8 text-blue-600" />
               </div>
               <div>
                  <p className="text-slate-500 font-bold text-sm uppercase tracking-wide">Visit Us</p>
                  <p className="text-lg font-bold text-slate-900">Talheri Buzurg</p>
                  <p className="text-sm text-slate-500">Saharanpur, UP</p>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;