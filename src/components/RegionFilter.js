import React, { Component } from "react";
import Select from "react-select";
import "../styles/RegionFilter.css";

class RegionFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(v) {
    console.log(v.value);
    this.setState({ value: v.value }, () =>
      this.props.filter(this.state.value)
    );
  }

  render() {
    const options = this.props.regions.map((r) => {
      return { value: r, label: r };
    });
    options.push({ value: "all", label: "All" });

    return (
      <Select
        value={this.state.value}
        onChange={this.handleChange}
        options={options}
        placeholder="Filter by Region"
      />
    );
  }
}

export default RegionFilter;
