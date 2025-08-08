import { Languages, Sun, Moon, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar({
  scrollY,
  themeClasses,
  t,
  darkMode,
  setDarkMode,
  languages,
  language,
  setLanguage
    }) 

    {
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300 ${
        scrollY > 50
          ? `${themeClasses.navBg} backdrop-blur-sm border-b ${themeClasses.navBorder}`
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {t.name}
          </h1>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#projects"
              className={`${themeClasses.textSecondary} hover:text-purple-400 transition-colors`}
            >
              {t.nav.projects}
            </a>
            <a
              href="#skills"
              className={`${themeClasses.textSecondary} hover:text-purple-400 transition-colors`}
            >
              {t.nav.skills}
            </a>
            <a
              href="#contact"
              className={`${themeClasses.textSecondary} hover:text-purple-400 transition-colors`}
            >
              {t.nav.contact}
            </a>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                className={`flex items-center gap-2 px-3 py-2 ${themeClasses.buttonSecondary} ${themeClasses.buttonSecondaryText} rounded-lg transition-colors`}
              >
                <Languages size={16} />
                {languages.find((lang) => lang.code === language)?.flag}
              </button>

              {languageMenuOpen && (
                <div
                  className={`absolute right-0 mt-2 w-40 ${themeClasses.modalBg} rounded-lg shadow-lg border ${themeClasses.modalBorder} py-2`}
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setLanguageMenuOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-2 hover:bg-purple-100 ${
                        darkMode
                          ? "hover:bg-slate-800"
                          : "hover:bg-gray-100"
                      } transition-colors ${themeClasses.text}`}
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
              {darkMode ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-slate-600" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${themeClasses.text}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu content */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden mt-4 pb-4 border-t ${themeClasses.navBorder}`}
          >
            <div className="flex flex-col gap-4 mt-4">
              <a
                href="#projects"
                className={`${themeClasses.textSecondary} hover:text-purple-400 transition-colors`}
              >
                {t.nav.projects}
              </a>
              <a
                href="#skills"
                className={`${themeClasses.textSecondary} hover:text-purple-400 transition-colors`}
              >
                {t.nav.skills}
              </a>
              <a
                href="#contact"
                className={`${themeClasses.textSecondary} hover:text-purple-400 transition-colors`}
              >
                {t.nav.contact}
              </a>

              <div className="flex items-center gap-4 mt-2">
                {/* Language Selector */}
                <div className="relative">
                  <button
                    onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                    className={`flex items-center gap-2 px-3 py-2 ${themeClasses.buttonSecondary} ${themeClasses.buttonSecondaryText} rounded-lg transition-colors`}
                  >
                    <Languages size={16} />
                    {languages.find((lang) => lang.code === language)?.flag}
                  </button>

                  {languageMenuOpen && (
                    <div
                      className={`absolute left-0 mt-2 w-40 ${themeClasses.modalBg} rounded-lg shadow-lg border ${themeClasses.modalBorder} py-2`}
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code);
                            setLanguageMenuOpen(false);
                          }}
                          className={`w-full flex items-center gap-3 px-4 py-2 hover:bg-purple-100 ${
                            darkMode
                              ? "hover:bg-slate-800"
                              : "hover:bg-gray-100"
                          } transition-colors ${themeClasses.text}`}
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
                  {darkMode ? (
                    <Sun size={20} className="text-yellow-400" />
                  ) : (
                    <Moon size={20} className="text-slate-600" />
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
