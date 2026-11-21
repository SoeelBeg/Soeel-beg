
// 'use client';

import React, { useEffect, useState } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Terminal,
  Code2,
} from 'lucide-react';



const titleLoop = [
  'Full Stack Developer',
  'Software Developer',
  'React & React Native Developer',
  '.NET / Blazor Developer',
];

const Hero: React.FC = () => {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTitleIndex((index) => (index + 1) % titleLoop.length);
    }, 2800);

    return () => window.clearInterval(timer);
  }, []);

  const scrollToSection = (section: string) => {
    document.querySelector(section)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="home"
      className="hero-section relative isolate max-h-screen overflow-hidden bg-[#080B14] px-5 pb-24 pt-32 text-white lg:px-8 lg:pt-20"
    >

      {/* ==========================================
          ANIMATED BACKGROUND
      ========================================== */}

      {/* Moving Grid */}
      <div className="hero-grid pointer-events-none absolute inset-0" />

      {/* Background Gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#080B14]/90" />

      {/* Cyan Glow */}
      <div className="hero-orb hero-orb-cyan pointer-events-none absolute left-[10%] top-[10%] h-[450px] w-[450px] rounded-full bg-cyan-500/[0.12] blur-[130px]" />

      {/* Purple Glow */}
      <div className="hero-orb hero-orb-purple pointer-events-none absolute right-[-10%] top-[15%] h-[400px] w-[400px] rounded-full bg-violet-600/[0.13] blur-[120px]" />

      {/* Bottom Green Glow */}
      <div className="hero-orb hero-orb-green pointer-events-none absolute bottom-[-15%] left-[35%] h-[350px] w-[350px] rounded-full bg-emerald-500/[0.08] blur-[130px]" />

      {/* Animated Particles */}
      <div className="hero-particles pointer-events-none absolute inset-0">

        <span className="particle particle-1" />
        <span className="particle particle-2" />
        <span className="particle particle-3" />
        <span className="particle particle-4" />
        <span className="particle particle-5" />
        <span className="particle particle-6" />
        <span className="particle particle-7" />
        <span className="particle particle-8" />
        <span className="particle particle-9" />
        <span className="particle particle-10" />

      </div>

      {/* Animated Scan Light */}
      <div className="hero-scan pointer-events-none absolute inset-0" />

      {/* ==========================================
          MAIN CONTENT
      ========================================== */}

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_.9fr]">

        {/* LEFT CONTENT */}
        <div className="order-2 lg:order-1">

          {/* Availability Badge */}
          <div className="hero-reveal mb-7 inline-flex items-center gap-3 rounded-full border border-lime-300/25 bg-lime-300/[.06] px-4 py-2 text-[10px] font-bold uppercase tracking-[.2em] text-lime-200">

            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-300 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_14px_#00ffa3]" />
            </span>

            Available for Opportunities

          </div>

          {/* Main Heading */}
          <h1 className="hero-reveal max-w-4xl text-5xl font-black leading-[.94] tracking-[-.06em] text-white sm:text-7xl lg:text-[clamp(4rem,4vw,5rem)]">

            Hi, I&apos;m
            <br />

            <span className="hero-name-gradient">
              Soeel Beg
            </span>

            <span className="text-cyan-300">.</span>

          </h1>

          {/* Animated Developer Title */}
          <div className="mt-9 flex min-h-10 items-center gap-3 font-mono text-base text-slate-200 sm:text-lg">

            <span className="text-cyan-300">//</span>

            <span
              key={titleIndex}
              className="hero-title-animation"
            >
              {titleLoop[titleIndex]}
            </span>

            <span className="h-5 w-[2px] animate-pulse bg-cyan-300" />

          </div>

          {/* Services Tags */}
          <div className="mt-5 flex flex-wrap gap-2">

            <span className="rounded-md border border-cyan-400/20 bg-cyan-400/[.06] px-3 py-1.5 text-xs text-cyan-200 transition-all duration-300 hover:border-cyan-300/60 hover:bg-cyan-400/10">
              Custom Web Solutions
            </span>

            <span className="rounded-md border border-violet-400/20 bg-violet-400/[.06] px-3 py-1.5 text-xs text-violet-200 transition-all duration-300 hover:border-violet-300/60 hover:bg-violet-400/10">
              Bug Fixing & Optimization
            </span>

          </div>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            I build modern web applications and intelligent business solutions
            that turn complex ideas into seamless digital experiences. From
            responsive user interfaces to powerful backend systems, I focus on
            creating scalable, reliable, and user-friendly software that solves
            real-world problems and drives business growth.
          </p>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-wrap gap-3">

            <button
              onClick={() => scrollToSection('#projects')}
              className="group inline-flex items-center gap-3 rounded-lg bg-cyan-300 px-5 py-3 text-xs font-black uppercase tracking-widest text-[#071018] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-200 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
            >
              View Projects

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />

            </button>

            <button
              onClick={() => scrollToSection('#contact')}
              className="group inline-flex items-center gap-3 rounded-lg border border-slate-500/60 bg-white/[.03] px-5 py-3 text-xs font-black uppercase tracking-widest text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-cyan-300/10"
            >
              Contact Me

              <Mail className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />

            </button>

          </div>

          {/* Social Links */}
          <div className="mt-12 flex items-center gap-5">

            <a
              href="https://github.com/soeelbeg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:text-cyan-300"
            >
              <Github size={19} />
            </a>

            <a
              href="https://linkedin.com/in/soeelbeg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:text-cyan-300"
            >
              <Linkedin size={19} />
            </a>

            <a
              href="mailto:soeelbeg@gmail.com"
              aria-label="Email"
              className="text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:text-cyan-300"
            >
              <Mail size={19} />
            </a>

            <div className="h-px w-12 bg-slate-700" />

            <span className="font-mono text-[9px] uppercase tracking-[.25em] text-slate-500">
              India
            </span>

          </div>

        </div>

        {/* ==========================================
            RIGHT DEVELOPER TERMINAL CARD
        ========================================== */}

        <div className="order-1 flex justify-center lg:order-2">

          <div className="hero-terminal-wrapper group relative w-full max-w-[470px]">

            {/* Outer Glow */}
            <div className="absolute -inset-5 rounded-[30px] bg-cyan-500/[.07] blur-3xl transition-all duration-500 group-hover:bg-cyan-500/[.16]" />

            {/* Animated Profile Portrait */}
            <div className="hero-profile-float pointer-events-none absolute -right-8 -top-16 z-20 h-44 w-44 sm:-right-10 sm:-top-20 sm:h-52 sm:w-52 lg:h-60 lg:w-60">
              {/* Cyan Ring */}
              <div className="hero-profile-ring absolute -inset-2 rounded-full border border-cyan-300/70" />

              {/* Violet Ring */}
              <div className="hero-profile-ring-reverse absolute -inset-4 rounded-full border border-violet-300/40" />

              {/* Profile Image */}
              <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-cyan-300/70 bg-[#0D1422] p-1 shadow-[0_0_45px_rgba(34,211,238,0.35)]">
                <img
                  src="/12.png"
                  alt="Soeel Beg - Software Developer"
                  className="h-full w-full rounded-full object-cover object-center"
                  loading="eager"
                />
              </div>

              {/* Name Badge */}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-lime-300/30 bg-[#101A20] px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-lime-300 shadow-lg">
                Soeel Beg
              </span>
            </div>


            {/* Rotating Decorative Ring */}
            <div className="hero-ring pointer-events-none absolute -inset-9 rounded-full border border-cyan-400/[.12]" />

            <div className="hero-ring-reverse pointer-events-none absolute -inset-14 rounded-full border border-violet-400/[.08]" />

            {/* Terminal Card */}
            <div className="hero-card-float relative rounded-2xl border border-cyan-400/30 bg-[#0D1422]/95 p-3 shadow-[0_0_45px_rgba(0,212,255,0.08)] backdrop-blur-xl transition-all duration-500 group-hover:border-cyan-300/60 group-hover:shadow-[0_0_55px_rgba(0,212,255,0.15)]">

              <div className="relative overflow-hidden rounded-xl border border-slate-700/60 p-5 sm:p-7">

                {/* Terminal Shine */}
                <div className="hero-card-shine pointer-events-none absolute inset-0" />

                {/* Terminal Header */}
                <div className="relative mb-8 flex items-center justify-between border-b border-slate-700/60 pb-5">

                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-lime-300" />
                  </div>

                  <span className="font-mono text-[9px] text-slate-600">
                    soeel.dev / terminal
                  </span>

                </div>

                {/* Terminal Code */}
                <div className="relative space-y-6 font-mono text-xs leading-7 sm:text-sm">

                  <div>

                    <p className="text-cyan-300">
                      const <span className="text-violet-300">developer</span> = {'{'}
                    </p>

                    <div className="pl-5 text-slate-400">

                      <p>
                        name: <span className="text-lime-300">&quot;Soeel Beg&quot;</span>,
                      </p>

                      <p>
                        focus: <span className="text-lime-300">&quot;useful products&quot;</span>,
                      </p>

                      <p>
                        stack: <span className="text-orange-300">[React, .NET, SQL]</span>,
                      </p>

                      <p>
                        status: <span className="text-lime-300">&quot;shipping&quot;</span>
                      </p>

                    </div>

                    <p className="text-cyan-300">{'};'}</p>

                  </div>

                  <p className="text-slate-600">
                    // make it simple, then make it sing
                  </p>

                  <p className="text-cyan-300">

                    <span className="text-violet-300">await</span>{' '}

                    <span className="text-white">
                      buildSomethingGreat
                    </span>
                    ();

                    <span className="ml-1 animate-pulse">_</span>

                  </p>

                </div>

                {/* Developer Stats */}
                <div className="relative mt-9 grid grid-cols-3 gap-2">

                  <div className="border border-slate-700/70 bg-slate-800/30 p-3 transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/[.05]">

                    <Code2 className="mb-2 h-4 w-4 text-cyan-300" />

                    <p className="text-xl font-black text-white">
                      Code
                    </p>

                    <p className="mt-1 text-[8px] uppercase tracking-wider text-slate-500">
                      Build & Create
                    </p>

                  </div>

                  <div className="border border-slate-700/70 bg-slate-800/30 p-3 transition-all duration-300 hover:border-violet-400/50 hover:bg-violet-400/[.05]">

                    <Terminal className="mb-2 h-4 w-4 text-violet-300" />

                    <p className="text-xl font-black text-white">
                      18+
                    </p>

                    <p className="mt-1 text-[8px] uppercase tracking-wider text-slate-500">
                      Technologies
                    </p>

                  </div>

                  <div className="border border-slate-700/70 bg-slate-800/30 p-3 transition-all duration-300 hover:border-lime-400/50 hover:bg-lime-400/[.05]">

                    <ArrowUpRight className="mb-2 h-4 w-4 text-lime-300" />

                    <p className="text-xl font-black text-white">
                      ∞
                    </p>

                    <p className="mt-1 text-[8px] uppercase tracking-wider text-slate-500">
                      Curiosity
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* Floating Badge */}
            <div className="hero-badge-float absolute -bottom-5 -left-5 flex items-center gap-2 border border-lime-300/20 bg-[#101A20] px-4 py-3 shadow-xl">

              <span className="text-xs font-bold text-lime-300">
                pixel perfect
              </span>

              <span className="text-lime-300">✓</span>

            </div>

            {/* Floating Tech Badge */}
            <div className="hero-tech-float absolute -right-4 top-8 border border-cyan-400/20 bg-[#101A20] px-3 py-2 font-mono text-[10px] text-cyan-300 shadow-xl">

              {'<craft />'}

            </div>

          </div>

        </div>

      </div>

      {/* ==========================================
          SCROLL INDICATOR
      ========================================== */}

      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">

        <span className="font-mono text-[9px] uppercase tracking-[.3em] text-slate-600">
          Scroll to explore
        </span>

        <button
          onClick={() => scrollToSection('#about')}
          aria-label="Scroll to About section"
          className="hero-scroll-animation text-slate-500 transition-colors hover:text-cyan-300"
        >
          <ArrowDownRight size={20} />
        </button>

      </div>

      {/* ==========================================
          CUSTOM ANIMATIONS
      ========================================== */}

      <style>{`

        /* Moving Grid */
        .hero-grid {
          background-image:
            linear-gradient(rgba(34,211,238,0.075) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.075) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 25s linear infinite;
          mask-image: linear-gradient(to bottom, black 20%, transparent 100%);
        }

        @keyframes gridMove {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 50px 50px;
          }
        }

        /* Floating Background Orbs */
        .hero-orb {
          animation: orbFloat 12s ease-in-out infinite alternate;
        }

        .hero-orb-purple {
          animation-delay: -4s;
        }

        .hero-orb-green {
          animation-delay: -7s;
        }

        @keyframes orbFloat {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(35px, -30px, 0) scale(1.12);
          }
          100% {
            transform: translate3d(-25px, 25px, 0) scale(.94);
          }
        }

        /* Particles */
        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #67e8f9;
          box-shadow: 0 0 12px #22d3ee;
          opacity: .5;
          animation: particleFloat 9s ease-in-out infinite;
        }

        .particle-1 { top: 15%; left: 12%; }
        .particle-2 { top: 30%; left: 85%; animation-delay: -2s; }
        .particle-3 { top: 70%; left: 20%; animation-delay: -4s; }
        .particle-4 { top: 82%; left: 72%; animation-delay: -1s; }
        .particle-5 { top: 48%; left: 95%; animation-delay: -5s; }
        .particle-6 { top: 10%; left: 58%; animation-delay: -3s; }
        .particle-7 { top: 90%; left: 40%; animation-delay: -6s; }
        .particle-8 { top: 55%; left: 5%; animation-delay: -2.5s; }
        .particle-9 { top: 25%; left: 45%; animation-delay: -7s; }
        .particle-10 { top: 75%; left: 90%; animation-delay: -3.5s; }

        @keyframes particleFloat {
          0%, 100% {
            transform: translate(0, 0);
            opacity: .2;
          }
          50% {
            transform: translate(25px, -40px);
            opacity: .9;
          }
        }

        /* Scan Light */
        .hero-scan {
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(34,211,238,.025),
            transparent
          );
          background-size: 100% 180px;
          animation: scanMove 12s linear infinite;
        }

        @keyframes scanMove {
          from { background-position: 0 -180px; }
          to { background-position: 0 100vh; }
        }

        /* Heading Gradient Animation */
        .hero-name-gradient {
          background: linear-gradient(
            100deg,
            #ffffff 0%,
            #a5f3fc 35%,
            #22d3ee 65%,
            #34d399 100%
          );
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientMove 6s linear infinite;
        }

        @keyframes gradientMove {
          to {
            background-position: 200% center;
          }
        }

        /* Entrance Animation */
        .hero-reveal {
          animation: revealUp .8s ease both;
        }

        .hero-reveal:nth-child(2) {
          animation-delay: .12s;
        }

        .hero-reveal:nth-child(3) {
          animation-delay: .22s;
        }

        @keyframes revealUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Changing Title */
        .hero-title-animation {
          animation: titleReveal .5s ease both;
        }

        @keyframes titleReveal {
          from {
            opacity: 0;
            transform: translateY(12px);
            filter: blur(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        /* Floating Terminal */
        .hero-terminal-wrapper {
          animation: terminalEntrance 1s ease both;
        }

        /* Animated Profile Portrait */
        .hero-profile-float {
          animation: profileFloat 5s ease-in-out infinite;
          transform-origin: center;
        }

        .hero-profile-ring {
          animation: profileRing 12s linear infinite;
        }

        .hero-profile-ring-reverse {
          animation: profileRing 18s linear infinite reverse;
          border-style: dashed;
        }

        @keyframes profileFloat {
          0%, 100% { transform: translateY(0) rotate(-3deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }

        @keyframes profileRing {
          to { transform: rotate(360deg); }
        }

        .hero-card-float {
          animation: cardFloat 6s ease-in-out infinite;
        }

        @keyframes terminalEntrance {
          from {
            opacity: 0;
            transform: translateY(35px) scale(.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes cardFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        /* Rotating Rings */
        .hero-ring {
          animation: ringRotate 35s linear infinite;
        }

        .hero-ring-reverse {
          animation: ringRotate 45s linear infinite reverse;
        }

        @keyframes ringRotate {
          to {
            transform: rotate(360deg);
          }
        }

        /* Terminal Shine */
        .hero-card-shine {
          background: linear-gradient(
            110deg,
            transparent 20%,
            rgba(34,211,238,.07) 45%,
            transparent 70%
          );
          transform: translateX(-120%);
          animation: cardShine 8s ease-in-out infinite;
        }

        @keyframes cardShine {
          0%, 60% {
            transform: translateX(-120%);
          }
          85%, 100% {
            transform: translateX(120%);
          }
        }

        /* Floating Badges */
        .hero-badge-float {
          animation: badgeFloat 4s ease-in-out infinite;
        }

        .hero-tech-float {
          animation: badgeFloat 5s ease-in-out infinite reverse;
        }

        @keyframes badgeFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-9px);
          }
        }

        /* Scroll */
        .hero-scroll-animation {
          animation: scrollBounce 1.8s ease-in-out infinite;
        }

        @keyframes scrollBounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(8px);
          }
        }

        /* Mobile Optimization */
        @media (max-width: 640px) {
          .hero-grid {
            background-size: 35px 35px;
          }

          .hero-ring {
            opacity: .5;
          }

          .hero-ring-reverse {
            opacity: .4;
          }

          .particle:nth-child(n+6) {
            display: none;
          }
        }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .hero-section *,
          .hero-section *::before,
          .hero-section *::after {
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

export default Hero;
