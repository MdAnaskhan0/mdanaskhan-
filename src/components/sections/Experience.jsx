import { FaBriefcase } from 'react-icons/fa';
import { experiences } from '../../data/portfolioData';
import SectionHeader from '../ui/SectionHeader';
import Timeline from '../ui/Timeline';

const items = experiences.map((e) => ({
    title: e.role,
    subtitle: e.company.trim(),
    period: e.period,
    description: e.description,
    tags: e.technologies,
}));

const Experience = () => (
    <section id="experience" className="bg-surface/40 px-6 py-24">
        <div className="mx-auto max-w-4xl">
            <SectionHeader subtitle="Where I've worked and what I've built along the way.">Experience</SectionHeader>
            <Timeline items={items} icon={<FaBriefcase className="h-4 w-4 md:h-5 md:w-5" />} />
        </div>
    </section>
);

export default Experience;
