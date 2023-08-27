
import React from 'react'


// const countryItems = function () {
//   const countryJSXItems = []
//   for (const country in allCountries) {
//     countryJSX = (
//     <li key={country.cca3}><button onClick={selectCountry} value={country.cca3}>
//     {country.name.official}
//     </button>
//     <p>Population: {country.population}</p>
//     </li>
//     )
//     countryJSXItems.push(countryJSX)
//   }
//   return countryJSXItems
// }

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

// old code
// const ListCountries = ({allCountries, selectCountry}) => {
//   return (
//     <>

    
//     <h1>List of Countries:</h1>
//       <ul>
      // {allCountries.map((country, index) => {
      // return (
      //   <li key={index}><button onClick={selectCountry} value={index}>
      //   {country.name.official}
      //   </button>
      //   <p>Population: {country.population}</p>
      //   </li>
//       )
//     })}
//   </ul>
//   </>
//   )
// }