"use client";
import { Github, ExternalLink, ChevronDown } from "lucide-react";
import { useContext } from "react";

const ProjectCard = ({ project, themeClasses, darkMode, setActiveProject, t }) => {
  return (
    <div className={`group relative ${themeClasses.cardBg} rounded-2xl overflow-hidden border ${themeClasses.cardBorder} ${themeClasses.hoverBorder} transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20`}>
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${darkMode ? 'from-slate-900' : 'from-gray-900'} via-transparent to-transparent opacity-60`} />
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
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-3 py-2 ${themeClasses.buttonSecondary} ${themeClasses.buttonSecondaryText} rounded-lg transition-colors text-sm`}
            >
              <Github size={16} />
              {t.projects.code}
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm"
            >
              <ExternalLink size={16} />
              {t.projects.demo}
            </a>
          )}
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
};

export default ProjectCard;
