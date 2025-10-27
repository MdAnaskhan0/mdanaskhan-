import {
    SiJavascript, SiReact, SiNodedotjs, SiTailwindcss,
    SiPhp, SiMysql, SiMongodb, SiGit
} from 'react-icons/si';

const iconMap = {
    SiJavascript: SiJavascript,
    SiReact: SiReact,
    SiNodedotjs: SiNodedotjs,
    SiTailwindcss: SiTailwindcss,
    SiPhp: SiPhp,
    SiMysql: SiMysql,
    SiMongodb: SiMongodb,
    SiGit: SiGit
};

const SkillCard = ({ skill }) => {
    const IconComponent = iconMap[skill.icon];

    return (
        <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                    <span className="text-xl mr-3">
                        <IconComponent className={
                            skill.name === 'JavaScript' ? "text-yellow-400" :
                                skill.name === 'React' ? "text-blue-400" :
                                    skill.name === 'Node.js' ? "text-green-500" :
                                        skill.name === 'CSS/Tailwind' ? "text-blue-400" :
                                            skill.name === 'PHP' ? "text-purple-500" :
                                                skill.name === 'MySQL' ? "text-blue-600" :
                                                    skill.name === 'MongoDB' ? "text-green-600" :
                                                        "text-orange-500"
                        } />
                    </span>
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
    );
};

export default SkillCard;