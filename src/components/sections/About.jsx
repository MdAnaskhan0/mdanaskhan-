import { useState, useEffect } from 'react';
import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaFacebook,
    FaDownload,
    FaCode,
    FaServer,
    FaDatabase,
    FaTools,
    FaUser,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaLaptop,
    FaCogs,
    FaComments
} from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';
import SectionHeader from '../ui/SectionHeader';
import Image from '../../assets/profile/Profile.jpg';

const About = () => {
    const [activeTab, setActiveTab] = useState('personal');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 300);
        return () => clearTimeout(timer);
    }, []);

    const personalDetails = [
        { label: 'Name', value: personalInfo.name, icon: <FaUser className="text-green-400" /> },
        { label: 'Email', value: personalInfo.email, icon: <FaEnvelope className="text-green-400" /> },
        { label: 'Phone', value: personalInfo.phone, icon: <FaPhone className="text-green-400" /> },
        { label: 'Location', value: personalInfo.location, icon: <FaMapMarkerAlt className="text-green-400" /> },
    ];

    const techStacks = {
        frontend: ['React', 'JavaScript', 'Redux', 'Tailwind CSS', 'HTML5', 'CSS3'],
        backend: ['Node.js', 'Express.js', 'PHP', 'Python', 'REST APIs'],
        database: ['MySQL', 'MongoDB'],
        tools: ['Git', 'VS Code', 'Figma', 'Postman', 'Mikrotik', 'Adobe Photoshop']
    };

    const stats = [
        { number: '2+', label: 'Years Experience', icon: <FaCode className="text-green-400" /> },
        { number: '15+', label: 'Projects Completed', icon: <FaServer className="text-green-400" /> },
        { number: '10+', label: 'Technologies', icon: <FaTools className="text-green-400" /> },
        { number: '5+', label: 'Happy Clients', icon: <FaDatabase className="text-green-400" /> }
    ];

    return (
        <section id="about" className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-20 h-20 border-2 border-green-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-16 h-16 border-2 border-blue-400 rounded-full animate-bounce"></div>
                <div className="absolute top-1/2 left-1/4 w-12 h-12 border-2 border-purple-400 rounded-full animate-spin"></div>
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <SectionHeader>About Me</SectionHeader>

                <div className={`flex flex-col lg:flex-row gap-12 items-start transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {/* Profile Image with Animation */}
                    <div className="lg:w-2/5 flex justify-center">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-75 group-hover:opacity-100 blur transition-all duration-300 animate-tilt"></div>
                            <div className="relative">
                                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-gray-800 group-hover:border-green-400 transition-all duration-500 shadow-2xl">
                                    <img
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        src={Image}
                                        alt={personalInfo.name}
                                    />
                                </div>
                                <div className="absolute -bottom-4 -right-4 bg-green-500 text-gray-900 px-4 py-2 rounded-full font-bold shadow-lg animate-pulse">
                                    Available
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-3/5 space-y-8">
                        {/* Introduction Text */}
                        <div className="space-y-6">
                            <h3 className="text-2xl md:text-3xl font-bold text-white">
                                Crafting Digital Experiences with <span className="text-green-400">Precision</span>
                            </h3>
                            {personalInfo.bio.map((paragraph, index) => (
                                <p
                                    key={index}
                                    className="text-lg text-gray-300 leading-relaxed transition-all duration-500 delay-100"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-800 bg-opacity-50 backdrop-blur-sm p-4 rounded-xl border border-gray-700 hover:border-green-400 hover:transform hover:-translate-y-1 transition-all duration-300 group"
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
                                            {stat.number}
                                        </div>
                                        <div className="text-xl">{stat.icon}</div>
                                    </div>
                                    <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Tabbed Content */}
                        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden">
                            {/* Tab Headers */}
                            <div className="flex border-b border-gray-700">
                                {[
                                    { id: 'personal', label: 'Personal Info', icon: <FaUser className="w-4 h-4" /> },
                                    { id: 'tech', label: 'Tech Stack', icon: <FaLaptop className="w-4 h-4" /> },
                                    { id: 'contact', label: 'Quick Contact', icon: <FaComments className="w-4 h-4" /> }
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex-1 py-4 px-6 flex items-center justify-center gap-2 transition-all duration-300 ${activeTab === tab.id
                                                ? 'bg-green-500 text-gray-900 font-bold'
                                                : 'text-gray-400 hover:text-white hover:bg-gray-700'
                                            }`}
                                    >
                                        {tab.icon}
                                        <span className="hidden sm:block">{tab.label}</span>
                                    </button>
                                ))}
                            </div>

                            {/* Tab Content */}
                            <div className="p-6">
                                {activeTab === 'personal' && (
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {personalDetails.map((item, index) => (
                                            <div
                                                key={index}
                                                className="bg-gray-900 p-4 rounded-lg border border-gray-700 hover:border-green-400 transition-all duration-300 group"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="text-xl">
                                                        {item.icon}
                                                    </div>
                                                    <div>
                                                        <div className="text-sm text-gray-400 group-hover:text-green-400 transition-colors">
                                                            {item.label}
                                                        </div>
                                                        <div className="text-gray-200 font-medium">
                                                            {item.value}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {activeTab === 'tech' && (
                                    <div className="space-y-6">
                                        {Object.entries(techStacks).map(([category, technologies]) => (
                                            <div key={category}>
                                                <h4 className="text-lg font-semibold text-green-400 mb-3 capitalize">
                                                    {category}
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {technologies.map((tech, index) => (
                                                        <span
                                                            key={index}
                                                            className="px-3 py-2 bg-gray-900 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-green-400 hover:text-green-400 transition-all duration-300 cursor-default"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {activeTab === 'contact' && (
                                    <div className="space-y-6">
                                        <div className="text-center">
                                            <p className="text-gray-300 mb-4">
                                                Let's discuss your next project or opportunity
                                            </p>
                                            <div className="flex flex-wrap justify-center gap-4">
                                                <a
                                                    href={`mailto:${personalInfo.email}`}
                                                    className="bg-green-500 hover:bg-green-600 text-gray-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
                                                >
                                                    <FaEnvelope className="w-4 h-4" />
                                                    Email Me
                                                </a>
                                                <a
                                                    href="#contact"
                                                    className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center gap-2"
                                                >
                                                    <FaComments className="w-4 h-4" />
                                                    Get In Touch
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Social Links & CTA */}
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6">
                            <div className="flex items-center gap-4">
                                <span className="text-gray-400">Follow me:</span>
                                <div className="flex gap-3">
                                    {[
                                        { platform: 'github', icon: <FaGithub className="w-5 h-5" />, link: personalInfo.socialLinks.github },
                                        { platform: 'linkedin', icon: <FaLinkedin className="w-5 h-5" />, link: personalInfo.socialLinks.linkedin },
                                        { platform: 'instagram', icon: <FaInstagram className="w-5 h-5" />, link: personalInfo.socialLinks.instagram },
                                        { platform: 'facebook', icon: <FaFacebook className="w-5 h-5" />, link: personalInfo.socialLinks.facebook }
                                    ].map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-400 hover:transform hover:-translate-y-1 transition-all duration-300 group"
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <a
                                href="/resume.pdf" // Replace with your actual resume link
                                download
                                className="bg-transparent border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center gap-2 group"
                            >
                                <FaDownload className="w-4 h-4 group-hover:animate-bounce" />
                                Download Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;