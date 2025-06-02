import React from 'react';
import { Code, Globe, Book, Coffee } from 'lucide-react';
// import resume from '../../images/resume.pdf';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Hi there! I'm <span className="font-semibold">Soeel Beg</span>, a passionate ReactJS developer with a strong focus on creating clean, responsive, and user-friendly web applications.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              As a fresher in the field, I bring enthusiasm, a growth mindset, and a solid foundation in modern web technologies. I'm dedicated to writing clean code and creating beautiful user interfaces that deliver exceptional user experiences.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I enjoy solving complex problems and continuously learning new technologies to enhance my skills. When I'm not coding, you can find me exploring design trends, contributing to open-source projects, or enjoying a good cup of coffee.
            </p>
            
            <div className="pt-4">
              <a 
                href='/resume.pdf'
                target="_blank" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                Download Resume
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg inline-block mb-4">
                <Code className="text-blue-600 dark:text-blue-400" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Building responsive and interactive web applications
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg inline-block mb-4">
                <Globe className="text-purple-600 dark:text-purple-400" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Creating intuitive and engaging user experiences
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-lg inline-block mb-4">
                <Book className="text-teal-600 dark:text-teal-400" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Always exploring new technologies and techniques
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-lg inline-block mb-4">
                <Coffee className="text-amber-600 dark:text-amber-400" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Problem Solving</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Finding elegant solutions to complex challenges
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;