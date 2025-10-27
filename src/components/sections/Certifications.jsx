import { FaExternalLinkAlt } from 'react-icons/fa';
import { certifications } from '../../data/portfolioData';
import SectionHeader from '../ui/SectionHeader';

const Certifications = () => {
    return (
        <section id="certifications" className="py-20 px-6">
            <div className="container mx-auto max-w-4xl">
                <SectionHeader>Certifications</SectionHeader>
                <div className="space-y-6">
                    {certifications.map((cert, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-green-400 transition-all duration-300">
                            <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                            <div className="flex flex-col md:flex-row md:items-center text-gray-400 mb-2">
                                <span className="md:mr-4">{cert.issuer}</span>
                                <span className="hidden md:block">•</span>
                                <span className="md:ml-4 text-green-400">{cert.period}</span>
                            </div>
                            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline flex items-center">
                                <FaExternalLinkAlt className="w-4 h-4 mr-1" /> View Certificate
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;