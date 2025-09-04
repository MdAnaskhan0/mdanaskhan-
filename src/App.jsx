import { useState, useEffect } from 'react';
import { FaCode, FaGithub, FaLinkedin, FaTwitter, FaDribbble, FaExternalLinkAlt, FaUser, FaBars, FaBriefcase, FaGraduationCap, FaPhone, FaEnvelope, FaHome, FaGlobe, FaFacebook, FaInstagram } from 'react-icons/fa';
import { SiJavascript, SiReact, SiNodedotjs, SiCss3, SiPython, SiAdobexd, SiPhp, SiMysql, SiMongodb, SiGit, SiTailwindcss, SiBootstrap, SiRedux } from 'react-icons/si';

import Image from './assets/profile/Profile.jpg'
import { Link } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [codeLines, setCodeLines] = useState([]);
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0);

  // Code snippets to cycle through
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

  // Handle navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) setActiveSection(hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Terminal-like typing effect
  useEffect(() => {
    const fullText = 'portfolio --user="visitor" --view="professional"';
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  // Code animation effect with continuous cycling
  useEffect(() => {
    let currentLine = 0;
    let currentSnippet = codeSnippets[currentCodeIndex];

    const codeInterval = setInterval(() => {
      if (currentLine < currentSnippet.length) {
        setCodeLines(prev => [...prev, currentSnippet[currentLine]]);
        currentLine++;
      } else {
        // Wait 3 seconds before clearing and moving to next snippet
        setTimeout(() => {
          setCodeLines([]);
          setCurrentCodeIndex((prevIndex) => (prevIndex + 1) % codeSnippets.length);
        }, 3000);
        clearInterval(codeInterval);
      }
    }, 300);

    return () => clearInterval(codeInterval);
  }, [currentCodeIndex]);

  const projects = [
    {
      title: 'Employee Movement Data Record Web Solution',
      description: 'Developed and deployed a secure, scalable full-stack platform featuring dedicated admin and client portals',
      tags: ['React', 'Node.js', 'Express.js', 'MySQL', 'Socket.IO', 'Tailwind CSS'],
      github: 'https://github.com/MdAnaskhan0/med',
      demo: '#'
    },
    {
      title: 'DailyNeeds E-commerce Web Application',
      description: 'Full-stack e-commerce application using MERN stack with user authentication and payment integration',
      tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      github: 'https://github.com/MdAnaskhan0/DailyNeeds-E-Commerce.git',
      demo: '#'
    },
    {
      title: 'Hospital Management System',
      description: 'Comprehensive system with admin, doctor, and patient modules for managing hospital operations',
      tags: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'HTML', 'CSS'],
      github: 'https://github.com/MdAnaskhan0/Hospital-Management-System.git',
      demo: '#'
    }
  ];

  const skills = [
    { name: 'JavaScript', level: 85, icon: <SiJavascript className="text-yellow-400" /> },
    { name: 'React', level: 80, icon: <SiReact className="text-blue-400" /> },
    { name: 'Node.js', level: 85, icon: <SiNodedotjs className="text-green-500" /> },
    { name: 'CSS/Tailwind', level: 85, icon: <SiTailwindcss className="text-blue-400" /> },
    { name: 'PHP', level: 80, icon: <SiPhp className="text-purple-500" /> },
    { name: 'MySQL', level: 75, icon: <SiMysql className="text-blue-600" /> },
    { name: 'MongoDB', level: 70, icon: <SiMongodb className="text-green-600" /> },
    { name: 'Git', level: 80, icon: <SiGit className="text-orange-500" /> }
  ];

  const experiences = [
    {
      role: "IT Officer",
      company: "Fashion Group",
      period: "February 2025 – Present",
      description: "Administer and maintain IT infrastructure, ensuring high system availability, performance, and security. Maintain and update the company's website, ensuring functionality, security, and up-to-date content.",
      technologies: ["IT Infrastructure", "System Administration", "Web Maintenance", "Security"]
    },
    {
      role: "Frontend Developer Intern",
      company: "Battery Low Interactive Ltd.",
      period: "November 2024 – December 2024",
      description: "Completed an internship focusing on building and optimizing user interfaces using React, enhancing application performance, and delivering engaging user experiences.",
      technologies: ["React", "JavaScript", "UI/UX", "Performance Optimization"]
    },
    {
      role: "Call Operator",
      company: "Leopard Calling Service Ltd.",
      period: "September 2021 – October 2022",
      description: "Addressed customer inquiries with expertise and professionalism, providing efficient and effective service to improve customer satisfaction.",
      technologies: ["Customer Service", "Communication", "Problem Solving"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science and Engineering",
      institution: "Green University of Bangladesh",
      period: "2021 - 2025",
      description: "CGPA: 3.14/4. Graduation Completed: January 2025"
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "AKM Rahamatullah University College",
      period: "2017 - 2019",
      description: "Science, GPA: 3.92/5, Dhaka Board"
    },
    {
      degree: "Secondary School Certificate",
      institution: "Banani Model School",
      period: "2017",
      description: "Science, GPA: 4.86/5, Dhaka Board"
    }
  ];

  const certifications = [
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      period: "2024",
      link: "https://www.freecodecamp.org/certification/mdanaskhan/javascript-algorithms-and-data-structures-v8"
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      period: "2024",
      link: "https://www.freecodecamp.org/certification/mdanaskhan/responsive-web-design"
    },
    {
      title: "Employability Skills",
      issuer: "Wadhwani Foundation",
      period: "2024",
      link: "https://web.certificate.wfglobal.org/en/certificate?certificateId=6754962c02f442946f62df3d"
    }
  ];

  // Function to safely check if a line includes certain text
  const lineIncludes = (line, text) => {
    return line && typeof line.includes === 'function' && line.includes(text);
  };

  // Function to determine code line color
  const getCodeLineColor = (line) => {
    if (!line) return "text-gray-300";
    if (lineIncludes(line, 'function') || lineIncludes(line, 'class') || lineIncludes(line, 'return'))
      return "text-purple-400";
    if (lineIncludes(line, 'const') || lineIncludes(line, 'let') || lineIncludes(line, 'async'))
      return "text-blue-400";
    if (lineIncludes(line, 'name') || lineIncludes(line, 'role') || lineIncludes(line, 'skills') ||
      lineIncludes(line, 'passion') || lineIncludes(line, 'state') || lineIncludes(line, 'projects') ||
      lineIncludes(line, 'try') || lineIncludes(line, 'catch'))
      return "text-yellow-300";
    if (lineIncludes(line, "'") || lineIncludes(line, '"') || lineIncludes(line, '`'))
      return "text-green-400";
    if (lineIncludes(line, '//'))
      return "text-gray-500";
    return "text-gray-300";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 font-mono">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-90 backdrop-blur-sm z-30 border-b border-gray-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-green-400 flex items-center">
              <FaCode className="w-6 h-6 mr-2" />
              Md. Anas Khan
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'education', 'projects', 'skills', 'certifications', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`capitalize hover:text-green-400 transition-colors duration-300 ${activeSection === item ? 'text-green-400' : 'text-gray-300'}`}
                  onClick={() => setActiveSection(item)}
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="md:hidden">
              <button className="text-gray-300 hover:text-green-400">
                <FaBars className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 mb-6 text-sm bg-gray-800 rounded-full text-green-400 border border-gray-700">
                <span className="animate-pulse">●</span> Available for new opportunities
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Hi, I'm <span className="text-green-400">Anas</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
                Full Stack Developer & IT Professional
              </h2>
              <p className="text-lg text-gray-400 mb-10">
                I build exceptional digital experiences focused on performance, accessibility, and clean code.
              </p>
              <div className="flex space-x-4">
                <a href="#projects" className="bg-green-500 hover:bg-green-600 text-gray-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1">
                  View Projects
                </a>
                <a href="#contact" className="border border-gray-600 hover:border-green-400 text-gray-300 hover:text-green-400 font-bold py-3 px-6 rounded-lg transition-all duration-300">
                  Contact Me
                </a>
              </div>
            </div>

            {/* Code Editor Panel */}
            <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 shadow-xl">
              <div className="flex items-center px-4 py-2 bg-gray-900 border-b border-gray-700">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                </div>
                <div className="ml-4 text-sm text-gray-400">about-me.js</div>
              </div>
              <div className="p-4 font-mono text-sm">
                <div className="flex">
                  <div className="text-right pr-4 text-gray-500 select-none">
                    {codeLines.map((_, index) => (
                      <div key={index}>{index + 1}</div>
                    ))}
                  </div>
                  <div className="w-full">
                    {codeLines.map((line, index) => (
                      <div key={index} className={getCodeLineColor(line)}>
                        {line}
                      </div>
                    ))}
                    <div className="flex">
                      <span className="text-gray-500">{codeLines.length + 1}</span>
                      <span className="ml-4 text-green-400 animate-pulse">_</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-800 bg-opacity-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-green-400">#</span> About Me
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
              <div className="relative w-63 h-63 rounded-full overflow-hidden border-4 border-green-400">
                <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
                  <img className="w-full object-fit" src={Image} />
                </div>
              </div>
            </div>
            <div className="md:w-2/3 md:pl-12">
              <p className="text-lg text-gray-300 mb-6">
                I'm a passionate developer with experience in IT infrastructure management and full-stack web development. I enjoy turning complex ideas into elegant, intuitive solutions.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                My goal is to leverage my skills to deliver secure, high-performance, and user-focused digital solutions. I'm driven by curiosity, adaptability, and a commitment to turning challenges into opportunities.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Name', value: 'Md. Anas Khan' },
                  { label: 'Email', value: 'anas.cse.201@gmail.com' },
                  { label: 'Phone', value: '+8801537191012' },
                  { label: 'Location', value: 'Dhaka, Bangladesh' },
                ].map((item, index) => (
                  <div key={index} className="bg-gray-900 p-4 rounded-lg">
                    <div className="text-sm text-gray-400">{item.label}</div>
                    <div className="text-gray-200">{item.value}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex space-x-4">
                <a href="https://github.com/MdAnaskhan0" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                  <FaGithub className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/md-anas-khan-b2122119b/" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/mdanaskhan_0001" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a href="https://www.facebook.com/honerabla.boyshanto" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                  <FaFacebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-green-400">#</span> Experience
          </h2>
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
                    <p className="text-gray-300 mb-6">{exp.description}</p>
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

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-gray-800 bg-opacity-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-green-400">#</span> Education
          </h2>
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

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-green-400">#</span> Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-green-400 transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-48 bg-gray-700 relative">
                  <div className="absolute top-4 left-4 flex space-x-1.5">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-900 text-green-400 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a href={project.github} className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center">
                      <FaGithub className="w-5 h-5 mr-1" /> Code
                    </a>
                    <a href={project.demo} className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center">
                      <FaExternalLinkAlt className="w-5 h-5 mr-1" /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-800 bg-opacity-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-green-400">#</span> Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <span className="text-xl mr-3">{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <span className="text-green-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-green-500 h-2.5 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-green-400">#</span> Certifications
          </h2>
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-green-400">#</span> Get In Touch
          </h2>
          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <p className="text-lg text-gray-300 mb-8 text-center">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="flex items-center">
                <FaEnvelope className="text-green-400 w-6 h-6 mr-4" />
                <div>
                  <h3 className="text-lg font-bold">Email</h3>
                  <a href="mailto:anas.cse.201@gmail.com" className="text-gray-400 hover:text-green-400">anas.cse.201@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-green-400 w-6 h-6 mr-4" />
                <div>
                  <h3 className="text-lg font-bold">Phone</h3>
                  <a href="tel:+8801537191012" className="text-gray-400 hover:text-green-400">+8801537191012</a>
                </div>
              </div>
              <div className="flex items-center">
                <FaHome className="text-green-400 w-6 h-6 mr-4" />
                <div>
                  <h3 className="text-lg font-bold">Location</h3>
                  <p className="text-gray-400">Satarkul, Badda, Dhaka-1212</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaLinkedin className="text-green-400 w-6 h-6 mr-4" />
                <div>
                  <h3 className="text-lg font-bold">LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/md-anas-khan-b2122119b/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400">Connect with me</a>
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

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-6 border-t border-gray-800">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-bold text-green-400 flex items-center mb-4 md:mb-0">
              <FaCode className="w-6 h-6 mr-2" />
              Md. Anas Khan
            </div>
            <div className="flex space-x-6">
              {[
                { platform: 'github', icon: <FaGithub className="w-6 h-6" />, link: 'https://github.com/MdAnaskhan0' },
                { platform: 'linkedin', icon: <FaLinkedin className="w-6 h-6" />, link: 'https://www.linkedin.com/in/md-anas-khan-b2122119b/' },
                { platform: 'twitter', icon: <FaInstagram className="w-6 h-6" />, link: 'https://www.instagram.com/mdanaskhan_0001' },
                { platform: 'facebook', icon: <FaFacebook className="w-6 h-6" />, link: 'https://www.facebook.com/honerabla.boyshanto' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                >
                  <span className="sr-only">{social.platform}</span>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="text-center text-gray-500 mt-8 text-sm">
            &copy; {new Date().getFullYear()} Md. Anas Khan. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;