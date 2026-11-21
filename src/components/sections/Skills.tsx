
import React from 'react';
import {
  Code2,
  Server,
  Database,
  Wrench,
  Lightbulb,
  Terminal,
  ArrowUpRight,
  Smartphone,
  Sparkles,
} from 'lucide-react';

const skillGroups = [
  {
    number: '01',
    title: 'Frontend Development',
    subtitle: 'Building user interfaces',
    icon: Code2,
    color: 'cyan',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'React.js',
      'Tailwind CSS',
      'Bootstrap',
      'Responsive Design',
    ],
  },
  {
    number: '02',
    title: 'Backend Development',
    subtitle: 'Building application logic',
    icon: Server,
    color: 'violet',
    skills: [
      'C#',
      '.NET Core',
      'ASP.NET Core',
      'Blazor',
      'RESTful Web API',
      'Entity Framework Core',
      'API Integration',
    ],
  },
  {
    number: '03',
    title: 'Database Technologies',
    subtitle: 'Managing application data',
    icon: Database,
    color: 'emerald',
    skills: [
      'SQL Server',
      'MySQL',
      'Database Design',
      'SQL Queries',
      'CRUD Operations',
      'Data Integration',
    ],
  },
  {
    number: '04',
    title: 'Tools & Workflow',
    subtitle: 'Development environment',
    icon: Wrench,
    color: 'orange',
    skills: [
      'Git',
      'GitHub',
      'Postman',
      'Visual Studio',
      'VS Code',
      'npm',
      'Chrome DevTools',
    ],
  },
  {
    number: '05',
    title: 'Professional Skills',
    subtitle: 'Beyond writing code',
    icon: Lightbulb,
    color: 'pink',
    skills: [
      'Problem Solving',
      'Debugging',
      'UI Implementation',
      'Performance Optimization',
      'Clean Code',
      'Continuous Learning',
    ],
  },
];

const colorStyles: Record<
  string,
  {
    icon: string;
    border: string;
    glow: string;
    number: string;
    bullet: string;
  }
> = {
  cyan: {
    icon: 'bg-cyan-400/10 text-cyan-300',
    border: 'hover:border-cyan-300/40',
    glow: 'group-hover:shadow-[0_0_35px_rgba(34,211,238,0.08)]',
    number: 'text-cyan-300',
    bullet: 'bg-cyan-300',
  },
  violet: {
    icon: 'bg-violet-400/10 text-violet-300',
    border: 'hover:border-violet-300/40',
    glow: 'group-hover:shadow-[0_0_35px_rgba(167,139,250,0.08)]',
    number: 'text-violet-300',
    bullet: 'bg-violet-300',
  },
  emerald: {
    icon: 'bg-emerald-400/10 text-emerald-300',
    border: 'hover:border-emerald-300/40',
    glow: 'group-hover:shadow-[0_0_35px_rgba(52,211,153,0.08)]',
    number: 'text-emerald-300',
    bullet: 'bg-emerald-300',
  },
  orange: {
    icon: 'bg-orange-400/10 text-orange-300',
    border: 'hover:border-orange-300/40',
    glow: 'group-hover:shadow-[0_0_35px_rgba(251,146,60,0.08)]',
    number: 'text-orange-300',
    bullet: 'bg-orange-300',
  },
  pink: {
    icon: 'bg-pink-400/10 text-pink-300',
    border: 'hover:border-pink-300/40',
    glow: 'group-hover:shadow-[0_0_35px_rgba(244,114,182,0.08)]',
    number: 'text-pink-300',
    bullet: 'bg-pink-300',
  },
};

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-y border-white/[.06] bg-[#0b101c] px-5 py-24 sm:py-28 lg:px-8"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-500/[.05] blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-violet-500/[.06] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Label */}
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-8 bg-cyan-300" />

          <span className="font-mono text-[10px] font-semibold uppercase tracking-[.25em] text-cyan-300">
            02 / The Toolkit
          </span>

          <span className="h-px flex-1 bg-white/[.08]" />
        </div>

        {/* Section Heading */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>
            <h2 className="text-4xl font-black leading-tight tracking-[-.04em] text-white sm:text-5xl lg:text-6xl">
              Built with intent.
              <br />

              <span className="text-slate-500">
                Not buzzwords.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              Technologies and tools I use to build modern web
              applications, develop reliable backend systems,
              and create meaningful digital experiences.
            </p>
          </div>

          {/* Tech Stack Badge */}
          <div className="flex w-fit items-center gap-3 rounded-xl border border-cyan-300/20 bg-cyan-300/[.05] px-4 py-3">
            <div className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300" />
            </div>

            <span className="font-mono text-[10px] uppercase tracking-widest text-cyan-200">
              Always Learning & Improving
            </span>
          </div>
        </div>

        {/* Skills Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

          {skillGroups.map((group) => {
            const Icon = group.icon;
            const colors = colorStyles[group.color];

            return (
              <div
                key={group.number}
                className={`group relative overflow-hidden rounded-2xl border border-white/[.08] bg-[#111827]/70 p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 ${colors.border} ${colors.glow}`}
              >
                {/* Card Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-cyan-400/[.04] blur-3xl transition-all duration-500 group-hover:bg-cyan-400/[.10]" />

                {/* Card Header */}
                <div className="relative mb-7 flex items-center justify-between">

                  <span
                    className={`font-mono text-xs font-bold tracking-widest ${colors.number}`}
                  >
                    / {group.number}
                  </span>

                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 ${colors.icon}`}
                  >
                    <Icon size={19} strokeWidth={1.8} />
                  </div>
                </div>

                {/* Card Title */}
                <div className="relative mb-6">
                  <h3 className="text-base font-bold leading-snug text-white">
                    {group.title}
                  </h3>

                  <p className="mt-2 text-[11px] leading-5 text-slate-500">
                    {group.subtitle}
                  </p>

                  <div className="mt-4 h-px w-full bg-gradient-to-r from-white/20 to-transparent" />
                </div>

                {/* Skills List */}
                <div className="relative space-y-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2.5 text-xs text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-white"
                    >
                      <span
                        className={`h-1.5 w-1.5 shrink-0 rounded-full ${colors.bullet}`}
                      />

                      <span>{skill}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Decoration */}
                <div className="mt-7 flex items-center justify-between border-t border-white/[.06] pt-4">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-slate-600">
                    Skill Set
                  </span>

                  <ArrowUpRight
                    size={14}
                    className="text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300"
                  />
                </div>
              </div>
            );
          })}

        </div>

       
        {/* Bottom Message */}
        <div className="mt-16 flex flex-col items-center text-center">

          <div className="mb-4 flex items-center gap-2 text-cyan-300">
            <Sparkles size={16} />

            <span className="font-mono text-[10px] font-semibold uppercase tracking-[.22em]">
              Growth Mindset
            </span>
          </div>

          <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Learning never stops.
          </h3>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
            I believe great development comes from continuous
            learning, practical experience, solving real-world
            problems, and turning ideas into useful solutions.
          </p>

          <div className="mt-7 h-px w-24 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

        </div>

      </div>
    </section>
  );
};

export default Skills;
