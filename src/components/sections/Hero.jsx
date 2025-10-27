import CodeEditor from '../ui/CodeEditor';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center pt-20 pb-16 px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-block px-3 py-1 mb-6 text-sm bg-gray-800 rounded-full text-green-400 border border-gray-700">
                            <span className="animate-pulse">●</span> Available for new opportunities
                        </div>
                        <h1 className="text-4xl md:text-7xl font-bold mb-6">
                            Hi, I'm <span className="text-green-400">Anas</span>
                        </h1>
                        <h2 className="text-xl md:text-3xl text-gray-300 mb-8">
                            Full Stack Developer & IT Professional
                        </h2>
                        <p className="text-md text-gray-400 mb-10">
                            I build exceptional digital experiences focused on performance, accessibility, and clean code.
                        </p>
                        <div className="flex space-x-2 md:space-x-4">
                            <a href="#projects" className="bg-green-500 hover:bg-green-600 text-gray-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1">
                                View Projects
                            </a>
                            <a href="#contact" className="border border-gray-600 hover:border-green-400 text-gray-300 hover:text-green-400 font-bold py-3 px-6 rounded-lg transition-all duration-300">
                                Contact Me
                            </a>
                        </div>
                    </div>
                    <CodeEditor />
                </div>
            </div>
        </section>
    );
};

export default Hero;