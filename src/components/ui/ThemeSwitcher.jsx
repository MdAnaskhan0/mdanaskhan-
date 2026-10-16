import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaMoon, FaSun, FaCheck } from 'react-icons/fa';
import { IoWater } from 'react-icons/io5';
import { THEMES, useTheme } from '../../hooks/useTheme';

const META = {
    black: { label: 'Dark black', Icon: FaMoon, swatch: ['#000000', '#141418'] },
    white: { label: 'White', Icon: FaSun, swatch: ['#ffffff', '#e9edf2'] },
    navy: { label: 'Deep navy', Icon: IoWater, swatch: ['#010736', '#0f3040'] },
};

/** Row of three buttons, used inside the mobile drawer. */
export const ThemeRow = () => {
    const [theme, setTheme] = useTheme();
    return (
        <div role="radiogroup" aria-label="Theme" className="grid grid-cols-3 gap-2">
            {THEMES.map((t) => {
                const { label, Icon, swatch } = META[t];
                const active = theme === t;
                return (
                    <button
                        key={t}
                        role="radio"
                        aria-checked={active}
                        onClick={() => setTheme(t)}
                        className={`flex flex-col items-center gap-2 rounded-xl border px-2 py-3 text-xs transition-colors ${
                            active ? 'border-accent text-accent' : 'border-line text-muted hover:text-fg'
                        }`}
                    >
                        <span
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-line-strong"
                            style={{ background: `linear-gradient(135deg, ${swatch[0]} 50%, ${swatch[1]} 50%)` }}
                        >
                            <Icon className={`h-3.5 w-3.5 ${t === 'white' ? 'text-amber-500' : 'text-white/80'}`} />
                        </span>
                        {label}
                    </button>
                );
            })}
        </div>
    );
};

/** Round icon button that opens a small menu of themes (desktop + mobile header). */
const ThemeSwitcher = () => {
    const [theme, setTheme] = useTheme();
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    const { Icon } = META[theme];

    useEffect(() => {
        if (!open) return;
        const onDown = (e) => !ref.current?.contains(e.target) && setOpen(false);
        const onKey = (e) => e.key === 'Escape' && setOpen(false);
        document.addEventListener('mousedown', onDown);
        window.addEventListener('keydown', onKey);
        return () => {
            document.removeEventListener('mousedown', onDown);
            window.removeEventListener('keydown', onKey);
        };
    }, [open]);

    return (
        <div ref={ref} className="relative">
            <button
                onClick={() => setOpen((v) => !v)}
                aria-label="Change theme"
                aria-haspopup="menu"
                aria-expanded={open}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-muted transition-colors duration-300 hover:border-accent hover:text-accent"
            >
                <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                        key={theme}
                        initial={{ rotate: -90, scale: 0.4, opacity: 0 }}
                        animate={{ rotate: 0, scale: 1, opacity: 1 }}
                        exit={{ rotate: 90, scale: 0.4, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex"
                    >
                        <Icon className="h-4 w-4" />
                    </motion.span>
                </AnimatePresence>
            </button>

            <AnimatePresence>
                {open && (
                    <motion.ul
                        role="menu"
                        initial={{ opacity: 0, y: -8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.96 }}
                        transition={{ duration: 0.18 }}
                        className="absolute right-0 top-12 z-50 w-48 origin-top-right overflow-hidden rounded-xl border border-line-strong bg-surface p-1.5 shadow-2xl shadow-black/30"
                    >
                        {THEMES.map((t) => {
                            const { label, Icon: Ico, swatch } = META[t];
                            return (
                                <li key={t} role="none">
                                    <button
                                        role="menuitemradio"
                                        aria-checked={theme === t}
                                        onClick={() => {
                                            setTheme(t);
                                            setOpen(false);
                                        }}
                                        className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                                            theme === t ? 'bg-accent/10 text-accent' : 'text-fg/80 hover:bg-surface-2'
                                        }`}
                                    >
                                        <span
                                            className="flex h-6 w-6 items-center justify-center rounded-full border border-line-strong"
                                            style={{ background: `linear-gradient(135deg, ${swatch[0]} 50%, ${swatch[1]} 50%)` }}
                                        >
                                            <Ico className={`h-3 w-3 ${t === 'white' ? 'text-amber-500' : 'text-white/80'}`} />
                                        </span>
                                        <span className="flex-1 text-left">{label}</span>
                                        {theme === t && <FaCheck className="h-3 w-3" />}
                                    </button>
                                </li>
                            );
                        })}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ThemeSwitcher;
