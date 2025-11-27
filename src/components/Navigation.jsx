import { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const sections = ['home', 'about', 'projects', 'achievements', 'badges', 'contacts'];
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3 // Trigger when 30% of the section is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach(id => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const allSections = ['home', 'about', 'projects', 'achievements', 'badges', 'contacts'];
    const visibleSections = allSections.filter(section => section !== activeSection);

    const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-brand">
                <span>Santhosh</span>
            </div>

            {/* Desktop Links */}
            <div className="nav-links">
                {visibleSections.map(section => (
                    <a key={section} href={`#${section}`}>
                        {capitalize(section)}
                    </a>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <button
                className="mobile-menu-btn"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {isMobileMenuOpen ? (
                        <path d="M18 6L6 18M6 6l12 12" />
                    ) : (
                        <path d="M3 12h18M3 6h18M3 18h18" />
                    )}
                </svg>
            </button>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-nav-links">
                    {visibleSections.map(section => (
                        <a key={section} href={`#${section}`} onClick={() => setIsMobileMenuOpen(false)}>
                            {capitalize(section)}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navigation;

