import React from 'react'

const SearchBar = ({searchFilter, setSearchFilter}) => {

  const handleSearchInput = (evt) => {
    // console.log(evt)
    setSearchFilter(evt.target.value)
  }

  return (
    <input type="text" placeholder='Search...' onChange={(evt) => handleSearchInput(evt)} value={searchFilter}/>
  )
}

export default SearchBar