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
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import SubsidiesPage from './pages/SubsidiesPage';
import FinancingPage from './pages/FinancingPage';
import CalculatorsPage from './pages/CalculatorsPage';
import SystemsPage from './pages/SystemsPage';

const App: React.FC = () => {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [view, setView] = useState<'home' | 'services' | 'products' | 'contact' | 'subsidies' | 'financing' | 'systems' | 'calculators'>('home');

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans w-full overflow-x-hidden">
      <div className="flex-grow bg-gradient-to-br from-white via-blue-50/30 to-slate-50 relative w-full">
        <div className="fixed top-0 left-0 w-full h-[150vh] bg-brand/5 rounded-full blur-[120px] -translate-x-1/4 -translate-y-1/2 pointer-events-none"></div>
        <div className="fixed bottom-0 right-0 w-full h-[150vh] bg-blue-400/5 rounded-full blur-[120px] translate-x-1/4 translate-y-1/4 pointer-events-none"></div>
        
        <Navbar onOpenBooking={() => setIsBookingOpen(true)} setView={setView} currentView={view} />
        
        <main>
          {view === 'home' ? (
            <>
              <Hero 
                onOpenCalculator={() => setIsCalculatorOpen(true)} 
                onOpenBooking={() => setIsBookingOpen(true)} 
              />
              <WhyUs />
              <Services onOpenCalculator={() => setIsCalculatorOpen(true)} onOpenBooking={() => setIsBookingOpen(true)} />
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
            </>
          ) : view === 'services' ? (
            <ServicesPage 
              onOpenCalculator={() => setIsCalculatorOpen(true)} 
              onOpenBooking={() => setIsBookingOpen(true)} 
            />
          ) : view === 'products' ? (
            <ProductsPage 
              onOpenCalculator={() => setIsCalculatorOpen(true)} 
              onOpenBooking={() => setIsBookingOpen(true)} 
            />
          ) : view === 'contact' ? (
            <ContactPage />
          ) : view === 'subsidies' ? (
            <SubsidiesPage onOpenCalculator={() => setIsCalculatorOpen(true)} />
          ) : view === 'financing' ? (
            <FinancingPage onOpenCalculator={() => setIsCalculatorOpen(true)} />
          ) : view === 'calculators' ? (
            <CalculatorsPage onOpenBooking={() => setIsBookingOpen(true)} />
          ) : (
            <SystemsPage onOpenBooking={() => setIsBookingOpen(true)} />
          )}
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