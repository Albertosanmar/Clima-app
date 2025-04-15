import React from 'react';

const NavBar = () => {
    return (
        <nav className="navbar-brand">
            <div className="container-fluid"> 
                {/* Añadir la imagen aquí */}
                <img 
                    className="ms-3 mt-3 img-fluid" 
                    src="/SkyCast.svg" 
                    alt="Logo" 
                    style={{ maxWidth: '100%', height: 'auto' }} // Asegura que se mantenga proporcional
                />

            </div>
        </nav>
    );
}

export default NavBar;