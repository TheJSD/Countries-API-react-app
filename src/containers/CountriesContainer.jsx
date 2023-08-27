import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Header from '../components/Header'
import ListCountries from '../components/ListCountries'
import IndividualCountryView from '../components/IndividualCountryView'


const CountriesContainer = () => {
  const [allCountries, setAllCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState("")
  const [favouriteCountries, setFavouriteCountries] = useState([])

  // States for Search Function:
  const [searchFilter, setSearchFilter] = useState("")

  const convertCountriesArrayToObject = function (array) {
    let newAllCountriesObject = {}
    for (let country of array) {
      const newKey = country.cca3
      newAllCountriesObject[newKey] = country
      // newAllCountriesObject[key] = [country]
      // console.log(newAllCountriesObject)
    }
    setAllCountries(newAllCountriesObject)
  }

  useEffect( () => {
    fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => convertCountriesArrayToObject(data));
  


  
    return () => {
      
    }
  }, [])

  const selectCountry = (evt) => {
    console.log(evt.target)
    setSelectedCountry(evt.target.value)
  }

  const countryItems = function (selectedCountriesObject) {
    let countryItems = []
    if (selectedCountry == "favourites") {
      countryItems = favouriteCountries
    } else {
    countryItems = Object.values(selectedCountriesObject);
    }
    if (searchFilter == "") {
      return countryItems
    } else {
      const filteredItems = []
      countryItems.forEach((country) => {
        if (country.name.official.toLowerCase().indexOf(searchFilter.toLowerCase()) != -1) {
          filteredItems.push(country)
        }})
      return filteredItems
      }
  }




  return (
    <>
      <Header selectCountry={selectCountry}/>
      
      {(selectedCountry == "" || selectedCountry == "favourites") ? (
      <>
        <ListCountries
        allCountries={allCountries}
        selectCountry={selectCountry} 
        countryItems= {countryItems(allCountries)}
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
        />
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
  )
}

export default CountriesContainer