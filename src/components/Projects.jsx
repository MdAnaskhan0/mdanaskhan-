import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Employee Movement Data Record Web Solution',
      description: 'Developed and deployed a secure, scalable full-stack platform featuring dedicated admin and client portals',
      tags: ['React', 'Node.js', 'Express.js', 'MySQL', 'Socket.IO', 'Tailwind CSS'],
      github: 'https://github.com/MdAnaskhan0/med',
      demo: '#'
    },
    {
      title: 'DailyNeeds E-commerce Web Application',
      description: 'Full-stack e-commerce application using MERN stack with user authentication and payment integration',
      tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      github: 'https://github.com/MdAnaskhan0/DailyNeeds-E-Commerce.git',
      demo: '#'
    },
    {
      title: 'Hospital Management System',
      description: 'Comprehensive system with admin, doctor, and patient modules for managing hospital operations',
      tags: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'HTML', 'CSS'],
      github: 'https://github.com/MdAnaskhan0/Hospital-Management-System.git',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">
          <span className="text-green-400">#</span> Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-green-400 transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-40 md:h-48 bg-gray-700 relative">
                <div className="absolute top-4 left-4 flex space-x-1.5">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm md:text-base">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 md:px-3 py-1 bg-gray-900 text-green-400 text-xs md:text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.github} className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center text-sm md:text-base">
                    <FaGithub className="w-4 h-4 md:w-5 md:h-5 mr-1" /> Code
                  </a>
                  <a href={project.demo} className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center text-sm md:text-base">
                    <FaExternalLinkAlt className="w-4 h-4 md:w-5 md:h-5 mr-1" /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;