import React from 'react';
import { FileDown } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            I am a passionate Full Stack Web Developer with extensive experience in building modern web applications. My expertise spans across front-end and back-end development, utilizing technologies like React, Node.js, and various modern web frameworks. I pride myself on creating responsive, user-friendly websites and applications that deliver exceptional user experiences.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            As a dedicated web developer, I stay current with the latest industry trends and best practices. I have a strong foundation in HTML, CSS, JavaScript, and various modern frameworks. I'm experienced in implementing responsive designs, optimizing website performance, and ensuring cross-browser compatibility. My passion for clean code and attention to detail helps me create maintainable and scalable solutions.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Beyond technical skills, I am a problem solver who enjoys collaborating with teams to deliver innovative solutions. I have experience working with diverse clients and projects, from small business websites to large-scale web applications. I'm committed to continuous learning and sharing knowledge with the developer community through mentoring and contributing to open-source projects.
          </p>
          <div className="text-center">
            <a
              href="/assets/Joel_Resume.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FileDown className="w-5 h-5 mr-2" />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}