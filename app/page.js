import Navigation from './components/Navigation';
import Hero from './components/Hero';
import LottieSection from './components/LottieSection';
import Process from './components/Process';
import TestimonialsSection from './components/TestimonialsSection';
import StartShippingSection from './components/StartShippingSection';
import Footer from './components/Footer';
import StructuredData from './components/StructuredData';
import Services from './components/Services'

export default function Home() {
  return (
    <>
      <StructuredData />
      <div className="w-full">
        <Hero />
        <LottieSection />
        <Process />
        <Services />
        <TestimonialsSection />
        <StartShippingSection />
        <Footer />
      </div>
    </>
  );
}
