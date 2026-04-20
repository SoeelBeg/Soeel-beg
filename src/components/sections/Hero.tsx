import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';

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
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">

      {/* 🔥 Background Gradient Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100/40 via-purple-100/20 to-transparent dark:from-blue-900/20 dark:via-purple-900/10 blur-3xl opacity-60"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="order-2 md:order-1">

            {/* 🔹 Role Badge */}
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium inline-block mb-4">
              Full Stack Developer
            </span>

            {/* 🔹 Experience + Availability */}
            <div className="flex gap-3 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                Custom Web Solutions
              </span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm">
                Bug Fixing & Optimization
              </span>
            </div>

            {/* 🔹 Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
              I Build Fast & Scalable Web Solutions for{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Businesses & Clients
              </span>
            </h1>

            {/* 🔹 Small Tagline */}
            <p className="text-md text-blue-600 dark:text-blue-400 mb-4">
              Helping startups & businesses build powerful web apps 🚀
            </p>

            {/* 🔹 Description */}
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 text-justify">
              I help businesses and individuals build fast, responsive, and scalable web applications
              using React, .NET, and modern technologies. I specialize in creating custom solutions,
              fixing bugs, and improving performance to deliver real business value.
            </p>

            {/* 🔹 Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToContact}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg flex items-center gap-2 hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                Hire Me <ArrowRight size={18} />
              </button>

              <button
                onClick={scrollToProjects}
                className="px-6 py-3 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-medium rounded-lg flex items-center gap-2 hover:bg-gray-300 dark:hover:bg-gray-700 hover:scale-105 transition-all duration-300"
              >
                View Projects
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative group">

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Image */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-blue-500/20">
                <img
                  src="/11.jpeg"
                  alt="Soeel Beg - Full Stack Developer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

            </div>
          </div>

        </div>

        {/* 🔽 Scroll Down */}
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