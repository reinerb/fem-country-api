import React, { Component } from "react";
import CountryCard from "./CountryCard";
import "../styles/CountryList.css";

class CountryList extends Component {
  render() {
    const countries = Object.values(this.props.countries).map((e) => (
      <CountryCard key={e.id} country={e} darkMode={this.props.darkMode} />
    ));

    return <div className="CountryList">{countries}</div>;
  }
}

export default CountryList;
