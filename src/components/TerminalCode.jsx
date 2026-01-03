import React, { useState, useEffect } from 'react';
import './TerminalCode.css';

const TerminalCode = ({ code, speed = 80, outputPrefix = 'Server listen' }) => {
    const [displayedCode, setDisplayedCode] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        if (currentIndex < code.length) {
            const timeout = setTimeout(() => {
                setDisplayedCode(prev => prev + code[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, speed);

            return () => clearTimeout(timeout);
        } else {
            setIsComplete(true);
        }
    }, [currentIndex, code, speed]);

    // Split code into lines and highlight output lines
    const renderCode = () => {
        const lines = displayedCode.split('\n');
        return lines.map((line, index) => {
            const isOutput = line.startsWith(outputPrefix);
            return (
                <div key={index} className={isOutput ? 'output-line' : 'code-line'}>
                    {line}
                </div>
            );
        });
    };

    return (
        <div className="terminal-code-container">
            <div className="terminal-header">
                <div className="terminal-dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                </div>
            </div>
            <div className="terminal-body">
                <pre>
                    <code>{renderCode()}</code>
                </pre>
            </div>
        </div>
    );
};

export default TerminalCode;
