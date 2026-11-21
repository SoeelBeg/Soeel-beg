import React, { useState } from 'react';
import {
  ArrowUpRight,
  ExternalLink,
  Github,
  FolderOpen,
  ChevronDown,
} from 'lucide-react';

import {
  projectsData,
  type Project,
} from '../../utils/data';

type ProjectCategory =
  | 'all'
  | 'fullstack'
  | 'web'
  | 'mobile'
  | 'backend'
  | 'management';

const categories: {
  label: string;
  value: ProjectCategory;
}[] = [
  { label: 'All', value: 'all' },
  { label: 'Full Stack', value: 'fullstack' },
  { label: 'Web Development', value: 'web' },
  { label: 'Mobile Application', value: 'mobile' },
  { label: 'Backend / API', value: 'backend' },
  { label: 'ERP & Management', value: 'management' },
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<ProjectCategory>('all');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects =
    filter === 'all'
      ? projectsData
      : projectsData.filter(
          (project) => project.category === filter
        );

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 4);

  const handleFilter = (category: ProjectCategory) => {
    setFilter(category);
    setShowAll(false);
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#080b14] px-5 py-24 sm:py-28 lg:px-8"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-cyan-500/[.05] blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-violet-500/[.06] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Label */}
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-8 bg-cyan-300" />

          <span className="font-mono text-[10px] font-semibold uppercase tracking-[.25em] text-cyan-300">
            03 / Selected Work
          </span>

          <span className="h-px flex-1 bg-white/[.08]" />
        </div>

        {/* Heading */}
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl font-black leading-tight tracking-[-.04em] text-white sm:text-5xl lg:text-6xl">
              Things I've built
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                with code.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              A collection of digital products, web applications,
              management systems, and practical solutions built
              using modern technologies.
            </p>
          </div>

          {/* Project Count */}
          <div className="flex items-center gap-3 rounded-xl border border-white/[.08] bg-white/[.03] px-4 py-3">
            <FolderOpen size={20} className="text-cyan-300" />

            <div>
              <p className="font-mono text-lg font-bold text-white">
                {filteredProjects.length.toString().padStart(2, '0')}
              </p>
              <p className="text-[9px] uppercase tracking-widest text-slate-500">
                Projects
              </p>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-9 flex flex-wrap gap-2">
          {categories.map((category) => {
            const isActive = filter === category.value;

            return (
              <button
                key={category.value}
                type="button"
                onClick={() => handleFilter(category.value)}
                className={`rounded-full border px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'border-cyan-300 bg-cyan-300 text-[#080b14] shadow-[0_0_20px_rgba(34,211,238,0.15)]'
                    : 'border-white/10 bg-white/[.02] text-slate-400 hover:border-cyan-300/40 hover:bg-cyan-300/[.06] hover:text-cyan-200'
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div
          key={filter}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {visibleProjects.map((project, index) => {
            const hasDemo =
              !!project.demo && project.demo !== '#';

            const hasGithub =
              !!project.github && project.github !== '#';

            const isFeatured = index === 0 && filter === 'all';

            return (
              <article
                key={project.id}
                style={{
                  animationDelay: `${index * 90}ms`,
                }}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/[.08] bg-[#101626]/80 opacity-0 shadow-[0_10px_35px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300/30 hover:shadow-[0_15px_45px_rgba(34,211,238,0.08)] animate-[projectFadeUp_.65s_ease_forwards] ${
                  isFeatured ? 'sm:col-span-2' : ''
                }`}
              >
                {/* Project Image */}
                <div
                  className={`relative overflow-hidden bg-[#0b101c] ${
                    isFeatured
                      ? 'aspect-[1.7] sm:aspect-[2.1]'
                      : 'aspect-[1.5]'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-70 grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#101626] via-[#101626]/20 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full border border-white/20 bg-[#080b14]/75 px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest text-cyan-200 backdrop-blur-md">
                      {categories.find(
                        (category) => category.value === project.category
                      )?.label}
                    </span>
                  </div>

                  {/* Featured Badge */}
                  {isFeatured && (
                    <div className="absolute right-4 top-4">
                      <span className="rounded-full border border-violet-300/30 bg-violet-400/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest text-violet-200 backdrop-blur-md">
                        Featured Project
                      </span>
                    </div>
                  )}

                  {/* Image Content */}
                  <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-5 sm:p-6">
                    <div className="min-w-0">
                      <h3 className="text-xl font-black text-white transition-colors duration-300 group-hover:text-cyan-200 sm:text-2xl">
                        {project.title}
                      </h3>

                      <p className="mt-2 line-clamp-3 max-w-2xl text-xs leading-6 text-slate-300 sm:text-sm">
                        {project.description}
                      </p>
                    </div>

                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-300 group-hover:rotate-45 group-hover:border-cyan-300 group-hover:bg-cyan-300 group-hover:text-[#080b14]">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>

                {/* Card Details */}
                <div className="flex flex-1 flex-col p-5">

                  {/* Technologies */}
                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-white/[.06] bg-white/[.04] px-2.5 py-1.5 font-mono text-[9px] text-slate-400 transition-colors duration-300 group-hover:text-slate-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Project Actions */}
                  <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-white/[.07] pt-4">

                    {hasDemo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-cyan-300 px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider text-[#080b14] transition-all duration-300 hover:bg-cyan-200 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                      >
                        <ExternalLink size={13} />
                        Live Project
                      </a>
                    )}

                    {/* Source Code only when GitHub URL exists */}
                    {hasGithub && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[.04] px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider text-slate-300 transition-all duration-300 hover:border-violet-300/40 hover:bg-violet-300/10 hover:text-violet-200"
                      >
                        <Github size={14} />
                        Source Code
                      </a>
                    )}

                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="rounded-2xl border border-white/[.08] bg-white/[.03] px-5 py-16 text-center">
            <FolderOpen
              size={35}
              className="mx-auto mb-4 text-slate-600"
            />

            <h3 className="text-lg font-bold text-white">
              No projects found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Projects in this category will be added soon.
            </p>
          </div>
        )}

        {/* View More / View Less */}
        {filteredProjects.length > 4 && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-3 rounded-full border border-cyan-300/30 bg-cyan-300/[.06] px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-cyan-200 transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-300 hover:text-[#080b14] hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]"
            >
              {showAll ? 'View Less' : 'View More'}

              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  showAll ? 'rotate-180' : 'group-hover:translate-y-1'
                }`}
              />
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col items-center text-center">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[.22em] text-cyan-300">
            Have an idea?
          </p>

          <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
            Let's build something meaningful.
          </h3>

          <p className="mt-3 max-w-lg text-sm leading-7 text-slate-500">
            Have a project in mind? Let's discuss how we can
            turn your idea into a working digital solution.
          </p>

          <a
            href="#contact"
            className="group mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-300/10 px-6 py-3 text-xs font-bold uppercase tracking-widest text-cyan-200 transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-300 hover:text-[#080b14]"
          >
            Let's Talk
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

      </div>

      {/* Animation */}
      <style>{`
        @keyframes projectFadeUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
