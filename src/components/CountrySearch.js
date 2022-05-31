import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../styles/CountrySearch.css";

class CountrySearch extends Component {
  constructor(props) {
    super(props);

    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    library.add(faMagnifyingGlass);
  }

  handleChange(e) {
    this.setState({ value: e.target.value }, () =>
      this.props.filter(this.state.value)
    );
  }

  render() {
    return (
      <div
        className={`CountrySearch ${this.props.darkMode ? "dark" : "light"}`}
      >
        <FontAwesomeIcon icon="magnifying-glass" />
        <input
          className="CountrySearch-field"
          placeholder="Search for a country..."
          id="search"
          name="search"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default CountrySearch;
