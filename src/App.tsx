import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookingForm from './components/BookingForm';
import VehicleSection from './components/VehicleSection';
import ServicesSection from './components/ServicesSection';
import LocalSeoSection from './components/LocalSeoSection';
import DestinationsSection from './components/DestinationsSection';
import PackagesSection from './components/PackagesSection';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      <main id="main-content">
        <Hero />
        <BookingForm />
        <AboutSection />
        <VehicleSection />
        <ServicesSection />
        <LocalSeoSection />
        <DestinationsSection />
        <PackagesSection />
        <TestimonialsSection />
        <FaqSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
