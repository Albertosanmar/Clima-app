import React, { useState } from 'react';

const Form = ({ newLocation }) => {
    const [city, setCity] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        if (city === "" || !city) return;
        newLocation(city);
    };

    const handleGeoClick = () => {
        newLocation(); // Llama a geolocalización si no se pasa ciudad
    };

    return (
        <div className="form-container">
            <form
                onSubmit={onSubmit}
                className="form-group"
            >
                <div className="input-group input-group-custom">
                    <input
                        type="text"
                        className="form-control input-custom"
                        placeholder="Ciudad"
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <button
                        className="btn btn-primary button-custom"
                        type="submit"
                    >
                        Buscar
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary ms-2 button-location"
                        onClick={handleGeoClick}
                        title="Usar mi ubicación"
                    >
                        <i className="fa fa-location-arrow"></i>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;