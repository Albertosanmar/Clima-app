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
                    <img className="logo-img" src="/logo-skycast.svg" alt="Logo de SkyCast montañas con un sol verde por detras"/>
                    <h1 className="app-title">SkyCast</h1>

                    <button onClick={toggleModal} className="hamburger-btn" input type="button" aria-label="Button Hamburger">
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </button>
                </div>
            </nav>

            {isOpen && (
                <div className="modal-overlay">
                    <button onClick={toggleModal} className="close-btn" aria-label="Cerrar"><i className="fa fa-times" aria-hidden="true"></i></button>
                    <div className="mt-5 me-auto ms-4">
                        {!showAbout ? (
                            <ul className="list-unstyled">
                                <li className="mb-3">
                                    <button onClick={toggleAbout} className="btn btn-link text-light text-decoration-none p-0 about-button">Acerca de SkyCast</button>
                                </li>
                                <li className="mb-3">
                                    <a href="https://github.com/Albertosanmar/Clima-app" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none d-flex align-items-center gap-2 github-link"><i className="fa fa-github me-2 github-icon"></i> GitHub</a>
                                </li>
                            </ul>
                        ) : (
                            <div>
                                <button onClick={toggleAbout} className="btn btn-link text-light text-decoration-none p-0 mb-3">← Volver al menú</button>
                                <div className="about-content">
                                    <h5 className='fs-2'>Acerca de SkyCast</h5>
                                    <p>SkyCast es tu AppWeb de confianza para conocer el clima en cualquier parte del mundo utilizando la API de OpenWeather. Esta aplicación está desarrollada con React, un framework de JavaScript y la libreria Bootstrap para los estilos en el editor de código VS Code. Es el proyecto final de grado en Desarrollo de Aplicaciones Multiplataforma de Alberto Sanmartín Taylor.</p>
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



