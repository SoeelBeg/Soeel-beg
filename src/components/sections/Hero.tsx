import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
// import profile from '../../images/1.png';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium inline-block mb-4">
             React Frontend Developer
            </span>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Hello, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Soeel Beg
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w- text-justify">
              I help individuals and businesses build fast, modern, and responsive web applications using React and other cutting-edge tools. I build responsive, user-friendly applications with modern tools and technologies.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={scrollToContact}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                Get in touch <ArrowRight size={18} />
              </button>
              
              <button 
                onClick={scrollToProjects}
                className="px-6 py-3 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-medium rounded-lg flex items-center gap-2 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              >
                View my work
              </button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-blue-500/20 dark:border-blue-500/10">
              <img 
                src='/1.PNG'
                alt="Soeel Beg" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
          <a 
            href="#about" 
            aria-label="Scroll down"
            className="text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <ArrowDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;