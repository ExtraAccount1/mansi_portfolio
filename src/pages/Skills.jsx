import React, { useState, useEffect } from 'react';
import SectionHeader from '../components/SectionHeader';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  return (
    <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
      <SectionHeader title="Technical Skills" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
          <h3 className="font-bold text-gray-800 text-xl mb-2">Front-End</h3>
          <ul className="mt-2 list-none space-y-2">
            {portfolioData.skills.frontend.map((skill, index) => {
              const parts = skill.split(' (');
              const skillName = parts[0];
              const skillLevel = parseInt(parts[1].replace('%)', ''), 10);
              return (
                <li key={index} className="flex items-center py-1">
                  <div className="w-full">
                    <p className="text-sm font-medium text-gray-700">{skillName}</p>
                    <div className="relative h-2 bg-gray-200 rounded-full">
                      <div className="absolute h-2 bg-gray-900 rounded-full transition-all duration-800 ease-in-out" style={{ width: isMounted ? `${skillLevel}%` : '0%' }}></div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
          <h3 className="font-bold text-gray-800 text-xl mb-2">Development Tools</h3>
           <ul className="mt-2 list-disc list-inside space-y-2 text-gray-700">
            {portfolioData.skills.tools.map((tool, index) => (
              <li key={index} className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-gray-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {tool}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
          <h3 className="font-bold text-gray-800 text-xl mb-2">Soft Skills</h3>
           <ul className="mt-2 list-disc list-inside space-y-2 text-gray-700">
            {portfolioData.skills.soft.map((skill, index) => (
              <li key={index} className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-gray-600 flex-shrink-0 " fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
