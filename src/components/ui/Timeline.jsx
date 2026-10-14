import { useRef, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import Reveal from './Reveal';
import SpotlightCard from './SpotlightCard';

const MAX_TAGS = 6;

const TimelineItem = ({ item, icon, index }) => {
    const [expanded, setExpanded] = useState(false);
    const tags = item.tags ?? [];
    const visible = expanded ? tags : tags.slice(0, MAX_TAGS);
    const hidden = tags.length - MAX_TAGS;

    return (
        <Reveal delay={Math.min(index * 0.05, 0.2)} className="relative pl-14 md:pl-20">
            {/* Node on the line */}
            <motion.span
                className="absolute left-0 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-accent/50 bg-ink text-accent shadow-[0_0_0_6px_var(--color-ink)] md:h-12 md:w-12"
                initial={{ scale: 0.4, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            >
                {icon}
            </motion.span>

            <SpotlightCard className="rounded-2xl border border-line bg-surface p-6 md:p-8">
                <div className="relative z-[3]">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                        <h3 className="font-display text-xl font-semibold leading-snug text-fg md:text-2xl">
                            {item.title}
                        </h3>
                        <span className="shrink-0 whitespace-nowrap font-mono text-sm text-accent sm:pt-1.5">
                            {item.period}
                        </span>
                    </div>
                    <p className="mt-1 text-muted">{item.subtitle}</p>

                    {item.description && (
                        <p className="mt-4 max-w-[68ch] leading-relaxed text-fg/80">{item.description}</p>
                    )}

                    {tags.length > 0 && (
                        <div className="mt-5 flex flex-wrap gap-2">
                            {visible.map((tag) => (
                                <motion.span
                                    key={tag}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="rounded-full border border-line bg-ink/60 px-3 py-1 font-mono text-xs text-accent"
                                >
                                    {tag}
                                </motion.span>
                            ))}
                            {hidden > 0 && (
                                <button
                                    onClick={() => setExpanded((v) => !v)}
                                    aria-expanded={expanded}
                                    className="flex items-center gap-1.5 rounded-full border border-dashed border-line-strong px-3 py-1 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-accent"
                                >
                                    {expanded ? 'Show less' : `+${hidden} more`}
                                    <FaChevronDown
                                        className={`h-2.5 w-2.5 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
                                    />
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </SpotlightCard>
        </Reveal>
    );
};

/** Vertical timeline whose rail fills in as you scroll through it. */
const Timeline = ({ items, icon }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start 65%', 'end 55%'] });
    const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 26 });

    return (
        <div ref={ref} className="relative">
            <span aria-hidden="true" className="absolute bottom-0 left-5 top-0 w-px bg-line md:left-6" />
            <motion.span
                aria-hidden="true"
                className="absolute bottom-0 left-5 top-0 w-px origin-top bg-gradient-to-b from-accent via-accent to-accent-2 md:left-6"
                style={{ scaleY }}
            />
            <div className="space-y-8">
                {items.map((item, i) => (
                    <TimelineItem key={`${item.title}-${i}`} item={item} icon={icon} index={i} />
                ))}
            </div>
        </div>
    );
};

export default Timeline;
