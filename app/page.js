import Navigation from './components/Navigation';
import Hero from './components/Hero';
import LottieSection from './components/LottieSection';
import TestimonialsSection from './components/TestimonialsSection';
import StartShippingSection from './components/StartShippingSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <LottieSection />
      <TestimonialsSection />
      <StartShippingSection />
      <Footer />
    </div>
  );
}
