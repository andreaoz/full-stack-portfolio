import { Globe, Code, Database, FileText } from 'lucide-react';
import skills from '@/data/skills';

export default function SkillSection({ themeClasses, t }) {
  return (
    <section id="skills" className={`py-20 px-6 ${themeClasses.skillsBg}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold ${themeClasses.text} mb-4`}>{t.skills.title}</h2>
          <p className={`${themeClasses.textSecondary} text-lg`}>{t.skills.description}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[{
            icon: <Globe className="text-blue-400" size={24} />,
            title: t.skills.frontend,
            items: skills.frontend
          }, {
            icon: <Code className="text-green-400" size={24} />,
            title: t.skills.backend,
            items: skills.backend
          }, {
            icon: <Database className="text-purple-400" size={24} />,
            title: t.skills.database,
            items: skills.database
          }, {
            icon: <FileText className="text-yellow-400" size={24} />,
            title: t.skills.tools,
            items: skills.tools
          }].map(({icon, title, items}, idx) => (
            <div key={idx} className={`${themeClasses.cardBg} p-6 rounded-2xl border ${themeClasses.cardBorder}`}>
              <div className="flex items-center gap-3 mb-4">
                {icon}
                <h3 className={`text-xl font-semibold ${themeClasses.text}`}>{title}</h3>
              </div>
              <div className="space-y-2">
                {items.map((skill, index) => (
                  <div key={index} className={themeClasses.textSecondary}>{skill}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
