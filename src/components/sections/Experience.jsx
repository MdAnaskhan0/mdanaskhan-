import { FaBriefcase } from 'react-icons/fa';
import { experiences } from '../../data/portfolioData';
import SectionHeader from '../ui/SectionHeader';

const Experience = () => {
    return (
        <section id="experience" className="py-20 px-6">
            <div className="container mx-auto max-w-4xl">
                <SectionHeader>Experience</SectionHeader>
                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg p-8 border border-gray-700 hover:border-green-400 transition-all duration-300">
                            <div className="flex items-start">
                                <div className="bg-green-400 text-gray-900 p-3 rounded-full mr-6">
                                    <FaBriefcase className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                                    <div className="flex flex-col md:flex-row md:items-center text-gray-400 mb-4">
                                        <span className="md:mr-4">{exp.company}</span>
                                        <span className="hidden md:block">•</span>
                                        <span className="md:ml-4 text-green-400">{exp.period}</span>
                                    </div>
                                    <p className="text-sm md:text-xl text-gray-300 mb-6">{exp.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech, i) => (
                                            <span key={i} className="px-3 py-1 bg-gray-900 text-green-400 text-sm rounded-full">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;