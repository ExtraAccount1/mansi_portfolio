import React from 'react'
import { portfolioData } from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';

const PersonalDetails = () => (
    <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
      <SectionHeader title="Personal Details" />
      <div className="text-gray-700 space-y-4">
        <div>
          <h3 className="font-bold text-gray-800 text-xl">Interests</h3>
          <ul className="mt-2 list-disc list-inside space-y-1">
            {portfolioData.interests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-gray-800 text-xl">Languages</h3>
          <ul className="mt-2 list-disc list-inside space-y-1">
            {portfolioData.languages.map((lang, index) => (
              <li key={index}>{lang}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-gray-800 text-xl">Contact Information</h3>
          <p className="mt-2">
            <strong>Email:</strong> {portfolioData.contact.email}
          </p>
          <p>
            <strong>Phone:</strong> {portfolioData.contact.phone}
          </p>
          <p>
            <strong>Address:</strong> {portfolioData.contact.address}
          </p>
        </div>
      </div>
    </section>
  );

export default PersonalDetails
