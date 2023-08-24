import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


const IndividualCountryView = ({allCountries, selectedCountry, favouriteCountries, setFavouriteCountries}) => {

  const [isFavourited, setIsFavourited] = useState("")

  useEffect(() => {
    setIsFavourited(favouriteCountries.some(country => country.id == selectedCountry))
  }, [favouriteCountries])
  

  const country = allCountries[selectedCountry]

  const addToFavourites = () => {
    const countryToAdd = {id: selectedCountry, ...country,}
    setFavouriteCountries([...favouriteCountries, countryToAdd])
    console.log("Country Added!")
  }

  const removeFromFavourites = () => {
    const countryToRemove = favouriteCountries.findIndex(country => country.id == selectedCountry)
    // console.log(countryToRemove)
    let favouriteCountriesCopy = favouriteCountries
    // console.log(favouriteCountriesCopy)
    favouriteCountriesCopy.splice(countryToRemove, 1);
    // console.log(favouriteCountriesCopy)
    setFavouriteCountries = favouriteCountriesCopy
    setIsFavourited(false)
    // console.log("Country Removed")
  }


  return (
    <>
      <h1>{country.name.official}</h1>
      <img src={country.flags.png}/>
      <br/>
      {isFavourited == false ? (
        <button onClick={addToFavourites}>Add to Favourites</button>
      ) : (
        <button onClick={removeFromFavourites}>Remove from Favourites</button>)}
      <p>Population: {country.population}</p>
      <p>Timezones:</p> {country.timezones.map(timezone => <p>{timezone}</p>)}
    </>
  )
}

export default IndividualCountryView