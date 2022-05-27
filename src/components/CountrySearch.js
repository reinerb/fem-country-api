import React, { Component } from "react";

class CountrySearch extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return <input className="CountrySearch" onChange={this.handleChange} />;
  }
}

export default CountrySearch;
