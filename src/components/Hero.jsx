import { useState, useEffect } from 'react';

const Hero = () => {
  const [codeLines, setCodeLines] = useState([]);
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0);

  const codeSnippets = [
    [
      "function createPortfolio() {",
      "  const developer = {",
      "    name: 'Md. Anas Khan',",
      "    role: 'Full Stack Developer & IT Professional',",
      "    skills: ['JavaScript', 'React', 'Node.js', 'PHP'],",
      "    passion: 'Building amazing digital experiences'",
      "  };",
      "  return developer;",
      "}"
    ],
    [
      "class Portfolio extends React.Component {",
      "  constructor() {",
      "    super();",
      "    this.state = {",
      "      projects: [],",
      "      skills: []",
      "    };",
      "  }",
      "",
      "  render() {",
      "    return <div>Awesome Portfolio</div>;",
      "  }",
      "}"
    ],
    [
      "// API fetch example",
      "async function fetchProjects() {",
      "  try {",
      "    const response = await fetch('/api/projects');",
      "    const data = await response.json();",
      "    return data.projects;",
      "  } catch (error) {",
      "    console.error('Error:', error);",
      "  }",
      "}"
    ]
  ];

  useEffect(() => {
    let currentLine = 0;
    let currentSnippet = codeSnippets[currentCodeIndex];
    
    const codeInterval = setInterval(() => {
      if (currentLine < currentSnippet.length) {
        setCodeLines(prev => [...prev, currentSnippet[currentLine]]);
        currentLine++;
      } else {
        setTimeout(() => {
          setCodeLines([]);
          setCurrentCodeIndex((prevIndex) => (prevIndex + 1) % codeSnippets.length);
        }, 3000);
        clearInterval(codeInterval);
      }
    }, 300);

    return () => clearInterval(codeInterval);
  }, [currentCodeIndex]);

  const getCodeLineColor = (line) => {
    if (!line) return "text-gray-300";
    if (line.includes('function') || line.includes('class') || line.includes('return')) 
      return "text-purple-400";
    if (line.includes('const') || line.includes('let') || line.includes('async')) 
      return "text-blue-400";
    if (line.includes('name') || line.includes('role') || line.includes('skills') || 
        line.includes('passion') || line.includes('state') || line.includes('projects') ||
        line.includes('try') || line.includes('catch')) 
      return "text-yellow-300";
    if (line.includes("'") || line.includes('"') || line.includes('`')) 
      return "text-green-400";
    if (line.includes('//')) 
      return "text-gray-500";
    return "text-gray-300";
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block px-3 py-1 mb-4 md:mb-6 text-xs md:text-sm bg-gray-800 rounded-full text-green-400 border border-gray-700">
              <span className="animate-pulse">●</span> Available for new opportunities
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6">
              Hi, I'm <span className="text-green-400">Anas</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-6 md:mb-8">
              Full Stack Developer & IT Professional
            </h2>
            <p className="text-base md:text-lg text-gray-400 mb-8 md:mb-10">
              I build exceptional digital experiences focused on performance, accessibility, and clean code.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#projects" className="bg-green-500 hover:bg-green-600 text-gray-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 text-center">
                View Projects
              </a>
              <a href="#contact" className="border border-gray-600 hover:border-green-400 text-gray-300 hover:text-green-400 font-bold py-3 px-6 rounded-lg transition-all duration-300 text-center">
                Contact Me
              </a>
            </div>
          </div>
          
          {/* Code Editor Panel */}
          <div className="order-1 lg:order-2 bg-gray-800 rounded-lg overflow-hidden border border-gray-700 shadow-xl mb-8 lg:mb-0">
            <div className="flex items-center px-4 py-2 bg-gray-900 border-b border-gray-700">
              <div className="flex items-center">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full mr-1 sm:mr-2"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full mr-1 sm:mr-2"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full mr-1 sm:mr-2"></div>
              </div>
              <div className="ml-2 sm:ml-4 text-xs sm:text-sm text-gray-400">about-me.js</div>
            </div>
            <div className="p-3 sm:p-4 font-mono text-xs sm:text-sm">
              <div className="flex">
                <div className="text-right pr-2 sm:pr-4 text-gray-500 select-none">
                  {codeLines.map((_, index) => (
                    <div key={index}>{index + 1}</div>
                  ))}
                </div>
                <div className="w-full overflow-x-auto">
                  {codeLines.map((line, index) => (
                    <div key={index} className={getCodeLineColor(line)}>
                      {line}
                    </div>
                  ))}
                  <div className="flex">
                    <span className="text-gray-500">{codeLines.length + 1}</span>
                    <span className="ml-2 sm:ml-4 text-green-400 animate-pulse">_</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;