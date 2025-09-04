const MobileMenu = ({ isOpen, activeSection, setActiveSection }) => {
  const navItems = ['home', 'about', 'experience', 'education', 'projects', 'skills', 'certifications', 'contact'];

  return (
    <div className={`fixed inset-0 z-20 bg-gray-900 bg-opacity-95 backdrop-blur-sm transform transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex flex-col items-center justify-center h-full space-y-8">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className={`capitalize text-2xl hover:text-green-400 transition-colors duration-300 ${activeSection === item ? 'text-green-400' : 'text-gray-300'}`}
            onClick={() => setActiveSection(item)}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;