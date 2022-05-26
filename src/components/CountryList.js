import React, { Component } from "react";
import CountryCard from "./CountryCard";

class CountryList extends Component {
  render() {
    const countries = Object.values(this.props.countries).map((e) => (
      <CountryCard country={e} />
    ));

    return <div>{countries}</div>;
  }
}

export default CountryList;
