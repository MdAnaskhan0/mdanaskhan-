import { useEffect, useState } from 'react';

const useMedia = (query) => {
    const [matches, setMatches] = useState(
        () => typeof window !== 'undefined' && window.matchMedia(query).matches
    );

    useEffect(() => {
        const mq = window.matchMedia(query);
        const onChange = (e) => setMatches(e.matches);
        mq.addEventListener('change', onChange);
        return () => mq.removeEventListener('change', onChange);
    }, [query]);

    return matches;
};

/** True when the user has a mouse / trackpad (not a touch-only device). */
export const useFinePointer = () => useMedia('(hover: hover) and (pointer: fine)');

/** True when the user asked the OS to reduce motion. */
export const useReducedMotion = () => useMedia('(prefers-reduced-motion: reduce)');
