import React from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import notFoundAnimation from '../assets/portfolio-notfound.json';
import './NotFound.css';

const NotFound = ({
    title = "Page Not Found",
    subtitle = "The page you're looking for doesn't exist.",
    buttonText = "RETURN HOME",
    onButtonClick = null
}) => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        if (onButtonClick) {
            onButtonClick();
        } else {
            navigate('/');
        }
    };

    return (
        <div className="not-found-container">
            <div className="content-wrapper">
                <div className="animation-wrapper">
                    <Lottie
                        animationData={notFoundAnimation}
                        loop={true}
                        style={{ width: '100%', maxWidth: '500px', height: 'auto' }}
                    />
                </div>

                <h1 className="not-found-title">{title}</h1>
                <p className="subtitle">{subtitle}</p>

                <button onClick={handleButtonClick} className="home-button">
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default NotFound;
