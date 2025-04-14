import React, {useState} from 'react';
import Form from './Form';
import Card from './Card';

const ClimaPanel = () => {
    const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
    let urlWeather = "https://api.openweathermap.org/data/2.5/weather?appid=db9ad73cc2325637a062d00f4e9babaf&lang=es";
    let cityUrl = "&q=";

    let urlForecast ="https://api.openweathermap.org/data/2.5/forecast?appid=db9ad73cc2325637a062d00f4e9babaf&lang=es";

    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    

    const getLocation = async(loc) => {
        setLoading(true);
       

        //weather

        urlWeather = urlWeather + cityUrl +loc;

        await fetch(urlWeather).then((response) =>{
            if(!response.ok) throw new Error("Error al obtener la predicción")
            return response.json();
        }).then((weatherData) =>{
            console.log(weatherData);
            setWeather(weatherData);
        }).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false);
        });

        //Forecats

        urlForecast = urlForecast + cityUrl + loc;

        await fetch(urlForecast).then((response) =>{
            if(!response.ok) throw new Error("Error al obtener la predicción")
            return response.json();
        }).then((forecastData) =>{
            console.log(forecastData);
            setForecast(forecastData);

            setLoading(false);
            setShow(true);

        }).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false);
        });
    }

    return(
        <React.Fragment>
            <Form
                newLocation = {getLocation}
            />

            <Card
                showData = {show}
                loadingData = {loading}
                weather = {weather}
                forecast ={forecast}
            />
        </React.Fragment>
    );
}

export default ClimaPanel;