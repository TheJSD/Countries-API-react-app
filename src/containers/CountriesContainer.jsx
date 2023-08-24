import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Header from '../components/Header'
import ListCountries from '../components/ListCountries'
import IndividualCountryView from '../components/IndividualCountryView'
import ListFavouriteCountries from '../components/ListFavouriteCountries'


const CountriesContainer = () => {
  const [allCountries, setAllCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState("")
  const [favouriteCountries, setFavouriteCountries] = useState([])

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => setAllCountries(data))
  
    return () => {
      
    }
  }, [])

  const selectCountry = (evt) => {
    console.log(evt.target)
    setSelectedCountry(evt.target.value)

  }

  return (
    <>
      <Header selectCountry={selectCountry}/>
      

      {selectedCountry == "favourites" ? (
        <ListFavouriteCountries selectCountry={selectCountry} favouriteCountries={favouriteCountries}/>
        ) : ( 
        <>
      {selectedCountry == "" ? (
      <>
        <ListCountries allCountries={allCountries} selectCountry={selectCountry}/>
    </>
      ) : (
        <>
          <IndividualCountryView
            allCountries={allCountries}
            selectedCountry={selectedCountry}
            favouriteCountries={favouriteCountries}
            setFavouriteCountries={setFavouriteCountries}
          />
        </>
        )}
      </>
      )}

    </>
  )
}

export default CountriesContainer