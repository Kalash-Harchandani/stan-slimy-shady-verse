
import { useEffect, useState } from 'react';
import { Play, Music } from 'lucide-react';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const heroTexts = [
    "THE REAL SLIM SHADY",
    "RAP GOD",
    "MARSHALL MATHERS",
    "8 MILE LEGEND"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image - Updated to new Eminem wallpaper */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
        style={{ 
          backgroundImage: "url('https://wallpapercat.com/w/full/3/7/2/215895-2560x1600-desktop-hd-eminem-wallpaper-photo.jpg')", 
          filter: "brightness(0.5) contrast(1.2)" 
        }}
      ></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-em-gold/20 to-transparent transform -skew-y-12"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-em-gold/10 to-transparent transform skew-y-12"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-6xl sm:text-8xl lg:text-9xl font-bebas tracking-wider text-white mb-6 leading-none">
            EMINEM
          </h1>
          
          <div className="h-16 mb-8 flex items-center justify-center">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-oswald font-bold text-em-gold animate-glow">
              {heroTexts[currentText]}
            </h2>
          </div>

          <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto font-oswald leading-relaxed">
            From the streets of Detroit to global superstardom. Experience the journey of one of the greatest rappers of all time.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="https://www.youtube.com/watch?v=eJO5HU_7_1w" target="_blank" rel="noopener noreferrer" 
              className="group bg-em-gold hover:bg-em-gold/90 text-black px-8 py-4 rounded-lg font-oswald font-bold text-lg transition-all duration-300 flex items-center gap-3 transform hover:scale-105">
              <Play size={24} className="group-hover:animate-pulse" />
              PLAY HITS
            </a>
            <a href="#discography"
              className="group border-2 border-em-gold text-em-gold hover:bg-em-gold hover:text-black px-8 py-4 rounded-lg font-oswald font-bold text-lg transition-all duration-300 flex items-center gap-3 transform hover:scale-105">
              <Music size={24} className="group-hover:animate-pulse" />
              DISCOGRAPHY
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-em-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-em-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
