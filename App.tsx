import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Services from './components/Services';
import TOPConTechnology from './components/TOPConTechnology';
import Products from './components/Products';
import Features from './components/Features';
import AdaniComparison from './components/AdaniComparison';
import Process from './components/Process';
import Incentives from './components/Incentives';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import LocalSEO from './components/LocalSEO';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import About from './components/About';
import Footer from './components/Footer';
import SavingsCalculator from './components/SavingsCalculator';
import BookingModal from './components/BookingModal';
import FloatingCTA from './components/FloatingCTA';

const App: React.FC = () => {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 font-inter w-full overflow-x-hidden">
      <div className="flex-grow bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100 text-slate-900 relative w-full">
        <div className="fixed top-0 left-0 w-full h-[150vh] bg-blue-400/10 rounded-full blur-[120px] -translate-x-1/4 -translate-y-1/2 pointer-events-none"></div>
        <div className="fixed bottom-0 right-0 w-full h-[150vh] bg-orange-400/5 rounded-full blur-[120px] translate-x-1/4 translate-y-1/4 pointer-events-none"></div>
        
        <Navbar onOpenBooking={() => setIsBookingOpen(true)} />
        
        <main>
          <Hero 
            onOpenCalculator={() => setIsCalculatorOpen(true)} 
            onOpenBooking={() => setIsBookingOpen(true)} 
          />
          <WhyUs />
          <Services onOpenCalculator={() => setIsCalculatorOpen(true)} />
          <TOPConTechnology />
          <Products />
          <Features />
          <AdaniComparison />
          <Process />
          <Incentives />
          <Gallery />
          <Testimonials />
          <LocalSEO />
          <FAQ />
          <About />
          <ContactForm />
        </main>
      </div>
      
      <Footer />
      
      <SavingsCalculator isOpen={isCalculatorOpen} onClose={() => setIsCalculatorOpen(false)} />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <FloatingCTA onOpenBooking={() => setIsBookingOpen(true)} />
    </div>
  );
};

export default App;