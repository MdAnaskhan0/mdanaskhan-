import { FaCode, FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';

const Footer = () => {
    const socialLinks = [
        { platform: 'github', icon: <FaGithub className="w-6 h-6" />, link: personalInfo.socialLinks.github },
        { platform: 'linkedin', icon: <FaLinkedin className="w-6 h-6" />, link: personalInfo.socialLinks.linkedin },
        { platform: 'instagram', icon: <FaInstagram className="w-6 h-6" />, link: personalInfo.socialLinks.instagram },
        { platform: 'facebook', icon: <FaFacebook className="w-6 h-6" />, link: personalInfo.socialLinks.facebook }
    ];

    return (
        <footer className="bg-gray-900 py-12 px-6 border-t border-gray-800">
            <div className="container mx-auto max-w-4xl">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-xl font-bold text-green-400 flex items-center mb-4 md:mb-0">
                        <FaCode className="w-6 h-6 mr-2" />
                        {personalInfo.name}
                    </div>
                    <div className="flex space-x-6">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                            >
                                <span className="sr-only">{social.platform}</span>
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="text-center text-gray-500 mt-8 text-sm">
                    &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;