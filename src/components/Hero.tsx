import React, { useEffect, useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    'Crafting Interfaces.',
    'Capturing Insight.',
    'Coding Beyond the Visible.'
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentPhrase = phrases[currentIndex];

    if (!isDeleting && displayText === currentPhrase) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(prev =>
        isDeleting
          ? prev.slice(0, -1)
          : currentPhrase.slice(0, prev.length + 1)
      );
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, phrases]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#0C0C0C' }}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-purple-500/5"></div>
        <div className="grid-background opacity-20"></div>
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-pulse floating-particle"
            style={{
              backgroundColor: '#FF2C58',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        {/* Glitch Loading Effect */}
        <div className="mb-8">
          <div className="text-sm font-mono mb-4 opacity-80" style={{ color: '#00FFE4' }}>
            {'>'} Initializing neural interface...
          </div>
          <div className="text-sm font-mono mb-2" style={{ color: '#A1FF0A' }}>
            {'>'} Access granted. Welcome to the upside down.
          </div>
        </div>

        {/* Name with Glitch Effect */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 glitch-text-hero" style={{ color: '#F0F0F0' }}>
          <span className="relative inline-block">
            <img src="/shubham.png" alt="SHUBHAM" />
            <span className="absolute top-0 left-0 w-full h-full opacity-70 animate-glitch-1" style={{ color: '#FF2C58' }}><img src="/shubham.png" alt="SHUBHAM" /></span>
            
          </span>
          <br />
          <span className="relative inline-block">
            <img src="/singh.png" alt="SINGH" />
            <span className="absolute top-0 left-0 w-full h-full opacity-70 animate-glitch-1" style={{ color: '#FF2C58' }}><img src="/singh.png" alt="SINGH" /></span>
            
          </span>
        </h1>

        {/* Title */}
        <div className="text-xl md:text-2xl mb-8 font-mono" style={{ color: '#8892B0' }}>
          <span style={{ color: '#FF2C58' }}>Web</span> & <span style={{ color: '#00FFE4' }}>ML</span> Developer |
          <span style={{ color: '#712AFF' }}> CSE'27</span> @ NIE Mysuru
        </div>

        {/* Typewriter Tagline */}
        <div className="text-2xl md:text-4xl mb-12 h-16 flex items-center justify-center" style={{ color: '#F0F0F0' }}>
          <span className="font-light">
            {displayText}
            <span className="animate-pulse" style={{ color: '#FF2C58' }}>|</span>
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16">
          <button
            onClick={() => onNavigate('projects')}
            className="px-8 py-3 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 border-2"
            style={{
              background: 'linear-gradient(to right, #FF2C58, #712AFF)',
              color: '#F0F0F0',
              borderColor: '#FF0000'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.boxShadow = '0 0 20px #FF2C58';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(to right, #FF2C58, #712AFF)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <Sparkles className="inline w-5 h-5 mr-2" />
            View Projects
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-3 bg-transparent border-2 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            style={{
              borderColor: '#00FFE4',
              color: '#00FFE4'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#00FFE4';
              e.currentTarget.style.color = '#0C0C0C';
              e.currentTarget.style.boxShadow = '0 0 20px #00FFE4';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#00FFE4';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Get In Touch
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce cursor-pointer" onClick={() => onNavigate('about')}>
          <ChevronDown className="w-8 h-8 mx-auto glow-icon" style={{ color: '#FF2C58' }} />
          <div className="text-sm mt-2 font-mono" style={{ color: '#8892B0' }}>scroll down</div>
        </div>
      </div>

      {/* Scanlines Effect */}
      <div className="absolute inset-0 pointer-events-none scanlines opacity-10"></div>
    </section>
  );
};

export default Hero;