import React from "react";
import sunIcon from "../../assets/icons/icon-sun.svg";
import moonIcon from "../../assets/icons/icon-moon.svg";
import "./Toggle.scss";

function Toggle({ handleChange, isChecked }) {
  let label = isChecked ? "LIGHT" : "DARK";

  return (
    <div className="toggle">
      <div className="toggle__toggle">
        <input
          type="checkbox"
          id="check"
          className="toggleBtn"
          onChange={handleChange}
          checked={isChecked}
        />
        <label htmlFor="check" className="toggle__label">
          <p className="toggle__label-text">{label}</p>
          <img
            src={isChecked ? sunIcon : moonIcon}
            alt=""
            className="toggle__label-icon"
          />
        </label>
      </div>
    </div>
  );
}

export default Toggle;
