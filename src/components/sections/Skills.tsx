import React from 'react';
import SkillBar from '../UI/SkillBar';

const Skills: React.FC = () => {

  // 🔹 Frontend Skills
  const frontendSkills = [
    { name: 'HTML', percentage: 90 },
    { name: 'CSS', percentage: 85 },
    { name: 'JavaScript', percentage: 80 },
    { name: 'ReactJS', percentage: 85 },
    { name: 'Bootstrap / Tailwind', percentage: 85 },
  ];

  // 🔹 Backend Skills (REAL STACK)
  const backendSkills = [
    { name: '.NET Core', percentage: 80 },
    { name: 'Blazor', percentage: 75 },
    { name: 'Web API', percentage: 80 },
    { name: 'MySQL', percentage: 75 },
  ];

  // 🔹 Other / Professional Skills
  const otherSkills = [
    { name: 'Git & GitHub', percentage: 80 },
    { name: 'API Integration', percentage: 80 },
    { name: 'Responsive Design', percentage: 85 },
    { name: 'UI/UX Design', percentage: 70 },
    { name: 'Problem Solving', percentage: 85 },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">

        {/* 🔹 Heading */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>

          <p className="text-center text-gray-600 dark:text-gray-400 mt-6 max-w-2xl">
            I use modern technologies to build fast, scalable, and user-friendly web applications. 
            My focus is on delivering clean code, performance, and real-world solutions.
          </p>
        </div>

        {/* 🔹 Skill Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Frontend */}
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-6 pb-3 border-b border-gray-200 dark:border-gray-700">
              Frontend Development
            </h3>

            <div className="space-y-6">
              {frontendSkills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-6 pb-3 border-b border-gray-200 dark:border-gray-700">
              Backend Development
            </h3>

            <div className="space-y-6">
              {backendSkills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </div>

          {/* Other Skills */}
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-semibold mb-6 pb-3 border-b border-gray-200 dark:border-gray-700">
              Professional Skills
            </h3>

            <div className="space-y-6">
              {otherSkills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </div>

        </div>

        {/* 🔥 Extra Trust Line */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I continuously improve my skills by working on real-world projects, solving practical problems, 
            and learning new technologies to deliver better results for clients.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Skills;