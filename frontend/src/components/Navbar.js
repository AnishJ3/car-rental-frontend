import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserAlt, faSignInAlt,faTaxi ,faUser} from '@fortawesome/free-solid-svg-icons';
import LogoImage from '../images/logo.svg';
import Login from '../pages/Login';

const Navbar = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  return (
    <header className="bg-gray-100 text-gray-700 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <nav>
          <ul className="flex items-center space-x-6">
            <li>
              <a href="/" className="flex items-center hover:text-gray-500 transition-colors">
                <FontAwesomeIcon icon={faHome} className="mr-2 text-2xl" />
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="flex items-center hover:text-gray-500 transition-colors">
              <FontAwesomeIcon icon={faTaxi} className="mr-2 text-2xl" />
                Services
              </a>
            </li>
          </ul>
        </nav>

        <a href="/" className="flex items-center">
          <img src={LogoImage} alt="Logo" className="h-8 mr-2" />
        </a>

        <nav>
          <ul className="flex items-center space-x-6">
            <li>
              <button
                onClick={toggleLoginModal}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                <FontAwesomeIcon icon={faUser} className="mr-2 text-2xl" />
                Login
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {isLoginModalOpen && (
        <Login
          isOpen={isLoginModalOpen}
          onClose={toggleLoginModal}
          onLogin={(formData) => {
            console.log('Login data:', formData);
            toggleLoginModal();
          }}
        />
      )}
    </header>
  );
};

export default Navbar;