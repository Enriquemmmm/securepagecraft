
import React from 'react';
import { 
  ShieldCheck, Shield, Users, Building2, Calendar, Camera, 
  Lock, FileCheck, PersonStanding
} from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import ServiceCard from './ui/ServiceCard';

const Services: React.FC = () => {
  const securityServices = [
    {
      title: "Objectbeveiliging",
      description: "Complete beveiliging van gebouwen, bedrijfsterreinen en eigendommen met geavanceerde technologie en vakkundig personeel.",
      icon: <Building2 className="w-6 h-6" />
    },
    {
      title: "Evenementbeveiliging",
      description: "Professionele beveiliging voor evenementen van elke omvang, van kleine bijeenkomsten tot grote festivals.",
      icon: <Calendar className="w-6 h-6" />
    },
    {
      title: "Camerasystemen",
      description: "Installatie en monitoring van hoogwaardige camerasystemen voor optimale beveiliging en toezicht.",
      icon: <Camera className="w-6 h-6" />
    },
    {
      title: "Toegangscontrole",
      description: "Geavanceerde toegangscontrolesystemen om ongewenste toegang te voorkomen en veiligheid te waarborgen.",
      icon: <Lock className="w-6 h-6" />
    }
  ];

  const staffingServices = [
    {
      title: "Beveiligingspersoneel",
      description: "Gekwalificeerde en gecertificeerde beveiligingsmedewerkers voor elke beveiligingssituatie.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Receptionisten",
      description: "Professionele receptionisten die zowel gastvrijheid als veiligheid uitstralen in uw bedrijf.",
      icon: <PersonStanding className="w-6 h-6" />
    },
    {
      title: "Compliance Diensten",
      description: "Ondersteuning bij het voldoen aan alle veiligheidsvoorschriften en wettelijke vereisten.",
      icon: <FileCheck className="w-6 h-6" />
    },
    {
      title: "Beveiliging-teams",
      description: "Complete teams van beveiligingsexperts voor grootschalige of complexe beveiligingsopdrachten.",
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <section id="services" className="section-padding bg-sphinx-lightGray">
      <div className="container mx-auto">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge">Onze Diensten</div>
          <h2 className="heading-lg mb-4">
            Complete beveiligingsoplossingen voor uw gemoedsrust
          </h2>
          <p className="text-sphinx-black/70">
            Wij bieden een uitgebreid pakket aan beveiligingsdiensten en personeelsoplossingen die op maat worden gemaakt voor uw specifieke behoeften.
          </p>
        </AnimatedSection>

        <div className="mb-20">
          <AnimatedSection delay={200}>
            <h3 className="heading-md mb-10 text-center">
              <span className="text-sphinx-orange">Sphinx</span> Service
            </h3>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityServices.map((service, index) => (
              <AnimatedSection key={service.title} delay={300 + (index * 100)}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>

        <div>
          <AnimatedSection delay={200}>
            <h3 className="heading-md mb-10 text-center">
              <span className="text-sphinx-orange">Sphinx</span> Intermediair
            </h3>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {staffingServices.map((service, index) => (
              <AnimatedSection key={service.title} delay={300 + (index * 100)}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
