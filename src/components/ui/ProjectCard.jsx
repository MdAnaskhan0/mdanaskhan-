import { image } from 'framer-motion/client';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-green-400 transition-all duration-300 transform hover:-translate-y-1">
            <div className="h-12 bg-gray-700 relative">
                <div className="absolute top-4 left-4 flex space-x-1.5">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
            </div>
            <div className="p-6">
                <img src={project.image} alt="image" className="rounded-sm" />
                <h3 className="text-xl font-bold mt-4 mb-2">{project.title}</h3>
                <p className="text-sm md:text-xl text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-900 text-green-400 text-sm rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex space-x-4">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center"
                    >
                        <FaGithub className="w-5 h-5 mr-1" /> Code
                    </a>

                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center"
                    >
                        <FaExternalLinkAlt className="w-5 h-5 mr-1" /> Live Demo
                    </a>
                </div>

            </div>
        </div>
    );
};

export default ProjectCard;