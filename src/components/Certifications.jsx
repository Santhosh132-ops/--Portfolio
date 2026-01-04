import React, { useState } from 'react';
import './Certifications.css';

const Certifications = () => {
    const [activeCard, setActiveCard] = useState(null);

    const certifications = [
        {
            id: 1,
            title: "AWS Certified Cloud Practitioner",
            issuer: "Amazon Web Services",
            date: "2024",
            logo: "☁️",
            color: "#FF9900",
            gradient: "linear-gradient(135deg, #FF9900 0%, #FF6B00 100%)",
            skills: ["Cloud Computing", "AWS Services", "Security", "Billing"],
            credentialId: "AWS-CCP-2024",
            verifyUrl: "#"
        },
        {
            id: 2,
            title: "Certified Kubernetes Administrator",
            issuer: "Cloud Native Computing Foundation",
            date: "2024",
            logo: "⎈",
            color: "#326CE5",
            gradient: "linear-gradient(135deg, #326CE5 0%, #1A4D9F 100%)",
            skills: ["Container Orchestration", "K8s Architecture", "Deployment", "Networking"],
            credentialId: "CKA-2024",
            verifyUrl: "#"
        },
        {
            id: 3,
            title: "Docker Certified Associate",
            issuer: "Docker Inc.",
            date: "2023",
            logo: "🐳",
            color: "#2496ED",
            gradient: "linear-gradient(135deg, #2496ED 0%, #0B76D1 100%)",
            skills: ["Containerization", "Docker Compose", "Swarm", "Security"],
            credentialId: "DCA-2023",
            verifyUrl: "#"
        }
    ];

    return (
        <section className="certifications-section" id="certifications">
            <div className="certifications-container">
                <div className="certifications-header">
                    <h2 className="certifications-title">Certifications</h2>
                    <p className="certifications-subtitle">Professional credentials and achievements</p>
                </div>

                <div className="certifications-grid">
                    {certifications.map((cert) => (
                        <div
                            key={cert.id}
                            className={`cert-card ${activeCard === cert.id ? 'active' : ''}`}
                            onMouseEnter={() => setActiveCard(cert.id)}
                            onMouseLeave={() => setActiveCard(null)}
                        >
                            <div className="cert-card-inner">
                                {/* Front of card */}
                                <div className="cert-front">
                                    <div className="cert-badge" style={{ background: cert.gradient }}>
                                        <span className="cert-logo">{cert.logo}</span>
                                    </div>

                                    <div className="cert-content">
                                        <h3 className="cert-title">{cert.title}</h3>
                                        <p className="cert-issuer">{cert.issuer}</p>
                                        <p className="cert-date">{cert.date}</p>
                                    </div>

                                    <div className="cert-shine"></div>
                                </div>

                                {/* Back of card - shows on hover */}
                                <div className="cert-back">
                                    <div className="cert-back-content">
                                        <h4 className="cert-back-title">Skills Validated</h4>
                                        <div className="cert-skills">
                                            {cert.skills.map((skill, index) => (
                                                <span key={index} className="cert-skill-tag" style={{ borderColor: cert.color }}>
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="cert-credential">
                                            <p className="credential-label">Credential ID</p>
                                            <p className="credential-id">{cert.credentialId}</p>
                                        </div>

                                        <a href={cert.verifyUrl} className="cert-verify-btn" style={{ background: cert.gradient }}>
                                            Verify Certificate
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
