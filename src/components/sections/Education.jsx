import { FaGraduationCap } from 'react-icons/fa';
import { education } from '../../data/portfolioData';
import SectionHeader from '../ui/SectionHeader';
import Timeline from '../ui/Timeline';

const items = education.map((e) => ({
    title: e.degree,
    subtitle: e.institution,
    period: e.period,
    description: e.description,
}));

const Education = () => (
    <section id="education" className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
            <SectionHeader>Education</SectionHeader>
            <Timeline items={items} icon={<FaGraduationCap className="h-4 w-4 md:h-5 md:w-5" />} />
        </div>
    </section>
);

export default Education;
