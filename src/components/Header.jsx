import React from 'react';

const Header = ({ currentPage, setCurrentPage }) => {
  const pages = [
    { name: 'About', key: 'about' },
    { name: 'Skills', key: 'skills' },
    { name: 'Experience', key: 'experience' },
    { name: 'Projects', key: 'projects' },
    { name: 'Education', key: 'education' },
    { name: 'Personal', key: 'personal' },
  ];

  return (
    <header className="bg-white shadow-sm py-6 sticky top-0 z-50">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-900">Mansi Dubey</h1>
          <p className="mt-1 text-xl text-gray-600">React.js Developer</p>
        </div>
         <nav className="flex flex-wrap justify-center md:justify-end gap-2 md:gap-4">
            {pages.map((page) => (
              <button
                key={page.key}
                className={`py-2 px-4 rounded-full font-medium transition-colors duration-200 ease-in-out ${
                  currentPage === page.key
                    ? 'bg-gray-900 text-white shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                onClick={() => setCurrentPage(page.key)}
              >
                {page.name}
              </button>
            ))}
          </nav>
        {/* <nav className="mt-4 md:mt-0">
          <ul className="flex flex-wrap justify-center space-x-4">
            {pages.map(page => (
              <li key={page.key}>
                <button
                  onClick={() => setCurrentPage(page.key)}
                  className={`text-gray-600 hover:text-gray-900 transition-colors duration-300 focus:outline-none ${currentPage === page.key ? 'font-bold text-gray-900' : ''}`}
                >
                  {page.name}
                </button>
              </li>
            ))}
          </ul>
        </nav> */}
      </div>
    </header>
  );
};

export default Header;
