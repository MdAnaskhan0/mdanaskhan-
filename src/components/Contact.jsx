import { FaEnvelope, FaPhone, FaHome, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">
          <span className="text-green-400">#</span> Get In Touch
        </h2>
        <div className="bg-gray-800 rounded-lg p-6 md:p-8 border border-gray-700">
          <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8 text-center">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
            <div className="flex items-center">
              <FaEnvelope className="text-green-400 w-5 h-5 md:w-6 md:h-6 mr-3 md:mr-4" />
              <div>
                <h3 className="text-base md:text-lg font-bold">Email</h3>
                <a href="mailto:anas.cse.201@gmail.com" className="text-gray-400 hover:text-green-400 text-sm md:text-base">anas.cse.201@gmail.com</a>
              </div>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-green-400 w-5 h-5 md:w-6 md:h-6 mr-3 md:mr-4" />
              <div>
                <h3 className="text-base md:text-lg font-bold">Phone</h3>
                <a href="tel:+8801537191012" className="text-gray-400 hover:text-green-400 text-sm md:text-base">+8801537191012</a>
              </div>
            </div>
            <div className="flex items-center">
              <FaHome className="text-green-400 w-5 h-5 md:w-6 md:h-6 mr-3 md:mr-4" />
              <div>
                <h3 className="text-base md:text-lg font-bold">Location</h3>
                <p className="text-gray-400 text-sm md:text-base">Satarkul, Badda, Dhaka-1212</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaLinkedin className="text-green-400 w-5 h-5 md:w-6 md:h-6 mr-3 md:mr-4" />
              <div>
                <h3 className="text-base md:text-lg font-bold">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/md-anas-khan-b2122119b/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 text-sm md:text-base">Connect with me</a>
              </div>
            </div>
          </div>
          <form className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1 md:mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent text-sm md:text-base" 
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1 md:mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent text-sm md:text-base" 
                  placeholder="Your email"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1 md:mb-2">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent text-sm md:text-base" 
                placeholder="Subject of your message"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1 md:mb-2">Message</label>
              <textarea 
                id="message" 
                rows="4" 
                className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent text-sm md:text-base" 
                placeholder="Your message"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-green-500 hover:bg-green-600 text-gray-900 font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg transition-all duration-300 text-sm md:text-base"
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