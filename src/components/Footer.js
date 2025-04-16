import React from 'react';

const Footer = () => {
    return (
        <footer className="text-light py-3 mt-auto" style={{ backgroundColor: 'transparent' }}>
            <div className="container d-flex justify-content-center align-items-center">
                <img src="/SkyCast.svg" alt="SkyCast Logo" className="footer-logo" style={{ width: '50px', height: 'auto' }} />
                <p className="ms-3 mb-0">© 2025 SkyCast</p>
            </div>
        </footer>
    );
};

export default Footer;
