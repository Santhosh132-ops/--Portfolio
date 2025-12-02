import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import NotFound from './NotFound';
import './ProjectPage.css';

const ProjectPage = () => {
    const { id } = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const navigate = useNavigate();

    const handleBack = (e) => {
        if (e) e.preventDefault();
        if (window.history.length > 2) {
            navigate(-1);
        } else {
            window.location.href = '/#projects';
        }
    };

    // Project Data
    const projectData = {
        1: {
            title: 'Geo-Fence Monitor',
            subtitle: 'Real-time Vehicle Tracking System',
            url: 'https://geo-fence.onrender.com/',
            github: 'https://github.com/Santhosh132-ops/Geo-Fence',
            // Converted to JSX for highlighting
            overview: (
                <>
                    A <span className="highlight-term">high-performance distributed system</span> for real-time vehicle tracking and <span className="highlight-term">sub-millisecond</span> geofence detection.
                </>
            ),
            features: [
                'Real-time Geofence Detection',
                'Interactive Map Dashboard',
                'Smart Route Planning',
                'Auto-Drive Simulation',
                'Point-in-Polygon Algorithm',
                'Debounced Zone Transitions'
            ],
            stack: [
                { name: 'Node.js', reason: 'Non-blocking I/O for concurrent streams.' },
                { name: 'TypeScript', reason: 'Type safety for event processing.' },
                { name: 'Fastify', reason: 'Low overhead, high throughput API.' },
                { name: 'Leaflet.js', reason: 'Lightweight DOM-based mapping.' },
                { name: 'OSRM', reason: 'Optimal path calculation.' }
            ],
            algorithms: [
                {
                    title: "Ray-Casting",
                    desc: (
                        <>
                            Determines <span className="highlight-term">point-in-polygon</span> status by casting a ray and counting intersections. Odd = Inside, Even = Outside. <span className="highlight-term">O(n) complexity</span>.
                        </>
                    )
                },
                {
                    title: "Debouncing",
                    desc: (
                        <>
                            Sliding window mechanism requiring <span className="highlight-term">'N' consecutive updates</span> to confirm zone transitions, eliminating <span className="highlight-term">GPS jitter</span> false positives.
                        </>
                    )
                }
            ],
            howItWorks: [
                (<>Vehicle emits telemetry via <span className="highlight-term">REST API</span>.</>),
                (<>Server checks geofence status via <span className="highlight-term">Ray-Casting</span>.</>),
                (<>State manager verifies transition (<span className="highlight-term">Debounce</span>).</>),
                (<>Events broadcast to dashboard via <span className="highlight-term">WebSockets</span>.</>)
            ]
        }
    };

    const project = projectData[id];

    // If it's not the Geo-Fence project, show Under Construction
    if (!project) {
        return (
            <NotFound
                title="INITIALIZING..."
                mainText="PROJECT"
                subtitle="This project is currently being deployed to the portfolio."
                buttonText="RETURN TO PROJECTS"
                onButtonClick={handleBack}
                customLogs={[
                    { text: "> Detecting project configuration...", delay: 500 },
                    { text: "> Loading architecture diagrams...", delay: 1200 },
                    { text: "> Connecting to live demo environment...", delay: 2200 },
                    { text: "> ERROR: Deployment pending approval", delay: 3000, color: '#ff4757' },
                    { text: "> Status: Awaiting final build", delay: 3800, color: '#ffa502' },
                    { text: "> Estimated completion: SOON", delay: 4500 }
                ]}
            />
        );
    }

    const handleLaunch = () => {
        // Check if mobile
        if (window.innerWidth <= 768) {
            window.open(project.url, '_blank');
            return;
        }

        setIsTransitioning(true);
        setTimeout(() => {
            setIsModalOpen(true);
            setIsTransitioning(false);
        }, 1500);
    };

    return (
        <div className="project-page-container professional-layout">
            {/* Mobile Navigation (Sticky Top) */}
            <a href="#" onClick={handleBack} className="back-link mobile-nav">
                <span className="arrow">←</span> Back to Projects
            </a>

            <div className="docs-wrapper">
                {/* Header Section */}
                <header className="docs-header">
                    <div className="header-left">
                        <a href="#" onClick={handleBack} className="back-link desktop-nav">← Back to Projects</a>
                        <h1>{project.title}</h1>
                        <span className="project-subtitle">{project.subtitle}</span>
                    </div>
                    <div className="header-right">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-btn">
                            GitHub Repo ↗
                        </a>
                        <button className="launch-btn-small" onClick={handleLaunch}>
                            View Live Site ↗
                        </button>
                    </div>
                </header>

                <div className="docs-grid">
                    {/* Left Column: Main Info */}
                    <div className="docs-main">
                        <section className="doc-section">
                            <h3>Overview</h3>
                            <p>{project.overview}</p>
                        </section>

                        <section className="doc-section">
                            <h3>Execution Flow</h3>
                            <div className="flow-steps">
                                {project.howItWorks.map((step, index) => (
                                    <div key={index} className="flow-step">
                                        <span className="step-number">{index + 1}.</span>
                                        <p>{step}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="doc-section">
                            <h3>Key Features</h3>
                            <ul className="feature-list">
                                {project.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    {/* Right Column: Technical Details */}
                    <div className="docs-sidebar">
                        <section className="doc-section">
                            <h3>Core Algorithms</h3>
                            <div className="algo-list">
                                {project.algorithms.map((algo, index) => (
                                    <div key={index} className="algo-item">
                                        <h4>{algo.title}</h4>
                                        <p>{algo.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="doc-section">
                            <h3>Technology Stack</h3>
                            <div className="tech-list-detailed">
                                {project.stack.map((tech, index) => (
                                    <div key={index} className="tech-item-detailed">
                                        <span className="tech-name">{tech.name}</span>
                                        <span className="tech-reason">{tech.reason}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            {/* Transition Overlay */}
            {isTransitioning && (
                <div className="transition-overlay">
                    <div className="terminal-loader">
                        <div className="loader-text">INITIALIZING SESSION...</div>
                        <div className="loader-bar-simple"></div>
                    </div>
                </div>
            )}

            {/* Live Preview Modal */}
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="close-modal-btn" onClick={() => setIsModalOpen(false)}>
                            Close Session
                        </button>
                        <div className="iframe-wrapper modal-iframe">
                            <iframe
                                src={project.url}
                                title={project.title}
                                className="project-iframe"
                                allow="geolocation; microphone; camera"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectPage;
