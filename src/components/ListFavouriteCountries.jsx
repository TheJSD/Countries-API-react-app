import React from 'react'

const ListFavouriteCountries = ({favouriteCountries, selectCountry}) => {
  return (
    <>
    <h1>List of Favourite Countries:</h1>
      <ul>
      {favouriteCountries.map((country) => {
      return (
        <li key={country.id}><button onClick={selectCountry} value={country.id}>
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

export default ListFavouriteCountries