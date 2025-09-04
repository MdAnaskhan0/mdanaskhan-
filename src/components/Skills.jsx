import { 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiTailwindcss, 
  SiPhp, 
  SiMysql, 
  SiMongodb, 
  SiGit 
} from 'react-icons/si';

const Skills = () => {
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

  return (
    <section id="skills" className="py-16 md:py-20 px-4 sm:px-6 bg-gray-800 bg-opacity-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">
          <span className="text-green-400">#</span> Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-900 p-4 md:p-6 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <span className="text-lg md:text-xl mr-2 md:mr-3">{skill.icon}</span>
                  <span className="font-medium text-sm md:text-base">{skill.name}</span>
                </div>
                <span className="text-green-400 text-sm md:text-base">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 md:h-2.5">
                <div 
                  className="bg-green-500 h-2 md:h-2.5 rounded-full transition-all duration-1000" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;