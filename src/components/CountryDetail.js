import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/CountryDetail.css";

class CountryDetail extends Component {
  render() {
    const {
      name,
      region,
      population,
      subregion,
      capital,
      flag,
      topLevelDomains,
    } = this.props.country;

    const nativeNames = Object.values(this.props.country.nativeNames).map(
      (e) => e.common
    );

    const currencies = Object.values(this.props.country.currencies).map(
      (e) => e.name
    );

    const languages = Object.values(this.props.country.languages);

    const borderLinks =
      Object.keys(this.props.borders).map((k) => (
        <Link to={`/${k}`}>{this.props.borders[k]}</Link>
      )) || "none";

    return (
      <div className="CountryDetail">
        <Link to="/" className="btn-back">
          Back
        </Link>
        <div className="CountryDetail-body">
          <img src={flag} alt={`${name} flag`} />
          <div className="CountryDetail-vitals">
            <h1>{name}</h1>
            <p>
              <span className="bold-font">{`Native name${
                nativeNames.length === 1 ? "" : "s"
              }:`}</span>{" "}
              {nativeNames.join(", ") || "None"}
            </p>
            <p>
              <span className="bold-font">Population:</span>{" "}
              {population.toLocaleString()}
            </p>
            <p>
              <span className="bold-font">Region:</span> {region}
            </p>
            <p>
              <span className="bold-font">Subregion:</span> {subregion}
            </p>
            <p>
              <span className="bold-font">Capital:</span> {capital}
            </p>
            <p>
              <span className="bold-font">{`Top Level Domain${
                topLevelDomains.length === 1 ? "" : "s"
              }:`}</span>{" "}
              {topLevelDomains.join(", ") || "None"}
            </p>
            <p>
              <span className="bold-font">{`Currenc${
                currencies.length === 1 ? "y" : "ies"
              }:`}</span>{" "}
              {currencies.join(", ") || "None"}
            </p>
            <p>
              <span className="bold-font">{`Language${
                languages.length === 1 ? "" : "s"
              }:`}</span>{" "}
              {languages.join(", ") || "None"}
            </p>
          </div>
          <div className="CountryDetail-borders">
            <span className="bold-font">Border Countries:</span> {borderLinks}
          </div>
        </div>
      </div>
    );
  }
}

export default CountryDetail;
