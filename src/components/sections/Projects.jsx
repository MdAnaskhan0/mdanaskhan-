import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects } from '../../data/portfolioData';
import SectionHeader from '../ui/SectionHeader';
import ProjectCard from '../ui/ProjectCard';
import Reveal from '../ui/Reveal';

const FILTERS = ['All', 'React', 'Node.js', 'MongoDB', 'MySQL', 'PHP', 'Socket.IO'];

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const available = useMemo(
        () => FILTERS.filter((f) => f === 'All' || projects.some((p) => p.tags.includes(f))),
        []
    );
    const visible = useMemo(
        () => (filter === 'All' ? projects : projects.filter((p) => p.tags.includes(filter))),
        [filter]
    );

    return (
        <section id="projects" className="bg-surface/25 px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <SectionHeader subtitle="Full-stack systems I've designed, built and deployed. Filter by technology.">
                    Projects
                </SectionHeader>

                <Reveal>
                    <div role="tablist" aria-label="Filter projects" className="mb-10 flex flex-wrap gap-2">
                        {available.map((f) => (
                            <button
                                key={f}
                                role="tab"
                                aria-selected={filter === f}
                                onClick={() => setFilter(f)}
                                className={`relative rounded-full border px-4 py-1.5 font-mono text-sm transition-colors ${
                                    filter === f
                                        ? 'border-transparent text-on-accent'
                                        : 'border-line text-muted hover:border-accent/60 hover:text-fg'
                                }`}
                            >
                                {filter === f && (
                                    <motion.span
                                        layoutId="project-filter"
                                        className="absolute inset-0 rounded-full bg-accent"
                                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                                    />
                                )}
                                <span className="relative">{f}</span>
                            </button>
                        ))}
                    </div>
                </Reveal>

                <motion.div layout className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <AnimatePresence mode="popLayout">
                        {visible.map((project, i) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: '-60px' }}
                                exit={{ opacity: 0, scale: 0.92 }}
                                transition={{ duration: 0.55, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
