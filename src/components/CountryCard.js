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
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Capital: {capital}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CountryCard;
