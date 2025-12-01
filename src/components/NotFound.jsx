import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = ({
    title = "SYSTEM ERROR",
    mainText = "404",
    subtitle = "The requested resource could not be found.",
    buttonText = "RETURN HOME",
    customLogs = null
}) => {
    const navigate = useNavigate();
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        const defaultLogs = [
            { text: "> Initializing system...", delay: 500 },
            { text: "> Connecting to server...", delay: 1200 },
            { text: "> Resolving path...", delay: 2000 },
            { text: `> ERROR: Path not found: ${window.location.pathname}`, delay: 2800, color: '#ff4757' },
            { text: "> Traceback: null", delay: 3500 },
            { text: "> System halted.", delay: 4200 }
        ];

        const sequence = customLogs || defaultLogs;
        let timeouts = [];

        // Reset logs on mount
        setLogs([]);

        sequence.forEach(({ text, delay, color }, index) => {
            const timeout = setTimeout(() => {
                setLogs(prev => [...prev, { text, color }]);
            }, delay);
            timeouts.push(timeout);
        });

        return () => timeouts.forEach(clearTimeout);
    }, [customLogs]);

    return (
        <div className="not-found-container">
            <div className="content-wrapper">
                <div className="glitch-wrapper">
                    <h1 className="glitch-text" data-text={mainText}>{mainText}</h1>
                </div>

                <div className="terminal-window">
                    <div className="terminal-header">
                        <div className="terminal-dot red"></div>
                        <div className="terminal-dot yellow"></div>
                        <div className="terminal-dot green"></div>
                        <span className="terminal-title">bash -- status</span>
                    </div>
                    <div className="terminal-body">
                        {logs.map((log, i) => (
                            <div key={i} className="log-line" style={{ color: log.color || '#00ff9d' }}>
                                {log.text}
                            </div>
                        ))}
                        <div className="log-line cursor-line">
                            <span className="prompt">$</span> <span className="cursor">_</span>
                        </div>
                    </div>
                </div>

                <p className="subtitle">{subtitle}</p>

                <button onClick={() => navigate('/')} className="home-button">
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default NotFound;
