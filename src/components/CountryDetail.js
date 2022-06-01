import React, { Component } from "react";
import "../styles/CountryDetail.css";

class CountryDetail extends Component {
  render() {
    return <div className="CountryDetail">{this.props.country.name}</div>;
  }
}

export default CountryDetail;
