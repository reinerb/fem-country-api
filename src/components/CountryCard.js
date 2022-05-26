import React, { Component } from "react";

class CountryCard extends Component {
  render() {
    const { name, population, region, capital, flag } = this.props.country;
    return (
      <div>
        <img src={flag} />
        <h2>{name}</h2>
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
      </div>
    );
  }
}

export default CountryCard;
