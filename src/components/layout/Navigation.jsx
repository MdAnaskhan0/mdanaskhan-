import { FaCode, FaBars } from 'react-icons/fa';
import Logo from '../../assets/profile/Logo.png'

const Navigation = ({ activeSection, setActiveSection }) => {
    const navItems = ['home', 'about', 'experience', 'education', 'projects', 'skills', 'certifications', 'contact'];

    return (
        <nav className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-90 backdrop-blur-sm z-30 border-b border-gray-700">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center">
                    <div className="text-xl font-bold text-green-400 flex justify-center items-center">
                        <a href="#home" className='hover:scale-105 duration-300'><img src={Logo} alt="logo" className="md:w-[200px]" /></a>
                    </div>
                    <div className="hidden md:flex space-x-8 py-4">
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href={`#${item}`}
                                className={`capitalize hover:text-green-400 transition-colors duration-300 ${activeSection === item ? 'text-green-400' : 'text-gray-300'}`}
                                onClick={() => setActiveSection(item)}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                    <div className="md:hidden">
                        <button className="text-gray-300 hover:text-green-400">
                            <FaBars className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;