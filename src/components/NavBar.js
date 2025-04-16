import React, { useState } from 'react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showAbout, setShowAbout] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
        setShowAbout(false);
    };

    const toggleAbout = () => {
        setShowAbout(prev => !prev);
    };

    return (
        <>
            <nav className="navbar-custom position-relative">
                <div className="container-fluid d-flex justify-content-between align-items-center position-relative">
                    <img 
                        className="logo-img" 
                        src="/SkyCast.svg" 
                        alt="Logo"
                    />
                    <h1 className="app-title">SkyCast</h1>

                    <button 
                        onClick={toggleModal}
                        className="hamburger-btn"
                    >
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </button>
                </div>
            </nav>

            {isOpen && (
                <div className="modal-overlay">
                    <button 
                        onClick={toggleModal}
                        className="close-btn"
                    >
                        ×
                    </button>

                    <div className="text-light mt-5 me-auto ms-4">
                        {!showAbout ? (
                            <ul className="list-unstyled">
                                <li className="mb-3">
                                    <button onClick={toggleAbout} className="btn btn-link text-light text-decoration-none p-0">
                                        Acerca de SkyCast
                                    </button>
                                </li>
                                <li className="mb-3">
                                    <a 
                                        href="https://github.com/Albertosanmar/Clima-app" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="text-light text-decoration-none d-flex align-items-center gap-2"
                                    >
                                        <i className="fa fa-github me-2 github-icon"></i> GitHub
                                    </a>
                                </li>
                            </ul>
                        ) : (
                            <div>
                                <button onClick={toggleAbout} className="btn btn-link text-light text-decoration-none p-0 mb-3">
                                    ← Volver al menú
                                </button>
                                <div className="about-content">
                                    <h5>Acerca de SkyCast</h5>
                                    <p>
                                        SkyCast es tu app confiable para conocer el clima en cualquier parte del mundo.  
                                        Es el proyecto final de grado en Desarrollo de Aplicaciones Multiplataforma de Alberto Sanmartín Taylor.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default NavBar;



