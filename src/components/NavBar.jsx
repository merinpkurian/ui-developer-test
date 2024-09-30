import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="text-bar">
                <div className="text-content">
                    <span>Happy Employees, Effortless HR:</span>
                    <p>Experience the introdo Advantage. Try it for Free!</p>
                </div>
            </div>
            <div className="navbar">
                <div className="logo-container">
                    <img src="path_to_your_logo.png" alt="Introdo Logo" className="logo" />
                    <div className="introdo-text">Introdo</div>
                </div>
                <div className={`links-container ${isOpen ? 'open' : ''}`}>
                    <div className="link-item">Products</div>
                    <div className="link-item">Solutions</div>
                    <div className="link-item">Pricing</div>
                    <div className="link-item">Partner Program</div>
                    <div className="link-item">Resources</div>
                    <div className="link-item">About Us</div>
                </div>
                <div className="small-buttons-container">
                    <div className="small-button">EN</div>
                    <div className="small-button">Log In</div>
                </div>
                <div className="hamburger-menu" onClick={toggleMenu}>
                    &#9776;
                </div>
            </div>
        </>
    );
};

export default Navbar;
