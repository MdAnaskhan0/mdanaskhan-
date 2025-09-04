import { FaCode, FaGithub, FaLinkedin, FaTwitter, FaGlobe } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-10 md:py-12 px-4 sm:px-6 border-t border-gray-800">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-lg md:text-xl font-bold text-green-400 flex items-center mb-4 md:mb-0">
            <FaCode className="w-5 h-5 md:w-6 md:h-6 mr-2" />
            <span className="hidden sm:inline">Md. Anas Khan</span>
            <span className="sm:hidden">M.A.K</span>
          </div>
          <div className="flex space-x-4 md:space-x-6">
            {[
              { platform: 'github', icon: <FaGithub className="w-5 h-5 md:w-6 md:h-6" />, link: 'https://github.com/MdAnaskhan0' },
              { platform: 'linkedin', icon: <FaLinkedin className="w-5 h-5 md:w-6 md:h-6" />, link: 'https://www.linkedin.com/in/md-anas-khan-b2122119b/' },
              { platform: 'twitter', icon: <FaTwitter className="w-5 h-5 md:w-6 md:h-6" />, link: '#' },
              { platform: 'globe', icon: <FaGlobe className="w-5 h-5 md:w-6 md:h-6" />, link: 'https://mdanaskhan.vercel.app/' }
            ].map((social, index) => (
              <a 
                key={index} 
                href={social.link} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                aria-label={social.platform}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="text-center text-gray-500 mt-6 md:mt-8 text-xs md:text-sm">
          &copy; {new Date().getFullYear()} Md. Anas Khan. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;