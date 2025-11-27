import React from 'react';
import './Projects.css';

const projects = [
    {
        id: 1,
        title: 'Real-Time Cab Tracker',
        description: 'A high-performance distributed system simulating real-time cab tracking using Kafka, AWS, and WebSockets. Handles thousands of concurrent location updates with sub-second latency.',
        image: 'https://img.freepik.com/free-vector/taxi-app-concept-illustration_52683-36028.jpg', // Placeholder map/tech image
        link: '#',
        tags: ['Kafka', 'AWS', 'Redis', 'Node.js']
    },
    {
        id: 2,
        title: 'Cloud Native Pipeline',
        description: 'Automated CI/CD pipeline generator for microservices. Features automated containerization, security scanning, and multi-cluster deployment strategies using ArgoCD.',
        image: 'https://media.istockphoto.com/id/1398516315/vector/devsecops-concept-integration-of-security-testing-throughout-the-development-and-operations.jpg?s=612x612&w=0&k=20&c=JV-bF57yE-lCmEWVBEgchwDJ_ciSO_VKpBxwx0i94z4=', // Placeholder cloud/tech image
        link: '#',
        tags: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform']
    }
];

const Projects = () => {
    return (
        <section className="projects-section" id="projects">
            <div className="projects-container">
                <div className="projects-header">
                    <h2 className="projects-title">Projects</h2>
                    <a href="#all-projects" className="view-all-link">
                        View all <span className="arrow">↗</span>
                    </a>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="project-card"
                            style={{ '--card-index': index }}
                        >
                            <div className="project-image-wrapper">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-image"
                                    loading="lazy"
                                />
                                <div className="project-overlay">
                                    <div className="project-tags">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="project-tag">{tag}</span>
                                        ))}
                                    </div>
                                    <a
                                        href={project.link}
                                        className="explore-btn"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        Explore <span className="arrow">↗</span>
                                    </a>
                                </div>
                            </div>
                            <div className="project-content">
                                <div className="project-title-row">
                                    <h3 className="project-name">{project.title}</h3>
                                </div>
                                <p className="project-description">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
