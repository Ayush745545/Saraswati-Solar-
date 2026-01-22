import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is the PM Surya Ghar Yojana?",
      answer: "The PM Surya Ghar: Muft Bijli Yojana is a central government scheme aiming to provide free electricity to 1 crore households in India. It offers a substantial subsidy directly to the consumer's bank account for installing rooftop solar systems, significantly reducing the upfront cost."
    },
    {
      question: "Who is eligible for the PM Suryaghar Yojna scheme?",
      answer: "Residential households with their own roof space suitable for solar installation are eligible. Applicants must have a valid electricity connection in their own name and should not have availed of any previous subsidy for rooftop solar. Income criteria are generally not a barrier for the subsidy component."
    },
    {
      question: "How do I apply for PM Surya Ghar Yojana in Saharanpur?",
      answer: "You can apply online through the National Portal for Rooftop Solar (pmsuryaghar.gov.in). As an authorized partner, Saraswati Solar helps you with the entire process—from registration to site survey and uploading technical feasibility reports, ensuring your application is processed smoothly in Saharanpur and Talheri Buzurg."
    },
    {
      question: "What subsidy amounts can I expect under the PM Surya Ghar Scheme?",
      answer: "For residential sectors: ₹30,000 for a 1kW system, ₹60,000 for a 2kW system, and a fixed ₹78,000 for systems of 3kW and above. This subsidy is transferred directly to your bank account after successful commissioning."
    },
    {
      question: "Does Uttar Pradesh offer additional benefits on top of the PM Suryaghar Scheme?",
      answer: "Yes, the Uttar Pradesh State Government often provides an additional state subsidy (Surya Mitra) of up to ₹15,000 per kW (capped at ₹30,000 maximum) for residential consumers. This is in addition to the central subsidy, subject to state fund availability and approval."
    },
    {
      question: "What financing and loan options are available?",
      answer: "Under the scheme, public sector banks offer collateral-free loans for solar installations up to 3kW at concessional interest rates (around 7% p.a.). We assist our customers in connecting with local bank branches in Saharanpur for quick loan approvals."
    },
    {
      question: "How long does it take to install rooftop solar in India?",
      answer: "The physical installation of the structure and panels takes only 3-5 days. However, the complete process, including site survey, net meter installation by UPPCL, and subsidy release, typically takes 3-4 weeks depending on government processing times."
    },
    {
      question: "How much electricity can a rooftop solar system generate in Saharanpur?",
      answer: "Saharanpur receives excellent solar irradiation. A 1kW system typically generates 4-5 units per day. Therefore, a standard 3kW home system can generate approximately 360-400 units per month, which is sufficient to cover most average household electricity bills."
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
          <p className="text-slate-600 leading-relaxed max-w-3xl mx-auto text-lg">
            Saraswati Solar Power Solution provides installation and EPC for customers requiring rooftop solar power plants for factories, offices, schools, and residences. We have carried out numerous installations across Saharanpur and here are some frequent questions we encounter.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none hover:bg-slate-50 transition-colors gap-4"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-slate-900 text-lg leading-tight">{faq.question}</span>
                {openIndex === index ? (
                  <div className="bg-orange-100 p-2 rounded-full flex-shrink-0">
                     <Minus className="w-5 h-5 text-orange-600" />
                  </div>
                ) : (
                  <div className="bg-slate-100 p-2 rounded-full flex-shrink-0">
                    <Plus className="w-5 h-5 text-slate-500" />
                  </div>
                )}
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;