import React, { useState } from 'react';
import ProjectCard from '../UI/ProjectCard';
import { projectsData } from '../../utils/data';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
          <p className="text-center text-gray-600 dark:text-gray-400 mt-6 max-w-2xl">
            Here are some of my recent projects. Each project reflects my skills and approach to problem-solving.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 sm:gap-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'all'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('react')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'react'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
            >
              ReactJS
            </button>
            <button
              onClick={() => setFilter('javascript')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'javascript'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
            >
              JavaScript
            </button>
            <button
              onClick={() => setFilter('nextjs')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'nextjs'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
            >
              Next.js
            </button>
            <button
              onClick={() => setFilter('typescript')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'typescript'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
            >
              TypeScript
            </button>
            <button
              onClick={() => setFilter('fullstack')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'fullstack'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
            >
              Full Stack
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;