import React from 'react'

const Weather = ({ weatherData }) => {

    const {current, location} = weatherData;

    return (
        <>
        <h4>Wheather in {location.name}</h4>
        <div>
            Temperature: { current.temp_c }°
            <br />
            Wind: { current.wind_kph }Km/h - Direction: { current.wind_dir }
        </div>
        <img
            alt={current.condition.text}
            src={current.condition.icon}
        ></img>
        </>
    )
}

export default Weather;