"use client";
import { useContext } from "react";

const Aboutme = ({ themeClasses, t  }) => {
  return (
    <section id="aboutme" className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center fade-in space-y-8">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 blur-3xl opacity-20 rounded-full"></div>
          
          <h1 className={`relative text-5xl md:text-7xl font-bold ${themeClasses.text} mb-6`}>
            <h2 className={`text-4xl font-bold ${themeClasses.text} mb-4`}>{t.aboutme.title}</h2>
          </h1>
        </div>

        <p className={`text-xl ${themeClasses.textSecondary} mb-2 mx-auto leading-relaxed`}
           style={{ whiteSpace: 'pre-line' }}>  
          {t.aboutme.exp}
        </p>

        <p className={`text-xl ${themeClasses.textSecondary} mb-2 mx-auto leading-relaxed`}
           style={{ whiteSpace: 'pre-line' }}>  
          {t.aboutme.edu}
        </p>

        <p className={`text-xl ${themeClasses.textSecondary} mb-2 mx-auto leading-relaxed`}
           style={{ whiteSpace: 'pre-line' }}>  
          {t.aboutme.extra}
        </p>

      </div>
    </section>
  );
};

export default Aboutme;
