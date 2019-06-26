/* FULLSTACK OPEN - Part 2.12 */

import React, { useState, useEffect } from 'react'
import Filter from './components/Filter';

import axios from 'axios'
import Results from './components/Results';

const App = () => {

  const [ countries, setCountries ] = useState([])
  const [ countrySearch, setCountrySearch ] = useState('')

  const [ showMessage, setshowMessage ] = useState(true)
  
  /**
   * GET para obtener la info de los países 
   */
  useEffect( () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
    }, [])

  /**
   * Si `showMessage` == *false*,
   * `countriesToShow` == los países según la búsqueda 
   */
  const countriesToShow = showMessage
  ? 0
  : countries.filter( country => {
    return country.name.toLowerCase().includes(countrySearch.toLowerCase())
  })

  const handleCountrySearch = (event) => {
    setCountrySearch(event.target.value)
    setshowMessage(false)
  }

  const handleButtonClick = (event) => {
    setCountrySearch(event.target.parentElement.firstChild.data)   
  }

  return(
    <div>
      <h2>Countries</h2>
      Find Countries
      <Filter filterHandler={handleCountrySearch} />
      <h2>Results</h2>
      <Results 
        countriesList={countriesToShow}
        handleButtonClick={handleButtonClick}
      />
    </div>
  )
}

export default App;