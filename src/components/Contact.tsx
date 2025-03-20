
import React, { useState } from 'react';
import { PhoneCall, Mail, MapPin, Send } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import { useToast } from "@/components/ui/use-toast";

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.phone || !formData.service) {
      toast({
        title: "Formulier onvolledig",
        description: "Vul alle verplichte velden in om het formulier te versturen.",
        variant: "destructive"
      });
      return;
    }
    
    // In a real application, you would submit the form data to a server here
    // For now, we'll just show a success message
    toast({
      title: "Formulier verzonden!",
      description: "Bedankt voor uw aanvraag. We nemen zo spoedig mogelijk contact met u op.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section-padding bg-sphinx-lightGray relative overflow-hidden">
      <div className="container mx-auto">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge">Contact</div>
          <h2 className="heading-lg mb-4">
            Neem contact met ons op
          </h2>
          <p className="text-sphinx-black/70">
            Heeft u vragen over onze diensten of wilt u een vrijblijvende offerte aanvragen? Vul het onderstaande formulier in of neem direct contact met ons op.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <AnimatedSection>
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-sphinx-black/5">
              <h3 className="heading-md mb-6">Stuur ons een bericht</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-sphinx-black/70 mb-2">
                      Naam *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-sphinx-black/10 focus:outline-none focus:ring-2 focus:ring-sphinx-orange/50"
                      placeholder="Uw naam"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-sphinx-black/70 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-sphinx-black/10 focus:outline-none focus:ring-2 focus:ring-sphinx-orange/50"
                      placeholder="uw@email.nl"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-sphinx-black/70 mb-2">
                      Telefoonnummer *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-sphinx-black/10 focus:outline-none focus:ring-2 focus:ring-sphinx-orange/50"
                      placeholder="06 1234 5678"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-sphinx-black/70 mb-2">
                      Dienst *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-sphinx-black/10 focus:outline-none focus:ring-2 focus:ring-sphinx-orange/50"
                      required
                    >
                      <option value="">Selecteer een dienst</option>
                      <option value="objectbeveiliging">Objectbeveiliging</option>
                      <option value="evenementbeveiliging">Evenementbeveiliging</option>
                      <option value="camerasystemen">Camerasystemen</option>
                      <option value="toegangscontrole">Toegangscontrole</option>
                      <option value="beveiligingspersoneel">Beveiligingspersoneel</option>
                      <option value="overig">Overig</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-sphinx-black/70 mb-2">
                    Bericht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-sphinx-black/10 focus:outline-none focus:ring-2 focus:ring-sphinx-orange/50"
                    placeholder="Vertel ons over uw beveiligingsbehoeften..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="button-primary w-full flex items-center justify-center"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Verstuur aanvraag
                </button>
              </form>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <div className="bg-sphinx-black rounded-2xl shadow-xl p-8 text-white h-full">
              <h3 className="heading-md mb-6">Contactgegevens</h3>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-sphinx-orange/20 flex items-center justify-center text-sphinx-orange flex-shrink-0">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-white mb-1">Telefoon</h4>
                    <p className="text-white/70 mb-1">Algemeen</p>
                    <a href="tel:+31101234567" className="text-white/90 hover:text-sphinx-orange transition-colors">
                      +31 (0)10 123 4567
                    </a>
                    <p className="text-white/70 mt-3 mb-1">24/7 Noodlijn</p>
                    <a href="tel:+31612345678" className="text-white/90 hover:text-sphinx-orange transition-colors">
                      +31 (0)6 1234 5678
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-sphinx-orange/20 flex items-center justify-center text-sphinx-orange flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-white mb-1">E-mail</h4>
                    <p className="text-white/70 mb-1">Algemene informatie</p>
                    <a href="mailto:info@sphinx-service.nl" className="text-white/90 hover:text-sphinx-orange transition-colors">
                      info@sphinx-service.nl
                    </a>
                    <p className="text-white/70 mt-3 mb-1">Offertes & Aanvragen</p>
                    <a href="mailto:sales@sphinx-service.nl" className="text-white/90 hover:text-sphinx-orange transition-colors">
                      sales@sphinx-service.nl
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-sphinx-orange/20 flex items-center justify-center text-sphinx-orange flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-white mb-1">Adres</h4>
                    <p className="text-white/90">
                      Sphinx Security Headquarters<br />
                      Veiligheidsstraat 123<br />
                      3012 AB Rotterdam<br />
                      Nederland
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2460.6589942931833!2d4.470407515787998!3d51.92308197970521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c433bdf9e27b53%3A0xece1c06f02b40a27!2sRotterdam!5e0!3m2!1sen!2snl!4v1639054534603!5m2!1sen!2snl" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
