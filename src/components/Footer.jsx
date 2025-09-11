import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Mansi Dubey. All Rights Reserved.</p>
        <div className="mt-4 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <a href={`mailto:${portfolioData.contact.email}`} className="text-gray-400 hover:text-white transition-colors duration-300">
            {portfolioData.contact.email}
          </a>
          <span className="text-gray-400 hidden sm:block">|</span>
          <p className="text-gray-400">{portfolioData.contact.phone}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
