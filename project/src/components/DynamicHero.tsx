import React, { useEffect, useState } from 'react';
import { Zap, ArrowRight, CheckCircle } from 'lucide-react';

const DynamicHero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-black to-gray-950">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Gradient Orbs */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-blue-600/10 rounded-full blur-3xl animate-pulse"
          style={{
            top: `${20 + mousePosition.y * 0.1}%`,
            left: `${10 + mousePosition.x * 0.05}%`,
            transform: `translate(-50%, -50%)`,
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-blue-400/15 to-cyan-500/8 rounded-full blur-3xl animate-pulse delay-1000"
          style={{
            bottom: `${15 + mousePosition.y * 0.08}%`,
            right: `${15 + mousePosition.x * 0.06}%`,
            transform: `translate(50%, 50%)`,
          }}
        />
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-blue-400/30 rounded-full animate-bounce`}
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 12}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`,
              }}
            />
          ))}
        </div>

        {/* Animated Lines */}
        <div 
          className="absolute top-0 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-pulse"
          style={{ left: `${30 + mousePosition.x * 0.02}%` }}
        />
        <div 
          className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/15 to-transparent animate-pulse delay-2000"
          style={{ top: `${40 + mousePosition.y * 0.02}%` }}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <Zap size={16} />
            Moderne digitale løsninger
          </div>
          
          {/* Main Heading */}
          <h1 className={`text-5xl md:text-7xl font-bold text-white mb-8 leading-tight transition-all duration-1000 delay-200 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Jeg skaber{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent animate-pulse">
              digitale løsninger
            </span>
            {' '}der konverterer
          </h1>
          
          {/* Subtitle */}
          <p className={`text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Skræddersyede hjemmesider og intelligente AI-agenter der hjælper din virksomhed med at vokse og automatisere
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center mb-16 transition-all duration-1000 delay-600 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <button
              onClick={() => window.location.href = '/services'}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 font-medium text-lg flex items-center justify-center gap-3 group hover:scale-105"
            >
              Se vores services
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>
            <button
              onClick={() => window.location.href = '/prisberegner'}
              className="border-2 border-blue-500 text-blue-400 px-8 py-4 rounded-full hover:bg-blue-500/10 transition-all duration-300 font-medium text-lg hover:scale-105 flex items-center justify-center gap-3 group"
            >
              Beregn pris
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className={`flex flex-col md:flex-row items-center justify-center gap-8 text-gray-400 text-sm transition-all duration-1000 delay-800 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex items-center gap-2 hover:text-gray-300 transition-colors duration-300">
              <CheckCircle className="text-green-500" size={16} />
              <span className="text-gray-300">Hurtig levering</span>
            </div>
            <div className="flex items-center gap-2 hover:text-gray-300 transition-colors duration-300">
              <CheckCircle className="text-green-500" size={16} />
              <span className="text-gray-300">Professionel kvalitet</span>
            </div>
            <div className="flex items-center gap-2 hover:text-gray-300 transition-colors duration-300">
              <CheckCircle className="text-green-500" size={16} />
              <span className="text-gray-300">Personlig service</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-all duration-1000 delay-1000 hidden md:block ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="flex flex-col items-center gap-2">
          <div className="text-blue-400/70 text-sm font-medium">Scroll ned</div>
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="text-blue-400 animate-pulse"
          >
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default DynamicHero;