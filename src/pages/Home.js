import React from 'react';
import './DemoButton.css';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const navigate = useNavigate();

    const handleDemoClick = () => {
        navigate('/nextpage');
    };

    return (
        <section className="hero-section">
            <h1>Build Stunning Virtual Events That Drive Value</h1>
            <p>Integrate everything from marketing to production and follow-up with one solution.</p>
            <button className="demo-button" onClick={handleDemoClick}>Get a Demo</button>
        </section>
    );
};

export default HeroSection;
