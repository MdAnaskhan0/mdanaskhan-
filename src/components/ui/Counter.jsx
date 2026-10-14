import { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useDevice';

/** Counts from 0 to `to` when scrolled into view. */
const Counter = ({ to, suffix = '', duration = 1.6 }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-40px' });
    const reduced = useReducedMotion();
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!inView) return;
        if (reduced) {
            setValue(to);
            return;
        }
        const controls = animate(0, to, {
            duration,
            ease: [0.22, 1, 0.36, 1],
            onUpdate: (v) => setValue(Math.round(v)),
        });
        return () => controls.stop();
    }, [inView, reduced, to, duration]);

    return (
        <span ref={ref}>
            {value}
            {suffix}
        </span>
    );
};

export default Counter;
