import { skills } from '../../data/portfolioData';
import SectionHeader from '../ui/SectionHeader';
import SkillCard from '../ui/SkillCard';
import Marquee from '../ui/Marquee';

const TICKER = ['React', 'Node.js', 'Express', 'MongoDB', 'MySQL', 'PHP', 'Socket.IO', 'Tailwind CSS', 'REST APIs', 'Git', 'MikroTik', 'PLC / ASRS systems'];

const Skills = () => (
    <section id="skills" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
            <SectionHeader subtitle="The tools I reach for most, from interfaces to servers.">Skills</SectionHeader>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {skills.map((skill, index) => (
                    <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
            </div>
            <div className="mt-14 border-y border-line">
                <Marquee items={TICKER} />
            </div>
        </div>
    </section>
);

export default Skills;
