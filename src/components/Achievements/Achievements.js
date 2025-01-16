import React from 'react';
import AchievementCard from './AchievementCard';

const achievementsData = [
  {
    title: '1st Prize in Paper Presentation',
    organization: 'Sri Sairam Engineering College',
    date: '2023',
    description: 'Won first place in paper presentation at National Level Techfest.'
  },
  {
    title: '1st Prize in Mind Wars',
    organization: 'Sri Sairam Engineering College',
    date: '2023',
    description: 'Secured first position in Mind Wars competition at National Level Technical Symposium.'
  },
  {
    title: 'Unfold 2024',
    organization: 'Participant of Unfold 2024',
    date: 'December 2024',
    description: 'First place for developing a decentralized blood donation management system.'
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievementsData.map((achievement) => (
            <AchievementCard 
              key={achievement.title} 
              {...achievement} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
