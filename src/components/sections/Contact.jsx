import { FaEnvelope, FaPhone, FaHome, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';
import SectionHeader from '../ui/SectionHeader';

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-6">
            <div className="container mx-auto max-w-4xl">
                <SectionHeader>Get In Touch</SectionHeader>
                <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
                    <p className="text-lg text-gray-300 mb-8 text-center">
                        Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div className="flex items-center">
                            <FaEnvelope className="text-green-400 w-6 h-6 mr-4" />
                            <div>
                                <h3 className="text-lg font-bold">Email</h3>
                                <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-green-400">{personalInfo.email}</a>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <FaPhone className="text-green-400 w-6 h-6 mr-4" />
                            <div>
                                <h3 className="text-lg font-bold">Phone</h3>
                                <a href={`tel:${personalInfo.phone}`} className="text-gray-400 hover:text-green-400">{personalInfo.phone}</a>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <FaHome className="text-green-400 w-6 h-6 mr-4" />
                            <div>
                                <h3 className="text-lg font-bold">Location</h3>
                                <p className="text-gray-400">{personalInfo.location}</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <FaLinkedin className="text-green-400 w-6 h-6 mr-4" />
                            <div>
                                <h3 className="text-lg font-bold">LinkedIn</h3>
                                <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400">Connect with me</a>
                            </div>
                        </div>
                    </div>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                                    placeholder="Your email"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                                placeholder="Subject of your message"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                            <textarea
                                id="message"
                                rows="5"
                                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                                placeholder="Your message"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-green-500 hover:bg-green-600 text-gray-900 font-bold py-3 px-6 rounded-lg transition-all duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;