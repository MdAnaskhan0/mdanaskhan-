import { useState } from 'react';
import { FaEnvelope, FaPhone, FaHome, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';
import SectionHeader from '../ui/SectionHeader';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [alert, setAlert] = useState({ show: false, type: '', message: '' });

    // EmailJS configuration
    const EMAILJS_SERVICE_ID = 'service_egrwg1f'; // Replace with your EmailJS service ID
    const EMAILJS_TEMPLATE_ID = 'template_z3wrnzn'; // Replace with your EmailJS template ID
    const EMAILJS_PUBLIC_KEY = 'PVe3L9dRWIzP6oacN'; // Replace with your EmailJS public key

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const showAlert = (type, message) => {
        setAlert({ show: true, type, message });
        setTimeout(() => {
            setAlert({ show: false, type: '', message: '' });
        }, 5000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            showAlert('error', 'Please fill in all fields');
            return;
        }

        if (!formData.email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
            showAlert('error', 'Please enter a valid email address');
            return;
        }

        setIsLoading(true);

        try {
            // Prepare template parameters
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                subject: `Portfolio Site - ${formData.subject}`,
                message: formData.message,
                to_email: 'anas.cse.201@gmail.com',
                reply_to: formData.email
            };

            // Send email using EmailJS
            const result = await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams,
                EMAILJS_PUBLIC_KEY
            );

            if (result.text === 'OK') {
                showAlert('success', 'Message sent successfully! I\'ll get back to you soon.');
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            }
        } catch (error) {
            console.error('Email sending failed:', error);
            showAlert('error', 'Failed to send message. Please try again later or contact me directly at anas.cse.201@gmail.com');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="py-20 px-6">
            <div className="container mx-auto max-w-4xl">
                <SectionHeader>Get In Touch</SectionHeader>

                {/* Alert Message */}
                {alert.show && (
                    <div className={`mb-6 p-4 rounded-lg ${alert.type === 'success'
                        ? 'bg-green-900 border border-green-400 text-green-300'
                        : 'bg-red-900 border border-red-400 text-red-300'
                        }`}>
                        {alert.message}
                    </div>
                )}

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

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-colors duration-300"
                                    placeholder="Your name"
                                    disabled={isLoading}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-colors duration-300"
                                    placeholder="Your email"
                                    disabled={isLoading}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                                Subject *
                            </label>
                            <input
                                type="text"
                                id="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-colors duration-300"
                                placeholder="Subject of your message"
                                disabled={isLoading}
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                                Message *
                            </label>
                            <textarea
                                id="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-colors duration-300 resize-vertical"
                                placeholder="Your message"
                                disabled={isLoading}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-green-500 hover:bg-green-600 disabled:bg-green-800 disabled:cursor-not-allowed text-gray-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </>
                            ) : (
                                'Send Message'
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;