
import React from 'react';
import { ShieldCheck, ChevronDown } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-sphinx-black to-sphinx-black/90"></div>
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581365365721-9f5b5e3f3d1b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"
          style={{ backgroundPosition: 'center 30%' }}
        ></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <AnimatedSection className="text-center max-w-4xl mx-auto">
          <div className="mb-6 inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 border border-white/20">
            <ShieldCheck className="w-5 h-5 mr-2 text-sphinx-orange" />
            <span className="text-white/90 text-sm font-medium">Professionele beveiliging sinds 2003</span>
          </div>
          
          <h1 className="heading-xl mb-6 text-white">
            Uw veiligheid, <span className="text-sphinx-orange">onze prioriteit</span>
          </h1>
          
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Sphinx Service biedt uitgebreide beveiligingsoplossingen op maat, ondersteund door jarenlange ervaring en gekwalificeerde professionals.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="#contact" className="button-primary w-full sm:w-auto">
              Gratis beveiligingsconsult
            </a>
            <a href="#services" className="button-secondary w-full sm:w-auto">
              Ontdek onze diensten
            </a>
          </div>
        </AnimatedSection>
      </div>
      
      <a 
        href="#services" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-colors duration-300 animate-float"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default Hero;
