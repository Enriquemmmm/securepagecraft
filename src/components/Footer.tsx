
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-sphinx-black text-white pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="text-2xl font-display font-bold mb-6">
              Sphinx<span className="text-sphinx-orange">Service</span>
            </div>
            <p className="text-white/70 mb-6">
              Professionele beveiligingsoplossingen voor bedrijven en particulieren. Uw veiligheid, onze prioriteit.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-sphinx-orange transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-sphinx-orange transition-colors duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-sphinx-orange transition-colors duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-sphinx-orange transition-colors duration-300">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Diensten</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-white/70 hover:text-sphinx-orange transition-colors duration-300 flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Objectbeveiliging
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-sphinx-orange transition-colors duration-300 flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Evenementbeveiliging
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-sphinx-orange transition-colors duration-300 flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Camerasystemen
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-sphinx-orange transition-colors duration-300 flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Toegangscontrole
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-sphinx-orange transition-colors duration-300 flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Beveiligingspersoneel
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Nuttige Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-white/70 hover:text-sphinx-orange transition-colors duration-300 flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-sphinx-orange transition-colors duration-300 flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Over Ons
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/70 hover:text-sphinx-orange transition-colors duration-300 flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-sphinx-orange transition-colors duration-300 flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-sphinx-orange transition-colors duration-300 flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Privacybeleid
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Noodgevallen</h3>
            <p className="text-white/70 mb-3">
              In geval van nood kunt u ons 24/7 bereiken:
            </p>
            <a href="tel:+31612345678" className="text-xl font-semibold text-sphinx-orange hover:underline transition-colors duration-300">
              +31 (0)6 1234 5678
            </a>
            <div className="mt-6">
              <div className="p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <h4 className="font-semibold mb-2">Gecertificeerd en erkend door:</h4>
                <div className="flex flex-wrap gap-4">
                  <div className="w-16 h-8 bg-white/20 rounded flex items-center justify-center">Logo</div>
                  <div className="w-16 h-8 bg-white/20 rounded flex items-center justify-center">Logo</div>
                  <div className="w-16 h-8 bg-white/20 rounded flex items-center justify-center">Logo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © {currentYear} Sphinx Service. Alle rechten voorbehouden.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/60 hover:text-sphinx-orange text-sm transition-colors duration-300">
              Privacybeleid
            </a>
            <a href="#" className="text-white/60 hover:text-sphinx-orange text-sm transition-colors duration-300">
              Algemene Voorwaarden
            </a>
            <a href="#" className="text-white/60 hover:text-sphinx-orange text-sm transition-colors duration-300">
              Cookiebeleid
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
