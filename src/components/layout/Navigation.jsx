import { useState } from 'react';
import { FaCode, FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../assets/profile/Logo.png';

const Navigation = ({ activeSection, setActiveSection }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navItems = ['home', 'about', 'experience', 'education', 'projects', 'skills', 'certifications', 'contact'];

    const handleNavClick = (item) => {
        setActiveSection(item);
        setIsMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-90 backdrop-blur-sm z-40 border-b border-gray-700">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <div className="text-xl font-bold text-green-400 flex justify-center items-center">
                            <a
                                href="#home"
                                className='hover:scale-105 duration-300'
                                onClick={() => handleNavClick('home')}
                            >
                                <img
                                    src={Logo}
                                    alt="logo"
                                    className="w-32 lg:w-40 xl:w-48 transition-all duration-300"
                                />
                            </a>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex space-x-6 lg:space-x-8 py-4">
                            {navItems.map((item) => (
                                <a
                                    key={item}
                                    href={`#${item}`}
                                    className={`capitalize hover:text-green-400 transition-colors duration-300 text-sm lg:text-base ${activeSection === item ? 'text-green-400 font-semibold' : 'text-gray-300'}`}
                                    onClick={() => handleNavClick(item)}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                className="text-gray-300 hover:text-green-400 transition-colors duration-300 p-2"
                                onClick={toggleMobileMenu}
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

            {/* Mobile Sidebar Menu */}
            <div className={`
                fixed top-0 right-0 h-full w-64 bg-gray-900 bg-opacity-95 backdrop-blur-sm z-50 transform transition-transform duration-300 ease-in-out
                ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                md:hidden
            `}>
                {/* Close Button */}
                <div className="flex justify-end p-4 border-b border-gray-700">
                    <button
                        className="text-gray-300 hover:text-green-400 transition-colors duration-300 p-2"
                        onClick={toggleMobileMenu}
                    >
                        <FaTimes className="w-6 h-6" />
                    </button>
                </div>

                {/* Mobile Navigation Items */}
                <div className="flex flex-col p-6 space-y-6">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item}`}
                            className={`capitalize hover:text-green-400 transition-colors duration-300 text-lg py-2 px-4 rounded-lg ${activeSection === item
                                    ? 'text-green-400 bg-gray-800 font-semibold'
                                    : 'text-gray-300 hover:bg-gray-800'
                                }`}
                            onClick={() => handleNavClick(item)}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>

            {/* Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={toggleMobileMenu}
                />
            )}
        </>
    );
};

export default Navigation;