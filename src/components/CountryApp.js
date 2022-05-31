import React, { Component } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import Header from "./Header";
import CountryList from "./CountryList";
import RegionFilter from "./RegionFilter";
import "../styles/CountryApp.css";
import CountrySearch from "./CountrySearch";

class CountryApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: Object(),
      activeCountries: Object(),
      regions: [],
      darkMode: JSON.parse(window.localStorage.getItem("darkMode")) || false,
    };

    this.getCountries = this.getCountries.bind(this);
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
    this.filterNames = this.filterNames.bind(this);
    this.filterRegions = this.filterRegions.bind(this);
  }

  async getCountries() {
    let countriesImport = await axios({
      method: "GET",
      url: "https://restcountries.com/v3.1/all",
    });

    let countries = {};
    let regions = new Set();

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

      regions.add(c.region);
      countries[c.cca3] = country;
    });

    this.setState({
      countries: countries,
      activeCountries: countries,
      regions: Array.from(regions),
    });
  }

  toggleDarkMode() {
    this.setState({ darkMode: !this.state.darkMode }, () => {
      window.localStorage.setItem(
        "darkMode",
        JSON.stringify(this.state.darkMode)
      );
    });
  }

  async componentDidMount() {
    await this.getCountries();
  }

  filterNames(query) {
    const { countries } = this.state;

    let nowActive = Object.entries(countries).filter(([key, value]) =>
      value.name.toLowerCase().includes(query.toLowerCase())
    );

    this.setState({ activeCountries: Object.fromEntries(nowActive) });
  }

  filterRegions(query) {
    if (!query || query === "all") {
      this.setState({ activeCountries: this.state.countries });
      return;
    }

    const { countries } = this.state;

    let nowActive = Object.entries(countries).filter(
      ([key, value]) => value.region === query
    );

    this.setState({ activeCountries: Object.fromEntries(nowActive) });
  }

  render() {
    return (
      <div className={`CountryApp ${this.state.darkMode ? "dark" : "light"}`}>
        <Header
          darkMode={this.state.darkMode}
          toggleDarkMode={this.toggleDarkMode}
        />
        <div className="CountryApp-body">
          <div className="CountryApp-filters">
            <CountrySearch
              darkMode={this.state.darkMode}
              filter={this.filterNames}
            />
            <RegionFilter
              darkMode={this.state.darkMode}
              regions={this.state.regions}
              filter={this.filterRegions}
            />
          </div>
          <CountryList
            countries={this.state.activeCountries}
            darkMode={this.state.darkMode}
          />
        </div>
      </div>
    );
  }
}

export default CountryApp;
