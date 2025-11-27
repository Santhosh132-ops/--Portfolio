import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contacts = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS SERVICE ID, TEMPLATE ID, AND PUBLIC KEY
        // Sign up at https://www.emailjs.com/
        const SERVICE_ID = 'service_uw2ipwo';
        const TEMPLATE_ID = 'template_h54amip';
        const PUBLIC_KEY = 'wD6LcrqxQ4sw_bxzX';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus(''), 5000);
            }, (error) => {
                console.log(error.text);
                setStatus('error');
                setTimeout(() => setStatus(''), 5000);
            });
    };

    return (
        <footer className="contact-footer" id="contact">
            <div className="footer-container">
                <div className="footer-top">
                    <h2 className="footer-title">Let's Connect</h2>
                    <p className="footer-subtitle">Open for collaborations and new opportunities</p>

                    <a href="mailto:kunamsanthosh992@gmail.com" className="footer-email">
                        kunamsanthosh992@gmail.com
                    </a>

                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/santhoshkunam/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                        <a href="https://github.com/Santhosh132-ops" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </a>
                    </div>
                </div>

                <div className="contact-box">
                    <form className="simple-form" ref={form} onSubmit={handleSubmit}>
                        <div className="input-group">
                            <div className="input-wrapper">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    disabled={status === 'sending'}
                                />
                                <span className="input-focus-border"></span>
                            </div>
                            <div className="input-wrapper">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    disabled={status === 'sending'}
                                />
                                <span className="input-focus-border"></span>
                            </div>
                        </div>
                        <div className="input-wrapper">
                            <textarea
                                name="message"
                                placeholder="Message"
                                rows="3"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                disabled={status === 'sending'}
                            ></textarea>
                            <span className="input-focus-border"></span>
                        </div>

                        <button
                            type="submit"
                            className={`send-btn ${status}`}
                            disabled={status === 'sending' || status === 'success'}
                        >
                            {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : status === 'error' ? 'Failed' : 'Send Message'}
                            {status === '' && (
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                            )}
                            {status === 'success' && (
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            )}
                            {status === 'error' && (
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            )}
                        </button>
                    </form>
                </div>

                <div className="footer-bottom">
                    <p>© 2025 Santhosh Kunam. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Contacts;
