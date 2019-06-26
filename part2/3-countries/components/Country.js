import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Weather from './Weather'

/**
 * Renderizar los datos del país
 */
const Country = ({ country }) => {

    const [ weather, setWeather ] = useState([])
    const [ loading, setLoading ] = useState(true)
    
    /**
     * Fetch weather data from apixu
     * `country.capital` is included as a dependency
     * because his change activates the effect.
     */
    useEffect(() => {
        axios
            .get(`https://api.apixu.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${country.capital}`
            ).then(response => {
                console.log(response.data)
                setWeather(response.data)
                setLoading(false)
            })
    }, [country.capital])


    if (loading) return (    
        <div>
            Retrieving information...
        </div>
    )

    return (
        <div key={country.name}>

            <h3>{country.name}</h3>

            Capital: {country.capital}
            <br></br>
            Population: {country.population}

            <h4>Spoken Languages</h4>

            <ul>
                {country.languages.map(lang =>
                    <li key={lang.name}>
                        {lang.name}
                    </li>
                )}
            </ul>

            <img
                alt={country.name}
                src={country.flag}
                width='150'
                height='100'
            >
            </img>

            <Weather weatherData={weather} />
        </div>
    )
}

export default Country;