import React, { useState } from 'react';
import './SkillBadges.css';
import mongo1 from '../assets/mongo1.png';
import mongo2 from '../assets/mongo2.png';
import mongo3 from '../assets/mongo3.png';
import mongo4 from '../assets/mongo4.png';
import mongo5 from '../assets/mongo5.png';
import ciscologo from '../assets/cisco.png';
import cisco1 from '../assets/cisco-basics.png';

// Data Structure
const skillBadgesData = [
    {
        id: 'aws',
        name: 'AWS',
        logo: 'https://img.icons8.com/color/144/amazon-web-services.png',
        badges: [
            {
                id: 'aws-cloud-quest',
                name: 'AWS Cloud Quest: Cloud Practitioner',
                image: 'https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png', // Placeholder
                skills: ['Cloud Computing', 'AWS Services', 'Security', 'Architecture'],
                link: '#'
            },
            {
                id: 'aws-educate',
                name: 'AWS Educate Introduction to Cloud 101',
                image: 'https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png', // Placeholder
                skills: ['Cloud Basics', 'Compute', 'Storage', 'Networking'],
                link: '#'
            }
        ]
    },
    {
        id: 'google',
        name: 'Google Cloud',
        logo: 'https://img.icons8.com/color/144/google-cloud.png',
        badges: [
            {
                id: 'google-cloud-essentials',
                name: 'Google Cloud Essentials',
                image: 'https://cdn.qwiklabs.com/badge-images/google-cloud-essentials.png', // Placeholder
                skills: ['GCP', 'Compute Engine', 'Cloud Shell'],
                link: '#'
            }
        ]
    },
    {
        id: 'cisco',
        name: 'Cisco',
        logo: ciscologo,
        badges: [
            {
                id: 'cisco-netacad',
                name: 'Operating Systems Basics',
                image: cisco1, // Placeholder
                skills: ['Linux', 'Operating System Security', 'Windows','Android','IOS'],
                link: 'https://www.credly.com/badges/9ac41825-8f11-441e-93f5-4b41948b39e4/public_url'
            }
        ]
    },
    {
        id: 'mongodb',
        name: 'MongoDB',
        logo: 'https://img.icons8.com/color/144/mongodb.png',
        badges: [
            {
                id: 'mongodb-documentmodel',
                name: 'From Relational Model (SQL) to MongoDB Document Model',
                image: mongo1, // Placeholder
                skills: ['Database Schemas', 'Database Architecture', 'Data Validation'],
                link: 'https://www.credly.com/badges/363e5ddd-97e3-450f-873e-72d9d574bffd/public_url'
            },
             {
                id: 'mongodb-operations',
                name: 'CRUD Operations in MongoDB',
                image: mongo2, // Placeholder
                skills: ['Database Queries', 'Query Optimization', 'CRUD'],
                link: 'https://www.credly.com/badges/8792e032-a78b-46f4-833c-3fd460ab475d/public_url'
            },
             {
                id: 'mongodb-rag',
                name: 'Building RAG Apps Using MongoDB',
                image: mongo3, // Placeholder
                skills: ['GenAI', 'RAG'],
                link: 'https://www.credly.com/badges/7f5cdef8-0ed2-4d6e-9b71-e0854b72f024/public_url'
            },
             {
                id: 'mongodb-sharding',
                name: 'MongoDB Sharding Strategies',
                image: mongo4, // Placeholder
                skills: ['Data Managements', 'Sharding','Scalability'],
                link: 'https://www.credly.com/badges/4d65513c-7961-44dd-a705-3408aa66a177/public_url'
            },
            {
                id: 'mongodb-agents',
                name: 'Building AI Agents with MongoDB',
                image: mongo5, // Placeholder
                skills: ['AutoAI', 'Decision Analysis','AI Agents'],
                link: 'https://www.credly.com/badges/aa94db62-765f-4c6c-acaa-9950f1239158/public_url'
            }




        ]
    },
    {
        id: 'postman',
        name: 'Postman',
        logo: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/144/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png',
        badges: [
            {
                id: 'postman-student',
                name: 'Postman Student Expert',
                image: 'https://voyager.postman.com/logo/postman-logo-icon-orange.svg', // Placeholder
                skills: ['API Testing', 'Automation', 'Documentation'],
                link: '#'
            }
        ]
    }
];

const SkillBadges = () => {
    const [selectedIssuer, setSelectedIssuer] = useState(null);
    const [selectedBadge, setSelectedBadge] = useState(null);

    const handleIssuerClick = (issuer) => {
        setSelectedIssuer(issuer);
        setSelectedBadge(null); // Reset badge selection
    };

    const handleBadgeClick = (badge) => {
        setSelectedBadge(badge);
    };

    const closeIssuerModal = () => {
        setSelectedIssuer(null);
        setSelectedBadge(null);
    };

    const closeBadgeDetail = (e) => {
        e.stopPropagation();
        setSelectedBadge(null);
    };

    return (
        <section className="skill-badges-section" id="badges">
            <div className="skill-badges-container">
                <div className="section-header">
                    <h2 className="section-title">Skill Badges</h2>
                    <p className="section-subtitle">Recognitions from Industry Leaders</p>
                </div>

                {/* Issuers Grid */}
                <div className="issuers-grid">
                    {skillBadgesData.map(issuer => (
                        <div
                            key={issuer.id}
                            className="issuer-card"
                            onClick={() => handleIssuerClick(issuer)}
                        >
                            <div className="issuer-logo-wrapper">
                                <img src={issuer.logo} alt={issuer.name} className="issuer-logo" />
                            </div>
                            <h3 className="issuer-name">{issuer.name}</h3>
                            <span className="badge-count">{issuer.badges.length} Badges</span>
                        </div>
                    ))}

                    {/* Unique Gap Filler: Stats Widget */}
                    <div className="stats-widget">
                        <div className="stat-content">
                            <div className="stat-item">
                                <CountUp end={5} duration={2000} suffix="+" />
                                <span className="stat-label">Issuers</span>
                            </div>
                            <div className="stat-divider-vertical"></div>
                            <div className="stat-item">
                                <CountUp end={15} duration={2500} suffix="+" />
                                <span className="stat-label">Skills Verified</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Issuer Modal */}
            {selectedIssuer && (
                <div className="badge-modal-overlay" onClick={closeIssuerModal}>
                    <div className="badge-modal-content" onClick={e => e.stopPropagation()}>
                        <button className="modal-close-btn" onClick={closeIssuerModal}>×</button>

                        <div className="modal-header">
                            <img src={selectedIssuer.logo} alt={selectedIssuer.name} className="modal-issuer-logo" />
                            <div>
                                <h3 className="modal-title">{selectedIssuer.name} Badges</h3>
                                <p className="modal-subtitle">Select a badge to view details</p>
                            </div>
                        </div>

                        <div className="modal-body">
                            {/* List of Badges */}
                            <div className={`badges-list ${selectedBadge ? 'shrunk' : ''}`}>
                                {selectedIssuer.badges.map(badge => (
                                    <div
                                        key={badge.id}
                                        className={`modal-badge-item ${selectedBadge?.id === badge.id ? 'active' : ''}`}
                                        onClick={() => handleBadgeClick(badge)}
                                    >
                                        <div className="modal-badge-icon">
                                            {/* Using issuer logo as fallback if badge image is generic */}
                                            <img src={badge.image || selectedIssuer.logo} alt={badge.name} />
                                        </div>
                                        <span className="modal-badge-name">{badge.name}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Badge Details Panel (Visible when a badge is selected) */}
                            {selectedBadge && (
                                <div className="badge-detail-panel">
                                    <button className="detail-close-btn" onClick={closeBadgeDetail}>← Back</button>
                                    <div className="detail-content">
                                        <div className="detail-image-wrapper">
                                            <img src={selectedBadge.image || selectedIssuer.logo} alt={selectedBadge.name} />
                                        </div>
                                        <h4 className="detail-title">{selectedBadge.name}</h4>

                                        <div className="detail-skills">
                                            <h5>Skills Earned:</h5>
                                            <div className="skills-tags">
                                                {selectedBadge.skills.map((skill, index) => (
                                                    <span key={index} className="skill-tag">{skill}</span>
                                                ))}
                                            </div>
                                        </div>

                                        <a href={selectedBadge.link} target="_blank" rel="noopener noreferrer" className="detail-verify-btn">
                                            Verify Badge
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                <polyline points="15 3 21 3 21 9" />
                                                <line x1="10" y1="14" x2="21" y2="3" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

// Simple CountUp Component
const CountUp = ({ end, duration, suffix = '' }) => {
    const [count, setCount] = useState(0);

    React.useEffect(() => {
        let startTime = null;
        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = currentTime - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Ease out quart
            const ease = 1 - Math.pow(1 - percentage, 4);

            setCount(Math.floor(ease * end));

            if (progress < duration) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }, [end, duration]);

    return <span className="stat-number">{count}{suffix}</span>;
};

export default SkillBadges;
