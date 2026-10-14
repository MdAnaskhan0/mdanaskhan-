import { useEffect, useState } from 'react';
import { codeSnippets } from '../../data/portfolioData';
import { useReducedMotion } from '../../hooks/useDevice';

const KEYWORDS = new Set([
    'function', 'class', 'return', 'const', 'let', 'async', 'await', 'try', 'catch',
    'extends', 'constructor', 'super', 'this', 'new', 'render',
]);

const TOKEN = /(\/\/.*$)|('[^']*'|"[^"]*"|`[^`]*`)|(\b\d+\b)|([A-Za-z_$][\w$]*)(?=\s*:)|([A-Za-z_$][\w$]*)|([{}()[\];,.<>=+\-/*:]+)|(\s+)/gy;

const COLORS = {
    comment: 'text-slate-500 italic',
    string: 'text-accent',
    number: 'text-amber-300',
    prop: 'text-sky-300',
    keyword: 'text-violet-400',
    ident: 'text-slate-200',
    punct: 'text-slate-400',
};

/** Tiny tokenizer: good enough to colour the short snippets shown in the hero. */
const highlight = (line) => {
    const out = [];
    TOKEN.lastIndex = 0;
    let match;
    let key = 0;
    while (TOKEN.lastIndex < line.length && (match = TOKEN.exec(line))) {
        const [text, comment, string, number, prop, ident, punct] = match;
        let cls = null;
        if (comment) cls = COLORS.comment;
        else if (string) cls = COLORS.string;
        else if (number) cls = COLORS.number;
        else if (prop) cls = COLORS.prop;
        else if (ident) cls = KEYWORDS.has(text) ? COLORS.keyword : COLORS.ident;
        else if (punct) cls = COLORS.punct;
        out.push(
            cls ? (
                <span key={key++} className={cls}>
                    {text}
                </span>
            ) : (
                text
            )
        );
    }
    return out;
};

const CodeEditor = () => {
    const reduced = useReducedMotion();
    const [tab, setTab] = useState(0);
    const [typed, setTyped] = useState(0);

    const snippet = codeSnippets[tab];
    const fullText = snippet.code.join('\n');

    // Type the snippet one character at a time, then rotate to the next file.
    useEffect(() => {
        if (reduced) {
            setTyped(fullText.length);
            return;
        }

        if (typed < fullText.length) {
            const char = fullText[typed];
            const delay = char === '\n' ? 140 : 22 + Math.random() * 28;
            const t = setTimeout(() => setTyped((n) => n + 1), delay);
            return () => clearTimeout(t);
        }

        const t = setTimeout(() => {
            setTab((n) => (n + 1) % codeSnippets.length);
            setTyped(0);
        }, 3600);
        return () => clearTimeout(t);
    }, [typed, fullText, reduced]);

    const selectTab = (i) => {
        setTab(i);
        setTyped(0);
    };

    const lines = fullText.slice(0, typed).split('\n');

    return (
        <div className="overflow-hidden rounded-xl border border-line-strong bg-surface/90 shadow-2xl shadow-black/40 backdrop-blur">
            {/* Title bar */}
            <div className="flex items-center border-b border-line bg-ink/60 pl-4">
                <div className="mr-3 flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                    <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                    <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                </div>
                <div role="tablist" className="flex min-w-0 overflow-x-auto">
                    {codeSnippets.map((s, i) => (
                        <button
                            key={s.file}
                            role="tab"
                            aria-selected={tab === i}
                            onClick={() => selectTab(i)}
                            className={`whitespace-nowrap border-b-2 px-4 py-2.5 font-mono text-xs transition-colors ${
                                tab === i
                                    ? 'border-accent bg-surface text-fg'
                                    : 'border-transparent text-muted hover:text-fg'
                            }`}
                        >
                            {s.file}
                        </button>
                    ))}
                </div>
            </div>

            {/* Code */}
            <div className="h-[21rem] overflow-hidden p-5 font-mono text-[13px] leading-6">
                <div className="flex">
                    <div aria-hidden="true" className="select-none pr-5 text-right text-slate-600">
                        {lines.map((_, i) => (
                            <div key={i}>{i + 1}</div>
                        ))}
                    </div>
                    <pre className="m-0 min-w-0 flex-1 overflow-hidden whitespace-pre font-mono">
                        {lines.map((line, i) => (
                            <div key={i} className="min-h-6">
                                {highlight(line)}
                                {i === lines.length - 1 && (
                                    <span className="ml-px inline-block h-4 w-[7px] translate-y-[3px] animate-blink bg-accent" />
                                )}
                            </div>
                        ))}
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default CodeEditor;
