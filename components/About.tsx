import React from 'react';
import { Award, Users, ThumbsUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">About SARASWATI SOLAR Power Solution</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="prose prose-lg max-w-4xl mx-auto text-center text-slate-600">
            <p className="mb-6">
              We are a leading rooftop solar EPC company serving Uttar Pradesh, based in <strong>Talheri Buzurg</strong>. 
              As an authorized partner, we specialize in high-quality solar installations that help homeowners and businesses 
              switch to clean energy effortlessly.
            </p>
            <p>
              At <strong>Saraswati Solar</strong>, we believe in transparency and quality. We use only premium components like Adani panels 
              and Havells cabling to ensure your system performs flawlessly for 25 years. Our expert team handles everything from 
              installation to net metering and subsidy paperwork.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-slate-100">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600 mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900">Local Experts</h3>
              <p className="text-sm text-slate-500 mt-2">Serving Saharanpur District</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600 mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900">Authorized EPC</h3>
              <p className="text-sm text-slate-500 mt-2">PM Surya Ghar Approved</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600 mb-4">
                <ThumbsUp className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900">Quality Promise</h3>
              <p className="text-sm text-slate-500 mt-2">100% Transparent Pricing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;