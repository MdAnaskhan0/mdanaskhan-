import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';
import Logo from '../../assets/profile/Logo.png';
import Resume from '../../assets/CV/Md.AnasKhan.pdf';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import Magnetic from '../ui/Magnetic';
import ThemeSwitcher, { ThemeRow } from '../ui/ThemeSwitcher';
import { navItems as NAV_ITEMS } from '../../data/portfolioData';

const Navigation = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const active = useScrollSpy(NAV_ITEMS);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Lock page scroll and close on Escape while the drawer is open
    useEffect(() => {
        if (!open) return;
        const onKey = (e) => e.key === 'Escape' && setOpen(false);
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKey);
        };
    }, [open]);

    return (
        <>
            <motion.header
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-300 ${
                    scrolled
                        ? 'border-line bg-ink/80 shadow-lg shadow-black/20 backdrop-blur-xl'
                        : 'border-transparent bg-transparent'
                }`}
            >
                <nav
                    aria-label="Primary"
                    className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 ${
                        scrolled ? 'py-1.5' : 'py-3'
                    }`}
                >
                    <a href="#home" aria-label="Back to top" className="logo-chip block transition-transform duration-300 hover:scale-105">
                        <img
                            src={Logo}
                            alt="Md. Anas Khan"
                            className={`transition-all duration-300 ${scrolled ? 'w-24 lg:w-28' : 'w-28 lg:w-36'}`}
                        />
                    </a>

                    {/* Desktop links */}
                    <ul className="hidden items-center gap-1 lg:flex">
                        {NAV_ITEMS.map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item}`}
                                    className={`relative block rounded-full px-3.5 py-2 text-sm capitalize transition-colors duration-300 ${
                                        active === item ? 'text-accent' : 'text-muted hover:text-fg'
                                    }`}
                                >
                                    {active === item && (
                                        <motion.span
                                            layoutId="nav-pill"
                                            className="absolute inset-0 rounded-full border border-accent/30 bg-accent/10"
                                            transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                                        />
                                    )}
                                    <span className="relative">{item}</span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="hidden items-center gap-3 lg:flex">
                        <ThemeSwitcher />
                        <Magnetic strength={0.25}>
                            <a
                                href={Resume}
                                download="Md.AnasKhan-Resume.pdf"
                                className="flex items-center gap-2 rounded-full border border-accent/50 px-4 py-2 text-sm font-medium text-accent transition-colors duration-300 hover:bg-accent hover:text-on-accent"
                            >
                                <FaDownload className="h-3 w-3" /> Resume
                            </a>
                        </Magnetic>
                    </div>

                    <div className="flex items-center gap-1 lg:hidden">
                        <ThemeSwitcher />
                        <button
                            className="p-2 text-muted transition-colors hover:text-accent"
                            onClick={() => setOpen(true)}
                            aria-label="Open menu"
                            aria-expanded={open}
                        >
                            <FaBars className="h-6 w-6" />
                        </button>
                    </div>
                </nav>
            </motion.header>

            {/* Mobile drawer */}
            <AnimatePresence>
                {open && (
                    <>
                        <motion.div
                            key="overlay"
                            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setOpen(false)}
                        />
                        <motion.aside
                            key="drawer"
                            role="dialog"
                            aria-modal="true"
                            aria-label="Menu"
                            className="fixed right-0 top-0 z-[55] flex h-full w-72 flex-col border-l border-line bg-surface lg:hidden"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', stiffness: 320, damping: 34 }}
                        >
                            <div className="flex justify-end border-b border-line p-4">
                                <button
                                    onClick={() => setOpen(false)}
                                    aria-label="Close menu"
                                    className="p-2 text-muted transition-colors hover:text-accent"
                                >
                                    <FaTimes className="h-6 w-6" />
                                </button>
                            </div>
                            <motion.ul
                                className="flex flex-1 flex-col gap-1 overflow-y-auto p-5"
                                initial="hidden"
                                animate="show"
                                variants={{ show: { transition: { staggerChildren: 0.05, delayChildren: 0.12 } } }}
                            >
                                {NAV_ITEMS.map((item) => (
                                    <motion.li
                                        key={item}
                                        variants={{ hidden: { opacity: 0, x: 24 }, show: { opacity: 1, x: 0 } }}
                                    >
                                        <a
                                            href={`#${item}`}
                                            onClick={() => setOpen(false)}
                                            className={`block rounded-lg px-4 py-3 text-lg capitalize transition-colors ${
                                                active === item
                                                    ? 'bg-accent/10 font-semibold text-accent'
                                                    : 'text-muted hover:bg-surface-2 hover:text-fg'
                                            }`}
                                        >
                                            {item}
                                        </a>
                                    </motion.li>
                                ))}
                            </motion.ul>
                            <div className="space-y-4 border-t border-line p-5">
                                <ThemeRow />
                                <a
                                    href={Resume}
                                    download="Md.AnasKhan-Resume.pdf"
                                    className="flex items-center justify-center gap-2 rounded-lg bg-accent py-3 font-semibold text-on-accent"
                                >
                                    <FaDownload className="h-4 w-4" /> Download resume
                                </a>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navigation;
