import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaDownload, FaCode, FaServer, FaDatabase,
    FaTools, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLaptop, FaComments,
} from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';
import SectionHeader from '../ui/SectionHeader';
import Reveal from '../ui/Reveal';
import Counter from '../ui/Counter';
import TiltCard from '../ui/TiltCard';
import SpotlightCard from '../ui/SpotlightCard';
import Magnetic from '../ui/Magnetic';
import Image from '../../assets/profile/Profile.jpg';
import Resume from '../../assets/CV/Md.AnasKhan.pdf';

const techStacks = {
    frontend: ['React', 'JavaScript', 'Redux', 'Tailwind CSS', 'HTML5', 'CSS3'],
    backend: ['Node.js', 'Express.js', 'PHP', 'Python', 'REST APIs'],
    database: ['MySQL', 'MongoDB'],
    tools: ['Git', 'VS Code', 'Figma', 'Postman', 'Mikrotik', 'Adobe Photoshop'],
};

const stats = [
    { to: 2, suffix: '+', label: 'Years experience', Icon: FaCode },
    { to: 15, suffix: '+', label: 'Projects completed', Icon: FaServer },
    { to: 10, suffix: '+', label: 'Technologies', Icon: FaTools },
    { to: 5, suffix: '+', label: 'Happy clients', Icon: FaDatabase },
];

const tabs = [
    { id: 'personal', label: 'Personal info', Icon: FaUser },
    { id: 'tech', label: 'Tech stack', Icon: FaLaptop },
    { id: 'contact', label: 'Quick contact', Icon: FaComments },
];

const socials = [
    { platform: 'GitHub', Icon: FaGithub, link: personalInfo.socialLinks.github },
    { platform: 'LinkedIn', Icon: FaLinkedin, link: personalInfo.socialLinks.linkedin },
    { platform: 'Instagram', Icon: FaInstagram, link: personalInfo.socialLinks.instagram },
    { platform: 'Facebook', Icon: FaFacebook, link: personalInfo.socialLinks.facebook },
];

const About = () => {
    const [activeTab, setActiveTab] = useState('personal');

    const details = [
        { label: 'Name', value: personalInfo.name, Icon: FaUser },
        { label: 'Email', value: personalInfo.email, Icon: FaEnvelope },
        { label: 'Phone', value: personalInfo.phone, Icon: FaPhone },
        { label: 'Location', value: personalInfo.location, Icon: FaMapMarkerAlt },
    ];

    return (
        <section id="about" className="relative px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <SectionHeader>About me</SectionHeader>

                <div className="grid items-start gap-14 lg:grid-cols-[0.8fr_1.2fr]">
                    {/* Portrait */}
                    <Reveal direction="right" className="mx-auto w-full max-w-sm">
                        <div className="relative">
                            <div aria-hidden="true" className="absolute -inset-3 overflow-hidden rounded-[2rem] blur-xl">
                                <div className="absolute left-1/2 top-1/2 aspect-square w-[160%] -translate-x-1/2 -translate-y-1/2 animate-[spin_9s_linear_infinite] bg-[conic-gradient(from_0deg,var(--color-accent),transparent_30%,var(--color-accent-2),transparent_70%,var(--color-accent))] opacity-50" />
                            </div>
                            <TiltCard className="rounded-3xl border border-line-strong bg-surface p-2" max={9}>
                                <img
                                    src={Image}
                                    alt={personalInfo.name}
                                    loading="lazy"
                                    className="aspect-[4/5] w-full rounded-[1.25rem] object-cover object-top"
                                />
                            </TiltCard>
                            <motion.div
                                className="absolute -bottom-4 -right-3 flex items-center gap-2 rounded-full border border-accent/40 bg-ink px-4 py-2 text-sm font-semibold text-accent shadow-xl"
                                animate={{ y: [0, -6, 0] }}
                                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                <span className="h-2 w-2 rounded-full bg-accent" /> Open to work
                            </motion.div>
                        </div>
                    </Reveal>

                    {/* Content */}
                    <div className="space-y-8">
                        <Reveal>
                            <h3 className="font-display text-2xl font-bold leading-tight text-fg md:text-3xl">
                                Crafting digital experiences with precision
                            </h3>
                            <div className="mt-5 space-y-4">
                                {personalInfo.bio.map((p) => (
                                    <p key={p} className="max-w-[62ch] text-lg leading-relaxed text-muted">
                                        {p}
                                    </p>
                                ))}
                            </div>
                        </Reveal>

                        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                            {stats.map(({ to, suffix, label, Icon }, i) => (
                                <Reveal key={label} delay={i * 0.08}>
                                    <SpotlightCard className="group rounded-xl border border-line bg-surface p-4 transition-transform duration-300 hover:-translate-y-1">
                                        <div className="relative z-[3]">
                                            <div className="mb-2 flex items-center justify-between">
                                                <span className="font-display text-3xl font-bold text-fg">
                                                    <Counter to={to} suffix={suffix} />
                                                </span>
                                                <Icon className="text-accent transition-transform duration-300 group-hover:scale-125" />
                                            </div>
                                            <div className="text-sm text-muted">{label}</div>
                                        </div>
                                    </SpotlightCard>
                                </Reveal>
                            ))}
                        </div>

                        <Reveal>
                            <div className="overflow-hidden rounded-2xl border border-line bg-surface">
                                <div role="tablist" className="flex border-b border-line">
                                    {tabs.map(({ id, label, Icon }) => (
                                        <button
                                            key={id}
                                            role="tab"
                                            aria-selected={activeTab === id}
                                            onClick={() => setActiveTab(id)}
                                            className={`relative flex flex-1 items-center justify-center gap-2 px-4 py-4 text-sm transition-colors ${
                                                activeTab === id ? 'text-accent' : 'text-muted hover:text-fg'
                                            }`}
                                        >
                                            <Icon className="h-4 w-4" />
                                            <span className="hidden sm:block">{label}</span>
                                            {activeTab === id && (
                                                <motion.span
                                                    layoutId="about-tab"
                                                    className="absolute inset-x-0 bottom-0 h-0.5 bg-accent"
                                                />
                                            )}
                                        </button>
                                    ))}
                                </div>

                                <div className="min-h-[15rem] p-6">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeTab}
                                            initial={{ opacity: 0, y: 12 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -8 }}
                                            transition={{ duration: 0.25 }}
                                        >
                                            {activeTab === 'personal' && (
                                                <div className="grid gap-4 md:grid-cols-2">
                                                    {details.map(({ label, value, Icon }) => (
                                                        <div
                                                            key={label}
                                                            className="group flex items-center gap-4 rounded-xl border border-line bg-ink/50 p-4 transition-colors hover:border-accent/60"
                                                        >
                                                            <Icon className="shrink-0 text-xl text-accent" />
                                                            <div className="min-w-0">
                                                                <div className="text-sm text-muted">{label}</div>
                                                                <div className="truncate font-medium text-fg">{value}</div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {activeTab === 'tech' && (
                                                <div className="space-y-5">
                                                    {Object.entries(techStacks).map(([category, list]) => (
                                                        <div key={category}>
                                                            <h4 className="mb-2.5 text-sm font-semibold capitalize text-accent">
                                                                {category}
                                                            </h4>
                                                            <div className="flex flex-wrap gap-2">
                                                                {list.map((tech, i) => (
                                                                    <motion.span
                                                                        key={tech}
                                                                        initial={{ opacity: 0, scale: 0.85 }}
                                                                        animate={{ opacity: 1, scale: 1 }}
                                                                        transition={{ delay: i * 0.04 }}
                                                                        whileHover={{ y: -3 }}
                                                                        className="cursor-default rounded-full border border-line bg-ink/60 px-3.5 py-1.5 text-sm text-fg/90 transition-colors hover:border-accent hover:text-accent"
                                                                    >
                                                                        {tech}
                                                                    </motion.span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {activeTab === 'contact' && (
                                                <div className="flex h-full min-h-[11rem] flex-col items-center justify-center gap-5 text-center">
                                                    <p className="text-fg/90">Let&apos;s discuss your next project or opportunity.</p>
                                                    <div className="flex flex-wrap justify-center gap-4">
                                                        <a
                                                            href={`mailto:${personalInfo.email}`}
                                                            className="flex items-center gap-2 rounded-lg bg-accent px-5 py-3 font-semibold text-ink transition-transform hover:-translate-y-0.5"
                                                        >
                                                            <FaEnvelope className="h-4 w-4" /> Email me
                                                        </a>
                                                        <a
                                                            href="#contact"
                                                            className="flex items-center gap-2 rounded-lg border border-accent/60 px-5 py-3 font-semibold text-accent transition-colors hover:bg-accent hover:text-ink"
                                                        >
                                                            <FaComments className="h-4 w-4" /> Send a message
                                                        </a>
                                                    </div>
                                                </div>
                                            )}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal>
                            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                                <div className="flex items-center gap-3">
                                    {socials.map(({ platform, Icon, link }) => (
                                        <Magnetic key={platform} strength={0.45}>
                                            <a
                                                href={link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:text-accent"
                                            >
                                                <span className="sr-only">{platform}</span>
                                                <Icon className="h-5 w-5" />
                                            </a>
                                        </Magnetic>
                                    ))}
                                </div>
                                <Magnetic>
                                    <a
                                        href={Resume}
                                        download="Md.AnasKhan-Resume.pdf"
                                        className="group flex items-center gap-2 rounded-xl border-2 border-accent px-6 py-3 font-semibold text-accent transition-colors duration-300 hover:bg-accent hover:text-ink"
                                    >
                                        <FaDownload className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                                        Download resume
                                    </a>
                                </Magnetic>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
