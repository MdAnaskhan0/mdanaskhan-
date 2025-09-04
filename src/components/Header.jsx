import { FaCode } from 'react-icons/fa';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = ({ activeSection, setActiveSection, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const navItems = ['home', 'about', 'experience', 'education', 'projects', 'skills', 'certifications', 'contact'];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-90 backdrop-blur-sm z-30 border-b border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-green-400 flex items-center">
            <FaCode className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
            <span className="hidden sm:block">Md. Anas Khan</span>
            <span className="sm:hidden">M.A.K</span>
          </div>
          
          <div className="hidden md:flex space-x-4 lg:space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`capitalize hover:text-green-400 transition-colors duration-300 text-sm lg:text-base ${activeSection === item ? 'text-green-400' : 'text-gray-300'}`}
                onClick={() => setActiveSection(item)}
              >
                {item}
              </a>
            ))}
          </div>
          
          <div className="md:hidden">
            <button 
              className="text-gray-300 hover:text-green-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;