import { useRef } from 'react';

/** Flat card whose border and surface light up under the cursor (no tilt). */
const SpotlightCard = ({ children, className = '' }) => {
    const ref = useRef(null);

    const onMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        ref.current.style.setProperty('--mx', `${e.clientX - rect.left}px`);
        ref.current.style.setProperty('--my', `${e.clientY - rect.top}px`);
    };

    return (
        <div ref={ref} onMouseMove={onMove} className={`spotlight ${className}`}>
            {children}
        </div>
    );
};

export default SpotlightCard;
