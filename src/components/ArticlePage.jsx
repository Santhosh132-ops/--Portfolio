import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import NotFound from './NotFound';
import './ArticlePage.css';

const ArticlePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState('');
    const [liked, setLiked] = useState(false);
    const contentRef = useRef(null);

    // Placeholder content
    const articleContent = {
        "building-scalable-apis-with-node-js": {
            title: "Building Scalable APIs with Node.js",
            subtitle: "Mastering the Art of High-Performance Backend Systems",
            date: "December 1, 2025",
            readTime: "15 min read",
            author: "Santhosh",
            tags: ["Node.js", "Backend", "Scalability", "Microservices"],
            toc: [
                { id: "intro", title: "Introduction" },
                { id: "why-node", title: "Why Node.js?" },
                { id: "event-loop", title: "The Event Loop" },
                { id: "clustering", title: "Clustering" },
                { id: "caching", title: "Caching with Redis" },
                { id: "load-balancing", title: "Load Balancing" },
                { id: "db-optimization", title: "DB Optimization" },
                { id: "security", title: "Security Best Practices" },
                { id: "monitoring", title: "Monitoring & Logging" },
                { id: "testing", title: "Testing Strategies" },
                { id: "conclusion", title: "Conclusion" }
            ],
            content: (
                <>
                    <section id="intro">
                        <p className="lead-paragraph">
                            Node.js has revolutionized the way we build network applications.
                            Its event-driven, non-blocking I/O model isn't just a feature—it's a paradigm shift
                            that enables lightweight, efficient, and real-time applications across distributed devices.
                        </p>
                    </section>

                    <section id="why-node">
                        <h2>Why Node.js for Scalability?</h2>
                        <p>
                            Scalability isn't just about handling more users; it's about handling them <em>efficiently</em>.
                            Node.js excels here due to its unique architecture:
                        </p>
                        <div className="feature-grid">
                            <div className="feature-item">
                                <h3>Non-blocking I/O</h3>
                                <p>Handle thousands of concurrent connections without thread context switching overhead.</p>
                            </div>
                            <div className="feature-item">
                                <h3>Event Loop</h3>
                                <p>A single-threaded loop that orchestrates asynchronous operations with incredible speed.</p>
                            </div>
                            <div className="feature-item">
                                <h3>Microservices Ready</h3>
                                <p>Lightweight runtime makes it perfect for containerized, distributed architectures.</p>
                            </div>
                        </div>
                    </section>

                    <section id="event-loop">
                        <h2>The Event Loop: The Heart of Node.js</h2>
                        <p>
                            At its core, Node.js runs on a single thread. This sounds like a limitation, but it's actually a superpower for handling thousands of concurrent connections.
                        </p>
                        <div className="code-block">
                            <pre>
                                {`// Traditional Threaded Model (Pseudo-code)
thread1 = new Thread(() => {
  data = db.query("SELECT * FROM users"); // Blocks here!
  print(data);
});

// Node.js Non-Blocking Model
db.query("SELECT * FROM users", (err, data) => {
  if (err) throw err;
  console.log(data); // Runs only when data is ready
});
console.log("I run immediately!");`}
                            </pre>
                            <div className="code-label">blocking_vs_nonblocking.js</div>
                        </div>
                    </section>

                    <section id="clustering">
                        <h2>1. Clustering & Process Management</h2>
                        <p>
                            Since Node.js runs on a single thread, it limits you to one CPU core.
                            The <code>cluster</code> module allows you to fork the main process, enabling load distribution across all available cores.
                        </p>
                        <div className="code-block">
                            <pre>
                                {`const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello World');
  }).listen(8000);
}`}
                            </pre>
                            <div className="code-label">server.js</div>
                        </div>
                    </section>

                    <section id="caching">
                        <h2>2. Caching Strategies</h2>
                        <p>
                            The fastest request is the one you don't have to process. Implementing <strong>Redis</strong>
                            for caching frequently accessed data can reduce database load by up to 80%.
                        </p>
                    </section>

                    <section id="load-balancing">
                        <h2>3. Load Balancing with Nginx</h2>
                        <p>
                            When one server isn't enough, you add more servers. But how does the user know which server to talk to?
                            Enter the <strong>Load Balancer</strong>.
                        </p>
                        <div className="code-block">
                            <pre>
                                {`upstream node_app {
    server 127.0.0.1:3000;
    server 127.0.0.1:3001;
    server 127.0.0.1:3002;
}

server {
    listen 80;
    location / {
        proxy_pass http://node_app;
    }
}`}
                            </pre>
                            <div className="code-label">nginx.conf</div>
                        </div>
                    </section>

                    <section id="db-optimization">
                        <h2>4. Database Optimization</h2>
                        <p>
                            Your API is often only as fast as your database. Here are quick wins:
                        </p>
                        <ul>
                            <li><strong>Indexing:</strong> Ensure fields you query often (like `email` or `username`) are indexed.</li>
                            <li><strong>Projections:</strong> Don't fetch `SELECT *`. Only fetch the fields you need.</li>
                            <li><strong>Connection Pooling:</strong> Keep a pool of open connections ready to go.</li>
                        </ul>
                    </section>

                    <section id="security">
                        <h2>5. Security Best Practices</h2>
                        <p>
                            Security should never be an afterthought. Here are essential practices for Node.js APIs:
                        </p>
                        <ul>
                            <li><strong>Rate Limiting:</strong> Use `express-rate-limit` to prevent DDoS attacks and brute-force attempts.</li>
                            <li><strong>Helmet:</strong> Use `helmet` middleware to set secure HTTP headers.</li>
                            <li><strong>Input Validation:</strong> Never trust user input. Use libraries like `Joi` or `Zod` to validate request data.</li>
                            <li><strong>Sanitization:</strong> Prevent SQL Injection and XSS by sanitizing inputs.</li>
                        </ul>
                    </section>

                    <section id="monitoring">
                        <h2>6. Monitoring & Logging</h2>
                        <p>
                            You can't fix what you can't see. Implement robust monitoring:
                        </p>
                        <ul>
                            <li><strong>PM2:</strong> Use PM2 for process management and basic monitoring.</li>
                            <li><strong>APM Tools:</strong> Integrate New Relic or Datadog for deep performance insights.</li>
                            <li><strong>Structured Logging:</strong> Use `winston` or `pino` to create logs that are easy to parse and query.</li>
                        </ul>
                    </section>

                    <section id="testing">
                        <h2>7. Testing Strategies</h2>
                        <p>
                            Reliable scaling requires reliable code.
                        </p>
                        <ul>
                            <li><strong>Unit Testing:</strong> Test individual functions with Jest or Mocha.</li>
                            <li><strong>Integration Testing:</strong> Verify that your API endpoints work correctly with the database.</li>
                            <li><strong>Load Testing:</strong> Use tools like Artillery or k6 to simulate high traffic and find bottlenecks before your users do.</li>
                        </ul>
                    </section>

                    <section id="conclusion">
                        <h2>Conclusion</h2>
                        <p>
                            Building scalable APIs is an architectural journey. Node.js provides the high-performance foundation,
                            but true scalability comes from thoughtful implementation of clustering, load balancing, caching, and robust security practices.
                        </p>
                    </section>
                </>
            )
        }
    };

    const article = articleContent[id];

    useEffect(() => {
        const contentElement = contentRef.current;
        if (!contentElement) return;

        const handleScroll = () => {
            // Active section detection
            const sections = document.querySelectorAll('section[id]');
            let current = '';
            sections.forEach(section => {
                // Since .docs-content is relative, offsetTop is relative to it
                const sectionTop = section.offsetTop;
                // Add a small buffer for better UX
                if (contentElement.scrollTop >= sectionTop - 150) {
                    current = section.getAttribute('id');
                }
            });
            if (current) {
                setActiveSection(current);
            }
        };

        contentElement.addEventListener('scroll', handleScroll);
        // Trigger once to set initial state
        handleScroll();

        return () => contentElement.removeEventListener('scroll', handleScroll);
    }, [id]); // Re-run if ID changes

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        const contentElement = contentRef.current;
        if (element && contentElement) {
            // Calculate position relative to the scroll container
            const topPos = element.offsetTop - 40; // 40px padding/buffer
            contentElement.scrollTo({
                top: topPos,
                behavior: 'smooth'
            });
        }
    };

    if (!article) {
        return (
            <NotFound
                title="BUILDING..."
                mainText="SOON"
                subtitle="This content is currently under construction."
                buttonText="RETURN HOME"
                customLogs={[
                    { text: "> Initializing build process...", delay: 500 },
                    { text: "> Fetching draft content...", delay: 1200 },
                    { text: "> Compiling chapters...", delay: 2000 },
                    { text: "> Optimizing assets...", delay: 2800 },
                    { text: "> Status: Work in Progress (85%)", delay: 3500, color: '#ffa502' },
                    { text: "> Waiting for final review...", delay: 4500 }
                ]}
            />
        );
    }

    return (
        <div className="article-page-wrapper">
            {/* Animated Back Button */}
            <Link to="/" className="floating-back-btn" aria-label="Go Back">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
            </Link>

            <div className="docs-layout">
                {/* Left Sidebar - Navigation */}
                <aside className="docs-sidebar-left">
                    <div className="sidebar-content">
                        <h3>Articles</h3>
                        <ul className="sidebar-nav">
                            {[
                                { id: 'building-scalable-apis-with-node-js', title: 'Building Scalable APIs' },
                                { id: 'microservices-with-docker', title: 'Microservices with Docker' },
                                { id: 'kafka-golang', title: 'Kafka + Golang' },
                                { id: 'advanced-react-patterns', title: 'Advanced React Patterns' }
                            ].map((item) => (
                                <li key={item.id} className={id === item.id ? 'active' : ''}>
                                    <Link to={`/article/${item.id}`} className="sidebar-link">
                                        <span className="nav-icon">📄</span>
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="sidebar-divider"></div>

                        <h3>Resources</h3>
                        <ul className="sidebar-nav">
                            <li><a href="https://nodejs.org" target="_blank" rel="noreferrer">Node.js Docs ↗</a></li>
                            <li><a href="https://redis.io" target="_blank" rel="noreferrer">Redis Docs ↗</a></li>
                        </ul>
                    </div>
                </aside>

                {/* Center - Main Content */}
                <main className="docs-content" ref={contentRef}>
                    <header className="content-header">
                        <div className="article-tags">
                            {article.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                        </div>
                        <h1 className="article-title">{article.title}</h1>
                        <p className="article-subtitle">{article.subtitle}</p>

                        <div className="article-meta">
                            <div className="author-info">
                                <div className="author-avatar">{article.author[0]}</div>
                                <div>
                                    <span className="author-name">{article.author}</span>
                                    <span className="publish-date">{article.date}</span>
                                </div>
                            </div>
                            <span className="read-time">{article.readTime}</span>
                        </div>
                    </header>

                    <div className="article-body">
                        {article.content}
                    </div>

                    <footer className="article-footer">
                        <div className="interaction-bar">
                            <button
                                className={`like-button ${liked ? 'liked' : ''}`}
                                onClick={() => setLiked(!liked)}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill={liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                                <span>{liked ? 'Helpful' : 'Mark as Helpful'}</span>
                            </button>
                        </div>
                    </footer>
                </main>

                {/* Right Sidebar - Table of Contents */}
                <aside className="docs-sidebar-right">
                    <div className="toc-container">
                        <h3>On this page</h3>
                        <ul className="toc-list">
                            {article.toc.map(item => (
                                <li key={item.id} className={activeSection === item.id ? 'active' : ''}>
                                    <a
                                        href={`#${item.id}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection(item.id);
                                        }}
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
            </div>
        </div >
    );
};

export default ArticlePage;
