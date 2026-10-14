import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';
import MouseEffects from './components/ui/MouseEffects';
import ScrollProgress from './components/ui/ScrollProgress';
import LoaderImage from './assets/profile/LoaderImage.jpg';

const LOAD_MS = 2200;

const Preloader = ({ progress }) => (
    <motion.div
        key="preloader"
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
        exit={{ y: '-100%' }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
        <div className="relative h-36 w-36">
            <div className="absolute inset-0 animate-[spin_2.4s_linear_infinite] rounded-full bg-[conic-gradient(from_0deg,var(--color-accent),transparent_60%,var(--color-accent-2))] blur-[2px]" />
            <div className="absolute inset-[3px] overflow-hidden rounded-full bg-white">
                <img src={LoaderImage} alt="" className="h-full w-full object-cover" />
            </div>
        </div>
        <div className="mt-8 font-mono text-sm text-muted" aria-live="polite">
            loading portfolio <span className="text-accent">{Math.round(progress)}%</span>
        </div>
        <div className="mt-4 h-0.5 w-48 overflow-hidden rounded-full bg-line">
            <div className="h-full bg-gradient-to-r from-accent to-accent-2" style={{ width: `${progress}%` }} />
        </div>
    </motion.div>
);

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    // Preloader: progress counts up, then the curtain lifts
    useEffect(() => {
        const start = performance.now();
        let raf;
        const tick = (now) => {
            const t = Math.min((now - start) / LOAD_MS, 1);
            setProgress((1 - Math.pow(1 - t, 3)) * 100);
            if (t < 1) raf = requestAnimationFrame(tick);
            else setTimeout(() => setIsLoading(false), 250);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isLoading ? 'hidden' : '';
        if (!isLoading && window.location.hash) {
            document.getElementById(window.location.hash.slice(1))?.scrollIntoView();
        }
    }, [isLoading]);

    return (
        <div className="min-h-screen font-sans text-fg">
            <AnimatePresence>{isLoading && <Preloader progress={progress} />}</AnimatePresence>

            {!isLoading && (
                <>
                    <MouseEffects />
                    <ScrollProgress />
                    <Header />
                    <main>
                        <Hero />
                        <About />
                        <Experience />
                        <Education />
                        <Projects />
                        <Skills />
                        <Certifications />
                        <Contact />
                    </main>
                    <Footer />
                </>
            )}
        </div>
    );
};

export default App;
