import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import EasterEgg from './components/EasterEgg';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isUpsideDown, setIsUpsideDown] = useState(false);
  const [cursorTrail, setCursorTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  // Cursor trail effect
  useEffect(() => {
    let trailId = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      const newTrail = {
        x: e.clientX,
        y: e.clientY,
        id: trailId++
      };
      
      setCursorTrail(prev => [...prev.slice(-10), newTrail]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Remove old trail points
  useEffect(() => {
    const timer = setInterval(() => {
      setCursorTrail(prev => prev.slice(-8));
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  // Scroll detection for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleUpsideDown = () => {
    setIsUpsideDown(!isUpsideDown);
    document.body.style.transition = 'transform 1s ease-in-out, filter 1s ease-in-out';
    document.body.style.transform = isUpsideDown ? 'rotate(0deg)' : 'rotate(180deg)';
    document.body.style.filter = isUpsideDown ? 'none' : 'hue-rotate(180deg) invert(1)';
  };

  return (
    <div className="relative">
      {/* Cursor Trail */}
      {cursorTrail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none z-50 w-2 h-2 rounded-full animate-ping"
          style={{
            left: point.x - 4,
            top: point.y - 4,
            opacity: (index + 1) / cursorTrail.length * 0.5,
            animationDuration: '0.6s',
            backgroundColor: '#FF2C58'
          }}
        />
      ))}

      {/* Loading Screen */}
      <div id="loading-screen" className="fixed inset-0 z-50 flex items-center justify-center" style={{ backgroundColor: '#0C0C0C' }}>
        <div className="text-center font-mono">
          <div className="text-lg mb-4" style={{ color: '#A1FF0A' }}>Decrypting interface...</div>
          <div className="w-64 h-1 rounded-full overflow-hidden" style={{ backgroundColor: '#8892B0' }}>
            <div className="h-full animate-loading-bar" style={{ background: 'linear-gradient(to right, #FF2C58, #00FFE4)' }}></div>
          </div>
          <div className="text-sm mt-4" style={{ color: '#00FFE4' }}>Loading complete.</div>
        </div>
      </div>

      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main>
        <div id="hero">
          <Hero onNavigate={handleNavigate} />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="education">
          <Education />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>

      <EasterEgg isActive={isUpsideDown} onToggle={toggleUpsideDown} />
    </div>
  );
}

export default App;