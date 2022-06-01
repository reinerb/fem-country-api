import CountrySearch from "./CountrySearch";
import RegionFilter from "./RegionFilter";
import CountryList from "./CountryList";
import "../styles/CountryGrid.css";
import React, { Component } from "react";

class CountryGrid extends Component {
  render() {
    return (
      <div>
        <div className="CountryGrid">
          <div className="CountryGrid-filters">
            <CountrySearch
              darkMode={this.props.darkMode}
              filter={this.props.filterNames}
            />
            <RegionFilter
              darkMode={this.props.darkMode}
              regions={this.props.regions}
              filter={this.props.filterRegions}
            />
          </div>
          <CountryList
            countries={this.props.countries}
            darkMode={this.props.darkMode}
          />
        </div>
      </div>
    );
  }
}

export default CountryGrid;
