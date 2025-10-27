import Navigation from './Navigation';

const Header = ({ activeSection, setActiveSection }) => {
    return <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />;
};

export default Header;