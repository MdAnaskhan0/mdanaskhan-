import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
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

  return (
    <section id="education" className="py-16 md:py-20 px-4 sm:px-6 bg-gray-800 bg-opacity-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">
          <span className="text-green-400">#</span> Education
        </h2>
        <div className="space-y-8 md:space-y-12">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-green-400 transition-all duration-300">
              <div className="flex items-start">
                <div className="bg-green-400 text-gray-900 p-2 md:p-3 rounded-full mr-4 md:mr-6 flex-shrink-0">
                  <FaGraduationCap className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{edu.degree}</h3>
                  <div className="flex flex-col md:flex-row md:items-center text-gray-400 mb-3 md:mb-4">
                    <span className="md:mr-2">{edu.institution}</span>
                    <span className="hidden md:block mx-2">•</span>
                    <span className="text-green-400 mt-1 md:mt-0">{edu.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm md:text-base">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;