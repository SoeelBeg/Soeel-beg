
import React from 'react';
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowUpRight,
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[.06] bg-[#080b14] px-5 py-8 lg:px-8">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">

        {/* Brand */}
        <div className="text-center md:text-left">
          <p className="font-mono text-sm font-bold tracking-[.2em] text-slate-400">
            SOEEL<span className="text-cyan-300">.DEV</span>
          </p>

          <p className="mt-2 text-xs text-slate-600">
            Full Stack Developer
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center gap-3">

          {/* GitHub */}
          <a
            href="https://github.com/soeelbeg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-300"
          >
            <Github size={18} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/soeelbeg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-300"
          >
            <Linkedin size={18} />
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/soeelbeg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-300"
          >
            <Twitter size={18} />
          </a>

          {/* Email */}
          <a
            href="mailto:soeelbeg@gmail.com"
            aria-label="Email"
            className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-300"
          >
            <Mail size={18} />
          </a>

        </div>

        {/* Copyright / Credit */}
        <div className="text-center md:text-right">

          <p className="text-[10px] uppercase tracking-widest text-slate-600">
            Designed & developed by{' '}
            <span className="font-semibold text-slate-400">
              Soeel Beg
            </span>
            {' '}· {currentYear}
          </p>

          <p className="mt-2 font-mono text-[10px] text-slate-600">
            Building digital experiences with passion.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
