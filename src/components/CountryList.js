import React, { Component } from "react";
import CountryCard from "./CountryCard";
import "../styles/CountryList.css";

class CountryList extends Component {
  render() {
    const countryList = Object.values(this.props.countries).sort(
      (a, b) => b.population - a.population
    );

    const countries = countryList.map((e) => (
      <CountryCard key={e.id} country={e} darkMode={this.props.darkMode} />
    ));

    return <div className="CountryList">{countries}</div>;
  }
}

export default CountryList;
