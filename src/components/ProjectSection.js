import ProjectCard from './ProjectCard';

export default function ProjectSection({ projects, themeClasses, darkMode, setActiveProject, t }) {
  return (
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
              t={t}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
