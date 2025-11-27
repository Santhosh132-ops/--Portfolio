import React from 'react';
import './Contact.css';

const Contacts = () => {
    return (
        <section className="contact-section" id="contacts">
            <div className="contact-container">
                {/* Left Side - Form */}
                <div className="contact-form-wrapper">
                    <h2 className="contact-title">Send me a message</h2>
                    <p className="contact-subtitle">
                        Have a specific project in mind or just want to say hello?
                        Fill out the form below and I'll get back to you shortly!
                    </p>

                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" id="firstName" className="form-input" placeholder="Enter your first name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" id="lastName" className="form-input" placeholder="Enter your last name" />
                            </div>
                        </div>

                        <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" className="form-input" placeholder="Enter your email address" />
                        </div>

                        <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" className="form-textarea" placeholder="Enter your message"></textarea>
                        </div>

                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>

                {/* Right Side - Info Card */}
                <div className="contact-info-wrapper">
                    <div>
                        <h3 className="info-title">
                            Hi there! I'm always open to discussing new projects and opportunities.
                        </h3>

                        <div className="info-items">
                            <div className="info-card">
                                <div className="info-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                </div>
                                <div className="info-content">
                                    <h4>Email</h4>
                                    <p>santhosh@example.com</p>
                                </div>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                </div>
                                <div className="info-content">
                                    <h4>Location</h4>
                                    <p>Available Worldwide</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="social-connect">
                        <h4 className="social-title">Connect with me</h4>
                        <div className="social-icons">
                            <a href="https://linkedin.com/in/santhosh132-ops" target="_blank" rel="noopener noreferrer" className="social-link">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </a>
                            <a href="https://github.com/santhosh132-ops" target="_blank" rel="noopener noreferrer" className="social-link">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                            </a>
                            <a href="#" className="social-link">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
