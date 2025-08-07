"use client";
import React, { useState, useEffect } from 'react';
import skills from '@/data/skills';
import translations from '@/data/i18n/index';
import getProjects from '@/data/projects';
import { Github, ExternalLink, Play, FileText, Code, Database, Globe, Mail, Linkedin, Menu, X, ChevronDown, Sun, Moon, Languages } from 'lucide-react';
import getThemeClasses from '@/utils/getThemeClasses';

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState('es');
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = translations[language];
  const projects = getProjects(t);
  const themeClasses = getThemeClasses(darkMode);

  const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' }
  ];

  const ProjectCard = ({ project }) => (
    <div className={`group relative ${themeClasses.cardBg} rounded-2xl overflow-hidden border ${themeClasses.cardBorder} ${themeClasses.hoverBorder} transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20`}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className={`absolute inset-0 bg-gradient-to-t ${darkMode ? 'from-slate-900' : 'from-gray-900'} via-transparent to-transparent opacity-60`}></div>
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full font-medium">
            {project.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className={`text-xl font-bold ${themeClasses.text} mb-2 group-hover:text-purple-300 transition-colors`}>
          {project.title}
        </h3>
        <p className={`${themeClasses.textSecondary} mb-4`}>{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className={`px-2 py-1 ${themeClasses.techBg} ${themeClasses.techText} text-xs rounded-lg`}>
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          {project.github &&
          (
            <a href={project.github} className={`flex items-center gap-2 px-3 py-2 ${themeClasses.buttonSecondary} ${themeClasses.buttonSecondaryText} rounded-lg transition-colors text-sm`}
               target='_blank'
               rel="noopener noreferrer"
            >  
              <Github size={16} />
              {t.projects.code}
            </a>
          )
          }

          {project.demo &&
          (
            <a href={project.demo} className="flex items-center gap-2 px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm"
               target='_blank'
               rel="noopener noreferrer"
            >
              <ExternalLink size={16} />
              {t.projects.demo}
            </a>
          )
          }

          <button 
            onClick={() => setActiveProject(project)}
            className={`flex items-center gap-1 px-3 py-2 border ${themeClasses.cardBorder} hover:border-purple-500 ${themeClasses.textSecondary} hover:text-purple-300 rounded-lg transition-colors text-sm`}
          >
            <ChevronDown size={16} />
            {t.projects.more}
          </button>
        </div>
      </div>
    </div>
  );

  const ProjectModal = ({ project, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50">
      <div className={`${themeClasses.modalBg} rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border ${themeClasses.modalBorder}`}>
        <div className={`p-6 border-b ${themeClasses.modalBorder} flex justify-between items-center`}>
          <h2 className={`text-2xl font-bold ${themeClasses.text}`}>{project.title}</h2>
          <button onClick={onClose} className={`${themeClasses.textSecondary} hover:${themeClasses.text}`}>
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6">
          {/*<img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg mb-6" />*/}
          
          <video
            src={project.shortVideo}
            preload='auto'
            autoPlay
            loop
            muted
            playsInline
          className="
            w-full 
            h-35         
            sm:h-65       
            md:h-90       
            object-cover  
            sm:object-cover 
            rounded-xl 
            mb-4
          "          />
          
          <p className={`${themeClasses.textSecondary} mb-6`}>{project.description}</p>
          <p className={`${themeClasses.textSecondary} mb-6 whitespace-pre-line`}>{project.longDescription}</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className={`text-lg font-semibold ${themeClasses.text} mb-3`}>{t.projects.technologies}</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-purple-600 text-white rounded-lg text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className={`text-lg font-semibold ${themeClasses.text} mb-3`}>{t.projects.links}</h3>
              <div className="space-y-3">
                {project.github &&
                (
                  <a href={project.github} className={`flex items-center gap-3 p-3 ${themeClasses.buttonSecondary} rounded-lg transition-colors`}
                    target='_blank'
                    rel="noopener noreferrer"
                  >
                    <Github size={20} className={themeClasses.text} />
                    <span className={`${themeClasses.text} font-medium`}>{t.projects.repository}</span>
                  </a>
                )}

                {project.demo &&
                (
                <a href={project.demo} className={`flex items-center gap-3 p-3 ${themeClasses.buttonSecondary} rounded-lg transition-colors`}
                  target='_blank'
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={20} className="text-purple-400" />
                  <span className={`${themeClasses.text} font-medium`}>{t.projects.liveDemo}</span>
                </a>
                )}

                {project.documentation &&
                (
                <a href={project.documentation} className={`flex items-center gap-3 p-3 ${themeClasses.buttonSecondary} rounded-lg transition-colors`}
                   target='_blank'
                   rel="noopener noreferrer"
                >
                  <FileText size={20} className="text-blue-400" />
                  <span className={`${themeClasses.text} font-medium`}>{t.projects.documentation}</span>
                </a>
                )}

                {project.video &&
                (
                <a href={project.video} className={`flex items-center gap-3 p-3 ${themeClasses.buttonSecondary} rounded-lg transition-colors`}
                   target='_blank'
                   rel="noopener noreferrer"
                >
                  <Play size={20} className="text-red-400" />
                  <span className={`${themeClasses.text} font-medium`}>{t.projects.videoDemo}</span>
                </a>
                )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen ${themeClasses.bg}`}>
      {/* Navbar */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${scrollY > 50 ? `${themeClasses.navBg} backdrop-blur-sm border-b ${themeClasses.navBorder}` : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t.name}
            </h1>
            
            <div className="hidden md:flex items-center gap-6">
              <a href="#projects" className={`${themeClasses.textSecondary} hover:text-purple-400 transition-colors`}>{t.nav.projects}</a>
              <a href="#skills" className={`${themeClasses.textSecondary} hover:text-purple-400 transition-colors`}>{t.nav.skills}</a>
              <a href="#contact" className={`${themeClasses.textSecondary} hover:text-purple-400 transition-colors`}>{t.nav.contact}</a>
              
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                  className={`flex items-center gap-2 px-3 py-2 ${themeClasses.buttonSecondary} ${themeClasses.buttonSecondaryText} rounded-lg transition-colors`}
                >
                  <Languages size={16} />
                  {languages.find(lang => lang.code === language)?.flag}
                </button>
                {languageMenuOpen && (
                  <div className={`absolute right-0 mt-2 w-40 ${themeClasses.modalBg} rounded-lg shadow-lg border ${themeClasses.modalBorder} py-2`}>
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setLanguageMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-2 hover:bg-purple-100 ${darkMode ? 'hover:bg-slate-800' : 'hover:bg-gray-100'} transition-colors ${themeClasses.text}`}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Theme Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 ${themeClasses.buttonSecondary} rounded-lg transition-colors`}
              >
                {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-600" />}
              </button>
            </div>
            
            <button 
              className={`md:hidden ${themeClasses.text}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {mobileMenuOpen && (
            <div className={`md:hidden mt-4 pb-4 border-t ${themeClasses.navBorder}`}>
              <div className="flex flex-col gap-4 mt-4">
                <a href="#projects" className={`${themeClasses.textSecondary} hover:text-purple-400 transition-colors`}>{t.nav.projects}</a>
                <a href="#skills" className={`${themeClasses.textSecondary} hover:text-purple-400 transition-colors`}>{t.nav.skills}</a>
                <a href="#contact" className={`${themeClasses.textSecondary} hover:text-purple-400 transition-colors`}>{t.nav.contact}</a>
                
                <div className="flex items-center gap-4 mt-2">
                  <div className="relative">
                    <button
                      onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                      className={`flex items-center gap-2 px-3 py-2 ${themeClasses.buttonSecondary} ${themeClasses.buttonSecondaryText} rounded-lg transition-colors`}
                    >
                      <Languages size={16} />
                      {languages.find(lang => lang.code === language)?.flag}
                    </button>
                  </div>
                  
                  <button
                    onClick={() => setDarkMode(!darkMode)}
                    className={`p-2 ${themeClasses.buttonSecondary} rounded-lg transition-colors`}
                  >
                    {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-600" />}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 blur-3xl opacity-20 rounded-full"></div>
            <h1 className={`relative text-5xl md:text-7xl font-bold ${themeClasses.text} mb-6`}>
              {t.hero.title.split(' ').slice(0, -1).join(' ')}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> {t.hero.title.split(' ').slice(-1)}</span>
            </h1>
          </div>
          <p className={`text-xl ${themeClasses.textSecondary} mb-8 mx-auto leading-relaxed`}>
            {t.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105">
              {t.hero.viewProjects}
            </a>
            <a href="#contact" className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300">
              {t.hero.contact}
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold ${themeClasses.text} mb-4`}>{t.projects.title}</h2>
            <p className={`${themeClasses.textSecondary} text-lg mx-auto`}>
              {t.projects.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 px-6 ${themeClasses.skillsBg}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold ${themeClasses.text} mb-4`}>{t.skills.title}</h2>
            <p className={`${themeClasses.textSecondary} text-lg`}>{t.skills.description}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className={`${themeClasses.cardBg} p-6 rounded-2xl border ${themeClasses.cardBorder}`}>
              <div className="flex items-center gap-3 mb-4">
                <Globe className="text-blue-400" size={24} />
                <h3 className={`text-xl font-semibold ${themeClasses.text}`}>{t.skills.frontend}</h3>
              </div>
              <div className="space-y-2">
                {skills.frontend.map((skill, index) => (
                  <div key={index} className={themeClasses.textSecondary}>{skill}</div>
                ))}
              </div>
            </div>
            
            <div className={`${themeClasses.cardBg} p-6 rounded-2xl border ${themeClasses.cardBorder}`}>
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-green-400" size={24} />
                <h3 className={`text-xl font-semibold ${themeClasses.text}`}>{t.skills.backend}</h3>
              </div>
              <div className="space-y-2">
                {skills.backend.map((skill, index) => (
                  <div key={index} className={themeClasses.textSecondary}>{skill}</div>
                ))}
              </div>
            </div>
            
            <div className={`${themeClasses.cardBg} p-6 rounded-2xl border ${themeClasses.cardBorder}`}>
              <div className="flex items-center gap-3 mb-4">
                <Database className="text-purple-400" size={24} />
                <h3 className={`text-xl font-semibold ${themeClasses.text}`}>{t.skills.database}</h3>
              </div>
              <div className="space-y-2">
                {skills.database.map((skill, index) => (
                  <div key={index} className={themeClasses.textSecondary}>{skill}</div>
                ))}
              </div>
            </div>

            <div className={`${themeClasses.cardBg} p-6 rounded-2xl border ${themeClasses.cardBorder}`}>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="text-yellow-400" size={24} />
                <h3 className={`text-xl font-semibold ${themeClasses.text}`}>{t.skills.tools}</h3>
              </div>
              <div className="space-y-2">
                {skills.tools.map((skill, index) => (
                  <div key={index} className={themeClasses.textSecondary}>{skill}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl font-bold ${themeClasses.text} mb-8`}>{t.contact.title}</h2>
          <p className={`${themeClasses.textSecondary} text-lg mb-12`}>
            {t.contact.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="mailto:andreaojedazam@gmail.com" className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105">
              <Mail size={20} />
              {t.contact.sendEmail}
            </a>
            <a href="/cv-andrea.pdf" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 border-2 border-pink-500 text-pink-500 rounded-full font-semibold hover:bg-pink-500 hover:text-white transition-all duration-300 hover:scale-105"

            >
              <FileText size={20} />
              {t.contact.viewCV}
            </a>
            <a href="https://linkedin.com/in/andreaoz" className="flex items-center gap-3 px-6 py-4 border-2 border-purple-500 text-purple-400 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300">
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a href="https://github.com/andreaoz" className={`flex items-center gap-3 px-6 py-4 border-2 ${themeClasses.cardBorder} ${themeClasses.textSecondary} rounded-full font-semibold hover:bg-gray-600 hover:text-white transition-all duration-300`}>
              <Github size={20} />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${themeClasses.footerBg} py-8 px-6 border-t ${themeClasses.footerBorder}`}>
        <div className={`max-w-6xl mx-auto text-center ${themeClasses.textSecondary}`}>
          <p>&copy; 2025 {t.name}. {t.footer}</p>
        </div>
      </footer>

      {/* Project Modal */}
      {activeProject && (
        <ProjectModal 
          project={activeProject} 
          onClose={() => setActiveProject(null)} 
        />
      )}
    </div>
  );
};

export default Portfolio;