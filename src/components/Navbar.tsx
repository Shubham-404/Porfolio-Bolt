import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Zap } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'backdrop-blur-md border-b' : 'bg-transparent'
    }`}>
      <div className={scrolled ? 'bg-black/90 border-pink-500/20' : ''} style={scrolled ? { backgroundColor: 'rgba(12, 12, 12, 0.9)', borderColor: 'rgba(255, 44, 88, 0.2)' } : {}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onNavigate('hero')}>
            <div className="relative">
              <Code className="w-8 h-8 animate-pulse" style={{ color: '#FF2C58' }} />
              <div className="absolute inset-0 w-8 h-8 rounded-full animate-ping" style={{ backgroundColor: 'rgba(255, 44, 88, 0.2)' }}></div>
            </div>
            <span className="text-xl font-bold glitch-text" style={{ color: '#F0F0F0' }}>SHUBHAM.DEV</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative group ${
                    activeSection === item.id
                      ? 'glow-text'
                      : 'hover:text-cyan-400'
                  }`}
                  style={{
                    color: activeSection === item.id ? '#FF2C58' : '#8892B0'
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== item.id) {
                      e.currentTarget.style.color = '#00FFE4';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== item.id) {
                      e.currentTarget.style.color = '#8892B0';
                    }
                  }}
                >
                  {item.label}
                  <div className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                    activeSection === item.id ? 'scale-x-100' : ''
                  }`} style={{ background: 'linear-gradient(to right, #FF2C58, #00FFE4)' }}></div>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none transition-colors duration-300"
              style={{ color: '#8892B0' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#F0F0F0'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#8892B0'}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden backdrop-blur-md border-t" style={{ backgroundColor: 'rgba(12, 12, 12, 0.95)', borderColor: 'rgba(255, 44, 88, 0.2)' }}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 text-base font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'glow-text'
                    : ''
                }`}
                style={{
                  color: activeSection === item.id ? '#FF2C58' : '#8892B0',
                  backgroundColor: activeSection === item.id ? 'rgba(255, 44, 88, 0.1)' : 'transparent'
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== item.id) {
                    e.currentTarget.style.color = '#00FFE4';
                    e.currentTarget.style.backgroundColor = 'rgba(0, 255, 228, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== item.id) {
                    e.currentTarget.style.color = '#8892B0';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;