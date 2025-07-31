import React, { useEffect, useState } from 'react';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

interface EducationItem {
  institute: string;
  degree: string;
  duration: string;
  gpa: string;
  subjects: string[];
}

const Education: React.FC = () => {
  const [education, setEducation] = useState<EducationItem[]>([]);

  useEffect(() => {
    fetch('/src/data/education.json')
      .then(res => res.json())
      .then(data => setEducation(data))
      .catch(() => {
        // Fallback data
        setEducation([
          {
            institute: "The National Institute of Engineering, Mysuru",
            degree: "B.E. in Computer Science & Engineering",
            duration: "Aug 2023 – Jun 2027 (Expected)",
            gpa: "8.7",
            subjects: ["Operating Systems", "Database Management Systems", "Algorithm Design & Analysis", "ARM Architecture", "Django Framework"]
          }
        ]);
      });
  }, []);

  return (
    <section id="education" className="min-h-screen py-20 relative overflow-hidden" style={{ backgroundColor: '#0C0C0C' }}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-blue-500/10"></div>
        <div className="digital-rain opacity-5"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 glitch-text" style={{ color: '#F0F0F0' }}>
            Education
            <span style={{ color: '#A1FF0A' }}>.</span>
          </h2>
          <div className="w-20 h-1 mx-auto mb-8" style={{ background: 'linear-gradient(to right, #A1FF0A, #00FFE4)' }}></div>
          <p className="text-lg font-mono" style={{ color: '#8892B0' }}>
            {'>'} Accessing academic records...
            <br />
            {'>'} Displaying {education.length} educational entries
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8">
          {education.map((item, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Timeline Line */}
              {index !== education.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-20 opacity-50" style={{ background: 'linear-gradient(to bottom, #A1FF0A, #00FFE4)' }}></div>
              )}

              {/* Timeline Dot */}
              <div className="absolute left-4 top-8 w-4 h-4 rounded-full border-4 z-10 group-hover:scale-125 transition-transform duration-300 animate-pulse" 
                   style={{ backgroundColor: '#A1FF0A', borderColor: '#0C0C0C' }}></div>

              {/* Education Card */}
              <div className="ml-16 border rounded-lg p-6 backdrop-blur-sm transition-all duration-500 group-hover:transform group-hover:scale-105" 
                   style={{ backgroundColor: 'rgba(12, 12, 12, 0.6)', borderColor: 'rgba(161, 255, 10, 0.2)' }}
                   onMouseEnter={(e) => {
                     e.currentTarget.style.borderColor = 'rgba(161, 255, 10, 0.6)';
                     e.currentTarget.style.boxShadow = '0 25px 50px rgba(161, 255, 10, 0.2)';
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.borderColor = 'rgba(161, 255, 10, 0.2)';
                     e.currentTarget.style.boxShadow = 'none';
                   }}>
                {/* CRT Header */}
                <div className="border rounded-t-lg p-3 mb-4 font-mono text-sm" style={{ backgroundColor: 'rgba(161, 255, 10, 0.1)', borderColor: 'rgba(161, 255, 10, 0.3)' }}>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: '#A1FF0A' }}></div>
                    <span style={{ color: '#A1FF0A' }}>ACADEMIC_RECORD.exe</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* Main Info */}
                  <div className="md:col-span-2 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2 transition-colors duration-300" 
                          style={{ color: '#F0F0F0' }}
                          onMouseEnter={(e) => e.currentTarget.style.color = '#A1FF0A'}
                          onMouseLeave={(e) => e.currentTarget.style.color = '#F0F0F0'}>
                        {item.institute}
                      </h3>
                      <p className="text-lg" style={{ color: '#8892B0' }}>{item.degree}</p>
                    </div>

                    <div className="flex items-center text-sm font-mono" style={{ color: '#00FFE4' }}>
                      <Calendar className="w-4 h-4 mr-2" />
                      {item.duration}
                    </div>

                    {/* Subjects */}
                    <div>
                      <div className="flex items-center mb-3" style={{ color: '#F0F0F0' }}>
                        <BookOpen className="w-4 h-4 mr-2" />
                        <span className="font-medium">Key Subjects</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {item.subjects.map((subject, subIndex) => (
                          <span
                            key={subIndex}
                            className="px-3 py-1 border rounded-full text-xs font-mono transition-colors duration-300"
                            style={{
                              background: 'linear-gradient(to right, rgba(161, 255, 10, 0.2), rgba(0, 255, 228, 0.2))',
                              borderColor: 'rgba(161, 255, 10, 0.3)',
                              color: '#F0F0F0'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(161, 255, 10, 0.6)'}
                            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(161, 255, 10, 0.3)'}
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4 text-center" 
                         style={{ 
                           background: 'linear-gradient(to bottom right, rgba(161, 255, 10, 0.1), rgba(0, 255, 228, 0.1))',
                           borderColor: 'rgba(161, 255, 10, 0.3)'
                         }}>
                      <Award className="w-8 h-8 mx-auto mb-2" style={{ color: '#A1FF0A' }} />
                      <div className="text-2xl font-bold" style={{ color: '#F0F0F0' }}>{item.gpa}</div>
                      <div className="text-sm" style={{ color: '#8892B0' }}>
                        {item.gpa.includes('%') ? 'Percentage' : 'CGPA'}
                      </div>
                    </div>

                    <div className="border rounded-lg p-4 text-center" 
                         style={{ 
                           background: 'linear-gradient(to bottom right, rgba(0, 255, 228, 0.1), rgba(113, 42, 255, 0.1))',
                           borderColor: 'rgba(0, 255, 228, 0.3)'
                         }}>
                      <GraduationCap className="w-8 h-8 mx-auto mb-2" style={{ color: '#00FFE4' }} />
                      <div className="text-lg font-bold" style={{ color: '#F0F0F0' }}>
                        {index === 0 ? 'Current' : 'Completed'}
                      </div>
                      <div className="text-sm" style={{ color: '#8892B0' }}>Status</div>
                    </div>
                  </div>
                </div>

                {/* Scanline Effect */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-0 left-0 w-full h-1 animate-scan" style={{ background: 'linear-gradient(to right, transparent, #A1FF0A, transparent)' }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Terminal Footer */}
        <div className="mt-16 text-center">
          <div className="border rounded-lg p-4 inline-block font-mono text-sm" style={{ backgroundColor: 'rgba(12, 12, 12, 0.8)', borderColor: 'rgba(161, 255, 10, 0.3)' }}>
            <span style={{ color: '#A1FF0A' }}>shubham@portfolio:~/education$</span>
            <span className="ml-2" style={{ color: '#F0F0F0' }}>grep -i "excellence" academic_records.log</span>
            <div className="mt-2" style={{ color: '#A1FF0A' }}>
              Academic journey: IN_PROGRESS | Next milestone: Graduation 2027
            </div>
          </div>
        </div>
      </div>

      {/* Scanlines */}
      <div className="absolute inset-0 pointer-events-none scanlines opacity-5"></div>
    </section>
  );
};

export default Education;