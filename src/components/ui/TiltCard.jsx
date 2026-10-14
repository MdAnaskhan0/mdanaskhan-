import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useFinePointer, useReducedMotion } from '../../hooks/useDevice';

/**
 * Card with a 3D tilt that follows the cursor and a light spotlight border.
 * On touch devices / reduced motion it renders as a plain card.
 */
const TiltCard = ({ children, className = '', max = 7, glare = true }) => {
    const ref = useRef(null);
    const finePointer = useFinePointer();
    const reduced = useReducedMotion();

    const px = useMotionValue(0.5);
    const py = useMotionValue(0.5);
    const springCfg = { stiffness: 220, damping: 20, mass: 0.4 };
    const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), springCfg);
    const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), springCfg);
    const glareX = useTransform(px, (v) => `${v * 100}%`);
    const glareY = useTransform(py, (v) => `${v * 100}%`);
    const glareBg = useTransform(
        [glareX, glareY],
        ([gx, gy]) => `radial-gradient(260px circle at ${gx} ${gy}, rgba(255,255,255,0.09), transparent 65%)`
    );

    const onMove = (e) => {
        const el = ref.current;
        const rect = el.getBoundingClientRect();
        const nx = (e.clientX - rect.left) / rect.width;
        const ny = (e.clientY - rect.top) / rect.height;
        px.set(nx);
        py.set(ny);
        el.style.setProperty('--mx', `${nx * 100}%`);
        el.style.setProperty('--my', `${ny * 100}%`);
    };
    const onLeave = () => {
        px.set(0.5);
        py.set(0.5);
    };

    if (!finePointer || reduced) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            style={{ rotateX, rotateY, transformPerspective: 1000 }}
            className={`spotlight ${className}`}
        >
            {children}
            {glare && (
                <motion.div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-[3] rounded-[inherit]"
                    style={{ background: glareBg }}
                />
            )}
        </motion.div>
    );
};

export default TiltCard;
