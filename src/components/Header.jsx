import React from 'react';
import styled from 'styled-components';

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
         <NavContainer>
            {pages.map((page) => (
              <NavButton
                key={page.key}
                $isActive={currentPage === page.key}
                onClick={() => setCurrentPage(page.key)}
              >
                {page.name}
              </NavButton>
            ))}
          </NavContainer>
         {/* <nav className="flex flex-wrap justify-center md:justify-end gap-2 md:gap-4">
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
          </nav> */}
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

const NavContainer = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem; /* gap-2 */
  @media (min-width: 768px) {
    justify-content: flex-end; /* md:justify-end */
    gap: 1rem; /* md:gap-4 */
  }
`;

const NavButton = styled.button`
  padding-top: 0.5rem; /* py-2 */
  padding-bottom: 0.5rem; /* py-2 */
  padding-left: 1rem; /* px-4 */
  padding-right: 1rem; /* px-4 */
  border-radius: 9999px; /* rounded-full */
  font-weight: 500; /* font-medium */
  transition: all 200ms ease-in-out;
  cursor: pointer;
  border: none;
  background-color: #e5e7eb; /* bg-gray-200 */
  color: #374151; /* text-gray-700 */
  box-shadow: none;

  ${props => props.$isActive && `
    background-color: #111827; /* bg-gray-900 */
    color: #ffffff; /* text-white */
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1); /* shadow-lg */
  `}
`;

export default Header;
