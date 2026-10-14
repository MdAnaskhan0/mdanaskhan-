import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';
import CodeEditor from '../ui/CodeEditor';
import ParticleField from '../ui/ParticleField';
import Magnetic from '../ui/Magnetic';
import TiltCard from '../ui/TiltCard';
import { personalInfo, roles } from '../../data/portfolioData';
import { useRotatingText } from '../../hooks/useTypingEffect';
import { useReducedMotion } from '../../hooks/useDevice';

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};
const nameContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.05 } },
};
const letter = {
    hidden: { opacity: 0, y: '0.6em', rotateX: -60 },
    show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const NAME = 'Anas Khan';

const Hero = () => {
    const reduced = useReducedMotion();
    const role = useRotatingText(roles);

    return (
        <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-28">
            {/* Backdrop */}
            <div aria-hidden="true" className="absolute inset-0">
                <div className="bg-grid absolute inset-0" />
                <div className="absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-accent/10 blur-[120px]" />
                <div className="absolute -bottom-40 -right-32 h-[30rem] w-[30rem] rounded-full bg-accent-2/10 blur-[120px]" />
                <ParticleField />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-6xl">
                <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
                    <motion.div variants={container} initial="hidden" animate="show">
                        <motion.div
                            variants={item}
                            className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-surface/70 px-4 py-1.5 text-sm text-fg/90 backdrop-blur"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                            </span>
                            Available for new opportunities
                        </motion.div>

                        <motion.p variants={item} className="mb-2 text-lg text-muted md:text-xl">
                            Hi, I&apos;m
                        </motion.p>

                        <h1
                            aria-label={NAME}
                            className="mb-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
                            style={{ perspective: 800 }}
                        >
                            <motion.span variants={nameContainer} className="text-gradient inline-block animate-shimmer" style={{ backgroundSize: '200% auto' }}>
                                {NAME.split('').map((char, i) => (
                                    <motion.span
                                        key={i}
                                        aria-hidden="true"
                                        variants={reduced ? item : letter}
                                        className="inline-block"
                                    >
                                        {char === ' ' ? '\u00A0' : char}
                                    </motion.span>
                                ))}
                            </motion.span>
                        </h1>

                        <motion.div variants={item} className="mb-6 flex h-9 items-center font-mono text-lg text-accent md:text-2xl">
                            <span className="mr-3 text-muted">&gt;</span>
                            <span aria-live="off">{reduced ? roles[0] : role}</span>
                            <span className="ml-1 inline-block h-6 w-[3px] animate-blink bg-accent md:h-7" />
                        </motion.div>

                        <motion.p variants={item} className="mb-10 max-w-[52ch] text-base leading-relaxed text-muted md:text-lg">
                            I build secure, high-performance web applications and keep the infrastructure behind them
                            running. {personalInfo.location.split(',')[0]}-based, focused on clean code and
                            dependable systems.
                        </motion.p>

                        <motion.div variants={item} className="flex flex-wrap items-center gap-4">
                            <Magnetic>
                                <a
                                    href="#projects"
                                    className="group flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-semibold text-ink shadow-lg shadow-accent/20 transition-shadow duration-300 hover:shadow-accent/40"
                                >
                                    View projects
                                    <FaArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                                </a>
                            </Magnetic>
                            <Magnetic>
                                <a
                                    href="#contact"
                                    className="block rounded-xl border border-line-strong px-6 py-3.5 font-semibold text-fg transition-colors duration-300 hover:border-accent hover:text-accent"
                                >
                                    Contact me
                                </a>
                            </Magnetic>
                            <div className="ml-1 flex items-center gap-2">
                                {[
                                    { label: 'GitHub', Icon: FaGithub, href: personalInfo.socialLinks.github },
                                    { label: 'LinkedIn', Icon: FaLinkedin, href: personalInfo.socialLinks.linkedin },
                                ].map(({ label, Icon, href }) => (
                                    <Magnetic key={label} strength={0.5}>
                                        <a
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex h-11 w-11 items-center justify-center rounded-full text-muted transition-colors hover:text-accent"
                                        >
                                            <span className="sr-only">{label}</span>
                                            <Icon className="h-5 w-5" />
                                        </a>
                                    </Magnetic>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 60, scale: 0.96 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="animate-float"
                    >
                        <TiltCard className="rounded-xl" max={5} glare={false}>
                            <CodeEditor />
                        </TiltCard>
                    </motion.div>
                </div>
            </div>

            {/* Scroll cue */}
            <motion.a
                href="#about"
                aria-label="Scroll to about section"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-accent md:flex"
            >
                <span className="flex h-9 w-5 justify-center rounded-full border border-current pt-1.5">
                    <motion.span
                        className="h-1.5 w-1 rounded-full bg-current"
                        animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                    />
                </span>
            </motion.a>
        </section>
    );
};

export default Hero;
