import { useReveal, useScrollY } from '@/hooks';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Professionals from '@/components/Professionals';
import Differentials from '@/components/Differentials';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function App() {
  // Revela elementos ao rolar (IntersectionObserver)
  useReveal();
  const scrollY = useScrollY();
  const scrolled = scrollY > 40;

  return (
    <div className="min-h-screen bg-ph-offwhite">
      <Header scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Professionals />
        <Differentials />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
