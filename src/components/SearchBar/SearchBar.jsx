import { useState } from "react";
import "./SearchBar.scss";
import searchIcon from "../../assets/icons/icon-search.svg";

function SearchBar({ onSearch }) {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (username) {
      onSearch(username);
    }
  }

  return (
    <section>
      <form action="" className="searchBar" onSubmit={handleSubmit}>
        <img src={searchIcon} alt="" className="searchBar__icon" />
        <input
          type="text"
          name=""
          id=""
          className="searchBar__input"
          placeholder="Search GitHub username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit" className="searchBar__submit">
          Search
        </button>
      </form>
    </section>
  );
}

export default SearchBar;
