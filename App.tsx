import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Services from './components/Services';
import Features from './components/Features';
import Process from './components/Process';
import Incentives from './components/Incentives';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import About from './components/About';
import Footer from './components/Footer';
import SavingsCalculator from './components/SavingsCalculator';
import BookingModal from './components/BookingModal';

const App: React.FC = () => {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />
      <main>
        <Hero 
          onOpenCalculator={() => setIsCalculatorOpen(true)} 
          onOpenBooking={() => setIsBookingOpen(true)} 
        />
        <WhyUs />
        <Services onOpenCalculator={() => setIsCalculatorOpen(true)} />
        <Features />
        <Process />
        <Incentives />
        <Gallery />
        <Testimonials />
        <FAQ />
        <About />
        <ContactForm />
      </main>
      <Footer />
      <SavingsCalculator isOpen={isCalculatorOpen} onClose={() => setIsCalculatorOpen(false)} />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
};

export default App;