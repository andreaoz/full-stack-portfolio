import { Mail, FileText, Linkedin, Github } from 'lucide-react';

export default function ContactSection({ themeClasses, t }) {
  return (
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
  );
}
