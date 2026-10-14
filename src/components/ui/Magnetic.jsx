import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useFinePointer, useReducedMotion } from '../../hooks/useDevice';

/** Wrapper that gently pulls its child toward the cursor. */
const Magnetic = ({ children, strength = 0.35, className = '' }) => {
    const ref = useRef(null);
    const finePointer = useFinePointer();
    const reduced = useReducedMotion();
    const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 15, mass: 0.3 });
    const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 15, mass: 0.3 });

    if (!finePointer || reduced) return <span className={`inline-block ${className}`}>{children}</span>;

    const onMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
        y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
    };
    const onLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.span
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            style={{ x, y }}
            className={`inline-block ${className}`}
        >
            {children}
        </motion.span>
    );
};

export default Magnetic;
