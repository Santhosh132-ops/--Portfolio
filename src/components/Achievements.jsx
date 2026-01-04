import React, { useState } from 'react';
import './Achievements.css';
import awsCert from '../assets/aws-cert.png';
import ociCert from '../assets/oracle-cert.jpg';

const certificationsData = [
    {
        id: 1,
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        year: "2025",
        credentialId: "AWS05265502",
        certLink: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
        certificateImage: awsCert,
        color: "#06b6d4",
        skills: ["AWS Services", "Security & Compliance", "Cloud Architecture", "Cost Optimization"],
        certificateLink: awsCert
    },
    {
        id: 2,
        title: "OCI Certified Architect Associate",
        issuer: "Oracle Corporation",
        year: "2025",
        credentialId: "102741405OCI25CAA",
        certLink: "https://education.oracle.com/oracle-cloud-infrastructure-2024-architect-associate/pexam_1Z0-1072-24",
        certificateImage: ociCert,
        color: "#0891b2",
        skills: ["OCI Architecture", "Networking", "Security", "Database Services"],
        certificateLink: ociCert
    }
];

const Achievements = () => {
    const [hoveredCert, setHoveredCert] = useState(null);
    const [selectedCert, setSelectedCert] = useState(null);

    return (
        <section className="achievements-section" id="achievements">
            <div className="achievements-container">
                {/* Header */}
                <div className="section-header">
                    <h2 className="section-title">Certifications</h2>
                    <div className="title-underline"></div>
                </div>

                {/* Certifications Grid */}
                <div className="certs-grid">
                    {certificationsData.map((cert) => (
                        <div
                            key={cert.id}
                            className={`cert-item ${hoveredCert === cert.id ? 'hovered' : ''}`}
                            onMouseEnter={() => setHoveredCert(cert.id)}
                            onMouseLeave={() => setHoveredCert(null)}
                        >
                            {/* Left: Certificate Preview */}
                            <div className="cert-preview">
                                <div className="preview-overlay" style={{ background: `linear-gradient(135deg, ${cert.color}20 0%, transparent 100%)` }}></div>
                                <img src={cert.certificateImage} alt={cert.title} />
                                <div className="preview-badge" style={{ borderColor: cert.color, color: cert.color }}>
                                    {cert.year}
                                </div>
                            </div>

                            {/* Right: Info Panel */}
                            <div className="cert-details">
                                <div className="cert-header">
                                    <h3 className="cert-name">{cert.title}</h3>
                                    <p className="cert-issuer">{cert.issuer}</p>
                                </div>

                                <div className="cert-credential">
                                    <span className="credential-label">Credential ID</span>
                                    <span className="credential-code">{cert.credentialId}</span>
                                </div>

                                <div className="cert-skills">
                                    <span className="skills-label">Skills Validated</span>
                                    <div className="skills-tags">
                                        {cert.skills.map((skill, idx) => (
                                            <span
                                                key={idx}
                                                className="skill-badge"
                                                style={{ borderColor: cert.color }}
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    onClick={() => setSelectedCert(cert)}
                                    className="cert-link-full"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                        <polyline points="14 2 14 8 20 8" />
                                        <line x1="16" y1="13" x2="8" y2="13" />
                                        <line x1="16" y1="17" x2="8" y2="17" />
                                        <polyline points="10 9 9 9 8 9" />
                                    </svg>
                                    <span>View Certificate</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Certificate Modal */}
            {selectedCert && (
                <div className="cert-modal-overlay" onClick={() => setSelectedCert(null)}>
                    <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="cert-modal-back" onClick={() => setSelectedCert(null)}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                            <span>Back</span>
                        </button>
                        <h3 className="cert-modal-title">{selectedCert.title}</h3>
                        <div className="cert-modal-image">
                            <img src={selectedCert.certificateImage} alt={selectedCert.title} />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Achievements;
