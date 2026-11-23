
import React, { useState } from 'react';
import {
  Code2,
  Globe,
  BookOpen,
  Coffee,
  ArrowUpRight,
  Download,
  Check,
  Terminal,
  Rocket,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

type ServiceColor = 'cyan' | 'violet' | 'emerald' | 'orange';

const services: {
  icon: React.ElementType;
  title: string;
  description: string;
  color: ServiceColor;
  number: string;
}[] = [
    {
      icon: Code2,
      title: 'Web Development',
      description:
        'Custom websites, dashboards, and full-stack applications tailored to your business needs.',
      color: 'cyan',
      number: '01',
    },
    {
      icon: Globe,
      title: 'UI/UX Design',
      description:
        'Clean, modern, and user-friendly interfaces that deliver an excellent user experience.',
      color: 'violet',
      number: '02',
    },
    {
      icon: BookOpen,
      title: 'Bug Fixing',
      description:
        'Fixing application issues, resolving errors, and improving overall performance.',
      color: 'emerald',
      number: '03',
    },
    {
      icon: Coffee,
      title: 'Problem Solving',
      description:
        'Turning complex requirements into simple, efficient, and effective solutions.',
      color: 'orange',
      number: '04',
    },
  ];

const About: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      id="about"
      className="about-section relative isolate overflow-hidden bg-[#080B14] px-5 py-24 text-white lg:px-8 lg:py-28"
    >

      {/* ==========================================
          ANIMATED BACKGROUND
      ========================================== */}

      {/* Grid Background */}
      <div className="about-grid pointer-events-none absolute inset-0 opacity-40" />

      {/* Cyan Glow */}
      <div className="about-glow pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/[.09] blur-[130px]" />

      {/* Purple Glow */}
      <div className="about-glow about-glow-delay pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-violet-600/[.10] blur-[130px]" />

      {/* Bottom Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-96 -translate-x-1/2 rounded-full bg-cyan-500/[.05] blur-[120px]" />

      {/* Floating Particles */}
      <div className="pointer-events-none absolute inset-0">
        <span className="about-particle particle-a" />
        <span className="about-particle particle-b" />
        <span className="about-particle particle-c" />
        <span className="about-particle particle-d" />
        <span className="about-particle particle-e" />
      </div>

      {/* ==========================================
          MAIN CONTENT
      ========================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ABOUT INTRODUCTION */}
        <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">

          {/* LEFT SIDE */}
          <div className="about-reveal">

            {/* Section Label */}
            <div className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.28em] text-cyan-300">
              <span className="text-slate-600">01</span>
              <span className="h-px w-8 bg-cyan-400/50" />
              About Me
            </div>

            {/* Heading */}
            <h2 className="max-w-md text-4xl font-black leading-tight tracking-[-.04em] text-white sm:text-5xl lg:text-6xl">
              Beyond the
              <br />
              <span className="about-gradient">
                code editor.
              </span>
            </h2>

            {/* Profile Visual Card */}
            <div className="about-profile-card group relative mt-10 h-64 overflow-hidden rounded-2xl border border-cyan-400/20 bg-[#0D1422] p-5 transition-all duration-500 hover:border-cyan-300/50">

              {/* Card Glow */}
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-[60px] transition-all duration-500 group-hover:bg-cyan-400/20" />

              {/* Inner Border */}
              <div className="relative grid h-full place-items-center rounded-xl border border-dashed border-cyan-300/20">

                {/* Animated Circle */}
                <div className="relative">
                  <div className="about-icon-ring absolute -inset-5 rounded-full border border-cyan-300/20" />
                  <div className="about-icon-ring-reverse absolute -inset-9 rounded-full border border-violet-300/20" />

                  <div className="relative grid h-16 w-16 place-items-center rounded-full border border-cyan-300/40 bg-cyan-300/10 shadow-[0_0_30px_rgba(34,211,238,0.12)]">
                    <Code2 className="h-7 w-7 text-cyan-300" />
                  </div>
                </div>

                <div className="mt-7 text-center">
                  <p className="font-mono text-xs text-cyan-300">
                    {'<developer.profile />'}
                  </p>

                  <p className="mt-2 text-[10px] uppercase tracking-[.25em] text-slate-500">
                    Turning Ideas Into Reality
                  </p>
                </div>

                {/* Floating Code Label */}
                <div className="absolute right-4 top-4 flex items-center gap-2 rounded-md border border-slate-700/70 bg-[#111a2a] px-3 py-2">
                  <Terminal className="h-3.5 w-3.5 text-cyan-300" />
                  <span className="font-mono text-[9px] text-slate-400">
                    profile / active
                  </span>
                </div>

                {/* Bottom Badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_10px_#a3e635]" />
                  <span className="font-mono text-[9px] uppercase tracking-widest text-slate-500">
                    Always Learning
                  </span>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="about-reveal about-reveal-delay lg:pt-12">

            {/* Main Introduction */}
            <p className="max-w-2xl text-2xl font-semibold leading-relaxed text-slate-200 sm:text-3xl">
              Hi, I&apos;m a Full Stack Developer passionate about
              building modern digital experiences and practical
              software solutions.
            </p>

            {/* Short & Expanded Description */}
            <div className="mt-7 max-w-2xl text-base leading-8 text-slate-400">

              {/* Always Visible Short Description */}
              <p>
                I focus on building modern, responsive, and scalable web
                applications that solve real-world business problems.
                Working with technologies like{' '}
                <span className="font-medium text-cyan-300">
                  React, TypeScript, C#, ASP.NET Core, Blazor, and SQL Server
                </span>
                , I create user-friendly interfaces and reliable backend
                solutions. My goal is to turn ideas into practical digital
                products with clean design and dependable functionality.
              </p>

              {/* Expanded Information */}
              {showMore && (
                <div className="mt-5 space-y-5 animate-about-expand">

                  <p>
                    My work includes developing business management
                    applications, custom dashboards, responsive websites,
                    and database-driven software. I have worked on
                    solutions such as Payroll & Employee Management,
                    Subscription Management, and Ticket Management Systems.
                  </p>

                  <p>
                    I also work with REST API integration, database
                    connectivity, authentication, bug fixing, performance
                    improvements, and UI enhancements to make applications
                    more efficient and user-friendly.
                  </p>

                  <p>
                    I believe good software is not just about writing code.
                    It is about understanding requirements, solving
                    problems, creating maintainable solutions, and
                    continuously improving through learning and practical
                    development.
                  </p>

                  <p>
                    Whether it is building a new application or improving
                    an existing system, I aim to deliver reliable,
                    user-focused software that creates real value.
                  </p>

                </div>
              )}

              {/* Know More / Show Less */}
              <button
                type="button"
                onClick={() => setShowMore((prev) => !prev)}
                aria-expanded={showMore}
                className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-300 transition-colors duration-300 hover:text-cyan-200"
              >
                {showMore ? 'Show Less' : 'Know More'}

                {showMore ? (
                  <ChevronUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1" />
                ) : (
                  <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
                )}
              </button>

            </div>

            {/* Trust Points */}
            <div className="mt-9 grid gap-4 sm:grid-cols-2">

              <div className="flex items-center gap-3">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md border border-cyan-400/20 bg-cyan-400/10">
                  <Check className="h-4 w-4 text-cyan-300" />
                </span>
                <span className="text-sm text-slate-300">
                  Clean & Maintainable Code
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md border border-cyan-400/20 bg-cyan-400/10">
                  <Check className="h-4 w-4 text-cyan-300" />
                </span>
                <span className="text-sm text-slate-300">
                  Fast Delivery & Communication
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md border border-cyan-400/20 bg-cyan-400/10">
                  <Check className="h-4 w-4 text-cyan-300" />
                </span>
                <span className="text-sm text-slate-300">
                  Responsive Web Applications
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md border border-cyan-400/20 bg-cyan-400/10">
                  <Check className="h-4 w-4 text-cyan-300" />
                </span>
                <span className="text-sm text-slate-300">
                  Real Business Solutions
                </span>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-wrap gap-3">

              {/* Download Resume */}
              <a
                href="/Soeel-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-lg bg-cyan-300 px-5 py-3 text-xs font-black uppercase tracking-widest text-[#071018] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-200 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]"
              >
                Download Resume
                <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
              </a>

              {/* Contact Button */}
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-lg border border-slate-500/60 bg-white/[.03] px-5 py-3 text-xs font-black uppercase tracking-widest text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-cyan-300/10"
              >
                Let&apos;s Talk
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

            </div>

          </div>
        </div>

        {/* ==========================================
            SERVICES SECTION
        ========================================== */}

        <div className="mt-28">

          {/* Services Heading */}
          <div className="about-reveal mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

            <div>
              <div className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.28em] text-cyan-300">
                <span className="text-slate-600">02</span>
                <span className="h-px w-8 bg-cyan-400/50" />
                What I Do
              </div>

              <h3 className="text-3xl font-black tracking-[-.04em] text-white sm:text-4xl">
                Turning Ideas Into{' '}
                <span className="about-gradient">
                  Solutions.
                </span>
              </h3>
            </div>

            <p className="max-w-sm text-sm leading-7 text-slate-500">
              I focus on building reliable digital products that solve
              real-world problems and create meaningful experiences.
            </p>

          </div>

          {/* Service Cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {services.map((service, index) => {

              const Icon = service.icon;

              const colorClasses = {
                cyan: {
                  icon: 'text-cyan-300',
                  border: 'group-hover:border-cyan-400/40',
                  bg: 'bg-cyan-400/10',
                  glow: 'group-hover:bg-cyan-400/[.08]',
                  number: 'text-cyan-300/40',
                },
                violet: {
                  icon: 'text-violet-300',
                  border: 'group-hover:border-violet-400/40',
                  bg: 'bg-violet-400/10',
                  glow: 'group-hover:bg-violet-400/[.08]',
                  number: 'text-violet-300/40',
                },
                emerald: {
                  icon: 'text-emerald-300',
                  border: 'group-hover:border-emerald-400/40',
                  bg: 'bg-emerald-400/10',
                  glow: 'group-hover:bg-emerald-400/[.08]',
                  number: 'text-emerald-300/40',
                },
                orange: {
                  icon: 'text-orange-300',
                  border: 'group-hover:border-orange-400/40',
                  bg: 'bg-orange-400/10',
                  glow: 'group-hover:bg-orange-400/[.08]',
                  number: 'text-orange-300/40',
                },
              }[service.color];

              return (
                <div
                  key={service.number}
                  className={`about-service-card group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0D1422]/80 p-6 transition-all duration-500 hover:-translate-y-2 hover:bg-[#111a2a] ${colorClasses.border}`}
                  style={{
                    animationDelay: `${index * 120}ms`,
                  }}
                >

                  {/* Card Glow */}
                  <div
                    className={`pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full blur-[60px] transition-all duration-500 ${colorClasses.glow}`}
                  />

                  {/* Card Number */}
                  <div className="relative mb-7 flex items-center justify-between">

                    <div
                      className={`grid h-12 w-12 place-items-center rounded-xl ${colorClasses.bg} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <Icon className={`h-6 w-6 ${colorClasses.icon}`} />
                    </div>

                    <span className={`font-mono text-xs ${colorClasses.number}`}>
                      / {service.number}
                    </span>

                  </div>

                  {/* Card Content */}
                  <div className="relative">

                    <h4 className="mb-3 text-lg font-bold text-white transition-colors duration-300 group-hover:text-cyan-200">
                      {service.title}
                    </h4>

                    <p className="text-sm leading-7 text-slate-400">
                      {service.description}
                    </p>

                  </div>

                  {/* Bottom Accent */}
                  <div className="relative mt-7 flex items-center justify-between">

                    <span className="h-px w-10 bg-slate-700 transition-all duration-500 group-hover:w-20 group-hover:bg-cyan-300" />

                    <ArrowUpRight
                      className={`h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100 ${colorClasses.icon}`}
                    />

                  </div>

                </div>
              );
            })}

          </div>
        </div>

        {/* ==========================================
            BOTTOM MESSAGE
        ========================================== */}

        <div className="about-reveal mt-20 flex flex-col items-center justify-between gap-5 rounded-2xl border border-cyan-400/15 bg-gradient-to-r from-cyan-400/[.05] via-[#0D1422] to-violet-500/[.05] p-7 sm:flex-row sm:p-9">

          <div className="flex items-start gap-4">

            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
              <Rocket className="h-6 w-6 text-cyan-300" />
            </div>

            <div>
              <h4 className="text-lg font-bold text-white">
                Have an idea? Let&apos;s build it.
              </h4>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Let&apos;s turn your vision into a powerful digital product.
              </p>
            </div>

          </div>

          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-lg border border-cyan-300/40 px-5 py-3 text-xs font-bold uppercase tracking-widest text-cyan-300 transition-all duration-300 hover:bg-cyan-300 hover:text-[#071018]"
          >
            Let&apos;s Talk
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

        </div>

      </div>

      {/* ==========================================
          CUSTOM CSS ANIMATIONS
      ========================================== */}

      <style>{`

        /* Animated Grid */
        .about-grid {
          background-image:
            linear-gradient(rgba(34,211,238,.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,.055) 1px, transparent 1px);
          background-size: 48px 48px;
          animation: aboutGridMove 30s linear infinite;
          mask-image: linear-gradient(to bottom, black, transparent 95%);
        }

        @keyframes aboutGridMove {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 48px 48px;
          }
        }

        /* Background Glows */
        .about-glow {
          animation: aboutGlowFloat 12s ease-in-out infinite alternate;
        }

        .about-glow-delay {
          animation-delay: -5s;
        }

        @keyframes aboutGlowFloat {
          from {
            transform: translate3d(0, 0, 0) scale(1);
          }
          to {
            transform: translate3d(35px, -30px, 0) scale(1.12);
          }
        }

        /* Floating Particles */
        .about-particle {
          position: absolute;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #67e8f9;
          box-shadow: 0 0 12px #22d3ee;
          opacity: .5;
          animation: aboutParticleFloat 9s ease-in-out infinite;
        }

        .particle-a {
          top: 15%;
          left: 10%;
        }

        .particle-b {
          top: 35%;
          right: 12%;
          animation-delay: -3s;
        }

        .particle-c {
          top: 65%;
          left: 20%;
          animation-delay: -5s;
        }

        .particle-d {
          bottom: 15%;
          right: 25%;
          animation-delay: -2s;
        }

        .particle-e {
          top: 85%;
          left: 75%;
          animation-delay: -6s;
        }

        @keyframes aboutParticleFloat {
          0%, 100% {
            transform: translate(0, 0);
            opacity: .2;
          }
          50% {
            transform: translate(25px, -35px);
            opacity: .8;
          }
        }

        /* Gradient Heading */
        .about-gradient {
          background: linear-gradient(
            100deg,
            #67e8f9,
            #22d3ee,
            #a78bfa,
            #34d399
          );
          background-size: 250% auto;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: aboutGradient 7s linear infinite;
        }

        @keyframes aboutGradient {
          to {
            background-position: 250% center;
          }
        }

        /* Content Entrance */
        .about-reveal {
          animation: aboutReveal .9s ease both;
        }

        .about-reveal-delay {
          animation-delay: .2s;
        }

        @keyframes aboutReveal {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Profile Card */
        .about-profile-card {
          animation: profileFloat 7s ease-in-out infinite;
        }

        @keyframes profileFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-7px);
          }
        }

        /* Rotating Icon Rings */
        .about-icon-ring {
          animation: aboutRotate 18s linear infinite;
        }

        .about-icon-ring-reverse {
          animation: aboutRotate 25s linear infinite reverse;
        }

        @keyframes aboutRotate {
          to {
            transform: rotate(360deg);
          }
        }

        /* Service Card Entrance */
        .about-service-card {
          animation: aboutReveal .8s ease both;
        }

        /* Expanded Description */
        .animate-about-expand {
          animation: aboutExpand .4s ease both;
        }

        @keyframes aboutExpand {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Mobile */
        @media (max-width: 640px) {
          .about-grid {
            background-size: 35px 35px;
          }

          .about-particle:nth-child(n+4) {
            display: none;
          }
        }

        /* Reduced Motion Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .about-section *,
          .about-section *::before,
          .about-section *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }

      `}</style>

    </section>
  );
};

export default About;
