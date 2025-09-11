import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
  return (
    <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
      <SectionHeader title="Education" />
      <div className="space-y-6">
        {portfolioData.education.map((edu, index) => (
          <div key={index} className="p-6 bg-gray-50 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
            <p className="text-gray-700 font-medium mt-1">{edu.school}</p>
            <p className="text-gray-600">{edu.dates} | {edu.location} | **{edu.grade}**</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
