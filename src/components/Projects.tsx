import React, { useEffect, useState } from 'react';
import { ExternalLink, Github, Calendar, Zap } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  imageURL: string;
  liveDemoURL: string;
  githubURL: string;
  timeline: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    fetch('/src/data/projects.json')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(() => {
        // Fallback data
        setProjects([
          {
            "title": "Scalable Video Intelligence System",
            "description": "Built a role-based web platform that uses AI/ML to transform live camera feeds into actionable insights with real-time processing capabilities.",
            "techStack": ["React", "NodeJS", "OpenCV", "PaddleOCR", "WebRTC"],
            "imageURL": "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800",
            "liveDemoURL": "",
            "githubURL": "",
            "timeline": "Mar 2025 – Present"
          },
          {
            "title": "Utsav Event Management Platform",
            "description": "Full-stack event management system with Firebase integration, featuring real-time updates and comprehensive admin dashboard.",
            "techStack": ["React", "Firebase", "TailwindCSS", "Firestore"],
            "imageURL": "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800",
            "liveDemoURL": "",
            "githubURL": "",
            "timeline": "Jan 2025 – Feb 2025"
          },
          {
            "title": "Coca-Cola Reimagined",
            "description": "Interactive brand experience website featuring advanced animations and smooth user interactions built with React and GSAP.",
            "techStack": ["React", "GSAP", "ScrollTrigger", "TailwindCSS"],
            "imageURL": "https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=800",
            "liveDemoURL": "",
            "githubURL": "",
            "timeline": "Dec 2024 – Jan 2025"
          },
          {
            "title": "Synthwave Portfolio",
            "description": "This very portfolio you're viewing - a Stranger Things inspired developer showcase with dynamic content and immersive animations.",
            "techStack": ["React", "TypeScript", "TailwindCSS", "Framer Motion"],
            "imageURL": "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
            "liveDemoURL": "",
            "githubURL": "https://github.com/Shubham-404",
            "timeline": "Jan 2025"
          }
        ]);
      });
  }, []);

  return (
    <section id="projects" className="min-h-screen py-20 relative overflow-hidden" style={{ backgroundColor: '#0C0C0C' }}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-red-500/10"></div>
        <div className="matrix-background opacity-5"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 glitch-text" style={{ color: '#F0F0F0' }}>
            Projects
            <span style={{ color: '#FF2C58' }}>.</span>
          </h2>
          <div className="w-20 h-1 mx-auto mb-8" style={{ background: 'linear-gradient(to right, #FF2C58, #00FFE4)' }}></div>
          <p className="text-lg max-w-2xl mx-auto font-mono" style={{ color: '#8892B0' }}>
            {'>'} Accessing project database...
            <br />
            {'>'} Displaying {projects.length} classified entries
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative rounded-lg overflow-hidden backdrop-blur-sm transition-all duration-500 ${hoveredProject === index ? 'transform scale-105' : ''
                }`}
              style={{
                backgroundColor: 'rgba(12, 12, 12, 0.6)',
                borderColor: 'rgba(255, 44, 88, 0.2)',
                border: '1px solid'
              }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.imageURL}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" style={{ background: 'linear-gradient(to top, #0C0C0C, rgba(12, 12, 12, 0.5), transparent)' }}></div>

                {/* Overlay Icons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.liveDemoURL && (
                    <a
                      href={project.liveDemoURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full transition-colors duration-300"
                      style={{ backgroundColor: '#FF2C58' }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FF0000'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FF2C58'}
                    >
                      <ExternalLink className="w-4 h-4" style={{ color: '#F0F0F0' }} />
                    </a>
                  )}
                  {project.githubURL && (
                    <a
                      href={project.githubURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full transition-colors duration-300"
                      style={{ backgroundColor: '#00FFE4' }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#712AFF'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#00FFE4'}
                    >
                      <Github className="w-4 h-4" style={{ color: '#0C0C0C' }} />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold transition-colors duration-300"
                    style={{ color: hoveredProject === index ? '#FF2C58' : '#F0F0F0' }}>
                    {project.title}
                  </h3>
                  <Zap className="w-5 h-5 animate-pulse" style={{ color: '#A1FF0A' }} />
                </div>

                <p className="text-sm mb-4 leading-relaxed" style={{ color: '#8892B0' }}>
                  {project.description}
                </p>

                {/* Timeline */}
                <div className="flex items-center text-sm mb-4 font-mono" style={{ color: '#00FFE4' }}>
                  <Calendar className="w-4 h-4 mr-2" />
                  {project.timeline}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 border rounded-full text-xs font-mono transition-colors duration-300"
                      style={{
                        background: 'linear-gradient(to right, rgba(255, 44, 88, 0.2), rgba(0, 255, 228, 0.2))',
                        borderColor: 'rgba(255, 44, 88, 0.3)',
                        color: '#F0F0F0'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(255, 44, 88, 0.6)'}
                      onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255, 44, 88, 0.3)'}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Terminal Glitch Effect */}
              {hoveredProject === index && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-1 animate-scan" style={{ background: 'linear-gradient(to right, transparent, #FF2C58, transparent)' }}></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 animate-scan-reverse" style={{ background: 'linear-gradient(to right, transparent, #00FFE4, transparent)' }}></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Terminal Footer */}
        <div className="mt-16 text-center">
          <div className="border rounded-lg p-4 inline-block font-mono text-sm" style={{ backgroundColor: 'rgba(12, 12, 12, 0.8)', borderColor: 'rgba(161, 255, 10, 0.3)' }}>
            <span style={{ color: '#A1FF0A' }}>shubham@portfolio:~/projects$</span>
            <span className="ml-2" style={{ color: '#F0F0F0' }}>ls -la | grep "*.awesome"</span>
            <div className="mt-2" style={{ color: '#A1FF0A' }}>
              Found {projects.length} awesome projects. More coming soon...
            </div>
          </div>
        </div>
      </div>

      {/* Scanlines */}
      <div className="absolute inset-0 pointer-events-none scanlines opacity-5"></div>
    </section>
  );
};

export default Projects;