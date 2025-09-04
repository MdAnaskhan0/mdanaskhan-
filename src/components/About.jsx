import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';
import Image from '../assets/profile/Profile.jpg';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-20 px-4 sm:px-6 bg-gray-800 bg-opacity-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">
          <span className="text-green-400">#</span> About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-green-400">
              <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
                <img className="w-full h-full object-cover" src={Image} alt="Md. Anas Khan" />
              </div>
            </div>
          </div>
          <div className="md:w-2/3 md:pl-8 lg:pl-12">
            <p className="text-base md:text-lg text-gray-300 mb-4 md:mb-6">
              I'm a passionate developer with experience in IT infrastructure management and full-stack web development. I enjoy turning complex ideas into elegant, intuitive solutions.
            </p>
            <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8">
              My goal is to leverage my skills to deliver secure, high-performance, and user-focused digital solutions. I'm driven by curiosity, adaptability, and a commitment to turning challenges into opportunities.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
              {[
                { label: 'Name', value: 'Md. Anas Khan' },
                { label: 'Email', value: 'anas.cse.201@gmail.com' },
                { label: 'Phone', value: '+8801537191012' },
                { label: 'Location', value: 'Dhaka, Bangladesh' },
              ].map((item, index) => (
                <div key={index} className="bg-gray-900 p-3 md:p-4 rounded-lg">
                  <div className="text-xs md:text-sm text-gray-400">{item.label}</div>
                  <div className="text-sm md:text-base text-gray-200 truncate">{item.value}</div>
                </div>
              ))}
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com/MdAnaskhan0" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                <FaGithub className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="https://www.linkedin.com/in/md-anas-khan-b2122119b/" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                <FaLinkedin className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="https://mdanaskhan.vercel.app/" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                <FaGlobe className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;