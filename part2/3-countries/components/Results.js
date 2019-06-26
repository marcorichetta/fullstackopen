import React from 'react';
import Country from './Country';

/**
 * Recibe un objeto con países
 * y devuelve una lista de items por cada país
 */
const Results = ({ countriesList, handleButtonClick }) => {

    if (countriesList === 0) {
        return (
            <>Please, search for a country.</>
        )
    } else {
        if (countriesList.length > 10) {
            return (
                <>Too many matches, please specify another filter.</>
            )
        } else {
            if (countriesList.length === 1) {
                return (
                    /* Render country info */
                    countriesList.map(country =>
                        <Country
                            key={country.name}
                            country={country}
                        />
                    )
                );
            } else {
                return (
                    <>
                        <ul>
                            {/* Render a country list with a button
                                to show each one individually */}
                            {countriesList.map(country =>
                                <div key={country.name}>
                                    <li>
                                        {country.name}
                                        <button
                                            onClick={handleButtonClick}>
                                            Show
                                    </button>
                                    </li>
                                </div>
                            )}
                        </ul>
                    </>
                )
            }
        }
    }
}

export default Results;