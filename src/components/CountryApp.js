import React, { Component } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import Header from "./Header";
import CountryGrid from "./CountryGrid";
import CountryDetail from "./CountryDetail";
import { Route, Routes } from "react-router-dom";
import "../styles/CountryApp.css";

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
    this.getBorderNames = this.getBorderNames.bind(this);
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
        currencies: c.currencies ? c.currencies : [],
        topLevelDomains: c.tld ? c.tld : [],
        population: c.population,
        flag: c.flags.svg,
        languages: c.languages ? c.languages : [],
        borders: c.borders ? c.borders : [],
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

  getBorderNames(cca3) {
    const borderCountriesList = this.state.countries[cca3].borders;

    let borderCountries = {};

    borderCountriesList.forEach((cc) => {
      borderCountries[cc] = this.state.countries[cc].name;
    });

    return borderCountries;
  }

  render() {
    const countryGrid = (
      <CountryGrid
        darkMode={this.state.darkMode}
        countries={this.state.activeCountries}
        regions={this.state.regions}
        filterNames={this.filterNames}
        filterRegions={this.filterRegions}
      />
    );

    const countryRoutes = Object.keys(this.state.countries).map((e) => (
      <Route
        key={e}
        path={`/${e}`}
        element={
          <CountryDetail
            darkMode={this.state.darkMode}
            country={this.state.countries[e]}
            borders={this.getBorderNames(e)}
          />
        }
      />
    ));

    return (
      <div className={`CountryApp ${this.state.darkMode ? "dark" : "light"}`}>
        <Header
          darkMode={this.state.darkMode}
          toggleDarkMode={this.toggleDarkMode}
        />
        <div className="CountryApp-body">
          <Routes>
            <Route path="/" element={countryGrid} />
            {countryRoutes}
          </Routes>
        </div>
      </div>
    );
  }
}

export default CountryApp;
