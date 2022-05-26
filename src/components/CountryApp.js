import React, { Component } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import Header from "./Header";
import CountryList from "./CountryList";

class CountryApp extends Component {
  constructor(props) {
    super(props);

    this.state = { countries: Object(), darkMode: false };

    this.getCountries = this.getCountries.bind(this);
  }

  async getCountries() {
    let countriesImport = await axios({
      method: "GET",
      url: "https://restcountries.com/v3.1/all",
    });

    let countries = {};

    countriesImport.data.forEach((c) => {
      let country = {
        id: uuid(),
        name: c.name.common,
        countryCode: c.cca3,
        nativeNames: c.name.nativeName,
        region: c.region,
        subregion: c.subregion,
        capital: c.capital ? c.capital[0] : "none",
        currencies: c.currencies,
        topLevelDomains: c.tld,
        population: c.population,
        flag: c.flags.png,
        languages: c.languages,
        borders: c.borders ? c.borders : "none",
      };

      countries[c.cca3] = country;
    });

    this.setState({ countries: countries });
  }

  async componentDidMount() {
    await this.getCountries();
  }

  render() {
    return (
      <div className="CountryApp">
        <Header darkMode={this.state.darkMode} />
        <CountryList countries={this.state.countries} />
      </div>
    );
  }
}

export default CountryApp;
