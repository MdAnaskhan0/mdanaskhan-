import { useState, useEffect } from 'react';
import { codeSnippets } from '../../data/portfolioData';

const CodeEditor = () => {
    const [codeLines, setCodeLines] = useState([]);
    const [currentCodeIndex, setCurrentCodeIndex] = useState(0);

    const lineIncludes = (line, text) => {
        return line && typeof line.includes === 'function' && line.includes(text);
    };

    const getCodeLineColor = (line) => {
        if (!line) return "text-gray-300";
        if (lineIncludes(line, 'function') || lineIncludes(line, 'class') || lineIncludes(line, 'return'))
            return "text-purple-400";
        if (lineIncludes(line, 'const') || lineIncludes(line, 'let') || lineIncludes(line, 'async'))
            return "text-blue-400";
        if (lineIncludes(line, 'name') || lineIncludes(line, 'role') || lineIncludes(line, 'skills') ||
            lineIncludes(line, 'passion') || lineIncludes(line, 'state') || lineIncludes(line, 'projects') ||
            lineIncludes(line, 'try') || lineIncludes(line, 'catch'))
            return "text-yellow-300";
        if (lineIncludes(line, "'") || lineIncludes(line, '"') || lineIncludes(line, '`'))
            return "text-green-400";
        if (lineIncludes(line, '//'))
            return "text-gray-500";
        return "text-gray-300";
    };

    useEffect(() => {
        let currentLine = 0;
        let currentSnippet = codeSnippets[currentCodeIndex];

        const codeInterval = setInterval(() => {
            if (currentLine < currentSnippet.length) {
                setCodeLines(prev => [...prev, currentSnippet[currentLine]]);
                currentLine++;
            } else {
                setTimeout(() => {
                    setCodeLines([]);
                    setCurrentCodeIndex((prevIndex) => (prevIndex + 1) % codeSnippets.length);
                }, 3000);
                clearInterval(codeInterval);
            }
        }, 300);

        return () => clearInterval(codeInterval);
    }, [currentCodeIndex]);

    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 shadow-xl">
            <div className="flex items-center px-4 py-2 bg-gray-900 border-b border-gray-700">
                <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                </div>
                <div className="ml-4 text-sm text-gray-400">about-me.js</div>
            </div>
            <div className="p-4 font-mono text-sm">
                <div className="flex">
                    <div className="text-right pr-4 text-gray-500 select-none">
                        {codeLines.map((_, index) => (
                            <div key={index}>{index + 1}</div>
                        ))}
                    </div>
                    <div className="w-full">
                        {codeLines.map((line, index) => (
                            <div key={index} className={getCodeLineColor(line)}>
                                {line}
                            </div>
                        ))}
                        <div className="flex">
                            <span className="text-gray-500">{codeLines.length + 1}</span>
                            <span className="ml-4 text-green-400 animate-pulse">_</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CodeEditor;