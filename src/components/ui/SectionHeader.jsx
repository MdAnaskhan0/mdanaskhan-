import { motion } from 'framer-motion';
import Reveal from './Reveal';

/** Section title: a "#" marker, the title, and a rule that draws itself across. */
const SectionHeader = ({ children, subtitle }) => {
    return (
        <div className="mb-14">
            <Reveal>
                <div className="flex items-center gap-5">
                    <h2 className="font-display text-3xl font-bold tracking-tight text-fg md:text-4xl">
                        <span className="mr-2 font-mono font-medium text-accent">#</span>
                        {children}
                    </h2>
                    <motion.span
                        aria-hidden="true"
                        className="hidden h-px flex-1 origin-left bg-gradient-to-r from-line-strong to-transparent sm:block"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    />
                </div>
            </Reveal>
            {subtitle && (
                <Reveal delay={0.1}>
                    <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">{subtitle}</p>
                </Reveal>
            )}
        </div>
    );
};

export default SectionHeader;
