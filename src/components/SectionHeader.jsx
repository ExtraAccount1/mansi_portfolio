import React from 'react';

const SectionHeader = ({ title }) => (
  <h2 className="text-4xl font-extrabold text-gray-900 mb-6 relative pb-2">
    {title}
    <span className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-gray-900 to-gray-600 rounded-full"></span>
  </h2>
);

export default SectionHeader;
