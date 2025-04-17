import React from 'react';
import '../assets/css/Spinner.css';  

const Spinner = () => {
    return (
        <div className="spinner-overlay d-flex justify-content-center align-items-start">
            <div className="spinner-border spinner-custom" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Spinner;
