import { FaExternalLinkAlt } from 'react-icons/fa';

const Certifications = () => {
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

  return (
    <section id="certifications" className="py-16 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">
          <span className="text-green-400">#</span> Certifications
        </h2>
        <div className="space-y-4 md:space-y-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-5 md:p-6 border border-gray-700 hover:border-green-400 transition-all duration-300">
              <h3 className="text-lg md:text-xl font-bold mb-2">{cert.title}</h3>
              <div className="flex flex-col md:flex-row md:items-center text-gray-400 mb-2 text-sm md:text-base">
                <span className="md:mr-2">{cert.issuer}</span>
                <span className="hidden md:block mx-2">•</span>
                <span className="text-green-400 mt-1 md:mt-0">{cert.period}</span>
              </div>
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline flex items-center text-sm md:text-base">
                <FaExternalLinkAlt className="w-3 h-3 md:w-4 md:h-4 mr-1" /> View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;