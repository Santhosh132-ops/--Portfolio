import React from 'react';
import './Projects.css'; // Reusing styles for consistency

const Certifications = () => {
    return (
        <section className="projects-section" id="certifications">
            <div className="projects-container">
                <div className="projects-header">
                    <h2 className="projects-title">Certifications</h2>
                </div>
                <div className="projects-grid">
                    <div className="project-card" style={{ cursor: 'default' }}>
                        <div className="project-content">
                            <h3 className="project-name">AWS Certified Solutions Architect</h3>
                            <p className="project-description">Validated expertise in designing distributed systems on AWS.</p>
                        </div>
                    </div>
                    <div className="project-card" style={{ cursor: 'default' }}>
                        <div className="project-content">
                            <h3 className="project-name">Certified Kubernetes Administrator (CKA)</h3>
                            <p className="project-description">Demonstrated competence in Kubernetes administration and management.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
