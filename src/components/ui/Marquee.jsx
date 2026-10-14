/** Infinite horizontal ticker. Pauses on hover. */
const Marquee = ({ items }) => {
    const row = [...items, ...items];

    return (
        <div
            className="group relative overflow-hidden py-5"
            style={{
                maskImage: 'linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)',
            }}
        >
            <div className="flex w-max animate-marquee gap-10 group-hover:[animation-play-state:paused]">
                {row.map((item, i) => (
                    <span
                        key={`${item}-${i}`}
                        aria-hidden={i >= items.length}
                        className="flex items-center gap-10 whitespace-nowrap font-mono text-sm text-muted"
                    >
                        {item}
                        <span className="h-1 w-1 rounded-full bg-accent/60" />
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
