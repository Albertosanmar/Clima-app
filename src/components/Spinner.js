import React from 'react';
import '../assets/css/Spinner.css';

const Spinner = () => {
    return (
        <div className="spinner-overlay">
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Spinner;