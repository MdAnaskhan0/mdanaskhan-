import { FaGraduationCap } from 'react-icons/fa';
import { education } from '../../data/portfolioData';
import SectionHeader from '../ui/SectionHeader';

const Education = () => {
    return (
        <section id="education" className="py-20 px-6 bg-gray-800 bg-opacity-50">
            <div className="container mx-auto max-w-4xl">
                <SectionHeader>Education</SectionHeader>
                <div className="space-y-12">
                    {education.map((edu, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg p-8 border border-gray-700 hover:border-green-400 transition-all duration-300">
                            <div className="flex items-start">
                                <div className="bg-green-400 text-gray-900 p-3 rounded-full mr-6">
                                    <FaGraduationCap className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                                    <div className="flex flex-col md:flex-row md:items-center text-gray-400 mb-4">
                                        <span className="md:mr-4">{edu.institution}</span>
                                        <span className="hidden md:block">•</span>
                                        <span className="md:ml-4 text-green-400">{edu.period}</span>
                                    </div>
                                    <p className="text-gray-300">{edu.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;