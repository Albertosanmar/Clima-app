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
        <div className="container mt-4 d-flex justify-content-center">
            <form
                onSubmit={onSubmit}
                className="d-flex w-100 justify-content-center"
                style={{ maxWidth: '60vw' }}
            >
                <div className="input-group w-100" style={{ borderRadius: '0.25rem' }}>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Ciudad"
                        onChange={(e) => setCity(e.target.value)}
                        style={{
                            borderTopLeftRadius: '0.25rem',
                            borderBottomLeftRadius: '0.25rem',
                            borderTopRightRadius: '0',
                            borderBottomRightRadius: '0'
                        }}
                    />
                    <button
                        className="btn btn-primary"
                        type="submit"
                        style={{
                            borderTopLeftRadius: '0',
                            borderBottomLeftRadius: '0',
                            borderTopRightRadius: '0.25rem',
                            borderBottomRightRadius: '0.25rem',
                        }}
                    >
                        Buscar
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary ms-2"
                        onClick={handleGeoClick}
                        title="Usar mi ubicación"
                        style={{
                            borderTopLeftRadius: '0.25rem',
                            borderBottomLeftRadius: '0.25rem',
                        }}
                    >
                        <i className="fa fa-location-arrow"></i>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;




