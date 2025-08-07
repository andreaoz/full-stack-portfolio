"use client";
import { Github, ExternalLink, FileText, Play, X } from "lucide-react";

const ProjectModal = ({ project, themeClasses, t, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50">
      <div className={`${themeClasses.modalBg} rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border ${themeClasses.modalBorder}`}>
        <div className={`p-6 border-b ${themeClasses.modalBorder} flex justify-between items-center`}>
          <h2 className={`text-2xl font-bold ${themeClasses.text}`}>{project.title}</h2>
          <button onClick={onClose} className={`${themeClasses.textSecondary} hover:${themeClasses.text}`}>
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          <video
            src={project.shortVideo}
            preload="auto"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-35 sm:h-65 md:h-90 object-cover sm:object-cover rounded-xl mb-4"
          />

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
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-3 p-3 ${themeClasses.buttonSecondary} rounded-lg transition-colors`}>
                    <Github size={20} className={themeClasses.text} />
                    <span className={`${themeClasses.text} font-medium`}>{t.projects.repository}</span>
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-3 p-3 ${themeClasses.buttonSecondary} rounded-lg transition-colors`}>
                    <ExternalLink size={20} className="text-purple-400" />
                    <span className={`${themeClasses.text} font-medium`}>{t.projects.liveDemo}</span>
                  </a>
                )}
                {project.documentation && (
                  <a href={project.documentation} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-3 p-3 ${themeClasses.buttonSecondary} rounded-lg transition-colors`}>
                    <FileText size={20} className="text-blue-400" />
                    <span className={`${themeClasses.text} font-medium`}>{t.projects.documentation}</span>
                  </a>
                )}
                {project.video && (
                  <a href={project.video} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-3 p-3 ${themeClasses.buttonSecondary} rounded-lg transition-colors`}>
                    <Play size={20} className="text-red-400" />
                    <span className={`${themeClasses.text} font-medium`}>{t.projects.videoDemo}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
