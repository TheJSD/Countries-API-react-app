
import React from 'react'

const ListCountries = ({allCountries, selectCountry}) => {
  return (
    <>

    
    <h1>List of Countries:</h1>
      <ul>
      {allCountries.map((country, index) => {
      return (
        <li key={index}><button onClick={selectCountry} value={index}>
        {country.name.official}
        </button>
        <p>Population: {country.population}</p>
        </li>
      )
    })}
  </ul>
  </>
  )
}

export default ListCountries