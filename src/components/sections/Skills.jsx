import { skills } from '../../data/portfolioData';
import SectionHeader from '../ui/SectionHeader';
import SkillCard from '../ui/SkillCard';

const Skills = () => {
    return (
        <section id="skills" className="py-20 px-6 bg-gray-800 bg-opacity-50">
            <div className="container mx-auto max-w-4xl">
                <SectionHeader>Skills</SectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <SkillCard key={index} skill={skill} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;