import React, { useState } from 'react';
import Form from './Form';
import Card from './Card';

const ClimaPanel = () => {
    const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
    let urlWeather = "https://api.openweathermap.org/data/2.5/weather?appid=" + apiKey + "&lang=es";
    let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?appid=" + apiKey + "&lang=es";

    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);

    // Función para obtener la ubicación del usuario o una ciudad específica
    const getLocation = async (location = null) => {
        setLoading(true); // Inicia el estado de carga

        // Si no se pasa una ubicación, usamos la geolocalización
        if (!location && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    location = { lat: latitude, lon: longitude };  // Cambiar a un objeto con lat y lon
                    

                    // Realizar las consultas para clima y pronóstico
                    fetchWeatherForecast(location);
                },
                (error) => {
                    alert('No se pudo obtener la ubicación');
                    setLoading(false); // Finaliza el estado de carga en caso de error
                    setShow(false); // No mostrar los resultados
                }
            );
        } else if (typeof location === 'string') {
            // Si location es una ciudad, pasarla directamente a la API
            fetchWeatherForecastByCity(location);
        } else {
            // Si se pasa un objeto con lat y lon, usamos las coordenadas
            fetchWeatherForecast(location);
        }
    };

    const fetchWeatherForecast = (location) => {
        // Consultar el clima actual (modificar la URL para lat y lon)
        fetch(urlWeather + `&lat=${location.lat}&lon=${location.lon}`)
            .then((response) => {
                if (!response.ok) throw new Error("Error al obtener la predicción");
                return response.json();
            })
            .then((weatherData) => {
                setWeather(weatherData);
            })
            .catch((error) => {
                setLoading(false);
                setShow(false);
            });

        // Consultar el pronóstico (modificar la URL para lat y lon)
        fetch(urlForecast + `&lat=${location.lat}&lon=${location.lon}`)
            .then((response) => {
                if (!response.ok) throw new Error("Error al obtener la predicción");
                return response.json();
            })
            .then((forecastData) => {
                setForecast(forecastData);
                setLoading(false);
                setShow(true); // Mostrar los resultados después de obtener los datos
            })
            .catch((error) => {
                setLoading(false);
                setShow(false);
            });
    };

    const fetchWeatherForecastByCity = (city) => {
        // Consultar el clima actual (por nombre de ciudad)
        fetch(urlWeather + `&q=${city}`)
            .then((response) => {
                if (!response.ok) throw new Error("Error al obtener la predicción");
                return response.json();
            })
            .then((weatherData) => {
                setWeather(weatherData);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
                setShow(false);
            });

        // Consultar el pronóstico (por nombre de ciudad)
        fetch(urlForecast + `&q=${city}`)
            .then((response) => {
                if (!response.ok) throw new Error("Error al obtener la predicción");
                return response.json();
            })
            .then((forecastData) => {
                setForecast(forecastData);
                setLoading(false);
                setShow(true); // Mostrar los resultados después de obtener los datos
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
                setShow(false);
            });
    };

    return (
        <React.Fragment>
            

             {/* Formulario para buscar una ciudad */}
             <Form newLocation={getLocation} />

            
                <Card
                    showData={show}
                    loadingData={loading}
                    weather={weather}
                    forecast={forecast}
                />
            
        </React.Fragment>
    );
};

export default ClimaPanel;





