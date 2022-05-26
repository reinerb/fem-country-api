import { React, Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGlobe, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import "../styles/Header.css";

class Header extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    library.add(faGlobe, faMoon, faSun);
  }

  handleClick() {
    this.props.toggleDarkMode();
  }

  render() {
    const modeSwitch = (
      <div className="mode-toggle" onClick={this.handleClick}>
        {this.props.darkMode ? (
          <FontAwesomeIcon icon="sun" />
        ) : (
          <FontAwesomeIcon icon="moon" />
        )}
      </div>
    );
    return (
      <header className={`Header ${this.props.darkMode ? "dark" : "light"}`}>
        <h1 className="Header-title">
          <FontAwesomeIcon icon="globe" />
          Where in the world?
        </h1>
        {modeSwitch}
      </header>
    );
  }
}

export default Header;
