import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
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

  return (
    <section id="experience" className="py-16 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">
          <span className="text-green-400">#</span> Experience
        </h2>
        <div className="space-y-8 md:space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-green-400 transition-all duration-300">
              <div className="flex items-start">
                <div className="bg-green-400 text-gray-900 p-2 md:p-3 rounded-full mr-4 md:mr-6 flex-shrink-0">
                  <FaBriefcase className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{exp.role}</h3>
                  <div className="flex flex-col md:flex-row md:items-center text-gray-400 mb-3 md:mb-4">
                    <span className="md:mr-2">{exp.company}</span>
                    <span className="hidden md:block mx-2">•</span>
                    <span className="text-green-400 mt-1 md:mt-0">{exp.period}</span>
                  </div>
                  <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="px-2 md:px-3 py-1 bg-gray-900 text-green-400 text-xs md:text-sm rounded-full">
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
  );
};

export default Experience;