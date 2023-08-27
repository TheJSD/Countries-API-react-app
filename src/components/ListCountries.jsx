import React from 'react'
import SearchBar from './SearchBar'

const ListCountries = ({allCountries, selectCountry, countryItems, searchFilter, setSearchFilter}) => {
  
  return (
    <>
    <SearchBar
    searchFilter={searchFilter}
    setSearchFilter={setSearchFilter}
    />
    <h1>List of Countries:</h1>
      <ul>
      {countryItems.map((country, index) => {
        return (
        <li key={country.cca3}>
        <h3>{country.name.official}</h3>
        <p>Population: {country.population}</p>
        <button onClick={selectCountry} value={country.cca3}>
        See More
        </button>
        </li>
      )})}
      </ul>
  </>
  )
}

export default ListCountries