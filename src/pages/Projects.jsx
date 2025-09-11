import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  return (
    <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
      <SectionHeader title="Projects" />
      <div className="space-y-8">
        {portfolioData.projects.map((project, index) => (
          <div key={index} className="rounded-xl shadow-md bg-gray-50 p-6 transition-all duration-300 transform hover:scale-[1.01] hover:shadow-lg">
            <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <ul className="mt-4 list-disc list-inside space-y-2 text-gray-600">
              {project.details.map((detail, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: detail }} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
