import React from 'react'
import "./SearchBar.scss"

function SearchBar() {
  return (
    <form className='searchBar'>
      <input type="text" name="" id="" placeholder='Search GitHub username...' className='searchBar__input'/>
      <button type="submit" className='searchBar__submit'>Search</button>
    </form>
  )
}

export default SearchBar