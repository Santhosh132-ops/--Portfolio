import { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
    const [mounted, setMounted] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(1); // Start with the middle article

    useEffect(() => {
        setMounted(true);
    }, []);

    const articles = [
        {
            title: "Microservices with Docker & K8s",
            description: "A comprehensive guide to containerizing applications and orchestrating them with Kubernetes.",
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop"
        },
        {
            title: "The simplest example is kafka + golang",
            description: "This article presents a simple way to implement a micro-service architecture using Kafka, Golang and Docker.",
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop"
        },
        {
            title: "Building scalable APIs with Node.js",
            description: "A deep dive into creating high-performance RESTful APIs using Node.js, Express, and MongoDB.",
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop"
        },
        {
            title: "Advanced React Patterns",
            description: "Exploring higher-order components, render props, and custom hooks for cleaner code.",
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop"
        },
        {
            title: "Cloud Native Architecture",
            description: "Designing systems that are resilient, manageable, and observable in modern cloud environments.",
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop"
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + articles.length) % articles.length);
    };

    // Calculate indices for the 3 visible cards
    const getCardIndex = (offset) => {
        return (currentIndex + offset + articles.length) % articles.length;
    };

    const prevArticle = articles[getCardIndex(-1)];
    const currentArticle = articles[getCardIndex(0)];
    const nextArticle = articles[getCardIndex(1)];

    return (
        <div className="page-wrapper">


            <section className="hero" id="home">
                <div className="container hero-container">

                    {/* Top Headline Row */}
                    <div className="headline-row">
                        <h1 className="headline-left">Backend</h1>

                        <div className="hero-cta-group">
                            <a href="https://github.com/Santhosh132-ops" target="_blank" rel="noopener noreferrer" className="cta-icon-btn" aria-label="Github">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            </a>
                            <a href="#projects" className="cta-pill">
                                <em>Projects</em>
                            </a>
                            <button className="cta-arrow">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Bottom Headline Row */}
                    <div className="headline-row bottom">
                        <div className="hero-description-block">
                            <p>
                                Architecting <em>scalable backends</em> and
                                <em> resilient cloud infrastructure.</em> I build high-performance distributed systems and automate deployment pipelines to ensure reliability and speed.
                            </p>
                        </div>
                        <h1 className="headline-right">Cloud & DevOps</h1>
                    </div>

                    {/* Featured Cards / Carousel - Animated */}
                    <div className="cards-section">
                        <div className="card-container">
                            {articles.map((article, index) => {
                                let position = 'hidden';
                                if (index === currentIndex) position = 'active';
                                else if (index === (currentIndex - 1 + articles.length) % articles.length) position = 'prev';
                                else if (index === (currentIndex + 1) % articles.length) position = 'next';

                                return (
                                    <div
                                        key={index}
                                        className={`feature-card ${position}-card`}
                                        onClick={() => {
                                            if (position === 'prev') prevSlide();
                                            if (position === 'next') nextSlide();
                                        }}
                                    >
                                        <div className="card-visual">
                                            <img src={article.image} alt="Abstract 3D" />
                                            {position !== 'active' && <div className="card-overlay"></div>}
                                        </div>
                                        <div className="card-content">
                                            <h3>{article.title}</h3>
                                            <p>{article.description}</p>
                                            <div className="card-actions">
                                                {position === 'active' ? (
                                                    <>
                                                        <button className="read-more-pill">Read more</button>
                                                        <button className="card-arrow-small">
                                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                                            </svg>
                                                        </button>
                                                    </>
                                                ) : (
                                                    <button className="read-more-pill-outline">Read more</button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Navigation Arrows Overlay - Positioned over side cards */}
                        <div className="carousel-nav">
                            <button className="nav-btn prev" onClick={prevSlide}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M19 12H5M12 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button className="nav-btn next" onClick={nextSlide}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Hero;
