"use client";
import React, { useState, useEffect } from 'react';
import skills from '@/data/skills';
import translations from '@/data/i18n/index';
import getProjects from '@/data/projects';
import { Github, ExternalLink, Play, FileText, Code, Database, Globe, Mail, Linkedin, Menu, X, ChevronDown, Sun, Moon, Languages } from 'lucide-react';
import getThemeClasses from '@/utils/getThemeClasses';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';

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
                  
                  {languageMenuOpen && (
                    <div className={`absolute left-0 mt-2 w-40 ${themeClasses.modalBg} rounded-lg shadow-lg border ${themeClasses.modalBorder} py-2`}>
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
              <ProjectCard 
                key={project.id} 
                project={project} 
                themeClasses={themeClasses}
                darkMode={darkMode}
                setActiveProject={setActiveProject}
                t={t}/>
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
                    themeClasses={themeClasses}
          t={t}
        />
      )}
    </div>
  );


};

export default Portfolio;