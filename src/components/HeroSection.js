import "../utils/style.css"

import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, className, speed = 150, pause = 1000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!deleting && index <= text.length) {
      timeout = setTimeout(() => {
        setDisplayedText(text.substring(0, index));
        setIndex(index + 1);
      }, speed);
    } else if (deleting && index >= 0) {
      timeout = setTimeout(() => {
        setDisplayedText(text.substring(0, index));
        setIndex(index - 1);
      }, speed);
    }

    if (index === text.length + 1) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (index === -1) {
      setDeleting(false);
      setIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [index, deleting, text, speed, pause]);

  return <span className={className}>{displayedText}<span className="inline-block animate-pulse">|</span></span>;
};

export default function Hero({ themeClasses, t }) {
  return (
    <section className="h-screen flex flex-col justify-center items-center pt-32 pb-20 px-6">

      <div className="absolute inset-0 overflow-hidden opacity-50">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-radial from-purple-600/80 via-purple-400/30 to-transparent blur-xl animate-float-1"></div>
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-radial from-pink-600/80 via-pink-400/30 to-transparent blur-xl animate-float-2"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-radial from-pink-500/80 via-pink-300/35 to-transparent blur-xl animate-float-3"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-radial from-purple-500/80 via-purple-300/35 to-transparent blur-xl animate-float-4"></div>
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-80 animate-morph-1"></div>
        <div className="absolute bottom-1/4 right-1/4 w-88 h-88 bg-pink-400 rounded-full blur-3xl opacity-85 animate-morph-2"></div>
        
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-gradient-to-br from-purple-500/70 to-pink-500/70 rounded-full blur-2xl opacity-70 animate-morph-3"></div>
        <div className="absolute bottom-1/3 left-1/2 w-64 h-64 bg-gradient-to-tl from-pink-600/70 to-purple-400/70 rounded-full blur-2xl opacity-75 animate-morph-4"></div>
        
        <div className="absolute top-16 left-1/2 w-80 h-80 bg-purple-300 rounded-full blur-3xl opacity-60 transform -translate-x-1/2 animate-float-5"></div>
        <div className="absolute bottom-16 right-1/2 w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-65 transform translate-x-1/2 animate-float-6"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center fade-in space-y-8">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 blur-3xl opacity-20 rounded-full"></div>
          
          <h1 className={`relative text-5xl md:text-7xl font-bold ${themeClasses.text} mb-6`}>
            <span className="inline md:inline-block">
              {t.hero.title.split(" ").slice(0, -1).join(" ")}
              {" "}
            </span>
            <span className="block md:inline-block ml-2">
              <Typewriter 
                text={t.hero.title.split(" ").slice(-1)[0]}
                className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              />
            </span>
          </h1>
        </div>

        <p className={`text-xl ${themeClasses.textSecondary} mb-8 mx-auto leading-relaxed`}
           style={{ whiteSpace: 'pre-line' }}
        >  
          {t.hero.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105"
          >
            {t.hero.viewProjects}
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
          >
            {t.hero.contact}
          </a>
        </div>

      </div>
    </section>
  );
}
