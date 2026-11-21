
import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section detection
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(
            `#${visibleSections[0].target.id}`
          );
        }
      },
      {
        rootMargin: '-20% 0px -65% 0px',
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Smooth scroll
  const scrollToSection = (href: string) => {
    setIsOpen(false);

    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-500 ${
        scrolled
          ? 'border-white/[.08] bg-[#080b14]/90 shadow-[0_8px_35px_rgba(0,0,0,0.3)] backdrop-blur-2xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

        {/* Logo Image */}
        <button
          type="button"
          onClick={() => scrollToSection('#home')}
          aria-label="Go to homepage"
          className="group flex items-center"
        >
          <img
            src="/logo1.PNG"
            alt="Soeel Beg Logo"
            className="h-10 w-auto max-w-[180px] object-contain transition-all duration-300 group-hover:scale-105"
          />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.name}
              type="button"
              onClick={() => scrollToSection(link.href)}
              className={`group relative py-2 text-[11px] font-semibold uppercase tracking-[.16em] transition-colors duration-300 ${
                activeSection === link.href
                  ? 'text-cyan-300'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {link.name}

              {/* Animated underline */}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-cyan-300 transition-all duration-300 ${
                  activeSection === link.href
                    ? 'w-full shadow-[0_0_10px_rgba(34,211,238,0.8)]'
                    : 'w-0 group-hover:w-full'
                }`}
              />
            </button>
          ))}

          {/* Let's Talk Button */}
          <button
            type="button"
            onClick={() => scrollToSection('#contact')}
            className="group flex items-center gap-2 rounded-full border border-cyan-300/50 bg-cyan-300/10 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[.15em] text-cyan-200 transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-300 hover:text-[#080b14] hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]"
          >
            Let's Talk
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          className="rounded-lg border border-white/10 bg-white/[.05] p-2.5 text-slate-200 transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-200 md:hidden"
        >
          <span className="block transition-transform duration-300">
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </span>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-white/[.06] bg-[#080b14]/95 backdrop-blur-2xl transition-all duration-500 ease-in-out md:hidden ${
          isOpen
            ? 'max-h-[400px] opacity-100'
            : 'max-h-0 border-transparent opacity-0'
        }`}
      >
        <div className="px-5 py-4">
          {navLinks.map((link, index) => (
            <button
              key={link.name}
              type="button"
              onClick={() => scrollToSection(link.href)}
              style={{
                transitionDelay: isOpen
                  ? `${index * 50}ms`
                  : '0ms',
              }}
              className={`flex w-full items-center justify-between border-b border-white/[.06] py-4 text-left text-sm font-semibold uppercase tracking-[.14em] transition-all duration-300 ${
                isOpen
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-3 opacity-0'
              } ${
                activeSection === link.href
                  ? 'text-cyan-300'
                  : 'text-slate-300 hover:pl-2 hover:text-cyan-200'
              }`}
            >
              {link.name}

              {activeSection === link.href && (
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
              )}
            </button>
          ))}

          {/* Mobile Let's Talk */}
          <button
            type="button"
            onClick={() => scrollToSection('#contact')}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-full border border-cyan-300/50 bg-cyan-300/10 py-3 text-xs font-bold uppercase tracking-widest text-cyan-200 transition-all duration-300 hover:bg-cyan-300 hover:text-[#080b14]"
          >
            Let's Talk
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
