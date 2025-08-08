"use client";
import React, { useState, useEffect } from 'react';
import skills from '@/data/skills';
import translations from '@/data/i18n/index';
import getProjects from '@/data/projects';
import { Github, ExternalLink, Play, FileText, Code, Database, Globe, Mail, Linkedin, Menu, X, ChevronDown, Sun, Moon, Languages } from 'lucide-react';
import getThemeClasses from '@/utils/getThemeClasses';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';
import ScrollToTopButton from '@/components/ToTopButton';
import Navbar from '@/components/NavbarSection';
import Hero from '@/components/HeroSection';
import ProjectSection from '@/components/ProjectSection';
import SkillSection from '@/components/SkillSection';
import ContactSection from '@/components/ContactSection';
import languages from '@/data/languages';

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

  return (
    <div className={`min-h-screen ${themeClasses.bg}`}>
      {/* Navbar Section */}
      <Navbar
        scrollY={scrollY}
        themeClasses={themeClasses}
        t={t}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        languages={languages}
        language={language}
        setLanguage={setLanguage}
      />

      {/* Hero Section */}
      <Hero 
        themeClasses={themeClasses} 
        t={t} 
      />

      {/* Projects Section */}
      <ProjectSection
        projects={projects}
        themeClasses={themeClasses}
        darkMode={darkMode}
        setActiveProject={setActiveProject}
        t={t}
      />

      {/* Skills Section */}
      <SkillSection
        themeClasses={themeClasses}
        t={t}
      />

      {/* Contact Section */}
      <ContactSection
        themeClasses={themeClasses}
        t={t}
      />

      <ScrollToTopButton />

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