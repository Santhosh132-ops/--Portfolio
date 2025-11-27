import React, { useState, useRef } from 'react';
import './Achievements.css';
import awsCert from '../assets/aws-cert.png';
import ociCert from '../assets/oracle-cert.jpg';

const certificationsData = [
    {
        id: 1,
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        icon: <img src="https://img.icons8.com/?size=100&id=wU62u24brJ44&format=png&color=000000" alt="AWS" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />,
        year: "2025",
        credentialId: "AWS05265502",
        certLink: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
        certificateImage: awsCert
    },
    {
        id: 2,
        title: "OCI Certified Architect Associate",
        issuer: "Oracle Corporation",
        icon: <img src="https://img.icons8.com/?size=100&id=39913&format=png&color=000000" alt="Oracle" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />,
        year: "2025",
        credentialId: "-",
        certLink: "https://education.oracle.com/oracle-cloud-infrastructure-2024-architect-associate/pexam_1Z0-1072-24",
        certificateImage: ociCert
    }
];

const Achievements = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedCert, setSelectedCert] = useState(null);

    const scrollToIndex = (index) => {
        setCurrentIndex(index);
    };

    const nextCert = () => {
        const newIndex = (currentIndex + 1) % certificationsData.length;
        scrollToIndex(newIndex);
    };

    const prevCert = () => {
        const newIndex = (currentIndex - 1 + certificationsData.length) % certificationsData.length;
        scrollToIndex(newIndex);
    };

    return (
        <section className="achievements-section" id="achievements">
            <div className="achievements-container">
                {/* Header */}
                <div className="section-header">
                    <h2 className="section-title">Certifications</h2>
                </div>

                {/* Desktop: Horizontal Scroll with Arrows */}
                <div className="certs-carousel-wrapper">
                    {/* Navigation Arrows */}
                    <button className="cert-nav-btn prev" onClick={prevCert} aria-label="Previous">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>

                    {/* Scrollable Container */}
                    <div className="plates-scroll-container">
                        <div className="plates-grid" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {certificationsData.map((cert, index) => (
                                <div
                                    key={cert.id}
                                    className="iron-plate-container"
                                >
                                    {/* Iron Plate */}
                                    <div className="iron-plate">
                                        {/* Company Logo */}
                                        <div className="cert-logo">{cert.icon}</div>

                                        {/* Certificate Title */}
                                        <h3 className="cert-title">{cert.title}</h3>
                                        <p className="cert-org">{cert.issuer}</p>

                                        {/* Action Buttons */}
                                        <div className="cert-actions">
                                            <button
                                                className="preview-button"
                                                onClick={() => setSelectedCert(cert)}
                                            >
                                                Preview Certificate
                                            </button>
                                            <a
                                                href={cert.certLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="verify-button"
                                            >
                                                Verify
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                    <polyline points="15 3 21 3 21 9" />
                                                    <line x1="10" y1="14" x2="21" y2="3" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className="cert-nav-btn next" onClick={nextCert} aria-label="Next">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                </div>

                {/* Indicator Dots */}
                <div className="cert-indicators">
                    {certificationsData.map((cert, index) => (
                        <div
                            key={cert.id}
                            className={`cert-dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => scrollToIndex(index)}
                        />
                    ))}
                </div>
            </div>

            {/* Preview Modal */}
            {selectedCert && (
                <div className="cert-modal-overlay" onClick={() => setSelectedCert(null)}>
                    <div className="cert-modal-content" onClick={e => e.stopPropagation()}>
                        <button className="cert-modal-close" onClick={() => setSelectedCert(null)}>×</button>
                        <h3 className="cert-modal-title">{selectedCert.title}</h3>
                        <div className="cert-modal-preview">
                            {selectedCert.certificateImage ? (
                                <img
                                    src={selectedCert.certificateImage}
                                    alt={`${selectedCert.title} Certificate`}
                                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                />
                            ) : (
                                <div className="cert-placeholder-image">
                                    <span>Certificate Preview</span>
                                    <div className="cert-watermark">{selectedCert.issuer}</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Achievements;
