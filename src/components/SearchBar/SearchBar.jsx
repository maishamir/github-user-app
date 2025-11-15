import React from "react";
import "./SearchBar.scss";
import searchIcon from "../../assets/icons/icon-search.svg";

function SearchBar() {
  return (
    <section>
      <form action="" className="searchBar">
        <img src={searchIcon} alt="" className="searchBar__icon" />
        <input
          type="text"
          name=""
          id=""
          className="searchBar__input"
          placeholder="Search GitHub username..."
        />
        <button type="submit" className="searchBar__submit">
          Search
        </button>
      </form>
    </section>
  );
}

export default SearchBar;
