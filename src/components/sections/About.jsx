import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';
import SectionHeader from '../ui/SectionHeader';
import Image from '../../assets/profile/Profile.jpg';

const About = () => {
    const personalDetails = [
        { label: 'Name', value: personalInfo.name },
        { label: 'Email', value: personalInfo.email },
        { label: 'Phone', value: personalInfo.phone },
        { label: 'Location', value: personalInfo.location },
    ];

    return (
        <section id="about" className="py-20 px-6 bg-gray-800 bg-opacity-50">
            <div className="container mx-auto max-w-4xl">
                <SectionHeader>About Me</SectionHeader>
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
                        <div className="relative w-63 h-63 rounded-full overflow-hidden border-4 border-green-400">
                            <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
                                <img className="w-full object-fit" src={Image} alt={personalInfo.name} />
                            </div>
                        </div>
                    </div>
                    <div className="md:w-2/3 md:pl-12">
                        {personalInfo.bio.map((paragraph, index) => (
                            <p key={index} className="text-md text-gray-300 mb-6">
                                {paragraph}
                            </p>
                        ))}
                        <div className="grid md:grid-cols-2 gap-4">
                            {personalDetails.map((item, index) => (
                                <div key={index} className="bg-gray-900 p-4 rounded-lg">
                                    <div className="text-sm text-gray-400">{item.label}</div>
                                    <div className="text-gray-200">{item.value}</div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 flex space-x-4">
                            <a href={personalInfo.socialLinks.github} className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                                <FaGithub className="w-6 h-6" />
                            </a>
                            <a href={personalInfo.socialLinks.linkedin} className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                                <FaLinkedin className="w-6 h-6" />
                            </a>
                            <a href={personalInfo.socialLinks.instagram} className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                                <FaInstagram className="w-6 h-6" />
                            </a>
                            <a href={personalInfo.socialLinks.facebook} className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                                <FaFacebook className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;