import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useDevice';

const OFFSETS = {
    up: { y: 32 },
    down: { y: -32 },
    left: { x: 40 },
    right: { x: -40 },
    none: {},
};

/** Fades + slides children in once when they enter the viewport. */
const Reveal = ({ children, direction = 'up', delay = 0, duration = 0.7, className = '', as = 'div' }) => {
    const reduced = useReducedMotion();
    const Component = motion[as] ?? motion.div;

    if (reduced) {
        return <Component className={className}>{children}</Component>;
    }

    return (
        <Component
            className={className}
            initial={{ opacity: 0, ...OFFSETS[direction] }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </Component>
    );
};

export default Reveal;
