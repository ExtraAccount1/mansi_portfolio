import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
      <SectionHeader title="Experience" />
      <div className="space-y-8">
        {portfolioData.experience.map((job, index) => (
          <div key={index} className="rounded-xl shadow-md bg-gray-50 p-6 transition-all duration-300 transform hover:scale-[1.01] hover:shadow-lg">
            <div className="flex justify-between items-start flex-wrap">
              <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
              <p className="text-sm font-medium text-gray-500">{job.duration}</p>
            </div>
            <p className="text-md font-medium text-gray-700 mt-1">{job.company} <span className="text-sm font-normal text-gray-500">- {job.location}</span></p>
            <ul className="mt-4 list-disc list-inside space-y-2 text-gray-600">
              {job.responsibilities.map((resp, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: resp }} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
