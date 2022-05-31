import React, { Component } from "react";
import "../styles/CountryCard.css";

class CountryCard extends Component {
  render() {
    const { name, population, region, capital, flag } = this.props.country;
    const darkMode = this.props.darkMode;
    return (
      <div className={`CountryCard ${darkMode ? "dark" : "light"}`}>
        <img className="CountryCard-flag" src={flag} alt={name} />
        <div className="CountryCard-body">
          <h2 className="CountryCard-title">{name}</h2>
          <div className="CountryCard-vitals">
            <p>
              <span className="bold-font">Population:</span>{" "}
              {population.toLocaleString()}
            </p>
            <p>
              <span className="bold-font">Region:</span> {region}
            </p>
            <p>
              <span className="bold-font">Capital:</span> {capital}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default CountryCard;
