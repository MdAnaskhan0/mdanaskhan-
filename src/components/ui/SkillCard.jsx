import { motion } from 'framer-motion';
import {
    SiJavascript, SiReact, SiNodedotjs, SiTailwindcss,
    SiPhp, SiMysql, SiMongodb, SiGit, SiMikrotik,
} from 'react-icons/si';
import SpotlightCard from './SpotlightCard';
import Counter from './Counter';

const ICONS = {
    SiJavascript: { Icon: SiJavascript, color: '#f7df1e' },
    SiReact: { Icon: SiReact, color: '#61dafb' },
    SiNodedotjs: { Icon: SiNodedotjs, color: '#5fa04e' },
    SiTailwindcss: { Icon: SiTailwindcss, color: '#38bdf8' },
    SiPhp: { Icon: SiPhp, color: '#8892bf' },
    SiMysql: { Icon: SiMysql, color: '#4f93c3' },
    SiMongodb: { Icon: SiMongodb, color: '#47a248' },
    SiGit: { Icon: SiGit, color: '#f05032' },
    SiMikrotik: { Icon: SiMikrotik, color: '#7f94a3' },
};

const SkillCard = ({ skill, index = 0 }) => {
    const { Icon, color } = ICONS[skill.icon] ?? ICONS.SiGit;

    return (
        <SpotlightCard className="group rounded-xl border border-line bg-surface p-5 transition-transform duration-300 hover:-translate-y-1">
            <div className="relative z-[3]">
                <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span
                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-ink/60 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-6deg]"
                            style={{ color }}
                        >
                            <Icon className="h-5 w-5" />
                        </span>
                        <span className="font-medium text-fg">{skill.name}</span>
                    </div>
                    <span className="font-mono text-sm text-accent">
                        <Counter to={skill.level} suffix="%" />
                    </span>
                </div>

                <div className="h-2 w-full overflow-hidden rounded-full bg-ink">
                    <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-accent-strong via-accent to-accent-2"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 1.3, delay: 0.1 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    />
                </div>
            </div>
        </SpotlightCard>
    );
};

export default SkillCard;
