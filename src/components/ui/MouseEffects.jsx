import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useFinePointer, useReducedMotion } from '../../hooks/useDevice';

const INTERACTIVE = 'a, button, [role="button"], [data-cursor]';
const TEXT_FIELD = 'input, textarea, select';

/**
 * Custom cursor (dot + trailing ring) and a soft spotlight that follows the pointer.
 * Renders nothing on touch devices or when the user prefers reduced motion.
 */
const MouseEffects = () => {
    const finePointer = useFinePointer();
    const reduced = useReducedMotion();
    const enabled = finePointer && !reduced;

    const x = useMotionValue(-100);
    const y = useMotionValue(-100);

    const dotX = useSpring(x, { stiffness: 900, damping: 40, mass: 0.2 });
    const dotY = useSpring(y, { stiffness: 900, damping: 40, mass: 0.2 });
    const ringX = useSpring(x, { stiffness: 220, damping: 22, mass: 0.5 });
    const ringY = useSpring(y, { stiffness: 220, damping: 22, mass: 0.5 });
    const glowX = useSpring(x, { stiffness: 80, damping: 20, mass: 1 });
    const glowY = useSpring(y, { stiffness: 80, damping: 20, mass: 1 });

    const [hovering, setHovering] = useState(false);
    const [label, setLabel] = useState('');
    const [pressed, setPressed] = useState(false);
    const [visible, setVisible] = useState(false);
    const [overField, setOverField] = useState(false);

    useEffect(() => {
        if (!enabled) return;
        document.documentElement.classList.add('has-custom-cursor');

        const move = (e) => {
            x.set(e.clientX);
            y.set(e.clientY);
            setVisible(true);
        };
        const over = (e) => {
            const target = e.target instanceof Element ? e.target : null;
            const interactive = target?.closest(INTERACTIVE);
            setHovering(Boolean(interactive));
            setLabel(interactive?.getAttribute('data-cursor-label') || '');
            setOverField(Boolean(target?.closest(TEXT_FIELD)));
        };
        const down = () => setPressed(true);
        const up = () => setPressed(false);
        const leave = () => setVisible(false);
        const enter = () => setVisible(true);

        window.addEventListener('mousemove', move, { passive: true });
        window.addEventListener('mouseover', over, { passive: true });
        window.addEventListener('mousedown', down);
        window.addEventListener('mouseup', up);
        document.documentElement.addEventListener('mouseleave', leave);
        document.documentElement.addEventListener('mouseenter', enter);

        return () => {
            document.documentElement.classList.remove('has-custom-cursor');
            window.removeEventListener('mousemove', move);
            window.removeEventListener('mouseover', over);
            window.removeEventListener('mousedown', down);
            window.removeEventListener('mouseup', up);
            document.documentElement.removeEventListener('mouseleave', leave);
            document.documentElement.removeEventListener('mouseenter', enter);
        };
    }, [enabled, x, y]);

    if (!enabled) return null;

    const show = visible && !overField;
    const ringSize = label ? 76 : hovering ? 54 : 34;

    return (
        <>
            {/* Ambient spotlight */}
            <motion.div
                aria-hidden="true"
                className="pointer-events-none fixed left-0 top-0 z-30 h-[560px] w-[560px] rounded-full"
                style={{
                    x: glowX,
                    y: glowY,
                    translateX: '-50%',
                    translateY: '-50%',
                    background:
                        'radial-gradient(circle, rgba(52,211,153,0.075) 0%, rgba(56,189,248,0.03) 40%, transparent 70%)',
                    opacity: visible ? 1 : 0,
                }}
            />

            {/* Trailing ring */}
            <motion.div
                aria-hidden="true"
                className="pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center rounded-full border border-accent/70"
                style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
                animate={{
                    width: ringSize,
                    height: ringSize,
                    opacity: show ? 1 : 0,
                    scale: pressed ? 0.85 : 1,
                    backgroundColor: hovering ? 'rgba(52,211,153,0.14)' : 'rgba(52,211,153,0)',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            >
                {label && (
                    <span className="font-mono text-[11px] font-medium text-accent">{label}</span>
                )}
            </motion.div>

            {/* Dot */}
            <motion.div
                aria-hidden="true"
                className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full bg-accent"
                style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
                animate={{ opacity: show && !label ? 1 : 0, scale: hovering ? 0 : 1 }}
                transition={{ duration: 0.15 }}
            />
        </>
    );
};

export default MouseEffects;
