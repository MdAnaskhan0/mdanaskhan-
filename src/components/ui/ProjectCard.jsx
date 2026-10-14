import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';

const hostOf = (url) => {
    try {
        return new URL(url).host;
    } catch {
        return '';
    }
};

const ProjectCard = ({ project }) => {
    const hasLiveDemo = project.demo && project.demo !== project.github;
    const host = hasLiveDemo ? hostOf(project.demo) : hostOf(project.github);

    return (
        <TiltCard className="group h-full rounded-2xl border border-line bg-surface">
            <div className="flex h-full flex-col overflow-hidden rounded-2xl">
                {/* Browser chrome */}
                <div className="flex items-center gap-3 border-b border-line bg-surface-2 px-4 py-3">
                    <div className="flex gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                    </div>
                    <div className="min-w-0 flex-1 truncate rounded-md bg-ink/70 px-3 py-1 text-center font-mono text-[11px] text-muted">
                        {host}
                    </div>
                </div>

                {/* Screenshot */}
                <a
                    href={hasLiveDemo ? project.demo : project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-label={hasLiveDemo ? 'Visit' : 'Code'}
                    aria-label={`Open ${project.title}`}
                    className="relative block aspect-[16/10] overflow-hidden bg-ink"
                >
                    <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-70" />
                </a>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl font-semibold leading-snug text-fg">{project.title}</h3>
                    <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{project.description}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full border border-line bg-ink/60 px-3 py-1 font-mono text-xs text-accent"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="mt-6 flex items-center gap-5 border-t border-line pt-5 text-sm">
                        <motion.a
                            whileHover={{ x: 2 }}
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-muted transition-colors hover:text-accent"
                        >
                            <FaGithub className="h-4 w-4" /> Source code
                        </motion.a>
                        {hasLiveDemo && (
                            <motion.a
                                whileHover={{ x: 2 }}
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-muted transition-colors hover:text-accent"
                            >
                                <FaExternalLinkAlt className="h-3.5 w-3.5" /> Live demo
                            </motion.a>
                        )}
                    </div>
                </div>
            </div>
        </TiltCard>
    );
};

export default ProjectCard;
