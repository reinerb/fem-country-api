import React, { Component } from "react";

class CountrySearch extends Component {
  constructor(props) {
    super(props);

    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value }, () =>
      this.props.filter(this.state.value)
    );
  }

  render() {
    return (
      <input
        className="CountrySearch"
        placeholder="Search for a country"
        id="search"
        name="search"
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
}

export default CountrySearch;
