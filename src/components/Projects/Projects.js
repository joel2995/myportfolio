import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: 'Box Recommendation System',
    description: 'Developed a Box Recommendation Service using ML and YOLOv8 for packaging based on image analysis. Enhanced logistics with a Flask backend enabling real-time AI-driven decisions.',
    technologies: ['Python', 'YOLOv8', 'Flask', 'Machine Learning'],
    githubUrl: '',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'AI Crowd Management System',
    description: 'Uses AI for real-time crowd monitoring, predictive analytics, and efficient resource allocation. Provides data-driven insights and simulations for proactive decision-making.',
    technologies: ['AI', 'Python', 'Computer Vision', 'Analytics'],
    githubUrl: '',
    image: 'https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Eternal Time Capsule',
    description: 'Built the Time Capsule Vault for scheduling and preserving messages, files, and media. Added flexible capsule types and a dashboard with advanced navigation and group sharing options.',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
    githubUrl: '',
    image: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Data Download Duplication Alert System',
    description: 'Developed system implementing hashing algorithms and network analysis to detect redundant downloads. Enhanced bandwidth efficiency and institutional data management.',
    technologies: ['Python', 'Network Analysis', 'Hashing', 'Database'],
    githubUrl: '',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
