import React from 'react';
import InternshipCard from './InternshipCard';

const internshipsData = [
  {
    company: 'United Parcel Service',
    role: 'ML Developer Intern',
    period: 'June 2023 - August 2023',
    responsibilities: [
      'Developed machine learning models for logistics optimization',
      'Implemented predictive analytics solutions',
      'Collaborated on data-driven decision making systems'
    ]
  },
  {
    company: 'Bharath Intern',
    role: 'Data Science Intern',
    period: 'March 2023 - May 2023',
    responsibilities: [
      'Analyzed large datasets using statistical methods',
      'Built data visualization dashboards',
      'Developed predictive models using Python'
    ]
  },
  {
    company: 'Codsoft',
    role: 'Data Science Intern',
    period: 'January 2023 - March 2023',
    responsibilities: [
      'Implemented machine learning algorithms',
      'Performed data preprocessing and cleaning',
      'Created data analysis reports'
    ]
  },
  {
    company: 'Cognifyz',
    role: 'Data Science Intern',
    period: 'November 2022 - January 2023',
    responsibilities: [
      'Conducted exploratory data analysis',
      'Developed data processing pipelines',
      'Built classification and regression models'
    ]
  }
];

export default function Internships() {
  return (
    <section id="internships" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Internships
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {internshipsData.map((internship) => (
            <InternshipCard key={internship.company} {...internship} />
          ))}
        </div>
      </div>
    </section>
  );
}
