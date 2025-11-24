import { useState } from 'react';
import './Navigation.css';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { label: 'home', href: '#home' },
        { label: 'about', href: '#about' },
        { label: 'experience', href: '#experience' },
        { label: 'projects', href: '#projects' },
        { label: 'skills', href: '#skills' },
        { label: 'contact', href: '#contact' }
    ];

    return (
        <nav className="navigation">
            <div className="container nav-container">
                <div className="nav-brand">
                    <span className="terminal-prompt">$</span>
                    <span className="brand-text">santhosh.dev</span>
                </div>

                <button
                    className="nav-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    {navItems.map((item, index) => (
                        <li key={index} className="nav-item">
                            <a
                                href={item.href}
                                className="nav-link"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className="nav-prompt">~/</span>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
