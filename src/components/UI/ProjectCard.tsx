import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../../utils/data';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-2">
      <div className="relative overflow-hidden h-48">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <div className="flex justify-end space-x-3">
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-white dark:bg-gray-800 rounded-full text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="View GitHub repository"
                >
                  <Github size={20} />
                </a>
              )}
              
              {project.demo && (
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-white dark:bg-gray-800 rounded-full text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="View live demo"
                >
                  <ExternalLink size={20} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold">{project.title}</h3>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;