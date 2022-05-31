import React, { Component } from "react";
import Select from "react-select";
import "../styles/RegionFilter.css";

class RegionFilter extends Component {
  static defaultProps = {
    lightModeStyles: {
      menu: (provided) => ({
        ...provided,
        backgroundColor: "var(--clr-light-mode-elements)",
        color: "inherit",
        outline: "none",
      }),
      control: (provided) => ({
        ...provided,
        backgroundColor: "var(--clr-light-mode-elements)",
        color: "var(--clr-light-mode-input)",
      }),
      input: (provided) => ({
        ...provided,
        color: "var(--clr-light-mode-text)",
      }),
      option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused
          ? "var(--clr-light-mode-input)"
          : "transparent",
        color: state.isFocused
          ? "var(--clr-dark-mode-text)"
          : "var(--clr-light-mode-text)",
      }),
    },
    darkModeStyles: {
      menu: (provided) => ({
        ...provided,
        backgroundColor: "var(--clr-dark-mode-elements)",
        color: "inherit",
        outline: "none",
      }),
      control: (provided) => ({
        ...provided,
        backgroundColor: "var(--clr-dark-mode-elements)",
        color: "var(--clr-dark-mode-text)",
      }),
      input: (provided) => ({
        ...provided,
        color: "var(--clr-dark-mode-text)",
      }),
      option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused
          ? "var(--clr-dark-mode-bg)"
          : "transparent",
      }),
    },
  };

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
        className="RegionFilter"
        styles={
          this.props.darkMode
            ? this.props.darkModeStyles
            : this.props.lightModeStyles
        }
        value={this.state.value}
        onChange={this.handleChange}
        options={options}
        placeholder="Filter by Region"
      />
    );
  }
}

export default RegionFilter;
