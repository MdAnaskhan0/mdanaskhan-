import { useSyncExternalStore } from 'react';

export const THEMES = ['black', 'white', 'navy'];
const STORAGE_KEY = 'portfolio-theme';
const META_COLORS = { black: '#000000', white: '#ffffff', navy: '#010736' };

const listeners = new Set();
const subscribe = (cb) => {
    listeners.add(cb);
    return () => listeners.delete(cb);
};
const getSnapshot = () => document.documentElement.dataset.theme || 'black';

export const setTheme = (theme) => {
    if (!THEMES.includes(theme) || theme === getSnapshot()) return;

    const root = document.documentElement;
    root.classList.add('theme-transition');
    root.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', META_COLORS[theme]);
    try {
        localStorage.setItem(STORAGE_KEY, theme);
    } catch {
        /* storage blocked: theme still applies for this visit */
    }
    listeners.forEach((l) => l());
    window.setTimeout(() => root.classList.remove('theme-transition'), 450);
};

/** [currentTheme, setTheme] — shared across every component that uses it. */
export const useTheme = () => [useSyncExternalStore(subscribe, getSnapshot, () => 'black'), setTheme];
