import React from "react";
import moonIcon from "../../assets/icons/icon-moon.svg";
import sunIcon from "../../assets/icons/icon-sun.svg";
import "./Header.scss"

function Header() {
  return (
    <header className="header">
      <p className="header__logo">devfinder</p>
      <div className="header__toggle">
        <p className="toggle__label">LIGHT</p>
        <img src={sunIcon} alt="" className="toggle__icon" />
      </div>
    </header>
  );
}

export default Header;
