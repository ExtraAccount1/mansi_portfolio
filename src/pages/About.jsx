import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  return (
    <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
      <SectionHeader title="About Me" />
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
        <img
          src="https://placehold.co/150x150/e2e8f0/64748b?text=MD"
          alt="Mansi Dubey"
          className="w-32 h-32 rounded-full border-4 border-gray-200 object-cover transform transition-transform duration-500 hover:scale-105"
        />
        <div className="flex-1">
          <p className="text-lg leading-relaxed text-gray-700" dangerouslySetInnerHTML={{ __html: portfolioData.summary }} />
          <div className="mt-6 text-gray-600 space-y-2 md:space-y-0 md:flex md:space-x-8">
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              {portfolioData.contact.email}
            </span>
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.096 11.096 0 006.107 6.107l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {portfolioData.contact.phone}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
