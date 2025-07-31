import React, { useEffect, useState } from 'react';
import { Code2, Database, Zap, Brain, Wrench } from 'lucide-react';

interface SkillsData {
  [category: string]: string[];
}

const Skills: React.FC = () => {
  const [skills, setSkills] = useState<SkillsData>({});
  const [activeCategory, setActiveCategory] = useState<string>('');

  const categoryIcons: { [key: string]: React.ReactNode } = {
    'Web Development': <Code2 className="w-6 h-6" />,
    'Databases': <Database className="w-6 h-6" />,
    'Languages': <Zap className="w-6 h-6" />,
    'Machine Learning': <Brain className="w-6 h-6" />,
    'Tools': <Wrench className="w-6 h-6" />
  };

  const categoryColors: { [key: string]: string } = {
    'Web Development': 'from-pink-500 to-purple-600',
    'Databases': 'from-cyan-400 to-blue-500',
    'Languages': 'from-yellow-400 to-orange-500',
    'Machine Learning': 'from-green-400 to-teal-500',
    'Tools': 'from-red-400 to-pink-500'
  };

  useEffect(() => {
    fetch('/src/data/skills.json')
      .then(res => res.json())
      .then(data => {
        setSkills(data);
        setActiveCategory(Object.keys(data)[0] || '');
      })
      .catch(() => {
        // Fallback data
        const fallbackSkills = {
          'Web Development': ['React', 'NodeJS', 'TailwindCSS', 'GSAP', 'ScrollTrigger', 'TypeScript', 'ExpressJS'],
          'Databases': ['MySQL', 'SQLite3', 'Firestore', 'MongoDB', 'PostgreSQL'],
          'Languages': ['JavaScript', 'Python', 'Java', 'C', 'TypeScript', 'SQL'],
          'Machine Learning': ['OpenCV', 'PaddleOCR', 'Matplotlib', 'Seaborn', 'NumPy', 'Pandas'],
          'Tools': ['Firebase', 'Git', 'Figma', 'Notion', 'Discord', 'VS Code', 'Postman']
        };
        setSkills(fallbackSkills);
        setActiveCategory('Web Development');
      });
  }, []);

  return (
    <section id="skills" className="min-h-screen py-20 relative overflow-hidden" style={{ backgroundColor: '#0C0C0C' }}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10"></div>
        <div className="circuit-background opacity-5"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 glitch-text" style={{ color: '#F0F0F0' }}>
            Skills
            <span style={{ color: '#00FFE4' }}>.</span>
          </h2>
          <div className="w-20 h-1 mx-auto mb-8" style={{ background: 'linear-gradient(to right, #00FFE4, #FF2C58)' }}></div>
          <p className="text-lg font-mono" style={{ color: '#8892B0' }}>
            {'>'} Analyzing skill matrix...
            <br />
            {'>'} Displaying {Object.keys(skills).length} categories
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(skills).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className="flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 border"
              style={{
                background: activeCategory === category 
                  ? `linear-gradient(to right, ${categoryColors[category].includes('pink') ? '#FF2C58' : categoryColors[category].includes('cyan') ? '#00FFE4' : categoryColors[category].includes('yellow') ? '#A1FF0A' : categoryColors[category].includes('green') ? '#A1FF0A' : '#712AFF'}, ${categoryColors[category].includes('purple') ? '#712AFF' : categoryColors[category].includes('blue') ? '#00FFE4' : categoryColors[category].includes('orange') ? '#FF2C58' : categoryColors[category].includes('teal') ? '#00FFE4' : '#FF2C58'})`
                  : 'rgba(12, 12, 12, 0.6)',
                color: activeCategory === category ? '#F0F0F0' : '#8892B0',
                borderColor: activeCategory === category ? 'transparent' : '#8892B0',
                boxShadow: activeCategory === category ? '0 4px 20px rgba(255, 44, 88, 0.3)' : 'none'
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== category) {
                  e.currentTarget.style.borderColor = 'rgba(255, 44, 88, 0.5)';
                  e.currentTarget.style.color = '#F0F0F0';
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== category) {
                  e.currentTarget.style.borderColor = '#8892B0';
                  e.currentTarget.style.color = '#8892B0';
                }
              }}
            >
              {categoryIcons[category]}
              <span>{category}</span>
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="max-w-5xl mx-auto">
          <div className="border rounded-lg p-8 backdrop-blur-sm" style={{ backgroundColor: 'rgba(12, 12, 12, 0.6)', borderColor: 'rgba(255, 44, 88, 0.2)' }}>
            <h3 className="text-2xl font-bold mb-6 flex items-center" style={{ color: '#F0F0F0' }}>
              {categoryIcons[activeCategory]}
              <span className="ml-3">{activeCategory}</span>
              <div className="ml-auto text-sm font-mono" style={{ color: '#00FFE4' }}>
                {skills[activeCategory]?.length} skills loaded
              </div>
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills[activeCategory]?.map((skill, index) => (
                <div
                  key={skill}
                  className="group relative border rounded-lg p-4 transition-all duration-300 cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 44, 88, 0.6)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(255, 44, 88, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 44, 88, 0.2)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    background: 'linear-gradient(to bottom right, rgba(255, 44, 88, 0.1), rgba(0, 255, 228, 0.1))',
                    borderColor: 'rgba(255, 44, 88, 0.2)',
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '0.5rem',
                    zIndex: -1
                  }}></div>
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center font-bold text-sm group-hover:scale-110 transition-transform duration-300" 
                         style={{ 
                           background: 'linear-gradient(to bottom right, #FF2C58, #00FFE4)',
                           color: '#F0F0F0'
                         }}>
                      {skill.charAt(0)}
                    </div>
                    <h4 className="font-medium text-sm transition-colors duration-300" 
                        style={{ color: '#F0F0F0' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#FF2C58'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#F0F0F0'}>
                      {skill}
                    </h4>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" 
                       style={{ background: 'linear-gradient(to right, rgba(255, 44, 88, 0.2), rgba(0, 255, 228, 0.2))' }}></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Terminal Command */}
        <div className="mt-16 text-center">
          <div className="border rounded-lg p-4 inline-block font-mono text-sm" style={{ backgroundColor: 'rgba(12, 12, 12, 0.8)', borderColor: 'rgba(161, 255, 10, 0.3)' }}>
            <span style={{ color: '#A1FF0A' }}>shubham@portfolio:~/skills$</span>
            <span className="ml-2" style={{ color: '#F0F0F0' }}>./analyze_capabilities.sh</span>
            <div className="mt-2" style={{ color: '#A1FF0A' }}>
              Skill level: EXPERT | Status: CONTINUOUSLY_LEARNING
            </div>
          </div>
        </div>
      </div>

      {/* Animated Grid Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px animate-pulse" style={{ background: 'linear-gradient(to right, transparent, rgba(255, 44, 88, 0.2), transparent)' }}></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px animate-pulse" style={{ background: 'linear-gradient(to right, transparent, rgba(0, 255, 228, 0.2), transparent)', animationDelay: '1s' }}></div>
      </div>

      {/* Scanlines */}
      <div className="absolute inset-0 pointer-events-none scanlines opacity-5"></div>
    </section>
  );
};

export default Skills;