import { projects } from '../../data/portfolioData';
import SectionHeader from '../ui/SectionHeader';
import ProjectCard from '../ui/ProjectCard';

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-6">
            <div className="container mx-auto max-w-4xl">
                <SectionHeader>Projects</SectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;