import React, { useEffect, useState } from 'react';
import { Mail, Phone, Github, Linkedin, ExternalLink, Send, Terminal } from 'lucide-react';

interface ContactData {
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  portfolio: string;
}

const Contact: React.FC = () => {
  const [contactData, setContactData] = useState<ContactData | null>(null);
  const [terminalText, setTerminalText] = useState('');
  const [showForm, setShowForm] = useState(false);

  const terminalMessage = "Initializing secure connection... Ready to receive transmission.";

  useEffect(() => {
    // Load contact data
    fetch('/src/data/contact.json')
      .then(res => res.json())
      .then(data => setContactData(data))
      .catch(() => {
        // Fallback data
        setContactData({
          email: "shubh.shubhamkrsingh@gmail.com",
          phone: "+91 7991694431",
          github: "https://github.com/Shubham-404",
          linkedin: "https://www.linkedin.com/in/shubham-404-/",
          portfolio: "https://shubham-404.github.io/Portfolio"
        });
      });

    // Typewriter effect for terminal
    let i = 0;
    const typeWriter = () => {
      if (i < terminalMessage.length) {
        setTerminalText(prev => prev + terminalMessage.charAt(i));
        i++;
        setTimeout(typeWriter, 50);
      } else {
        setTimeout(() => setShowForm(true), 500);
      }
    };
    
    const timer = setTimeout(typeWriter, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!contactData) {
    return (
      <section className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-pink-500 font-mono">Establishing connection...</div>
      </section>
    );
  }

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: contactData.email,
      link: `mailto:${contactData.email}`,
      color: 'from-pink-500 to-red-500'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: contactData.phone,
      link: `tel:${contactData.phone}`,
      color: 'from-green-400 to-teal-500'
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      value: 'Shubham-404',
      link: contactData.github,
      color: 'from-gray-400 to-gray-600'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'shubham-404',
      link: contactData.linkedin,
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: <ExternalLink className="w-6 h-6" />,
      label: 'Portfolio',
      value: 'View Current',
      link: contactData.portfolio,
      color: 'from-cyan-400 to-purple-500'
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 relative overflow-hidden" style={{ backgroundColor: '#0C0C0C' }}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-cyan-500/10"></div>
        <div className="network-background opacity-5"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 glitch-text" style={{ color: '#F0F0F0' }}>
            Contact
            <span style={{ color: '#FF2C58' }}>.</span>
          </h2>
          <div className="w-20 h-1 mx-auto mb-8" style={{ background: 'linear-gradient(to right, #FF2C58, #00FFE4)' }}></div>
          
          {/* Terminal Introduction */}
          <div className="border rounded-lg p-6 max-w-2xl mx-auto font-mono text-sm mb-8" style={{ backgroundColor: 'rgba(12, 12, 12, 0.8)', borderColor: 'rgba(161, 255, 10, 0.3)' }}>
            <div className="flex items-center mb-4">
              <Terminal className="w-5 h-5 mr-2" style={{ color: '#A1FF0A' }} />
              <span style={{ color: '#A1FF0A' }}>shubham@portfolio:~/contact$</span>
            </div>
            <div style={{ color: '#A1FF0A' }}>
              {'>'} {terminalText}
              <span className="animate-pulse" style={{ color: '#FF2C58' }}>|</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8 flex items-center" style={{ color: '#F0F0F0' }}>
              <div className="w-8 h-8 rounded-full mr-3 animate-pulse" style={{ background: 'linear-gradient(to right, #FF2C58, #00FFE4)' }}></div>
              Reach me at
            </h3>

            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border rounded-lg p-6 transition-all duration-300 hover:transform hover:scale-105"
                style={{ backgroundColor: 'rgba(12, 12, 12, 0.6)', borderColor: 'rgba(255, 44, 88, 0.2)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 44, 88, 0.6)';
                  e.currentTarget.style.backgroundColor = 'rgba(12, 12, 12, 0.8)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 44, 88, 0.2)';
                  e.currentTarget.style.backgroundColor = 'rgba(12, 12, 12, 0.6)';
                }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300" 
                       style={{ 
                         background: method.color.includes('pink') ? 'linear-gradient(to right, #FF2C58, #FF0000)' :
                                   method.color.includes('green') ? 'linear-gradient(to right, #A1FF0A, #00FFE4)' :
                                   method.color.includes('gray') ? 'linear-gradient(to right, #8892B0, #712AFF)' :
                                   method.color.includes('blue') ? 'linear-gradient(to right, #00FFE4, #712AFF)' :
                                   'linear-gradient(to right, #00FFE4, #712AFF)',
                         color: '#F0F0F0'
                       }}>
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium transition-colors duration-300" 
                        style={{ color: '#F0F0F0' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#FF2C58'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#F0F0F0'}>
                      {method.label}
                    </h4>
                    <p className="text-sm font-mono" style={{ color: '#8892B0' }}>{method.value}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 transition-colors duration-300" 
                                style={{ color: '#8892B0' }}
                                onMouseEnter={(e) => e.currentTarget.style.color = '#00FFE4'}
                                onMouseLeave={(e) => e.currentTarget.style.color = '#8892B0'} />
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 ${showForm ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="border rounded-lg p-6 backdrop-blur-sm" style={{ backgroundColor: 'rgba(12, 12, 12, 0.6)', borderColor: 'rgba(0, 255, 228, 0.2)' }}>
              <h3 className="text-2xl font-bold mb-6 flex items-center" style={{ color: '#F0F0F0' }}>
                <div className="w-8 h-8 rounded-full mr-3 animate-pulse" style={{ background: 'linear-gradient(to right, #00FFE4, #FF2C58)' }}></div>
                Send Message
              </h3>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 font-mono" style={{ color: '#8892B0' }}>
                    {'>'} Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 transition-colors duration-300"
                    style={{ 
                      backgroundColor: 'rgba(12, 12, 12, 0.4)',
                      borderColor: 'rgba(255, 44, 88, 0.3)',
                      color: '#F0F0F0'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#FF2C58';
                      e.currentTarget.style.boxShadow = '0 0 0 1px #FF2C58';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 44, 88, 0.3)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                    placeholder="Enter your name..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 font-mono" style={{ color: '#8892B0' }}>
                    {'>'} Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 transition-colors duration-300"
                    style={{ 
                      backgroundColor: 'rgba(12, 12, 12, 0.4)',
                      borderColor: 'rgba(255, 44, 88, 0.3)',
                      color: '#F0F0F0'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#FF2C58';
                      e.currentTarget.style.boxShadow = '0 0 0 1px #FF2C58';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 44, 88, 0.3)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 font-mono" style={{ color: '#8892B0' }}>
                    {'>'} Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 transition-colors duration-300 resize-none"
                    style={{ 
                      backgroundColor: 'rgba(12, 12, 12, 0.4)',
                      borderColor: 'rgba(255, 44, 88, 0.3)',
                      color: '#F0F0F0'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#FF2C58';
                      e.currentTarget.style.boxShadow = '0 0 0 1px #FF2C58';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 44, 88, 0.3)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                  style={{ 
                    background: 'linear-gradient(to right, #FF2C58, #00FFE4)',
                    color: '#F0F0F0'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(to right, #FF0000, #712AFF)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(255, 44, 88, 0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(to right, #FF2C58, #00FFE4)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <Send className="w-5 h-5" />
                  <span>Transmit Message</span>
                </button>
              </form>

              <div className="mt-6 text-center text-sm font-mono" style={{ color: '#8892B0' }}>
                {'>'} Message will be sent via email
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CRT Display */}
        <div className="mt-16 text-center">
          <div className="border rounded-lg p-4 inline-block font-mono text-sm" style={{ backgroundColor: 'rgba(12, 12, 12, 0.8)', borderColor: 'rgba(161, 255, 10, 0.3)' }}>
            <span style={{ color: '#A1FF0A' }}>shubham@portfolio:~/contact$</span>
            <span className="ml-2" style={{ color: '#F0F0F0' }}>echo "Ready for collaboration"</span>
            <div className="mt-2" style={{ color: '#A1FF0A' }}>
              Status: ONLINE | Response time: &lt; 24 hours
            </div>
          </div>
        </div>
      </div>

      {/* Scanlines */}
      <div className="absolute inset-0 pointer-events-none scanlines opacity-5"></div>
    </section>
  );
};

export default Contact;