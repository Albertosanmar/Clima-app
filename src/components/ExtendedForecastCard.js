import React from 'react';

const ExtendedForecastCard = ({ forecast, showData }) => {
    const url = "https://openweathermap.org/img/w/";
    
    
    let iconUrl24 = "";
    let iconUrl48 = "";
    let iconUrl72 = "";
    let forecastDate24 = "";
    let forecastDate48 = "";
    let forecastDate72 = "";
   

    if (showData) {
        
        iconUrl24 = url + forecast.list[8].weather[0].icon + ".png";
        iconUrl48 = url + forecast.list[16].weather[0].icon + ".png";
        iconUrl72 = url + forecast.list[24].weather[0].icon + ".png";

        forecastDate24 = forecast.list[8].dt_txt.substring(8, 10) + '/' + forecast.list[8].dt_txt.substring(5, 7) + ' ' +  forecast.list[8].dt_txt.substring(11, 13);
        forecastDate48 = forecast.list[16].dt_txt.substring(8, 10) + '/' + forecast.list[16].dt_txt.substring(5, 7) + ' ' +  forecast.list[16].dt_txt.substring(11, 13);
        forecastDate72 = forecast.list[24].dt_txt.substring(8, 10) + '/' + forecast.list[24].dt_txt.substring(5, 7) + ' ' +  forecast.list[24].dt_txt.substring(11, 13);

    }

    return (
        <div className="container-card-extended">{
            showData === true ? (
                <div className="container text-center">
                    <div className="card card-custom mb-3 mx-auto">
                        <div className="card-header">
                            <h3 className="card-title">Previsión</h3>
                        </div>
                        <div className="row mt-4">
                            <div className="col">
                                <p>{forecastDate24}h</p>
                                <p className="description"><img src={iconUrl24} alt="icon"/></p>
                                <p className="temp"><i className="fa fa-thermometer-half me-2" aria-hidden="true"></i>{(forecast.list[8].main.temp - 273.15).toFixed(1)}ºC</p>
                            </div>
                            <div className="col">
                                <p>{forecastDate48}h</p>
                                <p className="description"><img src={iconUrl48} alt="icon"/></p>
                                <p className="temp"><i className="fa fa-thermometer-half me-2" aria-hidden="true"></i>{(forecast.list[16].main.temp - 273.15).toFixed(1)}ºC</p>
                            </div>
                            <div className="col">
                                <p>{forecastDate72}h</p>
                                <p className="description"><img src={iconUrl72} alt="icon"/></p>
                                <p className="temp"><i className="fa fa-thermometer-half me-2" aria-hidden="true"></i>{(forecast.list[24].main.temp - 273.15).toFixed(1)}ºC</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default ExtendedForecastCard;

