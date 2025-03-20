
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const { toast } = useToast();
  
  // Cookie consent notification
  useEffect(() => {
    const hasSeenCookieNotice = localStorage.getItem('cookieConsent');
    
    if (!hasSeenCookieNotice) {
      setTimeout(() => {
        toast({
          title: "Deze website gebruikt cookies",
          description: "Wij gebruiken cookies om uw ervaring op onze website te verbeteren. Door onze website te gebruiken, gaat u akkoord met het gebruik van cookies.",
          action: (
            <button
              onClick={() => {
                localStorage.setItem('cookieConsent', 'true');
              }}
              className="bg-sphinx-orange text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Accepteren
            </button>
          ),
          duration: 50000,
        });
      }, 2000);
    }
  }, [toast]);

  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
