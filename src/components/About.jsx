import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {
    const [terminalLines, setTerminalLines] = useState([]);
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [isInteractive, setIsInteractive] = useState(false);

    const skills = {
        backend: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Redis', 'GraphQL'],
        devops: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Jenkins', 'Terraform'],
        frontend: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
        tools: ['Git', 'Linux', 'Nginx', 'Kafka', 'RabbitMQ']
    };

    const terminalCommands = [
        { command: '$ whoami', output: 'DevOps Engineer & Backend Developer' },
        { command: '$ cat skills/backend.txt', output: skills.backend.join(', ') },
        { command: '$ cat skills/devops.txt', output: skills.devops.join(', ') },
        { command: '$ cat skills/frontend.txt', output: skills.frontend.join(', ') },
        { command: '$ cat skills/tools.txt', output: skills.tools.join(', ') },
        { command: '$ echo $PASSION', output: 'Building scalable systems ⚡' }
    ];

    // Typing effect for initial commands
    useEffect(() => {
        if (currentLineIndex >= terminalCommands.length) {
            setIsInteractive(true);
            return;
        }
        const currentCommand = terminalCommands[currentLineIndex];
        const fullText = currentCommand.command;
        if (currentText.length < fullText.length) {
            setIsTyping(true);
            const timer = setTimeout(() => {
                setCurrentText(fullText.slice(0, currentText.length + 1));
            }, 50);
            return () => clearTimeout(timer);
        } else {
            setIsTyping(false);
            const timer = setTimeout(() => {
                setTerminalLines(prev => [...prev, currentCommand]);
                setCurrentText('');
                setCurrentLineIndex(currentLineIndex + 1);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [currentText, currentLineIndex]);

    const handleCommand = (e) => {
        e.preventDefault();
        if (!userInput.trim()) return;
        const input = userInput.trim();
        let output = '';
        if (input === 'help') {
            output = '💡 Commands: whoami | skills | github | linkedin | coffee | clear';
        } else if (input === 'whoami') {
            output = 'Santhosh - DevOps Engineer & Backend Developer';
        } else if (input === 'skills') {
            output = 'Hover over the floating skills to see details (not available in compact view)';
        } else if (input === 'github') {
            output = '🔗 github.com/Santhosh132-ops';
        } else if (input === 'linkedin') {
            output = '🔗 linkedin.com/in/santhosh132-ops';
        } else if (input === 'coffee') {
            output = '☕ Coffee.exe running – system optimal';
        } else if (input === 'clear') {
            setTerminalLines([]);
            setUserInput('');
            return;
        } else {
            output = `❌ Command not found: ${input}. Type 'help' for commands.`;
        }
        setTerminalLines(prev => [...prev, { command: `$ ${input}`, output }]);
        setUserInput('');
    };

    return (
        <section className="about-section" id="about">
            <div className="about-container">
                {/* Header */}
                <div className="about-header">
                    <div className="header-line"></div>
                    <h2 className="about-title">
                        <span className="title-word">About</span>
                        <span className="title-word">Me</span>
                    </h2>
                    <div className="header-line"></div>
                </div>

                {/* Content Grid */}
                <div className="about-grid">
                    {/* Left side: Text */}
                    <div className="about-text">
                        <p className="intro-text">
                            Hey! I'm a <span className="highlight">DevOps Engineer</span> who loves building
                            <span className="highlight"> scalable backends</span> and architecting
                            <span className="highlight"> resilient cloud infrastructure</span>.
                        </p>
                        <p className="description-text">
                            My journey started with curiosity about systems at scale. Now I craft high‑performance distributed systems, automate pipelines, and keep apps running smoothly.
                        </p>
                        <p className="description-text">
                            When not coding, I explore new tech, contribute to open source, or brew the perfect espresso ☕.
                        </p>
                    </div>

                    {/* Right side: Interactive Terminal */}
                    <div className="terminal-container">
                        <div className="terminal-header">
                            <div className="terminal-buttons">
                                <span className="terminal-btn red"></span>
                                <span className="terminal-btn yellow"></span>
                                <span className="terminal-btn green"></span>
                            </div>
                            <div className="terminal-title">skills.sh</div>
                        </div>
                        <div className="terminal-body">
                            {terminalLines.map((line, i) => (
                                <div key={i} className="terminal-line">
                                    <div className="terminal-command"><span className="prompt">→</span> {line.command}</div>
                                    <div className="terminal-output">{line.output}</div>
                                </div>
                            ))}
                            {isTyping && currentText && (
                                <div className="terminal-line">
                                    <div className="terminal-command"><span className="prompt">→</span> {currentText}<span className="terminal-cursor">▊</span></div>
                                </div>
                            )}
                            {isInteractive && (
                                <form onSubmit={handleCommand} className="terminal-input-form">
                                    <div className="terminal-input-line">
                                        <span className="prompt">→</span>
                                        <input
                                            type="text"
                                            value={userInput}
                                            onChange={e => setUserInput(e.target.value)}
                                            className="terminal-input"
                                            placeholder="Type 'help' for commands..."
                                            autoFocus
                                        />
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
