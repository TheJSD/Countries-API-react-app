
import React from 'react'

const ListCountries = ({allCountries, selectCountry, countryItems}) => {
  
  return (
    <>
    <h1>List of Countries:</h1>
      <ul>
      {countryItems.map((country, index) => {
        return (
        <li key={country.cca3}><button onClick={selectCountry} value={country.cca3}>
        {country.name.official}
        </button>
        <p>Population: {country.population}</p>
        </li>
      )})}
      </ul>
  </>
  )
}

export default ListCountries