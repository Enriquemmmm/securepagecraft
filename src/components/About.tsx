
import React from 'react';
import { Shield, Award, CheckCircle } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import StatCounter from './ui/StatCounter';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection className="order-2 lg:order-1">
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=1780&auto=format&fit=crop" 
                  alt="Beveiligingsprofessionals van Sphinx Service" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-sphinx-orange text-white p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold mb-1">
                  <StatCounter end={20} suffix="+" className="text-4xl" />
                </div>
                <div className="text-sm font-medium">Jaar ervaring</div>
              </div>
              <div className="absolute -z-10 top-10 -left-10 w-full h-full bg-sphinx-lightGray rounded-2xl"></div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection className="order-1 lg:order-2">
            <div className="badge">Over Ons</div>
            <h2 className="heading-lg mb-4">
              Uw betrouwbare partner in beveiliging
            </h2>
            <p className="text-sphinx-black/70 mb-8">
              Sphinx Service is sinds 2003 een toonaangevende speler in de Nederlandse beveiligingsbranche. Met onze jarenlange ervaring en gespecialiseerde expertise bieden wij oplossingen die perfect aansluiten bij de specifieke behoeften van onze klanten.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-sphinx-orange mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="font-semibold text-lg">Gecertificeerde Professionals</h3>
                  <p className="text-sphinx-black/70">Al onze beveiligingsmedewerkers zijn volledig gecertificeerd en continu bijgeschoold.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-sphinx-orange mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="font-semibold text-lg">Maatwerk Oplossingen</h3>
                  <p className="text-sphinx-black/70">Wij bieden nooit standaardoplossingen, maar ontwikkelen een beveiligingsplan dat past bij uw situatie.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-sphinx-orange mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="font-semibold text-lg">24/7 Beschikbaarheid</h3>
                  <p className="text-sphinx-black/70">Onze diensten zijn 24 uur per dag, 7 dagen per week beschikbaar voor maximale veiligheid.</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-sphinx-orange mb-1">
                  <StatCounter end={500} suffix="+" className="text-4xl" />
                </div>
                <div className="text-sm font-medium text-sphinx-black/70">Tevreden klanten</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-sphinx-orange mb-1">
                  <StatCounter end={100} suffix="%" className="text-4xl" />
                </div>
                <div className="text-sm font-medium text-sphinx-black/70">Klanttevredenheid</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-sphinx-orange mb-1">
                  <StatCounter end={50} suffix="+" className="text-4xl" />
                </div>
                <div className="text-sm font-medium text-sphinx-black/70">Specialisten</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
