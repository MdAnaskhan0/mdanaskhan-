import { FaAward, FaArrowRight } from 'react-icons/fa';
import { certifications } from '../../data/portfolioData';
import SectionHeader from '../ui/SectionHeader';
import SpotlightCard from '../ui/SpotlightCard';
import Reveal from '../ui/Reveal';

const Certifications = () => (
    <section id="certifications" className="bg-surface/40 px-6 py-24">
        <div className="mx-auto max-w-6xl">
            <SectionHeader>Certifications</SectionHeader>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {certifications.map((cert, i) => (
                    <Reveal key={cert.title} delay={i * 0.1} className="h-full">
                        <SpotlightCard className="group h-full rounded-2xl border border-line bg-surface transition-transform duration-300 hover:-translate-y-1.5">
                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-cursor-label="View"
                                className="relative z-[3] flex h-full flex-col p-6"
                            >
                                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent transition-transform duration-500 group-hover:rotate-[360deg]">
                                    <FaAward className="h-5 w-5" />
                                </span>
                                <h3 className="font-display text-lg font-semibold leading-snug text-fg">{cert.title}</h3>
                                <p className="mt-2 text-muted">
                                    {cert.issuer} <span className="text-line-strong">/</span>{' '}
                                    <span className="font-mono text-sm text-accent">{cert.period}</span>
                                </p>
                                <span className="mt-auto flex items-center gap-2 pt-6 text-sm font-medium text-accent">
                                    View certificate
                                    <FaArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1.5" />
                                </span>
                            </a>
                        </SpotlightCard>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);

export default Certifications;
