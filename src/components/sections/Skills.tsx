import React from 'react';
import SkillBar from '../UI/SkillBar';

const Skills: React.FC = () => {
  const frontendSkills = [
    { name: 'HTML', percentage: 90 },
    { name: 'CSS', percentage: 85 },
    { name: 'JavaScript', percentage: 80 },
    { name: 'ReactJS', percentage: 85 },
    { name: 'Bootstrap', percentage: 80 },
  ];

  const backendSkills = [
    { name: 'MongoDB', percentage: 75 },
    { name: 'MySQL', percentage: 70 },
    { name: 'NodeJS', percentage: 65 },
    { name: 'Express', percentage: 60 },
  ];

  const otherSkills = [
    { name: 'Git', percentage: 75 },
    { name: 'Responsive Design', percentage: 85 },
    { name: 'UI/UX Design', percentage: 70 },
    { name: 'Problem Solving', percentage: 80 },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
          <p className="text-center text-gray-600 dark:text-gray-400 mt-6 max-w-2xl">
            Here are my technical skills and proficiency levels. I'm constantly learning and improving these skills to create better web experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md">
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
          
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md">
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
          
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-semibold mb-6 pb-3 border-b border-gray-200 dark:border-gray-700">
              Additional Skills
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
      </div>
    </section>
  );
};

export default Skills;