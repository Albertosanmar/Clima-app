import React from 'react';
import '../assets/css/Spinner.css';
const Spinner = () => {

    return(
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    );
}

export default Spinner;