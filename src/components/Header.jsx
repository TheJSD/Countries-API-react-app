import React from 'react'

const Header = ({selectCountry}) => {
  return (
    <nav>
    <button onClick={selectCountry} value="">See All Countries</button>
    <button onClick={selectCountry} value="favourites">See Favourite Countries</button>
    </nav>
  )
}

export default Header