import { useEffect, useRef } from 'react';
import { useReducedMotion } from '../../hooks/useDevice';
import { useTheme } from '../../hooks/useTheme';

/**
 * Interactive particle network. Particles drift, connect to neighbours,
 * are pulled into lines toward the cursor and pushed away when it gets close.
 * Pauses when scrolled out of view or when the tab is hidden.
 */
const ParticleField = ({ className = '' }) => {
    const canvasRef = useRef(null);
    const reduced = useReducedMotion();
    const [theme] = useTheme();
    const colors = useRef({ a: '52, 211, 153', b: '56, 189, 248', boost: 1 });

    // Re-read the accent colours from CSS whenever the theme changes
    useEffect(() => {
        const css = getComputedStyle(document.documentElement);
        const rgb = (name) => css.getPropertyValue(name).trim().split(/\s+/).join(', ');
        colors.current = { a: rgb('--accent-rgb'), b: rgb('--accent-2-rgb'), boost: theme === 'white' ? 1.6 : 1 };
    }, [theme]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const parent = canvas.parentElement;

        const LINK = 125;
        const MOUSE_LINK = 170;
        const REPEL = 110;

        let width = 0;
        let height = 0;
        let particles = [];
        let raf = 0;
        let inView = true;
        const mouse = { x: -9999, y: -9999 };

        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = parent.clientWidth;
            height = parent.clientHeight;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            const count = Math.min(95, Math.floor((width * height) / 15000));
            particles = Array.from({ length: count }, () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.35,
                vy: (Math.random() - 0.5) * 0.35,
                r: Math.random() * 1.4 + 0.7,
            }));
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                // Push away from the cursor
                const dx = p.x - mouse.x;
                const dy = p.y - mouse.y;
                const d = Math.hypot(dx, dy);
                if (d < REPEL && d > 0) {
                    const force = (REPEL - d) / REPEL;
                    p.vx += (dx / d) * force * 0.6;
                    p.vy += (dy / d) * force * 0.6;
                }

                // Damping keeps speeds sane after a push
                p.vx *= 0.985;
                p.vy *= 0.985;
                const speed = Math.hypot(p.vx, p.vy);
                if (speed < 0.12) {
                    p.vx += (Math.random() - 0.5) * 0.04;
                    p.vy += (Math.random() - 0.5) * 0.04;
                }

                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;
                p.x = Math.max(0, Math.min(width, p.x));
                p.y = Math.max(0, Math.min(height, p.y));

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${colors.current.a}, ${Math.min(0.75 * colors.current.boost, 0.9)})`;
                ctx.fill();

                // Links between particles
                for (let j = i + 1; j < particles.length; j++) {
                    const q = particles[j];
                    const dist = Math.hypot(p.x - q.x, p.y - q.y);
                    if (dist < LINK) {
                        ctx.strokeStyle = `rgba(${colors.current.a}, ${(1 - dist / LINK) * 0.22 * colors.current.boost})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(q.x, q.y);
                        ctx.stroke();
                    }
                }

                // Links to the cursor
                const md = Math.hypot(p.x - mouse.x, p.y - mouse.y);
                if (md < MOUSE_LINK) {
                    ctx.strokeStyle = `rgba(${colors.current.b}, ${(1 - md / MOUSE_LINK) * 0.55})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            }
        };

        const loop = () => {
            if (inView && !document.hidden) draw();
            raf = requestAnimationFrame(loop);
        };

        const onMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };
        const onLeave = () => {
            mouse.x = -9999;
            mouse.y = -9999;
        };

        resize();

        const resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(parent);

        const visibility = new IntersectionObserver(([entry]) => {
            inView = entry.isIntersecting;
        });
        visibility.observe(parent);

        if (reduced) {
            draw(); // static frame, no animation
        } else {
            window.addEventListener('mousemove', onMove, { passive: true });
            parent.addEventListener('mouseleave', onLeave);
            raf = requestAnimationFrame(loop);
        }

        return () => {
            cancelAnimationFrame(raf);
            resizeObserver.disconnect();
            visibility.disconnect();
            window.removeEventListener('mousemove', onMove);
            parent.removeEventListener('mouseleave', onLeave);
        };
    }, [reduced]);

    return <canvas ref={canvasRef} aria-hidden="true" className={`pointer-events-none absolute inset-0 ${className}`} />;
};

export default ParticleField;
