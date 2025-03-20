
import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jan van der Berg",
    role: "Facility Manager",
    company: "Rotterdam Kantoorcentrum",
    content: "De beveiliging van ons kantorencomplex is enorm verbeterd sinds we samenwerken met Sphinx Service. Hun professionele aanpak en proactieve houding zorgen voor een veilige werkomgeving voor al onze huurders.",
    rating: 5
  },
  {
    id: 2,
    name: "Marieke Jansen",
    role: "Event Manager",
    company: "Nationale Evenementen",
    content: "Voor onze grote evenementen werken we al jaren samen met Sphinx Service. Hun beveiligingsteam is niet alleen uiterst professioneel, maar ook klantvriendelijk en oplossingsgericht. Een perfecte combinatie!",
    rating: 5
  },
  {
    id: 3,
    name: "Pieter Klaassen",
    role: "Managing Director",
    company: "LogiTech Solutions",
    content: "Sphinx Service heeft ons geholpen met het implementeren van een toegangscontrolesysteem dat perfect aansluit bij onze behoeften. De service is uitstekend en ze denken echt met je mee.",
    rating: 4
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextTestimonial();
      }, 8000);
      
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  return (
    <section 
      id="testimonials" 
      className="section-padding bg-sphinx-black relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-10">
        <div className="absolute top-10 left-10 text-sphinx-orange">
          <Quote size={200} />
        </div>
        <div className="absolute bottom-10 right-10 text-sphinx-orange">
          <Quote size={200} />
        </div>
      </div>
      
      <div className="container mx-auto">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge bg-sphinx-orange/20 text-sphinx-orange">Testimonials</div>
          <h2 className="heading-lg mb-4 text-white">
            Wat onze klanten zeggen
          </h2>
          <p className="text-white/70">
            Bij Sphinx Service zijn we trots op de feedback van onze klanten. Hun ervaringen vertellen ons verhaal beter dan wij dat zelf kunnen doen.
          </p>
        </AnimatedSection>
        
        <div className="max-w-4xl mx-auto relative">
          <div 
            className="relative overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div 
              className="flex transition-transform duration-700 ease-out-expo"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white/5 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-white/10">
                    <div className="flex mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i} 
                          size={20} 
                          className={cn(
                            i < testimonial.rating ? "text-sphinx-orange" : "text-sphinx-orange/30"
                          )} 
                          fill={i < testimonial.rating ? "currentColor" : "none"}
                        />
                      ))}
                    </div>
                    
                    <p className="text-white/90 text-lg mb-8 italic">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-sphinx-orange/20 flex items-center justify-center text-sphinx-orange">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-white">{testimonial.name}</h4>
                        <p className="text-white/60 text-sm">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-3 h-3 rounded-full mx-1 transition-all duration-300",
                  index === activeIndex ? "bg-sphinx-orange w-8" : "bg-white/30 hover:bg-white/50"
                )}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
          
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:translate-x-0 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20 flex items-center justify-center hover:bg-sphinx-orange transition-colors duration-300"
            onClick={prevTestimonial}
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-0 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20 flex items-center justify-center hover:bg-sphinx-orange transition-colors duration-300"
            onClick={nextTestimonial}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
