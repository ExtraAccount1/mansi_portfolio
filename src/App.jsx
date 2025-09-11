import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Education from './pages/Education';
import PersonalDetails from './pages/PersonalDetails';

const App = () => {
  const [currentPage, setCurrentPage] = useState('about');

  const renderPage = () => {
    switch (currentPage) {
      case 'skills':
        return <Skills />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'education':
        return <Education />;
      case 'personal':
        return <PersonalDetails />;
      default:
        return <About />;
    }
  };

  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen flex flex-col">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="container mx-auto px-6 py-12 flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
