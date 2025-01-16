import React from 'react';
import SkillCategory from './SkillCategory';

const skillsData = {
  'Frontend Development': [
    { name: 'React.js', level: 95 },
    { name: 'HTML5/CSS3', level: 90 },
    { name: 'JavaScript', level: 95 },
    { name: 'TypeScript', level: 85 },
    { name: 'Redux', level: 85 }
  ],
  'Backend Development': [
    { name: 'Node.js', level: 90 },
    { name: 'Express.js', level: 90 },
    { name: 'Python/Django', level: 85 },
    { name: 'RESTful APIs', level: 92 },
    { name: 'GraphQL', level: 80 }
  ],
  'Database & Tools': [
    { name: 'MongoDB', level: 88 },
    { name: 'PostgreSQL', level: 85 },
    { name: 'Redis', level: 80 },
    { name: 'Docker', level: 82 },
    { name: 'Git', level: 90 },
    { name: 'AWS', level: 78 }
  ]
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, skills]) => (
            <SkillCategory key={category} title={category} skills={skills} />
          ))}
        </div>
      </div>
    </section>
  );
}
