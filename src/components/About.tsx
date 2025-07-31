import React, { useEffect, useState } from 'react';
import { Terminal, User, Code2, Brain } from 'lucide-react';

const About: React.FC = () => {
  const [aboutData, setAboutData] = useState<any>(null);
  const [showTerminal, setShowTerminal] = useState(false);

  useEffect(() => {
    // Load about data
    fetch('/src/data/about.json')
      .then(res => res.json())
      .then(data => setAboutData(data))
      .catch(() => {
        // Fallback data
        setAboutData({
          summary: "Curious learner with hands-on experience in building responsive, role-based and scalable web apps. Passionate about creating innovative solutions that bridge the gap between cutting-edge technology and real-world applications.",
          highlights: [
            "Focused on designing reliable and secure systems",
            "Enjoys integrating ML algorithms into web applications", 
            "Team-driven development experience with collaborative workflows",
            "Strong foundation in full-stack development and AI/ML integration"
          ]
        });
      });

    // Terminal animation
    const timer = setTimeout(() => setShowTerminal(true), 500);
    return () => clearTimeout(timer);
  }, []);

  if (!aboutData) {
    return (
      <section className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-pink-500 font-mono">Loading...</div>
      </section>
    );
  }

  return (
    <section id="about" className="min-h-screen py-20 relative overflow-hidden" style={{ backgroundColor: '#0C0C0C' }}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10"></div>
        <div className="grid-background opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Terminal Header */}
        <div className="mb-12">
          {showTerminal && (
            <div className="border rounded-lg p-6 font-mono text-sm backdrop-blur-sm" style={{ backgroundColor: 'rgba(12, 12, 12, 0.8)', borderColor: 'rgba(161, 255, 10, 0.3)' }}>
              <div className="flex items-center mb-4">
                <Terminal className="w-5 h-5 mr-2" style={{ color: '#A1FF0A' }} />
                <span style={{ color: '#A1FF0A' }}>shubham@portfolio:~$</span>
                <span className="ml-2 animate-typing" style={{ color: '#F0F0F0' }}>cat about.txt</span>
              </div>
              <div className="animate-fade-in" style={{ color: '#A1FF0A' }}>
                {'>'} Access granted. Decrypting personal data...
                <br />
                {'>'} Loading developer profile...
                <br />
                {'>'} Status: AUTHENTICATED
              </div>
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 glitch-text" style={{ color: '#F0F0F0' }}>
                About Me
                <span style={{ color: '#FF2C58' }}>.</span>
              </h2>
              <div className="w-20 h-1 mb-8" style={{ background: 'linear-gradient(to right, #FF2C58, #00FFE4)' }}></div>
            </div>

            <div className="border rounded-lg p-6 backdrop-blur-sm transition-all duration-300" 
                 style={{ backgroundColor: 'rgba(12, 12, 12, 0.6)', borderColor: 'rgba(255, 44, 88, 0.2)' }}
                 onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(255, 44, 88, 0.4)'}
                 onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255, 44, 88, 0.2)'}>
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#8892B0' }}>
                {aboutData.summary}
              </p>
              
              <div className="space-y-4">
                {aboutData.highlights.map((highlight: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 transition-colors duration-300"
                    style={{ color: '#8892B0' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#F0F0F0'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#8892B0'}
                  >
                    <div className="w-2 h-2 rounded-full mt-2 animate-pulse" style={{ backgroundColor: '#00FFE4' }}></div>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative rounded-lg p-8 border backdrop-blur-sm" 
                 style={{ 
                   background: 'linear-gradient(to bottom right, rgba(255, 44, 88, 0.1), rgba(0, 255, 228, 0.1))',
                   borderColor: 'rgba(255, 44, 88, 0.2)'
                 }}>
              {/* Floating Icons */}
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center animate-bounce" style={{ backgroundColor: '#FF2C58' }}>
                <Code2 className="w-6 h-6" style={{ color: '#F0F0F0' }} />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center animate-bounce" 
                   style={{ backgroundColor: '#00FFE4', animationDelay: '1s' }}>
                <Brain className="w-6 h-6" style={{ color: '#0C0C0C' }} />
              </div>

              <div className="text-center space-y-6">
                <div className="w-32 h-32 mx-auto rounded-full flex items-center justify-center border-4 animate-pulse" 
                     style={{ 
                       background: 'linear-gradient(to bottom right, #FF2C58, #712AFF)',
                       borderColor: 'rgba(0, 255, 228, 0.3)'
                     }}>
                  <User className="w-16 h-16" style={{ color: '#F0F0F0' }} />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold" style={{ color: '#F0F0F0' }}>Developer Profile</h3>
                  <div className="font-mono" style={{ color: '#FF2C58' }}>Status: ACTIVE</div>
                  <div className="font-mono" style={{ color: '#00FFE4' }}>Version: 2.0.25</div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="rounded-lg p-4 border" style={{ backgroundColor: 'rgba(12, 12, 12, 0.4)', borderColor: 'rgba(255, 44, 88, 0.2)' }}>
                    <div className="text-2xl font-bold" style={{ color: '#FF2C58' }}>15+</div>
                    <div className="text-sm" style={{ color: '#8892B0' }}>Projects</div>
                  </div>
                  <div className="rounded-lg p-4 border" style={{ backgroundColor: 'rgba(12, 12, 12, 0.4)', borderColor: 'rgba(0, 255, 228, 0.2)' }}>
                    <div className="text-2xl font-bold" style={{ color: '#00FFE4' }}>5+</div>
                    <div className="text-sm" style={{ color: '#8892B0' }}>Tech Stacks</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scanlines */}
      <div className="absolute inset-0 pointer-events-none scanlines opacity-5"></div>
    </section>
  );
};

export default About;