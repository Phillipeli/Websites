import React from 'react';
import { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Testimonials: React.FC = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Frederik Jensen",
      textDa: "Utrolig godt stykke arbejde med resultater bedre end forventet",
      textEn: "Incredibly good piece of work with results better than expected",
      rating: 5
    },
    {
      name: "Lucas Hjorth",
      textDa: "Godt produkt og virkelig god service! Skaber gode resultater, virkelig noget jeg kan anbefale andre!",
      textEn: "Good product and really good service! Creates good results, really something I can recommend to others!",
      rating: 5
    },
    {
      name: "Philip Johnsen",
      textDa: "Meget professionel oplevelse, og de er altid klar til at hjælpe mig hvis der er nogle problemer eller ændringer jeg har behov for.",
      textEn: "Very professional experience, and they are always ready to help me if there are any problems or changes I need.",
      rating: 5
    },
    {
      name: "Sebastian Jones",
      textDa: "Extremely good",
      textEn: "Extremely good",
      rating: 5
    },
    {
      name: "Sara Thomsen",
      textDa: "Har hjulpet mig rigtig meget med, at få flere kunder i forretningen. Kan varmt anbefales.",
      textEn: "Has helped me a lot with getting more customers in the business. Can be warmly recommended.",
      rating: 5
    },
    {
      name: "Carsten Dalgaard",
      textDa: "Klar anbefaling. Yderst professionelt mødebooking service. Efter lang og forgæves tid med andre møde-bookere og eksterne marketings personer, fik jeg endelig det jeg søgte hos Lai Solutions. Kan stærkt anbefales",
      textEn: "Clear recommendation. Extremely professional meeting booking service. After a long and futile time with other meeting bookers and external marketing people, I finally got what I was looking for at Lai Solutions. Highly recommended",
      rating: 5
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 dynamic-bg-hero relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-12 left-12 w-48 h-48 bg-emerald-500/4 animate-morph-blob animate-delay-1s"></div>
        <div className="absolute bottom-12 right-12 w-40 h-40 bg-emerald-400/6 animate-morph-blob animate-delay-3s"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-emerald-600/5 animate-morph-blob animate-delay-5s"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t('testimonials.title')}
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700 hover-lift hover-glow hover-shimmer max-w-4xl mx-auto">
                    <Quote className="h-8 w-8 text-emerald-400 mb-6 hover-rotate" />
                    
                    <div className="flex justify-center mb-4 animate-fade-in-up animate-delay-1s">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className={`h-5 w-5 text-yellow-400 fill-current animate-bounce-slow animate-delay-${i}s hover-scale`} />
                      ))}
                    </div>

                    <blockquote className="text-gray-300 leading-relaxed mb-6 text-lg text-center animate-fade-in-up animate-delay-2s">
                      "{t('common.language') === 'da' ? testimonial.textDa : testimonial.textEn}"
                    </blockquote>

                    <div className="font-bold text-white text-center animate-fade-in-up animate-delay-3s animate-swing">
                      {testimonial.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 hover-glow hover-shimmer"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 hover-glow hover-shimmer"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-emerald-400 scale-125' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Additional Content */}
        <div className="bg-gray-800 rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-700 hover-lift hover-glow hover-shimmer animate-zoom-in animate-delay-4s">
          <h3 className="text-2xl font-bold text-white mb-6 text-center animate-tada">
            {t('testimonials.additionalTitle')}
          </h3>
          
          <div className="prose prose-lg max-w-4xl mx-auto text-gray-300 animate-fade-in-up animate-delay-5s">
            <p className="mb-6 animate-slide-in-left animate-delay-6s">
              {t('testimonials.additionalText1')}
            </p>
            
            <p className="mb-6 animate-slide-in-right animate-delay-7s">
              {t('testimonials.additionalText2')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;