import React from 'react';
import { Code, Globe, Book, Coffee } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">

        {/* 🔹 Section Heading */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* 🔹 LEFT CONTENT */}
          <div className="space-y-6 text-justify">

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Hi, I'm <span className="font-semibold">Soeel Beg</span> — a Full Stack Developer focused on building modern, fast, and scalable web applications for businesses and individuals.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I specialize in creating responsive websites, custom dashboards, and web-based solutions using 
              <span className="font-medium"> React, .NET, and modern technologies</span>. 
              My goal is to help clients turn their ideas into real, working products that deliver value.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I also help with bug fixing, performance improvement, and UI enhancement to make existing applications faster, smoother, and more user-friendly.
            </p>

            {/* 🔹 Trust Line */}
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                ✔ Clean & maintainable code <br />
                ✔ Fast delivery & clear communication <br />
                ✔ Focused on real business results
              </p>
            </div>

            {/* 🔹 Buttons */}
            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href='/Soeel-Resume.pdf'
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                Download Resume
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Hire Me
              </a>
            </div>
          </div>

          {/* 🔹 RIGHT CARDS */}
          <div className="grid grid-cols-2 gap-6">

            {/* Card 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg inline-block mb-4 group-hover:scale-110 transition">
                <Code className="text-blue-600 dark:text-blue-400" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Custom websites, dashboards, and full-stack applications tailored to your needs.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg inline-block mb-4 group-hover:scale-110 transition">
                <Globe className="text-purple-600 dark:text-purple-400" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Clean, modern, and user-friendly interfaces that improve user experience.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-lg inline-block mb-4 group-hover:scale-110 transition">
                <Book className="text-teal-600 dark:text-teal-400" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Bug Fixing</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Fix issues, errors, and improve performance of existing applications.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-lg inline-block mb-4 group-hover:scale-110 transition">
                <Coffee className="text-amber-600 dark:text-amber-400" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Problem Solving</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Turning complex requirements into simple, effective solutions.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;