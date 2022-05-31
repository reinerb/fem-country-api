import React, { Component } from "react";

class RegionFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value }, () =>
      this.props.filter(this.state.value)
    );
  }

  render() {
    const regionOptions = this.props.regions.map((region) => {
      return (
        <option key={region} value={region}>
          {region}
        </option>
      );
    });

    return (
      <select
        name="Regions"
        value={this.state.value}
        onChange={this.handleChange}
      >
        <option value="" disabled>
          Filter by Region
        </option>
        {regionOptions}
        <option value="all">All regions</option>
      </select>
    );
  }
}

export default RegionFilter;
