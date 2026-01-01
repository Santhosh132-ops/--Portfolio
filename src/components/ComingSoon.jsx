import React from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import comingSoonAnimation from '../assets/coming soon.json';
import './ComingSoon.css';

const ComingSoon = ({
    title = "Coming Soon",
    subtitle = "This content is currently being crafted. Check back soon!",
    buttonText = "GO BACK",
    onButtonClick = null
}) => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        if (onButtonClick) {
            onButtonClick();
        } else {
            navigate(-1);
        }
    };

    return (
        <div className="coming-soon-container">
            <div className="coming-soon-content">
                <div className="coming-soon-animation">
                    <Lottie
                        animationData={comingSoonAnimation}
                        loop={true}
                        style={{ width: '100%', maxWidth: '600px', height: 'auto' }}
                    />
                </div>

                <h1 className="coming-soon-title">{title}</h1>
                <p className="coming-soon-subtitle">{subtitle}</p>

                <button onClick={handleButtonClick} className="coming-soon-button">
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default ComingSoon;
