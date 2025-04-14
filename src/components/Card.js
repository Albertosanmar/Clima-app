import React from 'react';
import Spinner from './Spinner';

const Card = ({loadingData, showData, weather, forecast}) => {

    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var date = day + '/' + month+ '/' + year;

    var url = "";
    var iconUrl = "";

    var iconUrl3 = "";
    var iconUrl6 = "";
    var iconUrl9 = "";

    var forecastDate3 = "";
    var forecastDate6 = "";
    var forecastDate9 = "";

    

    if (loadingData){
        return <Spinner />;
    }

    if(showData){
        url = "https://openweathermap.org/img/w/";
        iconUrl = url + weather.weather[0].icon + ".png";

        iconUrl3 = url + forecast.list[1].weather[0].icon + ".png";
        iconUrl6 = url + forecast.list[2].weather[0].icon + ".png";
        iconUrl9 = url + forecast.list[3].weather[0].icon + ".png";

        forecastDate3 = forecast.list[1].dt_txt.substring(11, 13);
        forecastDate6 = forecast.list[2].dt_txt.substring(11, 13);
        forecastDate9 = forecast.list[3].dt_txt.substring(11, 13);
    }
    

    return (
        <div className="mt-5">
            {
                showData === true ? (
                    <div className="container text-center">  
                        <div className="card border-dark bg-danger bg-opacity-25 text-light mb-3">
                            <div className="card-header">
                                <h3 className="text">Condiciones Actuales</h3>
                            </div>
                            <div className="row order-last">
                                <div className="col mt-5">
                                    <p className="card-text">{date}</p>
                                    <h1 className="card-text">{weather.name}</h1>
                                    <h1 className="card-text"><img src={iconUrl} alt="icon"/>{(weather.main.temp - 273.15).toFixed(1)}ºC</h1>
                                </div>
                                <div className="col py-3">
                                    <p className="card-text">Max: {(weather.main.temp_max - 273.15).toFixed(1)}ºC</p>
                                    <p className="card-text">Min: {(weather.main.temp_min - 273.15).toFixed(1)}ºC</p>
                                    <p className="card-text">Sensación: {(weather.main.feels_like - 273.15).toFixed(1)}ºC</p>
                                    <p className="card-text">Humedad: {weather.main.humidity}%</p>
                                    <p className="card-text">Viento: {weather.wind.speed}m/s</p>
                                </div>
                            </div>    
                        </div>
                        <div className="card mb-3 mx-auto border-dark bg-danger bg-opacity-25 text-light">
                            <div className="row g-0">
                                <div className="card-header">
                                    <h3 className="text">Previsión</h3>
                                </div>
                                <div className="col order-last">
                                    <div className="row mt-4">
                                        <div className="col">
                                            <p>{forecastDate3}h</p>
                                            <p className="description"><img src={iconUrl3} alt="icon"/></p>
                                            <p className="temp">{(forecast.list[1].main.temp - 273.15).toFixed(1)}ºC</p>
                                        </div>
                                        <div className="col">
                                            <p>{forecastDate6}h</p>
                                            <p className="description"><img src={iconUrl6} alt="icon"/></p>
                                            <p className="temp">{(forecast.list[2].main.temp - 273.15).toFixed(1)}ºC</p>
                                        </div>
                                        <div className="col">
                                            <p>{forecastDate9}h</p>
                                            <p className="description"><img src={iconUrl9} alt="icon"/></p>
                                            <p className="temp">{(forecast.list[3].main.temp - 273.15).toFixed(1)}ºC</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                ):(
                    <h2 className="text-light">Sin Datos</h2>
                )
            }
        
        </div>
        
    );
}

export default Card;