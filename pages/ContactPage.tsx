import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, Send, CheckCircle2 } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const message = `*New Contact Inquiry*
    
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}
Message: ${formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919897147441?text=${encodedMessage}`, '_blank');
    
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6 text-brand" />,
      title: "Phone",
      subtext: "Mon-Sat from 9am to 6pm",
      value: "+91 80095 46718",
      href: "tel:+918009546718",
      bgColor: "bg-blue-50"
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-green-600" />,
      title: "WhatsApp",
      subtext: "Chat with us anytime.",
      value: "+91 80095 46718",
      href: "https://wa.me/918009546718",
      bgColor: "bg-green-50"
    },
    {
      icon: <Mail className="w-6 h-6 text-brand" />,
      title: "Email",
      subtext: "Our team is here to help.",
      value: "help@upsolarexpert.com",
      href: "mailto:help@upsolarexpert.com",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <section className="pt-32 pb-24 bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Get in <span className="text-brand">Touch</span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed font-medium">
            Have questions about solar subsidies or installation? Our experts are here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Column: Contact Methods */}
          <div className="space-y-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block bg-white p-8 rounded-[2.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_20px_50px_rgba(45,102,246,0.08)] hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className={`${method.bgColor} w-14 h-14 rounded-2xl flex items-center justify-center mb-6`}>
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{method.title}</h3>
                <p className="text-slate-500 text-sm mb-4">{method.subtext}</p>
                <p className="text-brand font-bold text-lg">{method.value}</p>
              </a>
            ))}
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-2 bg-white rounded-[3rem] p-10 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-slate-50">
            {submitted ? (
              <div className="py-20 flex flex-col items-center justify-center text-center animate-in zoom-in duration-500">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8">
                  <CheckCircle2 className="w-12 h-12 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Message Sent!</h2>
                <p className="text-slate-500 text-lg max-w-sm mx-auto">
                  Thank you for reaching out. We have received your inquiry and will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-10 text-brand font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center lg:text-left">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                      <input
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/5 outline-none transition-all placeholder:text-slate-300"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                      <input
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/5 outline-none transition-all placeholder:text-slate-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-700 ml-1">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/5 outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option>General Inquiry</option>
                      <option>Quote Request</option>
                      <option>Technical Support</option>
                      <option>Partnership</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                    <textarea
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us how we can help..."
                      className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/5 outline-none transition-all placeholder:text-slate-300 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full md:w-auto bg-brand text-white font-bold py-5 px-12 rounded-2xl shadow-[0_15px_30px_rgba(45,102,246,0.2)] hover:shadow-[0_20px_40px_rgba(45,102,246,0.3)] hover:-translate-y-1 transition-all active:scale-[0.98]"
                  >
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
