import React from 'react';
import '../assets/css/Spinner.css';

const Spinner = () => {
    return (
        <div className="spinner-overlay d-flex justify-content-center align-items-start" style={{ height: '100vh', paddingTop: '150px' }}>
            <div className="spinner-border text-primary" role="status" style={{ width: '5rem', height: '5rem' }}>
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Spinner;